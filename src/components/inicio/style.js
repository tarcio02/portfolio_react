import styled from "styled-components";

export const ContainerInicio = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 24px;
    padding: 24px;
    height: 70vh;
    margin-top: 8vh;
    background-color: #f1f2f6;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);

    .text{
        max-width: 600px;

        h1 span{
            color: #0c2461;
        }
    }

    ul{
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        list-style-type: none;

        li a{
            display: grid;
            text-decoration: none;
            text-align: center;
            color: #0c2461;
            list-style: none;
            transition: 0.7s;
        }
        li a:hover{
            opacity: 0.7;
        }
        li a i{
            font-size: 32px;
        }
    }

    img{
        max-width: 264px;
        border-radius: 8px;
    };

    @media (max-width: 667px){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;

        .text{
            text-align: center;
            max-width: 100%;
        }

        img{
            width: 216px;
        }
    }
` 