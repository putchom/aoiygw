import * as React from 'react'

interface Props {
  message: string
}

const ErrorView: React.VFC<Props> = (props) => {
  return (
    <div>
      <p>Error: {props.message}</p>
    </div>
  )
}

export default ErrorView