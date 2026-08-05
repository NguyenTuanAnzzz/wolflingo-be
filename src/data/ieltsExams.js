import { ieltsPracticeSets as exam1 } from './ieltsData.js';

export const ieltsExamsList = [
  {
    id: 1,
    title: "Đề số 01: Smart Cities & Green Tech",
    badge: "Cambridge Academic",
    topic: "Environment & Technology",
    band: "7.5 - 8.5",
    description: "Tập trung vào phát triển đô thị thông minh, năng lượng tái tạo và trí tuệ nhân tạo trong quy hoạch."
  },
  {
    id: 2,
    title: "Đề số 02: Psychology of Decision-Making",
    badge: "Cambridge Academic",
    topic: "Psychology & Business",
    band: "7.5 - 8.5",
    description: "Phân tích hành vi tiêu dùng, kinh tế học hành vi và tâm lý học nhận thức của con người."
  },
  {
    id: 3,
    title: "Đề số 03: Marine Biodiversity & Ocean Conservation",
    badge: "Cambridge Academic",
    topic: "Marine Biology & Ecology",
    band: "8.0 - 9.0",
    description: "Đa dạng sinh học biển, bảo tồn rạn san hô và tác động của biến đổi khí hậu lên đại dương."
  },
  {
    id: 4,
    title: "Đề số 04: Space Exploration & Future Astronomy",
    badge: "Cambridge Academic",
    topic: "Astronomy & Space Tech",
    band: "8.0 - 9.0",
    description: "Khám phá không gian vũ trũ, kính viễn vọng không gian thế hệ mới và khai thác khoáng sản hành tinh."
  },
  {
    id: 5,
    title: "Đề số 05: Artificial Intelligence & the Future of Work",
    badge: "Cambridge Academic",
    topic: "AI & Labor Economics",
    band: "7.5 - 8.5",
    description: "Tự động hóa trí tuệ nhân tạo, chuyển dịch thị trường lao động và kỹ năng thế hệ mới."
  },
  {
    id: 6,
    title: "Đề số 06: Global Education Systems & Pedagogy",
    badge: "Cambridge Academic",
    topic: "Education & Cognitive Development",
    band: "7.5 - 8.0",
    description: "Triết lý giáo dục hiện đại, sư phạm số hóa và phát triển ngôn ngữ ở trẻ em."
  },
  {
    id: 7,
    title: "Đề số 07: Ancient Civilizations & Archaeological Heritage",
    badge: "Cambridge Academic",
    topic: "History & Archaeology",
    band: "8.0 - 8.5",
    description: "Bảo tồn di sản khảo cổ học, lịch sử các nền văn minh cổ đại và công nghệ scan viễn thám."
  },
  {
    id: 8,
    title: "Đề số 08: Human Nutrition, Longevity & Public Health",
    badge: "Cambridge Academic",
    topic: "Health & Nutrition Science",
    band: "7.5 - 8.5",
    description: "Khoa học dinh dưỡng, tuổi thọ sinh học và các chính sách y tế cộng đồng tiên tiến."
  },
  {
    id: 9,
    title: "Đề số 09: Renewable Energy Transition & Climate Economics",
    badge: "Cambridge Academic",
    topic: "Climate Economics & Green Finance",
    band: "8.0 - 9.0",
    description: "Chuyển dịch năng lượng xanh, kinh tế học carbon và đầu tư tài chính bền vững."
  },
  {
    id: 10,
    title: "Đề số 10: Linguistics, Neurolinguistics & Communication",
    badge: "Cambridge Academic",
    topic: "Linguistics & Neurobiology",
    band: "8.5 - 9.0",
    description: "Ngôn ngữ học thần kinh, sự tiến hóa của ngôn ngữ loài người và giao tiếp phi ngôn từ."
  }
];

const createIeltsExam = (id, topic, titlePrefix, prefixId, band) => {
  return {
    reading: [
      {
        id: `${prefixId}_read_1`,
        title: `${titlePrefix}: Key Trends & Empirical Research`,
        band: band,
        topic: topic,
        passage: `In contemporary scientific and academic discourse, the exploration of ${topic.toLowerCase()} has garnered unprecedented attention from researchers and policymakers alike. Over the past twenty years, longitudinal studies have demonstrated that traditional analytical frameworks often fail to account for the intricate dynamics of interconnected global systems. As a consequence, interdisciplinary approaches combining data analytics with domain-specific expertise have emerged as the standard paradigm.\n\nOne salient example of this transformation can be observed in empirical studies conducted across multiple international institutions. Researchers observed that organizations and societies that adopt proactive mitigation strategies exhibit significantly higher resilience against unexpected external shocks. By synthesizing diverse quantitative datasets, scientists have established that continuous adaptation is paramount to long-term stability.\n\nHowever, implementing these innovative protocols is not without controversy. Skeptics argue that the financial allocation required for initial infrastructure overhaul may outweigh immediate short-term benefits. Despite these fiscal objections, consensus within the international research community maintains that delaying transition efforts ultimately incurs exponentially greater socio-economic costs.`,
        vocabularyHighlights: [
          { word: "unprecedented", meaning: "chưa từng có tiền lệ", type: "adj", cefr: "C1" },
          { word: "longitudinal", meaning: "dài hạn, theo thời gian", type: "adj", cefr: "C2" },
          { word: "intricate", meaning: "phức tạp, tinh xảo", type: "adj", cefr: "C1" },
          { word: "salient", meaning: "nổi bật, quan trọng nhất", type: "adj", cefr: "C2" },
          { word: "resilience", meaning: "khả năng phục hồi, tính bền bỉ", type: "noun", cefr: "C1" }
        ],
        questions: [
          {
            id: `${prefixId}_r1_q1`,
            type: "multiple_choice",
            questionText: `Why have traditional analytical frameworks in ${topic.toLowerCase()} been largely replaced by interdisciplinary approaches?`,
            options: [
              { label: "A", text: "Because traditional frameworks are prohibited by international regulations." },
              { label: "B", text: "Because traditional frameworks fail to account for the intricate dynamics of interconnected global systems." },
              { label: "C", text: "Because interdisciplinary methods do not require any financial investment." },
              { label: "D", text: "Because longitudinal studies have proven inaccurate in laboratory settings." }
            ],
            correctAnswer: "B",
            explanation: `Bài đọc nêu rõ: 'traditional analytical frameworks often fail to account for the intricate dynamics of interconnected global systems... interdisciplinary approaches... have emerged as the standard paradigm.'`
          },
          {
            id: `${prefixId}_r1_q2`,
            type: "true_false_not_given",
            questionText: "Skeptics contend that the upfront financial cost of infrastructure overhaul could exceed immediate short-term benefits.",
            options: [
              { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
              { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
              { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
            ],
            correctAnswer: "TRUE",
            explanation: `Đoạn 3 có viết: 'Skeptics argue that the financial allocation required for initial infrastructure overhaul may outweigh immediate short-term benefits.'`
          }
        ]
      },
      {
        id: `${prefixId}_read_2`,
        title: `The Future of ${titlePrefix}: Global Implications`,
        band: band,
        topic: topic,
        passage: `The global ramifications of advancements in ${topic.toLowerCase()} extend far beyond academic institutions, fundamentally influencing policy frameworks, public governance, and commercial strategy. In a landmark analysis published by the World Policy Institute, scholars highlighted a positive correlation between sustained institutional investment and long-term socio-economic prosperity.\n\nCrucially, the success of these initiatives relies heavily on collaborative international governance. Without harmonized regulatory standards, regional disparities in technological adoption and resource distribution tend to widen. As emerging nations accelerate their developmental pathways, equitable access to analytical resources and expertise remains an urgent ethical priority.`,
        vocabularyHighlights: [
          { word: "ramification", meaning: "hệ quả, tác động sâu rộng", type: "noun", cefr: "C2" },
          { word: "correlation", meaning: "sự tương quan, liên hệ tương hỗ", type: "noun", cefr: "C1" },
          { word: "harmonized", meaning: "hài hòa, thống nhất tiêu chuẩn", type: "adj", cefr: "C1" },
          { word: "disparity", meaning: "sự chênh lệch, bất bình đẳng", type: "noun", cefr: "C1" },
          { word: "equitable", meaning: "công bằng, hợp lý", type: "adj", cefr: "C1" }
        ],
        questions: [
          {
            id: `${prefixId}_r2_q1`,
            type: "multiple_choice",
            questionText: "What did the landmark analysis by the World Policy Institute highlight?",
            options: [
              { label: "A", text: "A decline in academic publishing across emerging nations" },
              { label: "B", text: "A positive correlation between sustained institutional investment and long-term prosperity" },
              { label: "C", text: "The immediate necessity of abolishing regional trade tariffs" },
              { label: "D", text: "The failure of collaborative international governance" }
            ],
            correctAnswer: "B",
            explanation: `Bài viết chỉ ra: 'scholars highlighted a positive correlation between sustained institutional investment and long-term socio-economic prosperity.'`
          },
          {
            id: `${prefixId}_r2_q2`,
            type: "true_false_not_given",
            questionText: "Without harmonized regulatory standards, regional disparities in resource distribution tend to become narrower.",
            options: [
              { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
              { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
              { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
            ],
            correctAnswer: "FALSE",
            explanation: `Bài viết khẳng định: 'Without harmonized regulatory standards, regional disparities in technological adoption and resource distribution tend to widen' (mở rộng/tăng lên, không phải narrow/hẹp đi).`
          }
        ]
      }
    ],
    listening: [
      {
        id: `${prefixId}_listen_1`,
        title: `Section 1: Academic Lecture on ${titlePrefix}`,
        audioUrl: "",
        audioScript: `Professor: Good afternoon, everyone. Today's lecture examines the evolving role of ${topic} within modern urban and global systems. When we analyze historical data from the late twentieth century, we see a pronounced shift from reactive problem-solving to predictive modeling. For instance, in our recent empirical survey of forty metropolitan regions, over seventy percent of municipal coordinators reported that integrating automated forecasting tools reduced operational bottlenecks by nearly a third. However, as I always remind my graduate students, technology alone is not a panacea; it must be supported by transparent public communication and continuous training.`,
        translation: `Giáo sư: Chào buổi chiều, mọi người. Bài giảng hôm nay xem xét vai trò đang phát triển của ${topic} trong các hệ thống đô thị và toàn cầu hiện đại. Khi chúng ta phân tích dữ liệu lịch sử từ cuối thế kỷ 20, chúng ta thấy một sự chuyển dịch rõ rệt từ giải quyết vấn đề thụ động sang mô hình hóa dự đoán. Ví dụ, trong cuộc khảo sát thực nghiệm gần đây của chúng tôi tại 40 khu vực đô thị, hơn 70 phần trăm các điều phối viên thành phố báo cáo rằng việc tích hợp các công cụ dự báo tự động đã giảm các điểm nghẽn vận hành gần một phần ba. Tuy nhiên, như tôi luôn nhắc nhở học viên cao học của mình, công nghệ đơn thuần không phải là thần dược; nó phải được hỗ trợ bởi truyền thông công chúng minh bạch và đào tạo liên tục.`,
        questions: [
          {
            id: `${prefixId}_l1_q1`,
            type: "multiple_choice",
            questionText: "What significant historical shift does the professor identify?",
            options: [
              { label: "A", text: "A transition from manual clerical work to outsourced management" },
              { label: "B", text: "A pronounced shift from reactive problem-solving to predictive modeling" },
              { label: "C", text: "The elimination of graduate student research projects" },
              { label: "D", text: "A reduction in overall university research funding" }
            ],
            correctAnswer: "B",
            explanation: `Giáo sư nói: 'we see a pronounced shift from reactive problem-solving to predictive modeling.'`
          },
          {
            id: `${prefixId}_l1_q2`,
            type: "multiple_choice",
            questionText: "According to the municipal coordinators surveyed, what benefit did automated forecasting tools provide?",
            options: [
              { label: "A", text: "They eliminated the need for public communication." },
              { label: "B", text: "They reduced operational bottlenecks by nearly a third." },
              { label: "C", text: "They doubled the number of administrative employees." },
              { label: "D", text: "They replaced traditional university lectures entirely." }
            ],
            correctAnswer: "B",
            explanation: `Bài giảng ghi nhận: 'reduced operational bottlenecks by nearly a third.'`
          }
        ]
      },
      {
        id: `${prefixId}_listen_2`,
        title: `Section 2: Seminar Discussion on ${titlePrefix}`,
        audioUrl: "",
        audioScript: `Student: Excuse me, Professor. Regarding the second chapter of our reading assignment on ${topic}, could you clarify why the authors place such heavy emphasis on institutional resilience?\nProfessor: Certainly, David. Institutional resilience refers to an organization's structural capacity to absorb external disruptions without losing critical functionality. In volatile global environments, organizations with rigid hierarchies often struggle to pivot quickly. Conversely, agile institutions that delegate decision-making authority down to specialized project teams can adapt to unexpected scenarios much faster.`,
        translation: `Học viên: Xin lỗi Giáo sư. Về chương thứ hai của bài tập đọc về ${topic}, thầy có thể giải thích rõ hơn tại sao các tác giả lại nhấn mạnh nhiều đến khả năng phục hồi thể chế không?\nGiáo sư: Chắc chắn rồi, David. Khả năng phục hồi thể chế đề cập đến năng lực cấu trúc của một tổ chức để hấp thụ các sự gián đoạn bên ngoài mà không mất đi chức năng quan trọng. Trong môi trường toàn cầu biến động, các tổ chức với cấu trúc phân cấp cứng nhắc thường gặp khó khăn khi chuyển hướng nhanh chóng. Ngược lại, các cơ quan linh hoạt ủy quyền ra quyết định cho các nhóm dự án chuyên môn có thể thích ứng với các tình huống bất ngờ nhanh hơn nhiều.`,
        questions: [
          {
            id: `${prefixId}_l2_q1`,
            type: "multiple_choice",
            questionText: "How does the professor define 'institutional resilience'?",
            options: [
              { label: "A", text: "An organization's ability to maintain unlimited financial reserves" },
              { label: "B", text: "An organization's structural capacity to absorb external disruptions without losing critical functionality" },
              { label: "C", text: "A strict legal requirement for international corporations" },
              { label: "D", text: "The mandatory annual training of entry-level staff members" }
            ],
            correctAnswer: "B",
            explanation: `Giáo sư định nghĩa rõ ràng: 'Institutional resilience refers to an organization's structural capacity to absorb external disruptions without losing critical functionality.'`
          }
        ]
      }
    ],
    vocabulary: [
      {
        id: `${prefixId}_v_1`,
        word: "paradigm",
        pos: "noun",
        pronunciation: "/ˈpær.ə.daɪm/",
        meaning: "mô hình lý thuyết chuẩn, khuôn mẫu tư duy",
        level: "C1",
        topic: topic,
        example: `The emergence of ${topic.toLowerCase()} represents a fundamental paradigm shift in modern academic research.`,
        collocations: "paradigm shift, dominant paradigm, theoretical paradigm"
      },
      {
        id: `${prefixId}_v_2`,
        word: "resilience",
        pos: "noun",
        pronunciation: "/rɪˈzɪl.jəns/",
        meaning: "khả năng phục hồi, tính kiên cường bền bỉ",
        level: "C1",
        topic: topic,
        example: `Building structural resilience is essential for mitigating the risks associated with global volatility in ${topic.toLowerCase()}.`,
        collocations: "economic resilience, institutional resilience, climate resilience"
      },
      {
        id: `${prefixId}_v_3`,
        word: "empirical",
        pos: "adjective",
        pronunciation: "/ɪmˈpɪr.ɪ.kəl/",
        meaning: "dựa trên thực nghiệm, số liệu quan sát thực tế",
        level: "C1",
        topic: topic,
        example: `Researchers presented convincing empirical evidence supporting the adoption of new ${topic.toLowerCase()} standards.`,
        collocations: "empirical evidence, empirical research, empirical study"
      },
      {
        id: `${prefixId}_v_4`,
        word: "mitigate",
        pos: "verb",
        pronunciation: "/ˈmɪt.ɪ.ɡeɪt/",
        meaning: "làm giảm nhẹ, làm dịu bớt hậu quả",
        level: "C1",
        topic: topic,
        example: `Strategic planning helps organizations mitigate potential hazards in ${topic.toLowerCase()}.`,
        collocations: "mitigate risk, mitigate impact, mitigate effects"
      },
      {
        id: `${prefixId}_v_5`,
        word: "unprecedented",
        pos: "adjective",
        pronunciation: "/ʌnˈpres.ɪ.den.tɪd/",
        meaning: "chưa từng có tiền lệ, vô tiền khoáng hậu",
        level: "C1",
        topic: topic,
        example: `The field of ${topic.toLowerCase()} has experienced unprecedented growth over the last decade.`,
        collocations: "unprecedented scale, unprecedented speed, unprecedented opportunity"
      },
      {
        id: `${prefixId}_v_6`,
        word: "ramification",
        pos: "noun",
        pronunciation: "/ˌræm.ɪ.fɪˈkeɪ.ʃən/",
        meaning: "hệ quả, tác động phát sinh phức tạp",
        level: "C2",
        topic: topic,
        example: `Scholars must carefully evaluate the social and ethical ramifications of ${topic.toLowerCase()} policy decisions.`,
        collocations: "serious ramifications, legal ramifications, political ramifications"
      },
      {
        id: `${prefixId}_v_7`,
        word: "intricate",
        pos: "adjective",
        pronunciation: "/ˈɪn.trɪ.kət/",
        meaning: "phức tạp, tinh xảo, nhiều chi tiết đan xen",
        level: "C1",
        topic: topic,
        example: `Understanding ${topic.toLowerCase()} requires analyzing an intricate web of environmental and economic variables.`,
        collocations: "intricate network, intricate design, intricate system"
      },
      {
        id: `${prefixId}_v_8`,
        word: "synthesize",
        pos: "verb",
        pronunciation: "/ˈsɪn.thə.saɪz/",
        meaning: "tổng hợp, kết hợp thành một thể thống nhất",
        level: "C1",
        topic: topic,
        example: `A comprehensive literature review must synthesize diverse viewpoints across ${topic.toLowerCase()} research.`,
        collocations: "synthesize information, synthesize data, synthesize findings"
      },
      {
        id: `${prefixId}_v_9`,
        word: "disparity",
        pos: "noun",
        pronunciation: "/dɪˈspær.ə.ti/",
        meaning: "sự chênh lệch, bất bình đẳng đáng kể",
        level: "C1",
        topic: topic,
        example: `Policymakers aim to eliminate regional disparities in ${topic.toLowerCase()} resource distribution.`,
        collocations: "economic disparity, regional disparity, income disparity"
      },
      {
        id: `${prefixId}_v_10`,
        word: "equitable",
        pos: "adjective",
        pronunciation: "/ˈek.wɪ.tə.bəl/",
        meaning: "công bằng, vô tư, hợp lý cho mọi bên",
        level: "C1",
        topic: topic,
        example: `International treaties advocate for an equitable allocation of technological advancements in ${topic.toLowerCase()}.`,
        collocations: "equitable access, equitable distribution, equitable society"
      }
    ]
  };
};

export const ieltsExamsData = {
  1: exam1,
  2: createIeltsExam(2, "Psychology & Business", "Psychology of Decision-Making", "ielts_ex2", "7.5 - 8.5"),
  3: createIeltsExam(3, "Marine Biology & Ecology", "Marine Biodiversity & Ocean Conservation", "ielts_ex3", "8.0 - 9.0"),
  4: createIeltsExam(4, "Astronomy & Space Tech", "Space Exploration & Future Astronomy", "ielts_ex4", "8.0 - 9.0"),
  5: createIeltsExam(5, "AI & Labor Economics", "Artificial Intelligence & the Future of Work", "ielts_ex5", "7.5 - 8.5"),
  6: createIeltsExam(6, "Education & Cognitive Development", "Global Education Systems & Pedagogy", "ielts_ex6", "7.5 - 8.0"),
  7: createIeltsExam(7, "History & Archaeology", "Ancient Civilizations & Archaeological Heritage", "ielts_ex7", "8.0 - 8.5"),
  8: createIeltsExam(8, "Health & Nutrition Science", "Human Nutrition, Longevity & Public Health", "ielts_ex8", "7.5 - 8.5"),
  9: createIeltsExam(9, "Climate Economics & Green Finance", "Renewable Energy Transition & Climate Economics", "ielts_ex9", "8.0 - 9.0"),
  10: createIeltsExam(10, "Linguistics & Neurobiology", "Linguistics, Neurolinguistics & Communication", "ielts_ex10", "8.5 - 9.0")
};
