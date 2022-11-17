import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import blue from "../../img/singluarity.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
return (

	<div>
		<div className="nav sticky-top container-fluid d-flex">
			<nav class="navbar">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
  
    <a class="navbar-brand">
      <img src={blue} width="50" height="50" class="d-inline-block align-text-top"/> 
    </a>
  
</nav>
</div>










<div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
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
