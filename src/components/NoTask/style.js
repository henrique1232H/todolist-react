import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2.4rem;
    color: ${({theme}) => theme.COLOR.BASE.GRAY_300};
    border-top: 1px solid ${({theme}) => theme.COLOR.GRAY_300};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 24rem;
    font-size: 16px;

    > h3 {
        font-weight: bold;
    }

    > p {
        font-weight: 200;
    }

    > svg {
        font-size: 56px;
        margin-bottom: 16px;
    }
`