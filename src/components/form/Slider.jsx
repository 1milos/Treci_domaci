import React from 'react'

export default function Slider({ min, max, value, onChange, label, required }) {

    const onChangeHandler = e => {
        const val = Number(e.currentTarget.value);
        if (val <= max && val >= min) {
            onChange(val);
        }
    }

    return (
        <div className='form-group'>
            <label >{label}</label>
            <input className='form-range' required={required} type='range' value={value} min={min} max={max} onChange={onChangeHandler} />
            <input className='form-control' required={required} type='number' value={value} min={min} max={max} onChange={onChangeHandler} />
        </div>
    )
}
