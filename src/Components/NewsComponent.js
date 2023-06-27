import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';



//232940725ff745df866efb9778420f11
export class NewsComponent extends Component {

  constructor(){
    super();
    this.state={
     articles:[],
     loading:false,
     page:1
     }
  }
 
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=232940725ff745df866efb9778420f11&pageSize=${this.props.pageSize}`;
    
    this.setState({
      loading:true
    })
    
    let data= await fetch(url); 
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
  }
  nextPageLoader=async()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=232940725ff745df866efb9778420f11&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    
    let data= await fetch(url); 
    let parsedData= await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      loading:false
    })
  }
  }
  prevPageLoader=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=232940725ff745df866efb9778420f11&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    
    let data= await fetch(url); 
  let parsedData= await data.json();
  this.setState({
    articles:parsedData.articles,
    page:this.state.page-1,
    loading:false
  })

  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin:"35px 0px"}}>
        CatNews - Top Headlines
        </h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItems title={!element.title?"":element.title.slice(0,40)} description={!element.description?"":element.description.slice(0,70)} 
            imageUrl={element.urlToImage} url={element.url}/>     
            </div>
          })}
          
         </div>
         <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevPageLoader}>&larr; Previous</button>
         <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextPageLoader}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}

export default NewsComponent
