import * as React from 'react'
import { Title } from 'react-figma-plugin-ds'
import './ui.scss'

const Header: React.VFC = () => {
  return (
    <Title
      level='h1'
      size='large'
    >
      Place Aoi Yagawa
    </Title>
  )
}

export default Header