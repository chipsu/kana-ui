import { css } from 'styled-components'
import PropTypes from 'prop-types'

const getThemeValue = (theme, cat, prop, def) => {
  if (theme[cat][prop]) {
    return theme[cat][prop]
  }
  return def
}

const getThemeVar = (props, cat, key) => {
  return (
    props[key] &&
    `--${key}: ${getThemeValue(props.theme, cat, props[key], null)}`
  )
}

export const getThemeVars = props => {
  const theme = props.theme
  return (
    theme &&
    css`
      ${props => getThemeVar(props, 'colors', 'bg')}
      ${props => getThemeVar(props, 'spacings', 'padding')}
      ${props => getThemeVar(props, 'spacings', 'margin')}
    `
  )
}

export const propTypes = {
  theme: PropTypes.object,
  bg: PropTypes.string,
}

export const defaultProps = {
  theme: {},
  bg: null,
}
