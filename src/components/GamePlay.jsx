import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, Outlinbtn } from "../styled/Buttons";
import Rules from "./Rules";


const GamePlay = () => {
  
  const [Score, setScore] = useState(0)
  const [NumberSelected, setNumberSelected] = useState()
  const [currentDice, setcurrentDice] = useState(1)
  const [error, seterror] = useState("")
  const [ShowRules, setShowRules] = useState(false)

  
  const getRandomNumber = (min, max)=>{ 
    return(Math.floor(Math.random() * (max - min) + min)) 
      ;
}


const resetbtn = ()=>{
  setScore(0)
}

const RollDice = ()=>{

  if(!NumberSelected) {
    seterror("You have not selected any number")
    return}  

    const RandomNum = getRandomNumber(1,7)
    setcurrentDice(()=>RandomNum)

    if (RandomNum==NumberSelected){
      setScore((prev)=>prev+RandomNum)
    }else{
      setScore((prev)=>prev-2)
    }

    setNumberSelected(undefined)
}

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore Score={Score} />
        <NumberSelector seterror={seterror} error={error} NumberSelected={NumberSelected} setNumberSelected={setNumberSelected}/>
      </div>
      <RoleDice currentDice={currentDice} RollDice={RollDice} />
      <div className="btns">
        <Outlinbtn
        onClick={resetbtn}
        >Reset</Outlinbtn>
        <Button
        onClick={()=>setShowRules((prev)=>!prev) }
        >{ShowRules ? "Hide" : "Show"} Rules</Button>
      </div>
{ ShowRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`

.btns{
  display: flex;
  flex-direction:column;
  gap: 10px;
  align-items: center;
  
  
}
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 64px 80px;
  }
`;
