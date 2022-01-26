import React from 'react';
import {MiniCardsContainer} from "../styles/MiniCardsStyles";

const MiniCardsList = (props) => {

    function horizontalScroll(event){
        const delta = Math.max(-1, Math.min(1, (-event.nativeEvent.deltaY || event.nativeEvent.detail)));
        event.currentTarget.scrollLeft -= delta * 70;
    }

    return (
        <MiniCardsContainer onWheel={horizontalScroll}>
            {React.Children.map(props.children, child => React.Children.only(child))}
        </MiniCardsContainer>
    );
};

export default MiniCardsList;