import styled, { keyframes } from "styled-components";






export const CardSlide = styled.div`

	margin: auto;
	overflow:hidden;
	position: relative;
    width: 100%;

	
`
export const frameAnimation = keyframes`

from {
    left: 0%;
  }
  to {
    left: -100%;
  }


`



export const CardItemDisplay = styled.section`
		display: flex;
        animation: 25s ${frameAnimation}  linear infinite;
        position: relative; 
        
`



export const CardItem = styled.div`

    font-size: 0.75rem;
    padding: 0.2rem 0.5rem ;
    display: flex;
    gap: 0.5rem;
    border-right: solid 1px ${props => props.theme["gray-500"]};
    background: ${props => props.theme["gray-700"]};
    
    /* animation: ${frameAnimation} 15s linear infinite; */
    
`



export const Item = styled.p`
    color: ${props => props.theme["green-500"]};
    font-weight: 700
`
