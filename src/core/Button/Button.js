import styled from 'styled-components'
import PropTypes from 'prop-types'
import { propTypes, defaultProps, getThemeVars } from '../../utils'

export const Button = ({ tag, children, ...props }) => {
  const Tag = tag
  return <Tag {...props}>{children}</Tag>
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
}

Button.defaultProps = {
  tag: 'button',
}

export const StyledButton = styled(
  ({ theme, background, bg, padding, className, children, ...props }) => (
    <Button className={className} children={children} {...props} />
  )
)`
  ${props => getThemeVars(props)};
  appearance: none;
  border: 2px solid var(--bg, inherit);
  background: var(--bg, inherit);
  padding: var(--padding);
`

StyledButton.propTypes = {
  ...Button.propTypes,
}

StyledButton.defaultProps = {
  bg: 'primary',
  padding: 'md',
}

export default StyledButton
