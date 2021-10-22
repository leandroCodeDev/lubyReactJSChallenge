 
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body {
    background: #292929;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  
  button {
    cursor: pointer;
  }
`