function Validation() {
    //Kiểm tra rỗng
    this.kiemTraRong = function (input, selectorError, name) {
        if(input.trim === ''){
            //.trim loại bổ khoảng trống đầu và cuối chuỗi
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống!';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    //Kiểm tra ký tự
    this.kiemTraKyTu = function(input, selectorError, name){
        var regexAllLetters = /^[ a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/
        if(regexAllLetters.test(input)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' phải là ký tự!';
        return false;
    }

    //Kiểm tra số
    this.kiemTraSo = function(input, selectorError, name){
        var regexAllNumber = /^[0-9]+$/;
        if(regexAllNumber.test(input)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' phải là số!'
    }

    //Kiểm tra độ dài
    this.kiemTraDoDai = function(input, selectorError, minLength, maxLength, name){
        if(input.length < minLength || input.length > maxLength){
            document.querySelector(selectorError).innerHTML = `${name} phải từ ${minLength} đến ${maxLength} ký số!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraLuong = function(input, selectorError, minLength, maxLength, name){
        if(Number(input).length < minLength || Number(input).length > maxLength){
            document.querySelector(selectorError).innerHTML = `${name} phải từ ${minLength} đến ${maxLength}!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraSoGioLam = function(input, selectorError, minLength, maxLength, name){
        if(Number(input).length < minLength || Number(input).length > maxLength){
            document.querySelector(selectorError).innerHTML = `${name} phải từ ${minLength} đến ${maxLength}`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}


/**
 * this.kiemTraRong = function (value,selectorError,name) {
        //Xử lý không hợp lệ
        //.trim() loại bỏ khoảng trắng đầu - cuối chuỗ
        if(value.trim() === '') {
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống !';
            return false;
        }
        //Xử lý hợp lệ
        document.querySelector(selectorError).innerHTML = '';
        return true;

    }

    this.kiemTraRong = function (value,selectorError,name) {
        //Xử lý không hợp lệ
        //.trim() loại bỏ khoảng trắng đầu - cuối chuỗ
        if(value.trim() === '') {
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống !';
            return false;
        }
        //Xử lý hợp lệ
        document.querySelector(selectorError).innerHTML = '';
        return true;

    }

    this.kiemTraKyTu = function(value,selectorError,name){
        var regexAllLetters = /^[A-Za-z]+$/; 
        if(regexAllLetters.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' tất cả phải là ký tự !';
        return false;
    }

    this.tatCaSo = function(value,selectorError,name){
        var regexNumber = /^[0-9]+$/;
        //Nếu như trả về true --> hợp lệ
        if(regexNumber.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' phải là số !';
        return false;
    }

    this.kiemTraDoDai = function(value, selectorError, minLength, maxLength){
        if(value.lenght < minLength || value.lenght > maxLength){
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự !`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraGiaTri = function(value, selectorError, minValue, maxValue, name){
        if(value < minValue || value > maxValue){
            document.querySelector(selectorError).innerHTML = `${name} từ ${minValue} đến ${maxValue}`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
 */

