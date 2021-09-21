import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button, Text, Title } from 'react-figma-plugin-ds'
import './ui.scss'

declare function require(path: string): any

class App extends React.Component {
  textbox: HTMLInputElement

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = '5'
    this.textbox = element
  }

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10)
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  render() {
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
        <input ref={this.countRef} />
        <Button
          isPrimary
          onClick={this.onCreate}
        >
          Create
        </Button>
        <Button
          isSecondary
          onClick={this.onCancel}
        >
          Cancel
        </Button>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))