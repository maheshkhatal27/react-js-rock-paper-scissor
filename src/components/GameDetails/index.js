import {
  GameViewContainer,
  ImageContainer,
  ResultText,
  Button,
  Image,
  Name,
} from './styledComponents'

import './index.css'

const GameResultsView = props => {
  const {choicesList, text, restartGame, isShow, checkResult, newArray} = props
  const showGame = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <Button
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <Image
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </Button>
          <Button
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <Image
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </Button>
          <Button
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <Image
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </Button>
        </>
      )}
      {!isShow && (
        <>
          <ImageContainer>
            <Name>YOU</Name>
            <Image src={newArray[0].imageUrl} alt="your choice" />
          </ImageContainer>
          <ImageContainer>
            <Name>OPPONENT</Name>
            <Image src={newArray[1].imageUrl} alt="opponent choice" />
          </ImageContainer>
          <ImageContainer>
            <ResultText>{text}</ResultText>
            <button
              className="result-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ImageContainer>
        </>
      )}
    </GameViewContainer>
  )
  return showGame()
}

export default GameResultsView
