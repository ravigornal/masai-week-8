import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breakfast from './Components/Breakfast'
import Lunch from './Components/Lunch';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      Breakfast : [{
        image:"https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg",
        name:"Buff Buffet Buff ",
        address:"60, Jyothi Nivas College Road, Koramangala 5th Block, Bang",
        rating:4.6,
        votes:"3645",
        Cuisines: "North Indian, Chinese, Thai, South Indian, Continental",
        Cost : "₹1,500",
        Hours:"7am – 10am, 12noon – 3:30pm, 7pm – 11:30pm...",
        Featured:"Great Buffets, Great Breakfasts, Sunday Brunches, Bengaluru's Finest , Corporate Favorites"
      },
      {
        image:"https://images.pexels.com/photos/890515/pexels-photo-890515.jpeg",
        name:"Kota Kachori ",
        address:"635, 100 Feet Road, Koramangala 6th Block, Bangalore",
        rating:4.2,
        votes:4146,
        Cuisines: "North Indian, Mithai, Rajasthani, Desserts",
        Cost : "₹400",
        Hours:"8am – 9:30pm (Mon-Sun) ...",
        Featured:"Veggie Friendly"
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Tea Villa Cafe",
        address:"183/16, 5th Main Road, 4th Block, Jayanagar, Bangalore",
        rating:4.4,
        votes:1680,
        Cuisines: "Cafe, Continental",
        Cost : "₹1,000",
        Hours:"10am – 11pm (Mon-Fri),9am – 11pm (Sat-Sun) ",
        Featured:"Food Hygiene Rated Restaurants in Bengaluru, Veggie Friendly, Great Breakfasts, Sneak Peek Bengaluru"
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Koramangala Social  ",
        address:"118, Koramangala Industrial Area, Koramangala 7th Blo",
        rating:4.6,
        votes:5386,
        Cuisines: "American, North Indian, Chinese, Asian, Biryani, Beverages",
        Cost : "₹1,500",
        Hours:"9am – 12:30am (Mon-Sun) ",
        Featured:"Artisan Cocktails, Bengaluru's Finest "
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Shivaji Military Hotel ",
        address:"718, 1st C Main, 45th Cross, 8th Block, Jayanagar, Bangalore",
        rating:4.6,
        votes:7635,
        Cuisines: "South Indian, Biryani",
        Cost : "₹600",
        Hours:"Closed (Mon),8:30am – 3pm, 5:30pm – 8:30pm. .",
        Featured:"Great Breakfasts, Bengaluru's Finest "
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Smoke House Deli ",
        address:"1209, 100 Feet Road, Opposite Apollo Clinic, Indiranag",
        rating:4.6,
        votes:5732,
        Cuisines: "European, Italian, American, Salad",
        Cost : "₹1,600",
        Hours:"9am – 12:30am (Mon-Sun) ",
        Featured:"Bengaluru's Finest "
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"FreshMenu ",
        address:"Indira nagar",
        rating:3.9,
        votes:1170,
        Cuisines: "Hyderabadi, Biryani, Chinese, Fast Food",
        Cost : "₹450",
        Hours:"8am – 11:40pm (Mon-Sun) ",
        Featured:"Just Delivery"
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Asha Tiffins ",
        address:"1170, 5th Main Road, Sector 7, HSR, Bangalore",
        rating:4.6,
        votes:3645,
        Cuisines: "South Indian, North Indian, Chinese",
        Cost : "₹200",
        Hours:"7am – 11:30am, 12:30pm – 3:30pm, 4:30pm – 10pm... ",
        Featured:"Great Buffets, Great Breakfasts, Sunday Brunches, Bengaluru's Finest , Corporate Favorites"
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Buff Buffet Buff ",
        address:"60, Jyothi Nivas College Road, Koramangala 5th Block, Bang",
        rating:4.6,
        votes:3645,
        Cuisines: "North Indian, Chinese, Thai, South Indian, Continental",
        Cost : "₹1,500",
        Hours:"7am – 10am, 12noon – 3:30pm, 7pm – 11:30pm...",
        Featured:"Great Buffets, Great Breakfasts, Sunday Brunches, Bengaluru's Finest , Corporate Favorites"
      },
    ],

    Lunch : [{
      image:"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
      name:"Empire Restaurant ",
      address:"Church Street",
      rating:4.1,
      votes:"3652",
      Cuisines: "North Indian, Chinese, Thai, South Indian",
      Cost : "₹500",
      Hours:"12noon – 3:30pm, 7pm – 11:30pm...",
      Featured:"Great Buffets, Great Breakfasts, Sunday Brunches, Bengaluru's Finest , Corporate Favorites"
    },
    {
      image:"https://images.pexels.com/photos/1321731/pexels-photo-1321731.jpeg",
      name:"Robot Restaurant",
      address:"2008, 2nd Floor, HAL 2nd Stage, Indiranagar, Bangalore",
      rating:4.2,
      votes:400,
      Cuisines: "Chinese, Thai, North Indian, Seafood, Beverages, Desserts",
      Cost : "₹1,400",
      Hours:"12noon – 3pm, 7pm – 11pm (Mon-Sun)",
      Featured:"Newly Opened"
    },
    {
      image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
      name:"Biergarten",
      address:"4th B Cross, Koramangala 5th Block, Bangalore",
      rating:4.7,
      votes:4536,
      Cuisines: "Continental, North Indian, Chinese, European, BBQ, Finger Food",
      Cost : "₹2,100",
      Hours:"10am – 11pm (Mon-Fri),9am – 11pm (Sat-Sun) ",
      Featured:"Food Hygiene Rated Restaurants in Bengaluru, Veggie Friendly, Great Breakfasts, Sneak Peek Bengaluru"
    },
    {
      image:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      name:"Koramangala Social  ",
      address:"118, Koramangala Industrial Area, Koramangala 7th Blo",
      rating:4.6,
      votes:5386,
      Cuisines: "American, North Indian, Chinese, Asian, Biryani, Beverages",
      Cost : "₹1,500",
      Hours:"12noon – 12:30am (Mon-Sun)",
      Featured:"Best Bars & Pubs, Microbreweries, Bengaluru's Finest"
    },
    {
      image:"https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
      name:"Shivaji Military Hotel ",
      address:"718, 1st C Main, 45th Cross, 8th Block, Jayanagar, Bangalore",
      rating:4.6,
      votes:7635,
      Cuisines: "South Indian, Biryani",
      Cost : "₹600",
      Hours:"Closed (Mon),8:30am – 3pm, 5:30pm – 8:30pm. .",
      Featured:"Great Breakfasts, Bengaluru's Finest "
    },
    {
      image:"https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg",
      name:"AB's - Absolute Barbecues ",
      address:"90/4, 3rd Floor, Outer Ring Road, Munnekollaly Villag",
      rating:4.,
      votes:13724,
      Cuisines: "European, Mediterranean, North Indian, BBQ",
      Cost : "₹1,600",
      Hours:"12noon – 4pm, 6:30pm – 12midnight (Mon-Sun)",
      Featured:"Great Buffets, Corporate Favorites, Bengaluru's Finest "
    },
    {
      image:"https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg",
      name:"FreshMenu ",
      address:"Indira nagar",
      rating:3.9,
      votes:1170,
      Cuisines: "Hyderabadi, Biryani, Chinese, Fast Food",
      Cost : "₹1,600",
      Hours:"8am – 11:40pm (Mon-Sun) ",
      Featured:"Just Delivery"
    },
    {
      image:"https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg",
      name:"Truffles",
      address:"Koramangala 5th Block, Bangalore",
      rating:4.6,
      votes:3645,
      Cuisines: "Cafe, American, Burger, Steak",
      Cost : "₹900",
      Hours:"12noon – 3:30pm, 7pm – 10:30pm (Mon),12noon",
      Featured:"Great Cafes, Bengaluru's Finest , Kickass Burgers, Sweet Tooth"
    },
    {
      image:"https://images.pexels.com/photos/3044/restaurant-love-romantic-dinner.jpg",
      name:"URU Brewpark",
      address:" Koramangala 5th Block, Bang",
      rating:4.3,
      votes:858,
      Cuisines: "North Indian, Chinese, Thai, South Indian, Continental",
      Cost : "₹1,500",
      Hours:"12noon – 12midnight (Mon-Sun)",
      Featured:"Sneak Peek Bengaluru"
    },
  ]
    }
  }
  render(){

    
    return (
      <Router>
        <Navbar />
      <div className="App ">
        <div className="row ml-5">
        <a className="ml-5">
          <img src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png"></img>
          <br></br>
          <Link to="/breakfast"><h5>Break Fast</h5></Link>
        </a>

        <a className="ml-5">
          <img src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png"></img>
          <br></br>
          <Link to="/lunch"><h5>Lunch</h5></Link>
        </a>

        <a className="ml-5">
          <img src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png"></img>
          <br></br>
          <Link to="/dinner"><h5>Dinner</h5></Link>
        </a>

        </div>
  {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul> */}
        

        {/* <Route path="/" exact component={Home}/> */}
        <Route path="/breakfast" exact render={()=><Breakfast  input ={this.state.Breakfast}/>}/>
        <Route path="/lunch" render={()=><Lunch  input1 ={this.state.Lunch}/>}/>
        {/* // <Route path="/dinner" render={()=><Dinner  input ={this.state.Dinner}/> */}
        {/* // <Route path="/login" exact component={Login}/>  */}
  
      </div>
    </Router>
    );
  }
  }
 

export default App;
