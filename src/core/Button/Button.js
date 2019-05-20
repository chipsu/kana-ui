import { getComponentConfig } from '../../utils'

const defaultProps = {
  component: 'button',
}

const defaultTheme = {}

export default props => {
  const { Component, componentProps } = getComponentConfig(
    'button',
    props,
    defaultProps,
    defaultTheme
  )
  return <Component {...componentProps}>{props.children}</Component>
}
