import styled from '@emotion/styled'
import { theme } from '../../../styles/theme'

export const CardContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 2200px;

  @media screen and (min-width: 900px) {
    display: grid;
    padding: 0 30px;
    align-items: baseline;
    justify-content: space-evenly;
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    padding: 0 30px;
    align-items: baseline;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto;
  }
`

export const Card = styled.div`
  width: 90%;
  margin: 15px 0;
  background-color: ${theme.DrakGrey};

  @media screen and (min-width: 900px) {
    width: 400px;
  }

  @media screen and (min-width: 1280px) {
    width: 330px;
  }

  @media screen and (min-width: 1500px) {
    width: 350px;
  }

  @media screen and (min-width: 1650px) {
    width: 400px;
  }

  @media screen and (min-width: 1900px) {
    width: 450px;
  }

  @media screen and (min-width: 2200px) {
    width: 500px;
  }
`

export const CardTitle = styled.h2`
  padding: 15px;
  font-size: calc(20 / 16 * 1rem);
`

// Row

export const Row = styled.div`
  display: flex;
  padding: 0 15px;
  align-items: center;

  :nth-of-type(odd) {
    background-color: ${theme.MediumGrey};
  }
  :nth-of-type(even) {
    background-color: ${theme.DrakGrey};
  }

  @media screen and (min-width: 900px) {
    height: 120px;
  }
`

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Poster = styled.div`
  height: 5rem;
  width: 3.5rem;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const RowTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 0;
`

export const RowInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 5px;
  span {
    color: ${theme.Grey};
    font-size: calc(14 / 16 * 1rem);
  }

  .dot__svg {
    color: ${theme.Grey};
    font-size: calc(20 / 16 * 1rem);
  }
`

export const RowGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  span {
    display: flex;
    color: ${theme.Grey};
    align-items: center;
    font-size: calc(14 / 16 * 1rem);

    :last-child .dot__svg {
      display: none;
    }
  }

  .dot__svg {
    color: ${theme.Grey};
    font-size: calc(20 / 16 * 1rem);
  }
`
