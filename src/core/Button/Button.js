import { getComponentProps } from '../../utils'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = ({ tag, children, ...props }) => {
  const Tag = tag
  return <Tag {...props}>{children}</Tag>
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  tag: 'button',
}

export const StyledButton = styled(
  ({ theme, background, padding, children, ...props }) => (
    <Button children={children} {...props} />
  )
)`
  appearance: none;
  border: 2px solid papayawhip;
  background: ${props => props.theme.colors[props.background]};
  padding: ${props => props.theme.spacings[props.padding]};
`

StyledButton.propTypes = {
  ...Button.propTypes,
}

StyledButton.defaultProps = {
  background: 'primary',
  padding: 'md',
}

export default StyledButton
