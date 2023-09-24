import styled from "styled-components"
import Button from "./Button"



const RoleDice = ({currentDice, RollDice}) => {

   


    


  return (
    <DiceContainer>
        <div className="dice"
        onClick={RollDice}
        >
            <img src={`/images/dices/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>                                                        
        {/* <Button text='Reset Score'/>
        <Button 
        isBlack={true}
        text='Show Rules'/> */}
        
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`

display: flex;
margin-top: -150px;
flex-direction: column;
align-items: center;


.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
    font-weight: 500;
}
`
