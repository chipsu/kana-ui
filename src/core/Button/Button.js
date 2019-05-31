import { getComponentProps } from '../../utils'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
  ({ theme, background, padding, children, ...props }) => (
    <Button children={children} {...props} />
  )
)`
  --padding: ${props => props.theme.spacings[props.padding]};
  appearance: none;
  border: 2px solid papayawhip;
  background: ${props => props.theme.colors[props.background]};
  padding: var(--padding);
`

StyledButton.propTypes = {
  ...Button.propTypes,
}

StyledButton.defaultProps = {
  // I dont know, in theme or localTheme? Variations should be themable but defined in component.
  _theme: {
    variations: {
      lg: {
        padding: 'lg',
      },
    },
  },
  background: 'primary',
  padding: 'md',
}

export default StyledButton
