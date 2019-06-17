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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  content: PropTypes.element.isRequired,
}

Dropdown.defaultProps = {
  tag: 'div',
}

const StyledDropdownContentTag = styled(({ className, children, ...props }) => (
  <div className={className} children={children} {...props} />
))`
  background: red;
  padding: 20px;
  border: 5px solid pink;
`

export const StyledDropdown = styled(
  ({ className, children, theme, ...props }) => (
    <Dropdown
      className={className}
      children={children}
      contentTag={StyledDropdownContentTag}
      {...props}
    />
  )
)`
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
