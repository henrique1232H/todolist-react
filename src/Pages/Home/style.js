import styled from "styled-components";

export const Main = styled.main`

    background: ${({theme}) => theme.COLOR.BASE.GRAY_600};
    height: auto;
    min-height: 100vh;


    > header {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        gap: 3rem;
        height: 25vh;
        background: ${({theme}) => theme.COLOR.BASE.GRAY_700};

         h1 {
            font-size: 3rem;
            color: ${({theme}) => theme.COLOR.PRODUCT.BLUE};

            > span {
                color: ${({theme}) => theme.COLOR.PRODUCT.PURPLE};
            }
        }


        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }


    }

`

export const Nav = styled.nav`
    margin: -2.5rem auto;
    width: min(120rem, 60%);

    @media (max-width: 900px) {
        width: min(120rem, 90%);
    }
`


export const Form = styled.form`
    display: flex;
    align-items: center;

    width: 100%;
    gap: 8px;

`

export const Section = styled.section`
    width: min(120rem, 60%);
    margin: 6.4rem auto 0 auto;



    > div:first-child {
        display: flex;
        justify-content: space-between;


        > h2 {
            font-size: 14px;
        }

        > h2:first-child {
            color: ${({theme}) => theme.COLOR.PRODUCT.BLUE};
        }

        > h2:last-child {
            color: ${({theme}) => theme.COLOR.PRODUCT.PURPLE};
        }

        > h2 span {
            background: ${({theme}) => theme.COLOR.BASE.GRAY_400};
            border-radius: 10px;
            padding: 1px 5px;
            color: #fff;
            font-size: 12px;
            margin-left: 5px;

        }
    }

    @media (max-width: 900px) {
        width: min(120rem, 90%);
    }

`
