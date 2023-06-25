import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,url}=this.props;
    return (
<div className='my-3'>
<div className="card">
<img src={!imageUrl?"https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1687549631265.jpg-org":imageUrl} className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">{title}...</h5>
<p className="card-text">{description}...</p>
<a href={url}  className="btn btn-sm btn-dark">Read More</a>
</div>
</div>
      </div>
    )
  }
}
