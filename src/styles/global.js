import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: monospace;
}
`
export const MainContainer = styled.div`
    height: 100vh;
    width: 80vw;
    margin: 0 auto;
    border: solid 1px black;
`

export default GlobalStyled