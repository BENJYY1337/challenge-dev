import React, { useState } from 'react';

const AddUserForm = (props) => {

    const initUser = { id: null, name: '' };

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name) {
            handleChange(e, props.addUser(user));
        }
        setUser(initUser)
    }

    return (
        <form className="new-member-form">
            <label htmlFor="name">Nom de l&apos;Argonaute</label>
            <input id="name" name="name" type="text" placeholder="Charalampos" value={user.name} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Envoyer</button>
        </form>
    )
}

export default AddUserForm;