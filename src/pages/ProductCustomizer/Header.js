import React, { useState } from 'react';
import "./Header.css"
import { FaRegEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios"
const Header = () => {
	const productCustomizerData = useSelector((state) => state.customizeProduct );
  console.log("cd",productCustomizerData)
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const togglePopup = () => {
		setPopupOpen(!isPopupOpen);
	};

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};
	const handlePriview=()=>{
		const url = "/product-priview"

		window.open(url, "_blank");
		window.location.reload();

	}


console.log("saveImage",productCustomizerData?.saveImage)
const data={
    "layerId": "layer123",
    "inputType": "text",
    "displayType": "banner",
    "title": "Example Image",
    "thumbnailType": false,
    "labelType": true,
    "imageName": "example.jpg",
    "images": [
        {
            "id": "img1",
            "layerId": "layer123",
            "imageName": "example1.jpg",
            "url": "https://example.com/image1.jpg"
        },
        {
            "id": "img2",
            "layerId": "layer123",
            "imageName": "example2.jpg",
            "url": "https://example.com/image2.jpg"
        }
    ],
    "colors": [
        {
            "id": "color1",
            "layerId": "layer123",
            "colorName": "Red",
            "color": "#FF0000"
        },
        {
            "id": "color2",
            "layerId": "layer123",
            "colorName": "Blue",
            "color": "#0000FF"
        }
    ],
    "textName": "Example Text",
    "text": [
        {
            "id": "text1",
            "layerId": "layer123",
            "textName": "Text 1",
            "imageText": "Lorem ipsum dolor sit amet"
        },
        {
            "id": "text2",
            "layerId": "layer123",
            "textName": "Text 2",
            "imageText": "consectetur adipiscing elit"
        }
    ]
}

	const PublishProduct=()=>{
		axios.post('http://localhost:8080/api/data/layerdata',data)
    .then(response => {
      console.log('Data sent successfully to layerdata:', response.data);
      axios.post('http://localhost:8080/api/shopify/products',data)
        .then(response => {
			console.log('shop before')
          console.log('sending data to shopify:', response.data);
		  console.log("shop after")
        })
        .catch(error => {
          console.error('Error sending data to shopify:', error);
        });
    })
    .catch(error => {
      console.error('Error sending data layer data', error);
    });
	}

	return (

		<header className="Haze_header">
			<div className="logo_section">
				<div className="logo">
					<a href="#">
						<img src="/assets/image/logo/Haze logo 1 (1).png" alt="Logo" />
					</a>
				</div>
			</div>

			<div className="menu">
				<ul className="header_menu">
					<li className="header_menu_list">
						Build your product
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Pricing Details
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Review
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Done!
						{/* SVG Code for arrow */}
						{" >"}
					</li>
				</ul>
			</div>

			<div className="right_header_Section">
				<button className="login_buttotn">Logic</button>
				<button className="view_button " onClick={handlePriview}>
				<FaRegEye />
				</button>
				<button className="dropdown">
					<span className="popup-button" onClick={PublishProduct}>
						Publish
					</span>
					{isPopupOpen && (
						<div id="popupContent" className="popup">
							<div className="popup_cont">
								<p className="suuccessully_msg">
									<img src="../Image/svg/success.svg" alt="Success" />
									The draft was successfully published
								</p>
								<div onClick={togglePopup}>
									{/* SVG Code for close icon */}
								</div>
							</div>
						</div>
					)}
					<span className="dropdown_bnt" onClick={toggleDropdown}>
						<span>
							{/* SVG Code for dropdown arrow */}
						</span>
						{isDropdownOpen && (
							<div id="dropdownContent" className="dropdown-content">
								<a href="#">Discard</a>
							</div>
						)}
					</span>
				</button>
			</div>
		</header>

	);
};

export default Header;
