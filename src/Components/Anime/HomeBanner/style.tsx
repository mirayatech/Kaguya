import styled from '@emotion/styled'

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
  height: 60vh;
  margin: auto;
  display: flex;
  position: relative;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const AnimeInfo = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 30px;
`

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 2200px;
  flex-direction: column;
`

export const Title = styled.h1`
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: calc(36 / 16 * 1rem);
`

export const MiniWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  p {
    display: flex;
    font-weight: 500;
    align-items: center;
    font-size: calc(18 / 16 * 1rem);
  }
`

export const Summary = styled.p`
  color: #d1d5db;
  max-width: 800px;
`
