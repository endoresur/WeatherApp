import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  
  background-image: linear-gradient(#f37bbb, #595ef5);  
`

const ParentContainer = styled.div`
  
  margin-top: ${props => props.mt || ''};
  margin-bottom: ${props => props.mb || ''};
  margin-left: ${props => props.ml || ''};
  margin-right: ${props => props.mr || ''};
  
  border-right: ${props => props.br || '' };
  border-left: ${props => props.bl || '' };
  border-top: ${props => props.bt || '' };
  border-bottom: ${props => props.bb || '' };
  border: ${props => props.b || ''}; 
    
`

const Container = styled(ParentContainer)`
  position: relative;
  
  font-size: ${props => props.fs || '1em'};
`

const GridContainer = styled(ParentContainer)`
  display: grid;
  grid-template-columns: ${props => props.columns || ''};
  grid-template-rows: ${props => props.rows || ''};
  
  align-items: center;

  font-size: ${props => props.fs || '1em'};
  
`

export {MainContainer, Container, GridContainer};