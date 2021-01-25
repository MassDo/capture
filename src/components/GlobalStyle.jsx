import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
    scrollbar-width:none
}
html {
    @media (max-width:1690px){
        font-size: 75%;
    }
    @media (max-width:1250px){
        font-size: 65%;
    }
    @media (max-width:1100px){
        font-size: 55%;
    }
}
button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    padding: 1rem 2rem;
    border: 3px solid #00bcfc;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color:#00bcfc;
        color: white;
    }
}
h2{
    font-weight:lighter;
    font-size: 4rem;
}
h3{
    color: white
}
h4{
    font-size: 2rem;
    font-weight:bold;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight:bold;
    color:#02ec5c;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
.noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}
`;

export default GlobalStyle;
