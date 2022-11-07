import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

// Unauthenticated

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
  width: 400px;

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

// Authenticated

export const FavoriteAnimes = styled.div`
  display: flex;
  padding: 15px;
  max-width: 2200px;
  margin: auto;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: calc(26 / 16 * 1rem);
  }

  h2 {
    font-weight: 600;
    font-size: calc(26 / 16 * 1rem);
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 15px;
  justify-content: space-between;
  padding-top: 100px;
`

export const Animes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);

  div {
    :hover {
      color: ${theme.Red};
    }
  }

  a {
    color: ${theme.White};
  }

  h3 {
    width: 14rem;
    padding: 5px 10px;
    font-size: calc(18 / 16 * 1rem);
    transition: all 0.3s ease;
  }
`

export const Poster = styled.div`
  width: 14rem;
  height: 20rem;
  display: flex;
  flex-shrink: 0;
  margin: 0 10px;
  cursor: pointer;
  flex-direction: column;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
