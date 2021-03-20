import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fakeData } from '../../FakeData/FakeData';

const Destination = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(fakeData)
    }, [])
    return (
        <div className='container'  >

            {
                vehicles.map(vehicle =>
                    <CardGroup key={vehicle.id} className='cardGroup'>
                        <Card className='card'>
                            <Card.Img variant="top" src={vehicle.img} />
                            <Card.Body>
                                <Card.Title><Link to={"/book/" + vehicle.id}
                                >{vehicle.name}</Link></Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                )
            }
        </div>
    );
};
export default Destination;