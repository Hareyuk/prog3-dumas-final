import styled from 'styled-components';

const Container = styled.div`

    min-height: 68vh;
    @font-face {
        font-family: Pixeled;  
        font-weight: 700;
        src: url(fonts/Pixeled.ttf) format('truetype');
    }

    @font-face {
        font-family: Play;  
        font-weight: 700;
        src: url(fonts/Play-Regular.ttf) format('truetype');
    }
    img
    {
        margin: 0 auto;
        max-width: 100%;
    }
    max-width: 1703px;
    margin: 0 auto;

    .fonted
    {
        font-family: "Pixeled";
    }

    .infoTextFull
    {
        margin: 2em 0;
        color: #FFFCB2;
        background-image: url('/img/txturetransp.png');
        font-size: 1.5em;
        font-family: "Play";
        div
        {
            padding: 1em 1.5em;
        }
        border-radius: 0.7em;
    }

    .infoTextFull
    {
        width: 100%;
    }

    section
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        h1
        { 
            color: #FFFCB2; 
            text-align: center;
            width: 100%;
            font-size: 2.5em;
        }
        max-width: 1703px;
    }
`

export {Container};