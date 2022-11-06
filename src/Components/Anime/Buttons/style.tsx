import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Button = styled.button`
  border: none;
  display: flex;
  padding: 12px;
  margin: 0 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  color: ${theme.White};
  transition: all 0.2s ease;
  background-color: ${theme.Primary};

  .bookmark__svg {
    font-size: calc(15 / 16 * 1rem);
  }

  .star__svg {
    font-size: calc(17 / 16 * 1rem);
  }

  span {
    display: none;
  }
  :hover {
    background-color: ${theme.Secondary};
  }
`

export const ActionButtons = styled.div`
  display: flex;
`
