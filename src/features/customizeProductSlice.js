import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  imageLayerId:"",
  activeLayerId: "",
  layerData: [],
  activeLayerData: [],
  imageColorData: [],
  imageData:[],
  textColorData:[]
};

const customizeProductSlice = createSlice({
  name: "customizeProduct",
  initialState,
  reducers: {
    setActiveLayerId: (state, action) => {
      state.activeLayerId = action.payload;
    },
    setLayerData: (state, action) => {
      state.layerData.push(action.payload);
    },
    setUpdateLayerData:(state, action)=>{
        const { activeLayer, updatedData } = action.payload;
        const index = state.layerData.findIndex((layer) => layer.layerId === activeLayer);
  
        if (index !== -1) {
          state.layerData[index] = { ...state.layerData[index], ...updatedData };
        }
    },
    setActiveLayerData: (state, action) => {
      state.activeLayerData=action.payload;
    },
    setImageColorData: (state, action) => {
      state.imageColorData=(action.payload);
    },
    setUpdateImageColorData:(state, action)=>{
      const { activeLayer, updatedData } = action.payload;
      const index = state.imageColorData.findIndex((layer) => layer.layerId === activeLayer);

      if (index !== -1) {
        state.imageColorData[index] = { ...state.imageColorData[index], ...updatedData };
      }
  },
  setImageData:(state, action) => {
    state.imageData=action.payload;
  },
  setImageLayerID:(state, action) => {
    state.imageLayerId=action.payload;
  },
  setTextColorData:(state, action) => {
    state.textColorData=action.payload;
  },
  setDeleteLayerData: (state, action) => {
    const layerIndex = state.layerData.findIndex(layer => layer.layerId === action.payload);
    if (layerIndex !== -1) {
      state.layerData.splice(layerIndex, 1);
    }
  },
  setArchiveLayerData: (state, action) => {
    const layerIndex = state.layerData.findIndex(layer => layer.layerId === action.payload);
    if (layerIndex !== -1) {
      state.layerData.splice(layerIndex, 1);
    }
  },
  resetState: () => initialState,
  },
});

export const {resetState,setTextColorData,setImageLayerID, setActiveLayerId, setActiveLayerData, setLayerData ,setImageColorData,setUpdateLayerData,setUpdateImageColorData,setImageData,setDeleteLayerData,setArchiveLayerData} =
  customizeProductSlice.actions;
export const customizeProduct = (state) => state.customizeProduct;

export default customizeProductSlice.reducer;
