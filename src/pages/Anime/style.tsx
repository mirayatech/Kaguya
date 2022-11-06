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
  transition: 0.3s ease;

  :hover .play__link {
    opacity: 1;
  }
  @media screen and (max-width: 748px) {
    display: none;
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
`

export const Poster = styled.img`
  width: 20rem;
  height: 25rem;
  transform: translateY(-80px);
`

export const Button = styled.button`
  width: 150px;
  border: none;
  display: flex;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  align-items: center;
  color: ${theme.White};
  transition: all 0.2s ease;
  transform: translateY(-70px);
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
    margin-top: -35px;
    padding-bottom: 15px;
    font-size: calc(30 / 16 * 1rem);
  }

  li {
    display: flex;
    font-size: 1rem;
    align-items: center;
  }

  li .dot__svg {
    font-size: calc(20 / 16 * 1rem);
  }

  li:last-child .dot__svg {
    display: none;
  }

  p:first-of-type {
    margin-top: 5px;
    overflow: hidden;
    color: ${theme.Grey};
    text-overflow: ellipsis;
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
`

export const Grid = styled.div`
  margin: auto;
  padding: 30px;
  display: grid;
  max-width: 2200px;
  grid-template-columns: 200px auto;
`

export const CharacterGrid = styled.div`
  display: grid;
  gap: 0 2rem;
  grid-template-columns: auto auto;
`

export const CharacterWrapper = styled.div`
  margin: 0 30px;
  h2 {
    font-size: calc(24 / 16 * 1rem);
  }
`
