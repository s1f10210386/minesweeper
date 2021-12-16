import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  font-size: 0; /* inline-blockの隙間消せる */
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
const Block = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: #808080;
  border: 1px solid;
  border-bottom: transparent; /* 下が透明になる */
`

const Home: NextPage = () => {
  return (
    <Container>
      <Board>
        <Face></Face>
        <Field>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Field>
      </Board>
    </Container>
  )
}

export default Home
