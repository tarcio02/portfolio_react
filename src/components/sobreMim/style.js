import styled from "styled-components";

export const ContainerSobreMim = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 24px;
    height: 70vh;
    margin-top: 8vh;
    background-color: #f1f2f6;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);

    .text{
        max-width: 50%;

        h1{
            font-size: 32px;

            span{
                color: #0c2461;
            }
        }
    }

    .image img{
        width: 250px;
        max-height: 70vh;
        border-radius: 8px;
    }
`