import styled from "styled-components";
export default styled.header`
width: 100%;
 height: 90vh;
 background-image: ${props => (props.src ? `url(${props.src})` : "")};
 background-attachment: fixed;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 h1{
   color:white;
   font-family: Andale Mono;
   text-align: center;
   font-size: 3em;
   margin:auto;
 }
  `;
