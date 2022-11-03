import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const Row = styled.div`
  position: relative;
`

export const Slider = styled.div`
  display: flex;
  padding: 3rem 0;
  margin-top: -6rem;
  overflow-x: scroll;
  flex-direction: row;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 1500px) {
    margin-top: -5rem;
  }

  @media screen and (max-width: 748px) {
    display: none;
  }
`

export const MobileSlider = styled.div`
  display: flex;
  padding: 4.5rem 0;
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

export const Buttons = styled.div`
  display: flex;
  padding-right: 100px;
  justify-content: flex-end;
  transform: translateY(-65px);

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
    @media screen and (min-width: 1500px) {
      transform: translateY(-0px);
    }

    @media screen and (max-width: 748px) {
      display: none;
    }
  }
`
