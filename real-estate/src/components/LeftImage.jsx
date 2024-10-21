import React, { useState } from "react";
import { MdFavoriteBorder, MdLocationPin } from "react-icons/md";
import { FaAngleLeft, FaAngleRight, FaPhoneAlt } from "react-icons/fa";
import "./LeftImage.css";

const LeftImage = () => {
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

  const handleSubmit = (e) => {
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
      setIsFormOpen(false);
      setIsSuccessMessageVisible(true);
      setTimeout(() => setIsSuccessMessageVisible(false), 3000);
    }
  };

  const images = [
    "https://s3.amazonaws.com/images-aarz/uploads/properties/2019/9/1000-square-yard-agricultural-land-for-sale-in-ahsana-bad-karachi-for-rs-1500-lac-226850-image-3-actual.jpg",
    "https://lscdn.blob.core.windows.net/add-post/subcategoryid/10790356-add-15805518007298462.jpeg",
    "https://lscdn.blob.core.windows.net/add-post/subcategoryid/10863323-add-16039581001724924.jpeg",
    "https://lscdn.blob.core.windows.net/add-post/subcategoryid/10790356-add-15767499126977079.jpeg",
    "https://im.proptiger.com/1/3292843/6/shree-madhav-homeland-elevation-148855286.jpeg",
    // Add more image URLs as needed
  ];

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
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div className="left-image" style={{ flex: 1, marginRight: "20px" }}>
          <img
            src="https://dyimg1.realestateindia.com/prop_images/2826836/1306676_3.jpg"
            className="grove-img"
            alt="Residential Plot"
            style={{ width: "100%",  height:"220px", cursor: "pointer" }}
            onClick={openModal} // Open modal on image click
          />
        </div>

        <div className="right-content">
          <div>
            <span>
              <p className="pro-price">{"\u20B9"} 3.20 Cr.</p>
            </span>
          </div>
          <h4>Flora</h4>
          <h2 className="right-heading">
            1000 Sq. Yards Residential Land / Plots for Sale{" "}
          </h2>
          {/* <div>
            <span className="fav-icon">
              <MdFavoriteBorder />
            </span>
          </div> */}
          <p>Location: Sri Sailam Highway, Hyderabad</p>
          <p>Posted on: 30 Sep, 2024</p>
          <div className="post-date">Best Land for Your Dream House / Flats.</div>
        </div>
      </div>

      {/* Property Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="grove-modal-content">
            <button className="close-btn" onClick={closeModal} >
              X
            </button>

            <div className="details-page">
              <div className="property-header">
                <h1>Residential Land / Plots for Sale</h1>
                <p>
                  <MdLocationPin className="grove-icon" /> Sri Sailam Highway,
                  Hyderabad
                </p>
                <p>1000 Sq. Yards </p>

                {/* -----------------enquiry now button form------------------- */}

                <div>
                  <p>
                    <button
                      className="enquiry-btn"
                      onClick={() => setIsFormOpen(true)}
                     
                    >
                      <FaPhoneAlt className="enquiry-icon" />
                      ENQUIRY NOW
                    </button>
                  </p>
                  {isFormOpen && (
                    <div className="modal-overlay">
                      <div className="enquiry-modal-content">
                        <button
                          className="close-btn"
                          onClick={() => setIsFormOpen(false)}
                       
                        >
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
                            <label>
                              I agree to be contacted via call, WhatsApp, SMS &
                              email by RealEstateIndia and other advertisers.
                            </label>
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

                <p>
                  <strong>Price :</strong> 3.20 Cr.
                </p>
              </div>

              {/* Image Gallery */}
              <div className="image-gallery">
                <img
                  src={images[currentImage]}
                  alt="Property"
                  className="image"
                  onClick={openSlider}
                />
                <p>Click to view more images</p>
              </div>

              {/* Image Slider */}
              {isSliderOpen && (
                <div className="slider-overlay">
                  <div className="slider-content">
                    <button className="close-btn" onClick={closeSlider} 
                    >
                      X
                    </button>
                    <FaAngleLeft className="arrow left" onClick={prevImage} />
                    <img
                      src={images[currentImage]}
                      alt="Property Slide"
                      className="slider-image"
                    />
                    <FaAngleRight
                      className="arrow arrow-right"
                      onClick={nextImage}
                    />
                  </div>
                </div>
              )}
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
                <p>
                  This 1000 sq. yard residential plot is not just a piece of
                  land; it's a gateway to building your dream home in one of
                  Hyderabad's promising locations. Don't miss out on this
                  exceptional opportunity to invest in your future!
                </p>
              </div>

              {/* Contact Form */}
              <div className="form">
                <h3>Get Best Offer on this Project</h3>
                <form>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email ID"
                    className="input"
                    required
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    className="input"
                    required
                  />
                  <select name="looking-for" className="input">
                    <option value="flats">Flats</option>
                    <option value="house">House</option>
                  </select>
                  <button type="submit" className="submit-button">
                    Connect Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftImage;
