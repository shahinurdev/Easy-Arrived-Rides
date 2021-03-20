import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Book.css';
import { fakeData } from '../../FakeData/FakeData';

const Book = () => {
    const { id } = useParams();
    const vehicles = fakeData.find(vehicle => vehicle.id === id);
    console.log('reFake', vehicles);

    const handleSearch = () => {
        let searchBox = document.getElementById("searchBox");
        if (searchBox.style.display === "none") {
            searchBox.style.display = "block";
        } else {
            searchBox.style.display = "none";
        }

    }
    return (
        <div>
            <h3>Let's book {id}</h3>
            <p>Want a <Link to="/home">different Ride?</Link> </p>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="form-group">
                            <p>Pick From</p>
                            <input type="text" placeholder='Mirpur' className="form-control form-control-md" />
                            <p>Pick to</p>
                            <input type="text" placeholder='Mohakhali' className="form-control form-control-md" />
                            <input type="search" onClick={handleSearch} value='Search' className="form-control-md searchInput" />
                            <div id="searchBox" className="form-group">
                                <Row className="searchBoxRow">
                                    <Col md={4} className="searchImg">
                                        <img src={vehicles.img} alt="" />
                                    </Col >
                                    <Col md={4} >5</Col>
                                    <Col md={4} >$69</Col>
                                </Row>
                                <Row className="searchBoxRow">
                                    <Col md={4} className="searchImg">
                                        <img src={vehicles.img} alt="" />
                                    </Col>
                                    <Col md={4} >5</Col>
                                    <Col md={4} >$69</Col>
                                </Row>
                                <Row className="searchBoxRow">
                                    <Col md={4} className="searchImg">
                                        <img src={vehicles.img} alt="" />
                                    </Col>
                                    <Col md={4} >5</Col>
                                    <Col md={4} >$69</Col>
                                </Row>



                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.462626897111!2d90.39596331639581!3d23.77889548941548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1616173122107!5m2!1sen!2sbd" width="500" height="300" allowfullscreen="" loading="lazy" title="map"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Book;