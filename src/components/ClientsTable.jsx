import React from 'react'

export default function ClientsTable({ clients }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Personal id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(client => {
                        return (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.personalId}</td>
                                <td>{client.firstName}</td>
                                <td>{client.lastName}</td>
                                <td>{client.phone}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
