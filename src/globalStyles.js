// adding styles accross the whole site with createGlobalStyles from styled-components
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Monsterrat', sans-serif;
    }
    /* to add animation and to prevent certain issues with animation */
    html, body {
        overflow-x: hidden;
    }
`

export default GlobalStyle;