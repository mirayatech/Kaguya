import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Wrapper = styled.div`
  height: 35vh;
  padding: 15px;
  display: flex;
  margin: 0 10px;
  position: relative;
  border-radius: 10px;
  align-items: flex-end;
  transition: 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 500px) {
    height: 30vh;
  }
`

export const InfoWrapper = styled.div`
  h1 {
    color: ${theme.White};
    width: 450px;
    padding-bottom: 15px;
    text-transform: uppercase;
    font-size: calc(22 / 16 * 1rem);
    @media screen and (max-width: 500px) {
      width: 350px;
      padding: 0 0 0 5px;
    }

    @media screen and (max-width: 400px) {
      width: 250px;
      font-size: calc(20 / 16 * 1rem);
    }
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    display: flex;
    font-weight: 600;
    align-items: center;
    margin-right: 15px;
    font-size: 0.95rem;
    color: ${theme.White};
    @media screen and (max-width: 500px) {
      padding: 10px 0;
    }
  }
  .smile__svg {
    font-size: 1.28rem;
    margin: 0 5px;
  }

  .heart__svg {
    font-size: 1.32rem;
    margin: 0 3px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    @media screen and (max-width: 500px) {
      padding-left: 5px;
      font-size: 0.9rem;
    }
  }

  li {
    font-weight: 600;
    font-size: 1rem;
    color: ${theme.White};
    @media screen and (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
`
