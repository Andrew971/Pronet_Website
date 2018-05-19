import styled from 'styled-components';

export default styled.div `
background:rgba(6,6,6,.38);
height:100%;
width:100%;
padding:${props => (props.primary ? '2rem 0rem' : '10vh 0rem')};



@media (min-width: 670px) {
  padding:${props => (props.primary ? '2rem 5rem' : '10vh 0rem')};
  align-content: center;
  h1{
  //  margin-bottom:10rem;
  }
}



`
