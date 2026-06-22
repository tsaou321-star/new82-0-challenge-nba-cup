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
  { id: 'wizards', name: 'Washington Wizards', abbr: 'WAS', color: '#002B5C', accent: '#E31837' },
];

const DECADES = ['All Time'];

const PLAYERS = [
  // ==================== SAN ANTONIO SPURS (20名) ====================
  {
    id: 'tim_duncan_spurs', name: "Tim Duncan", team: 'spurs', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 25.5, rpg: 12.7, apg: 3.7, spg: 0.7, bpg: 2.5 // 2001-02賽季
  },
  {
    id: 'david_robinson_spurs', name: "David Robinson", team: 'spurs', decade: 'All Time',
    positions: ["C"],
    ppg: 29.8, rpg: 10.7, apg: 4.8, spg: 1.7, bpg: 3.3 // 1993-94賽季
  },
  {
    id: 'george_gervin_spurs', name: "George Gervin", team: 'spurs', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 32.3, rpg: 5.2, apg: 2.6, spg: 1.4, bpg: 1.0 // 1979-80賽季
  },
  {
    id: 'kawhi_leonard_spurs', name: "Kawhi Leonard", team: 'spurs', decade: 'All Time',
    positions: ["SF"],
    ppg: 25.5, rpg: 5.8, apg: 3.5, spg: 1.8, bpg: 0.7 // 2016-17賽季
  },
  {
    id: 'tony_parker_spurs', name: "Tony Parker", team: 'spurs', decade: 'All Time',
    positions: ["PG"],
    ppg: 22.0, rpg: 3.1, apg: 6.9, spg: 0.9, bpg: 0.1 // 2008-09賽季
  },
  {
    id: 'manu_ginobili_spurs', name: "Manu Ginobili", team: 'spurs', decade: 'All Time',
    positions: ["SG"],
    ppg: 19.5, rpg: 4.8, apg: 4.5, spg: 1.5, bpg: 0.4 // 2007-08賽季
  },
  {
    id: 'victor_wembanyama_spurs', name: "Victor Wembanyama", team: 'spurs', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 21.4, rpg: 10.6, apg: 3.9, spg: 1.2, bpg: 3.6 // 2023-24賽季
  },
  {
    id: 'demar_derozan_spurs', name: "DeMar DeRozan", team: 'spurs', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 22.1, rpg: 5.5, apg: 5.6, spg: 1.0, bpg: 0.3 // 2019-20賽季
  },
  {
    id: 'lamarcus_aldridge_spurs', name: "LaMarcus Aldridge", team: 'spurs', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 23.1, rpg: 8.5, apg: 2.0, spg: 0.6, bpg: 1.2 // 2017-18賽季
  },
  {
    id: 'sean_elliott_spurs', name: "Sean Elliott", team: 'spurs', decade: 'All Time',
    positions: ["SF"],
    ppg: 20.0, rpg: 5.1, apg: 2.7, spg: 0.9, bpg: 0.4 // 1995-96賽季
  },
  {
    id: 'larry_kenon_spurs', name: "Larry Kenon", team: 'spurs', decade: 'All Time',
    positions: ["PF"],
    ppg: 22.1, rpg: 9.8, apg: 4.1, spg: 1.4, bpg: 0.2 // 1978-79賽季
  },
  {
    id: 'alvin_robertson_spurs', name: "Alvin Robertson", team: 'spurs', decade: 'All Time',
    positions: ["SG"],
    ppg: 19.6, rpg: 6.1, apg: 5.5, spg: 3.7, bpg: 0.5 // 1987-88賽季
  },
  {
    id: 'bruce_bowen_spurs', name: "Bruce Bowen", team: 'spurs', decade: 'All Time',
    positions: ["SF"],
    ppg: 8.2, rpg: 3.9, apg: 1.5, spg: 0.8, bpg: 0.5 // 2004-05賽季
  },
  {
    id: 'avery_johnson_spurs', name: "Avery Johnson", team: 'spurs', decade: 'All Time',
    positions: ["PG"],
    ppg: 13.4, rpg: 2.5, apg: 9.6, spg: 1.4, bpg: 0.2 // 195-96賽季
  },
  {
    id: 'artis_gilmore_spurs', name: "Artis Gilmore", team: 'spurs', decade: 'All Time',
    positions: ["C"],
    ppg: 18.0, rpg: 12.0, apg: 1.5, spg: 0.5, bpg: 2.3 // 1982-83賽季
  },
  {
    id: 'boris_diaw_spurs', name: "Boris Diaw", team: 'spurs', decade: 'All Time',
    positions: ["PF"],
    ppg: 9.1, rpg: 4.1, apg: 2.8, spg: 0.4, bpg: 0.4 // 2013-14賽季
  },
  {
    id: 'dejounte_murray_spurs', name: "Dejounte Murray", team: 'spurs', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.1, rpg: 8.3, apg: 9.2, spg: 2.0, bpg: 0.3 // 2021-22賽季
  },
  {
    id: 'danny_green_spurs', name: "Danny Green", team: 'spurs', decade: 'All Time',
    positions: ["SG"],
    ppg: 11.7, rpg: 4.2, apg: 2.0, spg: 1.2, bpg: 1.1 // 2014-15賽季
  },
  {
    id: 'robert_horry_spurs', name: "Robert Horry", team: 'spurs', decade: 'All Time',
    positions: ["PF"],
    ppg: 6.0, rpg: 4.2, apg: 1.3, spg: 0.8, bpg: 0.8 // 2004-05賽季
  },
  {
    id: 'patty_mills_spurs', name: "Patty Mills", team: 'spurs', decade: 'All Time',
    positions: ["PG"],
    ppg: 11.6, rpg: 1.8, apg: 2.8, spg: 0.6, bpg: 0.1 // 2019-20賽季
  },

  // ==================== NEW ORLEANS PELICANS (20名) ====================
  {
    id: 'anthony_davis_pelicans', name: "Anthony Davis", team: 'pelicans', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 28.1, rpg: 11.1, apg: 2.3, spg: 1.5, bpg: 2.6 // 2017-18賽季
  },
  {
    id: 'chris_paul_pelicans', name: "Chris Paul", team: 'pelicans', decade: 'All Time',
    positions: ["PG"],
    ppg: 22.8, rpg: 5.5, apg: 11.0, spg: 2.8, bpg: 0.1 // 2008-09賽季 (紐奧良黃蜂時期)
  },
  {
    id: 'zion_williamson_pelicans', name: "Zion Williamson", team: 'pelicans', decade: 'All Time',
    positions: ["PF"],
    ppg: 27.0, rpg: 7.2, apg: 3.7, spg: 0.9, bpg: 0.6 // 2020-21賽季
  },
  {
    id: 'brandon_ingram_pelicans', name: "Brandon Ingram", team: 'pelicans', decade: 'All Time',
    positions: ["SF"],
    ppg: 23.8, rpg: 6.1, apg: 4.2, spg: 1.0, bpg: 0.6 // 2019-20賽季
  },
  {
    id: 'jrue_holiday_pelicans', name: "Jrue Holiday", team: 'pelicans', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 21.2, rpg: 5.0, apg: 7.7, spg: 1.6, bpg: 0.8 // 2018-19賽季
  },
  {
    id: 'demarcus_cousins_pelicans', name: "DeMarcus Cousins", team: 'pelicans', decade: 'All Time',
    positions: ["C"],
    ppg: 25.2, rpg: 12.9, apg: 5.4, spg: 1.6, bpg: 1.6 // 2017-18賽季
  },
  {
    id: 'david_west_pelicans', name: "David West", team: 'pelicans', decade: 'All Time',
    positions: ["PF"],
    ppg: 21.0, rpg: 8.5, apg: 2.3, spg: 0.6, bpg: 0.9 // 2008-09賽季 (紐奧良黃蜂時期)
  },
  {
    id: 'baron_davis_pelicans', name: "Baron Davis", team: 'pelicans', decade: 'All Time',
    positions: ["PG"],
    ppg: 22.9, rpg: 4.3, apg: 7.5, spg: 2.4, bpg: 0.4 // 2003-04賽季 (紐奧良黃蜂時期)
  },
  {
    id: 'cj_mccollum_pelicans', name: "CJ McCollum", team: 'pelicans', decade: 'All Time',
    positions: ["SG"],
    ppg: 24.3, rpg: 4.5, apg: 5.8, spg: 1.3, bpg: 0.0 // 2021-22賽季
  },
  {
    id: 'jonas_valanciunas_pelicans', name: "Jonas Valanciunas", team: 'pelicans', decade: 'All Time',
    positions: ["C"],
    ppg: 17.8, rpg: 11.4, apg: 2.6, spg: 0.6, bpg: 0.8 // 2021-22賽季
  },
  {
    id: 'jamal_mashburn_pelicans', name: "Jamal Mashburn", team: 'pelicans', decade: 'All Time',
    positions: ["SF"],
    ppg: 21.6, rpg: 6.1, apg: 5.6, spg: 1.0, bpg: 0.2 // 2002-03賽季 (紐奧良黃蜂時期)
  },
  {
    id: 'tyreke_evans_pelicans', name: "Tyreke Evans", team: 'pelicans', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 16.6, rpg: 5.3, apg: 6.6, spg: 1.3, bpg: 0.5 // 2014-15賽季
  },
  {
    id: 'ryan_anderson_pelicans', name: "Ryan Anderson", team: 'pelicans', decade: 'All Time',
    positions: ["PF"],
    ppg: 19.8, rpg: 6.5, apg: 0.8, spg: 0.5, bpg: 0.3 // 2013-14賽季
  },
  {
    id: 'eric_gordon_pelicans', name: "Eric Gordon", team: 'pelicans', decade: 'All Time',
    positions: ["SG"],
    ppg: 17.0, rpg: 2.8, apg: 3.3, spg: 1.1, bpg: 0.2 // 2012-13賽季
  },
  {
    id: 'nikola_mirotic_pelicans', name: "Nikola Mirotic", team: 'pelicans', decade: 'All Time',
    positions: ["PF"],
    ppg: 16.7, rpg: 8.3, apg: 1.1, spg: 0.7, bpg: 0.8 // 2018-19賽季
  },
  {
    id: 'tyson_chandler_pelicans', name: "Tyson Chandler", team: 'pelicans', decade: 'All Time',
    positions: ["C"],
    ppg: 11.8, rpg: 11.7, apg: 1.0, spg: 0.6, bpg: 1.1 // 2007-08賽季 (紐奧良黃蜂時期)
  },
  {
    id: 'trevor_ariza_pelicans', name: "Trevor Ariza", team: 'pelicans', decade: 'All Time',
    positions: ["SF"],
    ppg: 11.0, rpg: 5.4, apg: 2.2, spg: 1.6, bpg: 0.4 // 2010-11賽季 (紐奧良黃蜂時期)
  },
  {
    id: 'herb_jones_pelicans', name: "Herb Jones", team: 'pelicans', decade: 'All Time',
    positions: ["SF"],
    ppg: 11.0, rpg: 3.6, apg: 2.6, spg: 1.4, bpg: 0.8 // 2023-24賽季
  },
  {
    id: 'peja_stojakovic_pelicans', name: "Peja Stojakovic", team: 'pelicans', decade: 'All Time',
    positions: ["SF"],
    ppg: 16.4, rpg: 4.3, apg: 1.2, spg: 0.7, bpg: 0.1 // 2007-08賽季 (紐奧良黃蜂時期)
  },
  {
    id: 'julius_randle_pelicans', name: "Julius Randle", team: 'pelicans', decade: 'All Time',
    positions: ["PF"],
    ppg: 21.4, rpg: 8.7, apg: 3.1, spg: 0.7, bpg: 0.6 // 2018-19賽季
  },
  // ==================== HOUSTON ROCKETS (20名) ====================
  {
    id: 'hakeem_olajuwon_rockets', name: "Hakeem Olajuwon", team: 'rockets', decade: 'All Time',
    positions: ["C"],
    ppg: 27.3, rpg: 11.9, apg: 3.6, spg: 1.6, bpg: 3.7 // 1993-94賽季
  },
  {
    id: 'james_harden_rockets', name: "James Harden", team: 'rockets', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 36.1, rpg: 6.6, apg: 7.5, spg: 2.0, bpg: 0.7 // 2018-19賽季
  },
  {
    id: 'moses_malone_rockets', name: "Moses Malone", team: 'rockets', decade: 'All Time',
    positions: ["C"],
    ppg: 31.1, rpg: 14.7, apg: 1.8, spg: 0.9, bpg: 1.5 // 1981-82賽季
  },
  {
    id: 'yao_ming_rockets', name: "Yao Ming", team: 'rockets', decade: 'All Time',
    positions: ["C"],
    ppg: 25.0, rpg: 9.4, apg: 2.0, spg: 0.4, bpg: 2.0 // 2006-07賽季
  },
  {
    id: 'tracy_mcgrady_rockets', name: "Tracy McGrady", team: 'rockets', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 25.7, rpg: 6.2, apg: 5.7, spg: 1.7, bpg: 0.7 // 2004-05賽季
  },
  {
    id: 'elvin_hayes_rockets', name: "Elvin Hayes", team: 'rockets', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 28.7, rpg: 16.6, apg: 2.3, spg: 0.0, bpg: 0.0 // 1970-71賽季 (聖地牙哥火箭時期，無抄截/阻攻)
  },
  {
    id: 'rudy_tomjanovich_rockets', name: "Rudy Tomjanovich", team: 'rockets', decade: 'All Time',
    positions: ["SF"],
    ppg: 24.5, rpg: 9.0, apg: 3.1, spg: 1.1, bpg: 0.8 // 1973-74賽季
  },
  {
    id: 'calvin_murphy_rockets', name: "Calvin Murphy", team: 'rockets', decade: 'All Time',
    positions: ["PG"],
    ppg: 25.6, rpg: 2.2, apg: 7.3, spg: 1.5, bpg: 0.1 // 1977-78賽季
  },
  {
    id: 'clyde_drexler_rockets', name: "Clyde Drexler", team: 'rockets', decade: 'All Time',
    positions: ["SG"],
    ppg: 21.4, rpg: 7.0, apg: 4.4, spg: 1.8, bpg: 0.9 // 1994-95賽季
  },
  {
    id: 'steve_francis_rockets', name: "Steve Francis", team: 'rockets', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.6, rpg: 7.0, apg: 6.4, spg: 1.2, bpg: 0.4 // 2001-02賽季
  },
  {
    id: 'chris_paul_rockets', name: "Chris Paul", team: 'rockets', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.6, rpg: 5.4, apg: 7.9, spg: 1.7, bpg: 0.2 // 2017-18賽季
  },
  {
    id: 'ralph_sampson_rockets', name: "Ralph Sampson", team: 'rockets', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 22.1, rpg: 10.4, apg: 2.7, spg: 1.0, bpg: 2.0 // 1984-85賽季
  },
  {
    id: 'otis_thorpe_rockets', name: "Otis Thorpe", team: 'rockets', decade: 'All Time',
    positions: ["PF"],
    ppg: 17.5, rpg: 10.6, apg: 3.0, spg: 0.6, bpg: 0.5 // 1991-92賽季
  },
  {
    id: 'russell_westbrook_rockets', name: "Russell Westbrook", team: 'rockets', decade: 'All Time',
    positions: ["PG"],
    ppg: 27.2, rpg: 7.9, apg: 7.0, spg: 1.6, bpg: 0.4 // 2019-20賽季
  },
  {
    id: 'cuttino_mobley_rockets', name: "Cuttino Mobley", team: 'rockets', decade: 'All Time',
    positions: ["SG"],
    ppg: 21.7, rpg: 4.1, apg: 2.5, spg: 1.5, bpg: 0.5 // 2001-02賽季
  },
  {
    id: 'luis_scola_rockets', name: "Luis Scola", team: 'rockets', decade: 'All Time',
    positions: ["PF"],
    ppg: 18.3, rpg: 8.2, apg: 2.5, spg: 0.6, bpg: 0.6 // 2010-11賽季
  },
  {
    id: 'shane_battier_rockets', name: "Shane Battier", team: 'rockets', decade: 'All Time',
    positions: ["SF"],
    ppg: 10.1, rpg: 4.1, apg: 2.1, spg: 1.0, bpg: 1.2 // 2006-07賽季
  },
  {
    id: 'alperen_sengun_rockets', name: "Alperen Sengun", team: 'rockets', decade: 'All Time',
    positions: ["C"],
    ppg: 21.1, rpg: 9.3, apg: 5.0, spg: 1.2, bpg: 0.7 // 2023-24賽季
  },
  {
    id: 'robert_horry_rockets', name: "Robert Horry", team: 'rockets', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 12.0, rpg: 5.8, apg: 4.0, spg: 1.6, bpg: 1.5 // 195-96賽季
  },
  {
    id: 'kenny_smith_rockets', name: "Kenny Smith", team: 'rockets', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.7, rpg: 2.1, apg: 7.1, spg: 1.4, bpg: 0.1 // 1990-91賽季
  },

  // ==================== MEMPHIS GRIZZLIES (20名) ====================
  {
    id: 'marc_gasol_grizzlies', name: "Marc Gasol", team: 'grizzlies', decade: 'All Time',
    positions: ["C"],
    ppg: 19.5, rpg: 6.3, apg: 4.6, spg: 0.9, bpg: 1.3 // 2016-17賽季
  },
  {
    id: 'zach_randolph_grizzlies', name: "Zach Randolph", team: 'grizzlies', decade: 'All Time',
    positions: ["PF"],
    ppg: 20.8, rpg: 11.7, apg: 1.8, spg: 1.0, bpg: 0.4 // 2009-10賽季
  },
  {
    id: 'ja_morant_grizzlies', name: "Ja Morant", team: 'grizzlies', decade: 'All Time',
    positions: ["PG"],
    ppg: 27.4, rpg: 5.7, apg: 6.7, spg: 1.2, bpg: 0.3 // 2021-22賽季
  },
  {
    id: 'pau_gasol_grizzlies', name: "Pau Gasol", team: 'grizzlies', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 20.4, rpg: 8.9, apg: 4.6, spg: 0.5, bpg: 2.1 // 2006-07賽季
  },
  {
    id: 'mike_conley_grizzlies', name: "Mike Conley", team: 'grizzlies', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.1, rpg: 3.4, apg: 6.4, spg: 1.3, bpg: 0.3 // 2018-19賽季
  },
  {
    id: 'shareef_abdur_rahim_grizzlies', name: "Shareef Abdur-Rahim", team: 'grizzlies', decade: 'All Time',
    positions: ["PF"],
    ppg: 23.0, rpg: 7.5, apg: 3.4, spg: 1.4, bpg: 1.1 // 1998-99賽季 (溫哥華灰熊時期)
  },
  {
    id: 'jaren_jackson_grizzlies', name: "Jaren Jackson Jr.", team: 'grizzlies', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 22.5, rpg: 5.5, apg: 2.3, spg: 1.2, bpg: 1.6 // 2023-24賽季
  },
  {
    id: 'rudy_gay_grizzlies', name: "Rudy Gay", team: 'grizzlies', decade: 'All Time',
    positions: ["SF"],
    ppg: 20.1, rpg: 5.9, apg: 1.9, spg: 1.5, bpg: 0.8 // 2007-08賽季
  },
  {
    id: 'tony_allen_grizzlies', name: "Tony Allen", team: 'grizzlies', decade: 'All Time',
    positions: ["SG"],
    ppg: 10.0, rpg: 4.6, apg: 1.4, spg: 2.0, bpg: 0.5 // 2014-15賽季
  },
  {
    id: 'desmond_bane_grizzlies', name: "Desmond Bane", team: 'grizzlies', decade: 'All Time',
    positions: ["SG"],
    ppg: 21.5, rpg: 5.0, apg: 4.4, spg: 1.0, bpg: 0.4 // 2022-23賽季
  },
  {
    id: 'shane_battier_grizzlies', name: "Shane Battier", team: 'grizzlies', decade: 'All Time',
    positions: ["SF"],
    ppg: 14.4, rpg: 5.4, apg: 2.8, spg: 1.5, bpg: 1.0 // 2001-02賽季
  },
  {
    id: 'mike_miller_grizzlies', name: "Mike Miller", team: 'grizzlies', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 18.5, rpg: 5.4, apg: 4.3, spg: 0.8, bpg: 0.3 // 2006-07賽季
  },
  {
    id: 'oj_mayo_grizzlies', name: "O.J. Mayo", team: 'grizzlies', decade: 'All Time',
    positions: ["SG"],
    ppg: 18.5, rpg: 3.8, apg: 3.2, spg: 1.1, bpg: 0.2 // 2008-09賽季
  },
  {
    id: 'jason_williams_grizzlies', name: "Jason Williams", team: 'grizzlies', decade: 'All Time',
    positions: ["PG"],
    ppg: 14.8, rpg: 3.0, apg: 8.0, spg: 1.7, bpg: 0.1 // 2001-02賽季
  },
  {
    id: 'dillon_brooks_grizzlies', name: "Dillon Brooks", team: 'grizzlies', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 18.4, rpg: 3.2, apg: 2.8, spg: 1.1, bpg: 0.3 // 2021-22賽季
  },
  {
    id: 'jonas_valanciunas_grizzlies', name: "Jonas Valanciunas", team: 'grizzlies', decade: 'All Time',
    positions: ["C"],
    ppg: 17.1, rpg: 12.5, apg: 1.8, spg: 0.6, bpg: 0.9 // 2020-21賽季
  },
  {
    id: 'tyus_jones_grizzlies', name: "Tyus Jones", team: 'grizzlies', decade: 'All Time',
    positions: ["PG"],
    ppg: 10.3, rpg: 2.5, apg: 5.2, spg: 1.0, bpg: 0.1 // 2022-23賽季
  },
  {
    id: 'lorenzen_wright_grizzlies', name: "Lorenzen Wright", team: 'grizzlies', decade: 'All Time',
    positions: ["C"],
    ppg: 12.0, rpg: 9.4, apg: 1.1, spg: 0.7, bpg: 1.7 // 2001-02賽季
  },
  {
    id: 'stromile_swift_grizzlies', name: "Stromile Swift", team: 'grizzlies', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 11.8, rpg: 6.3, apg: 0.7, spg: 0.8, bpg: 1.7 // 2001-02賽季
  },
  {
    id: 'marcus_smart_grizzlies', name: "Marcus Smart", team: 'grizzlies', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 14.5, rpg: 2.7, apg: 4.3, spg: 2.1, bpg: 0.3 // 2023-24賽季
  },
  //  Boston Celtics  //  
  {
    id: 'bill_russell_celtics', name: "Bill Russell", team: 'celtics', decade: 'All Time',
    positions: ["C"],
    ppg: 18.9, rpg: 24.1, apg: 4.7, spg: 0.0, bpg: 0.0 // 1961-62賽季 (當時未統計抄截/阻攻)
  },
  {
    id: 'larry_bird_celtics', name: "Larry Bird", team: 'celtics', decade: 'All Time',
    positions: ["SF","PF"],
    ppg: 28.7, rpg: 10.5, apg: 6.6, spg: 1.6, bpg: 1.2 // 1984-85賽季
  },
  {
    id: 'john_havlicek_celtics', name: "John Havlicek", team: 'celtics', decade: 'All Time',
    positions: ["SF","SG"],
    ppg: 28.9, rpg: 9.0, apg: 7.5, spg: 0.0, bpg: 0.0 // 1970-71賽季 (當時未統計抄截/阻攻)
  },
  {
    id: 'bob_cousy_celtics', name: "Bob Cousy", team: 'celtics', decade: 'All Time',
    positions: ["PG"],
    ppg: 20.6, rpg: 4.8, apg: 7.5, spg: 0.0, bpg: 0.0 // 1956-57賽季 (當時未統計抄截/阻攻)
  },
  {
    id: 'paul_pierce_celtics', name: "Paul Pierce", team: 'celtics', decade: 'All Time',
    positions: ["SF"],
    ppg: 26.8, rpg: 6.9, apg: 3.2, spg: 1.9, bpg: 1.0 // 2001-02賽季
  },
  {
    id: 'kevin_mchale_celtics', name: "Kevin McHale", team: 'celtics', decade: 'All Time',
    positions: ["PF","C"],
    ppg: 26.1, rpg: 9.9, apg: 2.6, spg: 0.5, bpg: 2.2 // 1986-87賽季
  },
  {
    id: 'robert_parish_celtics', name: "Robert Parish", team: 'celtics', decade: 'All Time',
    positions: ["C"],
    ppg: 19.9, rpg: 10.8, apg: 1.8, spg: 0.8, bpg: 2.4 // 1981-82賽季
  },
  {
    id: 'sam_jones_celtics', name: "Sam Jones", team: 'celtics', decade: 'All Time',
    positions: ["SG"],
    ppg: 25.9, rpg: 5.1, apg: 2.8, spg: 0.0, bpg: 0.0 // 1964-65賽季 (當時未統計抄截/阻攻)
  },
  {
    id: 'dave_cowens_celtics', name: "Dave Cowens", team: 'celtics', decade: 'All Time',
    positions: ["C","PF"],
    ppg: 20.5, rpg: 16.2, apg: 4.1, spg: 0.0, bpg: 0.0 // 1972-73賽季 (當時未統計抄截/阻攻)
  },
  {
    id: 'jayson_tatum_celtics', name: "Jayson Tatum", team: 'celtics', decade: 'All Time',
    positions: ["SF","PF"],
    ppg: 30.1, rpg: 8.8, apg: 4.6, spg: 1.1, bpg: 0.7 // 2022-23賽季
  },
  {
    id: 'jaylen_brown_celtics', name: "Jaylen Brown", team: 'celtics', decade: 'All Time',
    positions: ["SG","SF"],
    ppg: 26.6, rpg: 6.9, apg: 3.5, spg: 1.1, bpg: 0.4 // 2022-23賽季
  },
  {
    id: 'kevin_garnett_celtics', name: "Kevin Garnett", team: 'celtics', decade: 'All Time',
    positions: ["PF"],
    ppg: 18.8, rpg: 9.2, apg: 3.4, spg: 1.4, bpg: 1.3 // 2007-08賽季 (塞爾提克時期最佳賽季)
  },
  {
    id: 'ray_allen_celtics', name: "Ray Allen", team: 'celtics', decade: 'All Time',
    positions: ["SG"],
    ppg: 18.2, rpg: 3.5, apg: 2.8, spg: 0.9, bpg: 0.2 // 2008-09賽季 (塞爾提克時期最佳賽季)
  },
  {
    id: 'tom_heinsohn_celtics', name: "Tom Heinsohn", team: 'celtics', decade: 'All Time',
    positions: ["PF","SF"],
    ppg: 22.1, rpg: 9.8, apg: 2.1, spg: 0.0, bpg: 0.0 // 1961-62賽季 (當時未統計抄截/阻攻)
  },
  {
    id: 'jo_jo_white_celtics', name: "Jo Jo White", team: 'celtics', decade: 'All Time',
    positions: ["PG"],
    ppg: 23.1, rpg: 5.0, apg: 5.4, spg: 1.3, bpg: 0.2 // 1971-72賽季 (含後期抄截/阻攻估算)
  },
  {
    id: 'bill_sharman_celtics', name: "Bill Sharman", team: 'celtics', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.3, rpg: 4.7, apg: 2.7, spg: 0.0, bpg: 0.0 // 1957-58賽季 (當時未統計抄截/阻攻)
  },
  {
    id: 'cedric_maxwell_celtics', name: "Cedric Maxwell", team: 'celtics', decade: 'All Time',
    positions: ["SF"],
    ppg: 19.0, rpg: 9.9, apg: 2.9, spg: 1.2, bpg: 0.9 // 1978-79賽季
  },
  {
    id: 'dennis_johnson_celtics', name: "Dennis Johnson", team: 'celtics', decade: 'All Time',
    positions: ["PG","SG"],
    ppg: 15.7, rpg: 4.3, apg: 6.8, spg: 1.2, bpg: 0.5 // 1984-85賽季 (塞爾提克時期最佳賽季)
  },
  {
    id: 'danny_ainge_celtics', name: "Danny Ainge", team: 'celtics', decade: 'All Time',
    positions: ["SG"],
    ppg: 15.7, rpg: 3.1, apg: 6.2, spg: 1.4, bpg: 0.2 // 1987-88賽季
  },
  {
    id: 'rajon_rondo_celtics', name: "Rajon Rondo", team: 'celtics', decade: 'All Time',
    positions: ["PG"],
    ppg: 13.7, rpg: 5.6, apg: 11.1, spg: 1.8, bpg: 0.2 // 2012-13賽季
  },
  //  Brooklyn Nets  //  
  {
    id: 'jason_kidd_nets', name: "Jason Kidd", team: 'nets', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.7, rpg: 6.3, apg: 8.9, spg: 2.2, bpg: 0.3 // 2002-03賽季
  },
  {
    id: 'julius_erving_nets', name: "Julius Erving", team: 'nets', decade: 'All Time',
    positions: ["SF"],
    ppg: 29.3, rpg: 11.0, apg: 5.0, spg: 2.5, bpg: 2.1 // 1975-76賽季 (ABA)
  },
  {
    id: 'brook_lopez_nets', name: "Brook Lopez", team: 'nets', decade: 'All Time',
    positions: ["C"],
    ppg: 20.7, rpg: 7.4, apg: 1.6, spg: 0.5, bpg: 2.1 // 2015-16賽季
  },
  {
    id: 'buck_williams_nets', name: "Buck Williams", team: 'nets', decade: 'All Time',
    positions: ["PF"],
    ppg: 18.2, rpg: 12.3, apg: 2.0, spg: 1.0, bpg: 1.4 // 1984-85賽季
  },
  {
    id: 'vince_carter_nets', name: "Vince Carter", team: 'nets', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 27.5, rpg: 5.9, apg: 4.7, spg: 1.5, bpg: 0.6 // 2004-05賽季
  },
  {
    id: 'kevin_durant_nets', name: "Kevin Durant", team: 'nets', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 29.9, rpg: 7.4, apg: 6.4, spg: 0.9, bpg: 0.9 // 2021-22賽季
  },
  {
    id: 'drazen_petrovic_nets', name: "Dražen Petrović", team: 'nets', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.3, rpg: 2.7, apg: 3.5, spg: 1.3, bpg: 0.2 // 1992-93賽季
  },
  {
    id: 'derrick_coleman_nets', name: "Derrick Coleman", team: 'nets', decade: 'All Time',
    positions: ["PF"],
    ppg: 20.7, rpg: 11.2, apg: 3.6, spg: 0.9, bpg: 1.8 // 1992-93賽季
  },
  {
    id: 'richard_jefferson_nets', name: "Richard Jefferson", team: 'nets', decade: 'All Time',
    positions: ["SF"],
    ppg: 22.6, rpg: 4.2, apg: 3.1, spg: 0.9, bpg: 0.3 // 2007-08賽季
  },
  {
    id: 'kyrie_irving_nets', name: "Kyrie Irving", team: 'nets', decade: 'All Time',
    positions: ["PG"],
    ppg: 27.4, rpg: 5.1, apg: 5.3, spg: 1.3, bpg: 0.5 // 2022-23賽季
  },
  {
    id: 'deron_williams_nets', name: "Deron Williams", team: 'nets', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.0, rpg: 3.3, apg: 8.7, spg: 1.2, bpg: 0.4 // 2011-12賽季
  },
  {
    id: 'kenyon_martin_nets', name: "Kenyon Martin", team: 'nets', decade: 'All Time',
    positions: ["PF"],
    ppg: 16.7, rpg: 9.5, apg: 2.5, spg: 1.5, bpg: 1.3 // 2003-04賽季
  },
  {
    id: 'john_williamson_nets', name: "John Williamson", team: 'nets', decade: 'All Time',
    positions: ["SG"],
    ppg: 29.5, rpg: 3.2, apg: 2.5, spg: 1.4, bpg: 0.4 // 1977-78賽季
  },
  {
    id: 'bill_melchionni_nets', name: "Bill Melchionni", team: 'nets', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.1, rpg: 2.9, apg: 8.3, spg: 1.1, bpg: 0.1 // 1971-72賽季 (ABA)
  },
  {
    id: 'stephon_marbury_nets', name: "Stephon Marbury", team: 'nets', decade: 'All Time',
    positions: ["PG"],
    ppg: 23.9, rpg: 3.1, apg: 7.6, spg: 1.2, bpg: 0.1 // 2000-01賽季
  },
  {
    id: 'kenny_anderson_nets', name: "Kenny Anderson", team: 'nets', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.8, rpg: 3.9, apg: 9.6, spg: 1.9, bpg: 0.2 // 1993-94賽季
  },
  {
    id: 'rick_barry_nets', name: "Rick Barry", team: 'nets', decade: 'All Time',
    positions: ["SF"],
    ppg: 31.5, rpg: 7.5, apg: 4.1, spg: 1.8, bpg: 0.5 // 1971-72賽季 (ABA)
  },
  {
    id: 'bernard_king_nets', name: "Bernard King", team: 'nets', decade: 'All Time',
    positions: ["SF"],
    ppg: 24.2, rpg: 8.6, apg: 2.4, spg: 1.5, bpg: 0.5 // 1977-78賽季
  },
  {
    id: 'joe_johnson_nets', name: "Joe Johnson", team: 'nets', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 16.3, rpg: 3.0, apg: 3.5, spg: 0.7, bpg: 0.1 // 2012-13賽季
  },
  {
    id: 'keith_van_horn_nets', name: "Keith Van Horn", team: 'nets', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 21.8, rpg: 8.5, apg: 1.5, spg: 1.0, bpg: 1.3 // 1998-99賽季
  },
  //  New York Knicks  //  
  {
    id: 'patrick_ewing_knicks', name: "Patrick Ewing", team: 'knicks', decade: 'All Time',
    positions: ["C"],
    ppg: 28.6, rpg: 10.9, apg: 2.2, spg: 1.0, bpg: 4.0 // 1989-90賽季
  },
  {
    id: 'walt_frazier_knicks', name: "Walt Frazier", team: 'knicks', decade: 'All Time',
    positions: ["PG"],
    ppg: 23.2, rpg: 6.7, apg: 6.7, spg: 1.7, bpg: 0.2 // 1971-72賽季（抄截火鍋自73-74起計，此處為生涯最佳推估或同期最高）
  },
  {
    id: 'willis_reed_knicks', name: "Willis Reed", team: 'knicks', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 21.7, rpg: 13.9, apg: 2.0, spg: 0.6, bpg: 1.1 // 1969-70賽季
  },
  {
    id: 'jalen_brunson_knicks', name: "Jalen Brunson", team: 'knicks', decade: 'All Time',
    positions: ["PG"],
    ppg: 28.7, rpg: 3.6, apg: 6.7, spg: 0.9, bpg: 0.2 // 2023-24賽季
  },
  {
    id: 'dave_debusschere_knicks', name: "Dave DeBusschere", team: 'knicks', decade: 'All Time',
    positions: ["PF"],
    ppg: 16.3, rpg: 11.3, apg: 3.6, spg: 0.9, bpg: 0.5 // 1972-73賽季
  },
  {
    id: 'bernard_king_knicks', name: "Bernard King", team: 'knicks', decade: 'All Time',
    positions: ["SF"],
    ppg: 32.9, rpg: 5.8, apg: 3.7, spg: 1.3, bpg: 0.3 // 1984-85賽季
  },
  {
    id: 'carmelo_anthony_knicks', name: "Carmelo Anthony", team: 'knicks', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 28.7, rpg: 6.9, apg: 2.6, spg: 0.8, bpg: 0.5 // 2012-13賽季
  },
  {
    id: 'earl_monroe_knicks', name: "Earl Monroe", team: 'knicks', decade: 'All Time',
    positions: ["SG"],
    ppg: 19.9, rpg: 2.9, apg: 4.8, spg: 1.2, bpg: 0.3 // 1976-77賽季
  },
  {
    id: 'bill_bradley_knicks', name: "Bill Bradley", team: 'knicks', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 16.1, rpg: 3.7, apg: 4.5, spg: 0.4, bpg: 0.1 // 1972-73賽季
  },
  {
    id: 'dick_barnett_knicks', name: "Dick Barnett", team: 'knicks', decade: 'All Time',
    positions: ["SG"],
    ppg: 18.0, rpg: 3.4, apg: 4.1, spg: 0.0, bpg: 0.0 // 1967-68賽季（此時期無抄截火鍋統計）
  },
  {
    id: 'allan_houston_knicks', name: "Allan Houston", team: 'knicks', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.5, rpg: 2.8, apg: 2.7, spg: 0.7, bpg: 0.1 // 2002-03賽季
  },
  {
    id: 'charles_oakley_knicks', name: "Charles Oakley", team: 'knicks', decade: 'All Time',
    positions: ["PF"],
    ppg: 11.8, rpg: 11.3, apg: 2.3, spg: 1.1, bpg: 0.2 // 1993-94賽季
  },
  {
    id: 'john_starks_knicks', name: "John Starks", team: 'knicks', decade: 'All Time',
    positions: ["SG"],
    ppg: 19.0, rpg: 3.1, apg: 5.9, spg: 1.6, bpg: 0.1 // 1993-94賽季
  },
  {
    id: 'latrell_sprewell_knicks', name: "Latrell Sprewell", team: 'knicks', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 19.4, rpg: 4.5, apg: 3.1, spg: 1.4, bpg: 0.1 // 2000-01賽季
  },
  {
    id: 'harry_gallatin_knicks', name: "Harry Gallatin", team: 'knicks', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 15.0, rpg: 15.3, apg: 2.0, spg: 0.0, bpg: 0.0 // 1953-54賽季（此時期無抄截火鍋統計）
  },
  {
    id: 'dick_mcguire_knicks', name: "Dick McGuire", team: 'knicks', decade: 'All Time',
    positions: ["PG"],
    ppg: 9.2, rpg: 5.2, apg: 6.3, spg: 0.0, bpg: 0.0 // 1951-52賽季（此時期無抄截火鍋統計）
  },
  {
    id: 'carl_braun_knicks', name: "Carl Braun", team: 'knicks', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 16.5, rpg: 4.0, apg: 3.8, spg: 0.0, bpg: 0.0 // 1957-58賽季（此時期無抄截火鍋統計）
  },
  {
    id: 'richie_guerin_knicks', name: "Richie Guerin", team: 'knicks', decade: 'All Time',
    positions: ["SG"],
    ppg: 29.5, rpg: 6.4, apg: 6.9, spg: 0.0, bpg: 0.0 // 1961-62賽季（此時期無抄截火鍋統計）
  },
  {
    id: 'julius_randle_knicks', name: "Julius Randle", team: 'knicks', decade: 'All Time',
    positions: ["PF"],
    ppg: 25.1, rpg: 10.0, apg: 4.1, spg: 0.6, bpg: 0.3 // 2022-23賽季
  },
  {
    id: 'karl_anthony_towns_knicks', name: "Karl-Anthony Towns", team: 'knicks', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 26.2, rpg: 12.4, apg: 3.1, spg: 0.7, bpg: 0.7 // 2024-25賽季
  },
  //  Philadelphia 76ers  // 
  {
    id: 'julius_erving_76ers', name: "Julius Erving", team: '76ers', decade: 'All Time',
    positions: ["SF"],
    ppg: 26.9, rpg: 7.4, apg: 4.6, spg: 2.2, bpg: 1.8 // 1979-80賽季
  },
  {
    id: 'allen_iverson_76ers', name: "Allen Iverson", team: '76ers', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 33.0, rpg: 3.2, apg: 7.4, spg: 1.9, bpg: 0.1 // 2005-06賽季
  },
  {
    id: 'wilt_chamberlain_76ers', name: "Wilt Chamberlain", team: '76ers', decade: 'All Time',
    positions: ["C"],
    ppg: 33.5, rpg: 24.6, apg: 5.2, spg: 0, bpg: 0 // 1965-66賽季（當時無抄截阻攻統計）
  },
  {
    id: 'charles_barkley_76ers', name: "Charles Barkley", team: '76ers', decade: 'All Time',
    positions: ["PF"],
    ppg: 28.3, rpg: 11.9, apg: 3.2, spg: 1.3, bpg: 1.3 // 1987-88賽季
  },
  {
    id: 'moses_malone_76ers', name: "Moses Malone", team: '76ers', decade: 'All Time',
    positions: ["C"],
    ppg: 24.5, rpg: 15.3, apg: 1.3, spg: 1.1, bpg: 2.0 // 1982-83賽季
  },
  {
    id: 'hal_greer_76ers', name: "Hal Greer", team: '76ers', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 24.1, rpg: 5.4, apg: 2.8, spg: 0, bpg: 0 // 1967-68賽季（當時無抄截阻攻統計）
  },
  {
    id: 'joel_embiid_76ers', name: "Joel Embiid", team: '76ers', decade: 'All Time',
    positions: ["C"],
    ppg: 34.7, rpg: 11.0, apg: 5.6, spg: 1.2, bpg: 1.7 // 2023-24賽季
  },
  {
    id: 'billy_cunningham_76ers', name: "Billy Cunningham", team: '76ers', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 26.1, rpg: 13.6, apg: 4.3, spg: 0, bpg: 0 // 1969-70賽季（當時無抄截阻攻統計）
  },
  {
    id: 'dolph_schayes_76ers', name: "Dolph Schayes", team: '76ers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 24.9, rpg: 16.4, apg: 3.1, spg: 0, bpg: 0 // 1957-58賽季（當時無抄截阻攻統計）
  },
  {
    id: 'maurice_cheeks_76ers', name: "Maurice Cheeks", team: '76ers', decade: 'All Time',
    positions: ["PG"],
    ppg: 15.6, rpg: 2.9, apg: 9.2, spg: 2.5, bpg: 0.2 // 1985-86賽季
  },
  {
    id: 'bobby_jones_76ers', name: "Bobby Jones", team: '76ers', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 14.4, rpg: 5.1, apg: 2.9, spg: 1.3, bpg: 1.3 // 1981-82賽季
  },
  {
    id: 'chet_walker_76ers', name: "Chet Walker", team: '76ers', decade: 'All Time',
    positions: ["SF"],
    ppg: 22.0, rpg: 7.9, apg: 1.8, spg: 0, bpg: 0 // 1964-65賽季（當時無抄截阻攻統計）
  },
  {
    id: 'andre_iguodala_76ers', name: "Andre Iguodala", team: '76ers', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 19.9, rpg: 5.4, apg: 4.8, spg: 2.1, bpg: 0.6 // 2007-08賽季
  },
  {
    id: 'tyrese_maxey_76ers', name: "Tyrese Maxey", team: '76ers', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 25.9, rpg: 3.7, apg: 6.2, spg: 1.0, bpg: 0.5 // 2023-24賽季
  },
  {
    id: 'ben_simmons_76ers', name: "Ben Simmons", team: '76ers', decade: 'All Time',
    positions: ["PG", "PF"],
    ppg: 16.9, rpg: 8.8, apg: 7.7, spg: 1.4, bpg: 0.8 // 2018-19賽季
  },
  {
    id: 'george_mcginnis_76ers', name: "George McGinnis", team: '76ers', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 23.0, rpg: 12.6, apg: 4.7, spg: 2.6, bpg: 0.5 // 1975-76賽季
  },
  {
    id: 'larry_costello_76ers', name: "Larry Costello", team: '76ers', decade: 'All Time',
    positions: ["PG"],
    ppg: 14.5, rpg: 3.9, apg: 5.5, spg: 0, bpg: 0 // 1960-61賽季（當時無抄截阻攻統計）
  },
  {
    id: 'andrew_toney_76ers', name: "Andrew Toney", team: '76ers', decade: 'All Time',
    positions: ["SG"],
    ppg: 20.4, rpg: 2.5, apg: 4.8, spg: 0.3, bpg: 0.2 // 1983-84賽季
  },
  {
    id: 'red_kerr_76ers', name: "Red Kerr", team: '76ers', decade: 'All Time',
    positions: ["C"],
    ppg: 17.8, rpg: 14.7, apg: 2.0, spg: 0, bpg: 0 // 1958-59賽季（當時無抄截阻攻統計）
  },
  {
    id: 'dikembe_mutombo_76ers', name: "Dikembe Mutombo", team: '76ers', decade: 'All Time',
    positions: ["C"],
    ppg: 11.5, rpg: 10.8, apg: 1.0, spg: 0.4, bpg: 2.4 // 2001-02賽季
  },
  //  Toronto Raptors  //
  {
    id: 'kyle_lowry_raptors', name: "Kyle Lowry", team: 'raptors', decade: 'All Time',
    positions: ["PG"],
    ppg: 22.4, rpg: 4.8, apg: 7.0, spg: 1.5, bpg: 0.3 // 2016-17賽季
  },
  {
    id: 'vince_carter_raptors', name: "Vince Carter", team: 'raptors', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 27.6, rpg: 5.5, apg: 3.9, spg: 1.5, bpg: 1.1 // 2000-01賽季
  },
  {
    id: 'demar_derozan_raptors', name: "DeMar DeRozan", team: 'raptors', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 27.3, rpg: 5.2, apg: 3.9, spg: 1.1, bpg: 0.2 // 2016-17賽季
  },
  {
    id: 'kawhi_leonard_raptors', name: "Kawhi Leonard", team: 'raptors', decade: 'All Time',
    positions: ["SF"],
    ppg: 26.6, rpg: 7.3, apg: 3.3, spg: 1.8, bpg: 0.4 // 2018-19賽季
  },
  {
    id: 'chris_bosh_raptors', name: "Chris Bosh", team: 'raptors', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 24.0, rpg: 10.8, apg: 2.4, spg: 0.6, bpg: 1.0 // 2009-10賽季
  },
  {
    id: 'pascal_siakam_raptors', name: "Pascal Siakam", team: 'raptors', decade: 'All Time',
    positions: ["PF"],
    ppg: 24.2, rpg: 7.8, apg: 5.8, spg: 0.9, bpg: 0.5 // 2022-23賽季
  },
  {
    id: 'fred_vanvleet_raptors', name: "Fred VanVleet", team: 'raptors', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 20.3, rpg: 4.4, apg: 6.7, spg: 1.7, bpg: 0.5 // 2021-22賽季
  },
  {
    id: 'scottie_barnes_raptors', name: "Scottie Barnes", team: 'raptors', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 19.9, rpg: 8.2, apg: 6.1, spg: 1.3, bpg: 1.5 // 2023-24賽季
  },
  {
    id: 'damon_stoudamire_raptors', name: "Damon Stoudamire", team: 'raptors', decade: 'All Time',
    positions: ["PG"],
    ppg: 20.2, rpg: 4.1, apg: 8.8, spg: 1.5, bpg: 0.1 // 1996-97賽季
  },
  {
    id: 'jonas_valanciunas_raptors', name: "Jonas Valančiūnas", team: 'raptors', decade: 'All Time',
    positions: ["C"],
    ppg: 12.7, rpg: 9.5, apg: 0.7, spg: 0.4, bpg: 1.3 // 2015-16賽季
  },
  {
    id: 'serge_ibaka_raptors', name: "Serge Ibaka", team: 'raptors', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 15.4, rpg: 8.2, apg: 1.4, spg: 0.5, bpg: 0.8 // 2019-20賽季
  },
  {
    id: 'marc_gasol_raptors', name: "Marc Gasol", team: 'raptors', decade: 'All Time',
    positions: ["C"],
    ppg: 9.1, rpg: 6.6, apg: 3.9, spg: 0.9, bpg: 0.9 // 2018-19賽季
  },
  {
    id: 'og_anunoby_raptors', name: "OG Anunoby", team: 'raptors', decade: 'All Time',
    positions: ["SF"],
    ppg: 17.1, rpg: 5.5, apg: 2.6, spg: 1.5, bpg: 0.5 // 2021-22賽季
  },
  {
    id: 'antonio_davis_raptors', name: "Antonio Davis", team: 'raptors', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 13.7, rpg: 10.1, apg: 1.4, spg: 0.3, bpg: 1.9 // 2000-01賽季
  },
  {
    id: 'jose_calderon_raptors', name: "José Calderón", team: 'raptors', decade: 'All Time',
    positions: ["PG"],
    ppg: 12.8, rpg: 2.9, apg: 8.9, spg: 1.1, bpg: 0.1 // 2008-09賽季
  },
  {
    id: 'morris_peterson_raptors', name: "Morris Peterson", team: 'raptors', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 16.8, rpg: 4.6, apg: 2.3, spg: 1.3, bpg: 0.2 // 2005-06賽季
  },
  {
    id: 'tracy_mcgrady_raptors', name: "Tracy McGrady", team: 'raptors', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 15.4, rpg: 6.3, apg: 3.3, spg: 1.1, bpg: 1.9 // 1999-00賽季
  },
  {
    id: 'amir_johnson_raptors', name: "Amir Johnson", team: 'raptors', decade: 'All Time',
    positions: ["PF"],
    ppg: 10.4, rpg: 6.6, apg: 1.5, spg: 0.7, bpg: 1.1 // 2013-14賽季
  },
  {
    id: 'doug_christie_raptors', name: "Doug Christie", team: 'raptors', decade: 'All Time',
    positions: ["SG"],
    ppg: 16.5, rpg: 5.2, apg: 3.6, spg: 2.4, bpg: 0.7 // 1997-98賽季
  },
  {
    id: 'alvin_williams_raptors', name: "Alvin Williams", team: 'raptors', decade: 'All Time',
    positions: ["PG"],
    ppg: 13.2, rpg: 2.8, apg: 5.3, spg: 1.2, bpg: 0.3 // 2002-03賽季
  },
  // ==================== 芝加哥公牛 (bulls) ====================
  {
    id: 'michael_jordan_bulls', name: "Michael Jordan", team: 'bulls', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 32.5, rpg: 8.0, apg: 8.0, spg: 2.9, bpg: 0.8 // 1988-89賽季
  },
  {
    id: 'scottie_pippen_bulls', name: "Scottie Pippen", team: 'bulls', decade: 'All Time',
    positions: ["SF"],
    ppg: 22.0, rpg: 8.7, apg: 5.6, spg: 2.9, bpg: 0.8 // 1993-94賽季
  },
  {
    id: 'derrick_rose_bulls', name: "Derrick Rose", team: 'bulls', decade: 'All Time',
    positions: ["PG"],
    ppg: 25.0, rpg: 4.1, apg: 7.7, spg: 1.0, bpg: 0.6 // 2010-11賽季 (MVP賽季)
  },
  {
    id: 'jerry_sloan_bulls', name: "Jerry Sloan", team: 'bulls', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 18.3, rpg: 8.8, apg: 2.2, spg: 1.8, bpg: 0.2 // 1970-71賽季 (抄截火鍋為生涯後期估算)
  },
  {
    id: 'bob_love_bulls', name: "Bob Love", team: 'bulls', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 25.8, rpg: 8.5, apg: 1.5, spg: 0.8, bpg: 0.2 // 1971-72賽季
  },
  {
    id: 'artis_gilmore_bulls', name: "Artis Gilmore", team: 'bulls', decade: 'All Time',
    positions: ["C"],
    ppg: 23.7, rpg: 12.7, apg: 2.2, spg: 0.6, bpg: 2.2 // 1978-79賽季
  },
  {
    id: 'jimmy_butler_bulls', name: "Jimmy Butler", team: 'bulls', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 23.9, rpg: 6.2, apg: 5.5, spg: 1.9, bpg: 0.4 // 2016-17賽季
  },
  {
    id: 'dennis_rodman_bulls', name: "Dennis Rodman", team: 'bulls', decade: 'All Time',
    positions: ["PF"],
    ppg: 5.5, rpg: 14.9, apg: 2.5, spg: 0.6, bpg: 0.4 // 1995-96賽季
  },
  {
    id: 'chet_walker_bulls', name: "Chet Walker", team: 'bulls', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 22.0, rpg: 6.1, apg: 2.2, spg: 0.5, bpg: 0.1 // 1971-72賽季
  },
  {
    id: 'luol_deng_bulls', name: "Luol Deng", team: 'bulls', decade: 'All Time',
    positions: ["SF"],
    ppg: 18.8, rpg: 7.1, apg: 2.5, spg: 1.0, bpg: 0.6 // 2006-07賽季
  },
  {
    id: 'norm_van_lier_bulls', name: "Norm Van Lier", team: 'bulls', decade: 'All Time',
    positions: ["PG"],
    ppg: 13.9, rpg: 4.7, apg: 7.1, spg: 2.0, bpg: 0.2 // 1973-74賽季
  },
  {
    id: 'toni_kukoc_bulls', name: "Toni Kukoc", team: 'bulls', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 18.8, rpg: 7.0, apg: 5.3, spg: 1.1, bpg: 0.3 // 1998-99賽季
  },
  {
    id: 'joakim_noah_bulls', name: "Joakim Noah", team: 'bulls', decade: 'All Time',
    positions: ["C"],
    ppg: 12.6, rpg: 11.3, apg: 5.4, spg: 1.2, bpg: 1.5 // 2013-14賽季 (DPOY年度)
  },
  {
    id: 'horace_grant_bulls', name: "Horace Grant", team: 'bulls', decade: 'All Time',
    positions: ["PF"],
    ppg: 15.1, rpg: 11.0, apg: 3.4, spg: 1.1, bpg: 1.2 // 1993-94賽季
  },
  {
    id: 'kirk_hinrich_bulls', name: "Kirk Hinrich", team: 'bulls', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 16.6, rpg: 3.4, apg: 6.3, spg: 1.3, bpg: 0.3 // 2006-07賽季
  },
  {
    id: 'zach_lavine_bulls', name: "Zach LaVine", team: 'bulls', decade: 'All Time',
    positions: ["SG"],
    ppg: 27.4, rpg: 5.0, apg: 4.9, spg: 0.8, bpg: 0.5 // 2020-21賽季
  },
  {
    id: 'demar_derozan_bulls', name: "DeMar DeRozan", team: 'bulls', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 27.9, rpg: 5.2, apg: 4.9, spg: 0.9, bpg: 0.3 // 2021-22賽季
  },
  {
    id: 'bj_armstrong_bulls', name: "B.J. Armstrong", team: 'bulls', decade: 'All Time',
    positions: ["PG"],
    ppg: 14.8, rpg: 2.1, apg: 3.9, spg: 1.0, bpg: 0.1 // 1993-94賽季
  },
  {
    id: 'ben_gordon_bulls', name: "Ben Gordon", team: 'bulls', decade: 'All Time',
    positions: ["SG"],
    ppg: 21.4, rpg: 3.1, apg: 3.6, spg: 0.8, bpg: 0.2 // 2006-07賽季
  },
  {
    id: 'reggie_theus_bulls', name: "Reggie Theus", team: 'bulls', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 23.8, rpg: 2.8, apg: 5.9, spg: 1.3, bpg: 0.2 // 1982-83賽季
  },

  // ==================== 克里夫蘭騎士 (cavaliers) ====================
  {
    id: 'lebron_james_cavaliers', name: "LeBron James", team: 'cavaliers', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 30.0, rpg: 7.9, apg: 7.2, spg: 1.8, bpg: 1.1 // 2007-08賽季
  },
  {
    id: 'kyrie_irving_cavaliers', name: "Kyrie Irving", team: 'cavaliers', decade: 'All Time',
    positions: ["PG"],
    ppg: 25.2, rpg: 3.2, apg: 5.8, spg: 1.2, bpg: 0.3 // 2016-17賽季
  },
  {
    id: 'mark_price_cavaliers', name: "Mark Price", team: 'cavaliers', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.2, rpg: 2.7, apg: 8.0, spg: 1.2, bpg: 0.1 // 1992-93賽季
  },
  {
    id: 'brad_daugherty_cavaliers', name: "Brad Daugherty", team: 'cavaliers', decade: 'All Time',
    positions: ["C"],
    ppg: 21.6, rpg: 10.4, apg: 3.6, spg: 0.6, bpg: 0.6 // 1991-92賽季
  },
  {
    id: 'kevin_love_cavaliers', name: "Kevin Love", team: 'cavaliers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 19.0, rpg: 11.1, apg: 1.9, spg: 0.7, bpg: 0.4 // 2016-17賽季
  },
  {
    id: 'zydrunas_ilgauskas_cavaliers', name: "Zydrunas Ilgauskas", team: 'cavaliers', decade: 'All Time',
    positions: ["C"],
    ppg: 17.2, rpg: 8.6, apg: 1.3, spg: 0.5, bpg: 2.1 // 2004-05賽季
  },
  {
    id: 'larry_nance_cavaliers', name: "Larry Nance", team: 'cavaliers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 17.2, rpg: 8.0, apg: 2.2, spg: 1.1, bpg: 3.0 // 1988-89賽季
  },
  {
    id: 'donovan_mitchell_cavaliers', name: "Donovan Mitchell", team: 'cavaliers', decade: 'All Time',
    positions: ["SG"],
    ppg: 28.3, rpg: 4.3, apg: 4.4, spg: 1.5, bpg: 0.4 // 2022-23賽季
  },
  {
    id: 'austin_carr_cavaliers', name: "Austin Carr", team: 'cavaliers', decade: 'All Time',
    positions: ["SG"],
    ppg: 21.9, rpg: 3.6, apg: 3.8, spg: 1.3, bpg: 0.2 // 1973-74賽季
  },
  {
    id: 'terrell_brandon_cavaliers', name: "Terrell Brandon", team: 'cavaliers', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.5, rpg: 3.9, apg: 6.3, spg: 1.8, bpg: 0.4 // 1996-97賽季
  },
  {
    id: 'john_williams_cavaliers', name: "John Williams (Hot Rod)", team: 'cavaliers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 16.8, rpg: 8.1, apg: 2.0, spg: 1.0, bpg: 2.1 // 1989-90賽季
  },
  {
    id: 'tristan_thompson_cavaliers', name: "Tristan Thompson", team: 'cavaliers', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 12.0, rpg: 10.1, apg: 2.1, spg: 0.6, bpg: 0.9 // 2019-20賽季
  },
  {
    id: 'anderson_varejao_cavaliers', name: "Anderson Varejão", team: 'cavaliers', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 14.1, rpg: 14.4, apg: 3.4, spg: 1.5, bpg: 0.6 // 2012-13賽季
  },
  {
    id: 'bingo_smith_cavaliers', name: "Bingo Smith", team: 'cavaliers', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 15.9, rpg: 5.0, apg: 2.8, spg: 1.0, bpg: 0.3 // 1974-75賽季
  },
  {
    id: 'darius_garland_cavaliers', name: "Darius Garland", team: 'cavaliers', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.7, rpg: 3.3, apg: 8.6, spg: 1.3, bpg: 0.1 // 2021-22賽季
  },
  {
    id: 'world_b_free_cavaliers', name: "World B. Free", team: 'cavaliers', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 24.2, rpg: 2.9, apg: 4.4, spg: 1.2, bpg: 0.2 // 1983-84賽季
  },
  {
    id: 'craig_ehlo_cavaliers', name: "Craig Ehlo", team: 'cavaliers', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 13.6, rpg: 5.4, apg: 4.6, spg: 1.6, bpg: 0.3 // 1989-90賽季
  },
  {
    id: 'mo_williams_cavaliers', name: "Mo Williams", team: 'cavaliers', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.8, rpg: 3.4, apg: 4.1, spg: 0.9, bpg: 0.1 // 2008-09賽季
  },
  {
    id: 'evan_mobley_cavaliers', name: "Evan Mobley", team: 'cavaliers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 16.2, rpg: 9.4, apg: 2.8, spg: 0.8, bpg: 1.5 // 2022-23賽季
  },
  {
    id: 'jarrett_allen_cavaliers', name: "Jarrett Allen", team: 'cavaliers', decade: 'All Time',
    positions: ["C"],
    ppg: 16.5, rpg: 10.5, apg: 2.7, spg: 0.7, bpg: 1.1 // 2023-24賽季
  },
  // ==========================================
  // DETROIT PISTONS (底特律活塞)
  // ==========================================
  {
    id: 'isiah_thomas_pistons', name: "Isiah Thomas", team: 'pistons', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.2, rpg: 4.5, apg: 13.9, spg: 2.3, bpg: 0.2 // 1984-85賽季
  },
  {
    id: 'joe_dumars_pistons', name: "Joe Dumars", team: 'pistons', decade: 'All Time',
    positions: ["SG"],
    ppg: 23.5, rpg: 1.9, apg: 4.0, spg: 1.0, bpg: 0.1 // 1992-93賽季
  },
  {
    id: 'ben_wallace_pistons', name: "Ben Wallace", team: 'pistons', decade: 'All Time',
    positions: ["C"],
    ppg: 9.5, rpg: 15.4, apg: 1.6, spg: 1.4, bpg: 3.2 // 2002-03賽季
  },
  {
    id: 'chauncey_billups_pistons', name: "Chauncey Billups", team: 'pistons', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.5, rpg: 3.1, apg: 8.6, spg: 0.9, bpg: 0.1 // 2005-06賽季
  },
  {
    id: 'bob_lanier_pistons', name: "Bob Lanier", team: 'pistons', decade: 'All Time',
    positions: ["C"],
    ppg: 24.0, rpg: 13.3, apg: 4.2, spg: 1.4, bpg: 3.0 // 1973-74賽季
  },
  {
    id: 'dave_bing_pistons', name: "Dave Bing", team: 'pistons', decade: 'All Time',
    positions: ["PG"],
    ppg: 27.1, rpg: 6.4, apg: 7.4, spg: 0.0, bpg: 0.0 // 1967-68賽季 (當時未統計阻攻/抄截)
  },
  {
    id: 'richard_hamilton_pistons', name: "Richard Hamilton", team: 'pistons', decade: 'All Time',
    positions: ["SG"],
    ppg: 20.1, rpg: 3.8, apg: 3.4, spg: 0.7, bpg: 0.2 // 2005-06賽季
  },
  {
    id: 'grant_hill_pistons', name: "Grant Hill", team: 'pistons', decade: 'All Time',
    positions: ["SF"],
    ppg: 25.8, rpg: 6.6, apg: 5.2, spg: 1.4, bpg: 0.6 // 1999-00賽季
  },
  {
    id: 'dennis_rodman_pistons', name: "Dennis Rodman", team: 'pistons', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 9.8, rpg: 18.7, apg: 2.3, spg: 0.8, bpg: 0.9 // 1991-92賽季
  },
  {
    id: 'bill_laimbeer_pistons', name: "Bill Laimbeer", team: 'pistons', decade: 'All Time',
    positions: ["C"],
    ppg: 17.5, rpg: 12.4, apg: 1.9, spg: 0.8, bpg: 0.9 // 1984-85賽季
  },
  {
    id: 'rasheed_wallace_pistons', name: "Rasheed Wallace", team: 'pistons', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 15.1, rpg: 6.8, apg: 2.3, spg: 1.0, bpg: 1.6 // 2005-06賽季
  },
  {
    id: 'tayshaun_prince_pistons', name: "Tayshaun Prince", team: 'pistons', decade: 'All Time',
    positions: ["SF"],
    ppg: 14.7, rpg: 5.3, apg: 3.0, spg: 0.7, bpg: 0.6 // 2004-05賽季
  },
  {
    id: 'vinnie_johnson_pistons', name: "Vinnie Johnson", team: 'pistons', decade: 'All Time',
    positions: ["SG"],
    ppg: 15.8, rpg: 2.9, apg: 4.0, spg: 1.0, bpg: 0.1 // 1982-83賽季
  },
  {
    id: 'dave_debusschere_pistons', name: "Dave DeBusschere", team: 'pistons', decade: 'All Time',
    positions: ["PF"],
    ppg: 17.9, rpg: 13.5, apg: 2.3, spg: 0.0, bpg: 0.0 // 1967-68賽季 (當時未統計阻攻/抄截)
  },
  {
    id: 'george_yardley_pistons', name: "George Yardley", team: 'pistons', decade: 'All Time',
    positions: ["SF"],
    ppg: 27.8, rpg: 10.7, apg: 2.2, spg: 0.0, bpg: 0.0 // 1957-58賽季 (當時未統計阻攻/抄截)
  },
  {
    id: 'bailey_howell_pistons', name: "Bailey Howell", team: 'pistons', decade: 'All Time',
    positions: ["PF"],
    ppg: 22.7, rpg: 11.5, apg: 2.9, spg: 0.0, bpg: 0.0 // 1962-63賽季 (當時未統計阻攻/抄截)
  },
  {
    id: 'jerry_stackhouse_pistons', name: "Jerry Stackhouse", team: 'pistons', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 29.8, rpg: 3.9, apg: 5.1, spg: 1.2, bpg: 0.7 // 2000-01賽季
  },
  {
    id: 'adrian_dantley_pistons', name: "Adrian Dantley", team: 'pistons', decade: 'All Time',
    positions: ["SF"],
    ppg: 21.5, rpg: 4.1, apg: 2.0, spg: 0.8, bpg: 0.1 // 1986-87賽季
  },
  {
    id: 'gene_shue_pistons', name: "Gene Shue", team: 'pistons', decade: 'All Time',
    positions: ["PG"],
    ppg: 22.8, rpg: 5.5, apg: 6.8, spg: 0.0, bpg: 0.0 // 1959-60賽季 (當時未統計阻攻/抄截)
  },
  {
    id: 'andre_drummond_pistons', name: "Andre Drummond", team: 'pistons', decade: 'All Time',
    positions: ["C"],
    ppg: 17.8, rpg: 15.8, apg: 2.8, spg: 2.0, bpg: 1.7 // 2019-20賽季
  },

  // ==========================================
  // INDIANA PACERS (印第安納溜馬)
  // ==========================================
  {
    id: 'reggie_miller_pacers', name: "Reggie Miller", team: 'pacers', decade: 'All Time',
    positions: ["SG"],
    ppg: 24.6, rpg: 3.6, apg: 3.8, spg: 1.3, bpg: 0.2 // 1989-90賽季
  },
  {
    id: 'paul_george_pacers', name: "Paul George", team: 'pacers', decade: 'All Time',
    positions: ["SF"],
    ppg: 23.7, rpg: 6.6, apg: 3.3, spg: 1.6, bpg: 0.4 // 2016-17賽季
  },
  {
    id: 'mel_daniels_pacers', name: "Mel Daniels", team: 'pacers', decade: 'All Time',
    positions: ["C"],
    ppg: 24.0, rpg: 16.5, apg: 1.8, spg: 0.0, bpg: 0.0 // 1968-69賽季 (ABA時期，未統計阻攻/抄截)
  },
  {
    id: 'george_mcginnis_pacers', name: "George McGinnis", team: 'pacers', decade: 'All Time',
    positions: ["PF"],
    ppg: 29.8, rpg: 14.3, apg: 6.3, spg: 2.6, bpg: 0.9 // 1974-75賽季 (ABA時期)
  },
  {
    id: 'roger_brown_pacers', name: "Roger Brown", team: 'pacers', decade: 'All Time',
    positions: ["SF"],
    ppg: 23.0, rpg: 7.4, apg: 4.7, spg: 0.0, bpg: 0.0 // 1969-70賽季 (ABA時期，未統計阻攻/抄截)
  },
  {
    id: 'jermaine_oneal_pacers', name: "Jermaine O'Neal", team: 'pacers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 24.3, rpg: 8.8, apg: 1.9, spg: 0.6, bpg: 2.0 // 2004-05賽季
  },
  {
    id: 'rik_smits_pacers', name: "Rik Smits", team: 'pacers', decade: 'All Time',
    positions: ["C"],
    ppg: 18.5, rpg: 6.9, apg: 1.4, spg: 0.6, bpg: 1.2 // 1995-96賽季
  },
  {
    id: 'danny_granger_pacers', name: "Danny Granger", team: 'pacers', decade: 'All Time',
    positions: ["SF"],
    ppg: 25.8, rpg: 5.1, apg: 2.7, spg: 1.0, bpg: 1.4 // 2008-09賽季
  },
  {
    id: 'freddie_lewis_pacers', name: "Freddie Lewis", team: 'pacers', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.0, rpg: 4.1, apg: 4.4, spg: 0.0, bpg: 0.0 // 1968-69賽季 (ABA時期，未統計阻攻/抄截)
  },
  {
    id: 'tyrese_haliburton_pacers', name: "Tyrese Haliburton", team: 'pacers', decade: 'All Time',
    positions: ["PG"],
    ppg: 20.1, rpg: 3.9, apg: 10.9, spg: 1.2, bpg: 0.4 // 2023-24賽季
  },
  {
    id: 'billy_knight_pacers', name: "Billy Knight", team: 'pacers', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 26.6, rpg: 7.5, apg: 2.8, spg: 1.5, bpg: 0.2 // 1976-77賽季
  },
  {
    id: 'bob_netolicky_pacers', name: "Bob Netolicky", team: 'pacers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 20.6, rpg: 10.7, apg: 2.7, spg: 0.0, bpg: 0.0 // 1969-70賽季 (ABA時期，未統計阻攻/抄截)
  },
  {
    id: 'dale_davis_pacers', name: "Dale Davis", team: 'pacers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 11.7, rpg: 10.9, apg: 0.9, spg: 0.7, bpg: 1.6 // 1993-94賽季
  },
  {
    id: 'myles_turner_pacers', name: "Myles Turner", team: 'pacers', decade: 'All Time',
    positions: ["C"],
    ppg: 18.0, rpg: 7.5, apg: 1.4, spg: 0.6, bpg: 2.3 // 2022-23賽季
  },
  {
    id: 'metta_sandiford_artest_pacers', name: "Metta Sandiford-Artest", team: 'pacers', decade: 'All Time',
    positions: ["SF"],
    ppg: 18.3, rpg: 5.3, apg: 3.7, spg: 2.1, bpg: 0.7 // 2003-04賽季
  },
  {
    id: 'chuck_person_pacers', name: "Chuck Person", team: 'pacers', decade: 'All Time',
    positions: ["SF"],
    ppg: 21.6, rpg: 6.5, apg: 3.6, spg: 1.0, bpg: 0.2 // 1988-89賽季
  },
  {
    id: 'vern_fleming_pacers', name: "Vern Fleming", team: 'pacers', decade: 'All Time',
    positions: ["PG"],
    ppg: 14.3, rpg: 4.1, apg: 7.4, spg: 1.9, bpg: 0.1 // 1988-89賽季
  },
  {
    id: 'mark_jackson_pacers', name: "Mark Jackson", team: 'pacers', decade: 'All Time',
    positions: ["PG"],
    ppg: 10.0, rpg: 3.8, apg: 8.7, spg: 1.2, bpg: 0.1 // 1996-97賽季
  },
  {
    id: 'domantas_sabonis_pacers', name: "Domantas Sabonis", team: 'pacers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 20.3, rpg: 12.0, apg: 6.7, spg: 1.2, bpg: 0.5 // 2020-21賽季
  },
  {
    id: 'detlef_schrempf_pacers', name: "Detlef Schrempf", team: 'pacers', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 19.1, rpg: 9.5, apg: 6.0, spg: 1.0, bpg: 0.3 // 1992-93賽季
  },
  // ================= 密爾瓦基公鹿 (Milwaukee Bucks) =================
  {
    id: 'giannis_antetokounmpo_bucks', name: "Giannis Antetokounmpo", team: 'bucks', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 31.1, rpg: 11.8, apg: 5.7, spg: 0.8, bpg: 0.8 // 2022-23賽季
  },
  {
    id: 'kareem_abdul_jabbar_bucks', name: "Kareem Abdul-Jabbar", team: 'bucks', decade: 'All Time',
    positions: ["C"],
    ppg: 34.8, rpg: 16.6, apg: 4.6, spg: 0.0, bpg: 0.0 // 1971-72賽季 (抄截阻攻未列入紀錄)
  },
  {
    id: 'sidney_moncrief_bucks', name: "Sidney Moncrief", team: 'bucks', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 22.5, rpg: 6.7, apg: 4.5, spg: 1.4, bpg: 0.3 // 1982-83賽季
  },
  {
    id: 'bob_dandridge_bucks', name: "Bob Dandridge", team: 'bucks', decade: 'All Time',
    positions: ["SF"],
    ppg: 21.5, rpg: 7.4, apg: 2.8, spg: 1.5, bpg: 0.5 // 1975-76賽季
  },
  {
    id: 'ray_allen_bucks', name: "Ray Allen", team: 'bucks', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.0, rpg: 5.2, apg: 4.6, spg: 1.5, bpg: 0.2 // 2000-01賽季
  },
  {
    id: 'khris_middleton_bucks', name: "Khris Middleton", team: 'bucks', decade: 'All Time',
    positions: ["SF"],
    ppg: 20.9, rpg: 6.2, apg: 4.3, spg: 0.9, bpg: 0.1 // 2019-20賽季
  },
  {
    id: 'oscar_robertson_bucks', name: "Oscar Robertson", team: 'bucks', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.4, rpg: 5.7, apg: 8.2, spg: 0.0, bpg: 0.0 // 1970-71賽季 (抄截阻攻未列入紀錄)
  },
  {
    id: 'marques_johnson_bucks', name: "Marques Johnson", team: 'bucks', decade: 'All Time',
    positions: ["SF"],
    ppg: 25.6, rpg: 7.6, apg: 3.0, spg: 1.5, bpg: 1.2 // 1978-79賽季
  },
  {
    id: 'michael_redd_bucks', name: "Michael Redd", team: 'bucks', decade: 'All Time',
    positions: ["SG"],
    ppg: 26.7, rpg: 3.7, apg: 2.3, spg: 1.2, bpg: 0.2 // 2006-07賽季
  },
  {
    id: 'glenn_robinson_bucks', name: "Glenn Robinson", team: 'bucks', decade: 'All Time',
    positions: ["SF"],
    ppg: 23.4, rpg: 6.3, apg: 3.3, spg: 1.5, bpg: 0.5 // 1997-98賽季
  },
  {
    id: 'terry_cummings_bucks', name: "Terry Cummings", team: 'bucks', decade: 'All Time',
    positions: ["PF"],
    ppg: 23.6, rpg: 9.1, apg: 2.9, spg: 1.5, bpg: 0.8 // 1984-85賽季
  },
  {
    id: 'bob_lanier_bucks', name: "Bob Lanier", team: 'bucks', decade: 'All Time',
    positions: ["C"],
    ppg: 15.7, rpg: 6.2, apg: 2.7, spg: 1.1, bpg: 1.0 // 1980-81賽季
  },
  {
    id: 'jrue_holiday_bucks', name: "Jrue Holiday", team: 'bucks', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.3, rpg: 5.1, apg: 7.4, spg: 1.2, bpg: 0.4 // 2022-23賽季
  },
  {
    id: 'brian_winters_bucks', name: "Brian Winters", team: 'bucks', decade: 'All Time',
    positions: ["SG"],
    ppg: 19.9, rpg: 2.8, apg: 4.9, spg: 1.5, bpg: 0.3 // 1977-78賽季
  },
  {
    id: 'jon_mcglocklin_bucks', name: "Jon McGlocklin", team: 'bucks', decade: 'All Time',
    positions: ["SG"],
    ppg: 19.6, rpg: 4.3, apg: 3.9, spg: 0.0, bpg: 0.0 // 1968-69賽季 (抄截阻攻未列入紀錄)
  },
  {
    id: 'junior_bridgeman_bucks', name: "Junior Bridgeman", team: 'bucks', decade: 'All Time',
    positions: ["SF"],
    ppg: 17.6, rpg: 3.7, apg: 2.9, spg: 1.2, bpg: 0.2 // 1979-80賽季
  },
  {
    id: 'ricky_pierce_bucks', name: "Ricky Pierce", team: 'bucks', decade: 'All Time',
    positions: ["SG"],
    ppg: 23.0, rpg: 2.8, apg: 2.3, spg: 0.8, bpg: 0.1 // 1989-90賽季
  },
  {
    id: 'paul_pressey_bucks', name: "Paul Pressey", team: 'bucks', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 16.1, rpg: 5.2, apg: 7.8, spg: 2.1, bpg: 0.9 // 1984-85賽季
  },
  {
    id: 'andrew_bogut_bucks', name: "Andrew Bogut", team: 'bucks', decade: 'All Time',
    positions: ["C"],
    ppg: 15.9, rpg: 10.2, apg: 2.5, spg: 0.6, bpg: 2.5 // 2009-10賽季
  },
  {
    id: 'brook_lopez_bucks', name: "Brook Lopez", team: 'bucks', decade: 'All Time',
    positions: ["C"],
    ppg: 15.9, rpg: 6.7, apg: 1.3, spg: 0.5, bpg: 2.5 // 2022-23賽季
  },

  // ================= 亞特蘭大老鷹 (Atlanta Hawks) =================
  {
    id: 'dominique_wilkins_hawks', name: "Dominique Wilkins", team: 'hawks', decade: 'All Time',
    positions: ["SF"],
    ppg: 30.7, rpg: 7.9, apg: 2.6, spg: 1.8, bpg: 0.6 // 1987-88賽季
  },
  {
    id: 'bob_pettit_hawks', name: "Bob Pettit", team: 'hawks', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 31.1, rpg: 18.7, apg: 3.7, spg: 0.0, bpg: 0.0 // 1961-62賽季 (老鷹前身，抄截阻攻未列入紀錄)
  },
  {
    id: 'lou_hudson_hawks', name: "Lou Hudson", team: 'hawks', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 27.1, rpg: 6.2, apg: 3.4, spg: 0.0, bpg: 0.0 // 1972-73賽季 (抄截阻攻未列入紀錄)
  },
  {
    id: 'cliff_hagan_hawks', name: "Cliff Hagan", team: 'hawks', decade: 'All Time',
    positions: ["SF"],
    ppg: 23.7, rpg: 10.7, apg: 3.5, spg: 0.0, bpg: 0.0 // 1958-59賽季 (抄截阻攻未列入紀錄)
  },
  {
    id: 'trae_young_hawks', name: "Trae Young", team: 'hawks', decade: 'All Time',
    positions: ["PG"],
    ppg: 28.4, rpg: 3.7, apg: 9.7, spg: 0.9, bpg: 0.1 // 2021-22賽季
  },
  {
    id: 'joe_johnson_hawks', name: "Joe Johnson", team: 'hawks', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 25.0, rpg: 4.2, apg: 4.4, spg: 1.1, bpg: 0.2 // 2006-07賽季
  },
  {
    id: 'dikembe_mutombo_hawks', name: "Dikembe Mutombo", team: 'hawks', decade: 'All Time',
    positions: ["C"],
    ppg: 13.3, rpg: 11.4, apg: 1.4, spg: 0.6, bpg: 3.3 // 1996-97賽季
  },
  {
    id: 'al_horford_hawks', name: "Al Horford", team: 'hawks', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 17.4, rpg: 10.2, apg: 3.2, spg: 1.1, bpg: 1.1 // 2012-13賽季
  },
  {
    id: 'lenny_wilkens_hawks', name: "Lenny Wilkens", team: 'hawks', decade: 'All Time',
    positions: ["PG"],
    ppg: 20.0, rpg: 5.3, apg: 8.3, spg: 0.0, bpg: 0.0 // 1967-68賽季 (抄截阻攻未列入紀錄)
  },
  {
    id: 'dan_roundfield_hawks', name: "Dan Roundfield", team: 'hawks', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 19.0, rpg: 11.4, apg: 2.9, spg: 1.2, bpg: 1.5 // 1982-83賽季
  },
  {
    id: 'mookie_blaylock_hawks', name: "Mookie Blaylock", team: 'hawks', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.4, rpg: 5.3, apg: 5.9, spg: 2.7, bpg: 0.3 // 1996-97賽季
  },
  {
    id: 'kevin_willis_hawks', name: "Kevin Willis", team: 'hawks', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 19.1, rpg: 12.0, apg: 1.9, spg: 1.0, bpg: 0.5 // 1993-94賽季
  },
  {
    id: 'josh_smith_hawks', name: "Josh Smith", team: 'hawks', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 18.8, rpg: 9.6, apg: 3.9, spg: 1.4, bpg: 1.7 // 2011-12賽季
  },
  {
    id: 'paul_millsap_hawks', name: "Paul Millsap", team: 'hawks', decade: 'All Time',
    positions: ["PF"],
    ppg: 18.1, rpg: 7.7, apg: 3.7, spg: 1.3, bpg: 0.9 // 2016-17賽季
  },
  {
    id: 'zelmo_beaty_hawks', name: "Zelmo Beaty", team: 'hawks', decade: 'All Time',
    positions: ["C"],
    ppg: 21.1, rpg: 11.1, apg: 1.8, spg: 0.0, bpg: 0.0 // 1968-69賽季 (抄截阻攻未列入紀錄)
  },
  {
    id: 'tree_rollins_hawks', name: "Tree Rollins", team: 'hawks', decade: 'All Time',
    positions: ["C"],
    ppg: 8.9, rpg: 9.3, apg: 0.9, spg: 0.6, bpg: 4.3 // 1982-83賽季
  },
  {
    id: 'bill_bridges_hawks', name: "Bill Bridges", team: 'hawks', decade: 'All Time',
    positions: ["PF"],
    ppg: 14.8, rpg: 13.9, apg: 4.2, spg: 0.0, bpg: 0.0 // 1969-70賽季 (抄截阻攻未列入紀錄)
  },
  {
    id: 'john_drew_hawks', name: "John Drew", team: 'hawks', decade: 'All Time',
    positions: ["SF"],
    ppg: 24.2, rpg: 9.3, apg: 1.2, spg: 1.4, bpg: 0.4 // 1976-77賽季
  },
  {
    id: 'doc_rivers_hawks', name: "Doc Rivers", team: 'hawks', decade: 'All Time',
    positions: ["PG"],
    ppg: 14.2, rpg: 4.6, apg: 9.3, spg: 1.8, bpg: 0.4 // 1987-88賽季
  },
  {
    id: 'pete_maravich_hawks', name: "Pete Maravich", team: 'hawks', decade: 'All Time',
    positions: ["SG"],
    ppg: 27.7, rpg: 4.9, apg: 5.2, spg: 1.5, bpg: 0.2 // 1973-74賽季
  }, 
  // ==========================================
  // CHARLOTTE HORNETS
  // ==========================================
  {
    id: 'kemba_walker_hornets', name: "Kemba Walker", team: 'hornets', decade: 'All Time',
    positions: ["PG"],
    ppg: 25.6, rpg: 4.4, apg: 5.9, spg: 1.2, bpg: 0.4 // 2018-19賽季
  },
  {
    id: 'larry_johnson_hornets', name: "Larry Johnson", team: 'hornets', decade: 'All Time',
    positions: ["PF"],
    ppg: 22.1, rpg: 10.5, apg: 4.3, spg: 1.0, bpg: 0.3 // 1992-93賽季
  },
  {
    id: 'alonzo_mourning_hornets', name: "Alonzo Mourning", team: 'hornets', decade: 'All Time',
    positions: ["C"],
    ppg: 21.3, rpg: 9.9, apg: 1.4, spg: 0.6, bpg: 2.9 // 1994-95賽季
  },
  {
    id: 'dell_curry_hornets', name: "Dell Curry", team: 'hornets', decade: 'All Time',
    positions: ["SG"],
    ppg: 16.3, rpg: 3.2, apg: 2.7, spg: 1.2, bpg: 0.3 // 1993-94賽季
  },
  {
    id: 'muggsy_bogues_hornets', name: "Muggsy Bogues", team: 'hornets', decade: 'All Time',
    positions: ["PG"],
    ppg: 10.8, rpg: 4.1, apg: 10.1, spg: 1.7, bpg: 0.0 // 1993-94賽季
  },
  {
    id: 'glen_rice_hornets', name: "Glen Rice", team: 'hornets', decade: 'All Time',
    positions: ["SF"],
    ppg: 26.8, rpg: 4.0, apg: 2.0, spg: 0.9, bpg: 0.3 // 1996-97賽季
  },
  {
    id: 'gerald_wallace_hornets', name: "Gerald Wallace", team: 'hornets', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 19.4, rpg: 6.0, apg: 3.5, spg: 2.1, bpg: 1.0 // 2007-08賽季
  },
  {
    id: 'baron_davis_hornets', name: "Baron Davis", team: 'hornets', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.1, rpg: 4.3, apg: 8.5, spg: 2.1, bpg: 0.6 // 2001-02賽季
  },
  {
    id: 'anthony_mason_hornets', name: "Anthony Mason", team: 'hornets', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 16.2, rpg: 11.4, apg: 5.7, spg: 1.0, bpg: 0.5 // 1996-97賽季
  },
  {
    id: 'lamelo_ball_hornets', name: "LaMelo Ball", team: 'hornets', decade: 'All Time',
    positions: ["PG"],
    ppg: 23.9, rpg: 5.1, apg: 8.0, spg: 1.8, bpg: 0.2 // 2023-24賽季
  },
  {
    id: 'al_jefferson_hornets', name: "Al Jefferson", team: 'hornets', decade: 'All Time',
    positions: ["C"],
    ppg: 21.8, rpg: 10.8, apg: 2.1, spg: 0.8, bpg: 1.1 // 2013-14賽季
  },
  {
    id: 'jamal_mashburn_hornets', name: "Jamal Mashburn", team: 'hornets', decade: 'All Time',
    positions: ["SF"],
    ppg: 21.6, rpg: 6.1, apg: 5.6, spg: 1.2, bpg: 0.2 // 2002-03賽季
  },
  {
    id: 'david_wesley_hornets', name: "David Wesley", team: 'hornets', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 17.2, rpg: 2.7, apg: 4.4, spg: 1.6, bpg: 0.2 // 2000-01賽季
  },
  {
    id: 'emeka_okafor_hornets', name: "Emeka Okafor", team: 'hornets', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 15.1, rpg: 10.9, apg: 0.9, spg: 0.9, bpg: 1.7 // 2004-05賽季
  },
  {
    id: 'raymond_felton_hornets', name: "Raymond Felton", team: 'hornets', decade: 'All Time',
    positions: ["PG"],
    ppg: 14.4, rpg: 3.8, apg: 7.4, spg: 1.5, bpg: 0.2 // 2007-08賽季
  },
  {
    id: 'nicolas_batum_hornets', name: "Nicolas Batum", team: 'hornets', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 15.1, rpg: 6.2, apg: 5.9, spg: 1.1, bpg: 0.4 // 2016-17賽季
  },
  {
    id: 'gordon_hayward_hornets', name: "Gordon Hayward", team: 'hornets', decade: 'All Time',
    positions: ["SF"],
    ppg: 19.6, rpg: 5.9, apg: 4.1, spg: 1.2, bpg: 0.3 // 2020-21賽季
  },
  {
    id: 'terry_rozier_hornets', name: "Terry Rozier", team: 'hornets', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 23.2, rpg: 3.9, apg: 6.6, spg: 1.0, bpg: 0.4 // 2023-24賽季
  },
  {
    id: 'miles_bridges_hornets', name: "Miles Bridges", team: 'hornets', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 21.0, rpg: 7.3, apg: 3.3, spg: 0.9, bpg: 0.5 // 2023-24賽季
  },
  {
    id: 'kendall_gill_hornets', name: "Kendall Gill", team: 'hornets', decade: 'All Time',
    positions: ["SG"],
    ppg: 20.5, rpg: 4.9, apg: 3.9, spg: 1.4, bpg: 0.5 // 1991-92賽季
  },

  // ==========================================
  // MIAMI HEAT
  // ==========================================
  {
    id: 'dwyane_wade_heat', name: "Dwyane Wade", team: 'heat', decade: 'All Time',
    positions: ["SG"],
    ppg: 30.2, rpg: 5.0, apg: 7.5, spg: 2.2, bpg: 1.3 // 2008-09賽季
  },
  {
    id: 'lebron_james_heat', name: "LeBron James", team: 'heat', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 27.1, rpg: 7.9, apg: 6.2, spg: 1.9, bpg: 0.8 // 2011-12賽季
  },
  {
    id: 'alonzo_mourning_heat', name: "Alonzo Mourning", team: 'heat', decade: 'All Time',
    positions: ["C"],
    ppg: 21.7, rpg: 9.5, apg: 1.6, spg: 0.5, bpg: 3.7 // 1999-00賽季
  },
  {
    id: 'chris_bosh_heat', name: "Chris Bosh", team: 'heat', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 21.1, rpg: 7.0, apg: 2.2, spg: 0.9, bpg: 0.6 // 2014-15賽季
  },
  {
    id: 'shaquille_oneal_heat', name: "Shaquille O'Neal", team: 'heat', decade: 'All Time',
    positions: ["C"],
    ppg: 22.9, rpg: 10.4, apg: 2.7, spg: 0.5, bpg: 2.3 // 2004-05賽季
  },
  {
    id: 'jimmy_butler_heat', name: "Jimmy Butler", team: 'heat', decade: 'All Time',
    positions: ["SF"],
    ppg: 22.9, rpg: 5.9, apg: 5.3, spg: 1.8, bpg: 0.3 // 2022-23賽季
  },
  {
    id: 'bam_adebayo_heat', name: "Bam Adebayo", team: 'heat', decade: 'All Time',
    positions: ["C"],
    ppg: 20.4, rpg: 9.2, apg: 3.2, spg: 1.2, bpg: 0.8 // 2022-23賽季
  },
  {
    id: 'tim_hardaway_heat', name: "Tim Hardaway", team: 'heat', decade: 'All Time',
    positions: ["PG"],
    ppg: 20.3, rpg: 3.4, apg: 8.6, spg: 1.9, bpg: 0.1 // 1996-97賽季
  },
  {
    id: 'glen_rice_heat', name: "Glen Rice", team: 'heat', decade: 'All Time',
    positions: ["SF"],
    ppg: 22.3, rpg: 5.4, apg: 2.3, spg: 1.4, bpg: 0.4 // 1992-93賽季
  },
  {
    id: 'udonis_haslem_heat', name: "Udonis Haslem", team: 'heat', decade: 'All Time',
    positions: ["PF"],
    ppg: 12.0, rpg: 9.0, apg: 1.4, spg: 0.6, bpg: 0.4 // 2007-08賽季
  },
  {
    id: 'ray_allen_heat', name: "Ray Allen", team: 'heat', decade: 'All Time',
    positions: ["SG"],
    ppg: 10.9, rpg: 2.8, apg: 1.7, spg: 0.8, bpg: 0.2 // 2012-13賽季
  },
  {
    id: 'goran_dragic_heat', name: "Goran Dragić", team: 'heat', decade: 'All Time',
    positions: ["PG"],
    ppg: 20.3, rpg: 3.8, apg: 5.8, spg: 1.0, bpg: 0.2 // 2016-17賽季
  },
  {
    id: 'tyler_herro_heat', name: "Tyler Herro", team: 'heat', decade: 'All Time',
    positions: ["SG"],
    ppg: 20.8, rpg: 5.3, apg: 4.5, spg: 0.7, bpg: 0.1 // 2023-24賽季
  },
  {
    id: 'rony_seikaly_heat', name: "Rony Seikaly", team: 'heat', decade: 'All Time',
    positions: ["C"],
    ppg: 17.3, rpg: 11.8, apg: 1.4, spg: 0.5, bpg: 1.4 // 1992-93賽季
  },
  {
    id: 'mario_chalmers_heat', name: "Mario Chalmers", team: 'heat', decade: 'All Time',
    positions: ["PG"],
    ppg: 10.2, rpg: 2.9, apg: 4.9, spg: 2.0, bpg: 0.2 // 2013-14賽季
  },
  {
    id: 'shane_battier_heat', name: "Shane Battier", team: 'heat', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 6.6, rpg: 2.3, apg: 1.0, spg: 1.0, bpg: 0.8 // 2012-13賽季
  },
  {
    id: 'pj_brown_heat', name: "P.J. Brown", team: 'heat', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 11.4, rpg: 8.6, apg: 1.4, spg: 0.9, bpg: 1.0 // 1998-99賽季
  },
  {
    id: 'eddie_jones_heat', name: "Eddie Jones", team: 'heat', decade: 'All Time',
    positions: ["SG"],
    ppg: 18.5, rpg: 4.8, apg: 3.7, spg: 1.4, bpg: 0.7 // 2002-03賽季
  },
  {
    id: 'lamar_odom_heat', name: "Lamar Odom", team: 'heat', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 17.1, rpg: 9.7, apg: 4.1, spg: 1.1, bpg: 0.9 // 2003-04賽季
  },
  {
    id: 'jason_williams_heat', name: "Jason Williams", team: 'heat', decade: 'All Time',
    positions: ["PG"],
    ppg: 12.3, rpg: 2.4, apg: 4.9, spg: 0.9, bpg: 0.1 // 2005-06賽季
  },
  // ==========================================
  // ORLANDO MAGIC (魔術隊 20人)
  // ==========================================
  {
    id: 'shaquille_oneal_magic', name: "Shaquille O'Neal", team: 'magic', decade: 'All Time',
    positions: ["C"],
    ppg: 29.3, rpg: 11.4, apg: 2.7, spg: 0.9, bpg: 2.4 // 1994-95賽季
  },
  {
    id: 'dwight_howard_magic', name: "Dwight Howard", team: 'magic', decade: 'All Time',
    positions: ["C"],
    ppg: 22.9, rpg: 14.1, apg: 1.4, spg: 1.4, bpg: 2.4 // 2010-11賽季
  },
  {
    id: 'tracy_mcgrady_magic', name: "Tracy McGrady", team: 'magic', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 32.1, rpg: 6.5, apg: 5.5, spg: 1.7, bpg: 0.8 // 2002-03賽季
  },
  {
    id: 'anfernee_hardaway_magic', name: "Anfernee Hardaway", team: 'magic', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 21.7, rpg: 4.3, apg: 7.1, spg: 2.0, bpg: 0.5 // 1995-96賽季
  },
  {
    id: 'nikola_vucevic_magic', name: "Nikola Vučević", team: 'magic', decade: 'All Time',
    positions: ["C"],
    ppg: 24.5, rpg: 11.8, apg: 3.8, spg: 1.0, bpg: 0.6 // 2020-21賽季
  },
  {
    id: 'nick_anderson_magic', name: "Nick Anderson", team: 'magic', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 19.9, rpg: 6.0, apg: 3.4, spg: 1.6, bpg: 0.7 // 1992-93賽季
  },
  {
    id: 'jameer_nelson_magic', name: "Jameer Nelson", team: 'magic', decade: 'All Time',
    positions: ["PG"],
    ppg: 16.7, rpg: 3.5, apg: 5.4, spg: 1.2, bpg: 0.1 // 2008-09賽季
  },
  {
    id: 'darrell_armstrong_magic', name: "Darrell Armstrong", team: 'magic', decade: 'All Time',
    positions: ["PG"],
    ppg: 16.2, rpg: 3.3, apg: 6.1, spg: 2.1, bpg: 0.1 // 1999-00賽季
  },
  {
    id: 'hedo_turkoglu_magic', name: "Hedo Türkoğlu", team: 'magic', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 19.5, rpg: 5.7, apg: 5.0, spg: 0.9, bpg: 0.3 // 2007-08賽季
  },
  {
    id: 'rashard_lewis_magic', name: "Rashard Lewis", team: 'magic', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 18.2, rpg: 5.4, apg: 2.4, spg: 1.2, bpg: 0.5 // 2007-08賽季
  },
  {
    id: 'paolo_banchero_magic', name: "Paolo Banchero", team: 'magic', decade: 'All Time',
    positions: ["PF"],
    ppg: 23.0, rpg: 7.0, apg: 5.4, spg: 1.0, bpg: 0.6 // 2024-25賽季
  },
  {
    id: 'franz_wagner_magic', name: "Franz Wagner", team: 'magic', decade: 'All Time',
    positions: ["SF"],
    ppg: 20.8, rpg: 5.1, apg: 4.1, spg: 1.1, bpg: 0.5 // 2024-25賽季
  },
  {
    id: 'dennis_scott_magic', name: "Dennis Scott", team: 'magic', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 18.1, rpg: 3.8, apg: 3.0, spg: 1.1, bpg: 0.3 // 1995-96賽季
  },
  {
    id: 'scott_skiles_magic', name: "Scott Skiles", team: 'magic', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.2, rpg: 3.4, apg: 8.4, spg: 1.1, bpg: 0.1 // 1990-91賽季
  },
  {
    id: 'horace_grant_magic', name: "Horace Grant", team: 'magic', decade: 'All Time',
    positions: ["PF"],
    ppg: 13.4, rpg: 9.2, apg: 2.7, spg: 1.0, bpg: 1.2 // 1995-96賽季
  },
  {
    id: 'grant_hill_magic', name: "Grant Hill", team: 'magic', decade: 'All Time',
    positions: ["SF"],
    ppg: 19.7, rpg: 4.7, apg: 3.3, spg: 1.4, bpg: 0.4 // 2004-05賽季
  },
  {
    id: 'evan_fournier_magic', name: "Evan Fournier", team: 'magic', decade: 'All Time',
    positions: ["SG"],
    ppg: 19.7, rpg: 2.9, apg: 3.7, spg: 1.0, bpg: 0.3 // 2020-21賽季
  },
  {
    id: 'aaron_gordon_magic', name: "Aaron Gordon", team: 'magic', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 17.6, rpg: 7.9, apg: 2.3, spg: 1.0, bpg: 0.8 // 2017-18賽季
  },
  {
    id: 'bo_outlaw_magic', name: "Bo Outlaw", team: 'magic', decade: 'All Time',
    positions: ["PF"],
    ppg: 8.9, rpg: 6.9, apg: 2.7, spg: 1.1, bpg: 1.4 // 1999-00賽季
  },
  {
    id: 'jalen_suggs_magic', name: "Jalen Suggs", team: 'magic', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 15.2, rpg: 3.6, apg: 3.8, spg: 1.5, bpg: 0.7 // 2025-26賽季
  },

  // ==========================================
  // WASHINGTON WIZARDS (巫師/子彈隊 20人)
  // ==========================================
  {
    id: 'wes_unseld_wizards', name: "Wes Unseld", team: 'wizards', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 16.2, rpg: 17.0, apg: 3.8, spg: 0.0, bpg: 0.0 // 1969-70賽季 (阻攻抄截未列入歷史)
  },
  {
    id: 'elvin_hayes_wizards', name: "Elvin Hayes", team: 'wizards', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 23.0, rpg: 13.3, apg: 2.5, spg: 1.9, bpg: 3.0 // 1974-75賽季
  },
  {
    id: 'john_wall_wizards', name: "John Wall", team: 'wizards', decade: 'All Time',
    positions: ["PG"],
    ppg: 23.1, rpg: 4.2, apg: 10.7, spg: 2.0, bpg: 0.6 // 2016-17賽季
  },
  {
    id: 'bradley_beal_wizards', name: "Bradley Beal", team: 'wizards', decade: 'All Time',
    positions: ["SG"],
    ppg: 31.3, rpg: 4.7, apg: 4.4, spg: 1.2, bpg: 0.4 // 2020-21賽季
  },
  {
    id: 'gilbert_arenas_wizards', name: "Gilbert Arenas", team: 'wizards', decade: 'All Time',
    positions: ["PG"],
    ppg: 29.3, rpg: 3.5, apg: 6.1, spg: 2.0, bpg: 0.2 // 2005-06賽季
  },
  {
    id: 'earl_monroe_wizards', name: "Earl Monroe", team: 'wizards', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 25.8, rpg: 3.5, apg: 4.9, spg: 0.0, bpg: 0.0 // 1968-69賽季
  },
  {
    id: 'walt_bellamy_wizards', name: "Walt Bellamy", team: 'wizards', decade: 'All Time',
    positions: ["C"],
    ppg: 31.6, rpg: 19.0, apg: 2.7, spg: 0.0, bpg: 0.0 // 1961-62賽季
  },
  {
    id: 'gus_johnson_wizards', name: "Gus Johnson", team: 'wizards', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 20.7, rpg: 11.7, apg: 2.4, spg: 0.0, bpg: 0.0 // 1966-67賽季
  },
  {
    id: 'phil_chenier_wizards', name: "Phil Chenier", team: 'wizards', decade: 'All Time',
    positions: ["SG"],
    ppg: 21.9, rpg: 3.8, apg: 4.1, spg: 2.0, bpg: 0.8 // 1973-74賽季
  },
  {
    id: 'chris_webber_wizards', name: "Chris Webber", team: 'wizards', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 21.9, rpg: 9.5, apg: 3.8, spg: 1.7, bpg: 1.9 // 1997-98賽季
  },
  {
    id: 'antawn_jamison_wizards', name: "Antawn Jamison", team: 'wizards', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 22.2, rpg: 10.2, apg: 1.5, spg: 1.0, bpg: 0.5 // 2007-08賽季
  },
  {
    id: 'caron_butler_wizards', name: "Caron Butler", team: 'wizards', decade: 'All Time',
    positions: ["SF"],
    ppg: 20.3, rpg: 6.7, apg: 4.9, spg: 2.2, bpg: 0.3 // 2007-08賽季
  },
  {
    id: 'jeff_malone_wizards', name: "Jeff Malone", team: 'wizards', decade: 'All Time',
    positions: ["SG"],
    ppg: 24.3, rpg: 2.7, apg: 3.2, spg: 0.9, bpg: 0.1 // 1989-90賽季
  },
  {
    id: 'rod_strickland_wizards', name: "Rod Strickland", team: 'wizards', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.8, rpg: 5.3, apg: 10.5, spg: 1.7, bpg: 0.3 // 1997-98賽季
  },
  {
    id: 'juwan_howard_wizards', name: "Juwan Howard", team: 'wizards', decade: 'All Time',
    positions: ["PF"],
    ppg: 22.1, rpg: 8.1, apg: 4.4, spg: 0.8, bpg: 0.5 // 1995-96賽季
  },
  {
    id: 'michael_jordan_wizards', name: "Michael Jordan", team: 'wizards', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 22.9, rpg: 5.7, apg: 5.2, spg: 1.4, bpg: 0.4 // 2001-02賽季
  },
  {
    id: 'moses_malone_wizards', name: "Moses Malone", team: 'wizards', decade: 'All Time',
    positions: ["C"],
    ppg: 24.1, rpg: 11.3, apg: 1.6, spg: 0.8, bpg: 1.3 // 1986-87賽季
  },
  {
    id: 'bernard_king_wizards', name: "Bernard King", team: 'wizards', decade: 'All Time',
    positions: ["SF"],
    ppg: 28.4, rpg: 5.0, apg: 4.6, spg: 0.9, bpg: 0.3 // 1990-91賽季
  },
  {
    id: 'bob_dandridge_wizards', name: "Bob Dandridge", team: 'wizards', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 20.4, rpg: 5.9, apg: 3.8, spg: 1.3, bpg: 1.0 // 1978-79賽季
  },
  {
    id: 'kyle_kuzma_wizards', name: "Kyle Kuzma", team: 'wizards', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 22.2, rpg: 6.6, apg: 4.2, spg: 0.5, bpg: 0.7 // 2023-24賽季
  },
  // ==========================================
  // DENVER NUGGETS (金塊隊 20人)
  // ==========================================
  {
    id: 'nikola_jokic_nuggets', name: "Nikola Jokić", team: 'nuggets', decade: 'All Time',
    positions: ["C"],
    ppg: 27.1, rpg: 13.8, apg: 7.9, spg: 1.5, bpg: 0.9 // 2021-22賽季
  },
  {
    id: 'alex_english_nuggets', name: "Alex English", team: 'nuggets', decade: 'All Time',
    positions: ["SF"],
    ppg: 29.8, rpg: 5.0, apg: 4.2, spg: 0.9, bpg: 1.0 // 1985-86賽季
  },
  {
    id: 'carmelo_anthony_nuggets', name: "Carmelo Anthony", team: 'nuggets', decade: 'All Time',
    positions: ["SF"],
    ppg: 28.9, rpg: 6.0, apg: 3.8, spg: 1.2, bpg: 0.4 // 2006-07賽季
  },
  {
    id: 'david_thompson_nuggets', name: "David Thompson", team: 'nuggets', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 27.2, rpg: 4.9, apg: 4.5, spg: 1.2, bpg: 1.2 // 1977-78賽季
  },
  {
    id: 'jamal_murray_nuggets', name: "Jamal Murray", team: 'nuggets', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.2, rpg: 4.1, apg: 6.5, spg: 1.0, bpg: 0.7 // 2023-24賽季
  },
  {
    id: 'dikembe_mutombo_nuggets', name: "Dikembe Mutombo", team: 'nuggets', decade: 'All Time',
    positions: ["C"],
    ppg: 11.5, rpg: 12.5, apg: 1.4, spg: 0.5, bpg: 4.5 // 1995-96賽季
  },
  {
    id: 'dan_issel_nuggets', name: "Dan Issel", team: 'nuggets', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 23.8, rpg: 8.8, apg: 2.2, spg: 1.2, bpg: 0.7 // 1979-80賽季
  },
  {
    id: 'fat_lever_nuggets', name: "Fat Lever", team: 'nuggets', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.9, rpg: 8.9, apg: 8.0, spg: 2.5, bpg: 0.3 // 1986-87賽季
  },
  {
    id: 'antonio_mcdyess_nuggets', name: "Antonio McDyess", team: 'nuggets', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 20.8, rpg: 12.1, apg: 2.1, spg: 0.6, bpg: 1.5 // 2000-01賽季
  },
  {
    id: 'marcus_camby_nuggets', name: "Marcus Camby", team: 'nuggets', decade: 'All Time',
    positions: ["C"],
    ppg: 9.1, rpg: 13.1, apg: 3.3, spg: 1.1, bpg: 3.6 // 2007-08賽季
  },
  {
    id: 'allen_iverson_nuggets', name: "Allen Iverson", team: 'nuggets', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 26.4, rpg: 3.0, apg: 7.1, spg: 2.0, bpg: 0.1 // 2007-08賽季
  },
  {
    id: 'chauncey_billups_nuggets', name: "Chauncey Billups", team: 'nuggets', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.5, rpg: 3.1, apg: 5.6, spg: 1.1, bpg: 0.1 // 2009-10賽季
  },
  {
    id: 'mahmoud_abdulrauf_nuggets', name: "Mahmoud Abdul-Rauf", team: 'nuggets', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.2, rpg: 2.4, apg: 6.8, spg: 1.1, bpg: 0.1 // 1995-96賽季
  },
  {
    id: 'michael_porter_jr_nuggets', name: "Michael Porter Jr.", team: 'nuggets', decade: 'All Time',
    positions: ["SF"],
    ppg: 19.0, rpg: 7.3, apg: 1.2, spg: 0.7, bpg: 0.7 // 2020-21賽季
  },
  {
    id: 'aaron_gordon_nuggets', name: "Aaron Gordon", team: 'nuggets', decade: 'All Time',
    positions: ["PF"],
    ppg: 16.3, rpg: 6.6, apg: 3.0, spg: 0.8, bpg: 0.8 // 2022-23賽季
  },
  {
    id: 'kenyon_martin_nuggets', name: "Kenyon Martin", team: 'nuggets', decade: 'All Time',
    positions: ["PF"],
    ppg: 15.5, rpg: 7.3, apg: 2.4, spg: 1.4, bpg: 1.1 // 2004-05賽季
  },
  {
    id: 'nene_hilario_nuggets', name: "Nenê", team: 'nuggets', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 14.6, rpg: 7.8, apg: 1.4, spg: 1.2, bpg: 1.3 // 2008-09賽季
  },
  {
    id: 'jr_smith_nuggets', name: "J.R. Smith", team: 'nuggets', decade: 'All Time',
    positions: ["SG"],
    ppg: 15.4, rpg: 3.1, apg: 2.4, spg: 1.2, bpg: 0.2 // 2009-10賽季
  },
  {
    id: 'danilo_gallinari_nuggets', name: "Danilo Gallinari", team: 'nuggets', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 19.5, rpg: 5.3, apg: 2.5, spg: 0.8, bpg: 0.3 // 2015-16賽季
  },
  {
    id: 'bobby_jones_nuggets', name: "Bobby Jones", team: 'nuggets', decade: 'All Time',
    positions: ["PF"],
    ppg: 15.1, rpg: 8.3, apg: 3.2, spg: 2.3, bpg: 2.0 // 1976-77賽季
  },

  // ==========================================
  // MINNESOTA TIMBERWOLVES (灰狼隊 20人)
  // ==========================================
  {
    id: 'kevin_garnett_timberwolves', name: "Kevin Garnett", team: 'timberwolves', decade: 'All Time',
    positions: ["PF"],
    ppg: 24.2, rpg: 13.9, apg: 5.0, spg: 1.5, bpg: 2.2 // 2003-04賽季
  },
  {
    id: 'anthony_edwards_timberwolves', name: "Anthony Edwards", team: 'timberwolves', decade: 'All Time',
    positions: ["SG"],
    ppg: 25.9, rpg: 5.4, apg: 5.1, spg: 1.3, bpg: 0.5 // 2023-24賽季
  },
  {
    id: 'karlanthony_towns_timberwolves', name: "Karl-Anthony Towns", team: 'timberwolves', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 26.5, rpg: 10.8, apg: 4.4, spg: 1.0, bpg: 1.1 // 2019-20賽季
  },
  {
    id: 'kevin_love_timberwolves', name: "Kevin Love", team: 'timberwolves', decade: 'All Time',
    positions: ["PF"],
    ppg: 26.1, rpg: 12.5, apg: 4.4, spg: 0.8, bpg: 0.5 // 2013-14賽季
  },
  {
    id: 'sam_cassell_timberwolves', name: "Sam Cassell", team: 'timberwolves', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.8, rpg: 3.3, apg: 7.3, spg: 1.3, bpg: 0.2 // 2003-04賽季
  },
  {
    id: 'wally_szczerbiak_timberwolves', name: "Wally Szczerbiak", team: 'timberwolves', decade: 'All Time',
    positions: ["SF"],
    ppg: 18.7, rpg: 4.8, apg: 2.6, spg: 0.8, bpg: 0.3 // 2001-02賽季
  },
  {
    id: 'jimmy_butler_timberwolves', name: "Jimmy Butler", team: 'timberwolves', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 22.2, rpg: 5.3, apg: 4.9, spg: 2.0, bpg: 0.4 // 2017-18賽季
  },
  {
    id: 'rudy_gobert_timberwolves', name: "Rudy Gobert", team: 'timberwolves', decade: 'All Time',
    positions: ["C"],
    ppg: 14.0, rpg: 12.9, apg: 1.3, spg: 0.6, bpg: 2.1 // 2023-24賽季
  },
  {
    id: 'tom_gugliotta_timberwolves', name: "Tom Gugliotta", team: 'timberwolves', decade: 'All Time',
    positions: ["PF"],
    ppg: 20.6, rpg: 8.7, apg: 4.1, spg: 1.6, bpg: 1.1 // 1996-97賽季
  },
  {
    id: 'al_jefferson_timberwolves', name: "Al Jefferson", team: 'timberwolves', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 23.1, rpg: 11.0, apg: 1.6, spg: 0.8, bpg: 1.7 // 2008-09賽季
  },
  {
    id: 'stephon_marbury_timberwolves', name: "Stephon Marbury", team: 'timberwolves', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.7, rpg: 2.8, apg: 8.6, spg: 1.3, bpg: 0.1 // 1997-98賽季
  },
  {
    id: 'terrell_brandon_timberwolves', name: "Terrell Brandon", team: 'timberwolves', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.1, rpg: 3.4, apg: 8.9, spg: 1.9, bpg: 0.4 // 1999-00賽季
  },
  {
    id: 'ricky_rubio_timberwolves', name: "Ricky Rubio", team: 'timberwolves', decade: 'All Time',
    positions: ["PG"],
    ppg: 11.1, rpg: 4.1, apg: 9.1, spg: 1.7, bpg: 0.1 // 2016-17賽季
  },
  {
    id: 'dangelo_russell_timberwolves', name: "D'Angelo Russell", team: 'timberwolves', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.0, rpg: 2.6, apg: 5.3, spg: 1.1, bpg: 0.5 // 2020-21賽季
  },
  {
    id: 'andrew_wiggins_timberwolves', name: "Andrew Wiggins", team: 'timberwolves', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 23.6, rpg: 4.0, apg: 2.3, spg: 1.0, bpg: 0.4 // 2016-17賽季
  },
  {
    id: 'pooh_richardson_timberwolves', name: "Pooh Richardson", team: 'timberwolves', decade: 'All Time',
    positions: ["PG"],
    ppg: 16.5, rpg: 3.2, apg: 8.4, spg: 1.5, bpg: 0.2 // 1991-92賽季
  },
  {
    id: 'isaiah_rider_timberwolves', name: "Isaiah Rider", team: 'timberwolves', decade: 'All Time',
    positions: ["SG"],
    ppg: 20.4, rpg: 3.3, apg: 3.3, spg: 0.9, bpg: 0.3 // 1994-95賽季
  },
  {
    id: 'christian_laettner_timberwolves', name: "Christian Laettner", team: 'timberwolves', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 18.2, rpg: 8.7, apg: 2.8, spg: 1.3, bpg: 1.1 // 1992-93賽季
  },
  {
    id: 'latrell_sprewell_timberwolves', name: "Latrell Sprewell", team: 'timberwolves', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 16.8, rpg: 3.8, apg: 3.5, spg: 1.1, bpg: 0.3 // 2003-04賽季
  },
  {
    id: 'jaden_mcdaniels_timberwolves', name: "Jaden McDaniels", team: 'timberwolves', decade: 'All Time',
    positions: ["SF"],
    ppg: 12.1, rpg: 3.9, apg: 1.9, spg: 0.9, bpg: 1.0 // 2022-23賽季
  },
  // ==========================================
  // OKLAHOMA CITY THUNDER / SEATTLE SUPERSONICS (雷霆/超音速 20人)
  // ==========================================
  {
    id: 'kevin_durant_thunder', name: "Kevin Durant", team: 'thunder', decade: 'All Time',
    positions: ["SF"],
    ppg: 32.0, rpg: 7.4, apg: 5.5, spg: 1.3, bpg: 0.7 // 2013-14賽季
  },
  {
    id: 'russell_westbrook_thunder', name: "Russell Westbrook", team: 'thunder', decade: 'All Time',
    positions: ["PG"],
    ppg: 31.6, rpg: 10.7, apg: 10.4, spg: 1.6, bpg: 0.4 // 2016-17賽季
  },
  {
    id: 'shai_gilgeous_alexander_thunder', name: "Shai Gilgeous-Alexander", team: 'thunder', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 31.4, rpg: 4.8, apg: 5.5, spg: 1.6, bpg: 1.0 // 2022-23賽季
  },
  {
    id: 'gary_payton_thunder', name: "Gary Payton", team: 'thunder', decade: 'All Time',
    positions: ["PG"],
    ppg: 24.2, rpg: 6.5, apg: 8.9, spg: 1.9, bpg: 0.2 // 1999-00賽季
  },
  {
    id: 'spencer_haywood_thunder', name: "Spencer Haywood", team: 'thunder', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 29.2, rpg: 12.9, apg: 2.5, spg: 0.0, bpg: 0.0 // 1972-73賽季
  },
  {
    id: 'ray_allen_thunder', name: "Ray Allen", team: 'thunder', decade: 'All Time',
    positions: ["SG"],
    ppg: 26.4, rpg: 4.5, apg: 4.1, spg: 1.5, bpg: 0.2 // 2006-07賽季
  },
  {
    id: 'shawn_kemp_thunder', name: "Shawn Kemp", team: 'thunder', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 19.6, rpg: 11.4, apg: 2.2, spg: 1.2, bpg: 1.6 // 1995-96賽季
  },
  {
    id: 'paul_george_thunder', name: "Paul George", team: 'thunder', decade: 'All Time',
    positions: ["SF"],
    ppg: 28.0, rpg: 8.2, apg: 4.1, spg: 2.2, bpg: 0.4 // 2018-19賽季
  },
  {
    id: 'gus_williams_thunder', name: "Gus Williams", team: 'thunder', decade: 'All Time',
    positions: ["PG"],
    ppg: 23.4, rpg: 2.6, apg: 6.9, spg: 2.4, bpg: 0.7 // 1981-82賽季
  },
  {
    id: 'jack_sikma_thunder', name: "Jack Sikma", team: 'thunder', decade: 'All Time',
    positions: ["C"],
    ppg: 19.6, rpg: 12.7, apg: 3.4, spg: 1.2, bpg: 1.3 // 1981-82賽季
  },
  {
    id: 'james_harden_thunder', name: "James Harden", team: 'thunder', decade: 'All Time',
    positions: ["SG"],
    ppg: 16.8, rpg: 4.1, apg: 3.7, spg: 1.0, bpg: 0.2 // 2011-12賽季
  },
  {
    id: 'dale_ellis_thunder', name: "Dale Ellis", team: 'thunder', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 27.5, rpg: 4.2, apg: 2.0, spg: 1.3, bpg: 0.3 // 1988-89賽季
  },
  {
    id: 'serge_ibaka_thunder', name: "Serge Ibaka", team: 'thunder', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 15.1, rpg: 8.8, apg: 1.0, spg: 0.5, bpg: 2.7 // 2013-14賽季
  },
  {
    id: 'rashard_lewis_thunder', name: "Rashard Lewis", team: 'thunder', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 22.4, rpg: 6.6, apg: 2.4, spg: 1.1, bpg: 0.7 // 2006-07賽季
  },
  {
    id: 'detlef_schrempf_thunder', name: "Detlef Schrempf", team: 'thunder', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 19.2, rpg: 7.1, apg: 4.4, spg: 1.0, bpg: 0.1 // 1994-95賽季
  },
  {
    id: 'tom_chambers_thunder', name: "Tom Chambers", team: 'thunder', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 23.3, rpg: 6.6, apg: 3.0, spg: 1.0, bpg: 0.6 // 1986-87賽季
  },
  {
    id: 'lenny_wilkens_thunder', name: "Lenny Wilkens", team: 'thunder', decade: 'All Time',
    positions: ["PG"],
    ppg: 22.4, rpg: 6.2, apg: 9.1, spg: 0.0, bpg: 0.0 // 1968-69賽季
  },
  {
    id: 'fred_brown_thunder', name: "Fred Brown", team: 'thunder', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 23.1, rpg: 4.2, apg: 4.4, spg: 1.9, bpg: 0.2 // 1975-76賽季
  },
  {
    id: 'xavier_mcdaniel_thunder', name: "Xavier McDaniel", team: 'thunder', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 23.0, rpg: 8.6, apg: 3.4, spg: 1.4, bpg: 0.6 // 1986-87賽季
  },
  {
    id: 'chet_holmgren_thunder', name: "Chet Holmgren", team: 'thunder', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 18.5, rpg: 9.2, apg: 2.8, spg: 0.7, bpg: 2.5 // 2024-25賽季
  },

  // ==========================================
  // PORTLAND TRAIL BLAZERS (拓荒者隊 20人)
  // ==========================================
  {
    id: 'damian_lillard_blazers', name: "Damian Lillard", team: 'blazers', decade: 'All Time',
    positions: ["PG"],
    ppg: 32.2, rpg: 4.8, apg: 7.3, spg: 0.9, bpg: 0.3 // 2022-23賽季
  },
  {
    id: 'clyde_drexler_blazers', name: "Clyde Drexler", team: 'blazers', decade: 'All Time',
    positions: ["SG"],
    ppg: 27.2, rpg: 6.6, apg: 5.8, spg: 2.5, bpg: 0.7 // 1988-89賽季
  },
  {
    id: 'bill_walton_blazers', name: "Bill Walton", team: 'blazers', decade: 'All Time',
    positions: ["C"],
    ppg: 18.9, rpg: 13.2, apg: 5.0, spg: 1.0, bpg: 2.5 // 1977-78賽季
  },
  {
    id: 'lamarcus_aldridge_blazers', name: "LaMarcus Aldridge", team: 'blazers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 23.4, rpg: 10.2, apg: 1.7, spg: 0.7, bpg: 1.0 // 2014-15賽季
  },
  {
    id: 'brandon_roy_blazers', name: "Brandon Roy", team: 'blazers', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.6, rpg: 4.7, apg: 5.1, spg: 1.1, bpg: 0.2 // 2008-09賽季
  },
  {
    id: 'terry_porter_blazers', name: "Terry Porter", team: 'blazers', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.1, rpg: 3.5, apg: 8.9, spg: 1.5, bpg: 0.1 // 1991-92賽季
  },
  {
    id: 'maurice_lucas_blazers', name: "Maurice Lucas", team: 'blazers', decade: 'All Time',
    positions: ["PF"],
    ppg: 20.2, rpg: 11.4, apg: 2.9, spg: 1.1, bpg: 0.7 // 1976-77賽季
  },
  {
    id: 'rasheed_wallace_blazers', name: "Rasheed Wallace", team: 'blazers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 19.3, rpg: 8.2, apg: 1.9, spg: 1.3, bpg: 1.3 // 2001-02賽季
  },
  {
    id: 'cj_mccollum_blazers', name: "CJ McCollum", team: 'blazers', decade: 'All Time',
    positions: ["SG"],
    ppg: 23.1, rpg: 3.9, apg: 4.7, spg: 0.9, bpg: 0.4 // 2020-21賽季
  },
  {
    id: 'geoff_petrie_blazers', name: "Geoff Petrie", team: 'blazers', decade: 'All Time',
    positions: ["SG"],
    ppg: 24.3, rpg: 2.8, apg: 4.3, spg: 1.1, bpg: 0.1 // 1973-74賽季
  },
  {
    id: 'kiki_vandeweghe_blazers', name: "Kiki Vandeweghe", team: 'blazers', decade: 'All Time',
    positions: ["SF"],
    ppg: 26.9, rpg: 3.2, apg: 2.8, spg: 0.7, bpg: 0.2 // 1986-87賽季
  },
  {
    id: 'clifford_robinson_blazers', name: "Clifford Robinson", team: 'blazers', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 20.1, rpg: 6.7, apg: 1.9, spg: 1.4, bpg: 1.4 // 1993-94賽季
  },
  {
    id: 'jerome_kersey_blazers', name: "Jerome Kersey", team: 'blazers', decade: 'All Time',
    positions: ["SF"],
    ppg: 19.2, rpg: 8.3, apg: 3.1, spg: 1.6, bpg: 0.8 // 1987-88賽季
  },
  {
    id: 'sidney_wicks_blazers', name: "Sidney Wicks", team: 'blazers', decade: 'All Time',
    positions: ["PF"],
    ppg: 24.5, rpg: 11.5, apg: 4.3, spg: 1.2, bpg: 0.8 // 1971-72賽季
  },
  {
    id: 'arnon_subonis_blazers', name: "Arvydas Sabonis", team: 'blazers', decade: 'All Time',
    positions: ["C"],
    ppg: 16.0, rpg: 10.0, apg: 3.0, spg: 0.9, bpg: 1.1 // 1997-98賽季
  },
  {
    id: 'rod_strickland_blazers', name: "Rod Strickland", team: 'blazers', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.9, rpg: 4.4, apg: 9.6, spg: 1.8, bpg: 0.2 // 1994-95賽季
  },
  {
    id: 'jim_paxson_blazers', name: "Jim Paxson", team: 'blazers', decade: 'All Time',
    positions: ["SG"],
    ppg: 21.3, rpg: 2.1, apg: 3.6, spg: 1.5, bpg: 0.1 // 1983-84賽季
  },
  {
    id: 'scottie_pippen_blazers', name: "Scottie Pippen", team: 'blazers', decade: 'All Time',
    positions: ["SF"],
    ppg: 12.5, rpg: 6.3, apg: 5.0, spg: 1.4, bpg: 0.5 // 1999-00賽季
  },
  {
    id: 'zach_randolph_blazers', name: "Zach Randolph", team: 'blazers', decade: 'All Time',
    positions: ["PF"],
    ppg: 23.6, rpg: 10.1, apg: 2.2, spg: 0.8, bpg: 0.2 // 2006-07賽季
  },
  {
    id: 'jerami_grant_blazers', name: "Jerami Grant", team: 'blazers', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 21.0, rpg: 3.5, apg: 2.8, spg: 0.8, bpg: 0.6 // 2023-24賽季
  },
  // ==================== UTAH JAZZ (20名) ====================
  {
    id: 'karl_malone_jazz', name: "Karl Malone", team: 'jazz', decade: 'All Time',
    positions: ["PF"],
    ppg: 31.0, rpg: 11.1, apg: 2.8, spg: 1.5, bpg: 0.6 // 1989-90賽季
  },
  {
    id: 'john_stockton_jazz', name: "John Stockton", team: 'jazz', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.2, rpg: 2.6, apg: 14.5, spg: 2.7, bpg: 0.2 // 1989-90賽季
  },
  {
    id: 'adrian_dantley_jazz', name: "Adrian Dantley", team: 'jazz', decade: 'All Time',
    positions: ["SF"],
    ppg: 30.6, rpg: 6.4, apg: 4.0, spg: 1.4, bpg: 0.2 // 1981-82賽季
  },
  {
    id: 'pete_maravich_jazz', name: "Pete Maravich", team: 'jazz', decade: 'All Time',
    positions: ["SG"],
    ppg: 31.1, rpg: 5.1, apg: 5.4, spg: 1.2, bpg: 0.3 // 1976-77賽季
  },
  {
    id: 'rudy_gobert_jazz', name: "Rudy Gobert", team: 'jazz', decade: 'All Time',
    positions: ["C"],
    ppg: 15.6, rpg: 14.7, apg: 1.1, spg: 0.7, bpg: 2.1 // 2021-22賽季
  },
  {
    id: 'donovan_mitchell_jazz', name: "Donovan Mitchell", team: 'jazz', decade: 'All Time',
    positions: ["SG"],
    ppg: 25.9, rpg: 4.2, apg: 5.3, spg: 1.5, bpg: 0.2 // 2021-22賽季
  },
  {
    id: 'deron_williams_jazz', name: "Deron Williams", team: 'jazz', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.4, rpg: 3.0, apg: 10.7, spg: 1.1, bpg: 0.3 // 2007-08賽季
  },
  {
    id: 'mark_eaton_jazz', name: "Mark Eaton", team: 'jazz', decade: 'All Time',
    positions: ["C"],
    ppg: 9.7, rpg: 11.3, apg: 1.5, spg: 0.4, bpg: 5.6 // 1984-85賽季
  },
  {
    id: 'carlos_boozer_jazz', name: "Carlos Boozer", team: 'jazz', decade: 'All Time',
    positions: ["PF"],
    ppg: 21.1, rpg: 11.7, apg: 3.0, spg: 0.9, bpg: 0.3 // 2007-08賽季
  },
  {
    id: 'andrei_kirilenko_jazz', name: "Andrei Kirilenko", team: 'jazz', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 16.5, rpg: 8.1, apg: 3.1, spg: 1.9, bpg: 2.8 // 2003-04賽季
  },
  {
    id: 'darrell_griffith_jazz', name: "Darrell Griffith", team: 'jazz', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.6, rpg: 4.1, apg: 3.5, spg: 1.4, bpg: 0.3 // 1983-84賽季
  },
  {
    id: 'jeff_hornacek_jazz', name: "Jeff Hornacek", team: 'jazz', decade: 'All Time',
    positions: ["SG"],
    ppg: 16.5, rpg: 2.5, apg: 4.3, spg: 1.3, bpg: 0.2 // 1994-95賽季
  },
  {
    id: 'gordon_hayward_jazz', name: "Gordon Hayward", team: 'jazz', decade: 'All Time',
    positions: ["SF"],
    ppg: 21.9, rpg: 5.4, apg: 3.5, spg: 1.0, bpg: 0.3 // 2016-17賽季
  },
  {
    id: 'lauri_markkanen_jazz', name: "Lauri Markkanen", team: 'jazz', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 25.6, rpg: 8.6, apg: 1.9, spg: 0.6, bpg: 0.6 // 2022-23賽季
  },
  {
    id: 'paul_millsap_jazz', name: "Paul Millsap", team: 'jazz', decade: 'All Time',
    positions: ["PF"],
    ppg: 17.3, rpg: 7.6, apg: 2.5, spg: 1.4, bpg: 0.9 // 2010-11賽季
  },
  {
    id: 'mehmet_okur_jazz', name: "Mehmet Okur", team: 'jazz', decade: 'All Time',
    positions: ["C"],
    ppg: 18.0, rpg: 9.1, apg: 2.4, spg: 0.5, bpg: 0.9 // 2005-06賽季
  },
  {
    id: 'thurl_bailey_jazz', name: "Thurl Bailey", team: 'jazz', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 19.6, rpg: 6.5, apg: 1.9, spg: 0.6, bpg: 1.5 // 1987-88賽季
  },
  {
    id: 'rickey_green_jazz', name: "Rickey Green", team: 'jazz', decade: 'All Time',
    positions: ["PG"],
    ppg: 13.2, rpg: 2.8, apg: 9.2, spg: 2.4, bpg: 0.1 // 1983-84賽季
  },
  {
    id: 'jeff_malone_jazz', name: "Jeff Malone", team: 'jazz', decade: 'All Time',
    positions: ["SG"],
    ppg: 18.6, rpg: 2.2, apg: 2.2, spg: 0.5, bpg: 0.1 // 1990-91賽季
  },
  {
    id: 'derrick_favors_jazz', name: "Derrick Favors", team: 'jazz', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 16.4, rpg: 8.1, apg: 1.5, spg: 1.2, bpg: 1.5 // 2015-16賽季
  },

  // ==================== GOLDEN STATE WARRIORS (20名) ====================
  {
    id: 'stephen_curry_warriors', name: "Stephen Curry", team: 'warriors', decade: 'All Time',
    positions: ["PG"],
    ppg: 32.0, rpg: 5.5, apg: 5.8, spg: 1.2, bpg: 0.1 // 2020-21賽季
  },
  {
    id: 'wilt_chamberlain_warriors', name: "Wilt Chamberlain", team: 'warriors', decade: 'All Time',
    positions: ["C"],
    ppg: 50.4, rpg: 25.7, apg: 2.4, spg: 0.0, bpg: 0.0 // 191-62賽季 (當時無抄截/阻攻統計)
  },
  {
    id: 'rick_barry_warriors', name: "Rick Barry", team: 'warriors', decade: 'All Time',
    positions: ["SF"],
    ppg: 35.6, rpg: 9.2, apg: 3.6, spg: 0.0, bpg: 0.0 // 1966-67賽季 (當時無抄截/阻攻統計)
  },
  {
    id: 'chris_mullin_warriors', name: "Chris Mullin", team: 'warriors', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 25.7, rpg: 5.6, apg: 3.5, spg: 2.1, bpg: 0.8 // 1991-92賽季
  },
  {
    id: 'paul_arizin_warriors', name: "Paul Arizin", team: 'warriors', decade: 'All Time',
    positions: ["SF"],
    ppg: 25.6, rpg: 11.3, apg: 2.6, spg: 0.0, bpg: 0.0 // 1951-52賽季
  },
  {
    id: 'kevin_durant_warriors', name: "Kevin Durant", team: 'warriors', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 26.4, rpg: 6.8, apg: 5.4, spg: 0.7, bpg: 1.8 // 2017-18賽季
  },
  {
    id: 'klay_thompson_warriors', name: "Klay Thompson", team: 'warriors', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.3, rpg: 3.7, apg: 2.1, spg: 0.8, bpg: 0.5 // 2016-17賽季
  },
  {
    id: 'nate_thurmond_warriors', name: "Nate Thurmond", team: 'warriors', decade: 'All Time',
    positions: ["C"],
    ppg: 21.9, rpg: 22.0, apg: 4.2, spg: 0.0, bpg: 0.0 // 1967-68賽季 (當時無抄截/阻攻統計)
  },
  {
    id: 'draymond_green_warriors', name: "Draymond Green", team: 'warriors', decade: 'All Time',
    positions: ["PF"],
    ppg: 14.0, rpg: 9.5, apg: 7.4, spg: 1.5, bpg: 1.4 // 2015-16賽季
  },
  {
    id: 'tim_hardaway_warriors', name: "Tim Hardaway", team: 'warriors', decade: 'All Time',
    positions: ["PG"],
    ppg: 23.4, rpg: 3.8, apg: 10.0, spg: 2.0, bpg: 0.2 // 191-92賽季
  },
  {
    id: 'mitch_richmond_warriors', name: "Mitch Richmond", team: 'warriors', decade: 'All Time',
    positions: ["SG"],
    ppg: 23.9, rpg: 5.9, apg: 3.1, spg: 1.6, bpg: 0.3 // 1990-91賽季
  },
  {
    id: 'neil_johnston_warriors', name: "Neil Johnston", team: 'warriors', decade: 'All Time',
    positions: ["C"],
    ppg: 24.4, rpg: 11.1, apg: 2.8, spg: 0.0, bpg: 0.0 // 1953-54賽季
  },
  {
    id: 'baron_davis_warriors', name: "Baron Davis", team: 'warriors', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.8, rpg: 4.7, apg: 7.6, spg: 2.3, bpg: 0.5 // 2007-08賽季
  },
  {
    id: 'latrell_sprewell_warriors', name: "Latrell Sprewell", team: 'warriors', decade: 'All Time',
    positions: ["SG"],
    ppg: 24.2, rpg: 4.6, apg: 6.3, spg: 1.7, bpg: 0.6 // 1996-97賽季
  },
  {
    id: 'purvis_short_warriors', name: "Purvis Short", team: 'warriors', decade: 'All Time',
    positions: ["SF"],
    ppg: 28.0, rpg: 5.1, apg: 3.0, spg: 1.5, bpg: 0.3 // 1984-85賽季
  },
  {
    id: 'monta_ellis_warriors', name: "Monta Ellis", team: 'warriors', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 24.1, rpg: 4.0, apg: 5.6, spg: 2.1, bpg: 0.3 // 2010-11賽季
  },
  {
    id: 'joe_fulks_warriors', name: "Joe Fulks", team: 'warriors', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 26.0, rpg: 0.0, apg: 1.2, spg: 0.0, bpg: 0.0 // 1948-49賽季 (當時無籃板/抄截/阻攻統計)
  },
  {
    id: 'jason_richardson_warriors', name: "Jason Richardson", team: 'warriors', decade: 'All Time',
    positions: ["SG"],
    ppg: 23.2, rpg: 5.8, apg: 3.1, spg: 1.3, bpg: 0.5 // 2005-06賽季
  },
  {
    id: 'david_lee_warriors', name: "David Lee", team: 'warriors', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 20.1, rpg: 9.6, apg: 2.8, spg: 0.8, bpg: 0.3 // 2011-12賽季
  },
  {
    id: 'guy_rodgers_warriors', name: "Guy Rodgers", team: 'warriors', decade: 'All Time',
    positions: ["PG"],
    ppg: 13.9, rpg: 5.0, apg: 10.4, spg: 0.0, bpg: 0.0 // 1962-63賽季
  },
  // ==================== LOS ANGELES CLIPPERS (20名) ====================
  {
    id: 'chris_paul_clippers', name: "Chris Paul", team: 'clippers', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.1, rpg: 4.3, apg: 10.7, spg: 2.5, bpg: 0.1 // 2013-14賽季
  },
  {
    id: 'blake_griffin_clippers', name: "Blake Griffin", team: 'clippers', decade: 'All Time',
    positions: ["PF"],
    ppg: 24.1, rpg: 9.5, apg: 3.9, spg: 1.2, bpg: 0.6 // 2013-14賽季
  },
  {
    id: 'kawhi_leonard_clippers', name: "Kawhi Leonard", team: 'clippers', decade: 'All Time',
    positions: ["SF"],
    ppg: 27.1, rpg: 7.1, apg: 4.9, spg: 1.4, bpg: 0.6 // 2019-20賽季
  },
  {
    id: 'paul_george_clippers', name: "Paul George", team: 'clippers', decade: 'All Time',
    positions: ["SF"],
    ppg: 23.8, rpg: 6.1, apg: 5.1, spg: 1.5, bpg: 0.5 // 2023-24賽季
  },
  {
    id: 'bob_mcadoo_clippers', name: "Bob McAdoo", team: 'clippers', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 34.5, rpg: 14.1, apg: 2.2, spg: 1.1, bpg: 2.1 // 1974-75賽季 (布法羅勇敢者時期)
  },
  {
    id: 'elton_brand_clippers', name: "Elton Brand", team: 'clippers', decade: 'All Time',
    positions: ["PF"],
    ppg: 24.7, rpg: 10.0, apg: 2.6, spg: 1.0, bpg: 2.5 // 2005-06賽季
  },
  {
    id: 'deandre_jordan_clippers', name: "DeAndre Jordan", team: 'clippers', decade: 'All Time',
    positions: ["C"],
    ppg: 12.7, rpg: 13.8, apg: 1.2, spg: 0.6, bpg: 1.7 // 2016-17賽季
  },
  {
    id: 'randy_smith_clippers', name: "Randy Smith", team: 'clippers', decade: 'All Time',
    positions: ["SG"],
    ppg: 24.6, rpg: 3.8, apg: 5.6, spg: 2.1, bpg: 0.1 // 1977-78賽季 (布法羅勇敢者時期)
  },
  {
    id: 'danny_manning_clippers', name: "Danny Manning", team: 'clippers', decade: 'All Time',
    positions: ["PF"],
    ppg: 22.8, rpg: 6.6, apg: 2.6, spg: 1.4, bpg: 1.3 // 192-93賽季
  },
  {
    id: 'world_b_free_clippers', name: "World B. Free", team: 'clippers', decade: 'All Time',
    positions: ["SG"],
    ppg: 30.2, rpg: 3.5, apg: 4.2, spg: 1.2, bpg: 0.5 // 1979-80賽季 (聖地牙哥快艇時期)
  },
  {
    id: 'corey_maggette_clippers', name: "Corey Maggette", team: 'clippers', decade: 'All Time',
    positions: ["SF"],
    ppg: 22.1, rpg: 5.6, apg: 2.7, spg: 1.0, bpg: 0.1 // 2007-08賽季
  },
  {
    id: 'jamal_crawford_clippers', name: "Jamal Crawford", team: 'clippers', decade: 'All Time',
    positions: ["SG"],
    ppg: 18.6, rpg: 2.3, apg: 3.2, spg: 0.9, bpg: 0.2 // 2013-14賽季
  },
  {
    id: 'lou_williams_clippers', name: "Lou Williams", team: 'clippers', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.6, rpg: 2.5, apg: 5.3, spg: 1.1, bpg: 0.2 // 2017-18賽季
  },
  {
    id: 'chris_kaman_clippers', name: "Chris Kaman", team: 'clippers', decade: 'All Time',
    positions: ["C"],
    ppg: 18.5, rpg: 9.3, apg: 1.6, spg: 0.5, bpg: 1.2 // 2009-10賽季
  },
  {
    id: 'baron_davis_clippers', name: "Baron Davis", team: 'clippers', decade: 'All Time',
    positions: ["PG"],
    ppg: 15.3, rpg: 3.5, apg: 8.0, spg: 1.7, bpg: 0.6 // 2009-10賽季
  },
  {
    id: 'lamar_odom_clippers', name: "Lamar Odom", team: 'clippers', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 17.2, rpg: 7.8, apg: 5.2, spg: 1.0, bpg: 1.6 // 2000-01賽季
  },
  {
    id: 'tobias_harris_clippers', name: "Tobias Harris", team: 'clippers', decade: 'All Time',
    positions: ["PF"],
    ppg: 20.9, rpg: 7.9, apg: 2.7, spg: 0.7, bpg: 0.4 // 2018-19賽季
  },
  {
    id: 'norman_powell_clippers', name: "Norman Powell", team: 'clippers', decade: 'All Time',
    positions: ["SG"],
    ppg: 17.0, rpg: 3.4, apg: 1.1, spg: 0.6, bpg: 0.3 // 2022-23賽季
  },
  {
    id: 'swen_nater_clippers', name: "Swen Nater", team: 'clippers', decade: 'All Time',
    positions: ["C"],
    ppg: 13.4, rpg: 15.0, apg: 2.9, spg: 0.6, bpg: 0.5 // 1979-80賽季 (聖地牙哥快艇時期)
  },
  {
    id: 'jj_redick_clippers', name: "J.J. Redick", team: 'clippers', decade: 'All Time',
    positions: ["SG"],
    ppg: 16.4, rpg: 1.9, apg: 1.4, spg: 0.6, bpg: 0.1 // 2015-16賽季
  },

  // ==================== LOS ANGELES LAKERS (20名) ====================
  {
    id: 'kobe_bryant_lakers', name: "Kobe Bryant", team: 'lakers', decade: 'All Time',
    positions: ["SG"],
    ppg: 35.4, rpg: 5.3, apg: 4.5, spg: 1.8, bpg: 0.4 // 2005-06賽季
  },
  {
    id: 'magic_johnson_lakers', name: "Magic Johnson", team: 'lakers', decade: 'All Time',
    positions: ["PG"],
    ppg: 23.9, rpg: 6.3, apg: 12.2, spg: 1.7, bpg: 0.5 // 1986-87賽季
  },
  {
    id: 'kareem_abdul_jabbar_lakers', name: "Kareem Abdul-Jabbar", team: 'lakers', decade: 'All Time',
    positions: ["C"],
    ppg: 27.7, rpg: 16.9, apg: 5.0, spg: 1.5, bpg: 4.1 // 1975-76賽季
  },
  {
    id: 'shaquille_oneal_lakers', name: "Shaquille O'Neal", team: 'lakers', decade: 'All Time',
    positions: ["C"],
    ppg: 29.7, rpg: 13.6, apg: 3.8, spg: 0.5, bpg: 3.0 // 1999-00賽季
  },
  {
    id: 'jerry_west_lakers', name: "Jerry West", team: 'lakers', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 31.3, rpg: 7.1, apg: 5.7, spg: 0.0, bpg: 0.0 // 1965-66賽季 (當時無抄截/阻攻統計)
  },
  {
    id: 'elgin_baylor_lakers', name: "Elgin Baylor", team: 'lakers', decade: 'All Time',
    positions: ["SF"],
    ppg: 38.3, rpg: 18.6, apg: 4.6, spg: 0.0, bpg: 0.0 // 1961-62賽季 (當時無抄截/阻攻統計)
  },
  {
    id: 'wilt_chamberlain_lakers', name: "Wilt Chamberlain", team: 'lakers', decade: 'All Time',
    positions: ["C"],
    ppg: 20.5, rpg: 21.1, apg: 4.5, spg: 0.0, bpg: 0.0 // 1968-69賽季 (當時無抄截/阻攻統計)
  },
  {
    id: 'lebron_james_lakers', name: "LeBron James", team: 'lakers', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 30.3, rpg: 8.2, apg: 6.2, spg: 1.3, bpg: 1.1 // 2021-22賽季
  },
  {
    id: 'anthony_davis_lakers', name: "Anthony Davis", team: 'lakers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 26.1, rpg: 9.3, apg: 3.2, spg: 1.5, bpg: 2.3 // 2019-20賽季
  },
  {
    id: 'james_worthy_lakers', name: "James Worthy", team: 'lakers', decade: 'All Time',
    positions: ["SF"],
    ppg: 21.4, rpg: 6.0, apg: 3.5, spg: 1.2, bpg: 0.8 // 1989-90賽季
  },
  {
    id: 'pau_gasol_lakers', name: "Pau Gasol", team: 'lakers', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 18.9, rpg: 9.6, apg: 3.5, spg: 0.6, bpg: 1.0 // 2008-09賽季
  },
  {
    id: 'george_mikan_lakers', name: "George Mikan", team: 'lakers', decade: 'All Time',
    positions: ["C"],
    ppg: 28.4, rpg: 14.1, apg: 3.1, spg: 0.0, bpg: 0.0 // 1950-51賽季 (明尼亞波利斯湖人時期，無抄截/阻攻)
  },
  {
    id: 'jamaal_wilkes_lakers', name: "Jamaal Wilkes", team: 'lakers', decade: 'All Time',
    positions: ["SF"],
    ppg: 22.6, rpg: 5.4, apg: 2.8, spg: 1.5, bpg: 0.2 // 1980-81賽季
  },
  {
    id: 'gail_goodrich_lakers', name: "Gail Goodrich", team: 'lakers', decade: 'All Time',
    positions: ["SG"],
    ppg: 25.9, rpg: 3.6, apg: 5.5, spg: 1.5, bpg: 0.1 // 1971-72賽季
  },
  {
    id: 'byron_scott_lakers', name: "Byron Scott", team: 'lakers', decade: 'All Time',
    positions: ["SG"],
    ppg: 21.7, rpg: 4.1, apg: 4.1, spg: 1.9, bpg: 0.3 // 1987-88賽季
  },
  {
    id: 'vlade_divac_lakers', name: "Vlade Divac", team: 'lakers', decade: 'All Time',
    positions: ["C"],
    ppg: 16.0, rpg: 10.4, apg: 4.1, spg: 1.4, bpg: 2.2 // 194-95賽季
  },
  {
    id: 'nick_van_exel_lakers', name: "Nick Van Exel", team: 'lakers', decade: 'All Time',
    positions: ["PG"],
    ppg: 16.9, rpg: 2.8, apg: 8.5, spg: 0.9, bpg: 0.1 // 1994-95賽季
  },
  {
    id: 'eddie_jones_lakers', name: "Eddie Jones", team: 'lakers', decade: 'All Time',
    positions: ["SG"],
    ppg: 16.9, rpg: 3.8, apg: 3.1, spg: 2.0, bpg: 0.7 // 1997-98賽季
  },
  {
    id: 'lamar_odom_lakers', name: "Lamar Odom", team: 'lakers', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 14.4, rpg: 8.7, apg: 3.0, spg: 0.6, bpg: 0.7 // 2010-11賽季
  },
  {
    id: 'derek_fisher_lakers', name: "Derek Fisher", team: 'lakers', decade: 'All Time',
    positions: ["PG"],
    ppg: 11.5, rpg: 3.0, apg: 4.4, spg: 2.0, bpg: 0.1 // 2000-01賽季
  },
  //  Phoenix Suns  // 
  {
    id: 'steve_nash_suns', name: "Steve Nash", team: 'suns', decade: 'All Time',
    positions: ["PG"],
    ppg: 18.8, rpg: 4.2, apg: 10.5, spg: 0.8, bpg: 0.1 // 2005-06賽季
  },
  {
    id: 'charles_barkley_suns', name: "Charles Barkley", team: 'suns', decade: 'All Time',
    positions: ["PF"],
    ppg: 25.6, rpg: 12.2, apg: 5.1, spg: 1.6, bpg: 1.0 // 1992-93賽季
  },
  {
    id: 'devin_booker_suns', name: "Devin Booker", team: 'suns', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 27.8, rpg: 4.5, apg: 5.5, spg: 1.0, bpg: 0.3 // 2022-23賽季
  },
  {
    id: 'kevin_johnson_suns', name: "Kevin Johnson", team: 'suns', decade: 'All Time',
    positions: ["PG"],
    ppg: 22.5, rpg: 3.6, apg: 11.4, spg: 1.3, bpg: 0.2 // 1989-90賽季
  },
  {
    id: 'shawn_marion_suns', name: "Shawn Marion", team: 'suns', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 21.8, rpg: 11.8, apg: 1.8, spg: 2.0, bpg: 1.7 // 2005-06賽季
  },
  {
    id: 'amare_stoudemire_suns', name: "Amar'e Stoudemire", team: 'suns', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 26.0, rpg: 8.9, apg: 1.6, spg: 1.0, bpg: 1.6 // 2004-05賽季
  },
  {
    id: 'paul_westphal_suns', name: "Paul Westphal", team: 'suns', decade: 'All Time',
    positions: ["SG"],
    ppg: 25.2, rpg: 2.1, apg: 5.5, spg: 2.0, bpg: 0.4 // 1977-78賽季
  },
  {
    id: 'walter_davis_suns', name: "Walter Davis", team: 'suns', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 24.2, rpg: 6.0, apg: 3.4, spg: 1.4, bpg: 0.2 // 1977-78賽季
  },
  {
    id: 'dan_majerle_suns', name: "Dan Majerle", team: 'suns', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 18.2, rpg: 4.7, apg: 4.7, spg: 1.7, bpg: 0.4 // 1993-94賽季
  },
  {
    id: 'tom_chambers_suns', name: "Tom Chambers", team: 'suns', decade: 'All Time',
    positions: ["PF"],
    ppg: 27.2, rpg: 7.0, apg: 2.2, spg: 1.1, bpg: 0.6 // 1989-90賽季
  },
  {
    id: 'alvan_adams_suns', name: "Alvan Adams", team: 'suns', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 19.0, rpg: 9.1, apg: 5.6, spg: 1.5, bpg: 1.5 // 1975-76賽季
  },
  {
    id: 'dick_van_arsdale_suns', name: "Dick Van Arsdale", team: 'suns', decade: 'All Time',
    positions: ["SG", "SF"],
    ppg: 21.9, rpg: 5.2, apg: 4.1, spg: 0.0, bpg: 0.0 // 1970-71賽季 (當時未統計抄截阻攻)
  },
  {
    id: 'connie_hawkins_suns', name: "Connie Hawkins", team: 'suns', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 24.6, rpg: 13.5, apg: 4.8, spg: 0.0, bpg: 0.0 // 1969-70賽季 (當時未統計抄截阻攻)
  },
  {
    id: 'jason_kidd_suns', name: "Jason Kidd", team: 'suns', decade: 'All Time',
    positions: ["PG"],
    ppg: 16.9, rpg: 6.4, apg: 10.1, spg: 2.0, bpg: 0.4 // 2000-01賽季
  },
  {
    id: 'chris_paul_suns', name: "Chris Paul", team: 'suns', decade: 'All Time',
    positions: ["PG"],
    ppg: 16.4, rpg: 4.5, apg: 8.9, spg: 1.4, bpg: 0.3 // 2020-21賽季
  },
  {
    id: 'larry_nance_suns', name: "Larry Nance", team: 'suns', decade: 'All Time',
    positions: ["PF"],
    ppg: 22.5, rpg: 8.7, apg: 3.4, spg: 1.2, bpg: 2.1 // 1986-87賽季
  },
  {
    id: 'jeff_hornacek_suns', name: "Jeff Hornacek", team: 'suns', decade: 'All Time',
    positions: ["SG"],
    ppg: 20.1, rpg: 5.0, apg: 5.1, spg: 2.0, bpg: 0.4 // 1991-92賽季
  },
  {
    id: 'kevin_durant_suns', name: "Kevin Durant", team: 'suns', decade: 'All Time',
    positions: ["PF", "SF"],
    ppg: 27.1, rpg: 6.6, apg: 5.0, spg: 0.9, bpg: 1.2 // 2023-24賽季
  },
  {
    id: 'dennis_johnson_suns', name: "Dennis Johnson", team: 'suns', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 19.5, rpg: 5.1, apg: 4.6, spg: 1.3, bpg: 0.7 // 1981-82賽季
  },
  {
    id: 'leandro_barbosa_suns', name: "Leandro Barbosa", team: 'suns', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 18.1, rpg: 2.4, apg: 4.0, spg: 1.2, bpg: 0.2 // 2006-07賽季
  }, 
  // ==================== SACRAMENTO KINGS (20名) ====================
  {
    id: 'oscar_robertson_kings', name: "Oscar Robertson", team: 'kings', decade: 'All Time',
    positions: ["PG"],
    ppg: 31.4, rpg: 9.9, apg: 11.0, spg: 0.0, bpg: 0.0 // 1963-64賽季 (辛辛那提皇家時期，無抄截/阻攻)
  },
  {
    id: 'chris_webber_kings', name: "Chris Webber", team: 'kings', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 27.1, rpg: 11.1, apg: 4.2, spg: 1.3, bpg: 1.7 // 2000-01賽季
  },
  {
    id: "de'aaron_fox_kings", name: "De'Aaron Fox", team: 'kings', decade: 'All Time',
    positions: ["PG"],
    ppg: 26.6, rpg: 4.6, apg: 5.6, spg: 2.0, bpg: 0.4 // 2023-24賽季
  },
  {
    id: 'domantas_sabonis_kings', name: "Domantas Sabonis", team: 'kings', decade: 'All Time',
    positions: ["C"],
    ppg: 19.4, rpg: 13.7, apg: 8.2, spg: 0.9, bpg: 0.6 // 2023-24賽季
  },
  {
    id: 'demarcus_cousins_kings', name: "DeMarcus Cousins", team: 'kings', decade: 'All Time',
    positions: ["C"],
    ppg: 27.8, rpg: 10.6, apg: 4.8, spg: 1.4, bpg: 1.3 // 2016-17賽季
  },
  {
    id: 'mitch_richmond_kings', name: "Mitch Richmond", team: 'kings', decade: 'All Time',
    positions: ["SG"],
    ppg: 25.9, rpg: 3.9, apg: 4.2, spg: 1.5, bpg: 0.3 // 1996-97賽季
  },
  {
    id: 'nate_archibald_kings', name: "Nate Archibald", team: 'kings', decade: 'All Time',
    positions: ["PG"],
    ppg: 34.0, rpg: 2.8, apg: 11.4, spg: 0.0, bpg: 0.0 // 1972-73賽季 (堪薩斯城-奧馬哈國王時期)
  },
  {
    id: 'jerry_lucas_kings', name: "Jerry Lucas", team: 'kings', decade: 'All Time',
    positions: ["PF"],
    ppg: 21.5, rpg: 21.1, apg: 2.7, spg: 0.0, bpg: 0.0 // 1965-66賽季 (辛辛那提皇家時期，無抄截/阻攻)
  },
  {
    id: 'peja_stojakovic_kings', name: "Peja Stojakovic", team: 'kings', decade: 'All Time',
    positions: ["SF"],
    ppg: 24.2, rpg: 6.3, apg: 2.1, spg: 1.3, bpg: 0.2 // 2003-04賽季
  },
  {
    id: 'vlade_divac_kings', name: "Vlade Divac", team: 'kings', decade: 'All Time',
    positions: ["C"],
    ppg: 14.3, rpg: 10.0, apg: 3.0, spg: 0.9, bpg: 1.1 // 1998-99賽季
  },
  {
    id: 'mike_bibby_kings', name: "Mike Bibby", team: 'kings', decade: 'All Time',
    positions: ["PG"],
    ppg: 21.1, rpg: 2.9, apg: 5.4, spg: 1.0, bpg: 0.1 // 2005-06賽季
  },
  {
    id: 'otis_birdsong_kings', name: "Otis Birdsong", team: 'kings', decade: 'All Time',
    positions: ["SG"],
    ppg: 24.6, rpg: 3.6, apg: 3.3, spg: 1.7, bpg: 0.3 // 1980-81賽季 (堪薩斯城國王時期)
  },
  {
    id: 'reggie_theus_kings', name: "Reggie Theus", team: 'kings', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 22.8, rpg: 3.4, apg: 8.8, spg: 1.0, bpg: 0.2 // 1986-87賽季
  },
  {
    id: 'kevin_martin_kings', name: "Kevin Martin", team: 'kings', decade: 'All Time',
    positions: ["SG"],
    ppg: 24.6, rpg: 3.6, apg: 2.7, spg: 1.2, bpg: 0.2 // 2008-09賽季
  },
  {
    id: 'tyrese_haliburton_kings', name: "Tyrese Haliburton", team: 'kings', decade: 'All Time',
    positions: ["PG"],
    ppg: 14.3, rpg: 3.9, apg: 7.4, spg: 1.7, bpg: 0.7 // 2021-22賽季
  },
  {
    id: 'jack_twyman_kings', name: "Jack Twyman", team: 'kings', decade: 'All Time',
    positions: ["SF"],
    ppg: 31.2, rpg: 8.9, apg: 3.5, spg: 0.0, bpg: 0.0 // 1959-60賽季 (辛辛那提皇家時期，無抄截/阻攻)
  },
  {
    id: 'bobby_jackson_kings', name: "Bobby Jackson", team: 'kings', decade: 'All Time',
    positions: ["PG"],
    ppg: 15.2, rpg: 3.7, apg: 3.1, spg: 1.2, bpg: 0.1 // 2002-03賽季
  },
  {
    id: 'harrison_barnes_kings', name: "Harrison Barnes", team: 'kings', decade: 'All Time',
    positions: ["SF"],
    ppg: 16.4, rpg: 5.6, apg: 2.4, spg: 0.7, bpg: 0.2 // 2021-22賽季
  },
  {
    id: 'doug_christie_kings', name: "Doug Christie", team: 'kings', decade: 'All Time',
    positions: ["SG"],
    ppg: 12.0, rpg: 4.6, apg: 4.4, spg: 2.4, bpg: 0.5 // 2000-01賽季
  },
  {
    id: 'jason_williams_kings', name: "Jason Williams", team: 'kings', decade: 'All Time',
    positions: ["PG"],
    ppg: 12.3, rpg: 3.0, apg: 7.3, spg: 1.4, bpg: 0.1 // 1999-00賽季
  },
  // ==================== DALLAS MAVERICKS (20名) ====================
  {
    id: 'dirk_nowitzki_mavericks', name: "Dirk Nowitzki", team: 'mavericks', decade: 'All Time',
    positions: ["PF"],
    ppg: 26.6, rpg: 9.0, apg: 2.8, spg: 0.7, bpg: 1.0 // 2005-06賽季
  },
  {
    id: 'luka_doncic_mavericks', name: "Luka Doncic", team: 'mavericks', decade: 'All Time',
    positions: ["PG", "SG"],
    ppg: 33.9, rpg: 9.2, apg: 9.8, spg: 1.4, bpg: 0.5 // 2023-24賽季
  },
  {
    id: 'mark_aguirre_mavericks', name: "Mark Aguirre", team: 'mavericks', decade: 'All Time',
    positions: ["SF"],
    ppg: 29.5, rpg: 5.9, apg: 4.5, spg: 1.0, bpg: 0.3 // 1983-84賽季
  },
  {
    id: 'rolando_blackman_mavericks', name: "Rolando Blackman", team: 'mavericks', decade: 'All Time',
    positions: ["SG"],
    ppg: 22.4, rpg: 3.5, apg: 3.7, spg: 1.0, bpg: 0.3 // 1985-86賽季
  },
  {
    id: 'jason_kidd_mavericks', name: "Jason Kidd", team: 'mavericks', decade: 'All Time',
    positions: ["PG"],
    ppg: 16.6, rpg: 6.8, apg: 9.7, spg: 2.2, bpg: 0.3 // 195-96賽季
  },
  {
    id: 'steve_nash_mavericks', name: "Steve Nash", team: 'mavericks', decade: 'All Time',
    positions: ["PG"],
    ppg: 17.9, rpg: 3.1, apg: 7.7, spg: 0.6, bpg: 0.1 // 2001-02賽季
  },
  {
    id: 'michael_finley_mavericks', name: "Michael Finley", team: 'mavericks', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 22.6, rpg: 6.3, apg: 5.3, spg: 1.3, bpg: 0.4 // 1999-00賽季
  },
  {
    id: 'kyrie_irving_mavericks', name: "Kyrie Irving", team: 'mavericks', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 25.6, rpg: 5.0, apg: 5.2, spg: 1.3, bpg: 0.5 // 2023-24賽季
  },
  {
    id: 'jason_terry_mavericks', name: "Jason Terry", team: 'mavericks', decade: 'All Time',
    positions: ["SG", "PG"],
    ppg: 19.6, rpg: 2.4, apg: 3.4, spg: 1.3, bpg: 0.3 // 2008-09賽季
  },
  {
    id: 'jerry_stackhouse_mavericks', name: "Jerry Stackhouse", team: 'mavericks', decade: 'All Time',
    positions: ["SF", "SG"],
    ppg: 14.9, rpg: 3.3, apg: 2.3, spg: 0.9, bpg: 0.2 // 2004-05賽季
  },
  {
    id: 'derek_harper_mavericks', name: "Derek Harper", team: 'mavericks', decade: 'All Time',
    positions: ["PG"],
    ppg: 19.7, rpg: 3.0, apg: 7.1, spg: 1.9, bpg: 0.2 // 1989-90賽季
  },
  {
    id: 'sam_perkins_mavericks', name: "Sam Perkins", team: 'mavericks', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 15.9, rpg: 8.6, apg: 1.9, spg: 0.9, bpg: 0.8 // 1989-90賽季
  },
  {
    id: 'kristaps_porzingis_mavericks', name: "Kristaps Porzingis", team: 'mavericks', decade: 'All Time',
    positions: ["PF", "C"],
    ppg: 20.4, rpg: 9.5, apg: 1.8, spg: 0.7, bpg: 2.0 // 2019-20賽季
  },
  {
    id: 'josh_howard_mavericks', name: "Josh Howard", team: 'mavericks', decade: 'All Time',
    positions: ["SF"],
    ppg: 19.9, rpg: 7.0, apg: 2.2, spg: 0.8, bpg: 0.4 // 2007-08賽季
  },
  {
    id: 'tyson_chandler_mavericks', name: "Tyson Chandler", team: 'mavericks', decade: 'All Time',
    positions: ["C"],
    ppg: 10.3, rpg: 11.5, apg: 1.1, spg: 0.6, bpg: 1.2 // 2014-15賽季
  },
  {
    id: 'shawn_marion_mavericks', name: "Shawn Marion", team: 'mavericks', decade: 'All Time',
    positions: ["SF", "PF"],
    ppg: 12.5, rpg: 8.1, apg: 2.1, spg: 1.1, bpg: 0.7 // 2010-11賽季
  },
  {
    id: 'jalen_brunson_mavericks', name: "Jalen Brunson", team: 'mavericks', decade: 'All Time',
    positions: ["PG"],
    ppg: 16.3, rpg: 3.9, apg: 4.8, spg: 0.8, bpg: 0.0 // 2021-22賽季
  },
  {
    id: 'roy_tarpley_mavericks', name: "Roy Tarpley", team: 'mavericks', decade: 'All Time',
    positions: ["C", "PF"],
    ppg: 13.5, rpg: 11.8, apg: 1.1, spg: 1.3, bpg: 1.1 // 1987-88賽季
  },
  {
    id: 'brad_daugherty_mavericks', name: "Jim Jackson", team: 'mavericks', decade: 'All Time',
    positions: ["SG"],
    ppg: 25.7, rpg: 5.1, apg: 3.7, spg: 0.5, bpg: 0.2 // 194-95賽季
  },
  {
    id: 'jj_barea_mavericks', name: "J.J. Barea", team: 'mavericks', decade: 'All Time',
    positions: ["PG"],
    ppg: 11.6, rpg: 2.9, apg: 6.3, spg: 0.5, bpg: 0.0 // 2017-18賽季
  },

];

function computePlayerRating(player) {
  if (!player) return 0;

  // 計算單一球員的 Point Value 貢獻度
  let pointValue = (0.34 * player.ppg) + 
                   (0.59 * player.rpg) + 
                   (0.63 * player.apg) + 
                   (1.29 * player.spg) + 
                   (1.55 * player.bpg);

  const isOldEra = player.spg === 0 && player.bpg === 0 ;
  if (isOldEra) {
    pointValue += 3.4;
  }

  // 回傳球員個人的點數（大約會在 15~30 之間）
  return pointValue;
}

function computeTeamRating(players) {
  if (!players || players.length === 0) return 0;
  const activePlayers = players.filter(p => p !== null);
  if (activePlayers.length === 0) return 0;

  // 【修正關鍵】：將所有主力的 Point Value 加總，而不是取平均！
  // 5 個場均貢獻 20 幾勝的球員加起來，總合才會落在 100 多（代表球隊整體的競爭力指標）
  const total = activePlayers.reduce((sum, p) => sum + computePlayerRating(p), 0);
  return total; 
}

function getWinRecord(teamRating) {
  // 這裡的 teamRating 已經是全隊加總的 pointValue
  // 帶入公式：projected wins ≈ 0.83 × point value − 9.6
  // 例如：24 + 25 + 19 + 25 + 23 = 116。 116 * 0.83 - 9.6 ≈ 86.6 勝
  let baseWins = Math.round((0.83 * teamRating) - 9.6);
  
  // 根據原公式誤差（約 ±0.4 wins），這裡隨機波動給小一點（-1 到 +1）
  const variance = Math.floor(Math.random() * 3) - 1; 
  
  // 限制在常規賽 82 場以內
  const wins = Math.max(0, Math.min(82, baseWins + variance));
  return { wins, losses: 82 - wins };
}
// 以下函式保持不變
function getPlayersForTeamAndDecade(teamId, decade) {
  return PLAYERS.filter(p => p.team === teamId && p.decade === decade);
}

function getRandomTeam() {
  return NBA_TEAMS[Math.floor(Math.random() * NBA_TEAMS.length)];
}

const ALL_DECADES = ['會是誰呢?', '怪力亂神?', '阿潘我啦~', '阿不是阿!', '原來彪哥也知道...', '阿祥起來啦!'];

function getRandomDecade() {
  return ALL_DECADES[Math.floor(Math.random() * ALL_DECADES.length)];
}
function getTeamById(id) {
  return NBA_TEAMS.find(t => t.id === id);
}


