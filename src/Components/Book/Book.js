import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Book = () => {
   const {id}= useParams()
    return (
        <div>
            <h3>Let's book {id}</h3>
            <p>Want a <Link to="/home">different Ride?</Link> </p>
        </div>
    );
};

export default Book;