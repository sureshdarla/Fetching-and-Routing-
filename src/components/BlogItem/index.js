import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class BlogItem extends Component {
  //   state = {blogDetails: this.props}

  render() {
    const {blogDetails} = this.props

    // console.log(blogDetails)
    const {imageUrl, author, id, avatarUrl, title, topic} = blogDetails
    console.log(imageUrl)
    return (
      <Link to={`/blogs/${id}`} className="blog-link">
        <div className="blog-item-container">
          <img src={imageUrl} alt="" className="image-item" />
          <div className="blog-description-container">
            <p className="topic">{topic}</p>
            <p className="title">{title}</p>
            <div className="author-image-name-container">
              <img src={avatarUrl} className="author-image" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
