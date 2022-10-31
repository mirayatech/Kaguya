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

export const Wrapper = styled.div`
  position: relative;
`

export const Toggle = styled.button`
  top: 22px;
  right: 10px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  color: ${theme.Grey};
  background-color: transparent;
`

export const Info = styled.p`
  text-align: center;
  color: ${theme.Grey};
  a {
    padding-left: 5px;
    color: ${theme.Red};
    transition: all 0.2s ease;

    :hover {
      color: ${theme.Primary};
    }
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
  color: ${theme.White};
  margin: 10px 0 20px 0;
  justify-content: center;
  transition: all 0.2s ease;
  background-color: ${theme.Primary};

  :hover {
    background-color: ${theme.Secondary};
  }
`
