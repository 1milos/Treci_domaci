import React from 'react'

export default function Input({ label, value, onChange, type, required }) {
    return (
        <div className='form-group'>
            <label >{label}</label>
            <input className='form-control' required={required} type={type} value={value} onChange={e => onChange(e.currentTarget.value)} />
        </div>
    )
}
