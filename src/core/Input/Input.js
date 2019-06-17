import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Input = ({ tag, ...props }) => {
  const Tag = tag
  return <Tag {...props} />
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
}

Input.defaultProps = {
  tag: 'input',
}

export const StyledInput = styled(
  ({ theme, background, padding, className, ...props }) => (
    <Input className={className} {...props} />
  )
)`
  appearance: none;
  border: 2px solid papayawhip;
  background: ${props => props.theme.colors[props.background]};
  padding: ${props => props.theme.spacings[props.padding]};
`

StyledInput.propTypes = {
  ...Input.propTypes,
}

StyledInput.defaultProps = {
  background: 'primary',
  padding: 'md',
}

export default StyledInput
