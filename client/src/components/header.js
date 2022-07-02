import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <h1>TOURISMETROPOLIS</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `TOURISMETROPOLIS`,
}

export default Header
