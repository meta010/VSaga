import { Link } from 'react-router-dom'
import './news.css'
import React from 'react'
const News = () => {
  return (

    <div>
        <h1 style={{marginBottom:"30px",marginTop:"30px"}}>LATEST NEWS BLOG</h1>

        <div id='news-cont'>
<Link to={"/blogs"}>
<img className='news-img'  src="https://valentinesaga.com/wp-content/uploads/2023/07/21-Hilarious-Birthday-Party-Games-for-Adults-That-Will-Keep-the-Laughter-Rolling.jpg" alt="" />            
</Link>
<Link to={"/blogs"}>
<img className='news-img'   src="https://valentinesaga.com/wp-content/uploads/2023/07/Experience-the-Perfect-Candlelight-Dinner-800x388.png" alt="" />
</Link >
<Link to={"/blogs"}>
<img className='news-img'   src="https://valentinesaga.com/wp-content/uploads/2023/07/Coolest-Spiderman-Theme-Party-Decoration-ValentineSaga-768x617.jpg" alt="" />
</Link>
<Link to={"/blogs"}>
    <img className='news-img'  src="https://valentinesaga.com/wp-content/uploads/2023/07/8-Awesome-80th-Birthday-Party-Ideas-768x512.png" alt="" />
</Link>
        </div>
    </div>
  )
}

export default News