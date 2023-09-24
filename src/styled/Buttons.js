import styled from "styled-components";


export const Button = styled.button`
background-color: black;
color: white;
border: none;
min-width: 220px;
padding: 10px 18px;
border-radius: 5px;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in ;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}
`

export const Outlinbtn = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
}
`  