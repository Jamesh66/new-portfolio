import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

html{
    @media (max-width:1100px){
        font-size: 80%;
    }
    @media (max-width:1100px){
        font-size: 70%;
    }
    height:100%;
}

body{
    background: #1b1b1b;
    font-family: 'Fira Sans', sans-serif;
    height:100%;
}

button{
    outline:none;
    font-weight:bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23A1D7;
    background:transparent;
    color:white;
    transition: all 0.5s ease;
    font-family: 'Fira Sans', sans-serif;
    &:hover{
        background-color:#23A1D7;
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
    color: #23A1D7;
}
p{
    padding: 1.5rem 0rem 0rem 0rem;
    color: #ccc;
    font-size: 1.2rem;
    line-height:150%;
}
a{
        text-decoration: none;
    }
h4{
    font-weight:bold;
}
`;

export default GlobalStyle;
