import React, { useState } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Card({ name }) {
    toast.configure()
    const [value, setValue] = useState(0)
    const handleChangeValue = () => {
        setValue(value + 1)
        toast.success('😍 You have successfully voted', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    return (
        <div className="crd">
            <span>{value}</span>
            <span>{name}</span>
            <button className="btn btn-success" onClick={handleChangeValue}>
                Vote
            </button>
        </div>
    )
}
