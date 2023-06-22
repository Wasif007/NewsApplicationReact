import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class NewsComponent extends Component {
  render() {
    return (
      <div>
        This is the news Component.
        <NewsItems/>
      </div>
    )
  }
}

export default NewsComponent
