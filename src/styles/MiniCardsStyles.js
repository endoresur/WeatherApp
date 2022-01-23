import styled from "styled-components";

const MiniCardsContainer = styled.div`
  height: 500px;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
`

const Card = styled.div`
  height: 90%;
  width: 300px;  
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-auto-rows: 1fr 1fr;
`

const MiniCardHeader = styled.div`
  display: grid;
  text-align: center;
  align-items: center;

  border-radius: 30px 30px 0 0;
  color: #ffff;
  background-image: linear-gradient(#331565, #2e2e8d);
`

const MiniCardBody = styled.div`
  display: grid;
  align-content: center;
  text-align: center;

  border-radius: 0 0 30px 30px;
  background-color: #f7f5ff;
`

export {MiniCardsContainer, Card, MiniCardHeader, MiniCardBody};