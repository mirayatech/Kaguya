import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Sidebar = styled.div`
  display: inline-block;
  padding: 15px;
  border-radius: 8px;
  background-color: ${theme.AlmostBlack};

  div {
    p:first-of-type {
      font-weight: 700;
      padding-bottom: 5px;
    }

    p {
      color: #9ca3af;
    }
  }

  div:not(:last-child) {
    margin-bottom: 30px;
  }
`
