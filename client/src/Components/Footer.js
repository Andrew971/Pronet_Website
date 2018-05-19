import styled from "styled-components";
export default styled.footer`
width: 100%;
 height: auto;
 background-image: ${props => (props.src ? `url(${props.src})` : "")};
 background-attachment: fixed;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 color:white;
 h1{
   color:white;
   font-family: Andale Mono;
   text-align: center;
   font-size: 3em;
   margin:auto;
 }
 @media (max-width: 670px) {
   text-align:center;
   ul{
     padding:0;
   }
 }
  `;
