import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  
  background-image: linear-gradient(#f37bbb, #595ef5);

  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
`

const Container = styled.div`
  font-size: ${props => props.fs || '1em'};

`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || ''};
  grid-template-rows: ${props => props.rows || ''};
  
  font-size: ${props => props.fs || '1em'};
  
`

export {MainContainer, Container, GridContainer};