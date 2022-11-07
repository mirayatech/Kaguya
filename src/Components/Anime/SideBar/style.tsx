import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Sidebar = styled.div`
  max-height: 800px;
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
    @media screen and (max-width: 848px) {
      margin-bottom: 0;
    }
  }

  div {
    @media screen and (max-width: 848px) {
      margin: 0 30px;
    }
  }

  @media screen and (max-width: 848px) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 15px 0;
    width: 100%;
    overflow-x: scroll;
  }
`
