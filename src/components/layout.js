import React from "react"
import { Link } from "gatsby"
import logo from '../../static/logo.png'
import styled from 'styled-components'
import { rhythm } from "../utils/typography"


const StyledLink = styled(Link)`
  color: white;
  box-shadow: none;
  padding-top: 10%;
  padding-left: 1rem;
  margin: 1rem;
  &:hover {
    text-decoration: underline;
  }
`

class Layout extends React.Component {
  render() {
    const {children} = this.props
    let header = (
      <div style={{
        backgroundColor: '#27aa80',
        maxHeight: '200px',
        //textAlign: 'center',
      }}> 
      <div style={{
        display: 'flex',
        textAlign: 'left',
      }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <img src={logo} alt='' //height='150' width='150'
            style={{
              maxWidth: '200px',
              borderRadius: 50,
            }}
          />
        </Link>
      
          <StyledLink to={`/`}>Home</StyledLink>
          <StyledLink to={`/Asta/`}>Asta</StyledLink>
          <StyledLink to={`/focus/`}>Consigli</StyledLink>
          <StyledLink to={`/statistiche/`}>Notizie</StyledLink>

          {/*
          <span style={{
            width: '100%',
            display: 'inline-block',
          }}> 
        </span> */}

        </div>
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
