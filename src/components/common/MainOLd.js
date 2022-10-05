import styled, {css} from "styled-components";


const Main = styled.main`
   color: black;
   font-size: 1em;
   border: 3px solid green;
   padding: 25px;


   @media (min-width: 720px){
       grid-column: 3 / span 10;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
   }

`;




export default Main;