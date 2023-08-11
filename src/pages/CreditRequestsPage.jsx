import React, { useEffect, useState } from 'react'
import { getRequests } from '../api';
import CreditRequestsTable from '../components/CreditRequestsTable';
import Navbar from '../components/Navbar'

export default function CreditRequestsPage() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        getRequests().then(setRequests)
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container mt-2'>
                <h2 className='text-center'>Credit requests</h2>
                <CreditRequestsTable requests={requests} />
            </div>
        </div>
    )
}
