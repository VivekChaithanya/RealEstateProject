import './NavBar.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const NavBar=()=>{
    const [showProfile,setShowProfile]=useState(false);
    const [hasPosted, setHasPosted] = useState(false);
    const navigate = useNavigate();
    const MyProfileOpen=()=>{
        setShowProfile(true)
    }
    const MyProfileClose=()=>{
        setShowProfile(false)
    }

    const Logout = () => { 
        useEffect(() => {
            localStorage.removeItem('userRole');
            navigate('/');
        }, []);
        return ;
    };


    const handlePostProperty = async () => {
        if (!hasPosted) {
            try {
                await axios.post('http://localhost:9000/userdetails/add',postData);
                    console.log("Property posted successfully!");
                setHasPosted(true);
            } catch (error) {
                console.error("Error posting property", error);
            }
        } else {
            console.log("Property has already been posted.");
        }
    };
    return(
        <>
            <header>
                <nav className="navbar-rs">
                    <div className="logo-otherpages">
                        <Link to='/'>
                            <img src="./src/images/logo-transparent.jpg" width={140} height={50} alt="error" />
                        </Link>
                        <div>
                            <Link to='/buy' style={{padding:30, textDecoration:"none",color:"#862d86"}}>Buy</Link>
                            <Link to='/rent' style={{padding:30, textDecoration:"none",color:"#862d86"}}>Rent</Link>
                            <Link to='/agents' style={{padding:30, textDecoration:"none",color:"#862d86"}}>Agent</Link>
                        </div>
                    </div>
                    <div className="userprofile">
                        <div>
                            <Link to='/postproperty'>
                                <button id='postbutton'>Post Property</button>
                            </Link>
                        </div>
                        <div>
                            <img src="./src/images/user.svg" alt="error" width={25} height={30} style={{paddingBottom:"4px"}} onClick={MyProfileOpen}/>
                            {showProfile && (<div className='profile-box'>
                                <div className='p-closeicon'>
                                    <span className='login-sign'><Link to="/signuppage" style={{padding:20, textDecoration:"none",color: "#3a053a"}}>signup/login</Link></span>
                                    <span onClick={MyProfileClose}><img src="./src/images/close.svg" alt="error" width={20} height={35}/></span>
                                </div>
                                <div className='p-nav'>
                                    <Link to="/userprofile" style={{ textDecoration:"none",color: "#3a053a"}}><span><img src="./src/images/userprofile.svg" alt="error" width={25} height={35} onClick={handlePostProperty}/>Profile</span></Link>
                                    <Link to="/mypost" style={{textDecoration:"none",color: "#3a053a"}}><span><img src="./src/images/post.svg" alt="error" width={25} height={35}/>MyPosts</span></Link>
                                    <Link to="/notification" style={{textDecoration:"none",color: "#3a053a"}}><span><img src="./src/images/notif.svg" alt="error" width={25} height={35}/>Notification</span></Link>
                                </div>
                                <div className='divlogout'>
                                    <button className='logoutbtn' onClick={Logout}>Logout</button>
                                </div>
                            </div>)}
                        </div>
                    </div>              
                </nav>
            </header>
        </>
    )
}
export default NavBar