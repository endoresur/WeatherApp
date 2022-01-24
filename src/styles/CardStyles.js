import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr 1fr;

  height: 430px;
  margin: auto 150px;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 30px;
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: center;  
  
  border-radius: 30px 30px 0 0;
  color: #ffff;
  background-image: linear-gradient(#331565, #2e2e8d);
`

const CardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: center;
  text-align: center;
  
  border-radius: 0 0 30px 30px;
  background-color: #f7f5ff;
`

export {CardContainer, CardHeader, CardBody};

