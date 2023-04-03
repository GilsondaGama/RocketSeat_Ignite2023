import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  nav {
    display: flex;

    a {
      display: flex;

      padding: 0.5rem;
      border-radius: 6px;
      margin-left: 0.25rem;
      
      cursor: pointer;
      
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      
      &:hover {
        color: ${(props) => props.theme['yellow-light']};
        background: ${(props) => props.theme.yellow};
        
        transition background-color 0.2s;
      }
      
    }

    span {
      display: flex;
      align-items: center;

      gap: 0.25rem;
      padding: 0.5rem;
      border-radius: 6px;
      
      color: ${(props) => props.theme['purple-dark']};
      background: ${(props) => props.theme['purple-light']};

      MapPin {
        color: ${(props) => props.theme['yellow-light']};
      }
    }
  }
`
