import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FFFFFF;
        --background: #C5E4E7;
        --grey: #F3F9FA;
        --green-light: #9EBBBD;
        --green-dark: #00474B;
        --green-100: #5E7A7D;
        --green-50: #9FE8DF;
        --green-40: #26C2AE;
        --green-70: #547878;
        --orange: #E17457;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        height: 100%;
    }

    html {
        position: relative;
    }

    body, input, textarea, button {
        font-family: 'Space Mono', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Space Mono', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 0px;
    }

    @media (max-width: 960px) {
    body {
       overflow-x: hidden;
    }
}
`;
