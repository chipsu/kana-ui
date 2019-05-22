/* const globalDefaultProps = {
  theme: {
    spacings: {
      sm: '0.75rem',
      md: '1rem',
      lg: '2rem',
    },
  },
}

const globalComponentProps

function getComponentProps(component, props, defaultProps) {
  const componentProps = component in globalProps.components ? globalProps.components[component] : {}
  return { ...globalProps, }
} */

export function getComponentProps(Component, props) {
  const variation = props.variation || 'default' // TODO: Do something with this
  return { ...props, ...{ variation: null } }
}
