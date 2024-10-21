import React from "react";
import "./FilterHome.css";
import { FaAngleDown, FaAngleUp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mobile from "../assets/mobile.jpg";
import LeftImage from "./LeftImage";
import LeftImage2 from "./LeftImage2";
import PropertyComponent from "./Grove";
import LeftImage3 from "./LeftImage3";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
function FilterHome() {
  //form for agents
  const [showModal, setShowModal] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    isAgent: "",
    agreeToContact: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/;

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email || !emailPattern.test(formData.email)){
      errors.email = "Valid email is required";
    }
    if (!formData.mobile || !mobilePattern.test(formData.mobile)){
      errors.mobile = "Valid mobile number is required";
    }
    if (!formData.agreeToContact) {
      errors.agreeToContact = "You must agree to the terms";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Process form submission if no errors
      console.log("Form submitted", formData);
      handleCloseModal();
    } else {
      setFormErrors(errors);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const navigate = useNavigate();

  return (
    <>
      <NavBar className="navbar" />

      <section className="property-sale-box">
        <div className="property-sale-left">
          <div className="prop-result">
            <div className="experience">
              <h3 className="prop-hyd">Properties for Sale in Hyderabad</h3>
              <p className="prop-para">
                {isExpanded ? (
                  <>
                    Check out 100+ properties for sale in Hyderabad.
                    Realestateindia.com offers you selection of 100% verified
                    1/2/3/4 BHK semi-furnished and fully-furnished properties
                    for sale in Hyderabad at reasonable price. With 7481+
                    Residential Land / Plots, 4655+ Flats / Apartments, 1645+
                    Independent House , 1007+ Farm / Agricultural Land, 583+
                    Commercial Plots, 377+ Villa, 263+ Office Space, 145+ Farm
                    House, 119+ Builder Floor, 102+ Commercial Shops, 64+
                    Industrial Land, 51+ Hotel & Restaurant, 38+ Business
                    Center, 31+ Showrooms, 13+ Warehouse / Godown, 11+ Studio
                    Apartments, 8+ Factory, 5+ Penthouse, 4+ Guest House
                    available for sale in Hyderabad, there's a wide variety to
                    choose from. Find Luxury property near me in posh localities
                    of Hyderabad posted by owner for sale. Explore Now!
                  </>
                ) : (
                  <>
                    Check out 100+ properties for sale in Hyderabad.
                    Realestateindia.com offers you a selection of 100% verified
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

              {/* property details for sale properties in hyderabad */}
              <section>
                <div className="prop-list">
                  {/* Properties images */}
                  <div>
                    <LeftImage />
                  </div>
                </div>
              </section>

              {/* contact details */}
              <section className="form-prop">
                <div className="property-name">
                  <p>Saguna Properties</p>
                </div>

                <div className="contact-details">
                  <button className="agent-btn" onClick={handleShowModal}>
                    <FaEnvelope className="agent-icon" /> Contact Agent
                  </button>
                  <button className="ph-btn" onClick={handleShowModal}>
                    <FaPhoneAlt className="phone-icon" /> View Phone No.
                  </button>
                </div>

                {/* Modal Section */}
                {showModal && (
                  <div className="saguna-modal-overlay">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>To Contact the Advertiser</h3>
                        <button
                          onClick={handleCloseModal}
                          className="close-btn"
                        >
                          X
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="contact-agent">
                            <p>Saguna Properties, Hyderabad</p>
                            <p>Agent / +91-90300xxxxx</p>
                          </div>

                          {/* Name Input */}
                          <input
                            type="text"
                            name="name"
                            className="name-type"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.name && (
                            <span className="error">{formErrors.name}</span>
                          )}

                          {/* Email Input */}
                          <input
                            type="email"
                            name="email"
                            className="name-type"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.email && (
                            <span className="error">{formErrors.email}</span>
                          )}

                          {/* Mobile Input */}
                          <div className="mobile-input">
                            <select
                              name="countryCode"
                              className="code-dropdown"
                              defaultValue="+91"
                            >
                              {/* Add other options here */}
                              <option value="+91">+91 India</option>
                              <option value="+1">+1 United States</option>
                              <option value="+44">+44 United Kingdom</option>
                              <option value="+61">+61 Australia</option>
                              <option value="+81">+81 Japan</option>
                              <option value="+86">+86 China</option>
                              <option value="+49">+49 Germany</option>
                              <option value="+33">+33 France</option>
                              <option value="+39">+39 Italy</option>
                              <option value="+971">
                                +971 United Arab Emirates
                              </option>
                              <option value="+7">+7 Russia</option>
                              <option value="+55">+55 Brazil</option>
                              <option value="+27">+27 South Africa</option>
                              <option value="+82">+82 South Korea</option>
                              <option value="+34">+34 Spain</option>
                              <option value="+46">+46 Sweden</option>
                              <option value="+90">+90 Turkey</option>
                              <option value="+351">+351 Portugal</option>
                              <option value="+48">+48 Poland</option>
                              <option value="+52">+52 Mexico</option>
                              <option value="+62">+62 Indonesia</option>
                              <option value="+64">+64 New Zealand</option>
                              <option value="+47">+47 Norway</option>
                              <option value="+966">+966 Saudi Arabia</option>
                              <option value="+94">+94 Sri Lanka</option>
                              <option value="+92">+92 Pakistan</option>
                              <option value="+20">+20 Egypt</option>
                              <option value="+98">+98 Iran</option>
                              <option value="+880">+880 Bangladesh</option>
                              <option value="+60">+60 Malaysia</option>
                              <option value="+66">+66 Thailand</option>
                              {/* ... */}
                            </select>
                            <input
                              type="text"
                              className="mobileInput"
                              name="mobile"
                              placeholder="Mobile"
                              value={formData.mobile}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          {formErrors.mobile && (
                            <span className="error">{formErrors.mobile}</span>
                          )}

                          {/* Real Estate Question */}
                          <div className="real-estate-question">
                            <p>Are you a real estate agent?</p>
                            <label>
                              <input
                                type="radio"
                                name="isAgent"
                                value="yes"
                                onChange={handleInputChange}
                                required
                              />{" "}
                              Yes
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="isAgent"
                                value="no"
                                onChange={handleInputChange}
                              />{" "}
                              No
                            </label>
                          </div>

                          {/* Agreement Checkbox */}
                          <label className="agreement">
                            <input
                              type="checkbox"
                              name="agreeToContact"
                              checked={formData.agreeToContact}
                              onChange={handleInputChange}
                              required
                            />
                            I agree to be contacted via call, WhatsApp, SMS &
                            email by RealEstateIndia and other advertisers.
                          </label>
                          {formErrors.agreeToContact && (
                            <span className="error">
                              {formErrors.agreeToContact}
                            </span>
                          )}

                          {/* Submit Button */}
                          <button type="submit" className="submit-btn">
                            Get Agent Details
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/*  2nd sale properties highlights */}
              <section>
                <LeftImage2 />
              </section>
              <section className="form-prop">
                <div className="property-name">
                  <p>D FM SOLUTIONS</p>
                  <p>Builder</p>
                </div>

                <div className="contact-details">
                  <button className="agent-btn" onClick={handleShowModal}>
                    <FaEnvelope className="agent-icon" /> Contact Agent
                  </button>
                  <button className="ph-btn" onClick={handleShowModal}>
                    <FaPhoneAlt className="phone-icon" /> View Phone No.
                  </button>
                </div>

                {/* Modal Section */}
                {showModal && (
                  <div className="saguna-modal-overlay">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>To Contact the Advertiser</h3>
                        <button
                          onClick={handleCloseModal}
                          className="close-btn"
                        >
                          X
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="contact-agent">
                            <p>D FM SOLUTIONS, Hyderabad</p>
                            <p>Agent / +91-90300xxxxx</p>
                          </div>

                          {/* Name Input */}
                          <input
                            type="text"
                            name="name"
                            className="name-type"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.name && (
                            <span className="error">{formErrors.name}</span>
                          )}

                          {/* Email Input */}
                          <input
                            type="email"
                            name="email"
                            className="name-type"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.email && (
                            <span className="error">{formErrors.email}</span>
                          )}

                          {/* Mobile Input */}
                          <div className="mobile-input">
                            <select
                              name="countryCode"
                              className="code-dropdown"
                              defaultValue="+91"
                            >
                              {/* Add other options here */}
                              <option value="+91">+91 India</option>
                              <option value="+1">+1 United States</option>
                              <option value="+44">+44 United Kingdom</option>
                              <option value="+61">+61 Australia</option>
                              <option value="+81">+81 Japan</option>
                              <option value="+86">+86 China</option>
                              <option value="+49">+49 Germany</option>
                              <option value="+33">+33 France</option>
                              <option value="+39">+39 Italy</option>
                              <option value="+971">
                                +971 United Arab Emirates
                              </option>
                              <option value="+7">+7 Russia</option>
                              <option value="+55">+55 Brazil</option>
                              <option value="+27">+27 South Africa</option>
                              <option value="+82">+82 South Korea</option>
                              <option value="+34">+34 Spain</option>
                              <option value="+46">+46 Sweden</option>
                              <option value="+90">+90 Turkey</option>
                              <option value="+351">+351 Portugal</option>
                              <option value="+48">+48 Poland</option>
                              <option value="+52">+52 Mexico</option>
                              <option value="+62">+62 Indonesia</option>
                              <option value="+64">+64 New Zealand</option>
                              <option value="+47">+47 Norway</option>
                              <option value="+966">+966 Saudi Arabia</option>
                              <option value="+94">+94 Sri Lanka</option>
                              <option value="+92">+92 Pakistan</option>
                              <option value="+20">+20 Egypt</option>
                              <option value="+98">+98 Iran</option>
                              <option value="+880">+880 Bangladesh</option>
                              <option value="+60">+60 Malaysia</option>
                              <option value="+66">+66 Thailand</option>
                              {/* ... */}
                            </select>
                            <input
                              type="text"
                              className="mobileInput"
                              name="mobile"
                              placeholder="Mobile"
                              value={formData.mobile}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          {formErrors.mobile && (
                            <span className="error">{formErrors.mobile}</span>
                          )}

                          {/* Real Estate Question */}
                          <div className="real-estate-question">
                            <p>Are you a real estate agent?</p>
                            <label>
                              <input
                                type="radio"
                                name="isAgent"
                                value="yes"
                                onChange={handleInputChange}
                                required
                              />{" "}
                              Yes
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="isAgent"
                                value="no"
                                onChange={handleInputChange}
                              />{" "}
                              No
                            </label>
                          </div>

                          {/* Agreement Checkbox */}
                          <label className="agreement">
                            <input
                              type="checkbox"
                              name="agreeToContact"
                              checked={formData.agreeToContact}
                              onChange={handleInputChange}
                              required
                            />
                            I agree to be contacted via call, WhatsApp, SMS &
                            email by RealEstateIndia and other advertisers.
                          </label>
                          {formErrors.agreeToContact && (
                            <span className="error">
                              {formErrors.agreeToContact}
                            </span>
                          )}

                          {/* Submit Button */}
                          <button type="submit" className="submit-btn">
                            Get Agent Details
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </section>
              {/* ----------------3rd property details----------------------------- */}
              <section>
                {/* <LeftImage3 /> */}
                <LeftImage3 />
              </section>
              <section className="form-prop">
                <div className="property-name">
                  <p>VVR Property Consultants & Dealers</p>
                  <p>Agent</p>
                </div>

                <div className="contact-details">
                  <button className="agent-btn" onClick={handleShowModal}>
                    <FaEnvelope className="agent-icon" /> Contact Agent
                  </button>
                  <button className="ph-btn" onClick={handleShowModal}>
                    <FaPhoneAlt className="phone-icon" /> View Phone No.
                  </button>
                </div>

                {/* Modal Section */}
                {showModal && (
                  <div className="saguna-modal-overlay">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>To Contact the Advertiser</h3>
                        <button
                          onClick={handleCloseModal}
                          className="close-btn"
                        >
                          X
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="contact-agent">
                            <p>VVR Property Consultants & Dealers, Hyderabad</p>
                            <p>Agent / +91-90300xxxxx</p>
                          </div>

                          {/* Name Input */}
                          <input
                            type="text"
                            name="name"
                            className="name-type"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.name && (
                            <span className="error">{formErrors.name}</span>
                          )}

                          {/* Email Input */}
                          <input
                            type="email"
                            name="email"
                            className="name-type"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.email && (
                            <span className="error">{formErrors.email}</span>
                          )}

                          {/* Mobile Input */}
                          <div className="mobile-input">
                            <select
                              name="countryCode"
                              className="code-dropdown"
                              defaultValue="+91"
                            >
                              {/* Add other options here */}
                              <option value="+91">+91 India</option>
                              <option value="+1">+1 United States</option>
                              <option value="+44">+44 United Kingdom</option>
                              <option value="+61">+61 Australia</option>
                              <option value="+81">+81 Japan</option>
                              <option value="+86">+86 China</option>
                              <option value="+49">+49 Germany</option>
                              <option value="+33">+33 France</option>
                              <option value="+39">+39 Italy</option>
                              <option value="+971">
                                +971 United Arab Emirates
                              </option>
                              <option value="+7">+7 Russia</option>
                              <option value="+55">+55 Brazil</option>
                              <option value="+27">+27 South Africa</option>
                              <option value="+82">+82 South Korea</option>
                              <option value="+34">+34 Spain</option>
                              <option value="+46">+46 Sweden</option>
                              <option value="+90">+90 Turkey</option>
                              <option value="+351">+351 Portugal</option>
                              <option value="+48">+48 Poland</option>
                              <option value="+52">+52 Mexico</option>
                              <option value="+62">+62 Indonesia</option>
                              <option value="+64">+64 New Zealand</option>
                              <option value="+47">+47 Norway</option>
                              <option value="+966">+966 Saudi Arabia</option>
                              <option value="+94">+94 Sri Lanka</option>
                              <option value="+92">+92 Pakistan</option>
                              <option value="+20">+20 Egypt</option>
                              <option value="+98">+98 Iran</option>
                              <option value="+880">+880 Bangladesh</option>
                              <option value="+60">+60 Malaysia</option>
                              <option value="+66">+66 Thailand</option>
                              {/* ... */}
                            </select>
                            <input
                              type="text"
                              className="mobileInput"
                              name="mobile"
                              placeholder="Mobile"
                              value={formData.mobile}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          {formErrors.mobile && (
                            <span className="error">{formErrors.mobile}</span>
                          )}

                          {/* Real Estate Question */}
                          <div className="real-estate-question">
                            <p>Are you a real estate agent?</p>
                            <label>
                              <input
                                type="radio"
                                name="isAgent"
                                value="yes"
                                onChange={handleInputChange}
                                required
                              />{" "}
                              Yes
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="isAgent"
                                value="no"
                                onChange={handleInputChange}
                              />{" "}
                              No
                            </label>
                          </div>

                          {/* Agreement Checkbox */}
                          <label className="agreement">
                            <input
                              type="checkbox"
                              name="agreeToContact"
                              checked={formData.agreeToContact}
                              onChange={handleInputChange}
                              required
                            />
                            I agree to be contacted via call, WhatsApp, SMS &
                            email by RealEstateIndia and other advertisers.
                          </label>
                          {formErrors.agreeToContact && (
                            <span className="error">
                              {formErrors.agreeToContact}
                            </span>
                          )}

                          {/* Submit Button */}
                          <button type="submit" className="submit-btn">
                            Get Agent Details
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>

            <div className="right-container">
              {/* right content */}
              <div className="right">
                <div className="right-prop">
                  <h3>
                    Looking to <span className="span-prop">Sell/Rent</span> Your
                    Property?
                  </h3>
                </div>
                <p className="right-para">
                  Get access to Buyer/Tenant details & connnect easily
                </p>
                <div>
                  <Link to='/postproperty'>
                    <button id='postbutton'>Post Property</button>
                  </Link>
                </div>
              </div>

              {/* banner design */}
              <div className="right-banner">
                <a href="https://www.realestateindia.com/download-mobile-apps.htm">
                  <h3>Pocket RealEstateIndia</h3>
                  <div className="right-banner-text">
                    <div className="banner-info">
                      <p>
                        Access your property deals with smart mobile App,
                        Anywhere Anytime !!
                      </p>
                      <button className="btn2">Download App Now</button>
                    </div>
                    <div>
                      <img
                        src={mobile}
                        alt="mobile Image"
                        className="banner-info"
                      ></img>
                    </div>
                  </div>
                </a>
              </div>

              {/* banner design 2 */}
              <PropertyComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FilterHome;
