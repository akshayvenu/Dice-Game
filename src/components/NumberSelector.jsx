
import styled, { withTheme } from 'styled-components'

const NumberSelector = ({seterror , error, NumberSelected, setNumberSelected}) => {

    const arrnumber = [1,2,3,4,5,6]

  const NumSelectorHandler =(value)=>{
    setNumberSelected(value)
    seterror('')
  }


  return (                                
    <NumberSelectorContainer>
      <p className='error'>{error}</p>                 
    <div className='flex'>
    {arrnumber.map((value,i)=>(
            <Box
            isSelected={NumberSelected == value}
            key={i}
            onClick={()=>NumSelectorHandler(value)}
            >{value}</Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector


const NumberSelectorContainer = styled.div`
.flex{
    display: flex;
    gap: 10px;

}

.error{
  color: red;
  font-weight: 400;
  font-size: 24px;
}

p{
font-size: 24px;
font-weight: 700;
display: flex;
justify-content: end;
margin-top:10px ;
}`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=> (props.isSelected ? 'black' : 'white')};
  color: ${(props)=> (!props.isSelected ? 'black' : 'white')};
`;