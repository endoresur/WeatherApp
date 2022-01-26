import styled from "styled-components";

const Card = styled.div`
  height: 450px;
  width: 300px;
  margin: auto 30px;
  padding: 10px 120px;

  text-transform: uppercase;
  background-image: linear-gradient(#02057A, #6E1B86);
  
  color: #ffff;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 30px;

  align-content: center;
  text-align: center;

  transition: .5s;
  &:hover {
    transform: scale(1.07);
    z-index: 2;
  }
`

export {Card};