import styled from 'styled-components';

const Container = styled.div`
@font-face {
    font-family: Pixeled;  
    font-weight: 700;
    src: url(fonts/Pixeled.ttf) format('truetype');
}
font-family: "Pixeled";
width: 100%;
margin: 0 auto;
background-color: #EBE655;

.cont
{
    margin: 0 auto;
    max-width: 1703px;
    padding-top: 0.7em;
    padding-bottom: 0.7em;
}

img, ul li:first-child a
{
    max-width: 80px;
}

.LogOut
{
    color:#e03d3d;
}

ul
{
    display: inline-block;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    li
    {
        display: inline-block;
        margin-left: 2em;
        a
        {
            color: #693785;
            text-decoration: none;
            font-size: 2em;
        }
    }
}
`

export {Container};