import React from "react";
import './PostProperty.css';
import { useState } from "react";
import { useRef } from "react";
import NavBar from './NavBar'
import axios from "axios"
const PostProperty=()=>{
    const [displayButton,setDisplayButton]=useState("sale")
    const prpty=(dsplymsg)=>{
        setDisplayButton(dsplymsg);
    }
    const [message, setMessage] = useState();

    const image=useRef(null);
    const area=useRef(null);
    const prptytype=useRef(null)
    const project=useRef(null);
    const ownership=useRef(null);
    const location=useRef(null);
    const status=useRef(null);
    const bedrooms=useRef(null);
    const prptyfloor=useRef(null);
    const totalfloors=useRef(null);
    const carparking=useRef(null);
    const price=useRef(null);
    const facing=useRef(null);
    const desc=useRef(null);
    const rent=useRef(null)
    const salepost = (e) => {
        e.preventDefault();
        const saledata = {
            image: image.current.value, 
            sqft: area.current.value,
            propertytype: prptytype.current.value,
            projectname: project.current.value,
            ownership: ownership.current.value,
            location: location.current.value,
            status: status.current.value,
            bedrooms: bedrooms.current.value,
            propertyfloor: prptyfloor.current.value,
            totalfloors: totalfloors.current.value,
            carparking: carparking.current.value,
            price: price.current.value,
            facing: facing.current.value,
            description:desc.current.value
        };
        console.log("User Input:", saledata);

        try {
            axios.post('http://localhost:9000/project/add',saledata).then((posRes)=>{
                posRes
            },(errRes)=>{
                console.log(errRes);
            })
        } catch (error) {
            console.error('Error during signup:', error.response ? error.response.data : error.message);
        }
        e.target.reset();
    };
    
    const rentpost=(e)=>{
        e.preventDefault();
        const rentdata = {
            image: image.current.value, 
            sqft: area.current.value,
            propertytype: prptytype.current.value,
            projectname: project.current.value,
            ownership: ownership.current.value,
            location: location.current.value,
            status: status.current.value,
            bedrooms: bedrooms.current.value,
            propertyfloor: prptyfloor.current.value,
            totalfloors: totalfloors.current.value,
            carparking: carparking.current.value,
            rent: rent.current.value,
            facing: facing.current.value,
            description:desc.current.value
        };
        console.log(rentdata);
        try {
            axios.post('http://localhost:9000/rentpost/add',rentdata).then((posRes)=>{
                posRes
            },(errRes)=>{
                console.log(errRes);
            })
        } catch (error) {
            console.error('Error during signup:', error.response ? error.response.data : error.message);
        }
        // Reset the form after submission
        e.target.reset();
    }
    return(
        <>
            <div style={{position:"sticky",top:"0",zIndex:1}}>
                <NavBar></NavBar>
            </div>
            <section id="post-property">
                <div>
                    <span className={`${displayButton === 'sale' ? 'active' : ''}`}
                        onClick={()=>prpty('sale')}>Sale
                    </span>
                    <span className={`${displayButton === 'rent' ? 'active' : ''}`}
                        onClick={()=>prpty('rent')}>Rent
                    </span>
                </div>
                {displayButton==="sale"&&<div className="saleprprty-details">
                    <h4>Sale</h4>
                    {/* <h1 className="p-2">Property Overview</h1> */}
                        <form onSubmit={salepost}>
                            <table className="sellerpost">
                               
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="images">Image:</label></td>
                                        <td><input type="file" id="images" accept="image/*"  ref={image}/></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="area">Built Up Area:</label></td>
                                        <td><input type="number" id="area" ref={area} placeholder="Enter property area in Sq. Yards"/></td> 
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="facing">Property Type: </label></td>
                                        <td>
                                            <select id="facing" ref={prptytype}>
                                                <option value="plot">Plot</option>
                                                <option value="house">House</option>
                                                <option value="villa">Villa</option>
                                                <option value="farm house">Farm House</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="society">Project & Society:</label></td>
                                        <td><input type="text" id="society" ref={project} placeholder="Enter property society/project name"/></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="ownership">Ownership:</label></td>
                                        <td><input type="text"  id="ownership" ref={ownership} placeholder="Enter the property ownership type"/></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="location">Location:</label></td>
                                        <td><input type="text"  id="location" ref={location} placeholder="Enter the property location"/></td>  
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="p-status">Status:</label></td>
                                        <td><input type="text"  id="p-status" ref={status} placeholder="Enter the property status" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="bedrooms">Bedrooms:</label></td>
                                        <td><input type="number"  id="bedrooms" ref={bedrooms} placeholder="Enter the no.of bedrooms"/></td>  
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="car">Car parking:</label></td>
                                        <td className="carparking">
                                            <input type="radio" id="cary" name="carparking" value={"yes"} ref={carparking}/>
                                            <label htmlFor="cary">Yes</label><br />
                                            <input type="radio" id="carn" name="carparking" value={"No"} ref={carparking}/>
                                            <label htmlFor="carn">No</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="floor">Property on Floor:</label></td>
                                        <td><input type="number" id="floor" ref={prptyfloor} placeholder="Enter the property floor number"/></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="t-floors">Total Floors:</label></td>
                                        <td><input type="number" id="t-floors" ref={totalfloors} placeholder="Enter total number of floors of the property"/></td>
                                    </tr>    
                                    <tr>
                                        <td><label htmlFor="price">Price:</label></td>
                                        <td><input type="number"  id="price" ref={price} placeholder="Enter price of the property" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="facing">Facing: </label></td>
                                        <td>
                                            <select id="facing" ref={facing}>
                                                <option value="west">West</option>
                                                <option value="north">North</option>
                                                <option value="south">South</option>
                                                <option value="east">East</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="desc" >Description </label></td>
                                        <td>
                                            <textarea id="desc"  ref={desc} cols={65}></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="submit">post</button>
                        </form>
                        
                </div>}
                {displayButton==="rent"&& <div className="rentprprty-details">
                    <h4>Rent</h4>
                    <form onSubmit={rentpost}>
                        <table className="rentpost">
                            <tbody>
                            <tr>
                                <td><label htmlFor="images">Image:</label></td>
                                <td><input type="file" id="images" accept="image/*" ref={image} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="area">Built Up Area:</label></td>
                                <td><input type="number" id="area" ref={area} placeholder="Enter property area in Sq. Yards"/></td> 
                            </tr>
                            <tr>
                                <td><label htmlFor="property">Property Type: </label></td>
                                <td>
                                    <select id="property" ref={prptytype}>
                                        <option value="plot">Plot</option>
                                        <option value="house">House</option>
                                        <option value="villa">Villa</option>
                                        <option value="farm house">Farm House</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="society">Project & Society:</label></td>
                                <td><input type="text" id="society" ref={project} placeholder="Enter property society/project name"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="ownership">Ownership:</label></td>
                                <td><input type="text"  id="ownership" ref={ownership} placeholder="Enter the property ownership type"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="location">Location:</label></td>
                                <td><input type="text"  id="location" ref={location} placeholder="Enter the property location"/></td>  
                            </tr>
                            <tr>
                                <td><label htmlFor="p-status">Status:</label></td>
                                <td><input type="text"  id="p-status" ref={status} placeholder="Enter the property status" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="bedrooms">Bedrooms:</label></td>
                                <td><input type="number"  id="bedrooms" ref={bedrooms} placeholder="Enter the no.of bedrooms"/></td>  
                            </tr>
                            <tr>
                                <td><label htmlFor="car">Car parking:</label></td>
                                <td className="carparking">
                                    <input type="radio" id="cary" name="carparking" value={"yes"} ref={carparking}/>
                                    <label htmlFor="cary">Yes</label><br />
                                    <input type="radio" id="carn" name="carparking" value={"No"} ref={carparking}/>
                                    <label htmlFor="carn">No</label>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="floor">Property on Floor:</label></td>
                                <td><input type="number" id="floor" ref={prptyfloor} placeholder="Enter the property floor number"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="t-floors">Total Floors:</label></td>
                                <td><input type="number" id="t-floors" ref={totalfloors} placeholder="Enter total number of floors of the property"/></td>
                            </tr>    
                            <tr>
                                <td><label htmlFor="rent" >Rent:</label></td>
                                <td><input type="number"  id="rent" ref={rent} placeholder="Enter rent for the property" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="facing">Facing: </label></td>
                                <td>
                                    <select id="facing" ref={facing}>
                                        <option value="west">West</option>
                                        <option value="north">North</option>
                                        <option value="south">South</option>
                                        <option value="east">East</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="desc">Description </label></td>
                                <td>
                                    <textarea id="desc" ref={desc} cols={65}></textarea>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <button type="submit">post</button>
                    </form>
                </div>}
            </section>
        </>
    )
}
export default PostProperty