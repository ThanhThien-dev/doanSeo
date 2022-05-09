import React from "react";
// import { Link } from "react-router-dom";

function Noidung() {
  return (
    <div className="blog-container">
      <br></br>
      <h2>
        Giải đáp ý nghĩa các con số điện thoại từ 0 đến 9 theo phong thủy.
      </h2>
      <div className="blog">
        Mỗi con số trong sim điện thoại đều có ý nghĩa riêng và nguồn năng lượng
        đặc biệt. Khi 3 con số cuối sim điện thoại hợp lại với nhau sẽ tạo nên
        một ý nghĩa mới, có thể là may mắn cũng có thể là bất lợi cho người
        dùng. Ý nghĩa số điện thoại đang dùng có tốt không? Số đuôi điện thoại
        đẹp là gì? Đây đều là thắc mắc của rất nhiều người dùng hiện nay. Thông
        qua bài viết này, PTHCC hi vọng mọi người có thể hiểu hơn về ý nghĩa các
        sim Viettel độc lạ và chia sẻ đến bạn cách tra{" "}
        <b>
          ý nghĩa số điện thoại, ý nghĩa các con số mà PTHCC mang lại cho bạn.
        </b>
      </div>
      <br></br> <br></br>
      <div className="img_blog">
        <img src={require("../images/img1.jpg")} alt="" />
      </div>
      <h3>
        <b>I. Một số dạng SIM số đẹp phổ biến</b>
      </h3>
      <div className="blog">
        <ul>
          <li>Sim Lục Quý</li>
          <li>Sim Ngũ Quý</li>
          <li>Sim Tứ Quý</li>
          <li>Sim Tam Hoa</li>
          <li>Sim Lộc Phát</li>
          <li>Sim Năm Sinh</li>
          <li>Sim Taxi Cặp 3</li>
          <li>Sim Taxi Cặp 2</li>
          <li>Sim Số Tiến</li>
        </ul>
      </div>
      <h3>
        <b>
          II. Những cách xem ý nghĩa 3 số cuối sim điện thoại phổ biến nhất hiện
          nay
        </b>
      </h3>
      <b>
        <i>1. Theo số nút</i>
      </b>
      <div className="blog2">
        Đây là cách xem ý nghĩa 3 số cuối sim điện thoại phổ biến và dễ áp dụng
        vì rất dễ hiểu, dễ nhớ, ai cũng có thể áp dụng được. Cách thức này dựa
        trên số nút của 3 số cuối trong sim điện thoại. Số nút được tính bằng
        cách lấy 3 số cuối cộng lại với nhau, số nút là kết quả tính theo hàng
        đơn vị, nếu kết quả từ 8 đến 10 được gọi là đẹp, từ 5 đến 7 gọi là bình
        hòa, còn từ 1 đến 4 gọi là số nút xấu. Số nút càng cao thì sim số đang
        dùng càng đẹp và ngược lại.
      </div>
      <b>
        <i>2. Theo ngũ hành</i>
      </b>
      <div className="blog2">
        Phương pháp này áp dụng mối quan hệ giữa ngũ hành của ba con số với bản
        mệnh của người dùng. Nếu là mối quan hệ tương sinh thì là sim số tốt còn
        nếu là tương khắc thì không may mắn.
        <br></br>
        <br></br>
        Ngũ hành của 3 số cuối được tính cũng khá đơn giản: hành nào xuất hiện
        trên 1 lần thì sim thuộc hành đó. Nếu 3 con số thuộc 3 hành khác nhau
        thì ngũ hành của sim sẽ là ngũ hành của con số cuối cùng.
      </div>
      <b>
        <i>3. Ý nghĩa các con số trong SIM</i>
      </b>
      <br></br> <br></br>
      <div className="img_blog">
        <img src={require("../images/img2.jpg")} alt="" />
      </div>
      <h3>
        <b>III. Bán lại sim điện thoại đang dùng </b>
      </h3>
      <div className="blog">
        Bạn có số sim đẹp muốn bán lại để thu hồi vốn hay chỉ đơn thuần để
        chuyển sang một số khác. Hãy liên hệ ngay cho chúng tôi với số điện
        thoại 0123.456.789 để được tư vấn. Tiêu chí để kho sim PTHCC thu mua sim
        số của bạn đó là số đó phải chính chủ của bạn và nó là số có giá trị .
        Liên hệ với kho sim PTHCC chúng tôi sẽ giúp bạn.
        <br></br> <br></br>
        <div className="img_blog">
          <i>Chúc quý khách tìm được sim Viettel độc lạ ưng ý !</i>
        </div>
      </div>
    </div>
  );
}
export default Noidung;
