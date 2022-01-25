import React from 'react';
import {MiniCardsContainer} from "../styles/MiniCardsStyles";

const MiniCardsList = (props) => {

    return (
        <MiniCardsContainer>
            {React.Children.map(props.children, child => React.Children.only(child))}
        </MiniCardsContainer>
    );
};

export default MiniCardsList;