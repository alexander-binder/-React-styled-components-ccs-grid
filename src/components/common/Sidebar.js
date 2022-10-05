import styled, {css} from "styled-components";


const Sidebar = styled.div`
   color: black;
   font-size: 1.5em;
   border: 3px solid blue;
   padding: 15px;


   @media (min-width: 720px){
       grid-column: 1 / span 2;
       grid-row: 2;
   }

`;


export default Sidebar;