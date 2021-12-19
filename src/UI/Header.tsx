import React from 'react';
import nav from "../icons/header_nav.png";
import logo from "../icons/logo.png"
import {HeaderContainer, HeaderInfo, HeaderLogo, HeaderImg, HeaderSideBar} from "../styles/HeaderStyles";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderSideBar>
                <img src={nav} alt='' height={40} width={40}/>
            </HeaderSideBar>
            <HeaderLogo>
                <HeaderImg src={logo} alt=''/>
            </HeaderLogo>
            <HeaderInfo>
                Qwerty tyui wdgv
            </HeaderInfo>
        </HeaderContainer>
    );
};

export default Header;