import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const InputTextDrpDown = () => {
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        InputTextDropDown: {
          InputTxtBgClr: "#ffff",
          InputTxtHeight: "",
          InputTxtRoundings: "#ffff",
          InputTxtBrdClr: "",
          InputTxtFontFmly: "",
          InputTextFontClr: "",
          InputTextFontSize: "",
          InputTextDrpDownMenuBgClr:"",
          InputTextDrpDownHovOpClr:"",
          InputTextDrpDownSelcOpClr:"",
          InputTextDrpDownMenuFtClr:""
        },
      }
    );
  });
  return (
    <>
      <div className="right_wrapper_title">Text Input & Dropdown</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Height</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Roundings</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Font family</div>
        <div className="custom-select">
          <select>
            <option value="none" selected disabled hidden>
              Poppins
            </option>
            <option value="0">Poppins</option>
            <option value="1">rubik</option>
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
            <input type="text" className="right_wrapper_input" id="name" />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Dropdown menu background colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Dropdown hovered options colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Dropdown selected option colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Dropdown menu font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" style={{ color: "#2D2D2D" }}>
                  <button aria-labelledby="clr-open-label"></button>
                  <input type="text" className="coloris" value="#ffd21af" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTextDrpDown;
