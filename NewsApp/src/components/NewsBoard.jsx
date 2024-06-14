import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    let [articles,setArticles] = useState([]);

    

    useEffect(()=>{
      
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=fb17918c48bf476b9d421a94841c96de`
        fetch(url)
        .then(res=> res.json())
        .then(data=>setArticles(data.articles));

    },[category])
  return (
    
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {
        articles.map((news,index)=>
        {
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })
      }
    </div>
    
    
  )
}

export default NewsBoard
