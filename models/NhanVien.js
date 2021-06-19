function NhanVien(){
    this.maNhanVien = "";
    this.tenNhanVien = "";
    this.chucVu = "";
    this.luongCoBan = "";
    this.soGioLamTrongThang = "";
    // this.tongLuong = "";
    this.tinhTongLuong = function(){
        return this.luongCoBan * this.soGioLamTrongThang;
    }
    this.xepLoaiNhanVien = function (){
        var ketQua = '';
        if (this.soGioLamTrongThang >= 150) {
            ketQua = 'Giỏi'
        } else if (this.soGioLamTrongThang >= 100 && this.soGioLamTrongThang < 150) {
            ketQua = 'Khá'
        } else {
            ketQua = 'Trung bình';
        }
        return ketQua;
    }
}