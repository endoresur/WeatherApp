import styled from "styled-components";

const CardContainer = styled.div`
  border-radius: 15px;

  height: 430px;
  margin: 60px max(150px, 15vmax);

  background-color: brown;
`

const CardHeader = styled.div`
  height: 45%;
  border-radius: 15px 15px 0 0;

  background-color: blueviolet;  
`

const CardBody = styled.div`
  height: 55%;
  border-radius: 0 0 15px 15px;

  background-color: antiquewhite;
`

export {CardContainer, CardHeader, CardBody};