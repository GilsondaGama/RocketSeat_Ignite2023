import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['base-blue']};
  }

  body {  
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem Nunito, sans-serif;
  }
`

interface StyledIconProps {
  variant?: string
  marginL?: string
  marginR?: string
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  font-size: 18px;
  color: ${(props) => props.theme[props.variant || 'base-label']};
  margin-left: ${(props) => props.marginL || 0};
  margin-right: ${(props) => props.marginR || 0};
`
