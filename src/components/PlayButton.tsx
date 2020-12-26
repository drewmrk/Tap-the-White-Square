import styled from 'styled-components'
import game from '../logic/game'

const PlayButtonStyles = styled.button`
  border: 0;
  border-radius: 10px;
  font-size: 1.5em;
  background-color: white;
  width: 50%;
  cursor: pointer;
  padding: 10px 10px;
  margin: 30px auto;
  display: block;
`

const PlayButton = () => (
  <PlayButtonStyles id="playButton" onClick={game}>
    Play!
  </PlayButtonStyles>
)

export default PlayButton
