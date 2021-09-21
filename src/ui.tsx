import * as React from 'react'
import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { Button, Input, Text, Title } from 'react-figma-plugin-ds'
import './ui.scss'

const App: React.VFC = () => {
  const [count, setCount] = useState(5)

  const handleClickCreateButton = () => {
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  const handleClickCancelButton = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  return (
    <>
      <Title
        level='h1'
        size='large'
      >
        Place Aoi Yagawa
      </Title>
      <Text
        weight="medium"
      >
        Count:
      </Text>
      <Input
        defaultValue={count}
      />
      <Button
        isPrimary
        onClick={handleClickCreateButton}
      >
        Create
      </Button>
      <Button
        isSecondary
        onClick={handleClickCancelButton}
      >
        Cancel
      </Button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('react-page'))