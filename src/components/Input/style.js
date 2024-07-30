import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLOR.BASE.GRAY_500};
    color: white;
    border-radius: 0.5rem;
    display: ${({theme, filled}) => filled ? "flex" : "block"};
    align-items: center;
    border-color: ${({theme, filled}) => filled ? theme.COLOR.PRODUCT.PURPLE_DARK : "none"};
    border-width: ${({theme, filled}) => filled ? "1px" : "0px"};
    border-style: ${({theme, filled}) => filled ? "solid" : "none"};
    width: 100%;


    > input {
        background: none;
        border-color: ${({theme, filled}) => !filled ? theme.COLOR.BASE.GRAY_700 : "none"};
        border-width: ${({theme, filled}) => !filled ? "1px" : "0px"};
        border-style: ${({theme, filled}) => !filled ? "solid" : "none"};

        border-radius: 0.5rem;
        width: 100%;
        padding: 1.6rem;
        color: #fff;
        outline: none;
        font-size: 12px;
        flex: 1;
    }

    > p {
        margin-left: 2rem;
        width: 25%;
        font-size: 12px;
        border: none;

    }

    > input::placeholder {
        color: ${({theme, filled}) => !filled ?? theme.COLOR.BASE.GRAY_300};
        font-weight: 500;
    
    };

    > input:focus {
        border-color: ${({theme, filled}) => !filled ? theme.COLOR.PRODUCT.PURPLE_DARK : "none"};
        border-width: ${({theme, filled}) => !filled ? "1px" : "0px"};
        border-style: ${({theme, filled}) => !filled ? "solid" : "none"};
    }

`