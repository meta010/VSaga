import React, { useEffect } from 'react'
import "../Styles/blogs.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handle_get_all_blogs } from '../Redux/action';
const Blogs = () => {

    const dispatch = useDispatch();
    const store = useSelector(store=>store)
    const { loading, error, blogs } = store;
  
  
    useEffect(() => {
      dispatch(handle_get_all_blogs());
    }, []);
  console.log(blogs);
  







  return (
    <>
    <div class='container container-flex'>
        <div class='site-title'>
          {/* <h1>Living The Social Life</h1> */}
          <p class='subtitle'>A blog exploring minimalism in life.</p>
        </div>
        <nav>
          <ul>
            <li> <a href='#' class='current-page'>Home</a> </li>
            <li> <a href='#'>About Me</a> </li>
            <li> <a href='#'>Recent Posts</a> </li>
          </ul>
        </nav>
      </div>
    

<div class="container container-flex">
            <main role="main">
                
                <article class="article-featured">
                    <h2 class="article-title">{blogs[0]?.title}</h2>
                    <img src={blogs[0]?.blogimage} alt="simple white desk on a white wall with a plant on the far right side" class="article-image" />
                    <p class="article-info">{blogs[0]?.date}| {blogs[0]?.comments?.length} comments</p>
                    <p class="article-body">{blogs[0]?.blogdescription}</p>
                    <Link to={`/blogs/${blogs[0]?._id}`} class="article-read-more">CONTINUE READING</Link>
                </article>
                {
                    blogs.map((item,ind)=>{
                        
                        return ind>0 && <article class="article-recent">
                    <div class="article-recent-main">
                        <h2 class="article-title">{item?.title}</h2>
                        <p class="article-body">{item?.blogdescription}</p>
                        <Link to={`/blogs/${item?._id}`} class="article-read-more">CONTINUE READING</Link>
                    </div>
                    <div class="article-recent-secondary">
                        <img src={item?.blogimage} alt="two dumplings on a wood plate with chopsticks" class="article-image" />
                        <p class="article-info">{item?.date} | {item?.comments?.length} comments</p>
                    </div>
                </article>
                })
                
                }
               
            </main>
            
           
            
        </div>
  </>
  )
}

export default Blogs