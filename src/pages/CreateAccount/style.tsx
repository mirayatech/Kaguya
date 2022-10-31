import styled from '@emotion/styled'
import Background from '../../assets/img.webp'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Background}) no-repeat center center/cover;
`

export const Form = styled.form`
  width: 400px;
  padding: 30px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.793);
  @media screen and (max-width: 440px) {
    width: 340px;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  color: ${theme.White};
  padding-bottom: 15px;
  font-size: calc(26 / 16 * 1rem);
  border-bottom: 1px solid ${theme.DrakGrey};
`

export const Label = styled.label`
  opacity: 0;
  position: absolute;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  margin: 10px 0;
  font-size: 1rem;
  border-radius: 2px;
  padding: 10px 10px;
  color: ${theme.Grey};
  background-color: ${theme.MediumGrey};
`

export const AddImage = styled.div`
  cursor: pointer;
  width: 80px;
  margin: auto;
  height: 80px;
  padding: 30px;
  padding: 30px;
  display: flex;
  margin-bottom: 5px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${theme.MediumGrey};
  label {
    cursor: pointer;
    color: ${theme.Grey};
    font-size: 30px;
    display: flex;
  }
`

export const ImageResult = styled.button`
  margin: auto;
  border: none;
  display: flex;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  display: flex;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2px;
  margin: 10px 0 0 0;
  color: ${theme.White};
  justify-content: center;
  transition: all 0.2s ease;
  background-color: ${theme.Primary};

  :hover {
    background-color: ${theme.Secondary};
  }
`
