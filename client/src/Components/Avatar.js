import styled from "styled-components";

export default styled.div`
width:15rem;
height:15rem;
// border-radius:50%;
// border: ${props=>(props.theme.label==='Main'?'0.5em solid #B6D8FF':'0.5em solid #FFD9B6')};
background-image: ${props=>(`url(${props.img})`)};
background-position: center;
background-size: cover;

    @media (max-width: 670px) {

    }
  `;
