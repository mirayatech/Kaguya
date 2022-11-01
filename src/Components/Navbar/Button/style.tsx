import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const HamburgerMenu = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  font-size: 2.2rem;
  margin-left: 20px;
  color: ${theme.White};
  background-color: transparent;

  @media screen and (min-width: 749px) {
    display: none;
  }

  @media screen and (max-width: 448px) {
    font-size: 1.8rem;
  }
`

export const Wrapper = styled.div`
  position: relative;
`
