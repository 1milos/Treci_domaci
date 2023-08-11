import React from 'react'

export default function CreditRequestsTable({ requests }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Credit name</th>
                    <th>Amount</th>
                    <th>Period</th>
                    <th>Rate</th>
                    <th>Mothly cost</th>
                </tr>
            </thead>
            <tbody>
                {
                    requests.map(req => {
                        return (
                            <tr key={req.id}>
                                <td>{req.id}</td>
                                <td>{req.client.firstName + ' ' + req.client.lastName}</td>
                                <td>{req.credit.name}</td>
                                <td>{req.amount}</td>
                                <td>{Number(req.period).toFixed(0)}</td>
                                <td>{req.rate}</td>
                                <td>{Number(req.monthlyRate).toFixed(2)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
