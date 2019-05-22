import { getComponentProps } from '../../utils'
import styled from 'styled-components'

export const ButtonStyle = styled.div`
  background: red;
  border: 5px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacings[props.padding]};
`

const Button = props => {
  props = getComponentProps(Button, props)
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>
}

Button.defaultProps = {
  as: 'button',
  variant: 'default',
  padding: 'md',
}

export default Button
