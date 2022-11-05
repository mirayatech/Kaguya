import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const Row = styled.div`
  position: relative;
`

export const Slider = styled.div`
  display: flex;
  padding: 15px 0;
  overflow-x: scroll;
  flex-direction: row;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 748px) {
    display: none;
  }
`

export const MobileSlider = styled.div`
  display: flex;
  padding-bottom: 30px;
  overflow-x: scroll;
  flex-direction: row;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 748px) {
    display: none;
  }
`

export const RowWrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 2200px;
  padding: 30px 30px 15px 30px;
  align-items: center;
  justify-content: space-between;
  h1 {
    text-transform: uppercase;
    font-size: calc(24 / 16 * 1rem);
    @media screen and (max-width: 748px) {
      font-size: calc(22 / 16 * 1rem);
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: baseline;

  button {
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    padding: 10px;
    margin: 0 10px;
    border: 2px solid ${theme.White};
    border-radius: 50%;
    z-index: 20;
    color: white;
    background-color: transparent;
    transition: all 0.3s ease;
    :hover {
      background-color: rgba(255, 255, 255, 0.172);
    }

    @media screen and (max-width: 748px) {
      display: none;
    }
  }
`

export const AnimeCard = styled.div`
  position: relative;

  :hover div {
    opacity: 1;
  }
`

export const Image = styled.div`
  width: 17rem;
  height: 25rem;
  display: flex;
  flex-shrink: 0;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease;

  :hover {
    width: 35rem;
  }

  :hover div {
    opacity: 1;
  }
  @media screen and (max-width: 1500px) {
    width: 14rem;
    height: 20rem;
  }
`

export const Gardient = styled.div`
  width: 50rem;
  height: 25rem;
  opacity: 0;
  position: absolute;
  transition: all 0.3s ease;
  background: linear-gradient(#00000080, #00000080);
  @media screen and (max-width: 1500px) {
    height: 20rem;
  }
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const AnimeInfo = styled.div`
  top: 50%;
  opacity: 0;
  padding: 30px;
  position: absolute;
  pointer-events: none;
  transition: all 0.5s ease;

  h1 {
    font-size: calc(18 / 16 * 1rem);
    padding-bottom: 10px;
  }

  p {
    display: flex;
    font-weight: 500;
    align-items: center;
  }

  li {
    font-weight: 500;
    display: flex;
    font-size: 1rem;
  }

  li:last-child .dot__svg {
    display: none;
  }
`

export const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  padding: 15px 5px;
`
