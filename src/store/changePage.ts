import React from "react";
import { observable } from "mobx";

const changePage = observable({
    signin: false,
    login: "",
    pass: "",
    login_: "",
    password_: "",
    async getSignIn() {
        await fetch('http://localhost:5000/signin')
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.login_ = data.login;
                this.password_ = data.password;
            })
    },
    loginOnChange(value: string) {
        this.login = value;
    },
    passOnChange(value: string) {
        this.pass = value;
    },
    async signinOnClick() {
        await this.getSignIn();
        if (this.login === "" || this.pass === "")
            alert("Заполните все поля");
        else if (this.login === this.login_
            && this.pass === this.password_)
            this.signin = true;
        else alert("Неверный логин или пароль");
    }
});

export default changePage;