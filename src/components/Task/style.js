import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLOR.BASE.GRAY_500};
    margin-top: 24px;
    border-radius: 8px;
    height: 72px;
    padding: 16px;
    display: flex;
    align-items: center;

    gap: 16px;

    > h3 {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        color: ${({theme, done}) => done ? theme.COLOR.BASE.GRAY_300 : "#fff"};
        text-decoration: ${({theme, done}) => done ? "line-through" : "none"};
        width: 100%;
    }

    > div {
        background: ${({theme, done}) => !done ? "none" : theme.COLOR.PRODUCT.PURPLE_DARK};
        border-color: ${({theme, done}) => !done ? theme.COLOR.PRODUCT.BLUE : theme.COLOR.PRODUCT.PURPLE};
        border-width: ${({theme, done}) => !done ? "2px" : "0px"};
        border-style: ${({theme, done}) => !done ? "solid" : "none"};
        border-radius: 50%;
        padding: ${({theme, done}) => !done ? "9px" : "6px"};
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;


        > svg {
            color: #fff;
            font-size: 10px;
        }

        
        > button {
            position: absolute;
            visibility: hidden;
        }

    }

    > button {
        background: none;
        padding: 6px;
        border: none;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        &:hover {
            background: ${({theme}) => theme.COLOR.BASE.GRAY_400};

            > svg {
                color: ${({theme}) => theme.COLOR.FEEDBACK.DANGER};
            }
        }
        
        > svg {
            color: ${({theme}) => theme.COLOR.BASE.GRAY_300};
            font-size: 14px;
        }
    }


   
`