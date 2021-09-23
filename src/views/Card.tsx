import * as React from 'react'
import Post from '../models/Post'
import styles from './Card.module.scss'

interface Props {
  post: Post
}

const Card: React.VFC<Props> = (props) => {
  const regex = (/(https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg))/i)
  const body = props.post.body
  const imageUrl = new RegExp(regex).test(body) ? regex.exec(body)[1] : ''

  const blobToArrayBuffer = async (blob: Blob) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const url = URL.createObjectURL(new Blob([blob]))
    const image: HTMLImageElement = await new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject()
      img.src = url
    })
  
    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0)
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        const reader = new FileReader()
        reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBufferLike))
        reader.onerror = () => reject(new Error('Could not read from blob'))
        reader.readAsArrayBuffer(blob)
      })
    })
  }

  const handleClickCard = () => {
    fetch(imageUrl)
      .then(res => res.blob())
      .then(blob => blobToArrayBuffer(blob))
      .then(arrayBuffer => {
        parent.postMessage({
          pluginMessage: {
            type: 'fill-node',
            arrayBuffer: arrayBuffer
          }
        }, '*')
      })
  }

  return (
    <div
      className={styles.card}
      onClick={handleClickCard}
    >
      <img
        className={styles.image}
        src={imageUrl}
      />
    </div>
  )
}

export default Card