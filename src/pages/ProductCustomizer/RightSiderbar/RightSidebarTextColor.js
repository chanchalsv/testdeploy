import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "./ColorPiker";
import { SketchPicker } from "react-color";
import "./RightSidebar.css";
import {
  setActiveLayerId,
  setImageColorData,
  setLayerData,
  setTextColorData,
  setUpdateLayerData,
} from "../../../features/customizeProductSlice";
const RightSidebarTextColor = () => {
  const dispatch = useDispatch();
  const colorRed = useSelector((state) => state?.title);
  const selectedData = JSON.parse(localStorage.getItem("selectedData")) || {};
  const ProductCustomizer = useSelector((state) => state.customizeProduct);
  const [colors, setColors] = useState([]);
  const [previewColor, setPreviewColor] = useState("#808080");
  const [titleKeyPress, setTitleKeypress] = useState("");
  const [title, setTitle] = useState("");
  const [enterTitle, setEnterTitle] = useState("");
  const [displayTypeModal, setDisplayTypeModal] = useState(false);
  const [displayTypeOption, setDisplayTypeOption] = useState();
  const [rightSidebarColor, setRightSidebarColor] = useState(false);
  const [createColorModal, setCreateColorModal] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState();
  const [colorShow, setColorShow] = useState("#808080");
  const [applyColor, setApplyColor] = useState([]);
  const [createColorLayer, setCreateColorLayer] = useState()
  const [selectedOption, setSelectedOption] = useState("");
  const [thumbnailShow,setThumbnailShow]=useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const ActiveLayerData = useSelector(
    (state) => state?.customizeProduct?.activeLayerData
  );
  useEffect(() => {
    // Initialize selectedColor state only on component mount
    setSelectedColor("#808080");
  }, []);
  useEffect(() => {
    setTitle(ProductCustomizer?.activeLayerData?.imageTitle);
  }, [selectedLayer]);

  useEffect(() => {
    const foundObject = ProductCustomizer?.layerData?.find(
      (obj) => obj.layerId === ProductCustomizer?.activeLayerId
    );
    setSelectedLayer(foundObject);
  }, [ProductCustomizer]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const foundObject = ProductCustomizer?.layerData?.filter(
      (obj) => obj.dispalyType === "Text"
    );
    setApplyColor(foundObject);
    console.log("text Color")
  }, [ProductCustomizer]);
  console.log("applyCOlor", applyColor);

  useEffect(() => {}, []);
  const handleCreateColor = () => {
    setColors((prevColors) => [...prevColors, selectedColor]);
    setPreviewColor("#808080");
  };
  
  const handleTitleKeyPress = (e) => {
    setTitleKeypress(e.target.value);
  };
  
  useEffect(() => {
    if (colors && selectedColor !== "") {
      const foundObject = ProductCustomizer?.layerData?.find(
        (obj) => obj.layerId === ProductCustomizer?.activeLayerId
      );
  
      const activeLayer = ProductCustomizer?.activeLayerId;
      const colourArray = foundObject?.colours;
  
      const id =
        Math.random().toString(36).substr(2, 9) + "_" + Date.now().toString(36);
  
      const newColorObject = {
        id,
        layerId: activeLayer,
        colorName: titleKeyPress,
        color: selectedColor,
      };
  
      const colourData = Array.isArray(colourArray)
        ? [...colourArray, newColorObject]
        : [newColorObject];
  
      const updatedData = { colours: colourData };
      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    }
  }, [colors]);

  const haldleColorPicker = () => {
    setRightSidebarColor(true);
    setCreateColorModal(false);
    const data = JSON.parse(localStorage.getItem("selectedData")) || {};
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {}, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const activeLayer = ProductCustomizer?.activeLayerId;
      const updatedData = { imageTitle: title };

      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    }
  };

  const handleDisplayType = () => {
    setDisplayTypeModal(!displayTypeModal);
  };
  const handleDisplayTypeOption = (e, type) => {
    setDisplayTypeOption(type);
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { dispalyType: type, textColour: null };

      dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  

    handleDisplayType();
  };
  const createImageColorLayer = (e, item) => {
    console.log("itemmm", item);
    setCreateColorLayer(item);
    setCreateColorModal(false);
    dispatch(setTextColorData(item))
  };


  const handleImageLayer = () => {
    const id =
      Math.random().toString(36).substr(2, 9) + "_" + Date.now().toString(36);
    dispatch(setActiveLayerId(id));
    dispatch(
      setLayerData({
        layerId: id,
        InputType: selectedLayer?.InputType,
        dispalyType: "Text",
        imageTitle: "Untitled Image",
      })
    );
  };
  console.log("cdsaaffsdfs", createColorLayer);
  const handleThumbnailChange = (event) => {
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { thumbnailType:event.target.checked };
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  };
  const handleLabelChange = (event) => {
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { labeType:event.target.checked };
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
  };

  // <----------------Input type ---------------------->
  const handleInputType = (event) => {
    console.log("input Type",event.target.value)
    setSelectedOption(event.target.value);
    const activeLayer = ProductCustomizer?.activeLayerId;
    const updatedData = { InputType:event.target.value};
    dispatch(setUpdateLayerData({ activeLayer, updatedData }));
    setThumbnailShow(event.target.checked )
  };

  return (
    <>
      <div class="add_theme_inner_container">
        <div class="add_theme_inner_section">
          <div class="add_theme_cont layer_setting">
            <span>Layer Settings</span>
          </div>
        </div>
        <hr />

        <div class="add_theme_cont">
          <span>Title</span>
        </div>
        <input
          type="text"
          id="lname"
          name="lname"
          value={title}
          placeholder="Text Color"
          onChange={handleTitle}
          onKeyPress={handleKeyPress}
        />
        <hr />
        <div class="file_select_section">
          <span class="file_select_title">Untitled Color</span>

          <span class="file_select_icon">
            <button type="button" className="" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="2.5"
                  stroke="#9C9C9C"
                />
                <path
                  d="M10 5.83325L10 14.1666"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.166 10H5.83268"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <hr />
      {show && (
        <div className="side-modal " style={{ height: "400px" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content px-3">
              <div className="modal-header">
                <h5 className="modal-title my-2 mx-2">Select Colour</h5>
                <button
                  type="button"
                  className="close "
                  onClick={handleClose}
                  aria-label="Close"
                  style={{
                    border: "none",
                    background: "white",
                    fontSize: "30px",
                    color: "gray",
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form class="imageForm">
                  <div class="form_section">
                    <input
                      className="image_title px-2"
                      type="text"
                      placeholder="Untitled Layer"
                      onChange={handleTitleKeyPress}
                    />
                  </div>
                  <div class="form_section">
                    <div>
                      <div>
                        <div
                          style={{
                            marginBottom: "10px",
                            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            borderRadius: "5px",
                          }}
                        >
                          <SketchPicker
                            color={selectedColor}
                            onChangeComplete={(color) => {
                              setSelectedColor(color.hex);
                              setPreviewColor(color.hex);
                            }}
                            styles={{
                              default: {
                                picker: {
                                  boxShadow: "none",
                                  marginBottom: "10px",
                                },
                              },
                            }}
                          />
                          <div className="buttonContainer me-3">
                            <button
                              type="button"
                              onClick={handleCreateColor}
                              className="btn btn-primary"
                            >
                              OK
                            </button>
                            <button
                              type="button"
                              onClick={handleClose}
                              className="btn btn-outline-dark"
                            >
                              Cancle
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div class="add_theme_input_section">
        <div class="add_theme_cont">
          <span> Input type</span>
        </div>
        <div className="">
          <select
            className="add_theme_inner_container_select"
            value={selectedLayer?.InputType} // Set default value to "Thumbnail" or the actual InputType
            onChange={(e) => handleInputType(e)}
          >
            <option value="Thumbnail">Thumbnail</option>
            <option value="Dropdown">Dropdown</option>
            <option value="Radio">Radio Button</option>
            <option value="Label">Label</option>
            <option value="Checkbox">Checkbox</option>
          </select>
      
        </div>

        <div class="switch_button_row">
          <span class="printing_methods_switch_tag">Large thumbnail</span>
          <label class="printing_methods_switch_button">
            <input type="checkbox" checked={ActiveLayerData?.thumbnailType} onChange={handleThumbnailChange}/>
            <span class="printing_methods_switch_slider printing_methods_switch_round"></span>
          </label>
        </div>

        <div id="myModal" class="modal">
          <p>This is your modal content.</p>
          <button onclick="closeModal()">Close Modal</button>
        </div>

        <div class="switch_button_row">
          <span class="printing_methods_switch_tag">Show name label</span>
          <label class="printing_methods_switch_button">
            <input type="checkbox" checked={ActiveLayerData?.labeType} onChange={handleLabelChange}/>
            <span class="printing_methods_switch_slider printing_methods_switch_round"></span>
          </label>
        </div>
      </div>
      {/* ///////////////// */}
      <hr />
      <div class="add_theme_input_section">
        <div class="add_theme_cont">
          <span className=""> Display type</span>
        </div>
        {displayTypeModal && (
          <div class="mmodal mmodalDisplayType">
            <form id="imageForm">
              <ul class="dispaly_modal_menu">
                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "None")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/Design.png" />
                  </span>
                  <span class="add_modal_name">None</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Image")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/img.svg" />
                  </span>
                  <span class="add_modal_name">Image</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Colour")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/colour.svg" />
                  </span>
                  <span class="add_modal_name">Colour</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Logo")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/logo_svg.svg" />
                  </span>
                  <span class="add_modal_name">Logo</span>
                </li>
                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Text")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/text.svg" />
                  </span>
                  <span class="add_modal_name">Text</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Font")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/font.svg" />
                  </span>
                  <span class="add_modal_name">Font</span>
                </li>

                <li
                  class="dispaly_modal_list"
                  onClick={(e) => handleDisplayTypeOption(e, "Font Colour")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/font_cl.svg" />
                  </span>
                  <span class="add_modal_name">Font Colour</span>
                </li>
              </ul>
            </form>
          </div>
        )}

        <div class="file_select_section_div">
          <span class="file_select_title">{selectedLayer?.dispalyType}</span>
          <span class="file_select_icon">
            <button onClick={handleDisplayType}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="2.5"
                  stroke="#9C9C9C"
                />
                <path
                  d="M10 5.83325L10 14.1666"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.166 10H5.83268"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <hr />
      <>
        {createColorModal && (
          <div className="side-modal-div " style={{ height: "300px" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content px-3">
                <form id="imageForm" className="form_image">
                  <div class="creat_modal_section">
                    <div class="creat_modal_section_row creat_div">
                      <span class="creat_modal_icon">
                        <img src="assets/Image/modal/colour.svg" />
                      </span>
                      <span
                        class="creat_modal_title"
                        onClick={haldleColorPicker}
                      >
                        Create new colour layer
                      </span>
                      <span class="creat_modal_add" onClick={haldleColorPicker}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M5.16797 1L5.16797 9.33333"
                            stroke="#2D2D2D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M9.33398 5.16675L1.00065 5.16675"
                            stroke="#2D2D2D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="creat_modal_section">
                    <span>or</span>
                  </div>

                  <div class="add_theme_cont add_theme_cont_div">
                    <span> Select existing layer</span>
                    <input
                      type="search"
                      id="search"
                      name="search"
                      value="Search layers"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    {applyColor?.map((el) => (
                      <div
                        class="creat_modal_producat "
                        key={el?.layerId}
                        onClick={(e) => createImageColorLayer(e, el)}
                      >
                        <span class="creat_modal_icon">
                          <img src="assets/Image/modal/img.svg" />
                        </span>
                        <span class="creat_modal_name">
                          <div>{el.imageTitle}</div>
                        </span>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <div class="add_theme_cont create_layer">
          <span> Create</span>
        </div>
        <div class="file_select_section_div">
          <span class="file_select_title">Create Colour Layer</span>

          <span class="file_select_icon">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="2.5"
                  stroke="#9C9C9C"
                />
                <path
                  d="M10 5.83325L10 14.1666"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.166 10H5.83268"
                  stroke="#2D2D2D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </span>
        </div>

        <div class="creat_layer_inner_section mt-3">
          <div class="creat_layer_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM18.3536 13.8536C18.5488 13.6583 18.5488 13.3417 18.3536 13.1464L15.1716 9.96447C14.9763 9.7692 14.6597 9.7692 14.4645 9.96447C14.2692 10.1597 14.2692 10.4763 14.4645 10.6716L17.2929 13.5L14.4645 16.3284C14.2692 16.5237 14.2692 16.8403 14.4645 17.0355C14.6597 17.2308 14.9763 17.2308 15.1716 17.0355L18.3536 13.8536ZM0.5 1V8.5H1.5V1H0.5ZM6 14H18V13H6V14ZM0.5 8.5C0.5 11.5376 2.96243 14 6 14V13C3.51472 13 1.5 10.9853 1.5 8.5H0.5Z"
                fill="#2D2D2D"
              />
            </svg>
            Apply on
          </div>
          {applyColor.length == 0 ? (
            <button class="creat_layer_inner_btn" onClick={handleImageLayer}>
              <div class="creat_modal_producat">
                <span class="creat_modal_icon">
                  <img src="../Image/them/UntitledImage.svg" />
                </span>
                <span class="creat_modal_name">Image Layer</span>
              </div>
            </button>
          ) : (
            <button
              class="creat_layer_inner_btn"
              onClick={() => {
                setCreateColorModal(!createColorModal);
              }}
            >
              <div class="creat_modal_producat">
                <span class="creat_modal_icon">
                  <img src="../Image/them/UntitledImage.svg" />
                </span>
                <span class="creat_modal_name">
                  {createColorLayer
                    ? createColorLayer?.imageTitle
                    : "Image Layer"}
                </span>
              </div>
            </button>
          )}
        </div>
      </>
    </>
  );
};

export default RightSidebarTextColor;
