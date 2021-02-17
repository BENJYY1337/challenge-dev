import React from 'react';

const UserTable = (props) => {
    return (

        <div className="wrapper">
            <section className="member-list">
                {
                    props.users.length > 0 ? (
                        props.users.map(user => {
                            return (
                                <div key={user._id} className="member-item">{user.name}</div>
                            )
                        })
                    ) : (
                                <h3>Membres de l'équipage non trouvé</h3>
                        )
                }
            </section>
        </div>
    )
}

export default UserTable;