import * as React from 'react'
import './ui.scss'

interface Post {
  id: string
  body: string
}

interface Props {
  posts: Post[]
}

const PostImageGridView: React.VFC<Props> = (props) => {
  const composeImageUrl = (str: string) => {
    const regex = (/(https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg))/i)

    if (new RegExp(regex).test(str)) {
      return regex.exec(str)[1]
    } else {
      return ''
    }
  }

  return (
    <div>
      <ul className='grid'>
        {props.posts.map(post => (
          <li key={post.id}>
            <img src={composeImageUrl(post.body)} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostImageGridView