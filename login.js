
function validateForm(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let usernameDemo = document.getElementById('usernameDemo').innerHTML;
    let passwordDemo = document.getElementById('passwordDemo').innerHTML;
    if (username == "admin" && password == "admin" )
    {
        return true
    }
    else if (username != "admin")
    {
        document.getElementById('usernameDemo').innerHTML ="";
        document.getElementById('passwordDemo').innerHTML ="";
        document.getElementById('usernameDemo').innerHTML ="شماره دانشجویی نامعتبر";
        return false
    }
    else if (password != "admin")
    {
        document.getElementById('usernameDemo').innerHTML ="";
        document.getElementById('passwordDemo').innerHTML ="";
        document.getElementById('passwordDemo').innerHTML ="کد ملی نامعتبر";
        return false
    }
    else if (username != "admin" && password != "admin")
    {
        document.getElementById('usernameDemo').innerHTML ="";
        document.getElementById('passwordDemo').innerHTML ="";
        document.getElementById('usernameDemo').innerHTML ="شماره دانشجویی نامعتبر";
        document.getElementById('passwordDemo').innerHTML ="کد ملی نامعتبر";
        return false

    }
}