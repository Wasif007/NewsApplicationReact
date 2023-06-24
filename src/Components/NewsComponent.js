import React, { Component } from 'react'
import NewsItems from './NewsItems'

//232940725ff745df866efb9778420f11
export class NewsComponent extends Component {
  
  constructor(){
    super();
    this.state={
     articles:[],
     loading:false
     }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=232940725ff745df866efb9778420f11";
    let data= await fetch(url); 
    let parsedData= await data.json();
    this.setState({
      articles:parsedData.articles
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>CatNews - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItems title={!element.title?"":element.title.slice(0,40)} description={!element.description?"":element.description.slice(0,70)} 
            imageUrl={element.urlToImage} url={element.url}/>     
            </div>
          })}
          
         </div>
      </div>
    )
  }
}

export default NewsComponent
