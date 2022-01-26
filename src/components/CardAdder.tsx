import React from 'react';
import {Circle, Plus} from "../styles/AdditionalElementsStyles";
import {Container, GridContainer} from "../styles/MainStyles";
import {Card} from "../styles/CardAdderStyles";


const CardAdder = () => {
    return (
        <Card>
            <GridContainer>
                <Container>
                    Add new
                </Container>
                <Container>
                    <Circle>
                        <Plus/>
                    </Circle>
                </Container>
            </GridContainer>
        </Card>
    );
};

export default CardAdder;