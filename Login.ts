class Login {
    protected cekUsername = 'user1';
    protected cekPassword = 'user1';
    protected inputUsername;
    protected inputPassword;

    constructor(username:string, password:string) {
        this.inputUsername = username;
        this.inputPassword = password;
    }

    cekLoginStatus() {
        if(this.inputUsername == this.cekUsername && this.inputPassword == this.cekPassword) {
            console.log("barhasil login");
            window.location.href = "home.html";
        } else {
            alert("Maaf username / password anda tidak sesuai!");
            window.location.href = "login.html";
        }
    }

}