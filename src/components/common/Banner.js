import styled, {css} from "styled-components";


const Banner = styled.div`
   color: black;
   font-size: 1.5em;
   border: 3px solid red;
   padding: 25px;
   /* font-family: 'Permanent Marker'; */

   @media (min-width: 720px){
       grid-column: 3 / span 8;
       grid-row: 1;
       padding: 20px
   }
`;



export default Banner;