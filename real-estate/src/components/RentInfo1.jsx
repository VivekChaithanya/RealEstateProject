import React, { useState } from "react";
import { MdFavoriteBorder, MdLocationPin } from "react-icons/md";
import { FaAngleLeft, FaAngleRight, FaPhoneAlt } from "react-icons/fa";
import "./RentInfo1.css";

const RentInfo1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [errors, setErrors] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    terms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
        terms: false,
      });
      const response = await axios.post("https://localhost:9000/notifpost/add", formData); 
      setIsFormOpen(false);
      setIsSuccessMessageVisible(true);
      setTimeout(() => setIsSuccessMessageVisible(false), 3000);
    }
  };

  const images = "";

  const openSlider = () => setIsSliderOpen(true);
  const closeSlider = () => setIsSliderOpen(false);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSliderOpen(false); // Close slider if open
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.terms) newErrors.terms = "You must agree to the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
        onClick={openModal}
      >
        <div className="left-image" style={{ flex: 1, marginRight: "20px" }}>
          <img
            src="https://reliablewater247.com/wp-content/uploads/2016/05/hotel-restaurant-featured.jpg"
            className="grove-img"
            alt="Residential Plot"
            style={{ width: "100%",  height:"220px", cursor: "pointer" }}
            // Open modal on image click
          />
        </div>

        <div className="right-content">
          <div>
            <span>
              <p className="pro-price">{"\u20B9"} 12 Lac</p>
            </span>
          </div>
          <h4>Hotel</h4>
          <h2 className="right-heading">
            35000 Sq.ft. Hotel & Restaurant for Rent
          </h2>
          {/* <div>
            <span className="fav-icon">
              <MdFavoriteBorder />
            </span>
          </div> */}
          <p>Location: </p>
          <div className="post-date">Suitable 35000 Sq.ft. Hotel & Restaurant is available for rent in the prime location of Kondapur, 
            Hyderabad with all types of basic amenties and facilities in Rs. 12 Lac 
            affordable rate for more please contact in given number.</div>
        </div>
      </div>

      {/* Property Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="grove-modal-content">
            <button className="close-btn" onClick={closeModal} >X</button>
            <div className="details-page">
              <div className="property-header">
                <h1>Hotel & Restaurant for Rent</h1>
                <p><MdLocationPin className="grove-icon" /> KOndapur,Hyderabad</p>
                <p> 35000 Sq.ft. </p>
                <div>
                  <p><button className="enquiry-btn" onClick={() => setIsFormOpen(true)}><FaPhoneAlt className="enquiry-icon" />ENQUIRY NOW</button></p>
                  {isFormOpen && (
                    <div className="modal-overlay">
                      <div className="enquiry-modal-content">
                        <button
                          className="close-btn"
                          onClick={() => setIsFormOpen(false)}>
                          X
                        </button>
                        <h2>Enquiry Form</h2>
                        <form onSubmit={handleSubmit}>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="input"
                          />
                          {errors.name && (
                            <span className="error">{errors.name}</span>
                          )}

                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="input"
                          />
                          {errors.email && (
                            <span className="error">{errors.email}</span>
                          )}

                          <input
                            type="tel"
                            name="mobile"
                            placeholder="Enter Mobile Number"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                            className="input"
                          />
                          {errors.mobile && (
                            <span className="error">{errors.mobile}</span>
                          )}

                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="input"
                          />
                          {errors.message && (
                            <span className="error">{errors.message}</span>
                          )}

                          <div className="checkbox-container">
                            <input
                              type="checkbox"
                              name="terms"
                              checked={formData.terms}
                              onChange={handleInputChange}
                              required
                              className="checkbox"
                            />
                            <label>I agree to be contacted via call, WhatsApp, SMS &email by RealEstateIndia and other advertisers.</label>
                          </div>
                          {errors.terms && (
                            <span className="error">{errors.terms}</span>
                          )}
                          <button type="submit" className="submit-button">
                            Send Enquiry
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
                <p><strong>Price :</strong>12 Lac</p>
              </div>
              

              {/* Image Slider */}
              {/* Success Modal */}
              {isSuccessMessageVisible && (
                <div className="modal-overlay">
                  <div className="success-modal-content">
                    <h2>Success!</h2>
                    <p>Your enquiry has been successfully submitted.</p>
                  </div>
                </div>
              )}

              {/* Overview */}
              <div className="overview">
                <h3>Overview</h3>
                <p>This 1000 sq. yard residential plot is not just a piece of
                  land; it's a gateway to building your dream home in one of Hyderabad's promising locations. Don't miss out on this exceptional opportunity to invest in your future!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentInfo1;
