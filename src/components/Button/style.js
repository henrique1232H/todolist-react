import styled from "styled-components";

export const Container = styled.button`
    border: none;

    background: ${({theme}) => theme.COLOR.PRODUCT.BLUE_DARK};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 1.6rem;
    border-radius: 0.5rem;
    font-weight: 700;

    &:hover {
        background: ${({theme}) => theme.COLOR.PRODUCT.BLUE};
    }

    > svg {
        font-size: 1.6rem;
    }

`