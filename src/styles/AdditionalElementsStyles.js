import styled from "styled-components";

const BackArrow = styled.div`
  position: absolute;
  left: 3%;
  top: -10%;
  
  height: 60px;
  width: 60px;
  
  background-color: #2b244d;
  border-radius: 50%;
  
  cursor: pointer;  
  
  transition: .5s;
  &:hover {
    transform: scale(1.2);
  }
`

const Arrow = styled.div`
  position: relative;
  top: 28px;
  width: 80px;
  height: 3px;
  background-color: #fefefe;
  left: 30%;
  display: block;
  
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    top: -10px;
    left: -6px;
    background-color: #fefefe;
    transform: rotate(-45deg);
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    top: 9px;
    left: -6px;
    background-color: #fefefe;
    transform: rotate(45deg);
  }
`


export {BackArrow, Arrow};