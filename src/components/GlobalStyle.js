import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

html{
    @media (max-width:1000px){
        font-size: 80%;
    }
}

body{
    background: #1b1b1b;
    font-family: 'Fira Sans', sans-serif;
}

button{
    font-weight:bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background:transparent;
    color:white;
    transition: all 0.5s ease;
    font-family: 'Fira Sans', sans-serif;
    &:hover{
        background-color:#23d997;
        color: white;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color:white;
}
span{
    font-weight:bold;
    color: #23d997;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height:150%;
}
h4{
    font-weight:bold;
}
`;

export default GlobalStyle;
