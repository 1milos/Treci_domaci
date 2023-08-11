import React, { useEffect, useState } from 'react'
import { getClients } from '../api';
import ClientsTable from '../components/ClientsTable'
import Navbar from '../components/Navbar'

export default function ClientsPage() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients().then(setClients);
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container '>
                <h2 className='text-center'>Clients</h2>
                <ClientsTable clients={clients} />
            </div>
        </div>
    )
}
