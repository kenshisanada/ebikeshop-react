import React from 'react'
import '../pages/style.css'
import {Header} from '../components/header'
import fastdelivery from '../assets/img/fast-delivery.png'
import bikeservice from '../assets/img/bike-service.png'
import quality from '../assets/img/quality1.png'
import price from '../assets/img/price.png'
import brandAbikeA from '../assets/img/brandA/brand-a-a.jpeg'
import brandBbikeB from '../assets/img/brandB/brand-b-b.png'
import mapicon from '../assets/img/icons/map-icon.png'
import callicon from '../assets/img/icons/call-icon.png'
import mailicon from '../assets/img/icons/mail-icon.png'
import fbicon1 from '../assets/img/icons/fb-icon1.png'
import twittericon from '../assets/img/icons/twitter-icon.png'
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <div className="home">
        <Header slogan="Slogan Here" />
        {/*shop advantages section*/}
        <div class="container shopadv-b" style={{marginTop: '200px'}}>
            <div class="shopadv-c" style= {{display: 'flex' , flexDirection:'column', alignItems : 'center', justifyContent : 'center'}}>
                <div class="shopadv-since">
                <h1 style={{textAlign: 'center' , fontWeight: 'bold'}}>Since 2021</h1>
                </div>
                <div class="shopadv-subtext" style={{marginTop: '50px' , marginBottom: '50px' , textAlign: 'center'}}>
                <h1> We have served our customers with:</h1>
                </div>
            </div>

            {/*cards section*/}
            <div class="shopadv-features">
                <div class="card card-shopadv">
                <img src={fastdelivery} alt="fast-delivery" />
                <h1 class="cards-shopadv-subtext">Fast Delivery</h1>
                </div>
                <div class="card card-shopadv">
                <img src={bikeservice} alt="bike-service" />
                <h1 class="cards-shopadv-subtext">Best Service</h1>
                </div>
                <div class="card card-shopadv">
                <img src={quality} alt="best-quality" />
                <h1 class="cards-shopadv-subtext">Best Quality</h1>
                </div>
                <div class="card card-shopadv">
                <img src={price} alt="competitive-price" />
                <h1 class="cards-shopadv-subtext">Competitive Price</h1>
                </div>
            </div>
            {/*cards section end*/}
        </div>
        {/*end of shop adv*/}
        {/*ourbikes section*/}
        <div class="container ourbikes" style={{marginTop: '300px'}}>
        <h1 style={{textAlign: 'center' , fontWeight: 'bold'}}>Our Bikes</h1>
        <div class="homeprod-subtext" style={{marginTop: '20px' , marginBottom: '70px', textAlign: 'center'}}>
            <h1> Here are some of our newest products:</h1>
        </div>
        <div class="cycle_section_2 layout_padding">
            <div class="row">
            <div class="col-md-6">
                <div class="box_main">
                    <div class="image_2"><img src= {brandAbikeA} alt="brand-a-bike-a"/></div>
                </div>
            </div>
            <div class="col-md-6">
                <h1 class="cycles_text">BrandA Bike A</h1>
                <p class="lorem_text">This is the description and specification for Bike A. released in 2023.</p>
                <div class="btn_main">
                    <div class="buy_bt"><Link to="/brand-a">Buy Now</Link></div>
                    <h4 class="price_text">Price <span style={{color: '#f7c17b'}}>$</span> <span style={{color: '#325662'}}>200</span></h4>
                </div>
            </div>
            </div>
        </div>
        <div class="cycle_section_3 layout_padding" style={{marginTop: '100px'}}>
            <div class="row">
                <div class="col-md-6">
                <h1 class="cycles_text">BrandB Bike B</h1>
                <p class="lorem_text">This is the description and specification for Bike A. released in 2023.</p>
                <div class="btn_main">
                    <div class="buy_bt"><Link to="/brand-b">Buy Now</Link></div>
                    <h4 class="price_text">Price <span style={{color: '#f7c17b'}}>$</span> <span style={{color: '#325662'}}>200</span></h4>
                </div>
                </div>
                <div class="col-md-6">
                <div class="box_main_3">
                    <div class="image_2"><img src= {brandBbikeB} alt='brand-b-bike-b'/></div>
                </div>
                </div>
            </div>
        </div>
        <div class="read_bt_1" style={{textAlign: 'center', marginTop: '50px'}}><Link href="/brand-a">Read More</Link></div>
        </div>
        {/*end of ourbikes section*/}
        {/*Contact Us*/}
        <div class="footer_section layout_padding" style={{marginTop: '150px'}}>
            <div class="container-fluid">
                <h1 style={{textAlign: 'center' , marginBottom: '30px'}}>Contact Us</h1>
                <div class="row">
                    <div class="col-lg-8 col-sm-12 padding_0">
                    <div class="map_main">
                        <div class="map-responsive">
                        <iframe title="Google Maps" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0" style= {{border: 0, width: '100%' }} allowfullscreen=""></iframe>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 card footer-card">
                    <div class="call_text"><img src={mapicon} alt='map-icon' /><span class="padding_left_0">location</span></div>
                    <div class="call_text"><img src={callicon} alt='call-icon' /><span class="padding_left_0">+01 888 447766</span></div>
                    <div class="call_text"><img src={mailicon} alt='mail-icon' /><span class="padding_left_0">ebikeshop@gmail.com</span></div>
                    <div class="social_icon">
                        <ul>
                            <li style={{marginLeft: '20px'}}><img src={fbicon1} alt='fb-icon-1' /></li>
                            <li style={{marginLeft: '30px'}}><img src={twittericon} alt='twitter-icon' /></li>
                        </ul>
                    </div>
                    <input type="text" class="email_text" placeholder="Enter Your Email" name="Enter Your Email" />
                    <div class="subscribe_bt">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
        {/*end of Contact Us*/}
    </div>
  )
}
