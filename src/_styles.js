import { createGlobalStyle } from 'styled-components/macro'
import { color } from 'helpers/vars'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${color.text};
    background: ${color.white};
    font-family: 'Roboto', 'Trebuchet MS', 'Helvetica CY', sans-serif;
  }

  a {
    text-decoration: none !important;
    display: inline-flex;
    align-items: center;
    color: ${color.main};
  }

  a:hover {
    color: ${color.accent};
  }

  *,
  *::before,
  *::after {
    box-shadow: none;
    box-sizing: inherit;
    outline: none;
  }

  .page {
    overflow: hidden;
    padding-bottom: 100px;
  }

  .react-responsive-modal-modal {
    width: 100%;
  }
`
