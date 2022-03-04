import {Loader} from 'react-loader-spinner'

import {Component} from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      author: data.author,
      content: data.content,
    }
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {imageUrl, avatarUrl, title, topic, author, content} = blogItemDetails
    return isLoading ? (
      <p>Loading...!</p>
    ) : (
      <div>
        <h1>{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} className="avatar-image" alt={title} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="image" />
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
