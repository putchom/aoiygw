import * as React from 'react'
import Masonry from 'react-masonry-css'
import Card from './Card'
import Post from '../models/Post'
import styles from './GridView.module.scss'

interface Props {
  posts: Post[]
}

const GridView: React.VFC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Masonry
        breakpointCols={2}
        className={styles.row}
        columnClassName={styles.col}
      >
        {props.posts.map(post => (
          <Card
            key={post.id}
            post={post}
          />
        ))}
      </Masonry>
    </div>
  )
}

export default GridView