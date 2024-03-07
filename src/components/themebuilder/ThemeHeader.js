import React, { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext";
import { useLocation } from "react-router-dom";

const ThemeHeader = () => {
  const { customizerData, updateCustomizerData } = useContext(ThemeContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTheme = queryParams.get("selectedTheme");

  const [visibleItem, setVisibleItem] = useState("Customizer_Title_list");
  useEffect(() => {
    const getHashFromURL = () => {
      const hash = window.location.hash.substring(1);
      setVisibleItem(hash);
    };
    getHashFromURL();
    window.addEventListener('hashchange', getHashFromURL);
    return () => {
      window.removeEventListener('hashchange', getHashFromURL);
    };
  }, []);

  useEffect(() => {
    updateCustomizerData((prevData) => {
      return {
        ...prevData,
        ThemeType: {
          ThemeSelect: selectedTheme,
        },
      };
    });
  }, [selectedTheme]);

  const navigate = useNavigate();
  const changeTheme = (theme) => {
    theme === "Theme 1"
      ? navigate(`/theme-builder?selectedTheme=Theme 2#${visibleItem}`)
      : navigate(`/theme-builder?selectedTheme=Theme 1#${visibleItem}`);
    updateCustomizerData((prevData) => {
      return {
        ...prevData,
        ThemeType: {
          ThemeSelect: theme,
        },
      };
    });
  };
  /*
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://5fbcc6-4.myshopify.com/admin/api/2022-01/products.json',
        {
          headers: {
            'X-Shopify-Access-Token': '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',
          },
        }
      );

      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  console.log("products",products);*/
  const handleDiscard = () => {
    navigate(`/my-products`)
  }
  const handleSaveThemeCustomizerData = () => {
    
  }
  return (
    <>
      <header className="Haze_header">
        <div className="left_navbar">
          <div className="logo">
            <a href="/dashboard">
              <img src="assets/Image/logo/Haze Logo 1 (1).png" />
            </a>
          </div>
          <div className="them_title">
            {customizerData.ThemeType.ThemeSelect}
          </div>
          <button
            onClick={() => changeTheme(customizerData.ThemeType.ThemeSelect)}
            className="them_button"
          >
            Change
          </button>
        </div>
        <div className="Select_Product_button">
          <div className="custom-select">
            <select>
              <option value="none" selected disabled hidden>
                Select Product
              </option>
              <option value="0">Mug</option>
              <option value="1">Mug:</option>
            </select>
            <div class="select-selected">Select Product</div>
          </div>
        </div>

        <div className="right_button_section">
          <button onClick={handleDiscard}>Discard</button>
          <button onClick={handleSaveThemeCustomizerData}>Save</button>
        </div>
      </header>
    </>
  );
};

export default ThemeHeader;