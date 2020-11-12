import styled from 'styled-components';

const Container = styled.div`

max-width: 1703px;
padding-top: 21px;
padding-bottom: 8px;
width: 100%;
margin: 0 auto;

img
{
    vertical-align: middle;
}

ul
{
    display: inline-block;
    padding: 0;
    margin: 0;
    li
    {
        display: inline-block;
        margin-left: 2em;
        a
        {
            color: black;
            text-decoration: none;
            font-size: 1.5em;
        }
    }
}
`

export {Container};