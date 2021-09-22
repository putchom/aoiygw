import * as React from 'react'
import { Icon, Text } from 'react-figma-plugin-ds'
import styles from './ErrorView.module.scss'

interface Props {
  message: string
}

const ErrorView: React.VFC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Text
        className={styles.stack}
        size="large"
      >
        <Icon
          name="warning"
        />
        {props.message}
      </Text>
    </div>
  )
}

export default ErrorView