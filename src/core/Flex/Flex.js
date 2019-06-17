import styled from 'styled-components'
import PropTypes from 'prop-types'
import { propTypes, defaultProps, getThemeVars } from '../../utils'

export const Flex = ({ tag, children, ...props }) => {
  const Tag = tag
  return <Tag {...props}>{children}</Tag>
}

Flex.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
}

Flex.defaultProps = {
  tag: 'div',
}

export const StyledFlex = styled(
  ({ theme, bg, wrap, className, children, ...props }) => (
    <Flex className={className} children={children} {...props} />
  )
)`
  ${props => getThemeVars(props)}
  display: flex;
  ${props =>
    props.wrap && `flex-wrap: ${props.wrap === true ? 'wrap' : props.wrap};`}
  background: var(--bg, inherit);
`

StyledFlex.propTypes = {
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  ...propTypes,
}

StyledFlex.defaultProps = {
  ...defaultProps,
}

export default StyledFlex
