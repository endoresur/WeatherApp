import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  
  background-image: linear-gradient(#f37bbb, #595ef5);

  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
`

const Container = styled.div`
  margin: 0 min(5vmax, 32px);
  hyphens: auto;
`

export {MainContainer, Container};