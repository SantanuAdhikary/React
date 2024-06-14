import React from 'react'
import neswImage from '/news.jpg'
const NewsItem = ({title,description,url,src}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-3 px-3" style={{maxWidth:"345px"}}>
  <img src={src?src:neswImage} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,100)+"...":"some description"} </p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
