import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
<h1>How to play dice game</h1>

<div className="txt">
    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
    <p>if you get wrong guess then  2 point will be dedcuted</p>
</div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
background-color: #FBF1F1;
border-radius: 10px;
width: 794px;
padding: 10px;
margin: 40px auto;

h1{
    font-size:24px;
    font-weight: 700;
}
.txt{
    margin-top: 20px;
}

p{
    font-size: 16px;
    font-weight: 500;
}

`