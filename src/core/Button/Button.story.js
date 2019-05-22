import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('padding test', () => <Button padding="lg">Hello Button</Button>)
