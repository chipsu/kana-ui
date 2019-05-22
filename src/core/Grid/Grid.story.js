import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from '.'

storiesOf('Grid', module)
  .add('with text', () => <Grid>Hello Grid</Grid>)
  .add('with emoji', () => (
    <Grid>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Grid>
  ))
