import React, { useEffect, useState } from 'react'
import { createRequest, getClients, getCredits } from '../api';
import Select from '../components/form/Select';
import Slider from '../components/form/Slider';
import Navbar from '../components/Navbar'

export default function CreateRequestPage() {
    const [clients, setClients] = useState([]);
    const [credits, setCredits] = useState([]);

    const [clientId, setClientId] = useState('');
    const [creditId, setCreditId] = useState('');
    const [amount, setAmount] = useState('');
    const [period, setPeriod] = useState('');

    const selectedCredit = credits.find(c => c.id == creditId);

    useEffect(() => {
        if (!selectedCredit) {
            return;
        }
        setAmount(selectedCredit.minAmount);
        setPeriod(selectedCredit.minPeriod)
    }, [selectedCredit])

    useEffect(() => {
        getCredits().then(setCredits);
        getClients().then(setClients);
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2 className='text-center'>Create new credit request</h2>
                <form onSubmit={e => {
                    e.preventDefault();
                    createRequest({
                        credit_id: creditId,
                        client_id: clientId,
                        amount,
                        period,
                    })
                    setCreditId('');
                    setClientId('');
                    setAmount('');
                    setPeriod('')
                }}>
                    <Select value={clientId} label='Client' onChange={setClientId} options={clients.map(client => {
                        return {
                            value: client.id,
                            label: client.firstName + ' ' + client.lastName
                        }
                    })} />
                    <Select value={creditId} label='Credit' onChange={setCreditId}
                        options={credits.map(credit => {
                            return {
                                value: credit.id,
                                label: credit.name
                            }
                        })} />
                    {
                        selectedCredit && (
                            <>
                                <Slider
                                    label='Amount'
                                    min={selectedCredit.minAmount}
                                    max={selectedCredit.maxAmount}
                                    value={amount}
                                    onChange={setAmount}
                                />
                                <Slider
                                    label='Period'
                                    min={selectedCredit.minPeriod}
                                    max={selectedCredit.maxPeriod}
                                    value={period}
                                    onChange={setPeriod}
                                />
                                <button className='btn btn-primary form-control mt-2'>Create</button>
                            </>
                        )
                    }
                </form>
            </div>
        </div>
    )
}
