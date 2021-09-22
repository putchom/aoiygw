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
  return (
    <div>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostImageGridView