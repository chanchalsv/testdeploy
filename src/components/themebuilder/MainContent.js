import React, { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ThemeContext from "../../contexts/ThemeContext";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const { customizerData } = useContext(ThemeContext);
  const [customizerSwitchViewArrows, setCustomizerSwitchViewArrows] =
    useState();
  useEffect(() => {
    setCustomizerSwitchViewArrows(
      customizerData?.SwitchViewArrows?.SwitchViewArrowsColor
    );
  }, [customizerData]);
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM42 13.5H2V10.5H42V13.5Z"
          fill={customizerSwitchViewArrows}
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const { customizerData } = useContext(ThemeContext);
  const [customizerSwitchViewArrows, setCustomizerSwitchViewArrows] =
    useState();
  useEffect(() => {
    setCustomizerSwitchViewArrows(
      customizerData?.SwitchViewArrows?.SwitchViewArrowsColor
    );
  }, [customizerData]);
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z"
          fill={customizerSwitchViewArrows}
        />
      </svg>
    </div>
  );
}
function CustomDot({ active }) {
  const { customizerData } = useContext(ThemeContext);
  const [customizerDotStyleSelected, setCustomizerDotStyleSelected] =
    useState();
  const [customizerDotStyle, setCustomizerDotStyle] = useState();
  useEffect(() => {
    setCustomizerDotStyleSelected(
      customizerData?.SwitchViewDots?.SwitchViewDotsSelectColour
    );
    setCustomizerDotStyle(customizerData?.SwitchViewDots?.SwitchViewDotsColour);
  }, [customizerData]);
  const dotStyle = {
    background: active ? customizerDotStyleSelected : customizerDotStyle,
  };

  return <button style={dotStyle}>1</button>;
}
var settings = {
  dots: true,
  customPaging: (i) => <CustomDot active={i === 0} />,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const MainContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { customizerData } = useContext(ThemeContext);
  const [customizerTitleStyle, setCustomizerTitleStyle] = useState({});
  const [customizerLayerPanel, setCustomizerLayerPanel] = useState({});
  const [customizerLayerList, setCustomizerLayerList] = useState({});
  const [customizerAddToCartBtn, setCustomizerAddToCartBtn] = useState({});
  const [customizerPrice, setCustomizerPrice] = useState({});
  const [customizerZoom, setCustomizerZoom] = useState({});
  const [customizerShareButton, setCustomizerShareButton] = useState({});

  const [accordionOneOpen, setAccordionOneOpen] = useState(false);
  const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);
  const [accordionThreeOpen, setAccordionThreeOpen] = useState(false);

  const toggleAccordionOne = () => {
    setAccordionOneOpen((prev) => !prev);
    setAccordionTwoOpen(false);
    setAccordionThreeOpen(false);
  };

  const toggleAccordionTwo = () => {
    setAccordionTwoOpen((prev) => !prev);
    setAccordionOneOpen(false);
    setAccordionThreeOpen(false);
  };

  const toggleAccordionThree = () => {
    setAccordionThreeOpen((prev) => !prev);
    setAccordionOneOpen(false);
    setAccordionTwoOpen(false);
  };

  useEffect(() => {
    setCustomizerTitleStyle({
      backgroundColor:
        customizerData?.CustomizerTitle?.CustomizerTitleBackgroundColor,
      fontFamily:
        customizerData?.CustomizerTitle?.CustomizerTitleFontFamily || "Arial",
      fontSize: isMobile
        ? customizerData?.CustomizerTitle?.CustomizerTitleFontSizeMobile
        : customizerData?.CustomizerTitle?.CustomizerTitleFontSize,
      color: isMobile
        ? customizerData?.CustomizerTitle?.CustomizerTitleFontColorMobile
        : customizerData?.CustomizerTitle?.CustomizerTitleFontColor,
      borderBottom:
        customizerData?.CustomizerTitle?.CustomizerTitleDividerThickness +
        " solid " +
        customizerData?.CustomizerTitle?.CustomizerTitleDividerColor,
    });
    setCustomizerLayerPanel({
      backgroundColor: customizerData?.LayersPanel?.LayersPanelBackgroundColor,
      border:
        customizerData?.LayersPanel?.LayersPanelBorderThickness +
        " solid " +
        customizerData?.LayersPanel?.LayersPanelBorderColor,
    });
    setCustomizerLayerList({
      textAlign: customizerData?.LayersPanel?.textAlignment || "left",
    });
    setCustomizerAddToCartBtn({
      border:
        customizerData?.AddToCart?.AddToCartBorderThickness +
        " solid " +
        customizerData?.AddToCart?.AddToCartBorderColor,
      borderRadius: customizerData?.AddToCart?.AddToCartBorderRounding,
      fontFamily: customizerData?.AddToCart?.AddToCartFontFamily,
      color: customizerData?.AddToCart?.AddToCartFontColor,
      backgroundColor: isHovered
        ? customizerData?.AddToCart?.AddToCartHoverBackgroundColor
        : customizerData?.AddToCart?.AddToCartBackgroundColor,
      fontSize: customizerData?.AddToCart?.AddToCartFontSize,
    });
    setCustomizerPrice({});
    setCustomizerZoom({
      fillColor: customizerData?.Zoom?.ZoomColor,
    });
    let paddingForShareBtn;
    switch (customizerData?.ShareButton?.ShareButtonTextButtonLength) {
      case "small":
        paddingForShareBtn = "8px 7px";
        break;
      case "medium":
        paddingForShareBtn = "8px 15px";
        break;
      case "large":
        paddingForShareBtn = "8px 25px";
        break;
      default:
        paddingForShareBtn = "8px 7px"; // Default padding value
        break;
    }
    setCustomizerShareButton({
      display:
        customizerData?.ShareButton?.ShareButtonDisplayButtonYesNo === "true"
          ? "block"
          : "none",
      fillColor: customizerData?.ShareButton?.ShareButtonColor,
      iconBtnTrue:
        customizerData?.ShareButton?.ShareButtonIconButtonOrTextButton,
      borderRadius: customizerData?.ShareButton?.ShareButtonTextButtonRounding,
      padding: paddingForShareBtn,
    });
  }, [customizerData, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="center_wrapper">
        <>
          {customizerData?.ThemeType?.ThemeSelect === "Theme 1" && (
            <div class="products_wrapper">
              <div class="products_col" style={customizerLayerPanel}>
                <div
                  class="products_wrapper_tile caption-top  col_padding"
                  style={customizerTitleStyle}
                >
                  Product 1
                </div>
                <div class="products_wrapper_tag  col_padding">Mug</div>
                <div class="products_wrapper_row">
                  <div class="products_wrapper_col">
                    <div class="products-active products_wrapper_image">
                      <img src="/assets/Image/product/mug.svg" />
                    </div>
                  </div>
                  <div class="products_wrapper_tag">Mug Colour</div>
                </div>
                <div class="products_wrapper_row">
                  <div class="products_wrapper_col">
                    <div class="products_colour_section">
                      <span class="products-active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div class="products_wrapper_tag">Handle</div>
                </div>
                <div class="products_wrapper_row">
                  <div class="products_wrapper_col">
                    <div class="products-active products_wrapper_image">
                      <img src="/assets/Image/product/mug-handle.svg" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="products_col">
                <div class="products_top_section">
                  <div class="products_top_section_row">
                    <div class="products_amount">
                      <span class="currency_symbol">$</span>
                      <span class="currency_value">24</span>
                    </div>
                    <div class="products_button">
                      <button class="products_zomm_button">
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_0_4)">
                            <path
                              d="M15.452 1.00001C13.7525 0.997435 12.078 1.41015 10.5742 2.20228C9.07039 2.99442 7.78268 4.14201 6.82302 5.5453C5.86335 6.9486 5.26076 8.56515 5.06761 10.2544C4.87447 11.9437 5.09662 13.6547 5.71476 15.2385C6.33289 16.8224 7.3283 18.2313 8.61449 19.3427C9.90067 20.4541 11.4387 21.2345 13.0949 21.6159C14.7511 21.9974 16.4754 21.9684 18.1178 21.5315C19.7603 21.0946 21.2712 20.263 22.5194 19.1089L29.4114 26L30 25.4111L23.1163 18.5117C24.4883 17.0203 25.3968 15.1615 25.7308 13.1623C26.0648 11.1631 25.8099 9.10983 24.9973 7.25308C24.1846 5.39632 22.8493 3.81636 21.1544 2.70599C19.4594 1.59561 17.478 1.00285 15.452 1.00001ZM15.452 21.0468C13.553 21.0468 11.6967 20.4834 10.1178 19.4279C8.53888 18.3724 7.30826 16.8722 6.58157 15.117C5.85487 13.3618 5.66473 11.4304 6.0352 9.56705C6.40567 7.70372 7.3201 5.99214 8.66286 4.64875C10.0056 3.30536 11.7164 2.39051 13.5789 2.01987C15.4413 1.64923 17.3718 1.83945 19.1262 2.56649C20.8806 3.29352 22.3802 4.52472 23.4352 6.10437C24.4902 7.68403 25.0533 9.5412 25.0533 11.441C25.0533 13.9886 24.0417 16.4319 22.2411 18.2333C20.4405 20.0347 17.9984 21.0468 15.452 21.0468Z"
                              fill={customizerZoom.fillColor}
                            />
                          </g>
                          <path
                            d="M15.7533 7.81822V7.69322H15.6283H14.8262H14.7012V7.81822V10.7012H11.8182H11.6932V10.8262V11.6284V11.7534H11.8182H14.7012V14.6364V14.7614H14.8262H15.6283H15.7533V14.6364V11.7534H18.6363H18.7613V11.6284V10.8262V10.7012H18.6363H15.7533V7.81822Z"
                            fill={customizerZoom.fillColor}
                            stroke={customizerZoom.fillColor}
                            stroke-width="0.25"
                          />
                        </svg>
                      </button>

                      {customizerShareButton?.iconBtnTrue === "true" && (
                        <>
                          <button
                            class="share_button"
                            style={customizerShareButton}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M19.2785 16.8161C18.0807 16.8161 17.0015 17.3334 16.2525 18.1562L9.51555 13.9837C9.69542 13.5233 9.79517 13.0232 9.79517 12.5C9.79517 11.9766 9.69542 11.4765 9.51555 11.0162L16.2525 6.84355C17.0015 7.66638 18.0807 8.18384 19.2785 8.18384C21.5349 8.18384 23.3705 6.34822 23.3705 4.09183C23.3705 1.83544 21.5349 0 19.2785 0C17.0221 0 15.1865 1.83563 15.1865 4.09202C15.1865 4.6152 15.2864 5.11531 15.4661 5.57574L8.72935 9.74825C7.98033 8.92542 6.90116 8.40796 5.70335 8.40796C3.44696 8.40796 1.61133 10.2438 1.61133 12.5C1.61133 14.7564 3.44696 16.592 5.70335 16.592C6.90116 16.592 7.98033 16.0747 8.72935 15.2517L15.4661 19.4242C15.2864 19.8846 15.1865 20.3847 15.1865 20.9081C15.1865 23.1643 17.0221 24.9999 19.2785 24.9999C21.5349 24.9999 23.3705 23.1643 23.3705 20.9081C23.3705 18.6517 21.5349 16.8161 19.2785 16.8161ZM16.6786 4.09202C16.6786 2.65846 17.8449 1.49212 19.2785 1.49212C20.712 1.49212 21.8784 2.65846 21.8784 4.09202C21.8784 5.52558 20.712 6.69192 19.2785 6.69192C17.8449 6.69192 16.6786 5.52558 16.6786 4.09202ZM5.70335 15.0999C4.26959 15.0999 3.10325 13.9335 3.10325 12.5C3.10325 11.0664 4.26959 9.90007 5.70335 9.90007C7.13691 9.90007 8.30306 11.0664 8.30306 12.5C8.30306 13.9335 7.13691 15.0999 5.70335 15.0999ZM16.6786 20.9079C16.6786 19.4744 17.8449 18.308 19.2785 18.308C20.712 18.308 21.8784 19.4744 21.8784 20.9079C21.8784 22.3415 20.712 23.5078 19.2785 23.5078C17.8449 23.5078 16.6786 22.3415 16.6786 20.9079Z"
                                fill={customizerShareButton.fillColor}
                              />
                            </svg>
                          </button>
                        </>
                      )}
                      {customizerShareButton?.iconBtnTrue === "false" && (
                        <>
                          <button
                            class="shareTextBtn"
                            style={customizerShareButton}
                          >
                            Share
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div class="products_slid">
                  <Slider {...settings}>
                    <div>
                      <img src="/assets/Image/product/mug.png" />
                    </div>
                    <div>
                      <img src="/assets/Image/product/mug.png" />
                    </div>
                  </Slider>
                </div>
                <div
                  class="products_add_button"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <button class="add_button" style={customizerAddToCartBtn}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
        {customizerData?.ThemeType?.ThemeSelect === "Theme 2" && (
          <div className="products_wrapper">
            <div className="products_col">
              <div className="products_top_section">
                <div className="products_top_section_row">
                  <div class="products_button">
                    <button class="products_zomm_button">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_0_4)">
                          <path
                            d="M15.452 1.00001C13.7525 0.997435 12.078 1.41015 10.5742 2.20228C9.07039 2.99442 7.78268 4.14201 6.82302 5.5453C5.86335 6.9486 5.26076 8.56515 5.06761 10.2544C4.87447 11.9437 5.09662 13.6547 5.71476 15.2385C6.33289 16.8224 7.3283 18.2313 8.61449 19.3427C9.90067 20.4541 11.4387 21.2345 13.0949 21.6159C14.7511 21.9974 16.4754 21.9684 18.1178 21.5315C19.7603 21.0946 21.2712 20.263 22.5194 19.1089L29.4114 26L30 25.4111L23.1163 18.5117C24.4883 17.0203 25.3968 15.1615 25.7308 13.1623C26.0648 11.1631 25.8099 9.10983 24.9973 7.25308C24.1846 5.39632 22.8493 3.81636 21.1544 2.70599C19.4594 1.59561 17.478 1.00285 15.452 1.00001ZM15.452 21.0468C13.553 21.0468 11.6967 20.4834 10.1178 19.4279C8.53888 18.3724 7.30826 16.8722 6.58157 15.117C5.85487 13.3618 5.66473 11.4304 6.0352 9.56705C6.40567 7.70372 7.3201 5.99214 8.66286 4.64875C10.0056 3.30536 11.7164 2.39051 13.5789 2.01987C15.4413 1.64923 17.3718 1.83945 19.1262 2.56649C20.8806 3.29352 22.3802 4.52472 23.4352 6.10437C24.4902 7.68403 25.0533 9.5412 25.0533 11.441C25.0533 13.9886 24.0417 16.4319 22.2411 18.2333C20.4405 20.0347 17.9984 21.0468 15.452 21.0468Z"
                            fill={customizerZoom.fillColor}
                          />
                        </g>
                        <path
                          d="M15.7533 7.81822V7.69322H15.6283H14.8262H14.7012V7.81822V10.7012H11.8182H11.6932V10.8262V11.6284V11.7534H11.8182H14.7012V14.6364V14.7614H14.8262H15.6283H15.7533V14.6364V11.7534H18.6363H18.7613V11.6284V10.8262V10.7012H18.6363H15.7533V7.81822Z"
                          fill={customizerZoom.fillColor}
                          stroke={customizerZoom.fillColor}
                          stroke-width="0.25"
                        />
                      </svg>
                    </button>
                    {customizerShareButton?.iconBtnTrue === "true" && (
                        <>
                          <button
                            class="share_button"
                            style={customizerShareButton}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M19.2785 16.8161C18.0807 16.8161 17.0015 17.3334 16.2525 18.1562L9.51555 13.9837C9.69542 13.5233 9.79517 13.0232 9.79517 12.5C9.79517 11.9766 9.69542 11.4765 9.51555 11.0162L16.2525 6.84355C17.0015 7.66638 18.0807 8.18384 19.2785 8.18384C21.5349 8.18384 23.3705 6.34822 23.3705 4.09183C23.3705 1.83544 21.5349 0 19.2785 0C17.0221 0 15.1865 1.83563 15.1865 4.09202C15.1865 4.6152 15.2864 5.11531 15.4661 5.57574L8.72935 9.74825C7.98033 8.92542 6.90116 8.40796 5.70335 8.40796C3.44696 8.40796 1.61133 10.2438 1.61133 12.5C1.61133 14.7564 3.44696 16.592 5.70335 16.592C6.90116 16.592 7.98033 16.0747 8.72935 15.2517L15.4661 19.4242C15.2864 19.8846 15.1865 20.3847 15.1865 20.9081C15.1865 23.1643 17.0221 24.9999 19.2785 24.9999C21.5349 24.9999 23.3705 23.1643 23.3705 20.9081C23.3705 18.6517 21.5349 16.8161 19.2785 16.8161ZM16.6786 4.09202C16.6786 2.65846 17.8449 1.49212 19.2785 1.49212C20.712 1.49212 21.8784 2.65846 21.8784 4.09202C21.8784 5.52558 20.712 6.69192 19.2785 6.69192C17.8449 6.69192 16.6786 5.52558 16.6786 4.09202ZM5.70335 15.0999C4.26959 15.0999 3.10325 13.9335 3.10325 12.5C3.10325 11.0664 4.26959 9.90007 5.70335 9.90007C7.13691 9.90007 8.30306 11.0664 8.30306 12.5C8.30306 13.9335 7.13691 15.0999 5.70335 15.0999ZM16.6786 20.9079C16.6786 19.4744 17.8449 18.308 19.2785 18.308C20.712 18.308 21.8784 19.4744 21.8784 20.9079C21.8784 22.3415 20.712 23.5078 19.2785 23.5078C17.8449 23.5078 16.6786 22.3415 16.6786 20.9079Z"
                                fill={customizerShareButton.fillColor}
                              />
                            </svg>
                          </button>
                        </>
                      )}
                      {customizerShareButton?.iconBtnTrue === "false" && (
                        <>
                          <button
                            class="shareTextBtn"
                            style={customizerShareButton}
                          >
                            Share
                          </button>
                        </>
                      )}
                  </div>
                  <div className="products_amount">
                    <span className="currency_symbol">$</span>
                    <span className="currency_value">24</span>
                  </div>
                </div>
              </div>
              <div class="products_slid">
                <Slider {...settings}>
                  <div>
                    <img src="/assets/Image/product/mug.png" />
                  </div>
                  <div>
                    <img src="/assets/Image/product/mug.png" />
                  </div>
                </Slider>
              </div>
              <div className="products_add_button">
                <button
                  className="add_button"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={customizerAddToCartBtn}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="products_col" style={customizerLayerPanel}>
              <div
                className="products_wrapper_tile caption-top  col_padding"
                style={customizerTitleStyle}
              >
                Product 1
              </div>
              <div className="products_wrapper_tag__main">
                <div className="products__cont__three">
                  <div className="br__bttotom">
                    <div
                      onClick={toggleAccordionOne}
                      className={`accordion-title ${
                        accordionOneOpen ? "open" : ""
                      }`}
                    >
                      <h2 className="products_wrapper_tag ">Mug Colour</h2>
                    </div>
                    <div
                      className={`accordion-content ${
                        accordionOneOpen ? "open" : ""
                      }`}
                    >
                      <div className="colors__box">
                        <div class="products_colour_section">
                          <span class="products-active"></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="br__bttotom">
                    <div
                      onClick={toggleAccordionTwo}
                      className={`accordion-title ${
                        accordionTwoOpen ? "open" : ""
                      }`}
                    >
                      <h2 className="products_wrapper_tag ">Handle Colour</h2>
                    </div>
                    <div
                      className={`accordion-content ${
                        accordionTwoOpen ? "open" : ""
                      }`}
                    >
                      <div className="colors__box">
                        <div class="products_colour_section">
                          <span class="products-active"></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="br__bttotom">
                    <div
                      onClick={toggleAccordionThree}
                      className={`accordion-title ${
                        accordionThreeOpen ? "open" : ""
                      }`}
                    >
                      <h2 className="products_wrapper_tag ">Enter Text</h2>
                    </div>
                    <div
                      className={`accordion-content ${
                        accordionThreeOpen ? "open" : ""
                      }`}
                    >
                      <h4 class="text__printed__acc">
                        Enter Text to be Printed
                      </h4>
                      <input
                        placeholder="Your Text"
                        class="input__text__field__acc"
                      />
                    </div>
                  </div>
                </div>

                <div className="products_wrapper_row">
                  <div className="products_wrapper_col"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainContent;
