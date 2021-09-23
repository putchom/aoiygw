import * as React from 'react'
import Post from '../models/Post'
import styles from './Card.module.scss'

interface Props {
  post: Post
}

const Card: React.VFC<Props> = (props) => {
  const composeImageUrl = (str: string) => {
    const regex = (/(https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg))/i)

    if (new RegExp(regex).test(str)) {
      return regex.exec(str)[1]
    } else {
      return ''
    }
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={composeImageUrl(props.post.body)}
      />
    </div>
  )
}

export default Card