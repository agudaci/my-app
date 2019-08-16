import React from 'react'

const Register = (props) => {
    return <div>
        <input type="text" id = "e_mail" placeholder="E-mail" /> <br />
        <input type="password" id = "new_password" placeholder="Password" /> <br />
        <input type="password" id = "repeat_password" placeholder="Repeat Password" /> <br />
        <button>Register</button>


    </div>
}
export default Register