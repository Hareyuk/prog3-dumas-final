import styled from 'styled-components'

const Container = styled.div`
max-width:1200px;
margin: 0 auto;
color:red;
padding-top: 2em;
@font-face {
    font-family: Pixeled;  
    font-weight: 700;
    src: url(fonts/Pixeled.ttf) format('truetype');
}

h1
{
    font-family: "Pixeled";
    color: #FFFCB2;
    margin-top: 0;
}

img
{
    max-width: 100%;
    margin: 0 auto;
    display: block;
}
`

export { Container };