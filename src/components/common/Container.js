import styled, {css} from "styled-components";


const Container = styled.div`
    display: grid;
    height: 100vh;

    grid-template-rows:  auto 2fr auto auto auto;
    gap: 24px;

    @media (min-width: 720px){
        grid-template-columns: repeat(12, 1fr);
    }
`;

export default Container;