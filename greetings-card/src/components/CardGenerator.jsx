import React, {useState} from "react";

const CardGenerator = ({changeFunction}) => {

    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [occasion, setOccasion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(sender, recipient, occasion, message);
        // Code to generate the card with the given recipient, occasion, and message
    };

    return (
        <div>

        <form onChange={changeFunction} onSubmit={handleSubmit}>
             <label>
                Sender:
                <input type="text" name="sender" value={sender} onChange={(event) => setSender(event.target.value)} />
            </label>
            <label>
                Recipient:
                <input type="text" name="recipient" value={recipient} onChange={(event) => setRecipient(event.target.value)} />
            </label>
            <label>
                Occasion:
                <input type="text" name="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)} />
            </label>
            <label>
                Message:
                <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} />
            </label>
            <button type="submit">Generate Card</button>

        </form>
        </div>
    );
};

export default CardGenerator;