import React, { useEffect, useState } from 'react'
import '../Styles/singleblog.css'
import { useDispatch, useSelector } from 'react-redux';
import { handle_get_all_blogs } from '../Redux/action';
import { useParams } from 'react-router-dom';
const SingleBlog = () => {


  const dispatch = useDispatch();
  const store = useSelector(store=>store)
  const { loading, error, blogs } = store;
 const [blog,setblog] = useState({})
 const params = useParams();
 const id = params.id;
console.log(id)
  useEffect(() => {
    dispatch(handle_get_all_blogs()).then(()=>{
     

      let filterdata = blogs.filter((el)=>{
   if(el?._id==id){
    setblog(el)
   }
      })
      
    })
  }, [blogs]);

console.log(blog)

  return (
    <article class="ad5-padding-y-lg">
    <header class="ad5-container ad5-max-width-xs ad5-margin-bottom-lg">
      <div class="ad5-text-component ad5-text-center ad5-line-height-lg ad5-text-gap-md ad5-margin-bottom-md">
        <h2>{blog?.authorheading}</h2>
        <p class="ad5-color-contrast-medium ad5-text-md">{blog?.authordescription}</p>
      </div>
  
      <div class="ad5-flex ad5-justify-center">
        <div class="author author--meta">
          <a href="#0" class="author__img-wrapper">
            <img src={`${blog?.authorimage}`} alt="Author picture" />
          </a>
  
          <div class="author__content ad5-text-component ad5-text-gap-2xs">
            <h4 class="ad5-text-base"><a href="#0" rel="author">{blog?.authorname}</a></h4>
            <p class="ad5-text-sm ad5-color-contrast-medium"><time>{blog?.date}</time> - 5 min read</p>
          </div>
        </div>
      </div>
    </header>
  
    <figure class="ad5-container ad5-max-width-lg ad5-margin-bottom-lg">
      <img class="ad5-block ad5-width-100% ad5-radius-lg" src={`${blog?.blogimage}`} alt="Image description" />
    </figure>
  
    <div class="ad5-container ad5-max-width-adaptive-sm">
      <div class="ad5-text-component ad5-line-height-lg ad5-text-gap-md">
       <h1>{blog?.title}</h1>
  
  
        <blockquote>{blog?.headings}</blockquote>
  
       <p>{blog?.blogdescription}</p>
  
        <hr />

        <figure class="ad5-text-component__block">
          <img src={`${blog?.subimage1}`} alt="Image description here" />
          {/* <figcaption>Image caption</figcaption> */}
        </figure>
  
        <p>{blog?.subcontent1}</p>
  
        <figure class="ad5-text-component__block ad5-text-component__block--left">
          <img src={`${blog?.subimage2}`} alt="Image description here" />
          {/* <figcaption>Image caption</figcaption> */}
        </figure>
  
        <p>{blog?.subcontent2}</p>
  
        <figure class="ad5-text-component__block ad5-text-component__block--outset ad5-text-component__block--right">
          <img src={`${blog?.subimage3}`} alt="Image description here" />
          {/* <figcaption>Image caption</figcaption> */}
        </figure>
  
        <p>{blog?.subcontent3}</p>
      </div>
    </div>
  </article>
  )
}

export default SingleBlog
