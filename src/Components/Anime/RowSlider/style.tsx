import styled from '@emotion/styled'

export const Image = styled.div`
  width: 17rem;
  height: 25rem;
  display: flex;
  flex-shrink: 0;
  margin: 0 10px;
  cursor: pointer;
  flex-direction: column;
  transition: all 0.3s ease;
  :hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 1500px) {
    width: 14rem;
    height: 20rem;
  }
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Slider = styled.div`
  display: flex;
  flex-direction: row;
`
