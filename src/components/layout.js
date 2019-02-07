import React from "react"
import { Link } from "gatsby"
import logo from '../../static/logo.png'
import styled from 'styled-components'
import { rhythm } from "../utils/typography"

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  font-size: 1rem;
  margin: auto;
  padding-left: 1rem;
  box-shadow: none;
  color: #33cc33;
`

class Layout extends React.Component {
  render() {
    const {children} = this.props
    let header = (
      <div style={{
        textAlign: 'center',
      }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <img src={logo} alt=''/>
        </Link>
        <StyledLink to={`/`}>Notizie</StyledLink>
        <StyledLink to={`/approfondimenti/`}>Approfondimenti</StyledLink>
        <StyledLink to={`/focus/`}>Focus</StyledLink>
        <StyledLink to={`/infermeria/`}>Infermeria</StyledLink>
        <StyledLink to={`/statistiche/`}>Statistiche</StyledLink>
      </div>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
