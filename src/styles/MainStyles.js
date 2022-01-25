import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  
  background-image: linear-gradient(#f37bbb, #595ef5);  
`

const ParentContainer = styled.div`
  
  margin: ${props => props.m || ''};
  margin-top: ${props => props.mt || ''};
  margin-bottom: ${props => props.mb || ''};
  margin-left: ${props => props.ml || ''};
  margin-right: ${props => props.mr || ''};
  
  padding: ${props => props.p || ''};
  padding-top: ${props => props.pt || ''};
  padding-bottom: ${props => props.pb || ''};
  padding-left: ${props => props.pl || ''};
  padding-right: ${props => props.pr || ''};

  border: ${props => props.b || ''};
  border-right: ${props => props.br || '' };
  border-left: ${props => props.bl || '' };
  border-top: ${props => props.bt || '' };
  border-bottom: ${props => props.bb || '' };
  
  font-weight: ${props => props.fw || ''};
    
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

const ContentContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export {MainContainer, Container, GridContainer, ContentContainer};