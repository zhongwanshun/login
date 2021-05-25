function trip(obj, trip) {
    document.getElementById(obj).innerHTML = "<b>" + trip + "</b>";
}

//别名必须是中文
function check_chinesename(obj) {
    var chinesename = obj.value.match(/[\u4E00-\u9FA5]+((\u2022)?[\u4E00-\u9FA5]+)+/i);
    obj.value = chinesename === null ? '请输入合法的中文姓名' : chinesename[0];
}

function checkSex() {
    var sexNum = document.getElementsByName("sex");
    var sex = "";
    for (let i = 0; i < sexNum.length; ++i) {
        if (sexNum[i].checked) {
            sex = sexNum[i];
        }

    }
    if (sex == "") {
        trip("sex_trip", "ERROR!!");
        return false;
    } else {
        trip("sex_trip", "OK!!");
    }
}

function checkHobby() {
    var hobbyNum = document.getElementsByName("hobby");
    var hobby = "";
    for (let i = 0; i < hobbyNum.length; ++i) {
        if (hobbyNum[i].checked) {
            hobby = hobbyNum[i];
        }
    }
    if (hobby == "") {
        trip("hobby_trip", "ERROR!!");
        return false;
    } else {
        trip("hobby_trip", "OK!!");

    }
}

function checkSelect() {
    var myselect = document.getElementById("userType");
    var index = myselect.selectedIndex;
    var checkValue = myselect.options[index].value;
    if (checkValue == 0) {
        trip("type_trip", "请选择!!");
        return false;
    } else {
        trip("type_trip", "OK!!");
    }
}

function checkForm() {
    checkSelect();
    checkHobby();
    checkSex();

    var trip = document.getElementsByName("em");
    var tripV = trip.innerHTML();

    //获取用户名输入项
    var userNname = document.getElementById("userNname");
    var uName = userNname.value;
    if (uName.length < 1 || uName.length > 10) {
        trip("name_trip", "账号长度为1-10位!!");
        return false;
    } else {
        trip("name_trip", "OK!!");

    }

    //密码长度大于6 和确认必须一致
    var password = document.getElementById("password");
    var userPass = password.value;
    if (userPass.length < 6) {
        trip("password_trip", "密码要>6位!!");
        return false;
    } else {
        trip("password_trip", "OK!!");
    }

    //获取确认密码框的值 var
    var surePassword = document.getElementById("surePassword");
    var surePass = surePassword.value;
    if (userPass != surePass) {
        trip("surePassword_trip", "两次密码不一致!!");
        return false;
    }

    //校验邮箱:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
    var inputEmail = document.getElementById("email");
    var uEmail = inputEmail.value;
    if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(uEmail)) {
        trip("emil_trip", "邮箱不合法!!");
        return false;
    } else {
        trip("emil_trip", "OK!!");
    }


    function submitT() {
        if (checkForm()) {
            return true;
        } else {
            return false;
        }
    }
}