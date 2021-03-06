import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import ErrorView from './views/ErrorView'
import GridView from './views/GridView'
import LoadingView from './views/LoadingView'
import apiKey from './api_key.txt'
import './ui.scss'

const App: React.VFC = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState([])
  const [offset, setOffset] = useState(20)

  useEffect(() => {
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

  const handleClickMoreButton = () => {
    fetch(`https://api.tumblr.com/v2/blog/yagawaaoi.tumblr.com/posts?api_key=${apiKey}&offset=${offset}`)
      .then(res => res.json())
      .then(
        (result) => {
          setOffset(offset + result.response.posts.length)
          setPosts([...posts, ...result.response.posts])
        },
        (error) => {
          setError(error)
        }
      )
  }

  if (error) {
    return (
      <ErrorView message={error.message} />
    )
  } else if (!isLoaded) {
    return (
      <LoadingView />
    )
  } else {
    return (
      <GridView
        handleClickMoreButton={handleClickMoreButton}
        posts={posts}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))