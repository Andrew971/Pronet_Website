import styled from 'styled-components';

export default styled.section `
padding:${props => (props.src ? '0rem 0rem' : '5rem 5rem')};
align-content: center;
width:100%;
height:auto;
background:${props => (props.primary ? props.theme.background_primary : props.theme.background_secondary)};
background-image: ${props => (props.src ? `url(${props.src})` : "")};
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color:${props => (props.src ? 'white' : 'black')};
h1{
  margin-bottom:1rem;
  margin-top:1rem;
  text-align:center;
}
@media (max-width: 660px) {
  padding:${props => (props.src ? '0rem 0rem' : '2rem 2rem')};

}
`
