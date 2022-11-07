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

export const Menu = styled.div`
  top: 5 0px;
  right: -30px;
  width: 100vw;
  position: absolute;

  background-color: ${theme.DrakGrey};
  @media screen and (min-width: 749px) {
    display: none;
  }

  a {
    padding: 15px 30px;

    display: block;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    :hover {
      background-color: ${theme.MediumGrey};
    }
    :not(:last-child) {
      color: ${theme.White};
      border-bottom: 1px solid ${theme.HoverDarkGrey};
    }
  }
`
