import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Anime = styled.div`
  margin: auto;
  display: flex;
  padding: 30px;
  max-width: 2200px;
  flex-direction: column;
`

export const AnimeTitle = styled.h1`
  padding-bottom: 15px;
  text-transform: uppercase;
  font-size: calc(24 / 16 * 1rem);

  @media screen and (max-width: 748px) {
    font-size: calc(22 / 16 * 1rem);
  }
`

export const AnimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PrimaryWrapper = styled.div`
  position: relative;

  :hover a {
    opacity: 1;
  }
`

export const SecondaryWrapper = styled.div`
  display: flex;
  padding-top: 15px;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const Image = styled.div`
  height: 50vh;
  margin: auto;
  display: flex;
  position: relative;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 748px) {
    height: 30vh;
  }
`

export const AnimeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    font-size: 1rem;
    @media screen and (max-width: 748px) {
      font-size: calc(14 / 16 * 1rem);
    }
  }
  li .dot__svg {
    font-size: calc(20 / 16 * 1rem);
  }
  li:last-child .dot__svg {
    display: none;
  }

  @media screen and (max-width: 900px) {
    align-items: center;
    flex-direction: row;
  }

  @media screen and (max-width: 748px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const AnimeInfoTitle = styled.p`
  font-weight: 700;
  padding-bottom: 10px;
  font-size: calc(22 / 16 * 1rem);

  @media screen and (max-width: 900px) {
    margin-right: 30px;
  }

  @media screen and (max-width: 748px) {
    font-size: calc(20 / 16 * 1rem);
  }
`

export const AnimeRate = styled.div`
  display: flex;
  align-items: center;

  p {
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    align-items: center;
    padding-right: 15px;
    padding-bottom: 10px;
    @media screen and (max-width: 748px) {
      font-size: calc(14 / 16 * 1rem);
    }
  }
`

export const Summary = styled.p`
  max-width: 600px;
  color: ${theme.Grey};
  @media screen and (max-width: 900px) {
    max-width: 900px;
  }
  @media screen and (max-width: 748px) {
    font-size: calc(14 / 16 * 1rem);
  }
`
