import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mobile from "../assets/mobile.jpg";
import NavBar from "./NavBar";
import {Link} from 'react-router-dom'
const Agents = () => {
  //form for agents
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSliderOpen(false); // Close slider if open
  };
  const [showModal, setShowModal] = useState(false);

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
    } else {
      setFormErrors(errors);
    }
  };

  const navigate = useNavigate();


  return (
    <>
    <NavBar/>
      <section className="property-sale-box">
        <div className="property-sale-left">
          <div className="prop-result">
            <div className="experience">
              <h3 className="prop-hyd">
                Real Estate Agents/Property Dealers in Hyderabad
              </h3>

              {/* first rental property details */}
              <section>
                <div
                  className="container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <div
                    className="left-image"
                    style={{ flex: 1, marginRight: "20px" }}
                  >
                    <img
                      src="https://www.chandigarhhelp.com/wp-content/uploads/2019/04/Top-Property-Dealers-in-Chandigarh.png"
                      className="grove-img"
                      alt="Residential Plot"
                      style={{
                        width: "100%",
                        height: "150px",
                        cursor: "pointer",
                      }}
                      onClick={openModal}
                    />
                  </div>
                  <div className="right-content">
                    <h4>GRA Real Estate</h4>
                    <h2 className="right-heading">Shankarpally Hyderabad</h2>

                    <p>Operating Areas: Zaheerbad also deals in Rangareddy</p>
                    <p>Interested In Buy, Sell, Rent/PG</p>
                    <div className="post-date">
                      GRA Real Estate is a renowned name in the industry that
                      you can trust in the real estate industry of Hyderabad,
                      Telangana (India).
                    </div>
                  </div>
                </div>
              </section>

              {/* contact details */}
              <section className="form-prop">
                <div className="contact-details">
                  <button className="agent-btn" onClick={handleShowModal}>
                    <FaEnvelope className="agent-icon" /> Send Email
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

              {/* second rental property details */}
              <section>
                <div
                  className="container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <div
                    className="left-image"
                    style={{ flex: 1, marginRight: "20px" }}
                  >
                    <img
                      src="https://mla9ijlzmzyh.i.optimole.com/NkTnjSg-zDJK-yuv/w:1024/h:683/q:90/https://kgconstructionudaipur.com/wp-content/uploads/2022/04/Add-a-subheading-1.png"
                      className="grove-img"
                      alt="Residential Plot"
                      style={{
                        width: "100%",
                        height: "250px",
                        cursor: "pointer",
                      }}
                      onClick={openModal}
                    />
                  </div>
                  <div className="right-content">
                    <h4>Sri Sai Balaji Real Estate & Constructions</h4>
                    <h2 className="right-heading">Kondapur Hyderabad</h2>
                    <p><strong>Operating Areas:</strong> Sadasivpet, Zaheerabad also deals in Anantapur, Kurnool, Mahbubnahar, Medak, Nagarkurnool, Secunderabad, Suryapet, Tirupati, Delhi 
                    Faizabad, Goa, Warangal, Rangareddy.....</p>
                    <p>Interested In Buy, Sell, Rent/PG</p>
                    <div className="post-date">
                    We are offering real estate services for buying property, sell property, real estate agent, and rental property. 
                    With a team of professional realtors. Our team comprises real estate brokers, real estate agents, property dealer
                    </div>
                  </div>
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

              {/* third property  */}
               <section>
                <div
                  className="container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <div
                    className="left-image"
                    style={{ flex: 1, marginRight: "20px" }}
                  >
                    <img
                      src="https://blog.hdestates.com/wp-content/uploads/2020/04/HD-Real-Estate-Photography-scaled.jpg"
                      className="grove-img"
                      alt="Residential Plot"
                      style={{
                        width: "100%",
                        height: "22 0px",
                        cursor: "pointer",
                      }}
                      onClick={openModal}
                    />
                  </div>
                  <div className="right-content">
                    <h4>SG Real Estate</h4>
                    <h2 className="right-heading">Patancheru Hyderabad</h2>

                    <p>Operating Areas: Zaheerabad also deals in Medak, Secunderabad, Rangareddy, Sangareddy </p>
                    <p>Interested In Buy, Sell</p>
                    <div className="post-date">
                     We are one of the leading real estate agent. We understanding the requirement of our customers and 
                     providing relevant property options. Dealing in all type of properties for buy, sell and rent etc.
                    </div>
                  </div>
                </div>
              </section>

              {/* contact details */}
              <section className="form-prop">
                <div className="contact-details">
                  <button className="agent-btn" onClick={handleShowModal}>
                    <FaEnvelope className="agent-icon" /> Send Email
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
                            <p>SG Real Estates, Hyderabad</p>
                            <p>[Builder] / +91-90300xxxxx</p>
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

            {/* right info container advertisements  */}

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
                  Get access to Buyer/Tenant details & connect easily
                </p>
                <div>
                  <Link to='/postproperty'>
                    <button id='postbutton'>Post Property</button>
                  </Link>
                </div>
              </div>

              {/* banner design */}
              <div className="right-banner">
              <a href="https://www.excelr.com/">
                  <h3>Excelr Training Institute</h3>
                  <div className="right-banner-text">
                    <div className="banner-info">
                      <p>
                        Click Any Where to redirect to excelr website !!
                      </p>
                      <button className="btn2">Enquiry</button>
                    <div>
                      <img
                        src={mobile}
                        alt="mobile Image"
                        className="banner-info"
                      />
                    </div>
                  </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agents;
