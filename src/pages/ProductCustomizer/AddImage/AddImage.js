/////////////////////////////////COlor is showing with other images////////////////////
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Stage, Layer, Text, Image as KonvaImage, Rect } from "react-konva";
import "./AddImage.css";
// import { setDownloadedImage } from "../../../features/addImageSlice";
import { useDispatch } from "react-redux";
import { setImageColorData, setSaveImage } from "../../../features/customizeProductSlice";

const AddImage = () => {
  const title = useSelector((state) => state?.title);
  const customizeProduct = useSelector(
    (state) => state?.customizeProduct?.layerData
  );
  const ImageToColor = useSelector(
    (state) => state?.customizeProduct?.imageColorData
  );
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
  const [image, setImage] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTextColor, setSelectedTextColor] = useState(null);
  const [showImage, setShowImage] = useState([]); 
  const [imageToApplyColor, setImageToApplyColor] = useState();
  const [showText, setShowText] = useState([]);
  const stageRef = useRef(null);
  const dispatch = useDispatch();
  const [downloadedImageLink, setDownloadedImageLink] = useState('');
  // <--------------------------Image Data-------------------------->
  const handleDownloadClick = () => {
  //   const stage = stageRef.current.getStage();

  //   const dataURL = stage.toDataURL({
  //     pixelRatio: 2,
  //   });
    
  //   setDownloadedImageLink(dataURL)
  // ;
  //   dispatch(setSaveImage(dataURL))

  };

  console.log("DD",downloadedImageLink)
  useEffect(() => {
    const imagesToLoad = showImage.map((imageObj) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve(img);
        img.src = imageObj.url;
      });
    });

    Promise.all(imagesToLoad)
      .then((loadedImages) => {
        setImage(loadedImages);
      })
      .catch((error) => {
        // console.error("Error loading images:", error);
      });
  }, [showImage]);
  const [editedImage, setEditedImage] = useState(null);

  
    const handleDragEnd = (e, id) => {
  // const draggedText = showText.find((text) => text.id === id);
  // if (draggedText) {
  //   draggedText.x = e.target.x();
  //   draggedText.y = e.target.y();
  // }
  // setShowText([...showText]);
  setTextPosition({
          x: e.target.x(),
          y: e.target.y(),
        });
};

  // <------------------------Color Data------------------------>
  const handleColorClick = (e,color) => {
    console.log("color",color)
    if(color=="Dropdown" ){
      console.log("colorva;ue",e.target.value)
      color=e.target.value
      console.log("color",color)
      setSelectedColor(color);
      const testdata = showImage?.filter((el) =>
        ImageToColor?.images?.map((item) => item.id).includes(el.id)
      );
      const imageToApplyColor = testdata[0];
      applyColorToImage(imageToApplyColor, color);
    }
    else{
    setSelectedColor(color.color);
    const testdata = showImage?.filter((el) =>
      ImageToColor?.images?.map((item) => item.id).includes(el.id)
    );
    const imageToApplyColor = testdata[0];
    applyColorToImage(imageToApplyColor, color.color);
    }
  };

  useEffect(() => {}, [showImage]);

  const applyColorToImage = (imageToApplyColor, selectedColor) => {
    console.log("selere", selectedColor);
    if (imageToApplyColor) {
      const newImages = image.map((img, index) => {
        console.log("image.src", img.src);
        console.log(
          "imageToApplyColor.url",
          imageToApplyColor.url.startsWith("blob:")
        );
        console.log("image status", img.src === imageToApplyColor?.url);
        //  console.log ("image   formate",imageToApplyColor?.url.startsWith())

        if (img.src === imageToApplyColor.url) {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          ctx.globalCompositeOperation = "color";
          ctx.fillStyle = `rgba(${hexToRgb(selectedColor)}, 0.7)`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.globalCompositeOperation = "destination-in";
          ctx.drawImage(img, 0, 0);

          const newImage = new window.Image();
          newImage.src = canvas.toDataURL("image/png");
          return newImage;
        }
        return img;
      });

      setImage(newImages);

    }
    
  };
console.log()
  //////////////////////////
  const hexToRgb = (hex) => {
    hex = hex?.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  };
  useEffect(() => {}, [title?.uploadedImage]);

  const handleLayerImage = (e, id) => {
    if (id == "DropDown") {
      id = e.target.value;
    }
    let foundLayerId = null;
    customizeProduct.forEach((item) => {
      const foundImage = item?.images?.find((image) => image.id === id);

      if (foundImage) {
        foundLayerId = item.layerId;
      }
    });

    if (foundLayerId) {
      const existingImageIndex = showImage?.findIndex(
        (existingImage) => existingImage.layerId === foundLayerId
      );

      const imageToUpdate = customizeProduct
        .map((item) =>
          item?.images?.find(
            (image) => image.id === id && item.layerId === foundLayerId
          )
        )
        .filter(Boolean)[0];

      if (imageToUpdate) {
        const updatedShowImage = [...showImage];

        if (existingImageIndex !== -1) {
          updatedShowImage[existingImageIndex] = imageToUpdate;
        } else {
          updatedShowImage.push(imageToUpdate);
        }
        setShowImage(updatedShowImage);
        console.log("updateShowcv", updatedShowImage);
      }
    }
  };

  const handleLayerText = (e, id) => {
    let foundLayerId = null;
    customizeProduct.forEach((item) => {
      const foundText = item?.text?.find((el) => el.id === id);
      console.log("foundText", foundText);
      setShowText((prevShowText) => [...prevShowText, foundText].filter(Boolean));
    });
  };

  const handleTextColorClick = (color) => {
    setSelectedTextColor(color);
    applyTextColorToImage(color);
  };
  const applyTextColorToImage = (newTextColor) => {
    const textElement = stageRef.current.findOne('Text');
    if (textElement) {
      textElement.fill(newTextColor);
      stageRef.current.batchDraw();
    }
  };

  return (
    <div className="center_wrapper">
      <div className="products_wrapper">
        <div className="products_col_left">
          <div className="droducts_col_title">
            <p className="m-4 mb-5 ">Product Name</p> <br />
          </div>
          {/* <div className="border_div"></div> */}
          <div className="untitle_title">
            {/* <>-------------------Image Data---------------------</> */}
            {customizeProduct?.map((layer) => (
              <div key={layer.layerId} className="row mb-3 mx-1">
                <p className="p-head">
                  {layer.dispalyType == "Image" &&
                  <>
                    {layer.imageTitle || "Untitled Image"}
                    <div className="border_div"></div>
                    </>
                    }
                  
                </p>
              
                {layer.InputType == "Thumbnail" && layer.dispalyType=="Image" &&
                  layer?.images?.map((image) => (
                    <>
                      <div
                        key={image.id}
                        className={ layer.thumbnailType==true ? "upload_image_large me-3": "upload_image me-3"}
                        onClick={(e) => handleLayerImage(e, image.id)}
                      >
                        <img
                          className="dummyImage"
                          src={image.url}
                          height="100px"
                          width="100px"
                        />
                      {layer.labeType && <p> {image?.imageName} </p>}
                      </div>
                    </>
                  ))}

                {layer.InputType === "Dropdown" &&  layer.dispalyType=="Image" &&(
                  <select
                    onChange={(e) => handleLayerImage(e, "DropDown")}
                    defaultValue=""
                  >
                    <option disabled value="">
                     </option>
                    {layer?.images?.map((image) => (
                      <option key={image.id} value={image.id}>
                        {image.imageName}
                      </option>
                    ))}
                  </select>
                )}
                {layer.InputType === "Radio" && layer.dispalyType=="Image" && (
                  <div>
                    {layer?.images?.map((image) => (
                      <div key={image.id}>
                        <input
                          type="radio"
                          id={image.id}
                          name="dropdownOptions"
                          value={image.id}
                          onChange={(e) => handleLayerImage(e, image.id)}
                        />
                        <label>{image.imageName}</label>
                      </div>
                    ))}
                  </div>
                )}
                {layer.InputType === "Checkbox" && layer.dispalyType=="Image" && (
                  <div>
                    {layer?.images?.map((image) => (
                      <div key={image.id}>
                        <input
                          type="checkbox"
                          id={image.id}
                          name="dropdownOptions"
                          value={image.id}
                          onChange={(e) => handleLayerImage(e, image.id)}
                        />
                        <label>{image.imageName}</label>
                      </div>
                    ))}
                  </div>
                )}

                {layer.InputType == "Label" && layer.dispalyType=="Image" &&
                  layer?.images?.map((image) => (
                    <>
                      <div
                        key={image.id}
                        className="py-2 mx-3 my-2"
                        style={{ border: "2px solid black", width: "40%" }}
                        onClick={(e) => handleLayerImage(e, image.id)}
                      >
                        {image.imageName}
                      </div>
                    </>
                  ))}
              </div>
            ))}

            {/* <>-----------------Color Data----------------</> */}
            {customizeProduct?.map((layer) => (
              <>
                <div  key={layer.layerId} className="row mb-3 mx-1">
                  <p className="p-head">
                    {layer.dispalyType == "Colour" &&
                      (layer.imageTitle || "Untitled Image")}
                  </p>
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                  {layer.InputType == "Thumbnail"  && layer.dispalyType=="Colour" &&
                    layer?.colours?.map((color, index) => (
                      <div>
                        <div
                          key={index}
                          style={{
                            backgroundColor: color.color,
                            margin: "5px",
                          }}
                          className={ layer.thumbnailType ? "upload_image_large me-3": "upload_image me-3"}
                          onClick={(e) => handleColorClick(e,color)}
                        >
                        </div>
                           {layer.labeType && <p className="uplaod_p"> {color?.colorName} </p>}

                      </div>
                    ))}
                    {layer.InputType === "Dropdown" &&  layer.dispalyType=="Colour" &&(
                  <select
                    onChange={(e) =>  handleColorClick(e,"Dropdown")}
                    defaultValue=""
                  >
                    <option disabled value="">
                     </option>
                    {layer?.colours?.map((color,) => (
                      <option key={color.id} value={color.color}>
                        {color?.colorName}
                      </option>
                    ))}
                  </select>
                )}
                {layer.InputType === "Radio" && layer.dispalyType=="Colour" && (
                  <div>
                    {layer?.colours?.map((color) => (
                      <div key={color.id}>
                        <input
                          type="radio"
                          id={color.id}
                          name="dropdownOptions"
                          value={color.color}
                          onChange={(e) => handleLayerImage(e, color.id)}
                        />
                        <label>{color.colorName}</label>
                      </div>
                    ))}
                  </div>
                )}
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* ///////////////////// */}
          {customizeProduct?.map((layer) => (
            <div key={layer.layerId} className="row mb-3 mx-1">
              <p className="p-head">
                {layer.dispalyType == "Text" &&
                  (layer.imageTitle || "Untitled Image")}
              </p>
              {layer?.text?.map((text) => (
                <div
                  key={text.id}
                  className="upload_image me-3"  
                  onClick={(e) => handleLayerText(e, text.id)}
                >
                  <p>{text?.imageText}</p>
                </div>
              ))}
            </div>
          ))}
          {customizeProduct?.map((layer) => (
            <div key={layer.layerId} className="row mb-3 mx-1">
              <p className="p-head">
                {layer.dispalyType == "Text Colour" &&
                  (layer.imageTitle || "Untitled Image")}
              </p>
              {layer?.colours?.map((color) => (
                <div
                  key={color.id}
                style={{background:color.color}}
                  className="upload_image me-3"  
                  onClick={() => handleTextColorClick(color.color)}
                >
                  {/* <p>{color?.imageText}</p> */}
                </div>
              ))}
            </div>
          ))}
          
        </div>
        
        {/* ?????????????????????????//// */}
        <div className="products_col" style={{ backgroundColor: "white" }}>
          <div
            className="mt-5"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stage width={400} height={400} ref={stageRef}>
              <Layer>
                {image.map((imageObj, index) => (
                  <KonvaImage
                    key={index}
                    image={imageObj}
                    width={400}
                    height={400}
                  />
                ))}
                {showText.map((text)=>
                <Text
                  text={text?.imageText}
                  x={textPosition.x}
                  y={textPosition.y}
                  draggable
                  onDragEnd={handleDragEnd}

                  // onDragEnd={(e) => handleDragEnd(e, text.id)} 
                  zIndex={999}
                  fontSize={30}
                />
                )}
              </Layer>
            </Stage>
            <button onClick={handleDownloadClick}>Save</button>
            <p>Your product will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
