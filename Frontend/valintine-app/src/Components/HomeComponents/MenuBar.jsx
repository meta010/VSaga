import React from 'react'
import './menubar.css'
import {Link} from 'react-router-dom'
const MenuBar = () => {
    const handlehover = (e) => {
        // alert("hello")
        document.querySelector(".dropdown").classList.add("active-dropdown")
    }
    const handleleave = (e) => {
        // alert("leave")
        document.querySelector(".dropdown").classList.remove("active-dropdown")
    }
    let titles = [
        {
          image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",
          title: "Kids Celebrations",
          subtitles: [
            "Kids Birthday Decoration",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Activities",
            "Naming Ceremony Decorations",
            "Themed Birthday Cakes",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
          ],
        },
        {
            image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/cd.webp",
          title: "Candlelight Dinner",
          subtitles: [
            "Candlelight Dinners in NCR",
            "Private Candlelight Dinners",
            "Lunch Specials",
            "Private Movie &amp; Dinners",
            "Cabana Dining Experience",
            "Dining at 5 Star Properties",
            "Outdoor Candlelight Dining",
            "Poolside Candlelight Dinners",
            "Pocket Friendly Candlelight Dinners",
          ],
        },
        {
            image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/gifts_icon_1-removebg-preview.png",
          title: "Decorations",
          subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ],
        },
        {image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/balloon_decoration-removebg-preview-1.png", title: "Anniversary Celebrations", subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ],},
        { image:"https://cdn.togetherv.com/party-decoration-icon_1679913296.webp",title: "Birthday Surprises" ,subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ],},
        { image: "https://cdn.togetherv.com/romantic-stays-icon_1682410730.webp",title: "Room Decorations" ,subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ],},
        { image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",title: "Gifts & Surprises",subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ], },
        { image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",title: "Occasions",subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ], },
      ];
    const category = ['party', 'party']

    return (
       
        


<>

<div class="menubar">
  <div class="subnav">
    <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#company">
      <p>Company</p>
      <ul>
      <li>submenu 1</li>
       <li>submenu 2</li>
        <li>submenu 3</li>
         </ul>
      </a>
      <a href="#team">
      <p>Team</p>
      <ul>
     
      <li>submenu 1</li>
       <li>submenu 1</li>
        <li>submenu 1</li>
         </ul>
      </a>
      <a href="#careers">
      <p>Careers</p>
      <ul>
     
      <li>submenu 1</li>
       <li>submenu 1</li>
        <li>submenu 1</li>
         </ul>
      </a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Bring</a>
      <a href="#deliver">Deliver</a>
      <a href="#package">Package</a>
      <a href="#express">Express</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
    </div>
  </div>
  <a href="#contact">Contact</a>
</div>
</>


    )
}

export default MenuBar

