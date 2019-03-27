function checkLogin() {
    var name = prompt("Nhap ten nguoi dung ")
    if (name == "Admin"){
        var pass = prompt("Nhap mat khau");
        if(pass=="TheMaster"){
            document.write("Wellcome");
        }else if (pass==null){
            document.write("Canceled");
        }else {
            document.write("Wrong password");
        }
    } else if (name==null) {
        document.write("canceled")
    }else {
        document.write("I don't know you")
    }
}
checkLogin();