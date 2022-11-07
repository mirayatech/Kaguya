import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Button = styled.button`
  border: none;
  display: flex;
  padding: 10px;
  margin: 0 0 10px;
  cursor: pointer;
  font-size: 0.9;
  font-weight: 600;
  width: 49%;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  color: ${theme.White};
  transition: all 0.2s ease;
  background-color: ${theme.Primary};

  .bookmark__svg {
    margin-right: 5px;
    font-size: calc(13 / 16 * 1rem);
  }

  .star__svg {
    margin-right: 5px;
    font-size: 0.95rem;
  }

  :hover {
    background-color: ${theme.Secondary};
  }
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
