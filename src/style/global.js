import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background: ${({theme}) => theme.COLOR.BASE.GRAY_700};
        height: 100vh;
    }


`