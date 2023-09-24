import React from 'react'
import styled from 'styled-components'

const Button = ({text,isBlack}) => {
  return (
    <ButtonContainer>
        <button className={isBlack ? styled.black_btn : styled.white_btn}>
            {text}
        </button>

    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.div`

.white_btn {padding: 10px 18px;
background-color: white;
font-size: 16px;
font-weight: 600;
width: 220px;
border-radius: 5px;
cursor: pointer;
}

.black_btn{
padding: 10px 18px;
background-color: black;
color: white;
font-size: 16px;
font-weight: 600;
width: 220px;
border-radius: 5px;
cursor: pointer;
}
`