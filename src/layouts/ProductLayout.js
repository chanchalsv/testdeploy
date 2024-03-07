import React from 'react';
import Header from "../pages/Theme1/Header.js"
// import Sidebar from "../components/Sidebar";
import Sidebar from '../pages/Theme1/Sidebar';
import RightSidebar from "../pages/Theme1/RightSidebar/RightSidebar.js"
const ProductLayout = ({ children }) => {
	return (
		<>
			<main id="main_section dashboard_main_section">
				<Header />
				<section className="wrapper_section">
					<Sidebar />
					{children}
				<RightSidebar></RightSidebar>
				</section>
			</main>
		</>
	)
}

export default ProductLayout