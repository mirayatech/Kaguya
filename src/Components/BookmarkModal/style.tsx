import styled from '@emotion/styled'

import { theme } from '../../styles/theme'

export const Modal = styled.div`
  width: 350px;
  height: 150px;
  border-radius: 8px;
  border: 1px solid ${theme.HoverDarkGrey};
  background-color: ${theme.MediumGrey};
`

export const Text = styled.h1`
  padding: 30px 15px;
  text-align: center;
  font-size: calc(20 / 16 * 1rem);
`

export const Button = styled.button`
  margin: auto;
  width: 80px;
  border: none;
  padding: 8px;
  display: flex;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  text-align: center;
  align-items: center;
  color: ${theme.White};
  justify-content: center;
  transition: all 0.2s ease;
  background-color: ${theme.Primary};

  :hover {
    background-color: ${theme.Secondary};
  }
`
