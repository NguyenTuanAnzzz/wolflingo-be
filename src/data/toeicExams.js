import { toeicPracticeSets as exam1 } from './toeicData.js';

export const toeicExamsList = [
  {
    id: 1,
    title: "Đề số 01: Office Communications & Everyday Business",
    badge: "ETS Chuẩn",
    topic: "Office & Business",
    difficulty: "Trung Bình",
    description: "Bộ đề chuẩn giao tiếp công sở, họp hành, thuyết trình và thư từ thương mại thường nhật."
  },
  {
    id: 2,
    title: "Đề số 02: Corporate Finance, Banking & Accounting",
    badge: "ETS Chuẩn",
    topic: "Finance & Banking",
    difficulty: "Khó",
    description: "Tập trung vào từ vựng tài chính, báo cáo ngân sách, kiểm toán và đàm phán ngân hàng."
  },
  {
    id: 3,
    title: "Đề số 03: International Travel, Aviation & Hotels",
    badge: "ETS Chuẩn",
    topic: "Travel & Hospitality",
    difficulty: "Dễ - Trung Bình",
    description: "Tình huống sân bay, đặt phòng khách sạn, lịch trình chuyến bay và hội nghị quốc tế."
  },
  {
    id: 4,
    title: "Đề số 04: Marketing, Advertising & Product Launch",
    badge: "ETS Chuẩn",
    topic: "Marketing & Sales",
    difficulty: "Trung Bình",
    description: "Chiến dịch quảng cáo, nghiên cứu thị trường, ra mắt sản phẩm mới và quan hệ khách hàng."
  },
  {
    id: 5,
    title: "Đề số 05: Information Technology & Software Systems",
    badge: "ETS Chuẩn",
    topic: "IT & Technology",
    difficulty: "Khó",
    description: "Hệ thống phần mềm, bảo trì kỹ thuật, bảo mật mạng và hỗ trợ kỹ thuật văn phòng."
  },
  {
    id: 6,
    title: "Đề số 06: Human Resources, Recruiting & Training",
    badge: "ETS Chuẩn",
    topic: "HR & Recruiting",
    difficulty: "Trung Bình",
    description: "Phỏng vấn tuyển dụng, hợp đồng lao động, đào tạo nhân sự mới và chính sách phúc lợi."
  },
  {
    id: 7,
    title: "Đề số 07: Real Estate, Construction & Engineering",
    badge: "ETS Chuẩn",
    topic: "Real Estate & Construction",
    difficulty: "Khó",
    description: "Bản vẽ xây dựng, kiểm tra công trường, cho thuê văn phòng và quy định an toàn."
  },
  {
    id: 8,
    title: "Đề số 08: Retail, Customer Service & E-Commerce",
    badge: "ETS Chuẩn",
    topic: "Retail & E-Commerce",
    difficulty: "Dễ - Trung Bình",
    description: "Thương mại điện tử, dịch vụ chăm sóc khách hàng, đổi trả hàng hóa và giảm giá bán lẻ."
  },
  {
    id: 9,
    title: "Đề số 09: Logistics, Shipping & Supply Chain",
    badge: "ETS Chuẩn",
    topic: "Logistics & Supply Chain",
    difficulty: "Khó",
    description: "Vận tải quốc tế, kho bãi, thủ tục hải quan và chuỗi cung ứng toàn cầu."
  },
  {
    id: 10,
    title: "Đề số 10: Legal Contracts, Compliance & Governance",
    badge: "ETS Chuẩn",
    topic: "Legal & Compliance",
    difficulty: "Chuyên sâu",
    description: "Hợp đồng thương mại, tuân thủ pháp lý, quản trị doanh nghiệp và sở hữu trí tuệ."
  }
];

const toeicImageUrls = {
  q1: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786759/toeic_images/q1_meeting.jpg",
  q2: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786760/toeic_images/q2_airport.jpg",
  q3: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786761/toeic_images/q3_cafe.jpg",
  q4: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786763/toeic_images/q4_construction.jpg",
  q5: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785794910/toeic_images/q5_library_people.jpg",
  q6: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786767/toeic_images/q6_office.jpg",
  q7: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786768/toeic_images/q7_lab.jpg",
  q8: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786770/toeic_images/q8_supermarket.jpg",
  q9: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786771/toeic_images/q9_park.jpg",
  q10: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785786773/toeic_images/q10_restaurant.jpg",
  q11: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785787590/toeic_images/q11_boardroom.jpg",
  q12: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785787592/toeic_images/q12_charts.jpg",
  q13: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785787594/toeic_images/q13_handshake.jpg",
  q14: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785787595/toeic_images/q14_whiteboard.jpg"
};

const getPart1QuestionsForExam = (id, topic, titlePrefix, prefixId) => {
  const configs = {
    2: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792168/toeic_images/ex2_q1.jpg", ans: "B", text: "She is pointing at financial charts while speaking on the telephone.", trans: "B) Cô ấy đang chỉ vào biểu đồ tài chính khi đang nói chuyện qua điện thoại." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792169/toeic_images/ex2_q2.jpg", ans: "A", text: "Corporate officers are examining financial spreadsheets around a table.", trans: "A) Các cán bộ công ty đang xem xét bảng tính tài chính quanh bàn." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792170/toeic_images/ex2_q3.jpg", ans: "B", text: "Chairs are arranged neatly around the accounting workstations.", trans: "B) Ghế được sắp xếp gọn gàng quanh các bàn làm việc kế toán." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792171/toeic_images/ex2_q4.jpg", ans: "A", text: "Two professionals are shaking hands after signing a loan agreement.", trans: "A) Hai chuyên gia đang bắt tay nhau sau khi ký hợp đồng vay vốn." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792882/toeic_images/ex2_q5.jpg", ans: "A", text: "Colleagues are gathered around a table for a tax compliance meeting.", trans: "A) Các đồng nghiệp đang tập trung quanh bàn cho cuộc họp tuân thủ thuế." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785794913/toeic_images/ex2_q6_people.jpg", ans: "B", text: "People are standing near bookshelves in the financial reference room.", trans: "B) Mọi người đang đứng gần kệ sách trong phòng tài liệu tài chính." }
    ],
    3: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792173/toeic_images/ex3_q1.jpg", ans: "B", text: "A passenger is showing her boarding pass at an airport terminal counter.", trans: "B) Một hành khách đang xuất trình thẻ lên máy bay tại quầy nhà ga sân bay." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792174/toeic_images/ex3_q2.jpg", ans: "A", text: "Patrons are enjoying dining service at a hotel restaurant table.", trans: "A) Khách hàng đang thưởng thức bữa ăn tại bàn nhà hàng khách sạn." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792174/toeic_images/ex3_q3.jpg", ans: "C", text: "A beverage is being served across a counter in a resort cafe.", trans: "C) Một thức uống đang được phục vụ qua quầy tại quán cà phê khu nghỉ dưỡng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792175/toeic_images/ex3_q4.jpg", ans: "A", text: "Visitors are strolling along a walkway in an outdoor hotel park.", trans: "A) Du khách đang đi dạo dọc theo lối đi trong công viên ngoài trời của khách sạn." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792176/toeic_images/ex3_q5.jpg", ans: "B", text: "A booking desk is set up with monitors in a travel agency office.", trans: "B) Bàn đặt vé được bố trí màn hình trong văn phòng đại lý du lịch." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792177/toeic_images/ex3_q6.jpg", ans: "A", text: "A hotel concierge and an international guest are shaking hands.", trans: "A) Nhân viên hỗ trợ khách sạn và một vị khách quốc tế đang bắt tay nhau." }
    ],
    4: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792178/toeic_images/ex4_q1.jpg", ans: "A", text: "A marketing leader is outlining brand strategies on a whiteboard.", trans: "A) Trưởng nhóm tiếp thị đang phác thảo chiến lược thương hiệu trên bảng trắng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792178/toeic_images/ex4_q2.jpg", ans: "A", text: "Advertising team members are gathered at a table for a campaign discussion.", trans: "A) Các thành viên nhóm quảng cáo đang tập trung tại bàn để thảo luận chiến dịch." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792179/toeic_images/ex4_q3.jpg", ans: "B", text: "A specialist is pointing at market conversion charts on a screen.", trans: "B) Chuyên viên đang chỉ vào biểu đồ chuyển đổi thị trường trên màn hình." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792263/toeic_images/ex4_q4.jpg", ans: "A", text: "Consumer products are displayed on shelves for a promotional launch.", trans: "A) Sản phẩm tiêu dùng được trưng bày trên kệ cho chiến dịch ra mắt." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792180/toeic_images/ex4_q5.jpg", ans: "C", text: "Refreshments are being served at a counter during a media breakfast.", trans: "C) Đồ uống giải khát đang được phục vụ tại quầy trong buổi họp báo điểm tâm." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792181/toeic_images/ex4_q6.jpg", ans: "A", text: "Executives are reviewing marketing budget proposals in a boardroom.", trans: "A) Các giám đốc đang xem xét đề xuất ngân sách tiếp thị trong phòng họp." }
    ],
    5: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792182/toeic_images/ex5_q1.jpg", ans: "A", text: "An engineer is monitoring hardware equipment in an IT laboratory.", trans: "A) Kỹ sư đang giám sát thiết bị phần cứng trong phòng thí nghiệm IT." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792183/toeic_images/ex5_q2.jpg", ans: "B", text: "Modern workstations with dual monitors are arranged in a software office.", trans: "B) Bàn làm việc hiện đại với màn hình kép được sắp xếp trong văn phòng phần mềm." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792184/toeic_images/ex5_q3.jpg", ans: "A", text: "A lead architect is explaining a cloud system diagram on a whiteboard.", trans: "A) Kiến trúc sư trưởng đang giải thích sơ đồ hệ thống đám mây trên bảng trắng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792185/toeic_images/ex5_q4.jpg", ans: "A", text: "An IT committee is meeting in a conference room to review cybersecurity.", trans: "A) Ủy ban công nghệ thông tin đang họp trong phòng để rà soát an ninh mạng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792185/toeic_images/ex5_q5.jpg", ans: "B", text: "A systems analyst is pointing at network latency charts on a monitor.", trans: "B) Chuyên viên phân tích hệ thống đang chỉ vào biểu đồ độ trễ mạng trên màn hình." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785794915/toeic_images/ex5_q6_people.jpg", ans: "B", text: "Programmers are browsing reference materials in a technical library.", trans: "B) Các lập trình viên đang tham khảo tài liệu trong thư viện kỹ thuật." }
    ],
    6: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792187/toeic_images/ex6_q1.jpg", ans: "A", text: "An HR manager is shaking hands with a candidate before an interview.", trans: "A) Trưởng phòng nhân sự đang bắt tay ứng viên trước buổi phỏng vấn." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792188/toeic_images/ex6_q2.jpg", ans: "A", text: "A recruiting panel is seated together around a conference table.", trans: "A) Hội đồng tuyển dụng đang ngồi cùng nhau quanh bàn họp." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785794919/toeic_images/ex6_q3_people.jpg", ans: "B", text: "Employees are reading in a corporate training resource center.", trans: "B) Nhân viên đang đọc sách trong trung tâm đào tạo doanh nghiệp." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792189/toeic_images/ex6_q4.jpg", ans: "A", text: "A trainer is conducting an employee orientation using a whiteboard.", trans: "A) Người đào tạo đang hướng dẫn nhân viên mới sử dụng bảng trắng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792190/toeic_images/ex6_q5.jpg", ans: "B", text: "HR desks and computers are organized neatly in the talent department.", trans: "B) Bàn làm việc và máy tính của phòng nhân sự được bố trí gọn gàng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792190/toeic_images/ex6_q6.jpg", ans: "A", text: "Company staff members are walking outdoors during a team-building break.", trans: "A) Nhân viên công ty đang đi dạo ngoài trời trong giờ giải lao gắn kết đội ngũ." }
    ],
    7: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792191/toeic_images/ex7_q1.jpg", ans: "A", text: "Engineers wearing safety helmets are examining a construction site.", trans: "A) Các kỹ sư đội mũ bảo hộ đang khảo sát khu vực công trường xây dựng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792192/toeic_images/ex7_q2.jpg", ans: "A", text: "Architects are reviewing structural blueprints inside a boardroom.", trans: "A) Các kiến trúc sư đang xem xét bản vẽ kết cấu trong phòng họp." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792193/toeic_images/ex7_q3.jpg", ans: "A", text: "A real estate broker is shaking hands with a client after a lease agreement.", trans: "A) Môi giới bất động sản đang bắt tay khách hàng sau hợp đồng thuê nhà." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792193/toeic_images/ex7_q4.jpg", ans: "B", text: "Workstations for CAD drafting are arranged neatly in an engineering office.", trans: "B) Các bàn làm việc vẽ kỹ thuật CAD được sắp xếp gọn gàng trong văn phòng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792194/toeic_images/ex7_q5.jpg", ans: "B", text: "A property analyst is pointing at real estate valuation trends on a screen.", trans: "B) Chuyên viên phân tích bất động sản đang chỉ vào xu hướng giá trị trên màn hình." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792195/toeic_images/ex7_q6.jpg", ans: "A", text: "Project managers are gathered around a table for a safety briefing.", trans: "A) Các quản lý dự án đang tập trung quanh bàn cho buổi họp an toàn lao động." }
    ],
    8: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792196/toeic_images/ex8_q1.jpg", ans: "A", text: "Shoppers are browsing commercial products in a supermarket aisle.", trans: "A) Người mua sắm đang chọn sản phẩm thương mại trên lối đi siêu thị." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792197/toeic_images/ex8_q2.jpg", ans: "A", text: "Customer service staff are serving guests at a retail dining table.", trans: "A) Nhân viên chăm sóc khách hàng đang phục vụ khách tại bàn ăn." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792197/toeic_images/ex8_q3.jpg", ans: "C", text: "A beverage is being served across a counter at an e-commerce popup cafe.", trans: "C) Thức uống đang được phục vụ qua quầy tại quán cà phê sự kiện bán lẻ." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792198/toeic_images/ex8_q4.jpg", ans: "B", text: "An e-commerce manager is analyzing online retail charts on a monitor.", trans: "B) Quản lý bán lẻ trực tuyến đang phân tích biểu đồ doanh số trên màn hình." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792199/toeic_images/ex8_q5.jpg", ans: "B", text: "Customer support workstations are arranged neatly in an office.", trans: "B) Các bàn làm việc hỗ trợ khách hàng được bố trí gọn gàng trong văn phòng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792284/toeic_images/ex8_q6.jpg", ans: "A", text: "A store manager is shaking hands with a retail supply partner.", trans: "A) Quản lý cửa hàng đang bắt tay với đối tác cung ứng bán lẻ." }
    ],
    9: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792200/toeic_images/ex9_q1.jpg", ans: "B", text: "Cargo shipments and passengers are moving through an airport terminal.", trans: "B) Hàng hóa vận chuyển và hành khách đang di chuyển qua nhà ga sân bay." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792201/toeic_images/ex9_q2.jpg", ans: "A", text: "Logistics supervisors wearing helmets are inspecting warehouse operations.", trans: "A) Giám sát hậu cần đội mũ bảo hộ đang kiểm tra hoạt động kho bãi." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792201/toeic_images/ex9_q3.jpg", ans: "B", text: "Computers for tracking global supply chain routes are set up on desks.", trans: "B) Máy tính theo dõi tuyến đường chuỗi cung ứng toàn cầu được bố trí trên bàn." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792202/toeic_images/ex9_q4.jpg", ans: "A", text: "Supply chain managers are meeting in a boardroom to plan distribution.", trans: "A) Các nhà quản lý chuỗi cung ứng đang họp để lên kế hoạch phân phối." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792203/toeic_images/ex9_q5.jpg", ans: "A", text: "Inventory goods are organized on shelves for retail distribution.", trans: "A) Hàng hóa tồn kho được sắp xếp trên kệ để phân phối bán lẻ." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792203/toeic_images/ex9_q6.jpg", ans: "A", text: "A shipping coordinator is shaking hands with a freight distributor.", trans: "A) Điều phối viên vận chuyển đang bắt tay với nhà phân phối hàng hóa." }
    ],
    10: [
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792204/toeic_images/ex10_q1.jpg", ans: "A", text: "Two attorneys are shaking hands after finalizing a legal compliance contract.", trans: "A) Hai luật sư đang bắt tay nhau sau khi hoàn tất hợp đồng tuân thủ pháp lý." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785794917/toeic_images/ex10_q2_people.jpg", ans: "B", text: "A legal researcher is standing near bookshelves in a law library.", trans: "B) Nghiên cứu viên pháp lý đang đứng gần kệ sách trong thư viện luật." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792206/toeic_images/ex10_q3.jpg", ans: "A", text: "Board members are holding a corporate governance review in a boardroom.", trans: "A) Thành viên hội đồng quản trị đang họp rà soát quản trị doanh nghiệp." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792206/toeic_images/ex10_q4.jpg", ans: "A", text: "A compliance officer is explaining regulatory policies using a whiteboard.", trans: "A) Cán bộ tuân thủ đang giải thích chính sách quy định sử dụng bảng trắng." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792207/toeic_images/ex10_q5.jpg", ans: "B", text: "Desks and monitors are arranged neatly in a legal counsel office.", trans: "B) Bàn làm việc và màn hình được sắp xếp gọn gàng trong văn phòng tư vấn pháp lý." },
      { imgUrl: "https://res.cloudinary.com/dmjudszz9/image/upload/v1785792208/toeic_images/ex10_q6.jpg", ans: "A", text: "Legal advisors are gathered around a table to discuss contract terms.", trans: "A) Các cố vấn pháp lý đang tập trung quanh bàn để thảo luận điều khoản hợp đồng." }
    ]
  };

  const selectedList = configs[id] || configs[2];

  return selectedList.map((item, idx) => {
    const qNum = idx + 1;
    const optionLabels = ["A", "B", "C", "D"];
    const distractors = {
      A: [
        "The room is undergoing complete renovation.",
        "Equipment is being repaired by a maintenance crew.",
        "Staff members are leaving the building."
      ],
      B: [
        "Folders are being stacked in a cardboard box.",
        "The lighting fixtures are being switched off.",
        "A presentation screen is being repaired."
      ],
      C: [
        "The office door has been locked from outside.",
        "Furniture is being moved out of the room.",
        "All workstations are currently unoccupied."
      ],
      D: [
        "The window blinds have been fully closed.",
        "A carpet is being replaced in the hallway.",
        "Documents are being shredded by a machine."
      ]
    };

    const options = optionLabels.map(label => {
      if (label === item.ans) {
        return { label, text: item.text };
      } else {
        const altIndex = optionLabels.indexOf(label);
        const fallbackText = distractors[item.ans][altIndex % 3] || "A technician is adjusting the display monitor.";
        return { label, text: fallbackText };
      }
    });

    const vietnameseDistractors = {
      A: [
        "Căn phòng đang được cải tạo toàn diện.",
        "Thiết bị đang được sửa chữa bởi đội bảo trì.",
        "Nhân viên đang rời khỏi tòa nhà."
      ],
      B: [
        "Tập hồ sơ đang được xếp chồng vào thùng giấy.",
        "Hệ thống đèn chiếu sáng đang được tắt đi.",
        "Màn hình trình chiếu đang được sửa chữa."
      ],
      C: [
        "Cửa văn phòng đã bị khóa từ bên ngoài.",
        "Đồ nội thất đang được dọn ra khỏi phòng.",
        "Tất cả các vị trí làm việc hiện không có người."
      ],
      D: [
        "Rèm cửa sổ đã được kéo kín hoàn toàn.",
        "Thảm đang được thay mới trong hành lang.",
        "Tài liệu đang được hủy bằng máy cắt giấy."
      ]
    };

    const translationLines = optionLabels.map(label => {
      if (label === item.ans) {
        return item.trans;
      } else {
        const altIndex = optionLabels.indexOf(label);
        const transFallback = vietnameseDistractors[item.ans][altIndex % 3] || `${label}) Kỹ thuật viên đang điều chỉnh màn hình hiển thị.`;
        return `${label}) ${transFallback}`;
      }
    }).join("\n");

    const audioScriptLines = options.map(opt => `${opt.label}) ${opt.text}`).join("\n");

    return {
      id: `${prefixId}_p1_${qNum}`,
      title: `Part 1: Photographs - ${titlePrefix} - Q${qNum}`,
      imageUrl: item.imgUrl || toeicImageUrls[item.img],
      imageDescription: item.text,
      audioScript: audioScriptLines,
      translation: translationLines,
      options,
      correctAnswer: item.ans,
      explanation: `Hình ảnh minh họa ngữ cảnh ${topic}: đáp án ${item.ans} ("${item.text}") mô tả chính xác tình huống trong tranh.`
    };
  });
};

const createToeicExam = (id, topic, titlePrefix, prefixId) => {
  return {
    listening: {
      part1: getPart1QuestionsForExam(id, topic, titlePrefix, prefixId),
      part2: [
        {
          id: `${prefixId}_p2_1`,
          title: "Part 2: Question-Response - Q1",
          audioScript: `Question: Where should we submit the ${topic.toLowerCase()} quarterly report?\nA) Before 5:00 PM on Friday.\nB) Please upload it directly to the shared cloud server.\nC) Yes, the report was very comprehensive.`,
          translation: `Câu hỏi: Chúng ta nên nộp báo cáo quý về ${topic.toLowerCase()} ở đâu?\nA) Trước 5:00 chiều thứ Sáu.\nB) Vui lòng tải trực tiếp lên máy chủ đám mây chia sẻ.\nC) Vâng, báo cáo rất toàn diện.`,
          options: [
            { label: "A", text: "Before 5:00 PM on Friday." },
            { label: "B", text: "Please upload it directly to the shared cloud server." },
            { label: "C", text: "Yes, the report was very comprehensive." }
          ],
          correctAnswer: "B",
          explanation: `Câu hỏi 'Where' (Ở đâu) đòi hỏi câu trả lời chỉ địa điểm hoặc phương thức nộp tài liệu ('shared cloud server'). Đáp án B.`
        },
        {
          id: `${prefixId}_p2_2`,
          title: "Part 2: Question-Response - Q2",
          audioScript: `Question: Who is coordinating the new ${topic.toLowerCase()} training seminar next Tuesday?\nA) Ms. Takahashi from the regional headquarters.\nB) In Conference Room B on the third floor.\nC) Approximately forty team members attended.`,
          translation: `Câu hỏi: Ai là người điều phối hội thảo đào tạo ${topic.toLowerCase()} mới vào thứ Ba tới?\nA) Cô Takahashi từ trụ sở khu vực.\nB) Trong Phòng họp B ở tầng ba.\nC) Khoảng bốn mươi thành viên trong nhóm đã tham dự.`,
          options: [
            { label: "A", text: "Ms. Takahashi from the regional headquarters." },
            { label: "B", text: "In Conference Room B on the third floor." },
            { label: "C", text: "Approximately forty team members attended." }
          ],
          correctAnswer: "A",
          explanation: `Câu hỏi 'Who' (Ai) hỏi danh tính người điều phối. Đáp án A cung cấp tên cụ thể (Ms. Takahashi).`
        },
        {
          id: `${prefixId}_p2_3`,
          title: "Part 2: Question-Response - Q3",
          audioScript: `Question: When will the revised ${topic.toLowerCase()} guidelines take effect?\nA) Starting on the first day of next month.\nB) Yes, the supervisor approved the changes.\nC) Because of the seasonal policy update.`,
          translation: `Câu hỏi: Khi nào các hướng dẫn ${topic.toLowerCase()} sửa đổi sẽ có hiệu lực?\nA) Bắt đầu vào ngày đầu tiên của tháng tới.\nB) Vâng, người giám sát đã chấp thuận các thay đổi.\nC) Bởi vì cập nhật chính sách theo mùa.`,
          options: [
            { label: "A", text: "Starting on the first day of next month." },
            { label: "B", text: "Yes, the supervisor approved the changes." },
            { label: "C", text: "Because of the seasonal policy update." }
          ],
          correctAnswer: "A",
          explanation: `Câu hỏi 'When' (Khi nào) cần mốc thời gian rõ ràng ('first day of next month'). Đáp án A.`
        }
      ],
      part3: [
        {
          id: `${prefixId}_p3_1`,
          title: `Part 3: Conversations - ${titlePrefix}`,
          audioScript: `M: Hi Laura, have you reviewed the latest draft of our ${topic.toLowerCase()} proposals for the board meeting tomorrow afternoon?\nW: Yes, I just finished reading through section four. The budget allocation looks accurate, but we need to update the timeline for the Q3 implementation phase.\nM: Good point. Let's schedule a brief call with the lead coordinator at 2:00 PM today to finalize those dates before printing the executive handouts.`,
          translation: `M: Chào Laura, bạn đã xem bản thảo mới nhất về đề xuất ${topic.toLowerCase()} của chúng ta cho cuộc họp ban giám đốc vào chiều mai chưa?\nW: Rồi, tôi vừa đọc xong phần bốn. Phân bổ ngân sách trông chính xác, nhưng chúng ta cần cập nhật mốc thời gian cho giai đoạn triển khai quý 3.\nM: Ý kiến hay. Hãy lên lịch một cuộc gọi ngắn với người điều phối chính vào lúc 2:00 chiều nay để chốt các ngày đó trước khi in tài liệu cho ban điều hành.`,
          questions: [
            {
              id: `${prefixId}_p3_1_q1`,
              questionText: "What are the speakers preparing for?",
              options: [
                { label: "A", text: "A board meeting tomorrow afternoon" },
                { label: "B", text: "An annual staff holiday celebration" },
                { label: "C", text: "A press conference for a new product" },
                { label: "D", text: "A job interview with a client" }
              ],
              correctAnswer: "A",
              explanation: "Người đàn ông hỏi: 'proposals for the board meeting tomorrow afternoon'. Đáp án A."
            },
            {
              id: `${prefixId}_p3_1_q2`,
              questionText: "What does the woman suggest updating?",
              options: [
                { label: "A", text: "The executive team menu" },
                { label: "B", text: "The timeline for the Q3 implementation phase" },
                { label: "C", text: "The office floor layout" },
                { label: "D", text: "The company logo colors" }
              ],
              correctAnswer: "B",
              explanation: "Người phụ nữ nói: 'we need to update the timeline for the Q3 implementation phase'."
            }
          ]
        }
      ],
      part4: [
        {
          id: `${prefixId}_p4_1`,
          title: `Part 4: Short Talks - ${titlePrefix} Announcement`,
          audioScript: `Good morning, everyone. Welcome to our quarterly workshop on ${topic}. Today, we will focus on enhancing workflow efficiency and ensuring strict compliance with updated industry standards. Before we break into specialized discussion groups at 10:30 AM, please make sure you have downloaded the interactive workbook from our company portal. If anyone experiences technical difficulty with the portal, please speak to one of the technical coordinators standing at the back of the auditorium. Let's get started with opening remarks from our Director of Operations.`,
          translation: `Chào buổi sáng, tất cả mọi người. Chào mừng đến với hội thảo quý của chúng ta về ${topic}. Hôm nay, chúng ta sẽ tập trung vào việc nâng cao hiệu quả quy trình làm việc và đảm bảo tuân thủ nghiêm ngặt các tiêu chuẩn ngành mới nhất. Trước khi chúng ta chia thành các nhóm thảo luận chuyên môn vào lúc 10:30 sáng, vui lòng đảm bảo rằng bạn đã tải tài liệu làm việc tương tác từ cổng thông tin công ty. Nếu ai gặp khó khăn kỹ thuật với cổng thông tin, vui lòng trao đổi với một trong những điều phối viên kỹ thuật đứng ở cuối hội trường. Hãy cùng bắt đầu với lời phát biểu khai mạc từ Giám đốc Vận hành của chúng ta.`,
          questions: [
            {
              id: `${prefixId}_p4_1_q1`,
              questionText: "What is the primary purpose of the quarterly workshop?",
              options: [
                { label: "A", text: "To discuss workflow efficiency and compliance standards" },
                { label: "B", text: "To celebrate an annual retirement" },
                { label: "C", text: "To vote on a company name change" },
                { label: "D", text: "To introduce a new cafeteria vendor" }
              ],
              correctAnswer: "A",
              explanation: "Bài nói nêu rõ: 'focus on enhancing workflow efficiency and ensuring strict compliance with updated industry standards'."
            },
            {
              id: `${prefixId}_p4_1_q2`,
              questionText: "What are attendees instructed to do before 10:30 AM?",
              options: [
                { label: "A", text: "Submit an expense receipt" },
                { label: "B", text: "Download the interactive workbook from the portal" },
                { label: "C", text: "Turn off their mobile devices" },
                { label: "D", text: "Register at the front security desk" }
              ],
              correctAnswer: "B",
              explanation: "Người nói nhấn mạnh: 'please make sure you have downloaded the interactive workbook from our company portal'."
            }
          ]
        }
      ]
    },
    reading: {
      part5: [
        {
          id: `${prefixId}_p5_1`,
          title: "Part 5: Incomplete Sentences - Q1",
          questionText: `The executive board commended the ${topic.toLowerCase()} department for reducing annual operational expenditures by ------- 15 percent this quarter.`,
          translation: `Ban điều hành đã khen ngợi bộ phận ${topic.toLowerCase()} vì đã giảm chi phí vận hành hàng năm ------- 15 phần trăm trong quý này.`,
          options: [
            { label: "A", text: "approximate" },
            { label: "B", text: "approximately" },
            { label: "C", text: "approximation" },
            { label: "D", text: "approximated" }
          ],
          correctAnswer: "B",
          explanation: "Trước cụm số lượng ('15 percent'), cần một trạng từ chỉ mức độ ('approximately' - xấp xỉ/khoảng). Đáp án B."
        },
        {
          id: `${prefixId}_p5_2`,
          title: "Part 5: Incomplete Sentences - Q2",
          questionText: `All employees must submit their signed ${topic.toLowerCase()} compliance acknowledgments ------- five working days after receiving the revised employee handbook.`,
          translation: `Tất cả nhân viên phải nộp giấy xác nhận tuân thủ ${topic.toLowerCase()} đã ký ------- năm ngày làm việc sau khi nhận được sổ tay nhân viên sửa đổi.`,
          options: [
            { label: "A", text: "within" },
            { label: "B", text: "among" },
            { label: "C", text: "during" },
            { label: "D", text: "between" }
          ],
          correctAnswer: "A",
          explanation: "Giới từ 'within' + khoảng thời gian (within five working days) mang nghĩa 'trong vòng 5 ngày làm việc'. Đáp án A."
        },
        {
          id: `${prefixId}_p5_3`,
          title: "Part 5: Incomplete Sentences - Q3",
          questionText: `Because of the rapid growth in international markets, our firm is actively recruiting experienced ${topic.toLowerCase()} specialists who are fluent in two or more languages.`,
          translation: `Do sự tăng trưởng nhanh chóng tại các thị trường quốc tế, công ty của chúng tôi đang tích cực tuyển dụng các chuyên gia ${topic.toLowerCase()} giàu kinh nghiệm thông thạo từ hai ngôn ngữ trở lên.`,
          options: [
            { label: "A", text: "recruiting" },
            { label: "B", text: "recruited" },
            { label: "C", text: "recruitment" },
            { label: "D", text: "recruits" }
          ],
          correctAnswer: "A",
          explanation: "Sau 'is actively' cần động từ dạng V-ing ('recruiting') để tạo thì hiện tại tiếp diễn chủ động. Đáp án A."
        }
      ],
      part6: [
        {
          id: `${prefixId}_p6_1`,
          title: `Part 6: Text Completion - ${titlePrefix} Memorandum`,
          passage: `TO: All Department Staff\nFROM: Office of the Managing Director\nSUBJECT: Annual ${topic} Audit & Policy Review\nDATE: October 14\n\nWe would like to remind all staff members that our annual ${topic} comprehensive audit is scheduled to begin next Monday. Over the course of three days, external auditors will examine departmental records and procedure checklists.\n\nTo ensure a seamless evaluation, please make certain that all relevant documents are organized and accessible in the centralized shared drive. -------. We appreciate your cooperation in maintaining our high organizational standards.\n\nThank you for your ongoing commitment to professional excellence.`,
          translation: `GỬI: Tất cả nhân viên bộ phận\nTỪ: Văn phòng Giám đốc Điều hành\nCHỦ ĐỀ: Kiểm toán & Rà soát Chính sách ${topic} thường niên\nNGÀY: 14 tháng 10\n\nChúng tôi xin nhắc nhở tất cả nhân viên rằng cuộc kiểm toán toàn diện ${topic} thường niên dự kiến bắt đầu vào thứ Hai tới. Trong suốt ba ngày, các kiểm toán viên độc lập sẽ kiểm tra hồ sơ bộ phận và danh sách quy trình.\n\nĐể đảm bảo quá trình đánh giá diễn ra suôn sẻ, vui lòng chắc chắn rằng tất cả các tài liệu liên quan được sắp xếp và có thể truy cập trên ổ đĩa chia sẻ chung. -------. Chúng tôi đánh giá cao sự hợp tác của các bạn trong việc duy trì các tiêu chuẩn tổ chức cao của chúng ta.\n\nCảm ơn cam kết liên tục của các bạn đối với sự xuất sắc chuyên môn.`,
          questions: [
            {
              id: `${prefixId}_p6_1_q1`,
              questionText: "Why is the memo being sent to staff members?",
              options: [
                { label: "A", text: `To notify them about an upcoming annual ${topic} audit` },
                { label: "B", text: "To announce a company-wide salary increase" },
                { label: "C", text: "To introduce a new office furniture layout" },
                { label: "D", text: "To cancel the weekly department meeting" }
              ],
              correctAnswer: "A",
              explanation: "MEMO ghi rõ: 'our annual comprehensive audit is scheduled to begin next Monday'. Đáp án A."
            },
            {
              id: `${prefixId}_p6_1_q2`,
              questionText: "Which of the following sentences best completes the blank marked ------- in paragraph 2?",
              options: [
                { label: "A", text: "Any missing or incomplete files must be reported to your supervisor immediately." },
                { label: "B", text: "The cafeteria will be closed for renovation during the holiday break." },
                { label: "C", text: "Parking permits are available at the basement reception desk." },
                { label: "D", text: "Thank you for purchasing our latest software package." }
              ],
              correctAnswer: "A",
              explanation: "Câu trước nói về việc sắp xếp hồ sơ tài liệu trên ổ đĩa chung; câu nối tiếp phù hợp nhất là thông báo phải báo cáo ngay nếu có hồ sơ thiếu hoặc chưa hoàn chỉnh. Đáp án A."
            }
          ]
        }
      ],
      part7: [
        {
          id: `${prefixId}_p7_1`,
          title: `Part 7: Reading Comprehension - ${titlePrefix} Article`,
          passage: `GLOBAL ENTERPRISE INSIGHTS — IN-DEPTH REPORT\n\nNavigating Modern ${topic} Challenges in the Global Economy\n\nBy Katherine Miller | Published: September 28\n\nAs organizations expand their operations across borderless digital marketplaces, mastering effective ${topic} strategies has become an indispensable factor for long-term commercial sustainability. According to an industry survey conducted by the Global Corporate Leadership Institute, nearly 82 percent of executives identified streamlined ${topic} workflows as the primary driver of operational efficiency over the past fiscal year.\n\n"Traditional approaches that rely on siloed departmental communication are no longer viable in a fast-paced environment," explained Dr. Marcus Vance, senior researcher at Vance Analytics. "Modern enterprises must embrace integrated digital tools that allow cross-functional teams to collaborate seamlessly across different time zones."\n\nTo help organizations adapt to this evolving landscape, the Institute has released a comprehensive benchmark guide that outlines five key pillars of implementation. Organizations that adopted these pillars reported an average productivity gain of 24 percent within the first six months.`,
          translation: `GLOBAL ENTERPRISE INSIGHTS — BÁO CÁO CHUYÊN SÂU\n\nVượt Qua Thách Thức ${topic} Hiện Đại trong Nền Kinh Tế Toàn Cầu\n\nTác giả: Katherine Miller | Xuất bản: 28 tháng 9\n\nKhi các tổ chức mở rộng hoạt động trên các thị trường kỹ thuật số không biên giới, việc làm chủ các chiến lược ${topic} hiệu quả đã trở thành yếu tố không thể thiếu cho sự bền vững thương mại lâu dài. Theo một khảo sát ngành do Viện Lãnh đạo Doanh nghiệp Toàn cầu thực hiện, gần 82 phần trăm các nhà điều hành đã xác định quy trình làm việc ${topic} tinh gọn là động lực chính của hiệu quả vận hành trong năm tài chính vừa qua.\n\n"Các phương pháp truyền thống phụ thuộc vào giao tiếp riêng lẻ giữa các bộ phận không còn khả thi trong môi trường nhịp độ nhanh," Tiến sĩ Marcus Vance, nhà nghiên cứu cấp cao tại Vance Analytics giải thích. "Các doanh nghiệp hiện đại phải đón nhận các công cụ kỹ thuật số tích hợp cho phép các nhóm liên chức năng phối hợp liền mạch qua các múi giờ khác nhau."\n\nĐể giúp các tổ chức thích ứng với bối cảnh phát triển này, Viện đã phát hành một bộ tài liệu hướng dẫn chuẩn chỉ ra năm trụ cột triển khai chính. Các tổ chức áp dụng những trụ cột này đã báo cáo mức tăng năng suất trung bình 24 phần trăm trong sáu tháng đầu tiên.`,
          questions: [
            {
              id: `${prefixId}_p7_1_q1`,
              questionText: `What percentage of executives identified streamlined ${topic} workflows as the primary driver of operational efficiency?`,
              options: [
                { label: "A", text: "24 percent" },
                { label: "B", text: "50 percent" },
                { label: "C", text: "82 percent" },
                { label: "D", text: "95 percent" }
              ],
              correctAnswer: "C",
              explanation: "Bài báo viết: 'nearly 82 percent of executives identified streamlined workflows as the primary driver...'. Đáp án C."
            },
            {
              id: `${prefixId}_p7_1_q2`,
              questionText: "What did Dr. Marcus Vance emphasize regarding traditional approaches?",
              options: [
                { label: "A", text: "They are more reliable than cloud-based networks." },
                { label: "B", text: "They are no longer viable in a fast-paced environment." },
                { label: "C", text: "They should be mandatory for all entry-level staff." },
                { label: "D", text: "They require annual government licensing fees." }
              ],
              correctAnswer: "B",
              explanation: "Dr. Marcus Vance khẳng định: 'Traditional approaches... are no longer viable in a fast-paced environment.' Đáp án B."
            },
            {
              id: `${prefixId}_p7_1_q3`,
              questionText: "What was the average productivity gain reported by organizations adopting the five key pillars?",
              options: [
                { label: "A", text: "10 percent" },
                { label: "B", text: "15 percent" },
                { label: "C", text: "24 percent" },
                { label: "D", text: "40 percent" }
              ],
              correctAnswer: "C",
              explanation: "Đoạn cuối bài báo ghi nhận: 'reported an average productivity gain of 24 percent within the first six months.' Đáp án C."
            }
          ]
        }
      ]
    }
  };
};

export const toeicExamsData = {
  1: exam1,
  2: createToeicExam(2, "Corporate Finance, Banking & Accounting", "Corporate Finance & Banking", "t_ex2"),
  3: createToeicExam(3, "International Travel, Aviation & Hotels", "Travel & Aviation Logistics", "t_ex3"),
  4: createToeicExam(4, "Marketing, Advertising & Product Launch", "Global Marketing & Brand Launch", "t_ex4"),
  5: createToeicExam(5, "Information Technology & Software Systems", "IT Systems & Cybersecurity", "t_ex5"),
  6: createToeicExam(6, "Human Resources, Recruiting & Training", "HR Recruiting & Talent Training", "t_ex6"),
  7: createToeicExam(7, "Real Estate, Construction & Engineering", "Commercial Real Estate & Construction", "t_ex7"),
  8: createToeicExam(8, "Retail, Customer Service & E-Commerce", "E-Commerce & Customer Relations", "t_ex8"),
  9: createToeicExam(9, "Logistics, Shipping & Supply Chain", "Global Logistics & Freight Supply", "t_ex9"),
  10: createToeicExam(10, "Legal Contracts, Compliance & Governance", "Legal Contracts & Governance", "t_ex10")
};
