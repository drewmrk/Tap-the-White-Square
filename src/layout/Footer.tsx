import styled from 'styled-components'

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  .copyright {
    color: white;
    font-size: 1em;
    text-align: center;
  }
`

const Footer = () => (
  <FooterStyles>
    <small className="copyright">&copy; {new Date().getFullYear()} Drew Markel</small>
  </FooterStyles>
)

export default Footer
