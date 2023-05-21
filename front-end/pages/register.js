import React, { useState } from 'react'

function Register()
{

    const [first_name,setfirst_name]=useState("")
    const [last_name, setlast_name]=useState("")
    const [email, setemail]=useState("")
    const [password,setpassword]=useState("")
    const [password_confirmation,setpassword_confirmation]=useState("")


    async function Singup()
    {
        let item ={first_name,last_name,email,password,password_confirmation}

        let restul = await fetch('https://localhost:9000/user/singup',{
            method:'POST',
            mode: 'no-cors',
            headers:{
                "Content-Type":"applicaltion/json",
                "Accept":"applicaltion/json"
            },
            body:JSON.stringify(item)
        })
        restul = await restul.json()
        console.warn("result", restul)
        localStorage.setItem('user-info', JSON.stringify(restul))
    }

 return(
    <div class="content">
        <div class="brand">
            <a class="link" href="index.html">AdminCAST</a>
        </div>
        <form id="register-form" action="javascript:;" method="post">
            <h2 class="login-title">Sign Up</h2>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <input class="form-control" type="text" value={first_name} onChange={(e)=>setfirst_name(e.target.value)} name="first_name" placeholder="First Name"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <input class="form-control" type="text" value={last_name} onChange={(e)=>setlast_name(e.target.value)} name="last_name" placeholder="Last Name"/>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <input class="form-control" type="email" value={email} onChange={(e)=>setemail(e.target.value)} name="email" placeholder="Email" autocomplete="off"/>
            </div>
            <div class="form-group">
                <input class="form-control" id="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} name="password" placeholder="Password"/>
            </div>
            <div class="form-group">
                <input class="form-control" type="password" value={password_confirmation} onChange={(e)=>setpassword_confirmation(e.target.value)} name="password_confirmation" placeholder="Confirm Password"/>
            </div>
            <div class="form-group text-left">
                <label class="ui-checkbox ui-checkbox-info">
                    <input type="checkbox" name="agree"/>
                    <span class="input-span"></span>I agree the terms and policy</label>
            </div>
            <div class="form-group">
                <button class="btn btn-info btn-block" onClick={Singup}>Sign up</button>
            </div>
            <div class="social-auth-hr">
                <span>Or Sign up with</span>
            </div>
            <div class="text-center social-auth m-b-20">
                <a class="btn btn-social-icon btn-twitter m-r-5" href="/#"><i class="fa fa-twitter"></i></a>
                <a class="btn btn-social-icon btn-facebook m-r-5" href="/#"><i class="fa fa-facebook"></i></a>
                <a class="btn btn-social-icon btn-google m-r-5" href="/#"><i class="fa fa-google-plus"></i></a>
                <a class="btn btn-social-icon btn-linkedin m-r-5" href="/#"><i class="fa fa-linkedin"></i></a>
                <a class="btn btn-social-icon btn-vk" href="/#"><i class="fa fa-vk"></i></a>
            </div>
            <div class="text-center">Already a member?
                <a class="color-blue" href="login.html">Login here</a>
            </div>
        </form>
    </div>
 )
    
 

}
  
export default Register