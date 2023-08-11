import React from 'react'

export default function CreditsTable({ credits }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Rate</th>
                    <th>Min amount</th>
                    <th>Max amount</th>
                    <th>Min period</th>
                    <th>Max period</th>
                </tr>
            </thead>
            <tbody>
                {
                    credits.map(credit => {
                        return (
                            <tr key={credit.id}>
                                <td>{credit.id}</td>
                                <td>{credit.name}</td>
                                <td>{credit.rate}%</td>
                                <td>{credit.minAmount}</td>
                                <td>{credit.maxAmount}</td>
                                <td>{credit.minPeriod}</td>
                                <td>{credit.maxPeriod}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
