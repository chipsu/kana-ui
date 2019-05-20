export function getComponentConfig(base, props, defaultProps, defaultTheme) {
  props = { ...defaultProps, ...props }
  return {
    Component: props.component,
    props: { props, ...{ component: null } },
  }
}
