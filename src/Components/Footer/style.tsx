import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const Bottom = styled.footer`
  display: flex;
  padding: 30px 15px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.DrakGrey};

  p {
    font-weight: 500;
  }

  a {
    padding-left: 5px;
    color: ${theme.Red};
    transition: all 0.3s ease;
    text-decoration: underline;
    transition: all 0.3s ease;
    :hover {
      color: ${theme.Primary};
    }
  }
`
