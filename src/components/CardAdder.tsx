import React, {useState} from 'react';
import {Container} from "../styles/MainStyles";
import {Button, Card, Input} from "../styles/CardAdderStyles";

interface CardAdderProps {
    onClick: Function,
}

const CardAdder: React.FC<CardAdderProps> = ({onClick}) => {
    const [city, setCity] = useState<string>('');

    const handleClick = () => {
        onClick(city);
    }

    const handleChange = (event: any) => {
        setCity(event.target.value);
    }

    return (
        <Card>
            <Container>
                <Container pt={"160px"}>
                    <form>
                        <label>
                            New place
                            <Input type="text" name="place" onChange={handleChange}/>
                        </label>
                        <Button onClick={handleClick}>add</Button>
                    </form>
                </Container>
            </Container>
        </Card>
    );
};

export default CardAdder;