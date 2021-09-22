import * as React from 'react'
import Masonry from 'react-masonry-css'
import styles from './PostImageGridView.module.scss'

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
    <div className={styles.container}>
      <Masonry
        breakpointCols={2}
        className={styles.grid}
        columnClassName={styles.column}
      >
        {props.posts.map(post => (
          <div key={post.id}>
            <img
              className={styles.image}
              src={composeImageUrl(post.body)}
            />
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default PostImageGridView