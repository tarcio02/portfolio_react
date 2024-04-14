import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 14vh;
    border-bottom: 1px solid #0c2461;

    h1{
        font-size: 24px;
        font-weight: 200;
        color: #0c2461;
    }

    ul{
        display: flex;
        gap: 24px;
        list-style-type: none;

        li{
            color: #0c2461;
            border: solid 1px transparent;
        }

        li:hover{
            border-bottom: solid 1px #0c2461;
        }
    }

    @media (max-width: 667px){
        ul{
            display: none;
        }
    }
`