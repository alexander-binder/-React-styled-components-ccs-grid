import React from "react";
import styled from "styled-components";
import {Header} from "./Header";


const Content = styled.main`
    max-width: 1200px;
    margin: 80px;
    padding: 0 16px;
    box-sizing: border-box;
    font-family: 'Opyen Sans';

    h1, h2, h3, h4, h5, h6{
        font-family: 'Permanent Marker';
    }
`;

export function PageLayout ({children}){
    return(
        <>
            <Header/>
            <Content>
                {children}
            </Content>
        
        </>
    )
}