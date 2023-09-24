import { useState } from "react"
import styled from "styled-components"
import { Button } from "../styled/Buttons"


const StartGame = ({toggle}) => {

  return (
    <Container>
        <div>
            <img src="images/dices.png" alt="dices"/>
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}> Play Now </Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 1182px;
margin: 0 auto;
height: 100vh;

.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`


