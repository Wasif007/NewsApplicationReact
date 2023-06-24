import React, { Component } from 'react'
import NewsItems from './NewsItems'

//232940725ff745df866efb9778420f11
export class NewsComponent extends Component {
   articles=[
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Moment missile strikes bridge to Crimea",
      "description": "A bridge in Ukraine connecting southern Ukraine to the Crimean peninsula has been hit by missiles.",
      "url": "http://www.bbc.co.uk/news/world-65999469",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C485/production/_130190305_p0fwzhpx.jpg",
      "publishedAt": "2023-06-23T18:37:20.6196548Z",
      "content": "Footage verified by BBC Verify shows a missile hitting a bridge linking southern Ukraine to the Crimean peninsula. \r\nRussian officials have said Ukraine attacked the bridge with long-range British mi… [+148 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Greece ignored offer to monitor migrant boat, says EU border agency",
      "description": "Officials are said to have ignored an offer to send a plane to monitor the boat that later sank.",
      "url": "http://www.bbc.co.uk/news/world-europe-66003244",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5919/production/_130190822_fd52450a7713b5140f4221b45d7651c4cd397de2.jpg",
      "publishedAt": "2023-06-23T18:37:19.4636925Z",
      "content": "Greece did not respond to an offer to send a plane to monitor a migrant boat that later sank with huge loss of life, EU border officials say.\r\nAt least 82 people are known to have died in the inciden… [+2012 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Greece boat disaster: 350 Pakistanis were on board, minister says",
      "description": "Hundreds are feared drowned after a boat crowded with migrants capsized off Greece on 14 June.",
      "url": "http://www.bbc.co.uk/news/world-asia-65997635",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/127A8/production/_130188657_mediaitem130188656.jpg",
      "publishedAt": "2023-06-23T18:22:19.635252Z",
      "content": "At least 350 Pakistanis were on board a packed trawler that capsized off southern Greece on 14 June, Pakistan's interior minister says.\r\nRana Sanaullah told parliament his estimate was based on famil… [+1378 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Glastonbury 2023: Foo Fighters tease performance as crowds await Arctic Monkeys",
      "description": "More than 200,000 people are at Worthy Farm in Somerset for a weekend full of music icons - we're here with the best bits.",
      "url": "http://www.bbc.co.uk/news/live/entertainment-arts-66000496",
      "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      "publishedAt": "2023-06-23T17:07:24.3252874Z",
      "content": "Glastonbury has made a lot of noise about achieving gender equality in its line-ups over the past decade a seemingly simple task, complicated by the fact that only 20% of the artists signed to a UK r… [+1100 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Yevgeny Prigozhin: Wagner chief blames war on defence minister",
      "description": "Yevgeny Prigozhin claims Vladimir Putin and the country have been deceived by Sergei Shoigu.",
      "url": "http://www.bbc.co.uk/news/world-65996531",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/124CE/production/_130185947_35a0e2a3ec24aa1c79d785cb531d8ad235e84e5a0_0_2840_19761000x696.jpg",
      "publishedAt": "2023-06-23T16:22:17.8537856Z",
      "content": "We're used to hearing Wagner chief Yevgeny Prigozhin ranting and raving at Russia's military leadership - particularly at defence minister Sergei Shoigu - for problems on the battlefield.\r\nPublic inf… [+4163 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Titan sub CEO dismissed safety warnings as 'baseless cries', emails show",
      "description": "Warnings over the sub's safety were dismissed by OceanGate's CEO, emails seen by the BBC show.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-65998914",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/134AB/production/_130191097_reustockton.jpg",
      "publishedAt": "2023-06-23T16:07:20.182416Z",
      "content": "Media caption, Watch: Industry tried to halt Titan sub expeditions - deep sea expert\r\nWarnings over the safety of OceanGate's Titan submersible were repeatedly dismissed by the CEO of the company, em… [+4889 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Dingo bites tourist sunbathing in Australia",
      "description": "New video shows the moment a French woman was attacked by a dingo at a beach in K’gari, Australia.",
      "url": "http://www.bbc.co.uk/news/world-australia-65994828",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17DD4/production/_130184779_p0fwvy25.jpg",
      "publishedAt": "2023-06-23T11:22:20.3697891Z",
      "content": "New video shows the moment a French woman was attacked by a dingo at a beach in Kgari, Australia. \r\nThe Queensland Department of Environment and Science says the animal was \"humanely euthanised\" afte… [+279 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Russian diplomat squats near Australia parliament in embassy lease row",
      "description": "Australia has withdrawn the lease on the site for a new embassy near the parliament for fear of spying.",
      "url": "http://www.bbc.co.uk/news/world-australia-65996530",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4F22/production/_130185202_f286fdb00b7606771ff840d0aa63d784dc4fcfdd0_0_8256_55041000x667.jpg",
      "publishedAt": "2023-06-23T09:37:22.948811Z",
      "content": "A Russian diplomat has been squatting near Australia's parliament in a row over the site where Russia wants to build its new embassy.\r\nThe lone protest follows Australia's decision last week to tear … [+1643 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Titanic sub live updates: Families mourn dead as safety questions mount",
      "description": "Experts raise concerns over the regulation of deep-sea vessels following the Titanic dive tragedy.",
      "url": "http://www.bbc.co.uk/news/live/world-us-canada-65967464",
      "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      "publishedAt": "2023-06-23T09:37:21.5570213Z",
      "content": "Video content\r\nVideo caption: OceanGate co-founder rejects criticism of submersibleOceanGate co-founder rejects criticism of submersible\r\nGuillermo Söhnlein, a co-founder of OceanGate, has rejected s… [+1099 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Facebook and Instagram to restrict news access in Canada",
      "description": "It comes after parliament passed a bill requiring tech giants to compensate publishers for news.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-65969970",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14F44/production/_130182858_gettyimages-1349988076.jpg",
      "publishedAt": "2023-06-22T23:22:15.2197046Z",
      "content": "Meta has said it will begin to restrict news on its platforms to Canadian consumers after parliament passed a controversial online news bill. \r\nThe bill forces big platforms to compensate news publis… [+1958 chars]"
    }
  ];
  constructor(){
    super();
    this.state={
     articles:this.articles,
     loading:false
     }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>CatNews - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title.slice(0,40)} description={element.description.slice(0,70)} 
            imageUrl={element.urlToImage} url={element.url}/>     
            </div>
          })}
          
         </div>
      </div>
    )
  }
}

export default NewsComponent
