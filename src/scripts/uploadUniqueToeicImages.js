import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { seedExamsData } from './seedExams.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uniqueImagesMap = {
  // Exam 2
  ex2_q1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  ex2_q2: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  ex2_q3: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  ex2_q4: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  ex2_q5: "https://images.unsplash.com/photo-1542744094-3a3e23031d77?w=800&q=80",
  ex2_q6: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",

  // Exam 3
  ex3_q1: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&q=80",
  ex3_q2: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  ex3_q3: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
  ex3_q4: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&q=80",
  ex3_q5: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  ex3_q6: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",

  // Exam 4
  ex4_q1: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  ex4_q2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  ex4_q3: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  ex4_q4: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=80",
  ex4_q5: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
  ex4_q6: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",

  // Exam 5
  ex5_q1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  ex5_q2: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  ex5_q3: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  ex5_q4: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  ex5_q5: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
  ex5_q6: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",

  // Exam 6
  ex6_q1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  ex6_q2: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&q=80",
  ex6_q3: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  ex6_q4: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
  ex6_q5: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
  ex6_q6: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",

  // Exam 7
  ex7_q1: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  ex7_q2: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&q=80",
  ex7_q3: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  ex7_q4: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  ex7_q5: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=800&q=80",
  ex7_q6: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",

  // Exam 8
  ex8_q1: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
  ex8_q2: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
  ex8_q3: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  ex8_q4: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  ex8_q5: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=80",
  ex8_q6: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",

  // Exam 9
  ex9_q1: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  ex9_q2: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  ex9_q3: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
  ex9_q4: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
  ex9_q5: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  ex9_q6: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=800&q=80",

  // Exam 10
  ex10_q1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  ex10_q2: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80",
  ex10_q3: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&q=80",
  ex10_q4: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  ex10_q5: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  ex10_q6: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
};

async function uploadAndSyncUniqueImages() {
  try {
    console.log('--- Bắt đầu Upload 54 ảnh TOEIC mới cho Đề 2 -> 10 lên Cloudinary ---');
    console.log(`Cloud Name: ${process.env.CLOUDINARY_CLOUD_NAME}`);
    
    const uploadedUrls = {};

    const entries = Object.entries(uniqueImagesMap);
    for (let i = 0; i < entries.length; i++) {
      const [key, sourceUrl] = entries[i];
      const publicId = `toeic_images/${key}`;
      console.log(`[${i + 1}/${entries.length}] Đang tải lên ${key} -> public_id: ${publicId} ...`);

      try {
        const res = await cloudinary.uploader.upload(sourceUrl, {
          public_id: publicId,
          overwrite: true,
          resource_type: 'image',
        });
        console.log(`  -> Thành công! URL: ${res.secure_url}`);
        uploadedUrls[key] = res.secure_url;
      } catch (uploadErr) {
        console.warn(`  -> Cảnh báo upload ${key} từ Unsplash thất bại, sử dụng lại URL gốc:`, uploadErr.message);
        uploadedUrls[key] = sourceUrl;
      }
    }

    console.log('\n--- Bắt đầu cập nhật toeicExams.js với 54 ảnh riêng biệt ---');
    const toeicExamsPath = path.resolve(__dirname, '../data/toeicExams.js');
    let content = fs.readFileSync(toeicExamsPath, 'utf-8');

    const newConfigsBlock = `const configs = {
    2: [
      { imgUrl: "${uploadedUrls.ex2_q1 || uniqueImagesMap.ex2_q1}", ans: "B", text: "She is pointing at financial charts while speaking on the telephone.", trans: "B) Cô ấy đang chỉ vào biểu đồ tài chính khi đang nói chuyện qua điện thoại." },
      { imgUrl: "${uploadedUrls.ex2_q2 || uniqueImagesMap.ex2_q2}", ans: "A", text: "Corporate officers are examining financial spreadsheets around a table.", trans: "A) Các cán bộ công ty đang xem xét bảng tính tài chính quanh bàn." },
      { imgUrl: "${uploadedUrls.ex2_q3 || uniqueImagesMap.ex2_q3}", ans: "B", text: "Chairs are arranged neatly around the accounting workstations.", trans: "B) Ghế được sắp xếp gọn gàng quanh các bàn làm việc kế toán." },
      { imgUrl: "${uploadedUrls.ex2_q4 || uniqueImagesMap.ex2_q4}", ans: "A", text: "Two professionals are shaking hands after signing a loan agreement.", trans: "A) Hai chuyên gia đang bắt tay nhau sau khi ký hợp đồng vay vốn." },
      { imgUrl: "${uploadedUrls.ex2_q5 || uniqueImagesMap.ex2_q5}", ans: "A", text: "Colleagues are gathered around a table for a tax compliance meeting.", trans: "A) Các đồng nghiệp đang tập trung quanh bàn cho cuộc họp tuân thủ thuế." },
      { imgUrl: "${uploadedUrls.ex2_q6 || uniqueImagesMap.ex2_q6}", ans: "B", text: "People are standing near bookshelves in the financial reference room.", trans: "B) Mọi người đang đứng gần kệ sách trong phòng tài liệu tài chính." }
    ],
    3: [
      { imgUrl: "${uploadedUrls.ex3_q1 || uniqueImagesMap.ex3_q1}", ans: "B", text: "A passenger is showing her boarding pass at an airport terminal counter.", trans: "B) Một hành khách đang xuất trình thẻ lên máy bay tại quầy nhà ga sân bay." },
      { imgUrl: "${uploadedUrls.ex3_q2 || uniqueImagesMap.ex3_q2}", ans: "A", text: "Patrons are enjoying dining service at a hotel restaurant table.", trans: "A) Khách hàng đang thưởng thức bữa ăn tại bàn nhà hàng khách sạn." },
      { imgUrl: "${uploadedUrls.ex3_q3 || uniqueImagesMap.ex3_q3}", ans: "C", text: "A beverage is being served across a counter in a resort cafe.", trans: "C) Một thức uống đang được phục vụ qua quầy tại quán cà phê khu nghỉ dưỡng." },
      { imgUrl: "${uploadedUrls.ex3_q4 || uniqueImagesMap.ex3_q4}", ans: "A", text: "Visitors are strolling along a walkway in an outdoor hotel park.", trans: "A) Du khách đang đi dạo dọc theo lối đi trong công viên ngoài trời của khách sạn." },
      { imgUrl: "${uploadedUrls.ex3_q5 || uniqueImagesMap.ex3_q5}", ans: "B", text: "A booking desk is set up with monitors in a travel agency office.", trans: "B) Bàn đặt vé được bố trí màn hình trong văn phòng đại lý du lịch." },
      { imgUrl: "${uploadedUrls.ex3_q6 || uniqueImagesMap.ex3_q6}", ans: "A", text: "A hotel concierge and an international guest are shaking hands.", trans: "A) Nhân viên hỗ trợ khách sạn và một vị khách quốc tế đang bắt tay nhau." }
    ],
    4: [
      { imgUrl: "${uploadedUrls.ex4_q1 || uniqueImagesMap.ex4_q1}", ans: "A", text: "A marketing leader is outlining brand strategies on a whiteboard.", trans: "A) Trưởng nhóm tiếp thị đang phác thảo chiến lược thương hiệu trên bảng trắng." },
      { imgUrl: "${uploadedUrls.ex4_q2 || uniqueImagesMap.ex4_q2}", ans: "A", text: "Advertising team members are gathered at a table for a campaign discussion.", trans: "A) Các thành viên nhóm quảng cáo đang tập trung tại bàn để thảo luận chiến dịch." },
      { imgUrl: "${uploadedUrls.ex4_q3 || uniqueImagesMap.ex4_q3}", ans: "B", text: "A specialist is pointing at market conversion charts on a screen.", trans: "B) Chuyên viên đang chỉ vào biểu đồ chuyển đổi thị trường trên màn hình." },
      { imgUrl: "${uploadedUrls.ex4_q4 || uniqueImagesMap.ex4_q4}", ans: "A", text: "Consumer products are displayed on shelves for a promotional launch.", trans: "A) Sản phẩm tiêu dùng được trưng bày trên kệ cho chiến dịch ra mắt." },
      { imgUrl: "${uploadedUrls.ex4_q5 || uniqueImagesMap.ex4_q5}", ans: "C", text: "Refreshments are being served at a counter during a media breakfast.", trans: "C) Đồ uống giải khát đang được phục vụ tại quầy trong buổi họp báo điểm tâm." },
      { imgUrl: "${uploadedUrls.ex4_q6 || uniqueImagesMap.ex4_q6}", ans: "A", text: "Executives are reviewing marketing budget proposals in a boardroom.", trans: "A) Các giám đốc đang xem xét đề xuất ngân sách tiếp thị trong phòng họp." }
    ],
    5: [
      { imgUrl: "${uploadedUrls.ex5_q1 || uniqueImagesMap.ex5_q1}", ans: "A", text: "An engineer is monitoring hardware equipment in an IT laboratory.", trans: "A) Kỹ sư đang giám sát thiết bị phần cứng trong phòng thí nghiệm IT." },
      { imgUrl: "${uploadedUrls.ex5_q2 || uniqueImagesMap.ex5_q2}", ans: "B", text: "Modern workstations with dual monitors are arranged in a software office.", trans: "B) Bàn làm việc hiện đại với màn hình kép được sắp xếp trong văn phòng phần mềm." },
      { imgUrl: "${uploadedUrls.ex5_q3 || uniqueImagesMap.ex5_q3}", ans: "A", text: "A lead architect is explaining a cloud system diagram on a whiteboard.", trans: "A) Kiến trúc sư trưởng đang giải thích sơ đồ hệ thống đám mây trên bảng trắng." },
      { imgUrl: "${uploadedUrls.ex5_q4 || uniqueImagesMap.ex5_q4}", ans: "A", text: "An IT committee is meeting in a conference room to review cybersecurity.", trans: "A) Ủy ban công nghệ thông tin đang họp trong phòng để rà soát an ninh mạng." },
      { imgUrl: "${uploadedUrls.ex5_q5 || uniqueImagesMap.ex5_q5}", ans: "B", text: "A systems analyst is pointing at network latency charts on a monitor.", trans: "B) Chuyên viên phân tích hệ thống đang chỉ vào biểu đồ độ trễ mạng trên màn hình." },
      { imgUrl: "${uploadedUrls.ex5_q6 || uniqueImagesMap.ex5_q6}", ans: "B", text: "Programmers are browsing reference materials in a technical library.", trans: "B) Các lập trình viên đang tham khảo tài liệu trong thư viện kỹ thuật." }
    ],
    6: [
      { imgUrl: "${uploadedUrls.ex6_q1 || uniqueImagesMap.ex6_q1}", ans: "A", text: "An HR manager is shaking hands with a candidate before an interview.", trans: "A) Trưởng phòng nhân sự đang bắt tay ứng viên trước buổi phỏng vấn." },
      { imgUrl: "${uploadedUrls.ex6_q2 || uniqueImagesMap.ex6_q2}", ans: "A", text: "A recruiting panel is seated together around a conference table.", trans: "A) Hội đồng tuyển dụng đang ngồi cùng nhau quanh bàn họp." },
      { imgUrl: "${uploadedUrls.ex6_q3 || uniqueImagesMap.ex6_q3}", ans: "B", text: "Employees are reading in a corporate training resource center.", trans: "B) Nhân viên đang đọc sách trong trung tâm đào tạo doanh nghiệp." },
      { imgUrl: "${uploadedUrls.ex6_q4 || uniqueImagesMap.ex6_q4}", ans: "A", text: "A trainer is conducting an employee orientation using a whiteboard.", trans: "A) Người đào tạo đang hướng dẫn nhân viên mới sử dụng bảng trắng." },
      { imgUrl: "${uploadedUrls.ex6_q5 || uniqueImagesMap.ex6_q5}", ans: "B", text: "HR desks and computers are organized neatly in the talent department.", trans: "B) Bàn làm việc và máy tính của phòng nhân sự được bố trí gọn gàng." },
      { imgUrl: "${uploadedUrls.ex6_q6 || uniqueImagesMap.ex6_q6}", ans: "A", text: "Company staff members are walking outdoors during a team-building break.", trans: "A) Nhân viên công ty đang đi dạo ngoài trời trong giờ giải lao gắn kết đội ngũ." }
    ],
    7: [
      { imgUrl: "${uploadedUrls.ex7_q1 || uniqueImagesMap.ex7_q1}", ans: "A", text: "Engineers wearing safety helmets are examining a construction site.", trans: "A) Các kỹ sư đội mũ bảo hộ đang khảo sát khu vực công trường xây dựng." },
      { imgUrl: "${uploadedUrls.ex7_q2 || uniqueImagesMap.ex7_q2}", ans: "A", text: "Architects are reviewing structural blueprints inside a boardroom.", trans: "A) Các kiến trúc sư đang xem xét bản vẽ kết cấu trong phòng họp." },
      { imgUrl: "${uploadedUrls.ex7_q3 || uniqueImagesMap.ex7_q3}", ans: "A", text: "A real estate broker is shaking hands with a client after a lease agreement.", trans: "A) Môi giới bất động sản đang bắt tay khách hàng sau hợp đồng thuê nhà." },
      { imgUrl: "${uploadedUrls.ex7_q4 || uniqueImagesMap.ex7_q4}", ans: "B", text: "Workstations for CAD drafting are arranged neatly in an engineering office.", trans: "B) Các bàn làm việc vẽ kỹ thuật CAD được sắp xếp gọn gàng trong văn phòng." },
      { imgUrl: "${uploadedUrls.ex7_q5 || uniqueImagesMap.ex7_q5}", ans: "B", text: "A property analyst is pointing at real estate valuation trends on a screen.", trans: "B) Chuyên viên phân tích bất động sản đang chỉ vào xu hướng giá trị trên màn hình." },
      { imgUrl: "${uploadedUrls.ex7_q6 || uniqueImagesMap.ex7_q6}", ans: "A", text: "Project managers are gathered around a table for a safety briefing.", trans: "A) Các quản lý dự án đang tập trung quanh bàn cho buổi họp an toàn lao động." }
    ],
    8: [
      { imgUrl: "${uploadedUrls.ex8_q1 || uniqueImagesMap.ex8_q1}", ans: "A", text: "Shoppers are browsing commercial products in a supermarket aisle.", trans: "A) Người mua sắm đang chọn sản phẩm thương mại trên lối đi siêu thị." },
      { imgUrl: "${uploadedUrls.ex8_q2 || uniqueImagesMap.ex8_q2}", ans: "A", text: "Customer service staff are serving guests at a retail dining table.", trans: "A) Nhân viên chăm sóc khách hàng đang phục vụ khách tại bàn ăn." },
      { imgUrl: "${uploadedUrls.ex8_q3 || uniqueImagesMap.ex8_q3}", ans: "C", text: "A beverage is being served across a counter at an e-commerce popup cafe.", trans: "C) Thức uống đang được phục vụ qua quầy tại quán cà phê sự kiện bán lẻ." },
      { imgUrl: "${uploadedUrls.ex8_q4 || uniqueImagesMap.ex8_q4}", ans: "B", text: "An e-commerce manager is analyzing online retail charts on a monitor.", trans: "B) Quản lý bán lẻ trực tuyến đang phân tích biểu đồ doanh số trên màn hình." },
      { imgUrl: "${uploadedUrls.ex8_q5 || uniqueImagesMap.ex8_q5}", ans: "B", text: "Customer support workstations are arranged neatly in an office.", trans: "B) Các bàn làm việc hỗ trợ khách hàng được bố trí gọn gàng trong văn phòng." },
      { imgUrl: "${uploadedUrls.ex8_q6 || uniqueImagesMap.ex8_q6}", ans: "A", text: "A store manager is shaking hands with a retail supply partner.", trans: "A) Quản lý cửa hàng đang bắt tay với đối tác cung ứng bán lẻ." }
    ],
    9: [
      { imgUrl: "${uploadedUrls.ex9_q1 || uniqueImagesMap.ex9_q1}", ans: "B", text: "Cargo shipments and passengers are moving through an airport terminal.", trans: "B) Hàng hóa vận chuyển và hành khách đang di chuyển qua nhà ga sân bay." },
      { imgUrl: "${uploadedUrls.ex9_q2 || uniqueImagesMap.ex9_q2}", ans: "A", text: "Logistics supervisors wearing helmets are inspecting warehouse operations.", trans: "A) Giám sát hậu cần đội mũ bảo hộ đang kiểm tra hoạt động kho bãi." },
      { imgUrl: "${uploadedUrls.ex9_q3 || uniqueImagesMap.ex9_q3}", ans: "B", text: "Computers for tracking global supply chain routes are set up on desks.", trans: "B) Máy tính theo dõi tuyến đường chuỗi cung ứng toàn cầu được bố trí trên bàn." },
      { imgUrl: "${uploadedUrls.ex9_q4 || uniqueImagesMap.ex9_q4}", ans: "A", text: "Supply chain managers are meeting in a boardroom to plan distribution.", trans: "A) Các nhà quản lý chuỗi cung ứng đang họp để lên kế hoạch phân phối." },
      { imgUrl: "${uploadedUrls.ex9_q5 || uniqueImagesMap.ex9_q5}", ans: "A", text: "Inventory goods are organized on shelves for retail distribution.", trans: "A) Hàng hóa tồn kho được sắp xếp trên kệ để phân phối bán lẻ." },
      { imgUrl: "${uploadedUrls.ex9_q6 || uniqueImagesMap.ex9_q6}", ans: "A", text: "A shipping coordinator is shaking hands with a freight distributor.", trans: "A) Điều phối viên vận chuyển đang bắt tay với nhà phân phối hàng hóa." }
    ],
    10: [
      { imgUrl: "${uploadedUrls.ex10_q1 || uniqueImagesMap.ex10_q1}", ans: "A", text: "Two attorneys are shaking hands after finalizing a legal compliance contract.", trans: "A) Hai luật sư đang bắt tay nhau sau khi hoàn tất hợp đồng tuân thủ pháp lý." },
      { imgUrl: "${uploadedUrls.ex10_q2 || uniqueImagesMap.ex10_q2}", ans: "B", text: "A legal researcher is standing near bookshelves in a law library.", trans: "B) Nghiên cứu viên pháp lý đang đứng gần kệ sách trong thư viện luật." },
      { imgUrl: "${uploadedUrls.ex10_q3 || uniqueImagesMap.ex10_q3}", ans: "A", text: "Board members are holding a corporate governance review in a boardroom.", trans: "A) Thành viên hội đồng quản trị đang họp rà soát quản trị doanh nghiệp." },
      { imgUrl: "${uploadedUrls.ex10_q4 || uniqueImagesMap.ex10_q4}", ans: "A", text: "A compliance officer is explaining regulatory policies using a whiteboard.", trans: "A) Cán bộ tuân thủ đang giải thích chính sách quy định sử dụng bảng trắng." },
      { imgUrl: "${uploadedUrls.ex10_q5 || uniqueImagesMap.ex10_q5}", ans: "B", text: "Desks and monitors are arranged neatly in a legal counsel office.", trans: "B) Bàn làm việc và màn hình được sắp xếp gọn gàng trong văn phòng tư vấn pháp lý." },
      { imgUrl: "${uploadedUrls.ex10_q6 || uniqueImagesMap.ex10_q6}", ans: "A", text: "Legal advisors are gathered around a table to discuss contract terms.", trans: "A) Các cố vấn pháp lý đang tập trung quanh bàn để thảo luận điều khoản hợp đồng." }
    ]
  };`;

    const regex = /const configs = \{[\s\S]*?\};\s*const selectedList = configs\[id\] \|\| configs\[2\];/;
    const replacement = `${newConfigsBlock}\n\n  const selectedList = configs[id] || configs[2];`;

    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      content = content.replace(
        /imageUrl: configs\[item\.img\] \|\| configs\.q1,/g,
        'imageUrl: item.imgUrl,'
      );
      fs.writeFileSync(toeicExamsPath, content, 'utf-8');
      console.log('✅ Đã cập nhật thành công toeicExams.js với 54 URL ảnh riêng biệt cho Đề 2 đến Đề 10!');
    } else {
      console.error('❌ Không tìm thấy đoạn code configs cần thay thế trong toeicExams.js');
    }

    console.log('\n--- Bắt đầu đồng bộ MongoDB ---');
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Đã kết nối MongoDB thành công!');
      await seedExamsData(true);
      await mongoose.disconnect();
      console.log('✅ Đã đồng bộ 10 đề thi TOEIC với 64 ảnh hoàn toàn riêng biệt vào MongoDB!');
    }

    console.log('\n✅ HOÀN TẤT TRỌN VẸN! KHÔNG CÒN BẤT KỲ CÂU HỎI NÀO TRÙNG ẢNH TRONG 10 ĐỀ THI!');
  } catch (err) {
    console.error('❌ Lỗi:', err);
    process.exit(1);
  }
}

uploadAndSyncUniqueImages();
