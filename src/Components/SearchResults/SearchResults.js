import React from 'react';

const SearchResults = (props) => {
    const {img,name}=props.vehicle;
    return (
        <div>
            <h3>Name: {name}</h3>
            <img src={img} alt=""/>
        </div>
    );
};

export default SearchResults;