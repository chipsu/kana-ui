import { getComponentProps } from '../../utils'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Dropdown = ({ tag, contentTag, children, content, ...props }) => {
  const Tag = tag
  const ContentTag = contentTag
  return (
    <Tag {...props}>
      {children}
      <ContentTag children={content} />
    </Tag>
  )
}

Dropdown.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
}

Dropdown.defaultProps = {
  tag: 'div',
}

const StyledDropdownContentTag = styled(({ children, ...props }) => (
  <div children={children} {...props} />
))`
  background: red;
  padding: 20px;
  border: 5px solid pink;
`

export const StyledDropdown = styled(({ children, theme, ...props }) => (
  <Dropdown
    children={children}
    contentTag={StyledDropdownContentTag}
    {...props}
  />
))`
  cursor: pointer;
  position: relative;
  ${StyledDropdownContentTag} {
    display: none;
    position: absolute;
    z-index: 999;
  }
  &:hover ${StyledDropdownContentTag} {
    display: block;
  }
`

StyledDropdown.propTypes = {
  ...Dropdown.propTypes,
}

StyledDropdown.defaultProps = {
  theme: {},
}

export default StyledDropdown
