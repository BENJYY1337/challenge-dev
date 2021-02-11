import React from 'react';

const UserTable = (props) => {
    return (

        <div class="wrapper">
            <section class="member-list">
                {
                    props.users.length > 0 ? (
                        props.users.map(user => {
                            return (
                                <div key={user._id} class="member-item">{user.name}</div>
                            )
                        })
                    ) : (
                            <tr>
                                <td colSpan={4}>No users found</td>
                            </tr>
                        )
                }
            </section>
        </div>
    )
}

export default UserTable;