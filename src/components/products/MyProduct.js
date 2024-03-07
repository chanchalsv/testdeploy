import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
const MyProduct = (props) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/getShopifyProducts"
        );
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
 
const handleNavigate=()=>{
  navigate("/product-customizer") 
  
}
  return (
    <div className="left_wrapper">
      <div className="wrapper_header">
        <div className="wraper_header_title">My Products</div>
        <div className="wraper_button_section products_btn">
          <button className="add_button">View Demos</button>
          <button
            className="add_button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            + Create Product
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Viewfff Themes
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Select a Theme
              </a>
            </li>
            <li onClick={handleNavigate}>
              <a className="dropdown-item" >
                1 .Theme 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2 .Theme 2
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main_container">
        <div className="my_products">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-Active-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Active"
                type="button"
                role="tab"
                aria-controls="pills-Active"
                aria-selected="true"
              >
                Active
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-Drafts-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Drafts"
                type="button"
                role="tab"
                aria-controls="pills-Drafts"
                aria-selected="false"
              >
                Drafts
              </button>
            </li>
          </ul>
          <div className="my_products_row products_hr">
            <button className="my_products_button">
              <i className="bi bi-search"></i>Product
            </button>
            <button className="my_products_button">
              <i className="bi bi-arrow-down-up"></i>Sort
            </button>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-Active"
              role="tabpanel"
              aria-labelledby="pills-Active-tab"
              tabindex="0"
            >
              <div className="active_products_section">
                <div className="row">
                  {products.map((product) => (
                    <div key={product.id} className="col-md-4">
                      <div className="products_card">
                        <div className="products_body">
                          <div className="products_image">
                            {product.image?.src ? (
                              <>
                                <img src={product.image.src} />
                              </>
                            ) : (
                              <p>No Image</p>
                            )}
                          </div>
                          <div className="products_card_cont">
                            <div className="products_card_title">
                              {product.title}
                            </div>
                            <div className="products_card_description">
                              {product.vendor}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-Drafts"
              role="tabpanel"
              aria-labelledby="pills-Drafts-tab"
              tabindex="0"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
