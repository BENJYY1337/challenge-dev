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
                            <table>
                                <tbody>
                                    <tr>
                                        <td colSpan={4}>No users found</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                }
            </section>
        </div>
    )
}

export default UserTable;