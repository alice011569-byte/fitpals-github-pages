const rewardProfiles = {
  walk: {
    icon: "⌁",
    color: "#62b66a",
    region: "버섯 숲",
    pet: "Leafling",
    petFile: "leafling.svg",
    item: "숲 젤리",
    coin: "잎사귀 코인",
    wearables: ["산책화", "초록 후드", "물병"],
  },
  run: {
    icon: "↯",
    color: "#e35d77",
    region: "바람 언덕",
    pet: "Sparky",
    petFile: "sparky.svg",
    item: "번개 베리",
    coin: "스피드 리본",
    wearables: ["선글라스", "러닝복", "물병"],
  },
  water: {
    icon: "≈",
    color: "#56a9d9",
    region: "조개 호수",
    pet: "Splashy",
    petFile: "splashy.svg",
    item: "진주",
    coin: "파도 티켓",
    wearables: ["수경", "수영복", "수모"],
  },
  mindful: {
    icon: "✺",
    color: "#8c75d7",
    region: "구름 방",
    pet: "Mellow",
    petFile: "mellow.svg",
    item: "구름 쿠션",
    coin: "숨결 차",
    wearables: ["명상 로브", "헤어밴드", "요가 매트"],
  },
  mountain: {
    icon: "△",
    color: "#d38d39",
    region: "돌산 길",
    pet: "Pebbli",
    petFile: "pebbli.svg",
    item: "반짝 조약돌",
    coin: "등반 배지",
    wearables: ["등산모", "트레킹 조끼", "작은 배낭"],
  },
  sun: {
    icon: "☼",
    color: "#ffbf4d",
    region: "햇살 코트",
    pet: "Sunny",
    petFile: "sunny.svg",
    item: "햇살 씨앗",
    coin: "플레이 토큰",
    wearables: ["팀 유니폼", "응원 머리띠", "스포츠백"],
  },
  night: {
    icon: "◐",
    color: "#4d6e91",
    region: "달빛 체육관",
    pet: "Dozy",
    petFile: "dozy.svg",
    item: "달빛 파우더",
    coin: "집중 배지",
    wearables: ["짐웨어", "손목 보호대", "달빛 헤드폰"],
  },
  rain: {
    icon: "◇",
    color: "#4aa9a1",
    region: "비밀 경기장",
    pet: "Drizzle",
    petFile: "drizzle.svg",
    item: "물방울 스티커",
    coin: "팀 코인",
    wearables: ["코트 재킷", "라켓 가방", "팀 캡"],
  },
};

const workoutTypes = [
  { id: "outdoor-walk", name: "실외 걷기", minutes: 20, profile: "walk" },
  { id: "indoor-walk", name: "실내 걷기", minutes: 20, profile: "walk" },
  { id: "hiking", name: "하이킹", minutes: 30, profile: "mountain" },
  { id: "wheelchair-walk-pace", name: "휠체어 걷기 페이스", minutes: 20, profile: "walk" },
  { id: "outdoor-run", name: "실외 달리기", minutes: 10, profile: "run" },
  { id: "indoor-run", name: "실내 달리기", minutes: 10, profile: "run" },
  { id: "wheelchair-run-pace", name: "휠체어 달리기 페이스", minutes: 10, profile: "run" },
  { id: "outdoor-cycle", name: "실외 사이클", minutes: 20, profile: "run" },
  { id: "indoor-cycle", name: "실내 사이클", minutes: 20, profile: "run" },
  { id: "hand-cycling", name: "핸드 사이클", minutes: 20, profile: "run" },
  { id: "pool-swim", name: "수영장 수영", minutes: 15, profile: "water" },
  { id: "open-water-swim", name: "야외 수영", minutes: 15, profile: "water" },
  { id: "water-fitness", name: "수중 피트니스", minutes: 15, profile: "water" },
  { id: "water-polo", name: "수구", minutes: 20, profile: "water" },
  { id: "water-sports", name: "수상 스포츠", minutes: 20, profile: "water" },
  { id: "paddling", name: "패들링", minutes: 20, profile: "water" },
  { id: "sailing", name: "세일링", minutes: 20, profile: "water" },
  { id: "surfing", name: "서핑", minutes: 20, profile: "water" },
  { id: "rowing", name: "로잉", minutes: 15, profile: "water" },
  { id: "elliptical", name: "일립티컬", minutes: 15, profile: "run" },
  { id: "stair-stepper", name: "스테어 스테퍼", minutes: 15, profile: "mountain" },
  { id: "stairs", name: "계단", minutes: 10, profile: "mountain" },
  { id: "step-training", name: "스텝 트레이닝", minutes: 15, profile: "mountain" },
  { id: "core-training", name: "코어 트레이닝", minutes: 10, profile: "night" },
  { id: "traditional-strength", name: "전통 근력 운동", minutes: 15, profile: "night" },
  { id: "functional-strength", name: "기능성 근력 운동", minutes: 15, profile: "night" },
  { id: "high-intensity-interval-training", name: "고강도 인터벌 트레이닝", minutes: 10, profile: "run" },
  { id: "cross-training", name: "크로스 트레이닝", minutes: 15, profile: "run" },
  { id: "mixed-cardio", name: "혼합 유산소", minutes: 15, profile: "run" },
  { id: "kickboxing", name: "킥복싱", minutes: 15, profile: "sun" },
  { id: "boxing", name: "복싱", minutes: 15, profile: "sun" },
  { id: "martial-arts", name: "무술", minutes: 15, profile: "sun" },
  { id: "wrestling", name: "레슬링", minutes: 15, profile: "sun" },
  { id: "yoga", name: "요가", minutes: 10, profile: "mindful" },
  { id: "pilates", name: "필라테스", minutes: 10, profile: "mindful" },
  { id: "tai-chi", name: "태극권", minutes: 10, profile: "mindful" },
  { id: "mind-and-body", name: "마음과 몸", minutes: 10, profile: "mindful" },
  { id: "cooldown", name: "쿨다운", minutes: 5, profile: "mindful" },
  { id: "flexibility", name: "유연성", minutes: 5, profile: "mindful" },
  { id: "stretching", name: "스트레칭", minutes: 5, profile: "mindful" },
  { id: "barre", name: "바레", minutes: 10, profile: "mindful" },
  { id: "dance", name: "댄스", minutes: 15, profile: "sun" },
  { id: "social-dance", name: "소셜 댄스", minutes: 15, profile: "sun" },
  { id: "play", name: "놀이", minutes: 15, profile: "sun" },
  { id: "fitness-gaming", name: "피트니스 게임", minutes: 15, profile: "sun" },
  { id: "badminton", name: "배드민턴", minutes: 15, profile: "rain" },
  { id: "tennis", name: "테니스", minutes: 15, profile: "rain" },
  { id: "table-tennis", name: "탁구", minutes: 15, profile: "rain" },
  { id: "pickleball", name: "피클볼", minutes: 15, profile: "rain" },
  { id: "racquetball", name: "라켓볼", minutes: 15, profile: "rain" },
  { id: "squash", name: "스쿼시", minutes: 15, profile: "rain" },
  { id: "basketball", name: "농구", minutes: 15, profile: "sun" },
  { id: "soccer", name: "축구", minutes: 20, profile: "sun" },
  { id: "baseball", name: "야구", minutes: 20, profile: "sun" },
  { id: "softball", name: "소프트볼", minutes: 20, profile: "sun" },
  { id: "volleyball", name: "배구", minutes: 15, profile: "sun" },
  { id: "american-football", name: "미식축구", minutes: 20, profile: "sun" },
  { id: "australian-football", name: "오스트레일리안 풋볼", minutes: 20, profile: "sun" },
  { id: "rugby", name: "럭비", minutes: 20, profile: "sun" },
  { id: "hockey", name: "하키", minutes: 20, profile: "rain" },
  { id: "handball", name: "핸드볼", minutes: 15, profile: "rain" },
  { id: "lacrosse", name: "라크로스", minutes: 20, profile: "rain" },
  { id: "cricket", name: "크리켓", minutes: 20, profile: "sun" },
  { id: "golf", name: "골프", minutes: 30, profile: "walk" },
  { id: "disc-sports", name: "디스크 스포츠", minutes: 20, profile: "sun" },
  { id: "track-and-field", name: "육상", minutes: 15, profile: "run" },
  { id: "bowling", name: "볼링", minutes: 20, profile: "night" },
  { id: "archery", name: "양궁", minutes: 15, profile: "night" },
  { id: "fencing", name: "펜싱", minutes: 15, profile: "night" },
  { id: "gymnastics", name: "체조", minutes: 15, profile: "mindful" },
  { id: "skating", name: "스케이팅", minutes: 20, profile: "rain" },
  { id: "cross-country-skiing", name: "크로스컨트리 스키", minutes: 20, profile: "mountain" },
  { id: "downhill-skiing", name: "활강 스키", minutes: 20, profile: "mountain" },
  { id: "snowboarding", name: "스노보드", minutes: 20, profile: "mountain" },
  { id: "snow-sports", name: "눈 스포츠", minutes: 20, profile: "mountain" },
  { id: "climbing", name: "클라이밍", minutes: 20, profile: "mountain" },
  { id: "equestrian-sports", name: "승마 스포츠", minutes: 20, profile: "mountain" },
  { id: "curling", name: "컬링", minutes: 20, profile: "night" },
  { id: "fishing", name: "낚시", minutes: 30, profile: "water" },
  { id: "hunting", name: "사냥", minutes: 30, profile: "mountain" },
  { id: "rolling", name: "롤링", minutes: 20, profile: "run" },
  { id: "skipping-rope", name: "줄넘기", minutes: 10, profile: "run" },
  { id: "multisport", name: "멀티스포츠", minutes: 30, profile: "rain" },
  { id: "other", name: "기타", minutes: 15, profile: "night" },
];

const activities = workoutTypes.map((workout, index) => {
  const profile = rewardProfiles[workout.profile];
  const badge = `${workout.name} 배지`;

  return {
    ...workout,
    icon: profile.icon,
    color: profile.color,
    region: profile.region,
    pet: profile.pet,
    petFile: profile.petFile,
    title: `${workout.name} 보상 상자가 열렸어요`,
    rewardTitle: `${workout.name} 상자`,
    copy: `${workout.minutes}분 이상 기록하면 ${profile.pet} 계열 친구와 ${profile.wearables.join(", ")} 보상을 얻어요.`,
    items: [profile.item, ...profile.wearables, profile.coin, badge],
    growthItems: [profile.item, profile.coin, badge],
    wardrobeItems: profile.wearables,
  };
});

const dex = activities;

const goalOptions = [
  { activityId: "outdoor-walk", defaultTarget: 3, unit: "km" },
  { activityId: "outdoor-run", defaultTarget: 5, unit: "km" },
  { activityId: "pool-swim", defaultTarget: 1000, unit: "m" },
  { activityId: "open-water-swim", defaultTarget: 800, unit: "m" },
  { activityId: "rowing", defaultTarget: 20, unit: "분" },
  { activityId: "outdoor-cycle", defaultTarget: 12, unit: "km" },
  { activityId: "yoga", defaultTarget: 20, unit: "분" },
  { activityId: "traditional-strength", defaultTarget: 25, unit: "분" },
  { activityId: "stretching", defaultTarget: 10, unit: "분" },
];

const appToday = new Date(2026, 6, 1);

const petGrowthTemplates = {
  Leafling: { activityId: "outdoor-walk", mood: "산책을 좋아해요", item: "숲 젤리" },
  Sparky: { activityId: "outdoor-run", mood: "빠른 운동에 반응해요", item: "번개 베리" },
  Splashy: { activityId: "pool-swim", mood: "물 아이템을 좋아해요", item: "진주" },
  Mellow: { activityId: "stretching", mood: "회복 루틴에 강해요", item: "구름 쿠션" },
  Pebbli: { activityId: "hiking", mood: "언덕과 등산 보상을 좋아해요", item: "반짝 조약돌" },
};

const wardrobeCategories = [
  { id: "all", label: "전체" },
  { id: "run", label: "러닝" },
  { id: "water", label: "수영" },
  { id: "walk", label: "산책" },
  { id: "mindful", label: "회복" },
  { id: "outdoor", label: "아웃도어" },
  { id: "team", label: "스포츠" },
];

const closetItems = [
  { id: "sunglasses", name: "선글라스", slot: "face", icon: "⌐", unlockItem: "선글라스", category: "run" },
  { id: "running-suit", name: "러닝복", slot: "outfit", icon: "↯", unlockItem: "러닝복", category: "run" },
  { id: "water-bottle", name: "물병", slot: "accessory", icon: "▯", unlockItem: "물병", category: "run" },
  { id: "swim-goggles", name: "수경", slot: "face", icon: "∞", unlockItem: "수경", category: "water" },
  { id: "swimsuit", name: "수영복", slot: "outfit", icon: "≈", unlockItem: "수영복", category: "water" },
  { id: "swim-cap", name: "수모", slot: "hat", icon: "◡", unlockItem: "수모", category: "water" },
  { id: "walking-shoes", name: "산책화", slot: "accessory", icon: "⌁", unlockItem: "산책화", category: "walk" },
  { id: "green-hoodie", name: "초록 후드", slot: "outfit", icon: "◠", unlockItem: "초록 후드", category: "walk" },
  { id: "meditation-robe", name: "명상 로브", slot: "outfit", icon: "✺", unlockItem: "명상 로브", category: "mindful" },
  { id: "hair-band", name: "헤어밴드", slot: "hat", icon: "▱", unlockItem: "헤어밴드", category: "mindful" },
  { id: "yoga-mat", name: "요가 매트", slot: "accessory", icon: "▭", unlockItem: "요가 매트", category: "mindful" },
  { id: "hiking-hat", name: "등산모", slot: "hat", icon: "△", unlockItem: "등산모", category: "outdoor" },
  { id: "trekking-vest", name: "트레킹 조끼", slot: "outfit", icon: "▰", unlockItem: "트레킹 조끼", category: "outdoor" },
  { id: "mini-backpack", name: "작은 배낭", slot: "accessory", icon: "▣", unlockItem: "작은 배낭", category: "outdoor" },
  { id: "team-uniform", name: "팀 유니폼", slot: "outfit", icon: "☼", unlockItem: "팀 유니폼", category: "team" },
  { id: "cheer-headband", name: "응원 머리띠", slot: "hat", icon: "✦", unlockItem: "응원 머리띠", category: "team" },
  { id: "sports-bag", name: "스포츠백", slot: "accessory", icon: "▤", unlockItem: "스포츠백", category: "team" },
  { id: "team-cap", name: "팀 캡", slot: "hat", icon: "◇", unlockItem: "팀 캡", category: "team" },
  { id: "gym-wear", name: "짐웨어", slot: "outfit", icon: "◐", unlockItem: "짐웨어", category: "team" },
  { id: "wrist-guard", name: "손목 보호대", slot: "accessory", icon: "=", unlockItem: "손목 보호대", category: "team" },
  { id: "moon-headphones", name: "달빛 헤드폰", slot: "hat", icon: "◑", unlockItem: "달빛 헤드폰", category: "team" },
  { id: "court-jacket", name: "코트 재킷", slot: "outfit", icon: "◇", unlockItem: "코트 재킷", category: "team" },
  { id: "racket-bag", name: "라켓 가방", slot: "accessory", icon: "◈", unlockItem: "라켓 가방", category: "team" },
];

const roomDecorItems = [
  { id: "forest-rug", name: "숲 러그", icon: "▰", unlockItem: "숲 젤리", area: "floor" },
  { id: "shell-lamp", name: "조개 램프", icon: "◒", unlockItem: "진주", area: "shelf" },
  { id: "cloud-cushion", name: "구름 쿠션", icon: "◌", unlockItem: "구름 쿠션", area: "floor" },
  { id: "speed-poster", name: "스피드 포스터", icon: "↯", unlockItem: "스피드 리본", area: "shelf" },
];

const state = {
  selected: activities[0],
  selectedPet: "Leafling",
  wardrobeCategory: "all",
  locationEnabled: false,
  jointRewardClaimed: false,
  calendarMonth: new Date(2026, 6, 1),
  selectedCalendarDate: "2026-07-01",
  goals: {
    today: { activityId: "outdoor-walk", target: 3, unit: "km" },
    tomorrow: { activityId: "pool-swim", target: 1000, unit: "m" },
  },
  syncCount: 0,
  todayWorkouts: [
    { id: "morning-walk", activityId: "outdoor-walk", source: "Apple Watch", minutes: 24, time: "08:12", rewarded: false },
    { id: "lunch-stretch", activityId: "stretching", source: "iPhone Fitness", minutes: 8, time: "12:40", rewarded: false },
    { id: "evening-run", activityId: "outdoor-run", source: "Apple Watch", minutes: 16, time: "18:26", rewarded: true },
  ],
  inventory: {
    "숲 젤리": 3,
    "잎사귀 코인": 20,
    "진주": 1,
    "구름 쿠션": 1,
    "선글라스": 1,
    "러닝복": 1,
    "물병": 2,
    "수경": 1,
    "수모": 1,
    "초록 후드": 1,
  },
  pets: {
    Leafling: { level: 2, xp: 35, petFile: "leafling.svg", unlocked: true, outfit: "green-hoodie", hat: null, face: null, accessory: "water-bottle" },
    Sparky: { level: 1, xp: 60, petFile: "sparky.svg", unlocked: true, outfit: "running-suit", hat: null, face: "sunglasses", accessory: "water-bottle" },
    Splashy: { level: 1, xp: 20, petFile: "splashy.svg", unlocked: true, outfit: null, hat: "swim-cap", face: "swim-goggles", accessory: null },
    Mellow: { level: 1, xp: 10, petFile: "mellow.svg", unlocked: true, outfit: null, hat: null, face: null, accessory: null },
  },
  roomDecor: {
    floor: ["forest-rug"],
    shelf: ["shell-lamp"],
  },
  logs: [
    { activity: activities[0], minutes: 28, when: "오늘 08:42", reward: "+ Leafling" },
    { activity: activities[39], minutes: 7, when: "어제 22:10", reward: "+ 회복 스티커" },
    { activity: activities[4], minutes: 12, when: "어제 18:34", reward: "+ Sparky" },
  ],
  friends: [
    { name: "나", handle: "@dahyeon", steps: 6240, activeMinutes: 38, collection: 42, petFile: "leafling.svg", me: true },
    { name: "민지", handle: "@minji.run", steps: 8120, activeMinutes: 52, collection: 47, petFile: "sparky.svg" },
    { name: "준호", handle: "@junho_swim", steps: 5310, activeMinutes: 44, collection: 39, petFile: "splashy.svg" },
    { name: "서연", handle: "@stretchy", steps: 4820, activeMinutes: 31, collection: 36, petFile: "mellow.svg" },
  ],
  pending: [
    { name: "하린", method: "카카오톡", status: "요청 보냄" },
    { name: "fitpal_rose", method: "아이디", status: "수락 대기" },
  ],
  party: [
    { name: "나", pet: "Leafling", petFile: "leafling.svg", distance: 0, pace: "6'18\"", me: true },
    { name: "민지", pet: "Sparky", petFile: "sparky.svg", distance: 180, pace: "6'24\"" },
    { name: "준호", pet: "Splashy", petFile: "splashy.svg", distance: 240, pace: "6'41\"" },
  ],
  rewardHistory: [
    {
      id: "history-jul-run",
      date: "2026-07-01",
      activityId: "outdoor-run",
      source: "Apple Watch",
      minutes: 16,
      time: "18:26",
      reward: "+ Sparky",
      items: ["번개 베리", "선글라스", "러닝복", "물병", "스피드 리본"],
    },
    {
      id: "history-jul-walk",
      date: "2026-07-01",
      activityId: "outdoor-walk",
      source: "Apple Watch",
      minutes: 28,
      time: "08:42",
      reward: "+ Leafling",
      items: ["숲 젤리", "산책화", "초록 후드", "물병", "잎사귀 코인"],
    },
    {
      id: "history-jun-stretch",
      date: "2026-06-30",
      activityId: "stretching",
      source: "iPhone Fitness",
      minutes: 7,
      time: "22:10",
      reward: "+ 회복 스티커",
      items: ["구름 쿠션", "스트레칭 배지", "숨결 차"],
    },
  ],
};

const activityGrid = document.querySelector("#activity-grid");
const timeline = document.querySelector("#timeline");
const dexGrid = document.querySelector("#dex-grid");
const inventory = document.querySelector("#inventory");
const todayWorkoutList = document.querySelector("#today-workout-list");
const todayRewardSummary = document.querySelector("#today-reward-summary");
const syncStatus = document.querySelector("#sync-status");
const todaySteps = document.querySelector("#today-steps");
const todayActiveMinutes = document.querySelector("#today-active-minutes");
const todayGoalInput = document.querySelector("#today-goal-input");
const tomorrowGoalInput = document.querySelector("#tomorrow-goal-input");
const todayGoalActivity = document.querySelector("#today-goal-activity");
const tomorrowGoalActivity = document.querySelector("#tomorrow-goal-activity");
const todayGoalUnit = document.querySelector("#today-goal-unit");
const tomorrowGoalUnit = document.querySelector("#tomorrow-goal-unit");
const todayGoalReadable = document.querySelector("#today-goal-readable");
const tomorrowGoalReadable = document.querySelector("#tomorrow-goal-readable");
const goalSummary = document.querySelector("#goal-summary");
const rankingList = document.querySelector("#ranking-list");
const pendingList = document.querySelector("#pending-list");
const friendCount = document.querySelector("#friend-count");
const friendInput = document.querySelector("#friend-input");
const friendInputLabel = document.querySelector("#friend-input-label");
const sharePreview = document.querySelector("#share-preview");
const locationStatus = document.querySelector("#location-status");
const locationPermissionButton = document.querySelector("#location-permission-button");
const partyStatus = document.querySelector("#party-status");
const partyDistance = document.querySelector("#party-distance");
const partyProgressLabel = document.querySelector("#party-progress-label");
const partyProgressBar = document.querySelector("#party-progress-bar");
const partyList = document.querySelector("#party-list");
const watchPets = document.querySelector("#watch-pets");
const jointRewardButton = document.querySelector("#joint-reward-button");
const toast = document.querySelector("#toast");
const calendarSummary = document.querySelector("#calendar-summary");
const calendarTitle = document.querySelector("#calendar-title");
const calendarGrid = document.querySelector("#calendar-grid");
const calendarSelectedTitle = document.querySelector("#calendar-selected-title");
const calendarSelectedCount = document.querySelector("#calendar-selected-count");
const calendarRewardList = document.querySelector("#calendar-reward-list");
const prevMonthButton = document.querySelector("#prev-month-button");
const nextMonthButton = document.querySelector("#next-month-button");
const roomSummary = document.querySelector("#room-summary");
const roomShelf = document.querySelector("#room-shelf");
const roomFloor = document.querySelector("#room-floor");
const roomPetImage = document.querySelector("#room-pet-image");
const roomPetName = document.querySelector("#room-pet-name");
const roomPetStyle = document.querySelector("#room-pet-style");
const petHat = document.querySelector("#pet-hat");
const petFace = document.querySelector("#pet-face");
const petOutfit = document.querySelector("#pet-outfit");
const petAccessory = document.querySelector("#pet-accessory");
const growthStatus = document.querySelector("#growth-status");
const growthBar = document.querySelector("#growth-bar");
const petSelector = document.querySelector("#pet-selector");
const feedGrid = document.querySelector("#feed-grid");
const wardrobeTabs = document.querySelector("#wardrobe-tabs");
const closetGrid = document.querySelector("#closet-grid");
const decorGrid = document.querySelector("#decor-grid");

function asset(file) {
  return `./assets/${file}`;
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calendarDateKey(year, monthIndex, day) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function formatCalendarDate(key) {
  const [, month, day] = key.split("-");
  return `${Number(month)}월 ${Number(day)}일`;
}

function monthLabel(date) {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
}

function recordsForDate(key) {
  return state.rewardHistory.filter((record) => record.date === key);
}

function displayedMonthRecords() {
  const year = state.calendarMonth.getFullYear();
  const month = String(state.calendarMonth.getMonth() + 1).padStart(2, "0");
  return state.rewardHistory.filter((record) => record.date.startsWith(`${year}-${month}`));
}

function getActivity(activityId) {
  return activities.find((activity) => activity.id === activityId) || activities[0];
}

function getPetActivity(petName) {
  return getActivity(petGrowthTemplates[petName]?.activityId || "outdoor-walk");
}

function getPetItem(petName) {
  return petGrowthTemplates[petName]?.item || "숲 젤리";
}

function getPetMood(petName) {
  return petGrowthTemplates[petName]?.mood || "오늘 운동 보상을 기다려요";
}

function outfitName(id) {
  return closetItems.find((item) => item.id === id)?.name || "";
}

function isItemAvailable(itemName) {
  return (state.inventory[itemName] || 0) > 0;
}

function getGoalOption(activityId) {
  return goalOptions.find((option) => option.activityId === activityId) || goalOptions[0];
}

function formatGoal(goal) {
  const activity = getActivity(goal.activityId);
  return `${activity.name} ${goal.target}${goal.unit}`;
}

function populateGoalSelects() {
  const options = goalOptions
    .map((option) => {
      const activity = getActivity(option.activityId);
      return `<option value="${activity.id}">${activity.name}</option>`;
    })
    .join("");

  todayGoalActivity.innerHTML = options;
  tomorrowGoalActivity.innerHTML = options;
  todayGoalActivity.value = state.goals.today.activityId;
  tomorrowGoalActivity.value = state.goals.tomorrow.activityId;
}

function renderActivities() {
  activityGrid.innerHTML = activities
    .map(
      (activity) => `
        <button class="activity-button" data-activity="${activity.id}">
          <span class="activity-icon" style="background:${activity.color}">${activity.icon}</span>
          <strong>${activity.name}</strong>
          <span>${activity.minutes}분 이상 · ${activity.pet} 계열</span>
        </button>
      `,
    )
    .join("");
}

function renderTodayWorkouts() {
  const unclaimed = state.todayWorkouts.filter((workout) => !workout.rewarded).length;
  const activeMinutes = state.todayWorkouts.reduce((sum, workout) => sum + workout.minutes, 0);
  const steps = 6240 + state.syncCount * 620 + activeMinutes * 18;

  todayRewardSummary.textContent = `받을 보상 ${unclaimed}개`;
  todaySteps.textContent = steps.toLocaleString("ko-KR");
  todayActiveMinutes.textContent = `${activeMinutes}분`;
  goalSummary.textContent = `오늘 ${formatGoal(state.goals.today)} · 내일 ${formatGoal(state.goals.tomorrow)}`;
  todayGoalReadable.textContent = `${getActivity(state.goals.today.activityId).name} · ${state.goals.today.target}${state.goals.today.unit}`;
  tomorrowGoalReadable.textContent = `${getActivity(state.goals.tomorrow.activityId).name} · ${state.goals.tomorrow.target}${state.goals.tomorrow.unit}`;
  todayGoalUnit.textContent = state.goals.today.unit;
  tomorrowGoalUnit.textContent = state.goals.tomorrow.unit;

  todayWorkoutList.innerHTML = state.todayWorkouts
    .map((workout) => {
      const activity = getActivity(workout.activityId);
      return `
        <article class="today-workout-card ${workout.rewarded ? "claimed" : ""}">
          <span class="activity-icon small" style="background:${activity.color}">${activity.icon}</span>
          <div>
            <strong>${activity.name} ${workout.minutes}분</strong>
            <p>${workout.time} · ${workout.source}</p>
          </div>
          <button data-claim-workout="${workout.id}" type="button" ${workout.rewarded ? "disabled" : ""}>
            ${workout.rewarded ? "완료" : "보상받기"}
          </button>
        </article>
      `;
    })
    .join("");
}

function renderTimeline() {
  timeline.innerHTML = state.logs
    .map(
      ({ activity, minutes, when, reward }) => `
        <article class="timeline-card">
          <img src="${asset(activity.petFile)}" alt="${activity.pet}" />
          <div>
            <strong>${activity.name} ${minutes}분</strong>
            <p>${when} · ${activity.rewardTitle}</p>
          </div>
          <em>${reward}</em>
        </article>
      `,
    )
    .join("");
}

function renderDex() {
  const discovered = dex.filter((pet) => !pet.locked).length;
  document.querySelector("#dex-count").textContent = `${discovered} / ${dex.length} 보상`;
  dexGrid.innerHTML = dex
    .map(
      (entry) => `
        <article class="dex-card ${entry.locked ? "locked" : ""}">
          <img src="${asset(entry.petFile)}" alt="${entry.pet}" />
          <strong>${entry.locked ? "???" : entry.pet}</strong>
          <p>${entry.copy}</p>
          <span class="tag" style="background:${entry.color}">${entry.name}</span>
        </article>
      `,
    )
    .join("");
}

function renderInventory() {
  inventory.innerHTML = Object.entries(state.inventory)
    .map(
      ([name, count]) => `
        <article>
          <strong>${name}</strong>
          <span>${count}개 보유</span>
        </article>
      `,
    )
    .join("");
}

function friendScore(friend) {
  return friend.steps + friend.activeMinutes * 90 + friend.collection * 120;
}

function renderFriends() {
  const rankedFriends = [...state.friends].sort((a, b) => friendScore(b) - friendScore(a));
  friendCount.textContent = `${state.friends.length}명 연결됨`;

  rankingList.innerHTML = rankedFriends
    .map(
      (friend, index) => `
        <article class="ranking-card ${friend.me ? "me" : ""}">
          <span class="rank-number">${index + 1}</span>
          <img src="${asset(friend.petFile)}" alt="${friend.name} 대표 캐릭터" />
          <div>
            <strong>${friend.name}</strong>
            <p>${friend.handle}</p>
          </div>
          <div class="rank-score">
            <strong>${friendScore(friend).toLocaleString("ko-KR")}</strong>
            <span>${friend.steps.toLocaleString("ko-KR")}걸음</span>
          </div>
        </article>
      `,
    )
    .join("");

  pendingList.innerHTML = state.pending
    .map(
      (request) => `
        <article class="pending-card">
          <div>
            <strong>${request.name}</strong>
            <span>${request.method}</span>
          </div>
          <em>${request.status}</em>
        </article>
      `,
    )
    .join("");
}

function renderParty() {
  const nearbyFriends = state.party.filter((member) => !member.me);
  const maxDistance = Math.max(...nearbyFriends.map((member) => member.distance));
  const progress = state.locationEnabled ? 68 : 0;

  locationStatus.textContent = state.locationEnabled
    ? "위치 권한 허용됨 · 같이 운동 중일 때만 근처 여부 확인"
    : "위치 권한 대기 중 · 친구에게 내 위치는 공유되지 않음";
  locationPermissionButton.textContent = state.locationEnabled ? "위치 공유 끄기" : "위치 권한 허용";
  partyStatus.textContent = state.locationEnabled ? `친구 ${nearbyFriends.length}명 근처` : "위치 권한 필요";
  partyDistance.textContent = state.locationEnabled ? `${maxDistance}m` : "--";
  partyProgressLabel.textContent = state.locationEnabled ? `합동 목표 ${progress}%` : "합동 목표 대기";
  partyProgressBar.style.width = `${progress}%`;
  jointRewardButton.disabled = !state.locationEnabled || state.jointRewardClaimed;
  jointRewardButton.textContent = state.jointRewardClaimed ? "합동 보상 완료" : "합동 보상 받기";

  watchPets.innerHTML = state.party
    .map(
      (member) => `
        <figure class="${member.me ? "me" : ""}">
          <img src="${asset(member.petFile)}" alt="${member.name} 캐릭터 ${member.pet}" />
          <figcaption>${member.name}</figcaption>
        </figure>
      `,
    )
    .join("");

  partyList.innerHTML = state.party
    .map(
      (member) => `
        <article class="party-card ${member.me ? "me" : ""}">
          <img src="${asset(member.petFile)}" alt="${member.name} 캐릭터" />
          <div>
            <strong>${member.name}</strong>
            <span>${member.me ? "내 캐릭터" : `${member.distance}m 근처`} · 페이스 ${member.pace}</span>
          </div>
          <em>${state.locationEnabled ? "표시 중" : "대기"}</em>
        </article>
      `,
    )
    .join("");
}

function addRewardHistory({ activity, minutes, source, time, reward, items }) {
  state.rewardHistory.unshift({
    id: `history-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    date: dateKey(appToday),
    activityId: activity.id,
    source,
    minutes,
    time,
    reward,
    items,
  });
}

function renderCalendarDetail() {
  const records = recordsForDate(state.selectedCalendarDate);
  calendarSelectedTitle.textContent = `${formatCalendarDate(state.selectedCalendarDate)} 받은 보상`;
  calendarSelectedCount.textContent = `${records.length}개`;

  if (!records.length) {
    calendarRewardList.innerHTML = `
      <article class="calendar-empty">
        <strong>아직 받은 보상이 없어요</strong>
        <p>운동을 완료하고 보상을 받으면 이 날짜에 캐릭터와 아이템이 쌓여요.</p>
      </article>
    `;
    return;
  }

  calendarRewardList.innerHTML = records
    .map((record) => {
      const activity = getActivity(record.activityId);
      return `
        <article class="calendar-reward-card">
          <span class="activity-icon small" style="background:${activity.color}">${activity.icon}</span>
          <img src="${asset(activity.petFile)}" alt="${activity.pet} 캐릭터" />
          <div>
            <strong>${activity.name} ${record.minutes}분</strong>
            <p>${record.time} · ${record.source}</p>
            <em>${record.reward}</em>
            <span>${record.items.join(" · ")}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCalendar() {
  const year = state.calendarMonth.getFullYear();
  const monthIndex = state.calendarMonth.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const monthRecords = displayedMonthRecords();
  const selectedMonthKey = `${year}-${String(monthIndex + 1).padStart(2, "0")}`;

  if (!state.selectedCalendarDate.startsWith(selectedMonthKey)) {
    state.selectedCalendarDate = monthRecords[0]?.date || calendarDateKey(year, monthIndex, 1);
  }

  calendarTitle.textContent = monthLabel(state.calendarMonth);
  calendarSummary.textContent = `${monthIndex + 1}월 보상 ${monthRecords.length}개`;

  const blanks = Array.from({ length: firstDay }, () => `<div class="calendar-blank"></div>`);
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const key = calendarDateKey(year, monthIndex, day);
    const records = recordsForDate(key);
    const isSelected = key === state.selectedCalendarDate;
    const isToday = key === dateKey(appToday);

    return `
      <button class="calendar-day ${records.length ? "has-reward" : ""} ${isSelected ? "selected" : ""} ${isToday ? "today" : ""}" data-calendar-date="${key}" type="button">
        <strong>${day}</strong>
        ${records.length ? `<span>${records.length}개</span>` : "<i></i>"}
      </button>
    `;
  });

  calendarGrid.innerHTML = [...blanks, ...days].join("");
  renderCalendarDetail();
}

function ensurePetUnlocked(activity) {
  if (state.pets[activity.pet]) return;

  state.pets[activity.pet] = {
    level: 1,
    xp: 0,
    petFile: activity.petFile,
    unlocked: true,
    outfit: null,
    hat: null,
    face: null,
    accessory: null,
  };
}

function renderRoom() {
  const pet = state.pets[state.selectedPet];
  const activity = getPetActivity(state.selectedPet);
  const xpPercent = Math.min(100, pet.xp);
  const selectedOutfit = closetItems.find((item) => item.id === pet.outfit);
  const selectedHat = closetItems.find((item) => item.id === pet.hat);
  const selectedFace = closetItems.find((item) => item.id === pet.face);
  const selectedAccessory = closetItems.find((item) => item.id === pet.accessory);
  const styleParts = [selectedHat?.name, selectedFace?.name, selectedOutfit?.name, selectedAccessory?.name].filter(Boolean);

  roomSummary.textContent = `${state.selectedPet} Lv.${pet.level} · ${getPetMood(state.selectedPet)}`;
  roomPetImage.src = asset(pet.petFile);
  roomPetImage.alt = `${state.selectedPet} 캐릭터`;
  roomPetName.textContent = state.selectedPet;
  roomPetStyle.textContent = styleParts.length ? styleParts.join(" · ") : "기본 착장";
  growthStatus.textContent = `Lv. ${pet.level} · ${pet.xp} / 100 XP`;
  growthBar.style.width = `${xpPercent}%`;
  petHat.textContent = selectedHat?.icon || "";
  petFace.textContent = selectedFace?.icon || "";
  petOutfit.textContent = selectedOutfit?.icon || "";
  petAccessory.textContent = selectedAccessory?.icon || "";
  petHat.dataset.style = selectedHat?.id || "";
  petFace.dataset.style = selectedFace?.id || "";
  petOutfit.dataset.style = selectedOutfit?.id || "";
  petAccessory.dataset.style = selectedAccessory?.id || "";

  petSelector.innerHTML = Object.entries(state.pets)
    .map(([name, petState]) => {
      const petActivity = getPetActivity(name);
      return `
        <button class="pet-chip ${name === state.selectedPet ? "active" : ""}" data-select-pet="${name}" type="button">
          <img src="${asset(petState.petFile)}" alt="${name}" />
          <span>${name}</span>
          <em>Lv.${petState.level}</em>
        </button>
      `;
    })
    .join("");

  const feedItems = [...new Set([getPetItem(state.selectedPet), ...activity.growthItems])];
  feedGrid.innerHTML = feedItems
    .map((itemName, index) => {
      const count = state.inventory[itemName] || 0;
      const xp = index === 0 ? 35 : 22;
      return `
        <button class="feed-card" data-feed-item="${itemName}" data-feed-xp="${xp}" type="button" ${count <= 0 ? "disabled" : ""}>
          <strong>${itemName}</strong>
          <span>${count}개 보유 · +${xp} XP</span>
        </button>
      `;
    })
    .join("");

  wardrobeTabs.innerHTML = wardrobeCategories
    .map(
      (category) => `
        <button class="${category.id === state.wardrobeCategory ? "active" : ""}" data-wardrobe-category="${category.id}" type="button">
          ${category.label}
        </button>
      `,
    )
    .join("");

  const visibleClosetItems = closetItems.filter(
    (item) => state.wardrobeCategory === "all" || item.category === state.wardrobeCategory,
  );

  closetGrid.innerHTML = visibleClosetItems
    .map((item) => {
      const equipped = pet[item.slot] === item.id;
      const available = isItemAvailable(item.unlockItem) || equipped;
      return `
        <button class="closet-card ${equipped ? "equipped" : ""}" data-equip-item="${item.id}" type="button" ${available ? "" : "disabled"}>
          <span>${item.icon}</span>
          <strong>${item.name}</strong>
          <em>${equipped ? "착용 중" : available ? `${item.unlockItem} 보유` : `${item.unlockItem} 필요`}</em>
        </button>
      `;
    })
    .join("");

  decorGrid.innerHTML = roomDecorItems
    .map((item) => {
      const placed = state.roomDecor[item.area].includes(item.id);
      const available = isItemAvailable(item.unlockItem) || placed;
      return `
        <button class="decor-card ${placed ? "placed" : ""}" data-decor-item="${item.id}" type="button" ${available ? "" : "disabled"}>
          <span>${item.icon}</span>
          <strong>${item.name}</strong>
          <em>${placed ? "배치 중" : available ? `${item.unlockItem}로 배치` : `${item.unlockItem} 필요`}</em>
        </button>
      `;
    })
    .join("");

  roomShelf.innerHTML = state.roomDecor.shelf
    .map((id) => {
      const item = roomDecorItems.find((decor) => decor.id === id);
      return item ? `<span class="room-object ${item.id}">${item.icon}</span>` : "";
    })
    .join("");
  roomFloor.innerHTML = state.roomDecor.floor
    .map((id) => {
      const item = roomDecorItems.find((decor) => decor.id === id);
      return item ? `<span class="room-object ${item.id}">${item.icon}</span>` : "";
    })
    .join("");
}

function feedSelectedPet(itemName, xp) {
  if ((state.inventory[itemName] || 0) <= 0) {
    showToast(`${itemName} 아이템이 부족해요`);
    return;
  }

  const pet = state.pets[state.selectedPet];
  state.inventory[itemName] -= 1;
  pet.xp += xp;

  if (pet.xp >= 100) {
    pet.level += 1;
    pet.xp -= 100;
    state.inventory[`${state.selectedPet} 성장 리본`] = (state.inventory[`${state.selectedPet} 성장 리본`] || 0) + 1;
    showToast(`${state.selectedPet}가 Lv.${pet.level}로 성장했어요`);
  } else {
    showToast(`${state.selectedPet}에게 ${itemName}을 줬어요`);
  }

  renderInventory();
  renderRoom();
}

function equipClosetItem(itemId) {
  const item = closetItems.find((closetItem) => closetItem.id === itemId);
  if (!item) return;

  const pet = state.pets[state.selectedPet];
  if (!isItemAvailable(item.unlockItem) && pet[item.slot] !== item.id) {
    showToast(`${item.unlockItem}을 먼저 얻어야 입힐 수 있어요`);
    return;
  }

  pet[item.slot] = pet[item.slot] === item.id ? null : item.id;
  renderRoom();
  showToast(`${state.selectedPet} 착장을 바꿨어요`);
}

function toggleDecorItem(itemId) {
  const item = roomDecorItems.find((decorItem) => decorItem.id === itemId);
  if (!item) return;

  if (!isItemAvailable(item.unlockItem) && !state.roomDecor[item.area].includes(item.id)) {
    showToast(`${item.unlockItem}을 먼저 얻어야 배치할 수 있어요`);
    return;
  }

  const targetArea = state.roomDecor[item.area];
  if (targetArea.includes(item.id)) {
    state.roomDecor[item.area] = targetArea.filter((placedId) => placedId !== item.id);
  } else {
    targetArea.push(item.id);
  }

  renderRoom();
  showToast(`${item.name} 배치를 변경했어요`);
}

function setActivity(activity, rewardMeta = {}) {
  state.selected = activity;
  ensurePetUnlocked(activity);
  document.querySelector("#hero-pet").src = asset(activity.petFile);
  document.querySelector("#hero-pet").alt = `${activity.pet} 캐릭터`;
  document.querySelector("#hero-region").textContent = activity.region;
  document.querySelector("#hero-title").textContent = activity.title;
  document.querySelector("#reward-hint").textContent = `${activity.name} ${activity.minutes}분 보상 준비 완료`;
  document.querySelector("#reward-pet").src = asset(activity.petFile);
  document.querySelector("#reward-pet").alt = `${activity.pet} 캐릭터`;
  document.querySelector("#reward-title").textContent = activity.rewardTitle;
  document.querySelector("#reward-copy").textContent = activity.copy;

  activity.items.forEach((item, index) => {
    state.inventory[item] = (state.inventory[item] || 0) + (index === 0 ? 2 : 1);
  });

  const minutes = rewardMeta.minutes || activity.minutes + Math.floor(Math.random() * 14);
  const when = rewardMeta.when || "방금";
  const source = rewardMeta.source || "FitPals";
  const reward = rewardMeta.reward || `+ ${activity.pet}`;

  state.logs.unshift({
    activity,
    minutes,
    when,
    reward,
  });

  if (rewardMeta.addHistory !== false) {
    addRewardHistory({
      activity,
      minutes,
      source,
      time: rewardMeta.time || when,
      reward,
      items: activity.items,
    });
  }

  state.logs = state.logs.slice(0, 6);
  renderTimeline();
  renderInventory();
  renderFriends();
  renderCalendar();
  renderRoom();
  showToast(`${activity.name} 보상으로 ${activity.pet}와 아이템을 얻었어요`);
}

function claimWorkoutReward(workoutId) {
  const workout = state.todayWorkouts.find((item) => item.id === workoutId);
  if (!workout || workout.rewarded) return;

  const activity = getActivity(workout.activityId);
  workout.rewarded = true;
  setActivity(activity, { minutes: workout.minutes, source: workout.source, time: workout.time });
  renderTodayWorkouts();
  showToast(`${activity.name} ${workout.minutes}분 보상을 받았어요`);
}

function importWorkouts() {
  const samples = [
    { activityId: "indoor-cycle", source: "iPhone Fitness", minutes: 22, time: "방금" },
    { activityId: "yoga", source: "Apple Watch", minutes: 12, time: "방금" },
    { activityId: "pool-swim", source: "Apple Watch", minutes: 18, time: "방금" },
    { activityId: "traditional-strength", source: "iPhone Fitness", minutes: 20, time: "방금" },
  ];
  const sample = samples[state.syncCount % samples.length];
  state.syncCount += 1;
  state.todayWorkouts.unshift({
    id: `manual-sync-${Date.now()}`,
    rewarded: false,
    ...sample,
  });
  syncStatus.textContent = `마지막 동기화: 방금 전 · 새 운동 ${state.syncCount}개`;
  renderTodayWorkouts();
  showToast("iPhone Fitness와 Apple Watch 운동기록을 불러왔어요");
}

function saveGoals() {
  const today = Number(todayGoalInput.value);
  const tomorrow = Number(tomorrowGoalInput.value);

  if (!Number.isFinite(today) || !Number.isFinite(tomorrow) || today <= 0 || tomorrow <= 0) {
    showToast("목표는 1 이상으로 설정해 주세요");
    return;
  }

  state.goals.today.target = today;
  state.goals.tomorrow.target = tomorrow;
  renderTodayWorkouts();
  showToast(`오늘 ${formatGoal(state.goals.today)}, 내일 ${formatGoal(state.goals.tomorrow)} 목표를 저장했어요`);
}

function updateGoalActivity(day, activityId) {
  const option = getGoalOption(activityId);
  const input = day === "today" ? todayGoalInput : tomorrowGoalInput;

  state.goals[day] = {
    activityId,
    target: option.defaultTarget,
    unit: option.unit,
  };
  input.value = option.defaultTarget;
  renderTodayWorkouts();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function bindNavigation() {
  document.querySelectorAll(".rail-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".rail-button").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`#view-${button.dataset.view}`).classList.add("active");
    });
  });
}

function addFriendRequest() {
  const value = friendInput.value.trim();
  if (!value) {
    showToast("FitPals ID를 입력해 주세요");
    return;
  }

  const displayName = value.replace(/^@/, "");
  state.pending.unshift({ name: displayName, method: "아이디 검색", status: "요청 보냄" });
  friendInput.value = "";
  renderFriends();
  showToast(`${displayName} ID로 친구 요청을 만들었어요`);
}

function sendKakaoRequest() {
  const target = friendInput.value.trim() || "친구";
  const message = `FitPals에서 ${target}님과 같이 운동 보상 랭킹을 시작해요. 초대 코드: FIT-${Math.floor(1000 + Math.random() * 9000)}`;
  sharePreview.textContent = message;
  state.pending.unshift({ name: target, method: "카카오톡", status: "공유 준비됨" });
  renderFriends();
  showToast("카카오톡 공유 메시지를 준비했어요");
}

function toggleLocationPermission() {
  state.locationEnabled = !state.locationEnabled;
  renderParty();
  showToast(state.locationEnabled ? "위치 권한이 허용됐어요" : "위치 공유를 껐어요");
}

function claimJointReward() {
  if (!state.locationEnabled || state.jointRewardClaimed) return;

  state.jointRewardClaimed = true;
  state.inventory["우정 젤리"] = (state.inventory["우정 젤리"] || 0) + 3;
  state.inventory["동행 별조각"] = (state.inventory["동행 별조각"] || 0) + 1;
  state.logs.unshift({
    activity: getActivity("outdoor-walk"),
    minutes: 18,
    when: "방금",
    reward: "+ 합동 보상",
  });
  addRewardHistory({
    activity: getActivity("outdoor-walk"),
    minutes: 18,
    source: "친구 동행",
    time: "방금",
    reward: "+ 합동 보상",
    items: ["우정 젤리 x3", "동행 별조각 x1"],
  });
  state.logs = state.logs.slice(0, 6);
  renderInventory();
  renderTimeline();
  renderParty();
  renderCalendar();
  showToast("친구와 같이 운동해서 합동 보상을 받았어요");
}

renderActivities();
populateGoalSelects();
renderTodayWorkouts();
renderTimeline();
renderDex();
renderInventory();
renderFriends();
renderParty();
renderCalendar();
renderRoom();
bindNavigation();

activityGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-activity]");
  if (!button) return;
  const activity = activities.find((item) => item.id === button.dataset.activity);
  setActivity(activity);
});

todayWorkoutList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-claim-workout]");
  if (!button) return;
  claimWorkoutReward(button.dataset.claimWorkout);
});

document.querySelector("#sync-workouts-button").addEventListener("click", importWorkouts);
document.querySelector("#save-goals-button").addEventListener("click", saveGoals);
todayGoalActivity.addEventListener("change", () => updateGoalActivity("today", todayGoalActivity.value));
tomorrowGoalActivity.addEventListener("change", () => updateGoalActivity("tomorrow", tomorrowGoalActivity.value));
calendarGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-calendar-date]");
  if (!button) return;
  state.selectedCalendarDate = button.dataset.calendarDate;
  renderCalendar();
});
prevMonthButton.addEventListener("click", () => {
  state.calendarMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() - 1, 1);
  renderCalendar();
});
nextMonthButton.addEventListener("click", () => {
  state.calendarMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() + 1, 1);
  renderCalendar();
});
petSelector.addEventListener("click", (event) => {
  const button = event.target.closest("[data-select-pet]");
  if (!button) return;
  state.selectedPet = button.dataset.selectPet;
  renderRoom();
});
feedGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-feed-item]");
  if (!button) return;
  feedSelectedPet(button.dataset.feedItem, Number(button.dataset.feedXp));
});
wardrobeTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-wardrobe-category]");
  if (!button) return;
  state.wardrobeCategory = button.dataset.wardrobeCategory;
  renderRoom();
});
closetGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-equip-item]");
  if (!button) return;
  equipClosetItem(button.dataset.equipItem);
});
decorGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-decor-item]");
  if (!button) return;
  toggleDecorItem(button.dataset.decorItem);
});

document.querySelector("#add-friend-button").addEventListener("click", addFriendRequest);
document.querySelector("#kakao-request-button").addEventListener("click", sendKakaoRequest);
locationPermissionButton.addEventListener("click", toggleLocationPermission);
jointRewardButton.addEventListener("click", claimJointReward);
friendInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addFriendRequest();
  }
});
