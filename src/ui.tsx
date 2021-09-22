import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import ErrorView from './ErrorView'
import PostImageGridView from './PostImageGridView'
import LoadingView from './LoadingView'
import './ui.scss'

const App: React.VFC = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const apiKey = 'hoge'
    fetch(`https://api.tumblr.com/v2/blog/yagawaaoi.tumblr.com/posts?api_key=${apiKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setPosts(result.response.posts)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <ErrorView message={error.message} />
  } else if (!isLoaded) {
    return <LoadingView />
  } else {
    return <PostImageGridView posts={posts} />
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))