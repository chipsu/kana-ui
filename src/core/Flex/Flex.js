import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getProps, getCss, propTypes, defaultProps } from '../../utils'

// Not sure about this, but defining stuff like this in `` is ugly
const cssProps = {
  wrap: (theme, value) => {
    return value && `flex-wrap: ${value === true ? 'wrap' : value};`
  },
}

export const Flex = ({ tag, children, ...props }) => {
  const Wrapper = tag
  return <Wrapper {...getProps(props, cssProps)}>{children}</Wrapper>
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

export const StyledFlex = styled(Flex)`
  display: flex;
  ${props => getCss(props, cssProps)}
`

StyledFlex.propTypes = {
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  ...propTypes,
}

StyledFlex.defaultProps = {
  theme: {},
  ...defaultProps,
}

export default StyledFlex
