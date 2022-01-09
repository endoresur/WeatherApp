import styled from "styled-components";

const CardContainer = styled.div`
  border-radius: 15px;

  line-height: 200px;
  height: 430px;
  margin: 60px max(150px, 15vmax);  
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  text-align: center;  
  
  height: 45%;
  border-radius: 15px 15px 0 0;

  color: #ffff;
  background-image: linear-gradient(#331565, #2e2e8d);
`

const CardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  
  height: 55%;
  border-radius: 0 0 15px 15px;

  background-color: #f7f5ff;
`

export {CardContainer, CardHeader, CardBody};

