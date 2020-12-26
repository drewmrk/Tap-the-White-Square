import styled from 'styled-components'

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 10px;
  .title {
    @media (max-width: 799px) {
      font-size: 1.85em;
    }
    @media (min-width: 800px) {
      font-size: 2.2em;
    }
    transition: 0.25s all;
    color: white;
    font-weight: 400;
    &:hover {
      @media (max-width: 799px) {
        letter-spacing: 0.01em;
      }
      @media (min-width: 800px) {
        letter-spacing: 0.05em;
      }
    }
    .link {
      text-decoration: none;
      color: inherit;
    }
  }
`

const Header = () => (
  <HeaderStyles>
    <h1 className="title">
      <a href="/" className="link">
        Tap the White Square
      </a>
    </h1>
  </HeaderStyles>
)

export default Header
