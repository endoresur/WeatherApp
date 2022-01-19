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

const HeaderSideBar = styled.div`
  width: 40px;
  height: 40px;
  
  padding-left: 20px;
  padding-top: 10px;
`

const HeaderLogo = styled.div`
  width: 20%;
  margin-left: 30px;
  position: relative;
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
  padding-right: 20%;
  padding-top: 20px;
`
export {HeaderContainer, HeaderSideBar, HeaderLogo, HeaderImg, HeaderInfo};