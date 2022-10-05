import styled, {css} from "styled-components";


const Banner = styled.div`
   color: black;
   font-size: 1.5em;
   border: 3px solid red;
   padding: 25px;
   /* font-family: 'Permanent Marker'; */

   @media (min-width: 720px){
       grid-area: 1 / span 12;
       padding: 20px
   }
`;



export default Banner;