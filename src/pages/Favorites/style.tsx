import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const InfoWrapper = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-50px);
`

export const InfoImage = styled.img`
  width: 300px;

  @media screen and (max-width: 600px) {
    width: 250px;
  }
`

export const InfoText = styled.h1`
  width: 600px;
  line-height: 2;
  font-weight: 500;
  text-align: center;
  font-size: calc(20 / 16 * 1rem);

  a {
    padding: 0 5px;
    color: ${theme.Red};
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    width: 335px;
  }
`
