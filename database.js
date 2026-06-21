// NBA CUP - Player Database
// 150+ NBA Legends with stats from their peak seasons

const NBA_TEAMS = [
  { id: 'lakers', name: 'Los Angeles Lakers', abbr: 'LAL', color: '#552583', accent: '#FDB927' },
  { id: 'celtics', name: 'Boston Celtics', abbr: 'BOS', color: '#007A33', accent: '#BA9653' },
  { id: 'bulls', name: 'Chicago Bulls', abbr: 'CHI', color: '#CE1141', accent: '#000000' },
  { id: 'warriors', name: 'Golden State Warriors', abbr: 'GSW', color: '#1D428A', accent: '#FFC72C' },
  { id: 'spurs', name: 'San Antonio Spurs', abbr: 'SAS', color: '#C4CED4', accent: '#000000' },
  { id: 'heat', name: 'Miami Heat', abbr: 'MIA', color: '#98002E', accent: '#F9A01B' },
  { id: 'knicks', name: 'New York Knicks', abbr: 'NYK', color: '#006BB6', accent: '#F58426' },
  { id: 'pistons', name: 'Detroit Pistons', abbr: 'DET', color: '#C8102E', accent: '#1D42BA' },
  { id: 'jazz', name: 'Utah Jazz', abbr: 'UTA', color: '#002B5C', accent: '#00471B' },
  { id: 'suns', name: 'Phoenix Suns', abbr: 'PHX', color: '#1D1160', accent: '#E56020' },
  { id: 'rockets', name: 'Houston Rockets', abbr: 'HOU', color: '#CE1141', accent: '#C4CED4' },
  { id: 'blazers', name: 'Portland Trail Blazers', abbr: 'POR', color: '#E03A3E', accent: '#000000' },
  { id: 'nuggets', name: 'Denver Nuggets', abbr: 'DEN', color: '#0E2240', accent: '#FEC524' },
  { id: '76ers', name: 'Philadelphia 76ers', abbr: 'PHI', color: '#006BB6', accent: '#ED174C' },
  { id: 'bucks', name: 'Milwaukee Bucks', abbr: 'MIL', color: '#00471B', accent: '#EEE1C6' },
  { id: 'cavaliers', name: 'Cleveland Cavaliers', abbr: 'CLE', color: '#860038', accent: '#FDBB30' },
  { id: 'thunder', name: 'Oklahoma City Thunder', abbr: 'OKC', color: '#007AC1', accent: '#EF3B24' },
  { id: 'nets', name: 'Brooklyn Nets', abbr: 'BKN', color: '#000000', accent: '#FFFFFF' },
  { id: 'clippers', name: 'Los Angeles Clippers', abbr: 'LAC', color: '#C8102E', accent: '#1D428A' },
  { id: 'hawks', name: 'Atlanta Hawks', abbr: 'ATL', color: '#E03A3E', accent: '#C1D32F' },
  { id: 'magic', name: 'Orlando Magic', abbr: 'ORL', color: '#0077C0', accent: '#C4CED4' },
  { id: 'kings', name: 'Sacramento Kings', abbr: 'SAC', color: '#5A2D81', accent: '#63727A' },
  { id: 'mavericks', name: 'Dallas Mavericks', abbr: 'DAL', color: '#00538C', accent: '#002B5E' },
  { id: 'pacers', name: 'Indiana Pacers', abbr: 'IND', color: '#002D62', accent: '#FDBB30' },
  // 以下為補齊的 6 支球隊
  { id: 'raptors', name: 'Toronto Raptors', abbr: 'TOR', color: '#CE1141', accent: '#000000' },
  { id: 'grizzlies', name: 'Memphis Grizzlies', abbr: 'MEM', color: '#12173F', accent: '#5D76A9' },
  { id: 'timberwolves', name: 'Minnesota Timberwolves', abbr: 'MIN', color: '#0C2340', accent: '#78BE20' },
  { id: 'pelicans', name: 'New Orleans Pelicans', abbr: 'NOP', color: '#0C2340', accent: '#B4975A' },
  { id: 'hornets', name: 'Charlotte Hornets', abbr: 'CHA', color: '#1D1160', accent: '#00788C' },
  { id: 'wizards', name: 'Washington Wizards', abbr: 'WAS', color: '#002B5C', accent: '#E31837' }
];

const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

const PLAYERS = [

  {
    id: 'al_ferrari_atl_1950s', name: "Al Ferrari", team: 'hawks', decade: '1950s',
    positions: ["SF", "SG"],
    ppg: 6.82, rpg: 2.34, apg: 2.04, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'al_masino_atl_1950s', name: "Al Masino", team: 'hawks', decade: '1950s',
    positions: ["PG"],
    ppg: 5.5, rpg: 2.5, apg: 2.2, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'alex_hannum_atl_1950s', name: "Alex Hannum", team: 'hawks', decade: '1950s',
    positions: ["PF"],
    ppg: 5.08, rpg: 4.27, apg: 1.74, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'bill_calhoun_atl_1950s', name: "Bill Calhoun", team: 'hawks', decade: '1950s',
    positions: ["SF", "SG"],
    ppg: 8.2, rpg: 4.28, apg: 2.97, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'bill_tosheff_atl_1950s', name: "Bill Tosheff", team: 'hawks', decade: '1950s',
    positions: ["PG"],
    ppg: 6.9, rpg: 2.3, apg: 2.8, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'bob_harrison_atl_1950s', name: "Bob Harrison", team: 'hawks', decade: '1950s',
    positions: ["PG", "SG"],
    ppg: 8.99, rpg: 2.78, apg: 3.47, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'bob_pettit_atl_1950s', name: "Bob Pettit", team: 'hawks', decade: '1950s',
    positions: ["C", "PF"],
    ppg: 24.92, rpg: 15.67, apg: 2.6, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'bob_schafer_atl_1950s', name: "Bob Schafer", team: 'hawks', decade: '1950s',
    positions: ["SG"],
    ppg: 4.6, rpg: 1.4, apg: 1.0, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'bob_wilson_atl_1950s', name: "Bob Wilson", team: 'hawks', decade: '1950s',
    positions: ["PG"],
    ppg: 3.7, rpg: 3.3, apg: 1.7, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'cal_christensen_atl_1950s', name: "Cal Christensen", team: 'hawks', decade: '1950s',
    positions: ["SF"],
    ppg: 3.7, rpg: 3.4, apg: 1.4, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'chuck_cooper_atl_1950s', name: "Chuck Cooper", team: 'hawks', decade: '1950s',
    positions: ["PF", "SF"],
    ppg: 7.17, rpg: 4.97, apg: 2.03, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'chuck_share_atl_1950s', name: "Chuck Share", team: 'hawks', decade: '1950s',
    positions: ["C"],
    ppg: 10.2, rpg: 9.9, apg: 1.47, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'cliff_hagan_atl_1950s', name: "Cliff Hagan", team: 'hawks', decade: '1950s',
    positions: ["SF"],
    ppg: 16.59, rpg: 8.32, apg: 2.43, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'clyde_lovellette_atl_1950s', name: "Clyde Lovellette", team: 'hawks', decade: '1950s',
    positions: ["C"],
    ppg: 14.4, rpg: 8.6, apg: 1.3, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'dave_minor_atl_1950s', name: "Dave Minor", team: 'hawks', decade: '1950s',
    positions: ["PG"],
    ppg: 8.0, rpg: 5.3, apg: 2.6, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'dick_mehen_atl_1950s', name: "Dick Mehen", team: 'hawks', decade: '1950s',
    positions: ["PF"],
    ppg: 10.8, rpg: 4.3, apg: 2.6, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'dick_ricketts_atl_1950s', name: "Dick Ricketts", team: 'hawks', decade: '1950s',
    positions: ["C", "PF"],
    ppg: 8.4, rpg: 6.8, apg: 2.8, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'dick_surhoff_atl_1950s', name: "Dick Surhoff", team: 'hawks', decade: '1950s',
    positions: ["PF", "SF"],
    ppg: 4.2, rpg: 2.2, apg: 0.7, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'dike_eddleman_atl_1950s', name: "Dike Eddleman", team: 'hawks', decade: '1950s',
    positions: ["SF"],
    ppg: 12.8, rpg: 4.6, apg: 2.2, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'dillard_crocker_atl_1950s', name: "Dillard Crocker", team: 'hawks', decade: '1950s',
    positions: ["PF"],
    ppg: 6.6, rpg: 2.28, apg: 1.28, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'don_boven_atl_1950s', name: "Don Boven", team: 'hawks', decade: '1950s',
    positions: ["SG"],
    ppg: 9.61, rpg: 4.66, apg: 2.29, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'don_lofgran_atl_1950s', name: "Don Lofgran", team: 'hawks', decade: '1950s',
    positions: ["SF"],
    ppg: 4.9, rpg: 3.0, apg: 1.2, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'don_otten_atl_1950s', name: "Don Otten", team: 'hawks', decade: '1950s',
    positions: ["C"],
    ppg: 10.78, rpg: 6.23, apg: 1.74, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'don_sunderlage_atl_1950s', name: "Don Sunderlage", team: 'hawks', decade: '1950s',
    positions: ["SG"],
    ppg: 11.2, rpg: 3.3, apg: 2.8, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'ed_macauley_atl_1950s', name: "Ed Macauley", team: 'hawks', decade: '1950s',
    positions: ["C", "PF"],
    ppg: 14.4, rpg: 6.04, apg: 2.27, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'frank_selvy_atl_1950s', name: "Frank Selvy", team: 'hawks', decade: '1950s',
    positions: ["SF", "SG"],
    ppg: 13.11, rpg: 4.12, apg: 2.6, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'george_ratkovicz_atl_1950s', name: "George Ratkovicz", team: 'hawks', decade: '1950s',
    positions: ["PF"],
    ppg: 8.76, rpg: 7.27, apg: 2.63, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'hub_reed_atl_1950s', name: "Hub Reed", team: 'hawks', decade: '1950s',
    positions: ["C", "PF"],
    ppg: 5.0, rpg: 4.9, apg: 0.5, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'irv_bemoras_atl_1950s', name: "Irv Bemoras", team: 'hawks', decade: '1950s',
    positions: ["SF"],
    ppg: 6.31, rpg: 2.58, apg: 0.91, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'jack_coleman_atl_1950s', name: "Jack Coleman", team: 'hawks', decade: '1950s',
    positions: ["PF"],
    ppg: 9.64, rpg: 7.97, apg: 2.28, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'jack_mcmahon_atl_1950s', name: "Jack McMahon", team: 'hawks', decade: '1950s',
    positions: ["PG", "SG"],
    ppg: 8.09, rpg: 2.69, apg: 4.37, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'jack_nichols_atl_1950s', name: "Jack Nichols", team: 'hawks', decade: '1950s',
    positions: ["PF"],
    ppg: 14.0, rpg: 7.13, apg: 2.57, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'jack_stephens_atl_1950s', name: "Jack Stephens", team: 'hawks', decade: '1950s',
    positions: ["SG"],
    ppg: 10.3, rpg: 5.2, apg: 2.9, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'johnny_payak_atl_1950s', name: "Johnny Payak", team: 'hawks', decade: '1950s',
    positions: ["SG"],
    ppg: 6.4, rpg: 1.7, apg: 2.1, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'kevin_oshea_atl_1950s', name: "Kevin O'Shea", team: 'hawks', decade: '1950s',
    positions: [],
    ppg: 6.0, rpg: 2.8, apg: 2.3, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'lew_hitch_atl_1950s', name: "Lew Hitch", team: 'hawks', decade: '1950s',
    positions: ["PF"],
    ppg: 7.2, rpg: 8.05, apg: 1.91, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'med_park_atl_1950s', name: "Med Park", team: 'hawks', decade: '1950s',
    positions: ["SF", "SG"],
    ppg: 4.69, rpg: 2.51, apg: 1.16, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'mel_hutchins_atl_1950s', name: "Mel Hutchins", team: 'hawks', decade: '1950s',
    positions: ["C", "PF"],
    ppg: 10.5, rpg: 12.21, apg: 3.06, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'pep_saul_atl_1950s', name: "Pep Saul", team: 'hawks', decade: '1950s',
    positions: ["SG"],
    ppg: 4.4, rpg: 2.1, apg: 1.6, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'red_holzman_atl_1950s', name: "Red Holzman", team: 'hawks', decade: '1950s',
    positions: ["PG"],
    ppg: 3.8, rpg: 0.9, apg: 1.5, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'si_green_atl_1950s', name: "Si Green", team: 'hawks', decade: '1950s',
    positions: ["PG", "SG"],
    ppg: 5.6, rpg: 4.3, apg: 1.1, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'slater_martin_atl_1950s', name: "Slater Martin", team: 'hawks', decade: '1950s',
    positions: ["PG"],
    ppg: 10.97, rpg: 3.95, apg: 4.23, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'stan_miasek_atl_1950s', name: "Stan Miasek", team: 'hawks', decade: '1950s',
    positions: ["SF"],
    ppg: 5.7, rpg: 4.0, apg: 1.3, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'walt_davis_atl_1950s', name: "Walt Davis", team: 'hawks', decade: '1950s',
    positions: ["C", "PF"],
    ppg: 4.9, rpg: 3.3, apg: 0.4, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'win_wilfong_atl_1950s', name: "Win Wilfong", team: 'hawks', decade: '1950s',
    positions: ["PG"],
    ppg: 6.06, rpg: 3.07, apg: 1.59, spg: 0, bpg: 0,
    era: "1950s"
  },
  {
    id: 'al_ferrari_atl_1960s', name: "Al Ferrari", team: 'hawks', decade: '1960s',
    positions: ["SF", "SG"],
    ppg: 7.19, rpg: 2.3, apg: 3.03, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'barney_cable_atl_1960s', name: "Barney Cable", team: 'hawks', decade: '1960s',
    positions: ["PF", "SF"],
    ppg: 8.26, rpg: 6.47, apg: 1.33, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'bevo_nordmann_atl_1960s', name: "Bevo Nordmann", team: 'hawks', decade: '1960s',
    positions: ["C"],
    ppg: 3.09, rpg: 3.16, apg: 0.3, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'bill_bridges_atl_1960s', name: "Bill Bridges", team: 'hawks', decade: '1960s',
    positions: ["PF"],
    ppg: 12.6, rpg: 11.99, apg: 2.73, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'bob_duffy_atl_1960s', name: "Bob Duffy", team: 'hawks', decade: '1960s',
    positions: ["PG"],
    ppg: 3.58, rpg: 0.88, apg: 1.91, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'bob_ferry_atl_1960s', name: "Bob Ferry", team: 'hawks', decade: '1960s',
    positions: ["C", "PF"],
    ppg: 5.9, rpg: 3.8, apg: 0.6, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'bob_pettit_atl_1960s', name: "Bob Pettit", team: 'hawks', decade: '1960s',
    positions: ["C", "PF"],
    ppg: 27.55, rpg: 16.69, apg: 3.3, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'bob_sims_atl_1960s', name: "Bob Sims", team: 'hawks', decade: '1960s',
    positions: ["SG"],
    ppg: 9.7, rpg: 3.4, apg: 3.1, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'chico_vaughn_atl_1960s', name: "Chico Vaughn", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 10.14, rpg: 2.55, apg: 2.41, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'chuck_share_atl_1960s', name: "Chuck Share", team: 'hawks', decade: '1960s',
    positions: ["C"],
    ppg: 4.3, rpg: 5.7, apg: 1.6, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'cleo_hill_atl_1960s', name: "Cleo Hill", team: 'hawks', decade: '1960s',
    positions: ["SG"],
    ppg: 5.5, rpg: 3.1, apg: 2.0, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'cliff_hagan_atl_1960s', name: "Cliff Hagan", team: 'hawks', decade: '1960s',
    positions: ["SF"],
    ppg: 18.62, rpg: 6.31, apg: 3.23, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'clyde_lovellette_atl_1960s', name: "Clyde Lovellette", team: 'hawks', decade: '1960s',
    positions: ["C"],
    ppg: 21.28, rpg: 10.0, apg: 2.12, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'dave_gambee_atl_1960s', name: "Dave Gambee", team: 'hawks', decade: '1960s',
    positions: ["PF", "SF"],
    ppg: 5.0, rpg: 3.7, apg: 0.7, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'dave_piontek_atl_1960s', name: "Dave Piontek", team: 'hawks', decade: '1960s',
    positions: ["PF", "SF"],
    ppg: 5.65, rpg: 3.46, apg: 1.02, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'dennis_hamilton_atl_1960s', name: "Dennis Hamilton", team: 'hawks', decade: '1960s',
    positions: ["PF"],
    ppg: 3.0, rpg: 1.2, apg: 0.3, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'dick_snyder_atl_1960s', name: "Dick Snyder", team: 'hawks', decade: '1960s',
    positions: ["SF", "SG"],
    ppg: 7.54, rpg: 2.22, apg: 1.73, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'don_ohl_atl_1960s', name: "Don Ohl", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 12.39, rpg: 2.14, apg: 2.76, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'fred_lacour_atl_1960s', name: "Fred LaCour", team: 'hawks', decade: '1960s',
    positions: ["PG", "SF"],
    ppg: 6.85, rpg: 3.49, apg: 1.96, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'gene_tormohlen_atl_1960s', name: "Gene Tormohlen", team: 'hawks', decade: '1960s',
    positions: ["C"],
    ppg: 4.42, rpg: 4.13, apg: 0.96, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'george_lehmann_atl_1960s', name: "George Lehmann", team: 'hawks', decade: '1960s',
    positions: ["PG"],
    ppg: 3.25, rpg: 0.8, apg: 1.83, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'gerry_ward_atl_1960s', name: "Gerry Ward", team: 'hawks', decade: '1960s',
    positions: ["SG"],
    ppg: 1.8, rpg: 0.9, apg: 0.9, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'jack_mcmahon_atl_1960s', name: "Jack McMahon", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 3.3, rpg: 1.0, apg: 2.0, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'jeff_mullins_atl_1960s', name: "Jeff Mullins", team: 'hawks', decade: '1960s',
    positions: ["SG"],
    ppg: 5.35, rpg: 1.95, apg: 1.25, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'jim_davis_atl_1960s', name: "Jim Davis", team: 'hawks', decade: '1960s',
    positions: ["C"],
    ppg: 6.5, rpg: 5.12, apg: 0.85, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'jim_washington_atl_1960s', name: "Jim Washington", team: 'hawks', decade: '1960s',
    positions: ["C", "PF", "SF"],
    ppg: 5.9, rpg: 5.4, apg: 0.7, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'joe_caldwell_atl_1960s', name: "Joe Caldwell", team: 'hawks', decade: '1960s',
    positions: ["SF", "SG"],
    ppg: 15.14, rpg: 4.63, apg: 2.73, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'john_barnhill_atl_1960s', name: "John Barnhill", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 8.7, rpg: 3.13, apg: 2.84, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'johnny_mccarthy_atl_1960s', name: "Johnny McCarthy", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 7.89, rpg: 4.02, apg: 4.89, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'larry_foust_atl_1960s', name: "Larry Foust", team: 'hawks', decade: '1960s',
    positions: ["C"],
    ppg: 9.06, rpg: 6.0, apg: 1.18, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'lenny_wilkens_atl_1960s', name: "Lenny Wilkens", team: 'hawks', decade: '1960s',
    positions: ["PG"],
    ppg: 15.48, rpg: 4.95, apg: 5.49, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'lou_hudson_atl_1960s', name: "Lou Hudson", team: 'hawks', decade: '1960s',
    positions: ["SF", "SG"],
    ppg: 18.46, rpg: 5.6, apg: 1.83, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'mike_farmer_atl_1960s', name: "Mike Farmer", team: 'hawks', decade: '1960s',
    positions: ["SF"],
    ppg: 6.47, rpg: 3.88, apg: 1.54, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'paul_silas_atl_1960s', name: "Paul Silas", team: 'hawks', decade: '1960s',
    positions: ["PF"],
    ppg: 7.85, rpg: 8.77, apg: 1.25, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'phil_jordon_atl_1960s', name: "Phil Jordon", team: 'hawks', decade: '1960s',
    positions: ["C", "PF"],
    ppg: 6.5, rpg: 4.4, apg: 1.4, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'richie_guerin_atl_1960s', name: "Richie Guerin", team: 'hawks', decade: '1960s',
    positions: ["SG"],
    ppg: 13.3, rpg: 2.99, apg: 4.61, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'rod_thorn_atl_1960s', name: "Rod Thorn", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 8.8, rpg: 2.4, apg: 1.8, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'shellie_mcmillon_atl_1960s', name: "Shellie McMillon", team: 'hawks', decade: '1960s',
    positions: ["PF", "SF"],
    ppg: 11.8, rpg: 6.3, apg: 1.1, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'si_green_atl_1960s', name: "Si Green", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 7.74, rpg: 4.3, apg: 2.67, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'slater_martin_atl_1960s', name: "Slater Martin", team: 'hawks', decade: '1960s',
    positions: ["PG"],
    ppg: 6.2, rpg: 2.9, apg: 5.2, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'tommy_kron_atl_1960s', name: "Tommy Kron", team: 'hawks', decade: '1960s',
    positions: ["SG"],
    ppg: 2.1, rpg: 1.1, apg: 1.4, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'vern_hatton_atl_1960s', name: "Vern Hatton", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 7.2, rpg: 2.3, apg: 2.2, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'walt_hazzard_atl_1960s', name: "Walt Hazzard", team: 'hawks', decade: '1960s',
    positions: ["PG", "SG"],
    ppg: 11.2, rpg: 3.3, apg: 5.9, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'woody_sauldsberry_atl_1960s', name: "Woody Sauldsberry", team: 'hawks', decade: '1960s',
    positions: ["C", "PF"],
    ppg: 7.18, rpg: 6.05, apg: 0.94, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'zelmo_beaty_atl_1960s', name: "Zelmo Beaty", team: 'hawks', decade: '1960s',
    positions: ["C"],
    ppg: 17.42, rpg: 11.22, apg: 1.53, spg: 0, bpg: 0,
    era: "1960s"
  },
  {
    id: 'armond_hill_atl_1970s', name: "Armond Hill", team: 'hawks', decade: '1970s',
    positions: ["PG"],
    ppg: 8.64, rpg: 2.2, apg: 5.37, spg: 1.33, bpg: 0.17,
    era: "1970s"
  },
  {
    id: 'bill_bridges_atl_1970s', name: "Bill Bridges", team: 'hawks', decade: '1970s',
    positions: ["PF"],
    ppg: 13.05, rpg: 14.61, apg: 3.5, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'bill_willoughby_atl_1970s', name: "Bill Willoughby", team: 'hawks', decade: '1970s',
    positions: ["SF"],
    ppg: 4.78, rpg: 4.52, apg: 0.42, spg: 0.56, bpg: 0.54,
    era: "1970s"
  },
  {
    id: 'bob_christian_atl_1970s', name: "Bob Christian", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 3.37, rpg: 4.0, apg: 0.67, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'bob_kauffman_atl_1970s', name: "Bob Kauffman", team: 'hawks', decade: '1970s',
    positions: ["C", "PF", "SF"],
    ppg: 3.9, rpg: 2.5, apg: 1.1, spg: 0.3, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'butch_beard_atl_1970s', name: "Butch Beard", team: 'hawks', decade: '1970s',
    positions: ["PG"],
    ppg: 7.0, rpg: 1.9, apg: 1.7, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'butch_lee_atl_1970s', name: "Butch Lee", team: 'hawks', decade: '1970s',
    positions: ["PG"],
    ppg: 7.7, rpg: 1.2, apg: 3.4, spg: 1.1, bpg: 0.0,
    era: "1970s"
  },
  {
    id: 'charlie_criss_atl_1970s', name: "Charlie Criss", team: 'hawks', decade: '1970s',
    positions: ["PG"],
    ppg: 8.89, rpg: 1.39, apg: 3.31, spg: 1.15, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'claude_terry_atl_1970s', name: "Claude Terry", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 4.38, rpg: 0.88, apg: 0.85, spg: 0.38, bpg: 0.03,
    era: "1970s"
  },
  {
    id: 'connie_hawkins_atl_1970s', name: "Connie Hawkins", team: 'hawks', decade: '1970s',
    positions: ["PF", "SF"],
    ppg: 8.2, rpg: 6.0, apg: 2.9, spg: 1.1, bpg: 0.6,
    era: "1970s"
  },
  {
    id: 'dale_schlueter_atl_1970s', name: "Dale Schlueter", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 2.9, rpg: 2.7, apg: 0.8, spg: 0.4, bpg: 0.4,
    era: "1970s"
  },
  {
    id: 'dan_roundfield_atl_1970s', name: "Dan Roundfield", team: 'hawks', decade: '1970s',
    positions: ["PF"],
    ppg: 15.3, rpg: 10.8, apg: 1.6, spg: 1.1, bpg: 2.2,
    era: "1970s"
  },
  {
    id: 'dave_newmark_atl_1970s', name: "Dave Newmark", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 4.9, rpg: 2.7, apg: 0.7, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'dean_meminger_atl_1970s', name: "Dean Meminger", team: 'hawks', decade: '1970s',
    positions: ["PG", "SG"],
    ppg: 7.03, rpg: 2.47, apg: 4.22, spg: 1.18, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'don_adams_atl_1970s', name: "Don Adams", team: 'hawks', decade: '1970s',
    positions: ["SF"],
    ppg: 11.38, rpg: 7.01, apg: 1.96, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'don_may_atl_1970s', name: "Don May", team: 'hawks', decade: '1970s',
    positions: ["SF"],
    ppg: 6.88, rpg: 2.66, apg: 0.7, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'don_ohl_atl_1970s', name: "Don Ohl", team: 'hawks', decade: '1970s',
    positions: ["PG", "SG"],
    ppg: 6.2, rpg: 1.1, apg: 1.5, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'dwight_jones_atl_1970s', name: "Dwight Jones", team: 'hawks', decade: '1970s',
    positions: ["C", "PF"],
    ppg: 9.48, rpg: 7.77, apg: 1.51, spg: 0.63, bpg: 0.83,
    era: "1970s"
  },
  {
    id: 'eddie_johnson_atl_1970s', name: "Eddie Johnson", team: 'hawks', decade: '1970s',
    positions: ["SF", "SG"],
    ppg: 13.23, rpg: 2.05, apg: 3.79, spg: 1.45, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'eddie_mast_atl_1970s', name: "Eddie Mast", team: 'hawks', decade: '1970s',
    positions: ["PF"],
    ppg: 2.8, rpg: 3.2, apg: 0.9, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'gary_gregor_atl_1970s', name: "Gary Gregor", team: 'hawks', decade: '1970s',
    positions: ["PF", "SF"],
    ppg: 8.1, rpg: 4.9, apg: 0.8, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'george_trapp_atl_1970s', name: "George Trapp", team: 'hawks', decade: '1970s',
    positions: ["PF"],
    ppg: 9.24, rpg: 4.67, apg: 1.29, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'herb_white_atl_1970s', name: "Herb White", team: 'hawks', decade: '1970s',
    positions: ["PG"],
    ppg: 2.4, rpg: 1.3, apg: 1.2, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'herm_gilliam_atl_1970s', name: "Herm Gilliam", team: 'hawks', decade: '1970s',
    positions: ["PG", "SG"],
    ppg: 12.48, rpg: 4.32, apg: 4.92, spg: 1.76, bpg: 0.25,
    era: "1970s"
  },
  {
    id: 'jack_givens_atl_1970s', name: "Jack Givens", team: 'hawks', decade: '1970s',
    positions: ["SF"],
    ppg: 7.7, rpg: 2.9, apg: 1.1, spg: 1.0, bpg: 0.2,
    era: "1970s"
  },
  {
    id: 'jeff_halliburton_atl_1970s', name: "Jeff Halliburton", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 4.39, rpg: 1.04, apg: 0.78, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'jerry_chambers_atl_1970s', name: "Jerry Chambers", team: 'hawks', decade: '1970s',
    positions: ["SF"],
    ppg: 8.9, rpg: 3.8, apg: 0.9, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'jim_creighton_atl_1970s', name: "Jim Creighton", team: 'hawks', decade: '1970s',
    positions: ["SF"],
    ppg: 1.0, rpg: 1.4, apg: 0.1, spg: 0.1, bpg: 0.3,
    era: "1970s"
  },
  {
    id: 'jim_davis_atl_1970s', name: "Jim Davis", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 10.41, rpg: 7.89, apg: 2.01, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'jim_washington_atl_1970s', name: "Jim Washington", team: 'hawks', decade: '1970s',
    positions: ["C", "PF", "SF"],
    ppg: 10.4, rpg: 9.24, apg: 2.03, spg: 0.67, bpg: 0.76,
    era: "1970s"
  },
  {
    id: 'joe_caldwell_atl_1970s', name: "Joe Caldwell", team: 'hawks', decade: '1970s',
    positions: ["SF", "SG"],
    ppg: 21.1, rpg: 5.0, apg: 3.5, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'joe_meriweather_atl_1970s', name: "Joe Meriweather", team: 'hawks', decade: '1970s',
    positions: ["C", "PF"],
    ppg: 11.1, rpg: 8.1, apg: 1.1, spg: 0.6, bpg: 1.1,
    era: "1970s"
  },
  {
    id: 'john_brown_atl_1970s', name: "John Brown", team: 'hawks', decade: '1970s',
    positions: ["PF", "SF"],
    ppg: 8.26, rpg: 4.81, apg: 1.54, spg: 0.6, bpg: 0.16,
    era: "1970s"
  },
  {
    id: 'john_drew_atl_1970s', name: "John Drew", team: 'hawks', decade: '1970s',
    positions: ["PF", "SF"],
    ppg: 22.0, rpg: 8.47, apg: 1.79, spg: 1.6, bpg: 0.38,
    era: "1970s"
  },
  {
    id: 'john_tschogl_atl_1970s', name: "John Tschogl", team: 'hawks', decade: '1970s',
    positions: ["SF"],
    ppg: 2.14, rpg: 1.32, apg: 0.51, spg: 0.3, bpg: 0.3,
    era: "1970s"
  },
  {
    id: 'john_vallely_atl_1970s', name: "John Vallely", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 4.03, rpg: 0.77, apg: 0.91, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'john_wetzel_atl_1970s', name: "John Wetzel", team: 'hawks', decade: '1970s',
    positions: ["SF", "SG"],
    ppg: 3.66, rpg: 2.11, apg: 1.58, spg: 0.91, bpg: 0.21,
    era: "1970s"
  },
  {
    id: 'ken_charles_atl_1970s', name: "Ken Charles", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 10.67, rpg: 1.82, apg: 3.66, spg: 1.6, bpg: 0.44,
    era: "1970s"
  },
  {
    id: 'larry_siegfried_atl_1970s', name: "Larry Siegfried", team: 'hawks', decade: '1970s',
    positions: ["PG", "SG"],
    ppg: 3.3, rpg: 1.5, apg: 2.5, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'len_chappell_atl_1970s', name: "Len Chappell", team: 'hawks', decade: '1970s',
    positions: ["C", "PF", "SF"],
    ppg: 4.8, rpg: 3.2, apg: 0.4, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'lou_hudson_atl_1970s', name: "Lou Hudson", team: 'hawks', decade: '1970s',
    positions: ["SF", "SG"],
    ppg: 23.41, rpg: 4.66, apg: 3.29, spg: 1.71, bpg: 0.29,
    era: "1970s"
  },
  {
    id: 'mike_sojourner_atl_1970s', name: "Mike Sojourner", team: 'hawks', decade: '1970s',
    positions: ["C", "PF"],
    ppg: 8.69, rpg: 6.49, apg: 0.92, spg: 0.48, bpg: 0.57,
    era: "1970s"
  },
  {
    id: 'ollie_johnson_atl_1970s', name: "Ollie Johnson", team: 'hawks', decade: '1970s',
    positions: ["SF"],
    ppg: 8.5, rpg: 3.2, apg: 1.5, spg: 1.0, bpg: 0.4,
    era: "1970s"
  },
  {
    id: 'pete_maravich_atl_1970s', name: "Pete Maravich", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 24.24, rpg: 4.23, apg: 5.6, spg: 1.5, bpg: 0.2,
    era: "1970s"
  },
  {
    id: 'randy_denton_atl_1970s', name: "Randy Denton", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 5.3, rpg: 4.8, apg: 0.7, spg: 0.3, bpg: 0.4,
    era: "1970s"
  },
  {
    id: 'rick_wilson_atl_1970s', name: "Rick Wilson", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 3.0, rpg: 1.2, apg: 1.2, spg: 0.5, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'ron_behagen_atl_1970s', name: "Ron Behagen", team: 'hawks', decade: '1970s',
    positions: ["PF"],
    ppg: 11.0, rpg: 6.7, apg: 1.3, spg: 1.2, bpg: 0.5,
    era: "1970s"
  },
  {
    id: 'steve_bracey_atl_1970s', name: "Steve Bracey", team: 'hawks', decade: '1970s',
    positions: ["PG", "SG"],
    ppg: 6.91, rpg: 1.71, apg: 2.47, spg: 0.8, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'steve_hawes_atl_1970s', name: "Steve Hawes", team: 'hawks', decade: '1970s',
    positions: ["C", "PF"],
    ppg: 10.82, rpg: 7.7, apg: 2.18, spg: 0.96, bpg: 0.65,
    era: "1970s"
  },
  {
    id: 'terry_furlow_atl_1970s', name: "Terry Furlow", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 9.9, rpg: 2.4, apg: 2.8, spg: 0.6, bpg: 0.4,
    era: "1970s"
  },
  {
    id: 'tom_barker_atl_1970s', name: "Tom Barker", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 8.1, rpg: 6.8, apg: 1.0, spg: 0.6, bpg: 0.7,
    era: "1970s"
  },
  {
    id: 'tom_henderson_atl_1970s', name: "Tom Henderson", team: 'hawks', decade: '1970s',
    positions: ["PG", "SG"],
    ppg: 12.48, rpg: 2.94, apg: 5.22, spg: 1.55, bpg: 0.12,
    era: "1970s"
  },
  {
    id: 'tom_ingelsby_atl_1970s', name: "Tom Ingelsby", team: 'hawks', decade: '1970s',
    positions: ["PG"],
    ppg: 2.7, rpg: 0.9, apg: 0.8, spg: 0.4, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'tom_mcmillen_atl_1970s', name: "Tom McMillen", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 8.31, rpg: 4.95, apg: 0.98, spg: 0.34, bpg: 0.31,
    era: "1970s"
  },
  {
    id: 'tom_van_arsdale_atl_1970s', name: "Tom Van Arsdale", team: 'hawks', decade: '1970s',
    positions: ["SF", "SG"],
    ppg: 14.85, rpg: 2.94, apg: 2.34, spg: 0.95, bpg: 0.05,
    era: "1970s"
  },
  {
    id: 'tony_robertson_atl_1970s', name: "Tony Robertson", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 5.9, rpg: 1.1, apg: 1.6, spg: 1.2, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'tree_rollins_atl_1970s', name: "Tree Rollins", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 8.0, rpg: 7.1, apg: 0.8, spg: 0.65, bpg: 2.9,
    era: "1970s"
  },
  {
    id: 'truck_robinson_atl_1970s', name: "Truck Robinson", team: 'hawks', decade: '1970s',
    positions: ["PF"],
    ppg: 22.4, rpg: 12.8, apg: 2.7, spg: 1.1, bpg: 0.6,
    era: "1970s"
  },
  {
    id: 'walt_bellamy_atl_1970s', name: "Walt Bellamy", team: 'hawks', decade: '1970s',
    positions: ["C"],
    ppg: 15.64, rpg: 12.19, apg: 2.81, spg: 0.7, bpg: 0.6,
    era: "1970s"
  },
  {
    id: 'walt_hazzard_atl_1970s', name: "Walt Hazzard", team: 'hawks', decade: '1970s',
    positions: ["PG", "SG"],
    ppg: 15.9, rpg: 3.85, apg: 6.55, spg: 0, bpg: 0,
    era: "1970s"
  },
  {
    id: 'wilbur_holland_atl_1970s', name: "Wilbur Holland", team: 'hawks', decade: '1970s',
    positions: ["SG"],
    ppg: 5.8, rpg: 1.2, apg: 0.8, spg: 0.6, bpg: 0.1,
    era: "1970s"
  },
  {
    id: 'antoine_carr_atl_1980s', name: "Antoine Carr", team: 'hawks', decade: '1980s',
    positions: ["C", "PF", "SF"],
    ppg: 7.43, rpg: 3.31, apg: 1.07, spg: 0.4, bpg: 0.94,
    era: "1980s"
  },
  {
    id: 'armond_hill_atl_1980s', name: "Armond Hill", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 5.48, rpg: 1.65, apg: 4.9, spg: 1.22, bpg: 0.09,
    era: "1980s"
  },
  {
    id: 'billy_paultz_atl_1980s', name: "Billy Paultz", team: 'hawks', decade: '1980s',
    positions: ["C", "PF"],
    ppg: 2.2, rpg: 2.8, apg: 0.5, spg: 0.2, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'charlie_criss_atl_1980s', name: "Charlie Criss", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 8.43, rpg: 1.47, apg: 3.45, spg: 0.87, bpg: 0.01,
    era: "1980s"
  },
  {
    id: 'chris_washburn_atl_1980s', name: "Chris Washburn", team: 'hawks', decade: '1980s',
    positions: ["C"],
    ppg: 2.0, rpg: 1.9, apg: 0.1, spg: 0.1, bpg: 0.3,
    era: "1980s"
  },
  {
    id: 'cliff_levingston_atl_1980s', name: "Cliff Levingston", team: 'hawks', decade: '1980s',
    positions: ["PF"],
    ppg: 9.25, rpg: 6.58, apg: 0.91, spg: 0.84, bpg: 0.82,
    era: "1980s"
  },
  {
    id: 'craig_shelton_atl_1980s', name: "Craig Shelton", team: 'hawks', decade: '1980s',
    positions: ["SF"],
    ppg: 4.1, rpg: 2.38, apg: 0.47, spg: 0.3, bpg: 0.09,
    era: "1980s"
  },
  {
    id: 'dan_roundfield_atl_1980s', name: "Dan Roundfield", team: 'hawks', decade: '1980s',
    positions: ["PF"],
    ppg: 18.09, rpg: 10.68, apg: 2.59, spg: 1.0, bpg: 1.51,
    era: "1980s"
  },
  {
    id: 'doc_rivers_atl_1980s', name: "Doc Rivers", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 12.6, rpg: 3.51, apg: 7.38, spg: 2.08, bpg: 0.47,
    era: "1980s"
  },
  {
    id: 'dominique_wilkins_atl_1980s', name: "Dominique Wilkins", team: 'hawks', decade: '1980s',
    positions: ["SF"],
    ppg: 26.03, rpg: 6.77, apg: 2.43, spg: 1.46, bpg: 0.73,
    era: "1980s"
  },
  {
    id: 'don_collins_atl_1980s', name: "Don Collins", team: 'hawks', decade: '1980s',
    positions: ["SF", "SG"],
    ppg: 12.7, rpg: 4.0, apg: 2.4, spg: 1.5, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'duane_ferrell_atl_1980s', name: "Duane Ferrell", team: 'hawks', decade: '1980s',
    positions: ["SF"],
    ppg: 2.4, rpg: 1.0, apg: 0.2, spg: 0.2, bpg: 0.1,
    era: "1980s"
  },
  {
    id: 'dudley_bradley_atl_1980s', name: "Dudley Bradley", team: 'hawks', decade: '1980s',
    positions: ["SG"],
    ppg: 1.9, rpg: 0.8, apg: 0.6, spg: 0.4, bpg: 0.1,
    era: "1980s"
  },
  {
    id: 'eddie_johnson_atl_1980s', name: "Eddie Johnson", team: 'hawks', decade: '1980s',
    positions: ["SF", "SG"],
    ppg: 16.34, rpg: 2.38, apg: 5.66, spg: 1.14, bpg: 0.14,
    era: "1980s"
  },
  {
    id: 'freeman_williams_atl_1980s', name: "Freeman Williams", team: 'hawks', decade: '1980s',
    positions: ["SG"],
    ppg: 4.8, rpg: 0.5, apg: 0.8, spg: 0.3, bpg: 0.0,
    era: "1980s"
  },
  {
    id: 'george_johnson_atl_1980s', name: "George Johnson", team: 'hawks', decade: '1980s',
    positions: ["C", "PF", "SF"],
    ppg: 1.7, rpg: 3.2, apg: 0.5, spg: 0.3, bpg: 1.6,
    era: "1980s"
  },
  {
    id: 'gus_williams_atl_1980s', name: "Gus Williams", team: 'hawks', decade: '1980s',
    positions: ["PG", "SG"],
    ppg: 4.2, rpg: 1.2, apg: 4.2, spg: 0.5, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'jack_givens_atl_1980s', name: "Jack Givens", team: 'hawks', decade: '1980s',
    positions: ["SF"],
    ppg: 5.7, rpg: 3.0, apg: 0.7, spg: 0.6, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'jim_mcelroy_atl_1980s', name: "Jim McElroy", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 4.85, rpg: 1.11, apg: 1.82, spg: 0.49, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'john_battle_atl_1980s', name: "John Battle", team: 'hawks', decade: '1980s',
    positions: ["SG"],
    ppg: 7.76, rpg: 1.35, apg: 2.01, spg: 0.48, bpg: 0.08,
    era: "1980s"
  },
  {
    id: 'john_brown_atl_1980s', name: "John Brown", team: 'hawks', decade: '1980s',
    positions: ["PF", "SF"],
    ppg: 3.9, rpg: 2.2, apg: 0.5, spg: 0.1, bpg: 0.1,
    era: "1980s"
  },
  {
    id: 'john_drew_atl_1980s', name: "John Drew", team: 'hawks', decade: '1980s',
    positions: ["PF", "SF"],
    ppg: 19.86, rpg: 5.68, apg: 1.3, spg: 1.16, bpg: 0.17,
    era: "1980s"
  },
  {
    id: 'johnny_davis_atl_1980s', name: "Johnny Davis", team: 'hawks', decade: '1980s',
    positions: ["PG", "SG"],
    ppg: 11.29, rpg: 1.86, apg: 4.81, spg: 0.75, bpg: 0.08,
    era: "1980s"
  },
  {
    id: 'jon_koncak_atl_1980s', name: "Jon Koncak", team: 'hawks', decade: '1980s',
    positions: ["C"],
    ppg: 6.16, rpg: 6.08, apg: 0.59, spg: 0.61, bpg: 1.01,
    era: "1980s"
  },
  {
    id: 'keith_edmonson_atl_1980s', name: "Keith Edmonson", team: 'hawks', decade: '1980s',
    positions: ["SG"],
    ppg: 3.5, rpg: 1.2, apg: 0.7, spg: 0.3, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'kevin_willis_atl_1980s', name: "Kevin Willis", team: 'hawks', decade: '1980s',
    positions: ["C", "PF"],
    ppg: 12.33, rpg: 8.21, apg: 0.53, spg: 0.72, bpg: 0.6,
    era: "1980s"
  },
  {
    id: 'lorenzo_charles_atl_1980s', name: "Lorenzo Charles", team: 'hawks', decade: '1980s',
    positions: ["SF"],
    ppg: 3.4, rpg: 1.1, apg: 0.2, spg: 0.1, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'mark_landsberger_atl_1980s', name: "Mark Landsberger", team: 'hawks', decade: '1980s',
    positions: ["C", "PF"],
    ppg: 1.5, rpg: 3.4, apg: 0.3, spg: 0.2, bpg: 0.1,
    era: "1980s"
  },
  {
    id: 'mike_glenn_atl_1980s', name: "Mike Glenn", team: 'hawks', decade: '1980s',
    positions: ["PG", "SG"],
    ppg: 8.01, rpg: 1.28, apg: 1.91, spg: 0.5, bpg: 0.08,
    era: "1980s"
  },
  {
    id: 'mike_mcgee_atl_1980s', name: "Mike McGee", team: 'hawks', decade: '1980s',
    positions: ["SF", "SG"],
    ppg: 9.67, rpg: 2.02, apg: 1.9, spg: 0.76, bpg: 0.0,
    era: "1980s"
  },
  {
    id: 'moses_malone_atl_1980s', name: "Moses Malone", team: 'hawks', decade: '1980s',
    positions: ["C"],
    ppg: 20.2, rpg: 11.8, apg: 1.4, spg: 1.0, bpg: 1.2,
    era: "1980s"
  },
  {
    id: 'randy_wittman_atl_1980s', name: "Randy Wittman", team: 'hawks', decade: '1980s',
    positions: ["SF", "SG"],
    ppg: 9.98, rpg: 1.72, apg: 2.88, spg: 0.59, bpg: 0.16,
    era: "1980s"
  },
  {
    id: 'ray_tolbert_atl_1980s', name: "Ray Tolbert", team: 'hawks', decade: '1980s',
    positions: ["PF"],
    ppg: 2.1, rpg: 1.8, apg: 0.3, spg: 0.3, bpg: 0.3,
    era: "1980s"
  },
  {
    id: 'reggie_theus_atl_1980s', name: "Reggie Theus", team: 'hawks', decade: '1980s',
    positions: ["PG", "SG"],
    ppg: 15.8, rpg: 3.0, apg: 4.7, spg: 1.3, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'rickey_brown_atl_1980s', name: "Rickey Brown", team: 'hawks', decade: '1980s',
    positions: ["C"],
    ppg: 3.4, rpg: 3.02, apg: 0.38, spg: 0.28, bpg: 0.28,
    era: "1980s"
  },
  {
    id: 'ron_lee_atl_1980s', name: "Ron Lee", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 2.2, rpg: 1.1, apg: 2.2, spg: 0.5, bpg: 0.1,
    era: "1980s"
  },
  {
    id: 'rory_sparrow_atl_1980s', name: "Rory Sparrow", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 11.29, rpg: 2.77, apg: 5.09, spg: 1.21, bpg: 0.13,
    era: "1980s"
  },
  {
    id: 'rudy_macklin_atl_1980s', name: "Rudy Macklin", team: 'hawks', decade: '1980s',
    positions: ["SF"],
    ppg: 6.52, rpg: 2.96, apg: 0.79, spg: 0.55, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'sam_pellom_atl_1980s', name: "Sam Pellom", team: 'hawks', decade: '1980s',
    positions: ["PF"],
    ppg: 4.47, rpg: 3.51, apg: 0.48, spg: 0.45, bpg: 0.8,
    era: "1980s"
  },
  {
    id: 'scott_hastings_atl_1980s', name: "Scott Hastings", team: 'hawks', decade: '1980s',
    positions: ["C", "PF"],
    ppg: 3.14, rpg: 2.46, apg: 0.49, spg: 0.33, bpg: 0.29,
    era: "1980s"
  },
  {
    id: 'sly_williams_atl_1980s', name: "Sly Williams", team: 'hawks', decade: '1980s',
    positions: ["PF", "SF"],
    ppg: 11.14, rpg: 4.6, apg: 2.36, spg: 0.88, bpg: 0.17,
    era: "1980s"
  },
  {
    id: 'spud_webb_atl_1980s', name: "Spud Webb", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 5.99, rpg: 1.65, apg: 4.1, spg: 0.91, bpg: 0.1,
    era: "1980s"
  },
  {
    id: 'steve_hawes_atl_1980s', name: "Steve Hawes", team: 'hawks', decade: '1980s',
    positions: ["C", "PF"],
    ppg: 9.31, rpg: 6.39, apg: 2.07, spg: 0.84, bpg: 0.42,
    era: "1980s"
  },
  {
    id: 'terry_furlow_atl_1980s', name: "Terry Furlow", team: 'hawks', decade: '1980s',
    positions: ["SG"],
    ppg: 8.4, rpg: 2.0, apg: 3.4, spg: 0.9, bpg: 0.4,
    era: "1980s"
  },
  {
    id: 'tom_burleson_atl_1980s', name: "Tom Burleson", team: 'hawks', decade: '1980s',
    positions: ["C"],
    ppg: 3.3, rpg: 3.0, apg: 0.4, spg: 0.3, bpg: 0.6,
    era: "1980s"
  },
  {
    id: 'tom_mcmillen_atl_1980s', name: "Tom McMillen", team: 'hawks', decade: '1980s',
    positions: ["C"],
    ppg: 8.55, rpg: 4.02, apg: 1.28, spg: 0.38, bpg: 0.32,
    era: "1980s"
  },
  {
    id: 'tree_rollins_atl_1980s', name: "Tree Rollins", team: 'hawks', decade: '1980s',
    positions: ["C"],
    ppg: 6.7, rpg: 7.42, apg: 0.67, spg: 0.54, bpg: 2.78,
    era: "1980s"
  },
  {
    id: 'walker_russell_atl_1980s', name: "Walker Russell", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 4.0, rpg: 1.9, apg: 3.1, spg: 0.8, bpg: 0.2,
    era: "1980s"
  },
  {
    id: 'wes_matthews_atl_1980s', name: "Wes Matthews", team: 'hawks', decade: '1980s',
    positions: ["PG"],
    ppg: 8.22, rpg: 1.47, apg: 4.12, spg: 1.16, bpg: 0.1,
    era: "1980s"
  },
  {
    id: 'adam_keefe_atl_1990s', name: "Adam Keefe", team: 'hawks', decade: '1990s',
    positions: ["C", "PF", "SF"],
    ppg: 5.6, rpg: 4.39, apg: 0.78, spg: 0.53, bpg: 0.16,
    era: "1990s"
  },
  {
    id: 'alan_henderson_atl_1990s', name: "Alan Henderson", team: 'hawks', decade: '1990s',
    positions: ["C", "PF", "SF"],
    ppg: 10.02, rpg: 5.39, apg: 0.81, spg: 0.67, bpg: 0.46,
    era: "1990s"
  },
  {
    id: 'alexander_volkov_atl_1990s', name: "Alexander Volkov", team: 'hawks', decade: '1990s',
    positions: ["C"],
    ppg: 6.86, rpg: 2.58, apg: 0, spg: 0, bpg: 0,
    era: "1990s"
  }
]
// Compute team rating from individual player stats
function computePlayerRating(player) {
  if (!player) return 0;
  const offScore = (player.ppg * 1.2) + (player.apg * 0.8) + (player.rpg * 0.5);
  let defScore = (player.spg * 3.0) + (player.bpg * 2.5) + (player.rpg * 0.5);
  
  // Adjust for eras where steals (SPG) and blocks (BPG) were not recorded (pre-1973/74 season)
  const isOldEra = player.spg === 0 && player.bpg === 0 && ['1950s', '1960s', '1970s'].includes(player.decade);
  if (isOldEra) {
    const isBig = player.positions && (player.positions.includes('C') || player.positions.includes('PF'));
    if (isBig) {
      defScore += 7.0; // Boost for elite defensive big men (e.g. Bill Russell, Wilt Chamberlain)
    } else {
      defScore += 4.5; // Boost for guards/forwards
    }
  }

  const combined = offScore + defScore;
  return Math.min(99, Math.max(60, Math.round(60 + combined * 0.7)));
}

function computeTeamRating(players) {
  if (!players || players.length === 0) return 0;
  const activePlayers = players.filter(p => p !== null);
  if (activePlayers.length === 0) return 0;
  const total = activePlayers.reduce((sum, p) => sum + computePlayerRating(p), 0);
  return Math.round(total / activePlayers.length);
}

function getWinRecord(teamRating) {
  // Max rating ~99 => 82-0. Min meaningful rating ~70 => around 20-62
  const base = Math.max(0, Math.min(82, Math.round((teamRating - 65) * 2.5)));
  // Add some randomness
  const variance = Math.floor(Math.random() * 7) - 3;
  const wins = Math.max(0, Math.min(82, base + variance));
  return { wins, losses: 82 - wins };
}

function getPlayersForTeamAndDecade(teamId, decade) {
  return PLAYERS.filter(p => p.team === teamId && p.decade === decade);
}

function getRandomTeam() {
  return NBA_TEAMS[Math.floor(Math.random() * NBA_TEAMS.length)];
}

function getRandomDecade() {
  // Weighted toward decades with more players
  const validDecades = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];
  return validDecades[Math.floor(Math.random() * validDecades.length)];
}

function getTeamById(id) {
  return NBA_TEAMS.find(t => t.id === id);
}


