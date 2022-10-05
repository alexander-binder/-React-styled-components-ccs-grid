import styled, {css} from "styled-components";


const Ads = styled.div`
   color: black;
   font-size: 1.5em;
   border: 3px solid gray;
   padding: 15px;


   @media (min-width: 720px){
       grid-column: 1 / span 2;
   }
`;

export default Ads;