import React, { useState } from 'react';
import ImageGenerator from './ImageGenerator';

const FestivalSelector = () => {

    const [selectedFestival, setSelectedFestival] = useState('');

    const handleFestivalChange = (event) => {
        setSelectedFestival(event.target.value);
    };

    return (
        <div>
            <label htmlFor="festival-select">Choose a card template:</label>
            <select id="festival-select" value={selectedFestival} onChange={handleFestivalChange}>
                <option value="">--Please choose a card--</option>
                <option value="dashain1">Dashain 1</option>
                <option value="dashain2">Dashain 2</option>
                <option value="dashain3">Dashain 3</option>
                <option value="tihar1">Tihar 1</option>
                <option value="tihar2">Tihar 2</option>
            </select>
            {selectedFestival && <ImageGenerator festival={selectedFestival} />}
        </div>
    );
};

export default FestivalSelector;
