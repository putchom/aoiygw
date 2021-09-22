import * as React from 'react'
import { Text } from 'react-figma-plugin-ds'
import Spinner from './components/Spinner'
import styles from './LoadingView.module.scss'

const LoadingView: React.VFC = () => {
  return (
    <div className={styles.container}>
      <Text
        className={styles.stack}
        size='large'
      >
        <Spinner />
        Loading...
      </Text>
    </div>
  )
}

export default LoadingView