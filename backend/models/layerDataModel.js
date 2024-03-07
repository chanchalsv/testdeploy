const mongoose = require('mongoose');

const layerDataSchema = new mongoose.Schema({
	layerId: { type: String, required: true },
	inputType: { type: String, required: true },
	displayType: { type: String, required: true },
	imageTitle: { type: String, required: true },
	thumbnailType: { type: Boolean, default: false },
	labelType: { type: Boolean, default: false },
	imageName: { type: String },
	images: [{
		id: { type: String },
		layerId: { type: String },
		imageName: { type: String },
		url: { type: String }
	}],
	colors: [{
		id: { type: String },
		layerId: { type: String },
		colorName: { type: String },
		color: { type: String }
	}],
	textName: { type: String },
	text: [{
		id: { type: String },
		layerId: { type: String },
		textName: { type: String },
		imageText: { type: String }
	}]
});

module.exports = mongoose.model('LayerData', layerDataSchema);