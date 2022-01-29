import React from 'react';
import logo from "../icons/logo.png"
import {HeaderContainer, HeaderInfo, HeaderLogo, HeaderImg} from "../styles/HeaderStyles";

const weekDay = new Date().getDay();
const monthDay = new Date().getDate();
const month = new Date().getMonth();

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <HeaderImg src={logo} alt=''/>
            </HeaderLogo>
            <HeaderInfo>
                <b>{week[weekDay]},</b> {monthDay}th {months[month]}
            </HeaderInfo>
        </HeaderContainer>
    );
};

export default Header;