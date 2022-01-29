import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;

  background-color: #2b244d;
  color: #fefefe;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
`

const HeaderLogo = styled.div`
  width: 20%;
  margin-left: 30px;
  top: 15px;
  position: absolute;
`

const HeaderImg = styled.img`
  position: absolute;
  left: 0;
  top: 25%;
  width: auto;
  height: 28px;
`

const HeaderInfo = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
`
export {HeaderContainer, HeaderLogo, HeaderImg, HeaderInfo};