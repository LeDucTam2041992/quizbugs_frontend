import { Component, OnInit } from '@angular/core';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Array<Place> = [];
  constructor() {}
  ngOnInit() {
    this.places = [
      {
        imgSrc: 'assets/images/java.jpg',
        name: 'Java',
        description: `Java là một ngôn ngữ lập trình hướng đối tượng và dựa trên các lớp. 
        Khác với phần lớn ngôn ngữ lập trình thông thường, thay vì biên dịch mã nguồn thành mã máy hoặc thông dịch 
        mã nguồn khi chạy, Java được thiết kế để biên dịch mã nguồn thành bytecode, bytecode sau đó sẽ được môi trường thực thi chạy..`,
        charge: '',
        location: 'LÀM BÀI'
      },
      {
        imgSrc: 'assets/images/php.jpg',
        name: 'PHP',
        description: `PHP: Hypertext Preprocessor, thường được viết tắt thành PHP là một ngôn ngữ lập trình kịch bản hay một loại mã lệnh chủ yếu được dùng để phát triển các ứng dụng viết cho máy chủ, mã nguồn mở, dùng cho mục đích tổng quát. Nó rất thích hợp với web và có thể dễ dàng nhúng vào trang HTML..`,
        charge: '',
        location: 'LÀM BÀI'
      },
      {
        imgSrc: 'assets/images/sql.jpg',
        name: 'SQL',
        description: `SQL, dịch là Ngôn ngữ truy vấn mang tính cấu trúc, là một loại ngôn ngữ máy tính phổ biến để tạo, sửa, và lấy dữ liệu từ một hệ quản trị cơ sở dữ liệu quan hệ. Ngôn ngữ này phát triển vượt xa so với mục đích ban đầu là để phục vụ các hệ quản trị cơ sở dữ liệu đối tượng-quan hệ. Nó là một tiêu chuẩn ANSI/ISO..`,
        charge: '',
        location: 'LÀM BÀI'
      }
    ];
  }
}
