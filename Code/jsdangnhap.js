// login.js
const accounts = {
    admin: {
        password: "123",
        role: "admin"
    }
};

function login(username, password) {
    if (accounts[username] && accounts[username].password === password) {
        return true;
    } else {
        return false;
    }
}
document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (login(username, password)) {
        alert("Đăng nhập thành công!");
    } else {
        alert("Tài khoản hoặc mật khẩu không đúng!");
    }
});


