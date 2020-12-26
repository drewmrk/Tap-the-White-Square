import styled from 'styled-components'

const ScoresStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 10px;
  .lastGame,
  .highScore {
    line-height: 170%;
  }
`

const Scores = () => (
  <ScoresStyles>
    <h1 className="lastGame">
      Last game: {JSON.parse(localStorage.getItem('lastGameScore'))}
    </h1>
    <h1 className="highScore">
      High score: {JSON.parse(localStorage.getItem('highScore'))}
    </h1>
  </ScoresStyles>
)

export default Scores
