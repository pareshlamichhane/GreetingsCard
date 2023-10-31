import React, { useState } from 'react';
import ImageGenerator from './ImageGenerator';
import CardGenerator from "./CardGenerator";
const FestivalSelector = () => {

    const [selectedFestival, setSelectedFestival] = useState('');
    const [writtenMessage, setWrittenMessage] = useState('');

    const handleFestivalChange = (event) => {
        setSelectedFestival(event.target.value);
    };

    const handleCardInputChange = (event) => {
        const { name, value } = event.target;
        setWrittenMessage(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
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
            {selectedFestival && <>
            <ImageGenerator festival={selectedFestival} writtenMsg={writtenMessage}/>
            <CardGenerator changeFunction={handleCardInputChange}/>
            </> 
            }
        </div>
    );
};

export default FestivalSelector;
