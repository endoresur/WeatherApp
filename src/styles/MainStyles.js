import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  
  background-image: linear-gradient(#f37bbb, #595ef5);

  
`

const Container = styled.div`
  position: relative;
  
  margin-top: ${props => props.mt || ''};  
  margin-bottom: ${props => props.mb || ''};
  margin-left: ${props => props.ml || ''};
  margin-right: ${props => props.mr || ''};
  
  font-size: ${props => props.fs || '1em'};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || ''};
  grid-template-rows: ${props => props.rows || ''};
  
  font-size: ${props => props.fs || '1em'};
  
`

export {MainContainer, Container, GridContainer};