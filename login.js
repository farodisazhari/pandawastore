var Login = /** @class */ (function () {
    function Login(username, password) {
        this.cekUsername = 'user1';
        this.cekPassword = 'user1';
        this.inputUsername = username;
        this.inputPassword = password;
    }
    Login.prototype.cekLoginStatus = function () {
        if (this.inputUsername == this.cekUsername && this.inputPassword == this.cekPassword) {
            console.log("barhasil login");
            window.location.href = "home.html";
        }
        else {
            alert("Maaf username / password anda tidak sesuai!");
            window.location.href = "login.html";
        }
    };
    return Login;
}());
