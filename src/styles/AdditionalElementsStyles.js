import styled from "styled-components";

const BackArrow = styled.div`
  position: absolute;
  left: 3%;
  top: 10%;
  
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

const Circle = styled.div`
  height: 180px;
  width: 180px;

  background-color: #39518A;
  border-radius: 50%;

  cursor: pointer;

  transition: .5s;
  &:hover {
    transform: scale(0.9);
  }
`

const Plus = styled.div`
  background-image: linear-gradient(#FFADA9, #FFF79D);
  border-radius: 30px;
  height: 140px;
  width: 20px;
  position: relative;
  left: 43%;
  top: 10%;
  
  &:after {
    content: "";
    height: 20px;
    width: 140px;
    background-image: linear-gradient(to right, #FFF79D, #FFADA9);
    border-radius: 30px;
    position: absolute;
    left: -60px;
    top: 60px;
  }
  
`


export {BackArrow, Arrow, Plus, Circle};