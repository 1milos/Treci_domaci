import React from 'react'

export default function Select({ label, value, onChange, options }) {
    return (
        <div className='form-group'>
            <label >{label}</label>
            <select className='form-control' value={value} onChange={e => onChange(e.currentTarget.value)}>
                <option value="">Select</option>
                {
                    options.map(o => {
                        return (
                            <option value={o.value}>{o.label}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
