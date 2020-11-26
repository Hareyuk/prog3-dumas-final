import styled from 'styled-components';

const Container = styled.div`
@font-face {
    font-family: Play;  
    font-weight: 700;
    src: url(fonts/Play-Regular.ttf) format('truetype');
}
font-family: "Play";

@font-face {
    font-family: Pixeled;  
    font-weight: 700;
    src: url(fonts/Pixeled.ttf) format('truetype');
}

h3
{
    font-family: "Pixeled";
    font-size: 1em;
    text-align: center;
    color: #693785;
}
background-color: #EBE655;

.Rank
{
    height: 200px; 
    overflow-y: scroll;
    
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #B9B531;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #693785;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #331842;
    }

    ul
    {
        padding-left: 0;
    }

    li
    {
        width: 80%;
        margin: 1em auto;
        list-style-type:none;
        background-color: #B9B531;
        padding: 1em 0.5em;
        color: #331842;
    }
}
`

export {Container};