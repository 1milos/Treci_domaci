import React, { useEffect, useState } from 'react'
import { getCredits } from '../api';
import CreditsTable from '../components/CreditsTable';
import Navbar from '../components/Navbar';

export default function CreditsPage() {
    const [credits, setCredits] = useState([]);
    useEffect(() => {
        getCredits().then(setCredits);
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2 className='text-center'>Credits</h2>
                <CreditsTable credits={credits} />
            </div>
        </div>
    )
}
