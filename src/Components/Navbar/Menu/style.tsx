import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Avatar = styled.img`
  width: 42px;
  border-radius: 50%;
  margin-left: 20px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
`

export const Wrapper = styled.div`
  position: relative;
`

export const LogOut = styled.button`
  border: none;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  border-radius: 4px;
  padding: 10px 20px;
  width: 100%;
  color: ${theme.Primary};
  transition: all 0.2s ease;
  background-color: transparent;

  :hover {
    background-color: rgb(230, 229, 229);
  }
`
