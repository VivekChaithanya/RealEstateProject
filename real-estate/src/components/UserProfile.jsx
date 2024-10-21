import React, { useState, useEffect } from "react";
import './UserProfile.css';
import axios from "axios"
import NavBar from "./NavBar";
const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState({
        uimage: "",
        fullname: "",
        username: '',
        email: '',
        cnumber: "",
        dob: "",
        gender: "",
        caddress: "",
        paddress: ""
    });
    const [tempDetails, setTempDetails] = useState({
        uimage: "",
        fullname: "",
        username: '',
        email: '',
        cnumber: "",
        dob: "",
        gender: "",
        caddress: "",
        paddress: ""
    });

    // Simulating an API call to fetch user details
    useEffect(() => {
        const fetchedUserDetails = {
            uimage: "./src/images/Duserimage.jpg",
            fullname: "",
            username: "",
            email: "",
            cnumber: "",
            dob: "",
            gender: "",
            caddress: "",
            paddress: ""
        };

        setUserDetails(fetchedUserDetails);
        setTempDetails(fetchedUserDetails);
    }, []);
    // axios.post('http://loaclhots:9000/userdetails/add',userDetails).then((posRes)=>{
    //    confirm("inserted");
    // },(errRes)=>{
    //     alert("not inserted..!");
    // })

    const profilehandleChange = (e) => {

        const { name, value, type, files } = e.target;
        if (type === "file") {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempDetails({ ...tempDetails, uimage: reader.result });
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setTempDetails({ ...tempDetails, [name]: value });
        }
    };

    
    // const profilehandleSubmit = (e) => {
    //     e.preventDefault();
    //     setUserDetails(tempDetails);
    //     setIsEditing(false);
    // };
    
    const profilehandleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("uimage", tempDetails.uimage);
        formData.append("fullname", tempDetails.fullname);
        formData.append("username", tempDetails.username);
        formData.append("email", tempDetails.email);
        formData.append("cnumber", tempDetails.cnumber);
        formData.append("dob", tempDetails.dob);
        formData.append("gender", tempDetails.gender);
        formData.append("caddress", tempDetails.caddress);
        formData.append("paddress", tempDetails.paddress);

        try {
            // Replace the URL with your API endpoint
            const response = await axios.put('http://localhost:9000//updateUserdetails/{id}', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.error("Error updating user profile", error);
        }
        setUserDetails(tempDetails);
        setIsEditing(false);
    };

    const profilehandleEdit = () => {
        setTempDetails(userDetails);
        setIsEditing(true);
    };

    return (
        <>
            <div>
                <NavBar></NavBar>
            </div>
            <section className="profile">
                <h4>Profile</h4>
                {!isEditing ? (
                    <div className="userdetailsb">
                        <span onClick={profilehandleEdit}>
                            <img src="./src/images/editbutton.svg" alt="error" width={20} height={20} />
                        </span>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={userDetails.uimage} alt="User" width={150} height={150} className="userpimage" />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="name">Name:</label></td>
                                    <td><input type="text" id="name" value={userDetails.fullname} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="username">UserName:</label></td>
                                    <td><input type="text" id="username" value={userDetails.username} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="useremail">Email:</label></td>
                                    <td><input type="email" id="useremail" value={userDetails.email} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="contactnumber">Contact Number:</label></td>
                                    <td><input type="tel" id="contactnumber" value={userDetails.cnumber} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="dob">Date of Birth:</label></td>
                                    <td><input type="date" id="dob" value={userDetails.dob} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="gender">Gender:</label></td>
                                    <td className="gender-c">
                                        <input type="radio" id="m" name="gender" value="Male" checked={userDetails.gender === "Male"} readOnly />
                                        <label htmlFor="m">Male</label><br />
                                        <input type="radio" id="f" name="gender" value="Female" checked={userDetails.gender === "Female"} readOnly />
                                        <label htmlFor="f">Female</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="address">Current Address:</label></td>
                                    <td><input type="text" id="address" value={userDetails.caddress} readOnly /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="paddress">Permanent Address:</label></td>
                                    <td><input type="text" id="paddress" value={userDetails.paddress} readOnly /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="userdetailsedit">
                        <form onSubmit={profilehandleSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="profilimage">Profile Photo:</label>
                                        </td>
                                        <td>
                                            <input type="file" src={tempDetails.uimage} id="profileimage" accept="image/*"  onChange={profilehandleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="name">Name:</label></td>
                                        <td><input type="text" id="name" name="fullname" value={tempDetails.fullname} onChange={profilehandleChange} required /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="username">UserName:</label></td>
                                        <td><input type="text" id="username" name="username" value={tempDetails.username} readOnly /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="useremail">Email:</label></td>
                                        <td><input type="email" id="useremail" name="email" value={tempDetails.email} readOnly /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="contactnumber">Contact Number:</label></td>
                                        <td><input type="tel" id="contactnumber" name="cnumber" value={tempDetails.cnumber} required onChange={profilehandleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="dob">Date of Birth:</label></td>
                                        <td><input type="date" id="dob" name="dob" value={tempDetails.dob} required onChange={profilehandleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="gender">Gender:</label></td>
                                        <td className="gender-c">
                                            <input type="radio" id="m" name="gender" value="Male" checked={tempDetails.gender === "Male"} required onChange={profilehandleChange} />
                                            <label htmlFor="m">Male</label><br />
                                            <input type="radio" id="f" name="gender" value="Female" checked={tempDetails.gender === "Female"} required onChange={profilehandleChange} />
                                            <label htmlFor="f">Female</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="address">Current Address:</label></td>
                                        <td><input type="text" id="address" name="caddress" value={tempDetails.caddress} required onChange={profilehandleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="paddress">Permanent Address:</label></td>
                                        <td><input type="text" id="paddress" name="paddress" value={tempDetails.paddress} required onChange={profilehandleChange} /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button id="ur-btn" type="submit">Save</button>
                        </form>
                    </div>
                )}
            </section>
        </>
    );
}

export default UserProfile;
