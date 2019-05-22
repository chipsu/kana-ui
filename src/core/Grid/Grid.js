import { getComponentConfig } from '../../utils'

const defaultProps = {
  component: 'grid',
  gutter: 'md',
  theme: {},
}

export default props => {
  const { Component, componentProps } = getComponentConfig(
    'grid',
    props,
    defaultProps
  )
  return <Component {...componentProps}>{props.children}</Component>
}
