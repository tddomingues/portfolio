import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
}

a {
    text-decoration: none;
}

ol,
ul {
    list-style: none;
}

button,
input[type="submit"] {
    border: none;
    cursor: pointer;
    outline: none;
}

input,
textarea {
    border: none;
    outline: none;
    background-color: transparent;
}

#nav {
    z-index: 1111;
}

`;
