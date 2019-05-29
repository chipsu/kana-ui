import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Flex = ({ tag, children, ...props }) => {
  const Wrapper = tag
  return <Wrapper {...props}>{children}</Wrapper>
}

Flex.defaultProps = {
  tag: 'div',
}

export const StyledFlex = styled(({ wrap, theme, children, ...props }) => (
  <Flex children={children} {...props} />
))`
  display: flex;
  ${props =>
    props.wrap && `flex-wrap: ${props.wrap === true ? 'wrap' : props.wrap}`}
`

StyledFlex.propTypes = {
  wrap: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

StyledFlex.defaultProps = {
  theme: {},
}

export default StyledFlex
