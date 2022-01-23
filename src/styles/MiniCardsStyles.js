import styled from "styled-components";

const MiniCardsContainer = styled.div`
  text-transform: uppercase;

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
`

const Button = styled.div`
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
  transition: .5s;
  
  &:hover {
    background-position: right center;
  }
`

export {MiniCardsContainer, Card, MiniCardHeader, MiniCardBody, Button};