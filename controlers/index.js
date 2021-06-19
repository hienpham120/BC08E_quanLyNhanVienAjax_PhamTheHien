var kiemTra = new Validation();
function layDanhSachNhanVienApi(){
    var promise = axios({
        url:'http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien',
        method: 'GET',
        responType: 'json',
    });
    //Xử lý thành công
    promise.then(function(result){
        console.log('result', result.data);
        //Sau khi lấy dữ liệu thành công --> hiển thị ra giao diện bằng DOM
        renderTableNhanVien(result.data);
    });
    //Xử lý thất bại
    promise.catch(function(error){
        console.log('error', error);
    });
}
layDanhSachNhanVienApi();
function renderTableNhanVien(arrNV) { //input
    //Từ mảng arrSV tạo ra 1 chuỗi html <tr> <td></td></tr>
    //arrSV = [{maNhanVien:'',....},{maNhanVien:'',....},{maNhanVien:'',....}]
    var content = '';
    for (var index = 0; index < arrNV.length; index++) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
        var nv = arrNV[index];
        var nhanVien = new NhanVien();
        nhanVien.maNhanVien = nv.maNhanVien;
        nhanVien.tenNhanVien = nv.tenNhanVien;
        nhanVien.chucVu = nv.chucVu;
        nhanVien.luongCoBan = nv.luongCoBan;
        nhanVien.soGioLamTrongThang = nv.soGioLamTrongThang;
        nhanVien.loaiNhanVien = nv.loaiNhanVien

        //Từ dữ liệu nhân viên đó => tạo ra 1 chuỗi html tr
        var trNhanVien = `
                <tr>
                    <td>${nhanVien.maNhanVien}</td>
                    <td>${nhanVien.tenNhanVien}</td>
                    <td>${nhanVien.chucVu}</td>
                    <td>${nhanVien.luongCoBan}</td>
                    <td>${nhanVien.tinhTongLuong()}</td>
                    <td>${nhanVien.soGioLamTrongThang}</td>
                    <td>${nhanVien.xepLoaiNhanVien()}</td>
                    <td><button onclick="xoaNhanVien('${nhanVien.maNhanVien}')" class="btn btn-danger">Xoá</button>
                    </td>
                </tr>
        `;
        content += trNhanVien;
    };
    //Dom đến tbody trên giao diện để gán innerHTML vào
    document.querySelector('#tblNhanVien').innerHTML = content;

}
/** Thực hành với post: phương thức post là phương thức đưa dữ liệu người dùng về server */
document.querySelector('#btnThemNhanVien').onclick = function(){
    var nhanVien = new NhanVien();
    //Lấy dữ liệu từ input vào biến NhanVien
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVien.chucVu = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanVien.soGioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;
    // nhanVien.loaiNhanVien = document.querySelector('#loaiNhanVien').value;
    console.log('arrNhanVien', nhanVien);

    //Gửi dữ liệu về server = ajax
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien',
        method: 'POST', //phương thức do backend cung cấp
        data:nhanVien
    });

    promise.then(function(result){
        console.log('result', result.data);
        //Khi thêm dữ liệu thành công ---> gọi hàm lấy danh sách sinh viên từ server về lần nữa
        layDanhSachNhanVienApi();
    });

    promise.catch(function(error){
        //Hiển thị lỗi backend trả ra
        console.log('error', error.data);
    });

    // ------------------------------------- validation ---------------------------------------------------
    var valid = true;
    //(1): Kiểm tra rỗng (bắt buộc nhập)
    valid &= kiemTra.kiemTraRong(nhanVien.maNhanVien,'#error_required_maNhanVien','Mã nhân viên') & 
    kiemTra.kiemTraRong(nhanVien.tenNhanVien,'#error_required_tenNhanVien','Tên nhân viên') &
    kiemTra.kiemTraRong(nhanVien.luongCoBan,'#error_required_luongCoBan','Lương cơ bản') &
    kiemTra.kiemTraRong(nhanVien.soGioLamTrongThang,'#error_required_soGioLamTrongThang','Số giờ làm trong tháng');

    //(2): Kiểm tra định dạng dữ liệu
    //(2.1): Kiểm tra ký tự
    valid &= kiemTra.kiemTraKyTu(nhanVien.tenNhanVien,'#error_allLetter_tenNhanVien','Tên nhân viên');
    //(2.2): Kiểm tra số
    valid &= kiemTra.kiemTraSo(nhanVien.luongCoBan,'#error_allNumber_luongCoBan','Lương cơ bản') &
    kiemTra.kiemTraSo(nhanVien.soGioLamTrongThang,'#error_allNumber_soGioLamTrongThang','Số giờ làm trong tháng');
    //(2.2): Kiểm tra độ dài mã nhân viên từ 4 --> 6 ký tự
    valid &= kiemTra.kiemTraDoDai(nhanVien.maNhanVien,'#error_min_max_length_maNhanVien',4,6,'Mã nhân viên');
    //(2.3): Kiểm tra khoảng lương từ 1000000 --> 20000000
    valid &= kiemTra.kiemTraLuong(nhanVien.luongCoBan,'#error_min_max_luongCoBan',1000000,20000000,'Lương cơ bản');
    //(2.4): Kiểm tra số giờ làm từ 50 --> 150
    valid &= kiemTra.kiemTraSoGioLam(nhanVien.soGioLamTrongThang,'#error_min_max_soGioLamTrongThang',50,150,'Số giờ làm')
    
    if(!valid) {
        return ;
    }
}

/**Phương thức xoá nhân viên ajax */
function xoaNhanVien(maNhanVien){
    console.log('maNhanVien', maNhanVien);

    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`,
        method: 'DELETE'
    });

    promise.then(function(result){
        console.log('result', result.data);
    });

    promise.catch(function(error){
        console.log('error', error.data)
    });
}


