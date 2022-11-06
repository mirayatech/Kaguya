import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Card = styled.div`
  display: flex;
  background-color: ${theme.AlmostBlack};
  margin: 15px 0;
  border-radius: 4px;

  img {
    width: 60px;
    border-radius: 4px 0 0 4px;
  }
`

export const NameAndRole = styled.div`
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: space-between;

  p:first-of-type {
    font-weight: 600;
  }

  p:last-child {
    color: ${theme.Grey};
  }
`
