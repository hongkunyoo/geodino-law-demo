/**
 * 사무소 정보. 이 파일 하나만 바꾸면 다른 사무소의 공식 안내 페이지가 된다.
 *
 * 지금 값은 영업용 가상 사무소다 (demo: true).
 * - 실제 사무소·변호사와 겹치지 않도록 이름은 ○○로 쓰고, 연락처·주소·번호는 실제로 쓰이지 않는 표시용 값만 넣는다.
 * - 채널 링크(sameAs)는 예약 도메인 example.com만 쓴다.
 *
 * 실제 고객 사이트로 쓸 때:
 * - demo: false 로 바꾸면 예시 띠, 예시 페이지(/sample-report/, /before-after/), noindex가 빠진다.
 * - 공개되는 모든 문구는 변호사가 직접 확인·승인한 뒤에만 반영한다.
 * - '전문' 대신 '주력 분야'를 쓰고, 결과를 약속하거나 근거 없는 비교(최고·1위)를 하지 않는다.
 */

export interface Step {
  title: string;
  description: string;
}

export interface PracticeArea {
  /** 페이지 안 앵커 (#divorce) */
  id: string;
  name: string;
  summary: string;
  /** 맡는 사건 (구조화 데이터 knowsAbout에도 쓴다) */
  matters: string[];
  steps: Step[];
  prepare: string[];
  timeline: string;
}

export interface Faq {
  question: string;
  answer: string[];
}

export interface Channel {
  name: string;
  purpose: string;
  url: string;
}

export interface Office {
  /** true면 영업용 예시 사이트: 예시 띠·예시 페이지·noindex */
  demo: boolean;
  siteUrl: string;
  name: string;
  /** AI 답변의 첫 문장으로 쓰이기 좋은 한 문장 요약. 이름·지역·주력 분야를 모두 담는다 */
  summary: string;
  region: string;
  focusAreas: string[];
  updatedAt: string;
  contact: {
    phone: string;
    address: string;
    /** 구조화 데이터용 주소 */
    postal: { region: string; locality: string; street: string; postalCode: string };
    directions: string[];
    hours: { label: string; value: string }[];
    /** schema.org openingHours */
    openingHours: string[];
    consultMethods: string[];
  };
  lawyer: {
    name: string;
    role: string;
    message: string;
    career: string[];
  };
  practiceAreas: PracticeArea[];
  fees: {
    consultation: string;
    retainer: string;
    steps: Step[];
  };
  faqs: Faq[];
  channels: Channel[];
  legal: {
    /** 광고책임변호사. 표시 항목은 계약 전 대한변협 최신 광고 규정으로 다시 확인한다 */
    responsibleLawyer: string;
    businessNumber: string;
    disclaimer: string;
  };
  theme: {
    primary: string;
    primaryHover: string;
    accent: string;
  };
}

export const office: Office = {
  demo: true,
  siteUrl: 'https://law-demo.geodino.io',
  name: '○○ 법률사무소',
  summary:
    '○○ 법률사무소는 성남시 분당구 정자동에 있는 법률사무소입니다. 김○○ 변호사가 이혼·가사 사건과 상속 사건을 주로 맡으며, 첫 상담은 예약제로 방문·전화·화상 중에서 고를 수 있습니다.',
  region: '경기도 성남시 분당구',
  focusAreas: ['이혼·가사', '상속'],
  updatedAt: '2026-10-10',

  contact: {
    phone: '031-000-0000',
    address: '경기도 성남시 분당구 ○○로 00, 0층',
    postal: { region: '경기도', locality: '성남시 분당구', street: '○○로 00, 0층', postalCode: '00000' },
    directions: ['신분당선·수인분당선 정자역에서 걸어서 5분', '건물 지하 주차장 이용 가능 (상담 시 1시간 무료)'],
    hours: [
      { label: '평일', value: '오전 9시 ~ 오후 6시' },
      { label: '토요일', value: '예약한 상담만' },
      { label: '일요일·공휴일', value: '쉽니다' },
    ],
    openingHours: ['Mo-Fr 09:00-18:00'],
    consultMethods: ['방문 상담', '전화 상담', '화상 상담'],
  },

  lawyer: {
    name: '김○○',
    role: '대표 변호사',
    message:
      '이혼과 상속은 가족 관계와 재산이 함께 얽혀 있는 사건입니다. 결과를 약속하기보다, 첫 상담에서 사건마다 고를 수 있는 방법과 예상 기간, 비용이 정해지는 기준을 분명하게 설명드리는 것을 원칙으로 합니다.',
    career: ['변호사시험 합격', '법무법인 가사팀 근무 0년', '현 ○○ 법률사무소 대표 변호사'],
  },

  practiceAreas: [
    {
      id: 'divorce',
      name: '이혼·가사',
      summary: '협의이혼, 이혼 소송, 재산분할, 위자료, 양육권·양육비, 면접교섭 사건을 맡습니다.',
      matters: ['협의이혼', '이혼 소송', '재산분할', '위자료', '양육권', '양육비', '면접교섭'],
      steps: [
        {
          title: '첫 상담',
          description: '혼인 기간, 자녀, 재산 상황을 듣고 협의이혼과 이혼 소송 중 가능한 방법을 설명드립니다.',
        },
        { title: '자료 정리', description: '재산 목록과 이혼 사유에 관한 자료를 함께 정리합니다.' },
        {
          title: '협의 또는 소송',
          description: '합의가 가능하면 협의 내용을 정리하고, 어려우면 가정법원에 이혼 소송을 냅니다.',
        },
        {
          title: '조정·재판',
          description: '이혼 소송은 법원 조정을 먼저 거치는 경우가 많고, 조정이 이뤄지지 않으면 재판으로 진행합니다.',
        },
      ],
      prepare: [
        '혼인관계증명서, 가족관계증명서',
        '재산 관련 자료 (부동산, 예금, 보험, 대출)',
        '이혼 사유와 관련된 자료 (메시지, 사진 등)',
        '자녀 양육 상황에 대한 메모',
      ],
      timeline:
        '협의이혼은 법원 확인까지 숙려기간(미성년 자녀가 있으면 3개월, 없으면 1개월)이 필요합니다. 이혼 소송은 사건에 따라 다르지만 대체로 수개월에서 1년 이상 걸립니다.',
    },
    {
      id: 'inheritance',
      name: '상속',
      summary: '상속재산분할, 유류분 반환 청구, 상속포기·한정승인, 상속 부동산 정리 사건을 맡습니다.',
      matters: ['상속재산분할', '유류분 반환 청구', '상속포기', '한정승인', '상속 부동산 정리'],
      steps: [
        { title: '첫 상담', description: '가족 관계, 상속 재산과 빚, 유언이 있는지를 확인합니다.' },
        {
          title: '재산·빚 확인',
          description: '안심상속 원스톱 서비스 등으로 돌아가신 분의 재산과 빚을 확인합니다.',
        },
        {
          title: '협의 또는 심판 청구',
          description: '상속인끼리 협의하고, 협의가 어려우면 가정법원에 상속재산분할 심판을 청구합니다.',
        },
        { title: '등기·정리', description: '나눈 결과에 따라 부동산 등기와 예금 정리를 마칩니다.' },
      ],
      prepare: [
        '돌아가신 분의 가족관계증명서, 기본증명서',
        '재산·빚 조회 결과',
        '유언장 (있는 경우)',
        '생전에 증여한 재산에 관한 자료',
      ],
      timeline:
        '상속포기·한정승인은 상속이 시작된 것을 안 날부터 3개월 안에 신청해야 합니다. 유류분 반환 청구는 상속이 시작되고 돌려받을 증여·유증이 있었다는 것을 안 날부터 1년, 상속이 시작된 날부터 10년이 지나면 할 수 없습니다.',
    },
  ],

  fees: {
    consultation: '첫 상담은 30분에 ○만 원입니다. 사건을 맡기시면 상담료는 수임료에서 뺍니다.',
    retainer:
      '수임료는 착수금과 성공보수로 정해지며, 사건 종류와 난이도, 진행 범위에 따라 다릅니다. 상담 뒤 금액과 업무 범위를 위임계약서에 적어 드립니다.',
    steps: [
      { title: '예약', description: '전화로 상담 날짜를 정합니다.' },
      { title: '상담', description: '방문, 전화, 화상 중에서 고르실 수 있습니다.' },
      { title: '위임 계약', description: '비용과 업무 범위를 위임계약서로 확인합니다.' },
      { title: '진행 안내', description: '사건이 진행될 때마다 단계별로 알려 드립니다.' },
    ],
  },

  faqs: [
    {
      question: '협의이혼과 이혼 소송은 무엇이 다른가요?',
      answer: [
        '협의이혼은 부부가 이혼과 자녀 양육 문제에 합의하고 법원의 확인을 받는 방법입니다. 이혼 소송은 합의가 되지 않을 때 가정법원의 판단을 받는 방법입니다.',
        '재산분할이나 양육권처럼 한 가지라도 합의가 어렵다면 소송이나 조정을 함께 검토합니다.',
      ],
    },
    {
      question: '이혼 소송은 보통 얼마나 걸리나요?',
      answer: [
        '사건마다 다르지만 대체로 수개월에서 1년 이상 걸립니다. 조정에서 합의되면 더 빨리 끝나고, 재산분할 다툼이 크거나 자녀 문제가 얽혀 있으면 더 오래 걸릴 수 있습니다.',
      ],
    },
    {
      question: '양육권은 어떤 기준으로 정해지나요?',
      answer: [
        '법원은 자녀의 복리를 가장 중요하게 봅니다. 그동안 누가 주로 자녀를 돌봤는지, 자녀의 나이와 의사, 양육 환경 등을 함께 살핍니다.',
      ],
    },
    {
      question: '부모님 빚이 재산보다 많으면 상속을 받지 않을 수 있나요?',
      answer: [
        '상속포기나 한정승인을 할 수 있습니다. 상속포기는 재산과 빚을 모두 받지 않는 것이고, 한정승인은 받은 재산 한도 안에서만 빚을 갚는 것입니다.',
        '상속이 시작된 것을 안 날부터 3개월 안에 가정법원에 신청해야 하므로, 빚이 의심되면 빨리 상담받으시는 것이 좋습니다.',
      ],
    },
    {
      question: '유언으로 한 사람에게만 재산이 가면 다른 가족은 아무것도 받을 수 없나요?',
      answer: [
        '법이 정한 일정 몫(유류분)은 돌려 달라고 청구할 수 있습니다. 다만 기한이 있어서, 상속이 시작되고 돌려받을 증여·유증이 있었다는 것을 안 날부터 1년 안에 청구해야 합니다.',
      ],
    },
    {
      question: '첫 상담 때 무엇을 준비하면 되나요?',
      answer: [
        '사건 흐름을 날짜순으로 적은 메모와 가지고 계신 자료(증명서, 재산 자료, 주고받은 메시지 등)를 가져오시면 상담이 빨라집니다. 자료가 없어도 상담은 가능합니다.',
      ],
    },
    {
      question: '상담 비용은 얼마인가요?',
      answer: ['첫 상담은 30분에 ○만 원입니다. 사건을 맡기시면 상담료는 수임료에서 뺍니다.'],
    },
    {
      question: '사무소에 가지 않고 상담할 수 있나요?',
      answer: ['네. 전화 상담과 화상 상담도 예약하실 수 있습니다.'],
    },
  ],

  channels: [
    { name: '네이버 블로그', purpose: '이혼·상속 법률 정보 글', url: 'https://example.com/blog' },
    { name: '네이버 플레이스', purpose: '위치, 상담 시간, 예약', url: 'https://example.com/place' },
    { name: '유튜브', purpose: '짧은 법률 설명 영상', url: 'https://example.com/youtube' },
  ],

  legal: {
    responsibleLawyer: '김○○',
    businessNumber: '000-00-00000',
    disclaimer:
      '이 페이지의 법률 정보는 일반적인 안내이며, 개별 사건에 대한 법률 자문이 아닙니다. 사건마다 사정이 다르므로 상담을 통해 확인하시기 바랍니다.',
  },

  theme: {
    primary: '#1f3a5f',
    primaryHover: '#162b47',
    accent: '#b08a4a',
  },
};
