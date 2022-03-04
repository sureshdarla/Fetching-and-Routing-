import {Component} from 'react'

import UserInfo from '../UserInfo'

import './index.css'
import BlogList from '../BlogList'

class Home extends Component {
  state = {blogsData: []}

  render() {
    return (
      <div className="home-container">
        <UserInfo />
        <BlogList />
      </div>
    )
  }
}
export default Home
