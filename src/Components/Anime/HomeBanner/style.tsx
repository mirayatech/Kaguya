import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const TopGardient = styled.div`
  width: 100%;
  bottom: top;
  height: 15vh;
  position: absolute;
  align-self: flex-start;
  background-image: linear-gradient(
    0deg,
    transparent,
    rgba(15, 15, 15, 0.61),
    rgba(17, 17, 17, 0.704),
    rgba(17, 17, 17, 0.957)
  );
`

export const Banner = styled.div`
  height: 50vh;
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

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 30px;
  position: absolute;
`

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 2200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: calc(36 / 16 * 1rem);
`

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

export const MiniWrapper = styled.div`
  max-width: 2200px;
`

export const Rate = styled.p`
  display: flex;
  font-weight: 500;
  align-items: center;
  font-size: calc(18 / 16 * 1rem);
  padding-bottom: 10px;
  padding-right: 25px;
`

export const Summary = styled.p`
  color: #d1d5db;
  max-width: 800px;
  font-size: 1rem;
  transition: all 0.2s ease;
  :hover {
    color: ${theme.White};
  }
`
