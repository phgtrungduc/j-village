import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Room, ContentSection } from '../../../model/room.model';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss'
})
export class HotelDetailComponent implements OnInit {
  hotelId: string | null = null;
  currentHotel: Room | null = null;
  contentSections: ContentSection[] = [];

  // Dữ liệu hotels từ homepage
  hotels: Room[] = [
    {
      Id: 'ART001',
      Name: '15++ Địa điểm du lịch Hà Nội hấp dẫn không thể bỏ qua',
      Description: 'Hà Nội - Thủ đô ngàn năm văn hiến là điểm đến thu hút nhiều du khách trong và ngoài nước bởi vẻ đẹp cổ kính pha lẫn hiện đại. Nơi đây sở hữu vô số địa điểm du lịch hấp dẫn, từ những danh lam thắng cảnh nổi tiếng đến những con phố cổ kính, những khu chợ bình dị và những món ăn đường phố thơm ngon. Hãy cùng Vietnam Airlines khám phá 15 địa điểm du lịch Hà Nội đáng dừng chân nhất trong bài viết dưới đây nhé!',
      ImageUrl: 'assets/images/news/1.jpg',
      ShortAddess: 'Hà Nội',
      ContentSections: [
        {
          title: 'Vị trí và cách di chuyển tới Hà Nội',
          subtitle: 'Vị trí của Hà Nội',
          paragraphs: [
            'Hà Nội nằm ở vị trí trung tâm vùng đồng bằng sông Hồng, phía Bắc Việt Nam, tiếp giáp với nhiều tỉnh thành như Bắc Ninh, Hưng Yên, Vĩnh Phúc, Hòa Bình...'
          ]
        },
        {
          subtitle: 'Cách di chuyển tới Hà Nội',
          paragraphs: [
            'Bằng máy bay: Đáp chuyến bay đến sân bay Nội Bài (cách trung tâm Hà Nội ~30km), sau đó đi taxi/xe công nghệ/bus 86. Thời gian di chuyển: 1h30 từ TP.HCM, 1h từ Đà Nẵng. Chi phí: 800.000 – 2.000.000 VNĐ/lượt (tùy hãng và thời điểm); di chuyển từ sân bay về trung tâm ~100.000 – 300.000 VNĐ.',
            'Bằng tàu hỏa: Lên tàu tại các ga lớn (TP.HCM, Đà Nẵng...), đến ga Hà Nội (120 Lê Duẩn). Thời gian di chuyển: 15 - 30 tiếng tùy tuyến (TP.HCM – Hà Nội khoảng 30 tiếng). Chi phí: 500.000 – 1.400.000 VNĐ/lượt (ghế mềm đến giường nằm khoang 4).',
            'Bằng xe khách hoặc ô tô cá nhân: Bắt xe tại bến xe ở các tỉnh về các bến lớn tại Hà Nội như Mỹ Đình, Giáp Bát, Nước Ngầm. Thời gian di chuyển từ TP.HCM: ~36 - 40 tiếng, từ các tỉnh miền Bắc: 2 - 8 tiếng. Chi phí từ miền Bắc: 100.000 – 350.000 VNĐ/lượt, từ miền Trung/TP.HCM: 500.000 – 1.000.000 VNĐ/lượt.',
            'Bằng xe máy: Qua các tuyến cao tốc như Pháp Vân – Cầu Giẽ, Hà Nội – Hải Phòng, QL1A... Thời gian di chuyển từ Ninh Bình: ~2 tiếng, từ Hải Phòng: ~2 tiếng, từ Vinh: ~6 tiếng. Chi phí ô tô: 200.000 – 400.000 VNĐ tiền xăng + phí cao tốc, xe máy: ~100.000 – 200.000 VNĐ tiền xăng (tùy quãng đường).'
          ]
        },
        {
          title: '15++ địa điểm du lịch Hà Nội không thể bỏ lỡ',
          paragraphs: []
        },
        {
          subtitle: 'Lăng Chủ tịch Hồ Chí Minh',
          paragraphs: [
            'Địa chỉ: 1 Hùng Vương, Điện Biên, Ba Đình, Hà Nội.',
            'Nằm trang trọng giữa quảng trường Ba Đình lịch sử, Lăng Chủ tịch Hồ Chí Minh là điểm đến không thể bỏ qua của bất kỳ ai khi đến với Hà Nội. Lăng Bác uy nghiêm mà gần gũi, là nơi lưu giữ thi hài vị Cha già dân tộc và biểu tượng thiêng liêng về lòng yêu nước, tinh thần dân tộc Việt Nam. Đến đây, bạn sẽ được vào viếng, dâng hoa tưởng nhớ và tìm hiểu về cuộc đời, sự nghiệp vĩ đại của Người.'
          ],
          imageUrl: 'assets/images/news/1.jpg'
        },
        {
          subtitle: 'Hồ Hoàn Kiếm',
          paragraphs: [
            'Địa chỉ: Lê Thái Tổ, Hàng Trống, Hoàn Kiếm, Hà Nội.',
            'Hồ Hoàn Kiếm như một viên ngọc quý giữa lòng thành phố Hà Nội. Vẻ đẹp thơ mộng, bình yên của mặt hồ trong xanh và những hàng cây rợp bóng là những gì người ta thường nhắc về nơi này. Đến với Hồ Hoàn Kiếm, bạn có thể ngắm nhìn Tháp Rùa uy nghi, dạo bước trên cầu Thê Húc sơn sơn đỏ thiếp hay viếng đền Ngọc Sơn linh thiêng cầu an. Ngoài ra, vào mỗi tối thứ Sáu, thứ Bảy và Chủ Nhật hàng tuần, đây còn là nơi diễn ra nhiều hoạt động vui chơi, giải trí của người dân Thủ đô.'
          ],
          imageUrl: 'assets/images/news/details/ho-hoan-kiem.jpg'
        },
        {
          subtitle: 'Hoàng thành Thăng Long',
          paragraphs: [
            'Địa chỉ: 19c Hoàng Diệu, Điện Biên, Ba Đình, Hà Nội.',
            'Ghé thăm khu di tích Hoàng thành Thăng Long, bạn sẽ có cơ hội khám phá những câu chuyện lịch sử lâu đời của dân tộc qua từng công trình cổ kính còn tồn tại nơi đây như: cột cờ Hà Nội, Cửa Bắc, điện Kính Thiên, Đoan Môn, v.v. Ngoài ra, bạn cũng có thể trải nghiệm tour "Giải mã Hoàng thành Thăng Long" là một tour đêm cho phép khách tham quan chiêm ngưỡng không gian cung đình kỳ ảo, tìm hiểu về những triều đại xa xưa và thưởng thức những điệu múa hoàng cung.'
          ],
          imageUrl: 'assets/images/news/details/hoang-thanh-thang-long.jpg'
        },
        {
          subtitle: 'Chùa Một Cột',
          paragraphs: [
            'Địa chỉ: Ba Đình, Hà Nội.',
            'Chùa Một Cột (hay còn gọi là Diên Hựu Tự) là một trong những biểu tượng văn hóa và kiến trúc độc đáo nhất của thủ đô Hà Nội. Ngôi chùa được xây dựng trên một cột đá duy nhất, tượng trưng cho đài sen - biểu tượng của sự thanh tao, thoát tục. Mái chùa cong vút với nhiều đường nét tinh tế, lợp ngói vảy cá cổ kính. Bên trong chùa là một không gian nhỏ nhắn, trang nghiêm với tượng Quan Thế Âm mạ vàng.',
            'Đặc biệt, chùa Một Cột nằm trong khuôn viên quần thể quảng trường Ba Đình và lăng Bác nên bạn có thể kết hợp tham quan 3 địa điểm này cùng 1 lúc để tiết kiệm thời gian di chuyển.'
          ],
          imageUrl: 'assets/images/news/details/chua-mot-cot-ha-noi.jpg'
        },
        {
          subtitle: 'Nhà thờ Lớn Hà Nội',
          paragraphs: [
            'Địa chỉ: 40 phố Nhà Chung, Hàng Trống, Hoàn Kiếm, Hà Nội.',
            'Nhà thờ Lớn (hay còn gọi là Nhà thờ Chính tòa Hà Nội) là một công trình kiến trúc Gothic tiêu biểu, mang đậm dấu ấn văn hóa Pháp giữa lòng thủ đô. Kiến trúc của nhà thờ Lớn gây ấn tượng với hai tháp chuông cao sừng sững, những vòm cửa sổ nhọn cong cong và thánh đường rộng rãi, được trang trí bằng những họa tiết hoa văn tinh xảo. Ngoài ra, bạn cũng có thể kết hợp tham quan nhà thờ Lớn với các điểm du lịch gần kề như phố cổ Hà Nội, hồ Hoàn Kiếm, Văn Miếu Quốc Tử Giám, v.v.'
          ]
        },
        {
          subtitle: 'Văn Miếu Quốc Tử Giám',
          paragraphs: [
            'Địa chỉ: 58 phố Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội.',
            'Tọa lạc tại trung tâm thủ đô Hà Nội, Văn Miếu Quốc Tử Giám là quần thể di tích lịch sử - văn hóa đặc biệt quan trọng. Nơi đây được bao bọc bởi tường gạch vồ, chia thành 5 lớp không gian với các kiến trúc khác nhau, thể hiện sự uy nghiêm và trang trọng. Từ ngoài vào trong có các cổng lần lượt là: cổng Văn Miếu, cổng Đại Trung, cổng Đại Thành và cổng Thái Học. Văn Miếu Quốc Tử Giám không chỉ là điểm tham quan du lịch mà còn là nơi tổ chức nhiều hoạt động giao lưu văn hóa, khoa học như: hội thơ, xin chữ cho các sĩ tử, cầu may trong thi cử, v.v.'
          ]
        },
        {
          subtitle: 'Phố cổ Hà Nội',
          paragraphs: [
            'Địa chỉ: Hoàn Kiếm, Hà Nội.',
            'Đến với phố cổ, bạn như bước vào một không gian khác hoàn toàn chốn Thủ đô tấp nập. Dạo bước trên từng hàng phố, bạn có thể tìm thấy những món đồ thủ công truyền thống tinh xảo, những gian hàng bán đồ lưu niệm độc đáo hay thưởng thức những món ăn ngon nức tiếng Hà Nội như phở, bún chả, bánh cuốn, v.v. Mùi hương phở nồng nàn, tiếng rao quà vang vọng, tiếng cười nói rộn ràng của người dân địa phương tạo nên một bầu không khí tấp nập, sôi động.'
          ]
        },
        {
          subtitle: 'Ga Hà Nội',
          paragraphs: [
            'Địa chỉ: 120 đường Lê Duẩn, Văn Miếu, Đống Đa, Hà Nội.',
            'Ga Hà Nội còn được biết đến với tên gọi Ga Hàng Cỏ, là một trong những nhà ga cổ kính và mang tính biểu tượng của Việt Nam. Nơi đây được xây dựng từ năm 1902 dưới thời Pháp và đã chứng kiến bao thăng trầm lịch sử của dân tộc. Đến với Ga Hà Nội, bạn như được quay ngược thời gian, trở về với những ký ức về một Hà Nội xưa cổ kính và lãng mạn. Tham quan kiến trúc nhà ga, chụp ảnh lưu niệm hoặc thưởng thức cà phê tại quán xá nhỏ xinh, v.v. là những hoạt động thú vị khi ghé đến đây.'
          ]
        },
        {
          subtitle: 'Nhà tù Hoả Lò',
          paragraphs: [
            'Địa chỉ: 1 phố Hỏa Lò, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội.',
            'Nhà tù Hỏa Lò là một di tích lịch sử quan trọng, minh chứng cho tội ác của thực dân Pháp và sự hy sinh to lớn của những người chiến sĩ cách mạng. Bước qua cánh cổng nhà tù, bạn như cảm nhận được bầu không khí u ám từ những dãy phòng giam san sát, song sắt gỉ sét và những hình ảnh tái hiện cảnh tra tấn tàn bạo của thực dân Pháp. Ngoài ra, bạn sẽ được tìm hiểu thêm về tinh thần kiên cường, bất khuất của những chiến sĩ qua các hiện vật lịch sử quý giá, từng bức thư hay những trang nhật ký nhuốm màu tháng năm.'
          ]
        },
        {
          subtitle: 'Hồ Tây',
          paragraphs: [
            'Địa chỉ: Tây Hồ, Hà Nội.',
            'Hồ Tây được mệnh danh là "lá phổi xanh" của Thủ đô với những hàng cây xanh rợp bóng. Mặt hồ rộng lớn phảng phất những cơn gió mát rượi sẽ giúp tâm hồn bạn trở nên thư thái, nhẹ nhàng hơn. Bạn cũng có thể khám phá kết hợp tham quan địa điểm này với các các di tích như chùa Trấn Quốc, đền Quán Thánh hay phủ Tây Hồ. Đặc biệt, với những ai lần đầu ghé thăm Hà Nội đừng bỏ qua cơ hội ngắm hoàng hôn thơ mộng buông mình trên hồ Tây nhé!'
          ]
        },
        {
          subtitle: 'Làng gốm Bát Tràng',
          paragraphs: [
            'Địa chỉ: xã Bát Tràng, huyện Gia Lâm, thành phố Hà Nội.',
            'Nằm cách trung tâm Hà Nội chỉ khoảng 13km, làng gốm Bát Tràng từ lâu đã trở thành điểm đến thu hút du khách bởi vẻ đẹp mộc mạc, bình dị và những giá trị văn hóa truyền thống lâu đời. Đến với Bát Tràng, bạn như lạc bước vào một thế giới khác, nơi những bàn xoay gốm không ngừng quay, những lò nung lửa rực cháy và đôi bàn tay khéo léo của các nghệ nhân đang miệt mài tạo tác nên những sản phẩm gốm sứ tinh xảo.',
            'Bạn có thể check-in với bảo tàng gốm Bát Tràng - công trình mô phỏng hình dáng đất nặn trên bàn xoay độc đáo, mua đồ lưu niệm hay đặc biệt hơn là trải nghiệm làm gốm dưới sự hướng dẫn của các nghệ nhân.'
          ]
        },
        {
          subtitle: 'Bảo tàng dân tộc học Việt Nam',
          paragraphs: [
            'Địa chỉ: Nguyễn Văn Huyên, Quan Hoa, Cầu Giấy, Hà Nội.',
            'Bảo tàng Dân tộc học Việt Nam tọa lạc trên đường Nguyễn Văn Huyên thuộc quận Cầu Giấy, Hà Nội, lưu giữ và trưng bày hiện vật về văn hóa của 54 dân tộc anh em trên đất nước. Nơi đây được xem như một "ngôi nhà chung" của các dân tộc Việt Nam, là điểm đến lý tưởng để bạn khám phá và tìm hiểu về sự đa dạng, phong phú và độc đáo của văn hóa Việt. Bảo tàng được chia thành hai khu vực chính: khu vực ngoài trời - trưng bày các mô hình nhà sàn, nhà dài, nhà gươm, v.v. và khu vực trong nhà - trưng bày hơn 15.000 hiện vật bao gồm trang phục, đồ dùng sinh hoạt, nhạc cụ, lễ hội, v.v. theo chủ đề.'
          ]
        },
        {
          subtitle: 'Phố bia Tạ Hiện',
          paragraphs: [
            'Địa chỉ: Lương Ngọc Quyến, Hàng Buồm, Hoàn Kiếm, Hà Nội.',
            'Phố Tạ Hiện là một ví dụ điển hình cho sự giao thoa giữa nét hoài cổ của đất Tràng An và nét hiện đại của Hà Nội ngày nay. Nếu có dịp khám phá khu phố này từ ngày đến đêm, bạn sẽ cảm nhận được rõ rệt sự đối lập thú vị này. Ban ngày, Tạ Hiện mang vẻ đẹp hoài cổ, hòa trong không khí thanh bình, nhịp sống chậm rãi của 36 phố phường. Khi màn đêm buông xuống, Tạ Hiện như "lột xác" trở nên sôi động và náo nhiệt bởi tiếng nhạc vang lên từ các quán bar, pub, nhà hàng.'
          ]
        },
        {
          subtitle: 'Cầu Long Biên',
          paragraphs: [
            'Địa chỉ: Cầu Long Biên, Phúc xá, Ba Đình, Hà Nội.',
            'Nằm vắt ngang dòng sông Hồng thơ mộng, cầu Long Biên từ lâu đã trở thành biểu tượng lịch sử và kiến trúc độc đáo của thủ đô Hà Nội. Với tuổi đời hơn 120 năm, cây cầu mang trên mình dấu ấn thời gian và ghi dấu biết bao thăng trầm của lịch sử dân tộc. Bạn có thể dạo bộ trên cầu để cảm nhận không khí trong lành, mát mẻ hay chụp ảnh check-in, khám phá những hàng ăn, quán cà phê đẹp cạnh cây cầu cổ kính này.'
          ]
        },
        {
          subtitle: 'Công viên Yên Sở',
          paragraphs: [
            'Địa chỉ: Hoàng Mai, Hà Nội.',
            'Công viên Yên Sở là một trong những công viên lớn nhất Hà Nội, mang đến cho người dân Thủ đô không gian thư giãn, vui chơi và giải trí lý tưởng. Tới đây, bạn có thể thuê lều trại, bếp nướng, v.v. và cùng bạn bè, gia đình tận hưởng những giây phút vui vẻ bên nhau trong khung cảnh thiên nhiên tuyệt đẹp. Ngoài ra, công viên còn có khu vui chơi giải trí dành cho trẻ em với nhiều trò chơi như cầu trượt, đu quay, bập bênh, v.v. Công viên Yên Sở là điểm đến lý tưởng cho những ai muốn tìm kiếm không gian xanh mát, yên bình giữa lòng Hà Nội.'
          ]
        },
        {
          paragraphs: [
            'Với 15++ địa điểm được giới thiệu trong bài viết này, hy vọng bạn đã có thêm nhiều lựa chọn cho hành trình khám phá Hà Nội của mình. Dù là du khách lần đầu hay đã từng đến Hà Nội nhiều lần, chắc chắn bạn cũng sẽ tìm thấy những điểm đến mới mẻ, thú vị để trải nghiệm. Hãy lên kế hoạch cho chuyến đi của mình ngay hôm nay và đặt sớm vé máy bay/tàu xe cũng như phòng khách sạn nhé! Vietnam Airlines hân hạnh đồng hành cùng bạn trong hành trình này.'
          ]
        }
      ]
    },
    {
      Id: 'ART002',
      Name: 'Phố cà phê Triệu Việt Vương: Thiên Đường Hương Vị và Văn Hóa Cà Phê Hà Nội',
      Description: 'Phố cà phê Triệu Việt Vương là một trong những địa điểm du lịch Hà Nội nổi tiếng, thu hút đông đảo du khách trong và ngoài nước đến trải nghiệm nét đẹp văn hóa cà phê độc đáo. Được mệnh danh là "thiên đường cà phê giữa lòng thủ đô", nơi đây không chỉ là điểm hẹn lý tưởng của giới trẻ mà còn là không gian lý tưởng để bạn cảm nhận nhịp sống thật sự của Hà Nội tươi đẹp.',
      ImageUrl: 'assets/images/news/2.jpg',
      ShortAddess: 'Hà Nội',
      ContentSections: [
        {
          title: 'Sắc Màu Hà Nội Qua Góc Nhìn Phố cà phê Triệu Việt Vương',
          subtitle: 'Lịch Sử Hình Thành và Phát Triển Đặc Sắc Của Phố cà phê Triệu Việt Vương',
          paragraphs: [
            'Phố cà phê Triệu Việt Vương đã xuất hiện từ hàng chục năm trước và trở thành điểm sáng trên bản đồ du lịch Hà Nội. Ban đầu chỉ là con phố nhỏ với vài quán cà phê gia đình, ngày nay khu vực này đã phát triển thành "con phố cà phê" sầm uất bậc nhất thủ đô. Sự phát triển mạnh mẽ này gắn liền với quá trình đổi mới của văn hóa uống cà phê người Hà Nội, khi những ly cà phê truyền thống được kết hợp cùng các mô hình hiện đại, sáng tạo hơn nhằm đáp ứng thị hiếu ngày càng đa dạng của thực khách.',
            'Dạo bước trên con phố Triệu Việt Vương, bạn có thể cảm nhận rõ nét sự giao thoa giữa xưa cũ và hiện đại, giữa tiếng máy pha cà phê rì rào, hương thơm ngào ngạt lan tỏa, xen lẫn tiếng cười nói nhộn nhịp, tạo nên một khung cảnh rất riêng chỉ có tại Hà Nội.'
          ]

        },
        {
          subtitle: 'Những Lý Do Khiến Phố cà phê Triệu Việt Vương Trở Thành Điểm Đến Không Thể Bỏ Lỡ',
          paragraphs: [
            'Không phải ngẫu nhiên mà phố cà phê Triệu Việt Vương lại có sức hút mạnh mẽ đến vậy. Trước tiên, nơi đây là thiên đường dành cho những ai thích khám phá cà phê với nhiều phong cách khác nhau, từ cổ điển đến hiện đại, từ không gian nhỏ xinh ấm cúng tới quán cà phê view đẹp, sang trọng. Thứ hai, phố cà phê này luôn sôi động ngày đêm, nhờ vị trí tại trung tâm thành phố, gần nhiều điểm vui chơi, tham quan nổi tiếng.',
            'Không chỉ là nơi hội tụ của các "tín đồ cà phê" mà Triệu Việt Vương còn là địa điểm tụ họp, gặp gỡ của giới trẻ và những ai muốn cảm nhận rõ nhịp sống Hà thành. Không gian sáng tạo, service chuyên nghiệp, cung cách phục vụ thân thiện nơi đây giúp mỗi vị khách cảm nhận rõ nét sự chào đón ấm áp của con người Hà Nội.'
          ]
        },
        {
          title: 'Trải Nghiệm Độc Đáo Tại Phố cà phê Triệu Việt Vương',
          subtitle: 'Nghệ Thuật Thưởng Thức Cà Phê Đậm Đà Bản Sắc Hà Nội',
          paragraphs: [
            'Dạo quanh phố cà phê Triệu Việt Vương, bạn sẽ được tận hưởng không khí trong lành, lắng nghe bản nhạc du dương và nhâm nhi tách cà phê thơm lừng. Nghệ thuật pha chế của các barista nơi đây vô cùng tinh tế, mỗi ly cà phê đều mang một "hồn riêng", từ cà phê đen truyền thống, cà phê sữa đá, capuchino cho đến các loại cà phê biến tấu đầy sáng tạo.',
            'Mỗi quán cà phê lại lựa chọn cho mình một phong cách khác biệt, chú trọng không gian và trải nghiệm của thực khách. Một số quán chú trọng trang trí vintage, tạo cảm giác hoài cổ, số khác lại hướng tới style hiện đại, sang trọng phù hợp với các bạn trẻ, dân văn phòng.'
          ]
        },
        {
          subtitle: 'Không Gian Đậm Đà Văn Hóa Hà Nội Giữa Lòng Thành Phố',
          paragraphs: [
            'Phố cà phê Triệu Việt Vương không chỉ nổi tiếng với các món uống "cực chất" mà còn là nơi giao lưu, ươm mầm cho văn hóa đọc, nghệ thuật và những ý tưởng sáng tạo mới. Nhiều quán cà phê ở đây thường xuyên tổ chức sự kiện thơ ca, hòa nhạc, triển lãm tranh hoặc tọa đàm nghệ thuật. Đây cũng là nơi bạn có thể gặp gỡ và trò chuyện cùng bạn bè, đối tác trong không gian yên tĩnh, tách biệt hoàn toàn với sự ồn ào phố thị ngoài kia.'
          ]
        },
        {
          subtitle: 'Ẩm Thực Tinh Hoa và Đồ Uống Đa Dạng',
          paragraphs: [
            'Điều đặc biệt tại phố cà phê Triệu Việt Vương là thực đơn vô cùng phong phú. Không chỉ có cà phê đậm đà truyền thống mà còn có nhiều lựa chọn đồ uống khác như trà sữa, sinh tố, nước ép trái cây, bánh ngọt hấp dẫn. Mỗi món đều được chăm chút từ hình thức tới hương vị, đảm bảo mang lại trải nghiệm trọn vẹn cho thực khách. Nếu bạn thích thưởng thức cà phê theo kiểu phố cổ, hãy thử một ly cà phê trứng vừa thơm vừa béo hoặc món bạc xỉu đặc trưng Hà Nội.',
            'Ngoài ra, nhiều quán cà phê nơi đây còn phục vụ các món ăn nhẹ, thích hợp cho những buổi họp mặt, làm việc, trao đổi ý tưởng hay đơn giản là thảnh thơi đọc sách.'
          ]
        },
        {
          title: 'Khám Phá Những Quán Cà Phê Nổi Bật Nhất Trên Phố Triệu Việt Vương',
          subtitle: 'Không Gian Nhỏ Xinh Đậm Chất Hà Nội Xưa',
          paragraphs: [
            'Một trong những điểm cuốn hút của phố cà phê Triệu Việt Vương chính là hệ thống các quán cà phê nhỏ xinh, gắn liền với tuổi thơ và ký ức của rất nhiều thế hệ người Hà Nội. Những quán cà phê này thường mang phong cách vintage, trang trí bằng bàn ghế gỗ, tường gạch thô, tranh ảnh đen trắng, ánh sáng vàng ấm áp gợi nhớ lại dấu vết thời gian.',
            'Các quán cà phê kiểu này rất thích hợp cho những ai yêu thích sự lắng đọng, muốn tìm lại chút an yên giữa bộn bề cuộc sống, để cảm nhận rõ nét nhất vẻ đẹp bình dị, cổ điển của thủ đô.'
          ]
        },
        {
          subtitle: 'Quán Cà Phê Hiện Đại – Không Gian Sáng Tạo Cho Giới Trẻ',
          paragraphs: [
            'Dịch chuyển từ phong cách cổ điển sang hiện đại, phố cà phê Triệu Việt Vương không thiếu những không gian thiết kế độc đáo, trẻ trung và tràn đầy năng lượng sáng tạo. Những quán này thường được trang trí theo tone màu bắt mắt, bố trí không gian mở với nhiều cây xanh, ánh sáng tự nhiên xuyên qua từng khung cửa rộng lớn. Đây chính là "tọa độ sống ảo" lý tưởng cho các bạn trẻ, nơi mọi khoảnh khắc đều trở nên lung linh dưới ống kính máy ảnh.',
            'Ngoài ra, các quán cà phê hiện đại cũng chú trọng vào trải nghiệm khách hàng: wifi mạnh, ổ điện đầy đủ, menu đa dạng từ cà phê, trà sữa, đến bánh ngọt và đồ ăn nhanh, phù hợp cho làm việc, học tập nhóm hay trò chuyện cùng bạn bè.'
          ]
        },
        {
          subtitle: 'Không Gian Sân Thượng – Cảm Nhận Hà Nội Từ Góc Nhìn Trên Cao',
          paragraphs: [
            'Bên cạnh các quán nhỏ dưới phố, phố cà phê Triệu Việt Vương gây ấn tượng với nhiều quán cà phê có không gian rooftop, giúp bạn thu trọn cảnh sắc Hà Nội vào tầm mắt. Những quán này thường nằm trên tầng cao của các tòa nhà cũ, mang lại cảm giác mới lạ, đầy phóng khoáng. Nhấp một ngụm cà phê giữa làn gió mát và ngắm nhìn những dãy phố cổ dưới ánh chiều tà, bạn sẽ cảm nhận được trọn vẹn hồn thơ Hà Nội.'
          ]
        },
        {
          title: 'Hoạt Động Văn Hóa Đặc Sắc Trên Phố cà phê Triệu Việt Vương',
          subtitle: 'Những Sự Kiện Văn Hóa – Nghệ Thuật Được Tổ Chức Thường Xuyên',
          paragraphs: [
            'Phố cà phê Triệu Việt Vương còn là nơi hội tụ của nhiều hoạt động văn hóa, nghệ thuật mang đậm bản sắc Hà Nội. Nhiều quán lựa chọn tổ chức các sự kiện âm nhạc acoustic, giao lưu văn hóa nghệ sĩ, trưng bày tranh ảnh độc đáo… giúp du khách vừa thưởng thức cà phê, vừa hòa mình vào không khí sáng tạo sôi động.',
            'Đặc biệt, nhiều bạn trẻ và cả người lớn yêu thích tham gia các câu lạc bộ đọc sách, tọa đàm văn học hay workshop về cà phê tại đây. Không gian truyền cảm hứng này là địa chỉ quen thuộc của những ai đam mê nghệ thuật hoặc đang tìm kiếm nguồn cảm hứng cuộc sống.'
          ]
        },
        {
          subtitle: 'Sự Giao Thoa Giữa Du Khách và Người Bản Địa',
          paragraphs: [
            'Một ưu điểm nổi bật của phố cà phê Triệu Việt Vương chính là sự giao thoa văn hóa tuyệt vời giữa du khách khắp nơi và người dân địa phương. Tại đây, bạn có cơ hội trò chuyện với những người bạn mới, học hỏi và kết nối trong không khí thân thiện, cởi mở. Chính yếu tố này góp phần tạo nên bản sắc đậm đà và sức hút lâu dài cho con phố này.'
          ]
        },
        {
          title: 'Kinh Nghiệm Du Lịch Phố cà phê Triệu Việt Vương – Chia Sẻ Thực Tế Từ Era Hotel',
          subtitle: 'Thời Điểm Lý Tưởng Nhất Để Trải Nghiệm Phố Cà Phê',
          paragraphs: [
            'Kinh nghiệm của Era Hotel chia sẻ, thời gian đẹp nhất để khám phá phố cà phê Triệu Việt Vương là vào buổi sáng sớm và chiều tà. Khi đó, thành phố bớt ồn ào, ánh nắng dịu nhẹ len lỏi qua từng tán cây, không khí trong lành tận hưởng, thích hợp để bạn thư giãn, cảm nhận không khí đặc trưng của Hà Nội.',
            'Nếu đi vào buổi tối, bạn sẽ thấy một diện mạo khác của phố cà phê: lung linh ánh đèn, náo nhiệt tiếng nhạc và đông đúc thực khách – đặc biệt hợp cho các buổi tụ họp, hẹn hò lãng mạn hay họp mặt bạn bè sau ngày dài làm việc.'
          ]
        },
        {
          subtitle: 'Gợi Ý Những Món Đặc Sản Không Thể Bỏ Lỡ',
          paragraphs: [
            'Trải nghiệm tại phố cà phê Triệu Việt Vương sẽ chưa trọn vẹn nếu bạn chưa thử qua cà phê trứng nổi tiếng, bạc xỉu ngọt ngào hay những ly espresso thơm nồng đậm vị. Ngoài cà phê, các loại bánh ngọt tươi mới mỗi ngày – như tiramisu, bánh mousse, bánh chuối nướng,… cũng là điểm cộng cho các quán tại đây. Đừng quên gọi thêm một ly sinh tố hoặc trà trái cây giải nhiệt vào mùa hè Hà Nội.'
          ]
        },
        {
          subtitle: 'Lưu Ý Khi Tham Quan Phố cà phê Triệu Việt Vương',
          paragraphs: [
            'Khi tham quan phố cà phê Triệu Việt Vương, bạn nên lưu ý giữ gìn trật tự chung, bảo vệ môi trường và chọn quán phù hợp với nhu cầu: mong muốn không gian yên tĩnh, tìm cảm hứng sáng tạo hay đơn giản là nơi thư giãn nhẹ nhàng. Ngoài ra, bạn cũng cần chú ý đến các chương trình ưu đãi, combo ngày lễ tại nhiều quán, thường được cập nhật liên tục nhằm đáp ứng nhu cầu khách hàng.'
          ]
        },
        {
          subtitle: 'Dịch Vụ Lưu Trú Đẳng Cấp Gần Phố cà phê Triệu Việt Vương',
          paragraphs: [
            'Nếu bạn là du khách từ xa cần tìm nơi nghỉ ngơi lý tưởng khi tham quan phố cà phê Triệu Việt Vương, Era Hotel là lựa chọn hoàn hảo với dịch vụ chuyên nghiệp, tiện nghi hiện đại, vị trí thuận tiện di chuyển đến các điểm du lịch nổi tiếng khác tại Hà Nội. Đây cũng là điểm dừng chân lý tưởng để bạn khám phá trọn vẹn vẻ đẹp của phố cà phê Triệu Việt Vương cũng như những giá trị văn hóa tinh hoa của thủ đô ngàn năm văn hiến.'
          ]
        },
        {
          title: 'Bí Quyết Sống Chậm, Tận Hưởng Cuộc Sống Giữa Lòng Hà Nội với Phố cà phê Triệu Việt Vương',
          subtitle: 'Tận Hưởng Những Khoảnh Khắc Bình Yên Bên Tách Cà Phê',
          paragraphs: [
            'Phố cà phê Triệu Việt Vương còn là nơi để bạn rũ bỏ muộn phiền, sống chậm lại và cảm nhận những giá trị giản dị của cuộc sống. Đôi khi, chỉ cần một tách cà phê nóng, một chiếc bàn cạnh cửa sổ, bạn đã có thể tìm thấy nguồn năng lượng mới cho tâm hồn, lắng nghe nhịp sống phố phường, ngắm dòng người qua lại, hít hà hương vị bình yên giữa chốn đô thành.'
          ]
        },
        {
          subtitle: 'Lưu Giữ Kỷ Niệm Đẹp Cùng Người Thân, Bạn Bè',
          paragraphs: [
            'Một chuyến đi đến phố cà phê Triệu Việt Vương sẽ thêm ý nghĩa trọn vẹn khi bạn đồng hành cùng gia đình, bạn bè, cùng nhau thưởng thức những ly cà phê chất lượng, chụp cho mình bức ảnh kỷ niệm đẹp để nhớ về Hà Nội thanh lịch, hiếu khách, thân thiện. Điều đặc biệt, từng khoảnh khắc tại đây luôn mang lại cho du khách những cảm xúc chân thật, giúp bạn hiểu hơn về con người và cuộc sống của thủ đô ngàn năm tuổi.'
          ]
        },
        {
          paragraphs: [
            'Với sức sống mãnh liệt, nét đẹp giản dị mà sâu lắng cùng sự đa dạng về trải nghiệm, phố cà phê Triệu Việt Vương thực sự là điểm đến lý tưởng dành cho tất cả mọi người khi đặt chân đến Hà Nội. Dù bạn là người yêu vẻ đẹp xưa cũ, thích sự sôi động của nhịp sống hiện đại, hay đơn giản chỉ là muốn tìm lại một góc bình yên, tại nơi đây, bạn đều có thể tìm thấy điều mình mong muốn.',
            'Era Hotel hi vọng thông qua bài viết này, bạn sẽ có thêm nhiều thông tin bổ ích, kinh nghiệm thực tế để lên kế hoạch khám phá phố cà phê Triệu Việt Vương một cách trọn vẹn nhất. Đừng quên thêm địa chỉ này vào hành trình khám phá Hà Nội của mình để cảm nhận hết phong vị độc đáo của thành phố ngàn năm văn hiến, trải nghiệm những cung bậc cảm xúc chỉ riêng phố cà phê Triệu Việt Vương mới có thể mang lại!'
          ]
        }
      ]
    },
    {
      Id: 'ART003',
      Name: 'Khám phá 10 địa điểm du lịch văn hóa hàng đầu ở Việt Nam',
      Description: 'Việt Nam là một đất nước giàu lịch sử và truyền thống, với sự pha trộn của các nền văn hóa, ngôn ngữ và bối cảnh lịch sử khác nhau. Đất nước đã được định hình qua nhiều thế kỷ bởi sự kết hợp của truyền thống cổ xưa và sự du nhập văn hóa nước ngoài. Sự đa dạng trong từng khu vực cũng giúp các nền văn hóa ở Việt Nam phong phú hơn.',
      ImageUrl: 'assets/images/room-card/3.jpg',
      ShortAddess: 'Việt Nam',
      ContentSections: [
        {
          paragraphs: [
            'Bạn sẽ tìm thấy những nền văn hóa khác nhau ở mỗi thành phố và khu vực ở Việt Nam. Nếu bạn muốn khám phá các địa điểm du lịch văn hóa hàng đầu ở Việt Nam, hãy tham khảo bài viết của chúng tôi ngay bên dưới đây nhé.'
          ]
        },
        {
          title: 'Du lịch Hội An',
          imageUrl: 'assets/images/news/1.jpg',
          paragraphs: [
            'Nếu bạn muốn trải nghiệm nền văn hóa phong phú của Việt Nam trong quá khứ, hãy ghé thăm Phố cổ Hội An, Di sản Thế giới đã được UNESCO công nhận. Đây cũng là điểm đến tốt nhất ở Việt Nam. Thành phố này được bảo tồn tốt. Ban đầu, nơi đây là một bến cảng thương mại ở Đông Nam Á, và phát triển rất mạnh vào thế kỷ 16 và 17. Vào thời hoàng kim, Hội An đã chào đón các thương nhân từ Nhật Bản, Trung Quốc, Tây Ban Nha và Hà Lan và được biết đến như một nơi trao đổi văn hóa. Ngày nay, bạn có thể trải nghiệm văn hóa trong khu phố cổ thông qua các bảo tàng lịch sử, các ngôi nhà di sản và thưởng thức ẩm thực và đi mua sắm. Các trải nghiệm văn hóa phong phú đang chờ bạn khám phá ở xung quanh các con đường của Phố cổ Hội An.'
          ],
          items: [
            'Khám phá khu phố cổ: Bạn có thể đi bộ qua các con đường, ghé thăm các viện bảo tàng và tòa nhà tuyệt đẹp.',
            'Ghé thăm các làng nghề: Xung quanh Hội An có một số làng nghề, nơi bạn có thể xem và tìm hiểu quy trình thực hiện một số món đồ thủ công, chẳng hạn như làm bình gốm,…',
            'Tham gia các khóa học nấu ăn: Hội An là nơi phổ biến nhất ở Việt Nam để tham gia các lớp học nấu ăn. Ngoài việc học nấu ăn tiếng Việt, bạn cũng thường ghé thăm một khu chợ địa phương.'
          ]
        },
        {
          title: 'Du lịch Hà Nội',
          imageUrl: 'assets/images/news/2.jpg',
          paragraphs: [
            'Hà Nội chịu ảnh hưởng của cả văn hóa địa phương của Việt Nam lẫn của các cường quốc thực dân đã từng chiếm đóng thủ đô. Tại Hà Nội, bạn sẽ tìm thấy nhiều tòa nhà, nhiều công trình kiến trúc và thậm chí cả ẩm thực từ thời thuộc địa này.'
          ],
          items: [
            'Khám phá các viện bảo tàng: Có một số viện bảo tàng ở Hà Nội kể về văn hóa và quá khứ thuộc địa của Việt Nam.',
            'Khám phá khu phố cổ: Cách tốt nhất có lẽ là đi lang thang quanh Phố cổ, trải nghiệm cuộc sống đường phố địa phương, ngắm nhìn các công trình kiến ​​trúc Pháp, các đền thờ Trung Quốc và các tòa nhà lịch sử Việt Nam.',
            'Xem chương trình múa rối nước: Đây là một hình thức giải trí truyền thống đặc biệt của người Hà Nội xưa.'
          ]
        },
        {
          title: 'Du lịch Hà Giang',
          imageUrl: 'assets/images/news/3.jpg',
          paragraphs: [
            'Đi du lịch Hà Giang, bạn sẽ có cơ hội được ghé thăm các ngôi làng của người dân tộc thiểu số, và các khu chợ địa phương. Nhờ sự đa dạng sắc tộc này, bạn sẽ được khám phá những nét đặc trưng của văn hóa Hà Giang. Mỗi một nhóm dân tộc này lại có phong tục độc đáo khác nhau.'
          ],
          items: [
            'Tham quan bằng xe máy: Đây là một trải nghiệm thú vị, giúp bạn có thể khám phá trọn vẹn cảnh quan thiên nhiên ngoạn mục của nơi đây.',
            'Tham quan các khu chợ: Một trong những cách tốt nhất để trải nghiệm cuộc sống địa phương là ghé thăm một khu chợ. Chợ ở Hà Giang thường là sự pha trộn của các nhóm dân tộc thiểu số, nơi không chỉ buôn bán gia súc, rau và thịt, mà còn là nơi gặp gỡ người dân địa phương và chia sẻ những câu chuyện thú vị.'
          ]
        },
        {
          title: 'Du lịch Sapa',
          paragraphs: [
            'Du lịch Sapa trở nên tuyệt vời hơn nhờ nền văn hóa địa phương dễ tiếp cận. Hơn nữa, bạn còn có cơ hội khám phá trọn vẹn nét văn hóa ở nơi đây. Tới Sapa, bạn có thể đi bộ quanh thị trấn, từ ngôi làng này sang ngôi làng khác, nơi bạn được gặp gỡ với các nhóm dân tộc thiểu số. Bạn sẽ có cơ hội được trải nghiệm cuộc sống địa phương của người dân nơi đây, và đi qua những cánh đồng lúa, nơi những người dân bận rộn làm việc.'
          ],
          items: [
            'Trekking: Đi bộ từ làng này sang làng khác là một cách tuyệt vời để tìm hiểu văn hóa địa phương.',
            'Ghé thăm các khu chợ: Đây là nơi tốt nhất để khám phá nét văn hóa đặc trưng của người Sapa.',
            'Ở homestay: Lưu trú trong homestay là cách độc đáo nhất để tiếp xúc với văn hóa địa phương. Ở homestay có nghĩa là bạn đang sinh sống với một gia đình địa phương, nơi bạn sẽ được thưởng thức các món ăn được nấu trên bếp lửa truyền thống.'
          ]
        },
        {
          title: 'Du lịch Huế',
          paragraphs: [
            'Nếu bạn thích khám phá lịch sử hoặc các nền văn hóa kỳ lạ, bạn không thể bỏ qua thủ đô hoàng gia cũ của Việt Nam. Huế từng đại diện cho sức mạnh của đế chế Việt Nam, là một thành phố có đầy đủ các di tích, đền đài, cung điện, lăng mộ, thu hút khách du lịch từ khắp nơi trên thế giới đến tham quan.'
          ],
          items: [
            'Cung điện Hoàng gia: Đây là nơi tốt nhất để ngắm nhìn các công trình kiến trúc cổ đại và khám phá lịch sử của hoàng gia.',
            'Đi thuyền: Bạn có thể đi thuyền trên sông Hương và ngắm nhìn các thắng cảnh nằm dọc theo sông.',
            'DMZ: Nếu bạn muốn tìm hiểu thêm về các cuộc chiến tranh trong quá khứ, hãy tới khu phi quân sự.'
          ]
        },
        {
          title: 'Du lịch Thành phố Hồ Chí Minh',
          paragraphs: [
            'Văn hóa của thành phố Hồ Chí Minh được hình thành bởi đế quốc phương Tây là chính. Bên cạnh đó, Hồ Chí Minh cũng là trung tâm kinh tế của đất nước, do đó mọi người từ khắp nơi đã đổ xô đến đây. Thành phố này thực sự là một sự pha trộn hoàn hảo của văn hóa châu Á và phương Tây. Tới đây, bạn sẽ có cơ hội được ngắm nhìn các tòa nhà chọc trời, các tòa nhà thuộc địa của Pháp, các ngôi đền cổ của Trung Quốc, các quán bar hiện đại và các trung tâm mua sắm lớn.'
          ],
          items: [
            'Tham quan bằng xe máy: Cách tốt nhất để khám phá Thành phố Hồ Chí Minh là đi xe máy. Tham gia trải nghiệm này, bạn sẽ cảm thấy mình như một người dân địa phương thực sự. Bạn sẽ ghé qua những con phố đông đúc, đầy những chiếc xe máy và xe tay ga, đến những điểm tham quan nổi tiếng.',
            'Ghé thăm các điểm tham quan trong chiến tranh Việt Nam: Nếu bạn muốn biết thêm về chiến tranh, bạn có thể ghé thăm các địa điểm khác nhau, như Bảo tàng Chứng tích chiến tranh, Địa đạo Củ Chi và Dinh Độc lập, nơi chiến tranh kết thúc.'
          ]
        },
        {
          title: 'Du lịch Đồng bằng sông Cửu Long',
          paragraphs: [
            'Đồng bằng sông Cửu Long là nơi sinh sống của các nền văn hóa khác nhau. Phần lớn người dân trong khu vực là người Việt Nam và Khmer, với gần 2 triệu người. Do đó, bạn sẽ được trải nghiệm các phong tục tập quán, các bữa tiệc và các nền văn hóa khác nhau. Vì người dân sống ở đây sống trên vùng sông nước là chủ yếu, nên lối sống ở của người dân Đồng bằng sông Cửu Long cũng khác với những nơi khác của Việt Nam. Ở đây nước rất nhiều, nên những ngôi nhà được xây dựng trên sông và thậm chí còn có chợ nổi.'
          ],
          items: [
            'Đi thuyền: Mê Kông là một đồng bằng sông nước, và điều tốt nhất để ngắm nhìn vẻ đẹp của nơi đây là ngồi trên một chiếc thuyền. Từ đây, bạn có thể khám phá cuộc sống của người dân địa phương và thăm những ngôi làng khác nhau.',
            'Các nhà máy và đồn điền địa phương: Đồng bằng sông Cửu Long rất màu mỡ. Bạn có thể đến thăm các đồn điền trái cây khác nhau, nhưng cũng có các nhà máy địa phương như nhà máy kẹo dừa.',
            'Chợ nổi: Một trong những điểm nổi bật của đồng bằng sông Cửu Long là chợ nổi. Ở đây bạn có thể thấy người dân địa phương mua và bán thức ăn trên các con thuyền.',
            'Đi xe đạp: Một cách khác để tham quan các ngôi làng và ngắm nhìn cuộc sống của người dân địa phương ở khu vực này là đi xe đạp.'
          ]
        },
        {
          title: 'Du lịch Đà Lạt',
          paragraphs: [
            'Đà Lạt có một nền văn hóa Việt Nam rất hiện đại và đó chính là lý do tại sao bạn nên ghé thăm điểm đến này. Đây là một trong những thành phố nổi tiếng nhất ở Việt Nam. Tại hồ nước, khu rừng, đồn điền, đài quan sát và quán cà phê, bạn có thể thấy những bức ảnh tự sướng của giới trẻ Việt Nam. Tới đây, bạn sẽ dễ dàng tìm thấy các cửa hàng đặc biệt và cửa hàng cà phê, nơi bán các sản phẩm độc đáo nhất.'
          ],
          items: [
            'Ghé thăm các quán cà phê: Bạn nên dành thời gian để ghé thăm một hoặc nhiều cửa hàng cà phê để ngắm nhìn phong cách trang trí độc đáo hoặc phong cảnh tuyệt vời của hồ nước hoặc đồn điền trà.',
            'Đi tour du lịch vòng quanh thành phố: Đà Lạt là một thành phố dễ chịu, và cách tốt nhất để ngắm nhìn môi trường xung quanh của nơi đây là đi chiếc xe máy. Ngồi trên một chiếc xe máy, bạn sẽ có cơ hội được ngắm nhìn vẻ đẹp ngoạn mục của những thác nước, khu rừng, đồn điền trà và những nơi ẩn giấu trong khu vực.'
          ]
        },
        {
          title: 'Du lịch Kon Tum',
          paragraphs: [
            'Kon Tum là một nơi thú vị và hấp dẫn, nhưng lại rất ít khách du lịch đến đây. Khu vực xung quanh Kon Tum có nhiều cộng đồng dân tộc thiểu số khác nhau. Khu vực này đã chứng kiến những cuộc chiến tranh đẫm máu và chính thành phố cũng đã bị phá hủy trong những trận chiến cuối cùng của cuộc chiến.'
          ],
          items: [
            'Ghé thăm các làng dân tộc thiểu số: Vì hầu như không có khách du lịch ở đây, nên bạn phải tự đi khám phá. Ghé thăm các làng dân tộc thiểu số trong khu vực là trải nghiệm tốt nhất dành cho bạn.'
          ]
        },
        {
          title: 'Du lịch Ninh Bình',
          paragraphs: [
            'Ninh Bình là trung tâm văn hóa chính trị của Việt Nam dưới triều đại Vua Đinh Tiến Hoàng vào năm 968. Bạn sẽ tìm thấy Hoa Lư – thủ đô đầu tiên của Việt Nam ở đây. Cách Hoa Lư mười hai cây số là chùa Bái Đính rộng lớn, được khai trương vào năm 2010.',
            'Đây là khu phức hợp Phật giáo lớn nhất ở Đông Nam Á. Ở Tràng An có những địa điểm khảo cổ với bằng chứng về cuộc sống của con người trong các hang động có từ 30.000 năm trước. Bạn cũng sẽ tìm thấy nhiều ngôi chùa khác nhau trải khắp Ninh Bình.'
          ],
          items: [
            'Khám phá khu vực: Khám phá văn hóa địa phương ở Ninh Bình bằng xe đạp, xe máy là trải nghiệm tốt nhất ở nơi đây.'
          ]
        },
        {
          paragraphs: [
            'Nếu bạn muốn trải nghiệm các tour du lịch Việt Nam khác, hãy liên hệ ngay với Tràng An Travel theo số hotline: 1800.0079 để được tư vấn miễn phí nhé.'
          ]
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get('id');
      console.log('Hotel ID from route:', this.hotelId);
      this.loadHotelData();
    });
  }

  loadHotelData(): void {
    if (this.hotelId) {
      console.log('Loading hotel data for ID:', this.hotelId);
      console.log('Available hotels:', this.hotels);
      this.currentHotel = this.hotels.find(hotel => hotel.Id === this.hotelId) || null;
      if (this.currentHotel) {
        this.contentSections = this.currentHotel.ContentSections || [];
      }
      console.log('Found hotel:', this.currentHotel);
      console.log('Content sections:', this.contentSections);
    } else {
      console.log('No hotel ID provided');
    }
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}

