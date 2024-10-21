import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import './Grove.css';

const PropertyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://designinstituteindia.com/wp-content/uploads/2022/10/IMG_20221005_103517.jpg",
    "https://3.bp.blogspot.com/-Y38pl2HF6wM/XDZE9ePX7_I/AAAAAAAAEK4/IZUsfzBglGg2W7cvM7RNEbYv9LoNnC4wwCLcBGAs/s640/1.jpg",
    "https://media.designcafe.com/wp-content/uploads/2020/09/26182056/classic-bedroom-design-in-3-bhk-home-design.jpg",
    "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/false-ceiling-homes-pilot-1660820004-eRVFP/hometour-1660820029-cuOHh/17-1661175940-sQ00O/1-1-11zon-1661175951-vVdjS.jpg",
    "https://thearchitectsdiary.com/wp-content/uploads/2017/12/IMGL2531-copy-Large.jpg",
    "https://images.livspace-cdn.com/w:1440/dpr:1/q:100/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/false-ceiling-homes-pilot-1660820004-eRVFP/hometour-1660820029-cuOHh/ht-in-lr-0035-1661189805-1rGOX/1-min-1661189818-T0FdS.jpg",
    "https://thearchitectsdiary.com/wp-content/uploads/2017/12/IMGL2438-copy-Large.jpg",
    "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/false-ceiling-homes-pilot-1660820004-eRVFP/hometour-1660820029-cuOHh/23-1661176709-AE0YS/1-min-1661176722-zqsBJ.jpg",
    "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/false-ceiling-homes-pilot-1660820004-eRVFP/hometour-1660820029-cuOHh/17-1661175940-sQ00O/1-1-11zon-1661175951-vVdjS.jpg",
    "https://images.livspace-cdn.com/w:1440/dpr:1/q:100/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/false-ceiling-homes-pilot-1660820004-eRVFP/hometour-1660820029-cuOHh/22-1661176558-fcFgv/1-min-1661176571-nTBt7.jpg",
    "https://images.livspace-cdn.com/w:1440/q:100/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/false-ceiling-homes-pilot-1660820004-eRVFP/hometour-1660820029-cuOHh/23-1661176709-AE0YS/3-min-1661176724-FkfHK.jpg",
    "https://images.livspace-cdn.com/w:1440/q:100/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/false-ceiling-homes-pilot-1660820004-eRVFP/hometour-1660820029-cuOHh/ht-in-lr-0030-1661188031-OWwI2/1-min-1661188043-3tGqC.jpg",
  ];

  const openSlider = () => setIsSliderOpen(true);
  const closeSlider = () => setIsSliderOpen(false);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  

  return (
    <div>
      {/* Property Banner */}
      <div className="grove-banner" onClick={openModal}>
        <div>
          <img
            src="https://dynamic.realestateindia.com/proj_images/project41632/proj_img-41632_1-200x200.jpg"
            className="grove-img"
            alt="Property"
          />
        </div>
        
        <div className="grove-inform">
          <h6 className="grove-head">Praneeth Pranav Grove Park</h6>
          <p>
            <MdLocationPin className="grove-icon" /> Medchal, Hyderabad
          </p>
          <p>3, 4 BHK House</p>
          <p className="grove-p">
            <FaPhoneAlt className="grove-icon" /> Call for Price
          </p>
          <p>2176 - 4966 Sq.ft.</p>
        </div>
      </div>

      {/* Property Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="grove-modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>

            <div className="details-page">
              <div className="property-header">
                <h1>Praneeth Pranav Grove Park</h1>
                <p>
                  <MdLocationPin className="grove-icon" /> Medchal, Hyderabad
                </p>
                <p>3, 4 BHK House</p>
                <p>
                  <FaPhoneAlt className="grove-icon" /> Price: Call for Price
                </p>
                <p>
                  <strong>Area :</strong> 2176 - 4966 Sq.ft.
                </p>
              </div>

              {/* Image Gallery */}
              <div className="image-gallery">
                <img
                  src={images[0]}
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
                    <button className="close-button" onClick={closeSlider}>
                      X
                    </button>
                    <FaAngleLeft className="arrow left" onClick={prevImage} />
                    <img
                      src={images[currentImage]}
                      alt="Property Slide"
                      className="slider-image"
                    />
                    <FaAngleRight className="arrow arrow-right" onClick={nextImage} />
                  </div>
                </div>
              )}

              {/* Overview */}
              <div className="overview">
                <h3>Overview</h3>
                <p>
                  Independent House with 3 and 4 BHK configuration. Possession
                  date is May 2028. More details about price, floor plans, and
                  amenities can be added here.
                </p>
              </div>

              {/* Contact Form */}
              <div className="form">
                <h3>Get Best Offer on this Project</h3>
                <form>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter your Email ID"
                    className="input"
                    required
                  />
                  <input
                    type="tel"
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

export default PropertyComponent;
