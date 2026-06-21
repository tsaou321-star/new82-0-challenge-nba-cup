// NBA CUP - Game State Machine & Logic

// ==================== STATE ====================
const state = {
  numTeams: 4,
  teams: [],           // { name, players:[], rating, record }
  currentTeamIdx: 0,
  positions: ['PG', 'SG', 'SF', 'PF', 'C'],
  phase: 'setup',      // setup | draft | results | playoffs | champion
  currentSlotTeam: null,
  currentSlotDecade: null,
  availablePlayers: [],
  selectedPlayer: null,
  activePosition: null,
  draftedPlayerIds: new Set(),
  hasSpun: false,
  hasRerolledTeam: false,
  hasRerolledDecade: false,
  playoffs: {
    bracket: [],       // [{home, away, wins:[homeW,awayW], games:[], done, winner}]
    round: 0,          // 0=semis, 1=finals
    currentMatchup: 0,
    champion: null
  }
};

// ==================== HELPERS ====================
function positionEmoji(pos) {
  const map = { PG: '🔵', SG: '🟠', SF: '🟢', PF: '🟣', C: '🔴' };
  return map[pos] || '⚪';
}

function ratingColor(r) {
  if (r >= 95) return '#ffd700';
  if (r >= 90) return '#ff9500';
  if (r >= 85) return '#4488ff';
  return '#8888aa';
}

function recordString(wins, losses) {
  return `${wins}-${losses}`;
}

function showToast(msg, duration = 2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ==================== SETUP SCREEN ====================
function renderTeamNameInputs(count) {
  const container = document.getElementById('team-names-container');
  container.innerHTML = '';
  
  const defaultNames = [
    "Lakers", "Celtics", "Bulls", "Warriors", "Spurs", 
    "Heat", "Knicks", "Pistons", "Jazz", "Suns"
  ];
  
  for (let i = 0; i < count; i++) {
    const group = document.createElement('div');
    group.className = 'team-name-input-group';
    
    const placeholder = defaultNames[i] || `Team ${i + 1}`;
    group.innerHTML = `
      <label for="team-name-${i}">Team ${i + 1}</label>
      <input type="text" id="team-name-${i}" class="team-name-input" placeholder="${placeholder}" value="${placeholder}" maxLength="25" />
    `;
    container.appendChild(group);
  }
}

function initSetup() {
  showScreen('screen-setup');
  const grid = document.getElementById('team-count-grid');
  grid.innerHTML = '';
  [3, 4, 6, 8, 10].forEach(n => {
    const btn = document.createElement('button');
    btn.className = 'team-count-btn' + (n === state.numTeams ? ' selected' : '');
    btn.innerHTML = `<span class="num">${n}</span><span class="label">Teams</span>`;
    btn.onclick = () => {
      grid.querySelectorAll('.team-count-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.numTeams = n;
      renderTeamNameInputs(n);
    };
    grid.appendChild(btn);
  });

  renderTeamNameInputs(state.numTeams);
  document.getElementById('btn-start-game').onclick = startGame;
}

function startGame() {
  // Create empty team slots with customized team names
  state.teams = Array.from({ length: state.numTeams }, (_, i) => {
    const input = document.getElementById(`team-name-${i}`);
    const name = input && input.value.trim() !== '' ? input.value.trim() : `Team ${i + 1}`;
    return {
      id: i,
      name: name,
      players: [null, null, null, null, null],
      rating: 0,
      record: { wins: 0, losses: 0 }
    };
  });
  state.currentTeamIdx = 0;
  state.draftedPlayerIds.clear();
  state.phase = 'draft';
  state.activePosition = null;
  initDraft();
}

// ==================== DRAFT SCREEN ====================
function initDraft() {
  showScreen('screen-draft');
  state.hasSpun = false;
  state.hasRerolledTeam = false;
  state.hasRerolledDecade = false;

  updateDraftUI();
  updateRerollButtons();
  
  // Set default reels to ---
  document.getElementById('slot-team').textContent = '---';
  document.getElementById('slot-decade').textContent = '---';
  document.getElementById('slot-team-bar').style.background = 'transparent';
  
  // Clear draft buttons container
  document.getElementById('draft-actions-container').innerHTML = '';
  
  // Reset player list area
  document.getElementById('player-list-area').innerHTML = `
    <div class="no-players">
      <div class="emoji">🎰</div>
      <p>Spin the wheel to roll players for your team!</p>
    </div>`;
}

function updateRerollButtons() {
  const btnSpin = document.getElementById('btn-spin');
  const btnRerollTeam = document.getElementById('btn-reroll-team');
  const btnRerollDecade = document.getElementById('btn-reroll-decade');

  btnSpin.disabled = state.hasSpun;
  btnRerollTeam.disabled = !state.hasSpun || state.hasRerolledTeam;
  btnRerollDecade.disabled = !state.hasSpun || state.hasRerolledDecade;
}

function updateDraftUI() {
  const team = state.teams[state.currentTeamIdx];
  const draftedCount = team.players.filter(p => p !== null).length;

  // Phase banner
  document.getElementById('phase-label').textContent = `PHASE 1: DRAFT`;
  document.getElementById('phase-title').textContent =
    `Team ${state.currentTeamIdx + 1} of ${state.numTeams} — Pick ${draftedCount}/5`;
  document.getElementById('phase-desc').textContent =
    `Spin the wheel to roll players. Select a player and choose which empty slot to assign them!`;
  
  // Round label and badge
  document.getElementById('round-label').textContent = `Pick ${draftedCount + 1} of 5`;
  document.getElementById('round-title').textContent = team.name;
  document.getElementById('round-pos-badge').textContent = `🏀 Any Position`;
  document.getElementById('round-pos-badge').style.display = 'inline-block';

  // Progress dots
  const dotsContainer = document.getElementById('phase-progress');
  dotsContainer.innerHTML = '';
  state.teams.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'progress-dot' +
      (i < state.currentTeamIdx ? ' done' : i === state.currentTeamIdx ? ' active' : '');
    dotsContainer.appendChild(dot);
  });

  // Render current roster
  renderRoster(team);

  // Clear selected player
  state.selectedPlayer = null;
}

function getPositionName(pos) {
  const map = { PG: 'Point Guard', SG: 'Shooting Guard', SF: 'Small Forward', PF: 'Power Forward', C: 'Center' };
  return map[pos] || pos;
}

function spinSlots() {
  const teamSlot = document.getElementById('slot-team');
  const decadeSlot = document.getElementById('slot-decade');
  const teamBar = document.getElementById('slot-team-bar');

  teamSlot.textContent = '???';
  decadeSlot.textContent = '???';
  teamSlot.classList.add('spinning');
  decadeSlot.classList.add('spinning');
  document.getElementById('player-list-area').innerHTML =
    '<div class="no-players"><div class="emoji">🎰</div><p>Spinning the wheel...</p></div>';

  state.hasSpun = true;
  updateRerollButtons();
  document.getElementById('draft-actions-container').innerHTML = '';

  const team = state.teams[state.currentTeamIdx];
  const emptyPositions = state.positions.filter((_, i) => team.players[i] === null);

  let iterations = 0;
  const maxIter = 18;
  const interval = setInterval(() => {
    const t = getRandomTeam();
    const d = getRandomDecade();
    teamSlot.textContent = t.name;
    decadeSlot.textContent = d;
    teamBar.style.background = t.accent || t.color;
    iterations++;
    if (iterations >= maxIter) {
      clearInterval(interval);
      // Land on a combo that has players for ANY of the remaining empty positions
      let finalTeam, finalDecade, candidates = [];
      let attempts = 0;
      do {
        finalTeam = getRandomTeam();
        finalDecade = getRandomDecade();
        candidates = getPlayersForTeamAndDecade(finalTeam.id, finalDecade)
          .filter(p => !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));
        attempts++;
      } while (candidates.length === 0 && attempts < 60);

      // Fallback: Pick any team/decade that has eligible players for the empty slots
      if (candidates.length === 0) {
        candidates = PLAYERS.filter(p => !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));
        if (candidates.length > 0) {
          finalTeam = getTeamById(candidates[0].team) || finalTeam;
          finalDecade = candidates[0].decade || finalDecade;
          candidates = getPlayersForTeamAndDecade(finalTeam.id, finalDecade)
            .filter(p => !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));
        }
      }

      state.currentSlotTeam = finalTeam;
      state.currentSlotDecade = finalDecade;

      teamSlot.textContent = finalTeam.name;
      decadeSlot.textContent = finalDecade;
      teamSlot.classList.remove('spinning');
      decadeSlot.classList.remove('spinning');
      teamBar.style.background = `linear-gradient(90deg, ${finalTeam.color}, ${finalTeam.accent})`;

      updateRerollButtons();
      renderPlayerList(candidates);
    }
  }, 80);
}

function rerollTeam() {
  if (!state.hasSpun || state.hasRerolledTeam) return;

  const teamSlot = document.getElementById('slot-team');
  const teamBar = document.getElementById('slot-team-bar');

  teamSlot.textContent = '???';
  teamSlot.classList.add('spinning');
  document.getElementById('player-list-area').innerHTML =
    '<div class="no-players"><div class="emoji">🎰</div><p>Spinning Team...</p></div>';

  state.hasRerolledTeam = true;
  updateRerollButtons();
  document.getElementById('draft-actions-container').innerHTML = '';

  const team = state.teams[state.currentTeamIdx];
  const emptyPositions = state.positions.filter((_, i) => team.players[i] === null);

  let iterations = 0;
  const maxIter = 12;
  const interval = setInterval(() => {
    const t = getRandomTeam();
    teamSlot.textContent = t.name;
    teamBar.style.background = t.accent || t.color;
    iterations++;
    if (iterations >= maxIter) {
      clearInterval(interval);

      // Find a team with eligible players for current decade and any empty pos
      const validTeams = NBA_TEAMS.filter(t => {
        if (t.id === state.currentSlotTeam.id) return false;
        const players = getPlayersForTeamAndDecade(t.id, state.currentSlotDecade);
        return players.some(p => !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));
      });

      let finalTeam;
      if (validTeams.length > 0) {
        finalTeam = validTeams[Math.floor(Math.random() * validTeams.length)];
      } else {
        // Fallback: Pick any team that has eligible players, ignoring decade
        const fallbackTeams = NBA_TEAMS.filter(t => {
          const players = PLAYERS.filter(p => p.team === t.id && !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));
          return players.length > 0;
        });
        if (fallbackTeams.length > 0) {
          finalTeam = fallbackTeams[Math.floor(Math.random() * fallbackTeams.length)];
          const availableDecades = PLAYERS.filter(p => p.team === finalTeam.id && !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos))).map(p => p.decade);
          if (availableDecades.length > 0) {
            state.currentSlotDecade = availableDecades[Math.floor(Math.random() * availableDecades.length)];
            document.getElementById('slot-decade').textContent = state.currentSlotDecade;
          }
        } else {
          finalTeam = getRandomTeam();
        }
      }

      state.currentSlotTeam = finalTeam;
      const candidates = getPlayersForTeamAndDecade(finalTeam.id, state.currentSlotDecade)
        .filter(p => !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));

      state.availablePlayers = candidates;
      teamSlot.textContent = finalTeam.name;
      teamSlot.classList.remove('spinning');
      teamBar.style.background = `linear-gradient(90deg, ${finalTeam.color}, ${finalTeam.accent})`;

      updateRerollButtons();
      renderPlayerList(candidates);
    }
  }, 80);
}

function rerollDecade() {
  if (!state.hasSpun || state.hasRerolledDecade) return;

  const decadeSlot = document.getElementById('slot-decade');

  decadeSlot.textContent = '???';
  decadeSlot.classList.add('spinning');
  document.getElementById('player-list-area').innerHTML =
    '<div class="no-players"><div class="emoji">🎰</div><p>Spinning Decade...</p></div>';

  state.hasRerolledDecade = true;
  updateRerollButtons();
  document.getElementById('draft-actions-container').innerHTML = '';

  const team = state.teams[state.currentTeamIdx];
  const emptyPositions = state.positions.filter((_, i) => team.players[i] === null);

  let iterations = 0;
  const maxIter = 12;
  const interval = setInterval(() => {
    const d = getRandomDecade();
    decadeSlot.textContent = d;
    iterations++;
    if (iterations >= maxIter) {
      clearInterval(interval);

      // Find a decade with eligible players for current team and empty pos
      const validDecades = DECADES.filter(d => {
        if (d === state.currentSlotDecade) return false;
        const players = getPlayersForTeamAndDecade(state.currentSlotTeam.id, d);
        return players.some(p => !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));
      });

      let finalDecade;
      if (validDecades.length > 0) {
        finalDecade = validDecades[Math.floor(Math.random() * validDecades.length)];
      } else {
        // Fallback: Pick any decade that has eligible players, ignoring team
        const fallbackDecades = DECADES.filter(d => {
          const players = PLAYERS.filter(p => p.decade === d && !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));
          return players.length > 0;
        });
        if (fallbackDecades.length > 0) {
          finalDecade = fallbackDecades[Math.floor(Math.random() * fallbackDecades.length)];
          const availableTeams = PLAYERS.filter(p => p.decade === finalDecade && !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos))).map(p => p.team);
          if (availableTeams.length > 0) {
            const teamId = availableTeams[Math.floor(Math.random() * availableTeams.length)];
            state.currentSlotTeam = getTeamById(teamId);
            document.getElementById('slot-team').textContent = state.currentSlotTeam.name;
            document.getElementById('slot-team-bar').style.background = `linear-gradient(90deg, ${state.currentSlotTeam.color}, ${state.currentSlotTeam.accent})`;
          }
        } else {
          finalDecade = getRandomDecade();
        }
      }

      state.currentSlotDecade = finalDecade;
      const candidates = getPlayersForTeamAndDecade(state.currentSlotTeam.id, finalDecade)
        .filter(p => !state.draftedPlayerIds.has(p.id) && p.positions.some(pos => emptyPositions.includes(pos)));

      state.availablePlayers = candidates;
      decadeSlot.textContent = finalDecade;
      decadeSlot.classList.remove('spinning');

      updateRerollButtons();
      renderPlayerList(candidates);
    }
  }, 80);
}

function renderPlayerList(players) {
  const area = document.getElementById('player-list-area');
  const team = state.teams[state.currentTeamIdx];
  const emptyPositions = state.positions.filter((_, i) => team.players[i] === null);

  if (!players || players.length === 0) {
    area.innerHTML = `
      <div class="no-players">
        <div class="emoji">🤷</div>
        <p>No undrafted eligible players found for this combination.<br>Try rerolling!</p>
      </div>`;
    return;
  }

  area.innerHTML = '';
  const list = document.createElement('div');
  list.className = 'player-list';

  players.forEach(player => {
    const r = computePlayerRating(player);
    const card = document.createElement('div');
    card.className = 'player-card';
    const primaryPos = player.positions[0];
    card.innerHTML = `
      <div class="player-avatar">${positionEmoji(primaryPos)}</div>
      <div class="player-info">
        <div class="player-name">${player.name}</div>
        <div class="player-meta">${player.team.toUpperCase()} · ${player.decade} · Eligible: ${player.positions.join(', ')}</div>
        <div class="player-stats">
          <div class="stat-chip">PPG <span>${player.ppg}</span></div>
          <div class="stat-chip">RPG <span>${player.rpg}</span></div>
          <div class="stat-chip">APG <span>${player.apg}</span></div>
          <div class="stat-chip">SPG <span>${player.spg}</span></div>
          <div class="stat-chip">BPG <span>${player.bpg}</span></div>
        </div>
      </div>
      <div class="player-rating" style="color:${ratingColor(r)}">${r}</div>
    `;
    card.onclick = () => {
      list.querySelectorAll('.player-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.selectedPlayer = player;
      
      // Dynamically generate draft actions for each empty eligible position
      const container = document.getElementById('draft-actions-container');
      container.innerHTML = '';
      
      const targetSlots = player.positions.filter(pos => emptyPositions.includes(pos));
      targetSlots.forEach(pos => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-gold';
        btn.style.flex = '1';
        btn.innerHTML = `✅ Draft as ${pos}`;
        btn.onclick = () => {
          confirmPick(player, pos);
        };
        container.appendChild(btn);
      });
    };
    list.appendChild(card);
  });

  area.appendChild(list);
}

function renderRoster(team) {
  const panel = document.getElementById('roster-panel');
  panel.innerHTML = '';

  // Header
  const hdr = document.createElement('div');
  hdr.className = 'roster-header';
  const rating = computeTeamRating(team.players);
  hdr.innerHTML = `
    <div class="roster-title">${team.name}</div>
    <div class="team-rating-badge">⭐ ${rating || '--'}</div>
  `;
  panel.appendChild(hdr);

  // Position slots
  state.positions.forEach((pos, i) => {
    const player = team.players[i];
    const slot = document.createElement('div');
    slot.className = `position-slot ${player ? 'filled' : ''}`;
    slot.style.cursor = player ? 'pointer' : 'default';

    if (player) {
      const r = computePlayerRating(player);
      slot.innerHTML = `
        <div class="pos-badge filled">${pos}</div>
        <div class="pos-info">
          <div class="pos-player-name">${player.name}</div>
          <div class="pos-stats">${player.ppg}pts · ${player.rpg}reb · ${player.apg}ast</div>
          <div style="font-size:0.65rem;color:var(--text-muted);margin-top:2px;">
            Eligible: ${player.positions.join(', ')}
          </div>
        </div>
        <div class="pos-rating" style="color:${ratingColor(r)}">${r}</div>
      `;
      slot.onclick = () => {
        openManageModal(player, pos, i);
      };
    } else {
      slot.innerHTML = `
        <div class="pos-badge">${pos}</div>
        <div class="pos-info">
          <div class="pos-empty">Empty</div>
        </div>
      `;
    }
    panel.appendChild(slot);
  });
}

function confirmPick(player, pos) {
  const team = state.teams[state.currentTeamIdx];
  const posIdx = state.positions.indexOf(pos);
  
  team.players[posIdx] = player;
  state.draftedPlayerIds.add(player.id);
  
  renderRoster(team);
  showToast(`✅ ${player.name} drafted to ${pos}!`);

  setTimeout(() => {
    advanceDraft();
  }, 600);
}

function advanceDraft() {
  const team = state.teams[state.currentTeamIdx];
  const draftedCount = team.players.filter(p => p !== null).length;

  if (draftedCount >= 5) {
    team.rating = computeTeamRating(team.players);
    team.record = getWinRecord(team.rating);

    state.currentTeamIdx++;

    if (state.currentTeamIdx >= state.numTeams) {
      state.phase = 'results';
      showPhase1Results();
      return;
    }

    // Advanced to next team: Reset reroll flags!
    state.hasRerolledTeam = false;
    state.hasRerolledDecade = false;
  }

  state.hasSpun = false;

  // Clear slots cache
  state.currentSlotTeam = null;
  state.currentSlotDecade = null;

  updateDraftUI();
  updateRerollButtons();
  
  document.getElementById('slot-team').textContent = '---';
  document.getElementById('slot-decade').textContent = '---';
  document.getElementById('slot-team-bar').style.background = 'transparent';
  
  // Clear dynamic draft action buttons
  document.getElementById('draft-actions-container').innerHTML = '';
  
  document.getElementById('player-list-area').innerHTML = `
    <div class="no-players">
      <div class="emoji">🎰</div>
      <p>Spin the wheel to roll players for your team!</p>
    </div>`;
}

function openManageModal(player, currentPos, currentIdx) {
  const modal = document.getElementById('modal-manage-player');
  const title = document.getElementById('manage-player-title');
  const posText = document.getElementById('manage-player-positions');
  const container = document.getElementById('manage-actions-container');

  title.textContent = `Manage ${player.name}`;
  posText.textContent = `Eligible Positions: ${player.positions.join(', ')}`;
  container.innerHTML = '';

  const team = state.teams[state.currentTeamIdx];

  player.positions.forEach(targetPos => {
    if (targetPos === currentPos) return;

    const targetIdx = state.positions.indexOf(targetPos);
    if (targetIdx === -1) return;

    const otherPlayer = team.players[targetIdx];
    const btn = document.createElement('button');
    btn.className = 'modal-action-btn';

    if (!otherPlayer) {
      btn.innerHTML = `Move to ${targetPos} <span class="badge">Empty</span>`;
      btn.onclick = () => {
        team.players[targetIdx] = player;
        team.players[currentIdx] = null;
        
        team.rating = computeTeamRating(team.players);
        renderRoster(team);
        
        // Reset player selection to prevent obsolete slot assignments
        state.selectedPlayer = null;
        document.getElementById('draft-actions-container').innerHTML = '';
        document.querySelectorAll('.player-card').forEach(c => c.classList.remove('selected'));
        
        updateDraftUI();
        closeManageModal();
        showToast(`Moved ${player.name} to ${targetPos}`);
      };
      container.appendChild(btn);
    } else {
      const otherCanPlayCurrent = otherPlayer.positions.includes(currentPos);
      if (otherCanPlayCurrent) {
        btn.innerHTML = `Swap with ${otherPlayer.name} (${targetPos}) <span class="badge">Swap</span>`;
        btn.onclick = () => {
          team.players[targetIdx] = player;
          team.players[currentIdx] = otherPlayer;
          
          team.rating = computeTeamRating(team.players);
          renderRoster(team);
          
          // Reset player selection to prevent obsolete slot assignments
          state.selectedPlayer = null;
          document.getElementById('draft-actions-container').innerHTML = '';
          document.querySelectorAll('.player-card').forEach(c => c.classList.remove('selected'));
          
          updateDraftUI();
          closeManageModal();
          showToast(`Swapped ${player.name} and ${otherPlayer.name}`);
        };
        container.appendChild(btn);
      }
    }
  });

  if (container.children.length === 0) {
    const noAction = document.createElement('div');
    noAction.style.cssText = 'text-align:center;font-size:0.85rem;color:var(--text-muted);padding:10px;';
    noAction.textContent = 'No available move or swap positions for this player.';
    container.appendChild(noAction);
  }

  modal.classList.add('active');
}

function closeManageModal() {
  document.getElementById('modal-manage-player').classList.remove('active');
}

// ==================== PHASE 1 RESULTS ====================
function showPhase1Results() {
  showScreen('screen-results');

  // Sort teams by wins desc
  const sorted = [...state.teams].sort((a, b) => b.record.wins - a.record.wins);

  document.getElementById('results-title').textContent =
    `Phase 1 Complete — ${state.numTeams} Teams Ranked`;
  
  // 【優化修正】動態調整副標題的晉級隊數文字說明
  const maxAdvance = Math.min(4, state.numTeams);
  document.getElementById('results-sub').textContent =
    `Top ${maxAdvance} teams advance to the NBA CUP Playoffs!`;

  const grid = document.getElementById('results-grid');
  grid.innerHTML = '';

  sorted.forEach((team, idx) => {
    const seed = idx + 1;
    const isPlayoff = seed <= maxAdvance; // 【優化修正】改為依據最大可晉級數量做判定
    const card = document.createElement('div');
    card.className = `team-result-card ${isPlayoff ? 'qualified' : ''}`;

    const playerRows = state.positions.map((pos, i) => {
      const p = team.players[i];
      if (!p) return '';
      return `<div class="result-player-row">
        <span class="result-pos">${pos}</span>
        <span class="result-pname">${p.name}</span>
        <span class="result-prating">${computePlayerRating(p)}</span>
      </div>`;
    }).join('');

    card.innerHTML = `
      <div class="seed-badge ${isPlayoff ? 'playoff' : ''}">${isPlayoff ? `#${seed} 🏆` : `#${seed}`}</div>
      <div class="result-team-name">${team.name}</div>
      <div class="result-record">${recordString(team.record.wins, team.record.losses)}</div>
      <div class="result-record-sub">Regular Season</div>
      <div class="result-rating">Team Rating: ${team.rating}</div>
      <div class="divider" style="margin-top:12px;"></div>
      <div class="result-players">${playerRows}</div>
      ${isPlayoff ? '<div style="margin-top:12px;font-size:0.72rem;color:var(--gold);font-weight:700;">✓ PLAYOFF BOUND</div>' : ''}
    `;
    grid.appendChild(card);
  });

  // Store sorted reference for playoffs
  state.playoffTeams = sorted.slice(0, maxAdvance); // 【優化修正】最多塞 4 隊，3隊時就塞 3 隊

  document.getElementById('btn-to-playoffs').onclick = initPlayoffs;
}

// ==================== PLAYOFFS ====================
// 【核心 Bug 修復】安全相容 3 隊/4 隊的結構。維持 index 0,1,2 骨架，將 3 隊時不需顯示的 sf2 設為空殼隱藏。
function initPlayoffs() {
  showScreen('screen-playoffs');

  if (state.playoffTeams.length === 3) {
    const [s1, s2, s3] = state.playoffTeams;
    state.playoffs.bracket = [
      {
        id: 'sf1', label: '準決賽 (Best of 7)',
        home: s2, away: s3,
        wins: [0, 0], games: [], done: false, winner: null
      },
      {
        id: 'sf2', label: '輪空保送',
        home: null, away: null, done: true, winner: null // 隱形成空殼，直接設為完成
      },
      {
        id: 'final', label: '🏆 NBA CUP 總決賽 (Best of 7)',
        home: s1, away: null, // #1 種子直接在決賽等準決賽贏家
        wins: [0, 0], games: [], done: false, winner: null
      }
    ];
  } else {
    // 原本 4 隊的預設常規對戰
    const [s1, s2, s3, s4] = state.playoffTeams;
    state.playoffs.bracket = [
      { id: 'sf1', label: 'Semifinal 1', home: s1, away: s4, wins: [0, 0], games: [], done: false, winner: null },
      { id: 'sf2', label: 'Semifinal 2', home: s2, away: s3, wins: [0, 0], games: [], done: false, winner: null },
      { id: 'final', label: '🏆 NBA CUP FINALS', home: null, away: null, wins: [0, 0], games: [], done: false, winner: null }
    ];
  }

  renderPlayoffBracket();
}

// 【核心 Bug 修復】3 隊時將 index 1 的空殼對戰（sf2）隱藏，確保畫面與按鈕完全正常運作。
function renderPlayoffBracket() {
  const container = document.getElementById('bracket-container');
  container.innerHTML = '';

  // 渲染準決賽區域
  const sfSection = document.createElement('div');
  sfSection.className = 'bracket-round';
  sfSection.innerHTML = `<div class="bracket-round-label">${state.playoffTeams.length === 3 ? '準決賽' : 'Semifinals'} — Best of 7</div>`;
  
  // 第一場準決賽永遠顯示
  sfSection.appendChild(buildMatchupCard(state.playoffs.bracket[0]));
  
  // 4 隊時才顯示第二場準決賽，3 隊時直接不畫它
  if (state.playoffTeams.length !== 3) {
    sfSection.appendChild(buildMatchupCard(state.playoffs.bracket[1]));
  }
  container.appendChild(sfSection);

  // 渲染決賽區域（永遠固定在 index 2，保證按鈕連結安全）
  const finalSection = document.createElement('div');
  finalSection.className = 'bracket-round';
  finalSection.innerHTML = `<div class="bracket-round-label">${state.playoffTeams.length === 3 ? '總決賽' : 'NBA CUP Finals'} — Best of 7</div>`;
  finalSection.appendChild(buildMatchupCard(state.playoffs.bracket[2]));
  container.appendChild(finalSection);
}

function buildMatchupCard(matchup) {
  const card = document.createElement('div');
  card.className = `bracket-matchup ${!matchup.done && matchup.home ? 'active' : ''}`;
  card.id = `matchup-${matchup.id}`;

  const homeTeam = matchup.home;
  const awayTeam = matchup.away;
  const [hw, aw] = matchup.wins;

  if (!homeTeam || !awayTeam) {
    // Finals not yet determined
    card.innerHTML = `
      <div class="matchup-header">
        <span class="matchup-series-label">${matchup.label}</span>
        <span class="series-score">TBD</span>
      </div>
      <div style="padding:24px;text-align:center;color:var(--text-muted);font-size:0.9rem;">
        Waiting for Semifinal winners...
      </div>
    `;
    return card;
  }

  const homeIdx = state.playoffTeams.indexOf(homeTeam) + 1;
  const awayIdx = state.playoffTeams.indexOf(awayTeam) + 1;

  // Game dots
  const gameDots = Array.from({ length: 7 }, (_, i) => {
    const game = matchup.games[i];
    if (!game) return `<div class="game-dot pending">G${i+1}</div>`;
    const cls = game.winner === 'home' ? 'win-home' : 'win-away';
    return `<div class="game-dot ${cls}">${game.winner === 'home' ? homeTeam.name[0] : awayTeam.name[0]}</div>`;
  }).join('');

  card.innerHTML = `
    <div class="matchup-header">
      <span class="matchup-series-label">${matchup.label}</span>
      <span class="series-score">${hw} – ${aw}</span>
    </div>
    <div class="matchup-teams">
      <div class="matchup-team home">
        <div class="matchup-seed">#${homeIdx} Seed</div>
        <div class="matchup-team-name">${homeTeam.name}</div>
        <div class="matchup-record">${recordString(homeTeam.record.wins, homeTeam.record.losses)}</div>
        <div class="matchup-rating">Rating: ${homeTeam.rating}</div>
      </div>
      <div class="matchup-vs">VS</div>
      <div class="matchup-team away">
        <div class="matchup-seed">#${awayIdx} Seed</div>
        <div class="matchup-team-name">${awayTeam.name}</div>
        <div class="matchup-record">${recordString(awayTeam.record.wins, awayTeam.record.losses)}</div>
        <div class="matchup-rating">Rating: ${awayTeam.rating}</div>
      </div>
    </div>
    <div class="matchup-games">${gameDots}</div>
    ${matchup.done
      ? `<div class="winner-banner"><span class="winner-text">🏆 ${matchup.winner.name} WINS THE SERIES!</span></div>`
      : `<div class="matchup-actions">
          <button class="btn btn-primary btn-sm" onclick="simulateGame('${matchup.id}')">▶ Simulate Game</button>
          <button class="btn btn-secondary btn-sm" onclick="simulateSeries('${matchup.id}')">⚡ Simulate Series</button>
        </div>`
    }
  `;

  return card;
}

function simulateGame(matchupId) {
  const matchup = state.playoffs.bracket.find(m => m.id === matchupId);
  if (!matchup || matchup.done) return;

  const homeRating = matchup.home.rating;
  const awayRating = matchup.away.rating;
  const diff = homeRating - awayRating;
  const homeWinProb = Math.min(0.95, Math.max(0.05, 0.5 + (diff * 0.03) + 0.05)); // slight home court advantage (+5%)

  // Simulate scores
  const homeBase = 95 + Math.floor(homeRating / 10);
  const awayBase = 95 + Math.floor(awayRating / 10);
  let homeScore = homeBase + Math.floor(Math.random() * 20) - 5;
  let awayScore = awayBase + Math.floor(Math.random() * 20) - 5;

  const homeWins = Math.random() < homeWinProb;
  if (homeWins) {
    if (homeScore <= awayScore) homeScore = awayScore + Math.floor(Math.random() * 8) + 1;
  } else {
    if (awayScore <= homeScore) awayScore = homeScore + Math.floor(Math.random() * 8) + 1;
  }

  const winner = homeWins ? 'home' : 'away';
  matchup.games.push({ winner, homeScore, awayScore });
  if (homeWins) matchup.wins[0]++;
  else matchup.wins[1]++;

  // Show sim overlay
  showSimOverlay(matchup, homeScore, awayScore, () => {
    checkSeriesWinner(matchup);
    renderPlayoffBracket();
  });
}

function simulateSeries(matchupId) {
  const matchup = state.playoffs.bracket.find(m => m.id === matchupId);
  if (!matchup || matchup.done) return;

  while (!matchup.done && matchup.wins[0] < 4 && matchup.wins[1] < 4) {
    const homeRating = matchup.home.rating;
    const awayRating = matchup.away.rating;
    const diff = homeRating - awayRating;
    const homeWinProb = Math.min(0.95, Math.max(0.05, 0.5 + (diff * 0.03) + 0.05)); // slight home court advantage (+5%)
    const homeBase = 95 + Math.floor(homeRating / 10);
    const awayBase = 95 + Math.floor(awayRating / 10);
    let hs = homeBase + Math.floor(Math.random() * 20) - 5;
    let as = awayBase + Math.floor(Math.random() * 20) - 5;
    const hw = Math.random() < homeWinProb;
    if (hw) { if (hs <= as) hs = as + Math.floor(Math.random() * 8) + 1; }
    else { if (as <= hs) as = hs + Math.floor(Math.random() * 8) + 1; }
    matchup.games.push({ winner: hw ? 'home' : 'away', homeScore: hs, awayScore: as });
    if (hw) matchup.wins[0]++; else matchup.wins[1]++;
  }

  checkSeriesWinner(matchup);
  renderPlayoffBracket();

  const seriesWinner = matchup.winner;
  const totalGames = matchup.games.length;
  showToast(`🏆 ${seriesWinner.name} wins the series in ${totalGames} games!`, 3500);
}

// 【核心 Bug 修復】3 隊時，只要 sf1 打完，就直接把贏家送去跟已在決賽等候的 #1 對決（away 位置）。
function checkSeriesWinner(matchup) {
  if (matchup.wins[0] >= 4) {
    matchup.done = true;
    matchup.winner = matchup.home;
  } else if (matchup.wins[1] >= 4) {
    matchup.done = true;
    matchup.winner = matchup.away;
  }

  const sf1 = state.playoffs.bracket[0];
  const sf2 = state.playoffs.bracket[1];
  const finals = state.playoffs.bracket[2]; // 決賽永遠固定是 index 2 

  if (state.playoffTeams.length === 3) {
    // 3 隊判定邏輯
    if (sf1.done && !finals.away) {
      finals.away = sf1.winner;
      showToast(`🎉 總決賽對戰組合確定: ${finals.home.name} vs ${finals.away.name}!`, 3500);
    }
  } else {
    // 原本 4 隊判定邏輯
    if (sf1.done && sf2.done && !finals.home) {
      finals.home = sf1.winner;
      finals.away = sf2.winner;
      showToast(`🎉 Finals set: ${finals.home.name} vs ${finals.away.name}!`, 3500);
    }
  }

  // Check if finals done → champion
  if (matchup.id === 'final' && matchup.done) {
    state.playoffs.champion = matchup.winner;
    setTimeout(() => showChampion(), 1200);
  }
}

// ==================== SIM OVERLAY ====================
function showSimOverlay(matchup, homeScore, awayScore, callback) {
  const overlay = document.createElement('div');
  overlay.className = 'sim-overlay';
  overlay.innerHTML = `
    <div class="sim-card">
      <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:2px;color:var(--text-muted);font-weight:700;margin-bottom:8px;">
        Game ${matchup.games.length} — ${matchup.label}
      </div>
      <div class="sim-scoreboard">
        <div class="sim-team-name" style="text-align:right">${matchup.home.name}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <div class="sim-score" id="sim-home">0</div>
          <div class="sim-dash">–</div>
          <div class="sim-score" id="sim-away">0</div>
        </div>
        <div class="sim-team-name" style="text-align:left">${matchup.away.name}</div>
      </div>
      <div class="sim-bar"><div class="sim-bar-fill" id="sim-bar-fill"></div></div>
      <div class="sim-status" id="sim-status">Tip-off...</div>
    </div>
  `;
  document.body.appendChild(overlay);

  const quarters = ['1st Quarter', '2nd Quarter', '3rd Quarter', '4th Quarter', 'Final'];
  let step = 0;
  const totalSteps = 50;
  const homeEl = overlay.querySelector('#sim-home');
  const awayEl = overlay.querySelector('#sim-away');
  const statusEl = overlay.querySelector('#sim-status');
  const barEl = overlay.querySelector('#sim-bar-fill');

  const interval = setInterval(() => {
    step++;
    const progress = step / totalSteps;
    const h = Math.round(homeScore * Math.min(progress * 1.1, 1));
    const a = Math.round(awayScore * Math.min(progress * 1.1, 1));
    homeEl.textContent = Math.min(h, homeScore);
    awayEl.textContent = Math.min(a, awayScore);
    barEl.style.width = (progress * 100) + '%';

    const qi = Math.floor(progress * 4);
    statusEl.textContent = quarters[Math.min(qi, 4)];

    if (step >= totalSteps) {
      clearInterval(interval);
      homeEl.textContent = homeScore;
      awayEl.textContent = awayScore;
      statusEl.textContent = `Final — ${matchup.wins[0]}-${matchup.wins[1]} in series`;
      const winner = homeScore > awayScore ? matchup.home.name : matchup.away.name;
      homeEl.style.color = homeScore > awayScore ? 'var(--gold)' : 'var(--text-muted)';
      awayEl.style.color = awayScore > homeScore ? 'var(--gold)' : 'var(--text-muted)';

      setTimeout(() => {
        overlay.remove();
        callback();
      }, 1200);
    }
  }, 40);

  overlay.onclick = (e) => {
    if (e.target === overlay) {
      clearInterval(interval);
      overlay.remove();
      callback();
    }
  };
}

// ==================== CHAMPION ====================
function showChampion() {
  showScreen('screen-champion');
  const champion = state.playoffs.champion;
  const finals = state.playoffs.bracket[2];

  document.getElementById('champion-name').textContent = champion.name;
  document.getElementById('champion-record').textContent =
    `${recordString(champion.record.wins, champion.record.losses)} in the regular season`;
  document.getElementById('champion-players').innerHTML =
    state.positions.map((pos, i) => {
      const p = champion.players[i];
      if (!p) return '';
      return `<div class="result-player-row">
        <span class="result-pos">${pos}</span>
        <span class="result-pname">${p.name}</span>
        <span class="result-prating">${computePlayerRating(p)}</span>
      </div>`;
    }).join('');

  const gamesWon = finals.wins[finals.winner === finals.home ? 0 : 1];
  const gamesLost = finals.games.length - gamesWon;
  document.getElementById('champion-series').textContent =
    `Won Finals ${gamesWon}–${gamesLost}`;

  launchConfetti();

  document.getElementById('btn-play-again').onclick = () => {
    // Reset state
    Object.assign(state, {
      numTeams: 4, teams: [], currentTeamIdx: 0,
      phase: 'setup', currentSlotTeam: null, currentSlotDecade: null,
      availablePlayers: [], selectedPlayer: null,
      activePosition: null, // 【優化修正】重玩重置時改為乾淨的 null，避免與 startGame 衝突
      hasSpun: false,
      hasRerolledTeam: false,
      hasRerolledDecade: false,
      playoffs: { bracket: [], round: 0, currentMatchup: 0, champion: null },
      playoffTeams: []
    });
    state.draftedPlayerIds.clear();
    initSetup();
  };
}

function launchConfetti() {
  const colors = ['#ff7c00', '#ffd700', '#ff4455', '#4488ff', '#22cc77', '#fff'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${2 + Math.random() * 3}s;
      animation-delay: ${Math.random() * 1.5}s;
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
    `;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

// ==================== EXPOSE TO HTML ====================
window.simulateGame = simulateGame;
window.simulateSeries = simulateSeries;

// ==================== BOOT ====================
document.addEventListener('DOMContentLoaded', () => {
  // Wire up buttons
  document.getElementById('btn-spin').onclick = spinSlots;
  document.getElementById('btn-reroll-team').onclick = rerollTeam;
  document.getElementById('btn-reroll-decade').onclick = rerollDecade;
  document.getElementById('btn-close-manage').onclick = closeManageModal;

  initSetup();
});