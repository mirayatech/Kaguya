import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const Banner = styled.div`
  height: 40vh;
  margin: auto;
  display: flex;
  position: relative;
  align-items: center;
  transition: 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  :hover .play__link {
    opacity: 1;
  }

  @media screen and (max-width: 848px) {
    height: 25vh;
  }
`

export const Wide = styled.div`
  background-color: ${theme.AlmostBlack};
`
export const Section = styled.div`
  margin: auto;
  display: flex;
  max-width: 2200px;
  padding: 15px 30px;
  background-color: ${theme.AlmostBlack};

  @media screen and (max-width: 530px) {
    flex-direction: column;
    padding: 15px 0;
  }
`

export const Poster = styled.img`
  width: 20rem;
  height: 25rem;
  transform: translateY(-80px);
  @media screen and (max-width: 848px) {
    width: 10rem;
    height: 15rem;
    padding-left: 30px;
  }

  @media screen and (max-width: 530px) {
    display: none;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-70px);
  @media screen and (max-width: 848px) {
    display: none;
  }
`

export const Button = styled.button`
  width: 150px;
  border: none;
  display: flex;
  padding: 10px;
  margin-right: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  align-items: center;
  color: ${theme.White};
  transition: all 0.2s ease;
  background-color: ${theme.Primary};

  .play__svg {
    margin-right: 5px;
    font-size: calc(20 / 16 * 1rem);
  }

  :hover {
    background-color: ${theme.Secondary};
  }
`

export const AnimeInfo = styled.div`
  padding: 0 30px;

  h1 {
    word-wrap: break-word;
    white-space: normal;
    margin-top: -60px;
    padding-bottom: 15px;
    font-size: calc(30 / 16 * 1rem);
    @media screen and (max-width: 848px) {
      font-size: calc(22 / 16 * 1rem);
      margin-top: 10px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    align-items: center;
    @media screen and (max-width: 848px) {
      line-height: 2;
    }
  }

  li .dot__svg {
    font-size: calc(20 / 16 * 1rem);
  }

  li:last-child .dot__svg {
    display: none;
  }
`

export const Summary = styled.p`
  margin-top: 5px;
  overflow: hidden;
  color: ${theme.Grey};

  @media screen and (max-width: 848px) {
    display: none;
  }
`

export const AnimeShowcase = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;

  div {
    p {
      font-size: 1rem;
    }

    p:first-of-type {
      color: #9ca3af;
      font-weight: 700;
      padding-bottom: 5px;
    }

    p:last-child {
      font-weight: 500;
      color: #9ca3af;
    }
  }

  div:not(:last-child) {
    margin-right: 60px;
  }
  @media screen and (max-width: 848px) {
    display: none;
  }
`

export const Grid = styled.div`
  margin: auto;
  padding: 30px;
  display: grid;
  max-width: 2200px;
  grid-template-columns: 200px auto;
  @media screen and (max-width: 848px) {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
  }
`

export const CharacterGrid = styled.div`
  display: grid;
  gap: 0 2rem;
  grid-template-columns: auto auto;
  @media screen and (max-width: 648px) {
    gap: 0;
    grid-template-columns: auto;
  }
`

export const CharacterWrapper = styled.div`
  margin: 15px 30px;
  h2 {
    font-size: calc(24 / 16 * 1rem);
  }

  @media screen and (max-width: 648px) {
    margin: 0 15px;
  }
`

// Mobile

export const MobileWrapper = styled.div`
  margin: auto;
  display: flex;
  padding: 0 30px 15px 30px;
  margin-top: -70px;
  max-width: 2200px;
  flex-direction: column;
  background-color: ${theme.AlmostBlack};

  p {
    color: ${theme.Grey};
  }

  @media screen and (min-width: 848px) {
    display: none;
  }

  @media screen and (max-width: 530px) {
    margin-top: 0;
  }
`

export const MobileTrailerButton = styled.button`
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  margin: 15px 0;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  align-items: center;
  color: ${theme.White};
  justify-content: center;
  transition: all 0.2s ease;
  background-color: ${theme.Primary};

  .play__svg {
    margin-right: 5px;
    font-size: calc(18 / 16 * 1rem);
  }

  :hover {
    background-color: ${theme.Secondary};
  }
`

export const MobileAnimeShowcase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
  overflow-x: scroll;
  background-color: ${theme.AlmostBlack};

  div {
    padding: 0 30px;

    p {
      font-size: 1rem;
    }

    p:first-of-type {
      color: #9ca3af;
      font-weight: 700;
      padding-bottom: 5px;
    }

    p:last-child {
      font-weight: 500;
      color: #9ca3af;
    }
  }

  div:not(:last-child) {
    margin-right: auto;
  }
  @media screen and (min-width: 848px) {
    display: none;
  }
`
