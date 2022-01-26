import styled from "styled-components";

const Card = styled.div`
  height: 440px;
  min-width: 200px;
  margin: auto 30px;
  padding: 10px 60px;

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

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;

  border: none;
  border-radius: 30px;
`

const Button = styled.div`
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 5px 40px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #F27BBB 0%, #4830F0 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;

  &:hover {
    background-position: right center;
  }
`

export {Card, Input, Button};