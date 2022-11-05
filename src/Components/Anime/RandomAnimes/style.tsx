import styled from '@emotion/styled'

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

export const Image = styled.div`
  height: 50vh;
  margin: auto;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
