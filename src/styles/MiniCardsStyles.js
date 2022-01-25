import styled from "styled-components";

const MiniCardsContainer = styled.div`
  text-transform: uppercase;

  overflow: scroll;  
  overflow-y: hidden;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
`

const Card = styled.div`
  height: 450px;
  width: 300px;
  margin: auto 30px;

  display: grid;
  grid-auto-rows: 1fr 1fr;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 30px;
  
  transition: .5s;
  &:hover {
    transform: scale(1.07);
    z-index: 2;
  }   
`

const MiniCardHeader = styled.div`
  border-radius: 30px 30px 0 0;
  color: #ffff;
  background-image: linear-gradient(#331565, #2e2e8d);
`

const MiniCardBody = styled.div`
  align-content: center;
  text-align: center;

  cursor: pointer;

  text-decoration: none;
  display: inline-block;
  color: white;

  padding: 10px 120px;
  border-radius: 0 0 30px 30px;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #F27BBB 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: 1s;

  &:hover {
    background-position: right center;
  }
`

export {MiniCardsContainer, Card, MiniCardHeader, MiniCardBody};