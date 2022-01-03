import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: #c0c0c0;
`
const Board = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 300px;
  margin: auto;
  background-color: #696969;
  transform: translate(-50%, -50%);
`
const Face = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  left: 0;
  width: 30px;
  height: 30px;
  margin: auto;
  background-color: yellow;
  border-radius: 50%;
`
const Field = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 10px;
  left: 0;
  width: 225px;
  height: 225px;
  margin: auto;
  background-color: #d6cdcd;
`
const BombBlock = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  color: red;
  text-align: center;
  background-color: white;
  border: 1px solid black;
`
const Block = styled.div<{ isOpen: boolean; num: number }>`
  display: inline-block;
  width: 25px;
  height: 25px;
  font-weight: bold;
  color: ${(props) => (props.num < 9 && props.num > 0 ? COLORS[props.num - 1] : 'black')};
  text-align: center;
  vertical-align: bottom;
  background-color: ${(props) => (props.isOpen ? 'white' : 'grey')};
  border: 1px solid black;
`
const COLORS = ['blue', 'green', 'red', 'purple', 'brown', 'yellow', 'orange', 'silver']

const Home: NextPage = () => {
  const [bombs, setBombs] = useState([{ x: 0, y: 0 }])

  //prettier-ignore
  const[board,setBoard]=useState([
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
    [9, 9, 9, 9, 9, 9, 9, 9, 9,],
  ])

  const onClick = (x: number, y: number) => {
    console.log(x, y)
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
          if(x>0){
            



          }
    setBoard(newBoard)
  }

  return (
    <Container>
      <Board>
        <Face></Face>
        <Field>
          {board.map((row, y) =>
            row.map((num, x) =>
              num === 10 ? (
                <BombBlock>●</BombBlock>
              ) : (
                <Block key={`${x}-${y}`} isOpen={num < 9} num={num} onClick={() => onClick(x, y)}>
                  {num < 9 && num !== 0 && num}
                </Block>
              )
            )
          )}
        </Field>
      </Board>
    </Container>
  )
}

export default Home
