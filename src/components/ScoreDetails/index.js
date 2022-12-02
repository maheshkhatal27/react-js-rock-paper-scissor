import {
  ScoreContainer,
  ScoreNameContainer,
  Board,
  Heading,
  Name,
  Result,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <ScoreNameContainer>
        <Name>
          ROCK
          <br /> PAPER <br /> SCISSORS
        </Name>
      </ScoreNameContainer>
      <Board>
        <Heading>Score</Heading>
        <Result>{score}</Result>
      </Board>
    </ScoreContainer>
  )
}

export default ScoreView
