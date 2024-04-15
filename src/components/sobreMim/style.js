import styled from "styled-components";

export const ContainerSobreMim = styled.div`
    display: flex;
    height: 70vh;
    margin-top: 8vh;
    background-color: #f1f2f6;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);

    .text{
        padding: 24px;
        max-width: 50%;

        h1{
            font-size: 32px;

            span{
                color: #0c2461;
            }
        }
    }

    .image{
        width: 50%;
        background-color: #0c2461;
    }
`