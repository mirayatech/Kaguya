import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Avatar = styled.img`
  width: 42px;
  margin-left: 20px;
  border-radius: 50%;
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`

export const Wrapper = styled.div`
  position: relative;
`

export const LogOut = styled.button`
  width: 100%;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  border-radius: 4px;
  padding: 15px 30px;
  color: ${theme.Primary};
  transition: all 0.2s ease;
  background-color: transparent;

  :hover {
    background-color: rgb(230, 229, 229);
  }
`

export const Skeleton = styled.div`
  width: 42px;
  height: 42px;
  padding: 10px;
  margin-left: 20px;
  border-radius: 50%;
  background-color: ${theme.Grey};
`

export const HamburgerMenu = styled.div`
  width: 100vw;
  position: absolute;
  top: 5 0px;
  right: -30px;
  background-color: ${theme.DrakGrey};

  a {
    color: ${theme.White};
    padding: 15px 30px;

    display: block;
    font-weight: 600;
    text-decoration: none;

    :not(:last-child) {
      border-bottom: 1px solid ${theme.HoverDarkGrey};
    }
  }
`
