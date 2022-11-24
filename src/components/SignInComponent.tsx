import React, { useState, useEffect } from 'react';
import {changePage} from '../store/';
import { observer } from 'mobx-react';

function SignInComponent() {
    return (
        <div className="SignIn">
            <input type="text" id="login" name="login" placeholder="Логин" required autoComplete="on"
                value={changePage.login} onChange={({ target }) => changePage.loginOnChange(target.value)}></input>
            <input type="password" id="pass" name="pass" placeholder="Пароль" required autoComplete="on"
                value={changePage.pass} onChange={({ target }) => changePage.passOnChange(target.value)}></input>
            <button onClick={()=>changePage.signinOnClick()}>Войти</button>
        </div>
    )
}

export default observer(SignInComponent);