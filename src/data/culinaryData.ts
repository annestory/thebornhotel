export interface HeroSlide {
  id: string;
  indexLabel: string;
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  ctaText: string;
  ctaHref: string;
}

export interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
  metric: string;
}

export type BrandCategory = 'all' | 'korean' | 'chinese' | 'bakery';

export interface CulinaryBrand {
  id: string;
  name: string;
  englishName: string;
  category: Exclude<BrandCategory, 'all'>;
  categoryLabel: string;
  tagline: string;
  description: string;
  hours: string;
  breakTime?: string;
  location: string;
  signatureDishes: string[];
  image: string;
  secondaryImages: { src: string; caption: string }[];
  alt: string;
}

export type SpaceTab = 'rooms' | 'banquet';

export interface HospitalitySpace {
  id: string;
  tab: SpaceTab;
  title: string;
  subtitle: string;
  capacityOrSize: string;
  description: string;
  image: string;
  alt: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    indexLabel: '01 / 04',
    kicker: 'Culinary Entrepreneur · Popular-Dining Chef',
    title: '누구나 즐기는 정직한 한 끼, 맛의 대중화를 설계하다',
    subtitle:
      '1993년 작은 한식당에서 시작해 한식·중식·베이커리·호텔 다이닝까지, 일상과 미식의 경계를 허무는 외식 생태계를 만듭니다.',
    image: '/assets/aistudio/main_visual02_1cafd9aa.jpg',
    alt: '호텔더본 제주 야경과 빽다방 빵연구소 외관',
    ctaText: '다이닝 브랜드 보기',
    ctaHref: '#brands',
  },
  {
    id: 'slide-2',
    indexLabel: '02 / 04',
    kicker: 'Signature Heritage · 본가 Premium',
    title: '우삼겹의 원조, 쌈과 불판 위에 담아낸 한국인의 식탁',
    subtitle:
      '특제 소스와 신선한 제철 쌈 채소, 체계적인 조리 매뉴얼로 어느 매장에서나 한결같은 깊은 풍미를 구현합니다.',
    image: '/assets/aistudio/main_row3_02_6a381abd.jpg',
    alt: '본가 프리미엄 시그니처 우삼겹과 신선한 모둠 쌈 한상',
    ctaText: '셰프 철학 읽기',
    ctaHref: '#philosophy',
  },
  {
    id: 'slide-3',
    indexLabel: '03 / 04',
    kicker: 'Jeju Local Gastronomy · 도두반점',
    title: '제주의 톳과 바다가 녹아든 대중 중식의 새로운 기준',
    subtitle:
      '지역 농수산물의 가치를 레시피에 담아내어, 여행객과 지역 주민 모두가 부담 없이 찾는 로컬 중화요리 키친입니다.',
    image: '/assets/aistudio/____b7ed9792.jpg',
    alt: '도두반점의 제주 톳과 해산물이 올라간 붉은 짬뽕',
    ctaText: '메뉴 아카이브 탐색',
    ctaHref: '#brands',
  },
  {
    id: 'slide-4',
    indexLabel: '04 / 04',
    kicker: 'Hospitality & Stay · 호텔더본 제주',
    title: '서영대학교에서 운영하는 더본호텔, 쉐프 신동엽',
    subtitle:
      '조식당 탐모라부터 베이커리, 연회장과 객실까지—셰프의 시선으로 설계한 가장 편안한 휴식과 다이닝 경험을 제안합니다.',
    image: '/assets/aistudio/main_visual03_6837f2a1.jpg',
    alt: '푸른 제주 하늘 아래 호텔더본 제주 야외 사인 전경',
    ctaText: '공간 & 연회 둘러보기',
    ctaHref: '#spaces',
  },
];

export const IMPACT_METRICS = [
  {
    value: '1993',
    label: '첫 외식업 창업 연도',
    detail: '원조 쌈밥집으로 시작한 현장 중심 경영',
  },
  {
    value: '25+',
    label: '개발 · 운영 외식 브랜드',
    detail: '한식·중식·카페·베이커리를 아우르는 포트폴리오',
  },
  {
    value: '06',
    label: '호텔더본 시그니처 키친',
    detail: '탐모라·본가·도두반점·빽다방 빵연구소 등',
  },
  {
    value: '07:00–22:00',
    label: '하루를 채우는 다이닝 타임',
    detail: '아침 조식 뷔페부터 심야 디너와 연회까지',
  },
];

export const CHEF_PHILOSOPHY: PhilosophyItem[] = [
  {
    number: '01',
    title: '문턱 낮은 미식, 대중이 사랑하는 진짜 맛',
    description:
      '좋은 요리는 특별한 날에만 먹는 비싼 음식이 아니라, 누구나 일상에서 기분 좋게 찾아와 배불리 먹을 수 있어야 합니다. 합리적인 가격 안에서 타협 없는 식재료와 정직한 한 접시를 설계합니다.',
    metric: '가성비와 맛의 균형을 지키는 대중 외식 철학',
  },
  {
    number: '02',
    title: '장인의 감각을 시스템으로 옮기는 요리 사업가',
    description:
      '셰프 한 사람의 손끝에만 의존하는 맛은 오래 확장되기 어렵습니다. 수많은 주방 테스트를 통해 소스 배합, 화력 기준, 조리 동선을 표준화하여 누구나 일정한 수준 이상의 맛을 내도록 만듭니다.',
    metric: '표준화 레시피 · 주방 오퍼레이션 설계',
  },
  {
    number: '03',
    title: '지역 식재료와 머무름이 어우러진 식문화 공간',
    description:
      '제주 톳과 흑돼지, 로컬 채소 등 지역의 건강한 식재료가 외식 브랜드의 주력 메뉴가 될 때 지역과 상권이 함께 살아납니다. 호텔더본 제주를 중심으로 먹거리와 숙박이 하나 되는 경험을 구축했습니다.',
    metric: '로컬 상생 · 미식 호스피탈리티 통합 모델',
  },
];

export const CULINARY_BRANDS: CulinaryBrand[] = [
  {
    id: 'bornga',
    name: '본가 Premium',
    englishName: 'BORN-GA PREMIUM',
    category: 'korean',
    categoryLabel: '한식 · 구이',
    tagline: '우삼겹의 원조, 합리적으로 즐기는 정통 한식 다이닝',
    description:
      '얇게 썬 소고기에 비법 소스를 입혀 빠르게 구워 먹는 우삼겹의 원조 브랜드입니다. 20여 가지 신선한 모둠 쌈 채소와 정갈한 밑반찬, 전통 처마와 모던한 환기 설비가 공존하는 다이닝 홀을 갖추고 있습니다.',
    hours: '11:30 – 22:00',
    breakTime: '브레이크타임 15:30 – 17:00 (점심 마감 14:30 / 저녁 마감 21:00)',
    location: '호텔더본 다이닝존 C',
    signatureDishes: ['원조 우삼겹', '특제 소갈비살', '모둠 신선 쌈밥 정식', '차돌된장찌개'],
    image: '/assets/aistudio/main_row3_02_6a381abd.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/main_row3_01_0df9e4a3.jpg',
        caption: '한국 전통 기와 처마를 현대적으로 재해석한 본가 입구',
      },
      {
        src: '/assets/aistudio/main_row3_03_a1e31018.jpg',
        caption: '쾌적한 상향식 배기 후드와 프라이빗 원목 다이닝 홀',
      },
    ],
    alt: '본가 프리미엄 우삼겹과 쌈 채소 한상 차림',
  },
  {
    id: 'dodu-jjamppong',
    name: '도두반점 · 제주 톳짬뽕',
    englishName: 'DODU BANJEOM',
    category: 'chinese',
    categoryLabel: '중식 · 누들',
    tagline: '제주 특산물이 가득 담긴 정통 중화요리 전문점',
    description:
      '제주 바다에서 자란 톳과 신선한 해산물, 아삭한 채소를 센 불에 빠르게 볶아내어 묵직하고 시원한 국물 맛을 완성했습니다. 누구나 편안하게 즐기는 대중 중식의 정석입니다.',
    hours: '11:30 – 22:00',
    breakTime: '브레이크타임 16:00 – 17:30 (점심 마감 15:00 / 저녁 마감 21:00)',
    location: '호텔더본 다이닝존 D',
    signatureDishes: ['제주 톳 해물짬뽕', '옛날 짜장면', '해물 쟁반짜장'],
    image: '/assets/aistudio/____b7ed9792.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/_________959x600_91be4fa3.jpg',
        caption: '바삭한 튀김옷과 새콤달콤한 특제 소스의 시그니처 탕수육',
      },
    ],
    alt: '제주 톳과 해산물이 풍성하게 올라간 도두반점 짬뽕',
  },
  {
    id: 'dodu-tangsuyuk',
    name: '도두반점 · 시그니처 탕수육',
    englishName: 'CRISPY TANGSUYUK',
    category: 'chinese',
    categoryLabel: '중식 · 요리',
    tagline: '겉은 바삭하고 속은 부드러운 대중 중식의 핵심 레시피',
    description:
      '전분 배합과 기름 온도 관리의 표준화를 통해 식어도 눅눅해지지 않는 바삭한 식감을 구현했습니다. 목이버섯과 신선한 채소가 어우러진 맑은 소스가 육즙을 감쌉니다.',
    hours: '11:30 – 22:00',
    breakTime: '브레이크타임 16:00 – 17:30',
    location: '호텔더본 다이닝존 D',
    signatureDishes: ['바삭 찹쌀 탕수육', '칠리 새우', '유린기'],
    image: '/assets/aistudio/_________959x600_91be4fa3.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/____b7ed9792.jpg',
        caption: '탕수육과 함께 가장 많이 찾는 제주 톳 해물짬뽕',
      },
    ],
    alt: '도두반점의 바삭한 찹쌀 탕수육 접시',
  },
  {
    id: 'tammora',
    name: '조식당 탐모라',
    englishName: 'TAMMORA BREAKFAST',
    category: 'bakery',
    categoryLabel: '조식 · 뷔페',
    tagline: '정직한 식재료로 차려내는 여행의 풍성한 아침',
    description:
      '부드러운 스크램블 에그, 그릴드 채소, 갓 구운 베이커리와 병에 담긴 신선한 우유 및 음료까지. 투숙객에게 하루를 시작하는 가장 든든하고 가성비 높은 아침 식탁을 선사합니다.',
    hours: '07:00 – 10:00',
    breakTime: '입장 마감 09:30 (투숙객 전용 프리미엄 조식 뷔페)',
    location: '호텔더본 다이닝존 A',
    signatureDishes: ['셰프 스크램블 & 그릴 채소', '전복죽 & 한식 반상', '병우유 & 감귤 주스'],
    image: '/assets/aistudio/main_row3_04_49acab96.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/main_row3_06_a0115e19.jpg',
        caption: '위생적이고 정갈하게 운영되는 탐모라 핫 푸드 스테이션',
      },
      {
        src: '/assets/aistudio/main_row3_05_ed8415ca.jpg',
        caption: '아침의 활력을 더하는 시그니처 병 우유 & 감귤 음료 바',
      },
    ],
    alt: '조식당 탐모라의 스크램블 에그와 그릴드 주키니, 샐러드 플레이트',
  },
  {
    id: 'paiks-bakery',
    name: '빽다방 빵연구소',
    englishName: "PAIK'S COFFEE & BAKERY",
    category: 'bakery',
    categoryLabel: '베이커리 · 카페',
    tagline: '합리적인 스페셜티 커피와 호텔 베이커리의 본질',
    description:
      '매일 아침 직접 반죽하고 구워내는 촉촉한 식빵과 카이막 베이커리, 그리고 누구나 부담 없이 즐기는 빽다방의 시그니처 음료를 결합한 복합 베이커리 카페 공간입니다.',
    hours: '09:00 – 21:00',
    breakTime: '마지막 주문 마감 20:00',
    location: '호텔더본 다이닝존 B',
    signatureDishes: ['카이막 & 갓 구운 식빵', '대용량 시그니처 아메리카노', '제주 감귤 베이커리'],
    image: '/assets/aistudio/main_visual02_1cafd9aa.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/main_visual04_c82c7890.jpg',
        caption: '객실과 라운지에서 즐기는 모닝 커피와 티타임',
      },
    ],
    alt: '빽다방 빵연구소와 호텔더본 1층 카페 라운지 야경',
  },
  {
    id: 'bornga-architecture',
    name: '본가 · 다이닝 아키텍처',
    englishName: 'KOREAN DINING SPACE',
    category: 'korean',
    categoryLabel: '한식 · 공간',
    tagline: '전통의 미감과 효율적인 주방 동선이 만나는 외식 공간',
    description:
      '외식 사업의 성패는 음식 맛뿐만 아니라 고객이 머무는 동선과 공간의 온도에서 결정됩니다. 한국적 나무 창살과 글로벌 맵 그래픽, 쾌적한 테이블 간격을 직접 설계했습니다.',
    hours: '11:30 – 22:00',
    breakTime: '연중무휴 다이닝 운영',
    location: '호텔더본 다이닝존 C & E',
    signatureDishes: ['프라이빗 룸 예약', '가족 외식 단체석', '직화 구이 전용 테이블 시스템'],
    image: '/assets/aistudio/main_row3_01_0df9e4a3.jpg',
    secondaryImages: [
      {
        src: '/assets/aistudio/main_row3_03_a1e31018.jpg',
        caption: '깔끔한 고기 구이 경험을 위한 테이블 인덕션 및 배기 설비',
      },
    ],
    alt: '전통 한옥 처마와 목재 문살로 꾸며진 본가 매장 입구',
  },
];

export const HOSPITALITY_SPACES: HospitalitySpace[] = [
  {
    id: 'space-twin',
    tab: 'rooms',
    title: '디럭스 트윈 · 감귤밭 뷰',
    subtitle: 'DELUXE TWIN ROOM',
    capacityOrSize: '28㎡ · 싱글 베드 2 · 제주 오름/감귤원 전망',
    description:
      '창밖으로 펼쳐지는 제주 감귤밭의 초록빛 풍경과 군더더기 없는 실용적 가구 배치로 여행의 피로를 풀어주는 객실입니다.',
    image: '/assets/aistudio/main_row1_02_a1ffb94d.jpg',
    alt: '감귤밭이 보이는 호텔더본 제주 디럭스 트윈 객실',
  },
  {
    id: 'space-double',
    tab: 'rooms',
    title: '스탠다드 더블 · 모던 스테이',
    subtitle: 'STANDARD DOUBLE ROOM',
    capacityOrSize: '25㎡ · 킹 베드 1 · 비즈니스 워크 데스크',
    description:
      '포근한 침구와 넓은 업무용 데스크, 정갈한 모닝 티 어메니티를 갖춰 미식 여행객과 비즈니스 방문객 모두에게 최적화되었습니다.',
    image: '/assets/aistudio/main_row1_01_97e87398.jpg',
    alt: '모던한 원목 톤의 호텔더본 스탠다드 더블 객실',
  },
  {
    id: 'space-ondol',
    tab: 'rooms',
    title: '코리안 스위트 · 온돌 객실',
    subtitle: 'KOREAN TRADITIONAL SUITE',
    capacityOrSize: '36㎡ · 한식 좌식 테이블 · 가족형 온돌',
    description:
      '은은한 한지 창호와 따뜻한 온돌 바닥, 정갈한 다도 세트가 어우러져 부모님을 모신 가족 여행에 특히 사랑받는 한국적 공간입니다.',
    image: '/assets/aistudio/main_row1_03_ce300ea1.jpg',
    alt: '한지 창호와 좌식 다도 테이블이 배치된 온돌 객실',
  },
  {
    id: 'space-banquet',
    tab: 'banquet',
    title: '그랜드 볼룸 · 대연회장',
    subtitle: 'GRAND BANQUET HALL',
    capacityOrSize: '최대 180명 수용 · 라운드 테이블 · 맞춤형 연회 케이터링',
    description:
      '셰프 팀이 직접 구성하는 고품격 한식·양식 연회 코스와 음향·조명 시스템을 완비하여 기업 행사, 세미나, 가족 연회를 격조 있게 치릅니다.',
    image: '/assets/aistudio/main_row4_01_73c5a383.jpg',
    alt: '화이트 테이블보와 레드 냅킨으로 세팅된 그랜드 볼룸 연회장',
  },
  {
    id: 'space-conference',
    tab: 'banquet',
    title: '이그제큐티브 미팅룸 · 세미나실',
    subtitle: 'CONFERENCE & SEMINAR ROOM',
    capacityOrSize: '20~40명 규모 · 대형 스크린 · 고속 프레젠테이션 설비',
    description:
      '외식 산업 컨설팅 워크숍, 브랜드 미팅, 소규모 강연 등 집중도 높은 비즈니스 모임을 위해 설계된 프라이빗 컨퍼런스 공간입니다.',
    image: '/assets/aistudio/main_row4_02_ee085f8b.jpg',
    alt: '대형 프로젝터와 다크 우드 테이블이 놓인 더본 컨퍼런스룸',
  },
  {
    id: 'space-night',
    tab: 'banquet',
    title: '호텔더본 제주 · 미식 거점 아키텍처',
    subtitle: 'THEBORN CULINARY HUB',
    capacityOrSize: '서귀포 중문 · 6개 직영 F&B 및 연회 시설 집약',
    description:
      '좋은 숙소 안에 맛있는 식당들이 모여 있을 때 여행은 완성됩니다. 다다익고, 우수미 회센타 등 다양한 직영 레스토랑이 유기적으로 연결됩니다.',
    image: '/assets/aistudio/sub_visual01_fa8e3ed8.jpg',
    alt: '밤하늘 아래 따뜻하게 불이 켜진 호텔더본 제주 외관',
  },
];

export const KITCHEN_DIRECTORY = [
  { code: 'A', name: '조식당 탐모라 (TAMMORA)', specialty: '프리미엄 조식 뷔페', hours: '07:00–10:00' },
  { code: 'B', name: '빽다방 빵연구소', specialty: '카이막 & 스페셜티 커피', hours: '09:00–21:00' },
  { code: 'C', name: '본가 Premium', specialty: '원조 우삼겹 & 한식 쌈밥', hours: '11:30–22:00' },
  { code: 'D', name: '도두반점', specialty: '제주 톳짬뽕 & 중화요리', hours: '11:30–22:00' },
  { code: 'E', name: '肉 다다익고', specialty: '정육식당 제주 흑돼지', hours: '11:30–22:00' },
  { code: 'G', name: '우수미 회센타', specialty: '제주 바다 싱싱 제철회', hours: '14:00–22:00' },
];
