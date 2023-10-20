import React, {useState} from "react";

function CardGenerator() {

    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [occasion, setOccasion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Code to generate the card with the given recipient, occasion, and message
    };

    return (
        <div>

        <form onSubmit={handleSubmit}>
             <label>
                Sender:
                <input type="text" value={sender} onChange={(event) => setSender(event.target.value)} />
            </label>
            <label>
                Recipient:
                <input type="text" value={recipient} onChange={(event) => setRecipient(event.target.value)} />
            </label>
            <label>
                Occasion:
                <input type="text" value={occasion} onChange={(event) => setOccasion(event.target.value)} />
            </label>
            <label>
                Message:
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
            </label>
            <button type="submit">Generate Card</button>

        </form>
        </div>
    );
};

export default CardGenerator;