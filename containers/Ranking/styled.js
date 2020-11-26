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

    section
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        h1
        { 
            color: #FFFCB2; 
            text-align: center;
            width: 100%;
            font-size: 2.5em;
            font-family: "Pixeled";
        }
        max-width: 1703px;
    }

    .ListRanks
    {
        display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 100%;
            margin-bottom: 3em;
            grid-gap: 20px;
            
    }
`

export {Container};