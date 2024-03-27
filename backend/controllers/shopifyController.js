const axios = require('axios');

const fetchProducts = async (req, res) => {
	try {
		const response = await axios.get(`https://${process.env.SHOP_DOMAIN}/admin/api/2022-01/products.json`, {
			headers: {
				'X-Shopify-Access-Token': process.env.ACCESS_TOKEN
			}
		});
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const createProduct = async (req, res) => {
	try {
		const { title, price, body_html } = req.body;
		const productData = {
			product: {
				title,
				body_html,
				variants: [{ price }]
			}
		};
		const response = await axios.post(`https://${process.env.SHOP_DOMAIN}/admin/api/2022-01/products.json`, productData, {
			headers: {
				'X-Shopify-Access-Token': process.env.ACCESS_TOKEN
			}
		});
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

module.exports = {
	fetchProducts,
	createProduct
};
