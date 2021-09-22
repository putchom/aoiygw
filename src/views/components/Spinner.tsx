import * as React from 'react'
import { Icon } from 'react-figma-plugin-ds'
import styles from './Spinner.module.scss'

const Spinner: React.VFC = () => {
  return (
    <Icon
      className={styles.icon}
      name='spinner'
    />
  )
}

export default Spinner