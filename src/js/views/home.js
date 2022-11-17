import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	return (

		<div>

			<div class="wrap">
				<div class="search">
					<input className="generate-search" type="text" class="searchTerm" placeholder="What are you looking for?" />
					<button type="submit" class="searchButton">
						<i class="fa fa-search"></i>
					</button>
				</div>
			</div>


			<div class="footer text-muted">
			</div>

		</div>
	);
};
export default Home;
