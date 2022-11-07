import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  padding-top: 50px;

  input {
    color: ${theme.Grey};
    border: none;
    background: ${theme.HoverDarkGrey};
    margin: 30px 0;
    font-size: 1rem;
    width: 98%;
    border-radius: 30px;
    padding: 10px 20px;
    ::placeholder {
      color: ${theme.Grey};
    }
  }
`

export const Poster = styled.div`
  width: 14rem;
  height: 20rem;
  display: flex;
  flex-shrink: 0;
  margin: 0 10px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Animes = styled.div`
  display: grid;
  gap: 1rem 0;
  justify-content: center;
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

export const NotFound = styled.div`
  div {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 150px;
    img {
      width: 200px;
      margin: auto;
    }

    h1 {
      padding-top: 10px;
      font-weight: 500;
    }
  }
`
