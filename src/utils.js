import { css } from 'styled-components'
import PropTypes from 'prop-types'

export function getComponentProps(Component, props) {
  const variation = props.variation || 'default' // TODO: Do something with this
  return { ...props, ...{ variation: null } }
}

// Global base css, things like spacings & colors can be defined here. No component-specific stuff here.
const globalCssProps = {
  bg: (theme, value) => {
    return css`
      background: tomato;
      padding: 10px;
      border: 2px solid blue;
    `
  },
}

export const getProps = (props, extra = {}) => {
  const filterProps = {}
  const filterKeys = [
    'theme',
    ...Object.keys(globalCssProps),
    ...Object.keys(extra),
  ]
  filterKeys.forEach(k => {
    filterProps[k] = null
  })
  return { ...props, ...filterProps }
}

export const getCss = (props, extra = {}) => {
  const result = []
  const cssProps = { ...globalCssProps, ...extra }
  for (const k in props) {
    if (cssProps[k] && props[k] !== null) {
      result.push(cssProps[k](props.theme, props[k]))
    }
  }
  return result
}

export const propTypes = {
  bg: PropTypes.string,
}

export const defaultProps = {
  bg: null,
}
