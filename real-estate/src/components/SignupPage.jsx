import { useState } from 'react';
import { useForm} from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './SignupPage.css';

const SignupPage=()=> {
  const [isLogin, setIsLogin] = useState(false);
  const [userdata,setData]=useState({});
  const navigate=useNavigate(); 
  const{
    register: signupRegister,
    handleSubmit: signupHandleSubmit,
    formState: { errors: signupErrors },
    reset: resetSignup,
}=useForm();

  const{
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors },
    reset: resetLogin,
  }=useForm();

  const onSignupSubmit =async (data) => {
    try {
        const response = await axios.post("http://localhost:9000/details",data);
        console.log("Registered", response.data);
    } catch (error) {
        console.error("Error during registration", error);
    }
    resetSignup();
  };

  const onLoginSubmit = async(data) => {
    try {
        const response = await axios.post("http://localhost:9000/api/login/loginUser",data);
        if (response.data.email === data.email && response.data.password === data.password) {
            setData(response.data)
            navigate('/');  // Redirect to home page upon successful login
        } else {
            alert("Incorrect password or email" <br><Link to="/fogotpassword">Forgot Password</Link>);
        }
    } catch (error) {
        console.error("Error during login", error);
    }
    
    resetLogin();
    };


  return (
    <>
        <section className='signup-form-bg'>
            <div className="signup-form">
                <div className='formheader'>
                    <h1>{isLogin ? 'Login' : 'Signup'}</h1>
                </div>
            {isLogin ? (
                <form onSubmit={loginHandleSubmit(onLoginSubmit)} className="forLoginForm">
                    <div>
                        <label htmlFor="usermail"><img src="./src/images/mail.svg" alt="error" width={20} height={30}/></label>
                        <input type="email" name='usermail' placeholder="Email" {...loginRegister("email", { required: true })}/>
                    </div>
                        {loginErrors.email && <span>This field is required</span>}
                    <div>
                        <label htmlFor="userpassword"><img src="./src/images/password.svg" alt="error" width={20} height={30}/></label>
                        <input type="password" name='userpassword' placeholder="Password"{...loginRegister("password", { required: true })}/> 
                    </div>
                        {loginErrors.password && <span>This field is required</span>}
                    <button type="submit">Login</button>
                    <p onClick={() => setIsLogin(false)} style={{fontSize:"small"}}>Don't have an account? Signup</p>
                </form>
            ) : (
                <form onSubmit={signupHandleSubmit(onSignupSubmit)} className="forSignupForm">
                    <div>
                        <label htmlFor="username"><img src="./src/images/name.svg" alt="error" width={15} height={20}/></label>
                        <input type="text" name='username' placeholder="username" {...signupRegister("username", { required: true })}/>
                    </div>
                    {signupErrors.name && <span>This field is required</span>}
                    <div>
                        <label htmlFor="userphnnumber"><img src="./src/images/mobilenumber.svg" alt="error" width={15} height={20}/></label>
                        <input type="tel" name='userphnnumber' placeholder="Mobile Number" {...signupRegister("mobilenumber", { required: true, minLength: 10, maxLength: 15 })}/>
                    </div>
                    {signupErrors.mobile && <span>Must be a valid mobile number</span>}
                    <div>
                        <label htmlFor="usermail"><img src="./src/images/mail.svg" alt="error" width={15} height={20}/></label>
                        <input type="email" name='usermail' placeholder="Email" {...signupRegister("email", { required: true })}/>
                    </div>
                    {signupErrors.email && <span>This field is required</span>}
                    <div>
                        <label htmlFor="userpassword"><img src="./src/images/password.svg" alt="error" width={15} height={20}/></label>
                        <input type="password" name='userpassword' placeholder="Password" {...signupRegister("password", { required: true })}/>
                    </div>
                    {signupErrors.password && <span>This field is required</span>}

                    <div id="role-selection">
                        <input type="radio" value="buyer" {...signupRegister("role", { required: true })} />
                        <label>Buyer</label>
                        <input type="radio" value="seller" {...signupRegister("role")} />
                        <label>Seller</label>
                        <input type="radio" value="agent" {...signupRegister("role")} />
                        <label>Agent</label>
                    </div>
                    {signupErrors.role && <span>Select a role</span>}

                    <button type="submit" >Signup</button>
                    <p onClick={() => setIsLogin(true)}>Already have an account? Login</p>
                </form>
            )}
            </div>
        </section>
    </>
  );
}

export default SignupPage;