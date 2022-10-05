import styled, {css} from "styled-components";


const Ads = styled.div`
   color: black;
   font-size: 1.5em;
   border: 3px solid gray;
   padding: 15px;


   @media (min-width: 720px){
       grid-column: 11 / span 2;
       grid-row: 1 / 3;
   }
`;

export default Ads;