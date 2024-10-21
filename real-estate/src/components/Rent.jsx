import React from "react";
import { FaAngleDown, FaAngleUp, FaEnvelope, FaPhoneAlt  } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RentInfo1 from "./RentInfo1";
import NavBar from "./NavBar";
function Rent() {
  //form for agents
  const [isExpanded, setIsExpanded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    isAgent: "",
    agreeToContact: false,
  });


  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/;

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.mobile || !mobilePattern.test(formData.mobile)) {
      errors.mobile = "Valid mobile number is required";
    }
    if (!formData.agreeToContact) {
      errors.agreeToContact = "You must agree to the terms";
    }
    return errors;
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <NavBar/>
      {/* <section className="navsection"> */}
        <div className="search">
          <div className="prop-result">
            <div className="experience">
              <h3 className="prop-hyd">Properties for Rent in Hyderabad</h3>
              <p className="prop-para">
                {isExpanded ? (
                  <>
                Check out 1820+ properties for rent in Hyderabad. Realestateindia.com offers you selection of 100% verified 1/2/3/4 BHK semi-furnished and fully-furnished rental properties in Hyderabad at reasonable price. 
                With 610+ Flats / Apartments, 444+ Office Space, 219+ Independent House , 131+ Commercial Shops, 108+ Warehouse / Godown, 50+ Showrooms, 43+ Commercial Plots, 40+ Builder Floor, 35+ Residential Land / Plots,
                 23+ Farm / Agricultural Land, 21+ Hotel & Restaurant, 19+ Business Center, 19+ Villa, 16+ Industrial Land, 12+ Studio Apartments, 9+ Penthouse, 8+ Farm House, 
                7+ Guest House, 6+ Factory available for rent in Hyderabad, there's a wide variety to choose from. Find Luxury rental property 'near me' in posh localities in Hyderabad posted by owner. Explore Now!!
                  </>
                ) : (
                  <>
                    Check out 500+ properties for Rent in Hyderabad.
                    Realestateindia.com offers you a selection of 100% verified 1/2/3/4 BHK semi-furnished and fully-furnished rental
                    properties...
                  </>
                )}
              </p>
              <button className="toggle-btn" onClick={toggleExpanded}>
                {isExpanded ? (
                  <>
                    Less <FaAngleUp className="toggle-icon" />
                  </>
                ) : (
                  <>
                    More <FaAngleDown className="toggle-icon" />
                  </>
                )}
              </button>

            {/* first rental property details */}
            <section>
              <div>
                <RentInfo1/>
              </div>
            </section>
            </div>
          </div>
        </div>
      {/* </section> */}
    </>
  );
}

export default Rent;
