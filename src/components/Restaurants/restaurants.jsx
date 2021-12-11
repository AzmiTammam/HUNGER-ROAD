import React from "react";
import Navbar from "../navbar/Navbar"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import './restaurants.scss'
function Restaurants(){
      return(
            <>
            <Navbar />
            <div className="RestaurantsContainer">
                  
                  <div className="container">
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Restaurants</li>
                        </ol>
                        </nav>
                        <div className="row">
                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                              <a href="#">
                                    <div className="card">
                                    <img src="https://i.pinimg.com/originals/4f/a2/91/4fa291fc7c8d2811958c1f8f06e70cdd.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">KFC</h5>
                                    <p className="card-text">American fast food restaurant chain headquartered in Louisville American fast food restaurant chain headquartered in Louisville</p>
                                    </div>
                                    </div>
                                    </a>
                                    <a href="#">
                                    <div className="card">
                                    <img src="https://www.poultryproducer.com/wp-content/uploads/2019/04/mcdonalds.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">McDonald's</h5>
                                    <p className="card-text">McDonald's is an American fast food company, founded in 1940</p>
                                    </div>
                                    </div>
                                    </a>
                              </div>
                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                              <a href="#">
                                    <div className="card">
                                    <img src="https://cphimageprocessor.azurewebsites.net/merchants/merchant-86985568-a0e0-48af-8de0-e248956e5e59.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Burger King</h5>
                                    <p className="card-text">American fast food restaurant chain headquartered</p>
                                    </div>
                                    </div>
                                    </a>
                                    <a href="#">
                                    <div className="card">
                                    <img src="https://logos-world.net/wp-content/uploads/2021/10/Pizza-Hut-Logo.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Pizza Hut</h5>
                                    <p className="card-text">Pizza Hut is an American multinational restaurant chain</p>
                                    </div>
                                    </div>
                                    </a>
                              </div>
                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                              <a href="#">
                                    <div className="card">
                                    <img src="https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Domino's Pizza</h5>
                                    <p className="card-text">Domino's Pizza, Inc. is an American multinational pizza</p>
                                    </div>
                                    </div>
                                    </a>
                                    <a href="#">
                                    <div className="card">
                                    <img src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/08/09165704/new-subway%C2%AE-retaurants-logo-5-HR.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Subway</h5>
                                    <p className="card-text">Subway is an American multi-national fast food restaurant franchise</p>
                                    </div>
                                    </div>
                                    </a>
                              </div>
                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                              <a href="#">
                                    <div className="card">
                                    <img src="https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Starbucks</h5>
                                    <p className="card-text">Starbucks Corporation is an American multinational chain of coffeehouses</p>
                                    </div>
                                    </div>
                                    </a>
                                    <a href="#">
                                    <div className="card">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Panda_Express_logo.svg/1200px-Panda_Express_logo.svg.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Panda Express</h5>
                                    <p className="card-text">Panda Express is an American fast food restaurant chain</p>
                                    </div>
                                    </div>
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>
            <Footer />
            </>
      )
}

export default Restaurants;