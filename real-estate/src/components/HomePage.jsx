import './HomePage.css';
import NavBar from './NavBar'
import { useEffect, useState } from 'react';
import Slider from "react-slick"
const HomePage = () => {
    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    
    const cards=[{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBZfxtBDn_NeV5W7uHsajFevvNWJA6OAC-A&s",
        caption:"Flats"
    },{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAcpitwkLYVsxhHIe0qW1ByY_MgL_4-0Pag&s",
        caption:"House"
    },{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZgDKRN3Kk9NgSAX52Tf4a_7rUwXjfKxyfA&s",
        caption:"Builder Floors"
    },{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJpYk5GEfys0LLQCJT3S1V2oErxyG50eMmA&s",
        caption:"Villa"
    },{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWeXbzedMiqPvkKMCWB_AJwaIL4_5r5MNAQ&s",
        caption:"Farm House"
    },{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xV8Cw6xEdJcLk8xhI4-JURoiaWX-xTdnrA&s",
        caption:"Penthhouse"
    },{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZCHw4gJ37l5xIF6XnZ70J9fbsO1EjEMtQg&s",
        caption:"Commerical Land"
    },{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGq6yzzSe14odU3Jb-b3hDcat_AS7bK-yHvg&s",
        caption:"Agricultural Land"
    }];
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "#570857",borderRadius: "50%",opacity: 0.8 }}
            onClick={onClick}
          />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#570857",borderRadius: "50%",opacity: 0.8 }}
            onClick={onClick}
          />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const [location,setLocation]=useState({lat:null,lon:null});
    const [placename,setPlacename]=useState("");
   

    const getlocation=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lon: longitude });
                    getPlaceName(latitude, longitude);
                }
            )
        }
    };

    const getPlaceName = async (lat, lon) => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
          const data = await response.json();
          setPlacename(data.address.city || data.address.town || data.address.village ||data.address.state ||'Unknown location');
        } catch (error) {
          setError('Error retrieving place name.');
        }
    };

    const loctnchange=(e)=>{
        setPlacename(e.target.value);
    }
    return (
        <>
            <div style={{position:"sticky",top:"0",zIndex:1}}>
                <NavBar></NavBar>
            </div>
            <section className='search-bg'>
                <div className="search-box">
                    {/* <div>
                        <p>Buy</p>
                        <p>Rent</p>
                        <p>Agent</p>
                        <p>Commercial</p>
                    </div> */}
                    <div id='search-sib'>
                        <select name='property'>
                            <option value="">property</option>
                            <option value="plot">Plot</option>
                            <option value="land">Land</option>
                            <option value="house">House</option>
                            <option value="villa">Villa</option>
                        </select>
                        <input type="text" name='search' placeholder='search locality' value={placename} onChange={loctnchange}/>
                        <span className='location-btn' onClick={getlocation}>
                            <img src="./src/images/location.svg" alt="error" width={33} height={33} style={{padding:"5px",backgroundColor:"#ffff"}} />
                        </span>
                        <button className='border-0'>
                          <i className='fa fa-search'> sreach</i> 
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className='property-cards p-5'>
                    <h1>Properties for Sale and Rent</h1>
                    <div className=" m-6">

                        <div className="property-cards-btns" >
                            <button type="button" className={`${activeButton === 'button1' ? 'active' : ''}`}
                                onClick={()=>handleButtonClick('button1')}>Most Popular
                            </button>
                            <button type="button" className={`${activeButton === 'button2' ? 'active' : ''}`}
                                onClick={()=>handleButtonClick('button2')}>
                                By Budget
                            </button>
                            <button type="button" className={`${activeButton === 'button3' ? 'active' : ''}`}
                                onClick={()=>handleButtonClick('button3')}>
                                By Property Type
                            </button>
                            <button type="button" className={`${activeButton === 'button4' ? 'active' : ''}`}
                                onClick={()=>handleButtonClick('button4')}>
                                By BHK
                            </button>
                        </div>
                    </div>
                    <div className="m-3 most-popular">
                        {[activeButton]=="button1"&&<div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLFbOYOw1L0MvdQMcolS8wOmpObsk--nxog&s" height={500} alt="error" />
                                <p className="text-center">Budget within 2crores</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeh-kgrg18Eq8Y7zhJN1j2FL9-htCB-ctKQ6hlvaN0M8hW3IKQOjVHMqSvdQUIcKV3PM&usqp=CAU" height={500} alt="error" />
                                <p className="card-title text-center">Flats</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4_sxgCkbZ7OhEs-nNRDsAZXnCKVTbB8q0w&s" height={500} alt="error" />
                                <p className="card-title text-center">Residential flats</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXpvONvMaxIJeVic8X8jwTwl9aGxjmRn2dw&s" height={500} alt="error" />
                                <p className="card-title text-center">3BHK Apartments</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcohRFeJRsaROTQ_1rZ7nOvoU4Oa6Ea4vKXQ&s" height={500} alt="error" />
                                <p className="card-title text-center">Budget within 90 lakhs</p>
                            </div>
                        </div>}

                    </div>  
                    <div className='m-3 by-budget'>
                        {[activeButton]=="button2"&&<div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicf__JrfhLQ3ptWYUT-aJK1K13Bu9vbFEHA&s" height={500} alt="error" />
                                <p className="card-title text-center">Budget within 50 lakhs</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnlXGDhf8Sy3zkquIJjve7d7RMbDkKPTAFw&s" height={500} alt="error" />
                                <p className="card-title text-center">Budget within 60 lakhs</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPwtfkrlATjgF_-BDBXZC_xbGFvN1f4w9lg&s" height={255} alt="error" />
                                <p className="card-title text-center">Budget within 90 lakhs</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTIVmEaXKpOWq21uqlr54GCDSxjSfBxS9aQ&s" height={500} alt="error" />
                                <p class="card-title text-center">Budget within 2 crores</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_VnIw-d8k2VVN5hxquf3tTMYKS_5x-7AfA&s" height={500} alt="error" />
                                <p className="card-title text-center">Budget within 40 lakhs</p>
                            </div>
                        </div>}
                    </div>

                    <div className='m-3 by-pty'>
                        {[activeButton]=="button3"&&<div>
                        <div className='card' style={{width:"100%",height:"fit-content",border:0,marginTop:"0px",paddingTop:"0px"}} >
                            <Slider {...settings}>
                                {cards.map((c)=>(
                                    <div className='bpt-3' key={c}>
                                        <img src={c.img} height={250} width={240} alt="error" style={{paddingLeft:"20px",paddingRight:"20px"}}/>
                                        <span>{c.caption}</span>
                                    </div>
                                ))}
                            </Slider>
                            </div>
                        </div>}
                    </div>
                    <div className='m-3 bhk'>
                        {[activeButton]=="button4"&&<div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PtCRwcxWlAEWjd9mWvb6tsk3_o_oivTZkg&s" height={255} alt="error" />
                                <p className="card-title text-center">4BHK</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHQqKMc3JaDBmyBz3vGTS6uFj-fntABpZBg&s" height={500} alt="error" />
                                <p className="card-title text-center">2BHK</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WgtYSWVSHsxXM_kFIRr09uYP9d3qJV7YCQ&s" height={255} alt="error" />
                                <p className="card-title text-center">1BHK</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFr70TFDvaTxvYrHkxDaut-vPZVr8f_1uvQ&s" height={255} alt="error" />
                                <p class="card-title text-center">3BHK</p>
                            </div>
                            <div className='card' style={{width:"16rem",height:"16rem" ,backgroundColor:"#e3e5e6"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Hxb6if5ZYlY0k-YGUWvwGgEl98e-DiRUsg&s" height={255} alt="error" />
                                <p className="card-title text-center">5BHK</p>
                            </div>
                        </div>}
                    </div>


                </div>
            </section>
        </>
    )
}
export default HomePage;
