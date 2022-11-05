import styled from '@emotion/styled'

export const Overlay = styled.div`
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #00000001;
  backdrop-filter: blur(5px);
`

export const Video = styled.iframe`
  width: 70%;
  height: 70%;
  border-radius: 10px;
`
