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
  margin: auto;
  display: flex;
  padding: 15px;
  max-width: 2200px;
  justify-content: center;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  padding: 30px 15px;
  padding-top: 100px;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: calc(26 / 16 * 1rem);
  }

  h2 {
    font-weight: 600;
    font-size: calc(26 / 16 * 1rem);
  }

  @media screen and (max-width: 548px) {
    line-height: 2;
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Animes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);

  a {
    color: ${theme.White};
    :hover {
      color: ${theme.Red};
    }
  }

  h3 {
    width: 14rem;
    padding: 5px 10px;
    font-size: calc(18 / 16 * 1rem);
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 548px) {
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      margin-bottom: 20px;
    }
  }
`

export const Poster = styled.div`
  width: 14rem;
  height: 20rem;
  display: flex;
  flex-shrink: 0;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    top: 10px;
    right: 10px;
    padding: 6px;
    border: none;
    display: flex;
    cursor: pointer;
    font-size: 1.2rem;
    position: absolute;
    border-radius: 4px;
    border: 1px solid ${theme.Red};
    color: ${theme.White};
    transition: all 0.3s ease;
    background-color: ${theme.Primary};

    :hover {
      background-color: ${theme.Secondary};
    }
  }
`
