import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/themes'

const req = require.context('../src', true, /\.story\.js$/)

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
