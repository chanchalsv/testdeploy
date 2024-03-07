const Customizer = require('../models/customizerModel');

const getCustomizerData = async (req, res) => {
	try {
		const data = await Customizer.findOne();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const postCustomizerData = async (req, res) => {
	try {
		const newData = req.body; // Assuming the data is sent in the request body
		const data = await Customizer.create(newData); // Pass the entire req.body object
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

module.exports = { getCustomizerData, postCustomizerData };
