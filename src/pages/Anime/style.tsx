import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const Banner = styled.div`
  height: 40vh;
  margin: auto;
  display: flex;
  position: relative;
  align-items: center;
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

export const Section = styled.div`
  margin: auto;
  display: flex;
  padding: 15px 30px;
  max-width: 2200px;
  background-color: ${theme.AlmostBlack};
`

export const Poster = styled.img`
  width: 20rem;
  height: 25rem;
  transform: translateY(-80px);

  /* @media screen and (max-width: 1500px) {
    width: 11rem;
    height: 18rem;
  } */
`

export const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${theme.White};
  background-color: ${theme.Primary};
  padding: 10px;
  width: 150px;
  border: none;
  border-radius: 4px;
  transform: translateY(-70px);
  transition: all 0.2s ease;

  .play__svg {
    font-size: calc(20 / 16 * 1rem);
    margin-right: 5px;
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
    align-items: center;
    font-size: 1rem;
  }

  li .dot__svg {
    font-size: calc(20 / 16 * 1rem);
  }

  li:last-child .dot__svg {
    display: none;
  }

  p:first-of-type {
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 5px;
    color: ${theme.Grey};
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
  max-width: 2200px;
  display: grid;
  grid-template-columns: 200px auto;
`
