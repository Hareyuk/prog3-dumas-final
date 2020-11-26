import styled from 'styled-components';

const Container = styled.div`
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
    
    max-width: 1703px;
    margin: 0 auto;

    .fonted
    {
        font-family: "Pixeled";
    }
    .infoText
    {
        width: 67%;
        max-width: 1270px;
    }

    .btnsGames
    {
        
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        margin-bottom: 3em;
        grid-gap: 20px;
        a
        {
            background-color: #EBE655;
            text-decoration: none;
            color: #693785;
            font-size: 1.5em;
            font-family: "Play";
            border-radius: 0.3em;
            display: inline-block;
            filter: drop-shadow(0px 8px 0px #B9B531);
            transition: 0.2s;

            div
            {
                padding: 0.7em 1.3em;
                h3
                {
                    text-align: center;
                    margin: 0;
                    margin-top: 0.2em;
                }
                p
                {
                    margin: 0;
                    margin-top: 0.5em;
                    font-size: 0.8em;
                }
            }
        }
    }

    .btnsUser
    {
        width: 25%;
        max-width: 414px;
        text-align: center;

        a
        {
            position: relative;
            background-color: #EBE655;
            text-decoration: none;
            color: #693785;
            font-size: 2em;
            font-family: "Pixeled";
            width: 100%;
            border-radius: 0.3em;
            display: block;
            filter: drop-shadow(0px 8px 0px #B9B531);
            top: 0px;
            transition: 0.2s;

            :hover
            {
                top: -5px;
                filter: drop-shadow(0px 13px 0px #B9B531);
            }

            :active
            {
                top: 4px;      
                background-color: #c7c33f;      
                filter: drop-shadow(0px 4px 0px #B9B531);
            }
        }

        a:last-child
        {
            margin-top: 2em;
        }
    }

    .infoText, .infoTextFull
    {
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

    .btnsUser
    {
        max-width: 414px;
        width: 25%;
        a
        {
            width: 100%;
        }
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
        }
        max-width:  1703px;
    }

    section:first-child h1
    {
        font-size: 2.5em;
    }

    section:last-child h1
    {
        font-size: 2em;
    }
`

export {Container};