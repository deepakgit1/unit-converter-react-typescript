import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { lengthUnit } from '../../redux/actions/actions'

type Props = {}

const Length = (props: Props) => {
    const [inputLength, setInputLength] = useState<number | string>()
    const [outputLength, setOutputLength] = useState<any>()
    const [val, setVal] = useState<any>()

    const myResult = useSelector((state: any) => state.changeLength)
    const dispatch = useDispatch()

    const handleClick = () => {
        // console.log("unit",inputUnit , outputUnit);
        const data = {
            inputLength: inputLength,
            outputLength: outputLength,
            val: val
        }
        dispatch(lengthUnit(data))
    }

    const resetButton =()=>{
        setVal("")
        const data = {
            inputLength: "",
            outputLength: "",
            val: 1
        }
        dispatch(lengthUnit(data))
        setInputLength("")
        setOutputLength("")
    }

    return (
        <div>
            <Form.Label className='mt-2 h3' size="lg">From:</Form.Label>
            <Form.Select size="lg" value={inputLength} onChange={(e) => setInputLength(e.target.value)}>
                <option value={""}>Select unit to convert</option>
                <option value="Meter">Meter</option>
                <option value="Kilometer">Kilometer</option>
                <option value="Centimeter">Centimeter</option>
                <option value="Milimeter">Milimeter</option>
                <option value="Mile">Mile</option>
            </Form.Select>

            <Form.Label className='mt-2 h5 text-light' size="lg">Enter Value</Form.Label>
            <Form.Control type="number" placeholder='Enter Value' value={val} onChange={(e) => setVal(e.target.value)} />

            <Form.Label className='mt-2 h3' size="lg">To:</Form.Label>
            <Form.Select size="lg" value={outputLength} onChange={(e) => setOutputLength(e.target.value)}>
            <option value={""}>Select unit to convert</option>
                <option value="Meter">Meter</option>
                <option value="Kilometer">Kilometer</option>
                <option value="Centimeter">Centimeter</option>
                <option value="Milimeter">Milimeter</option>
                <option value="Mile">Mile</option>
            </Form.Select>
            <Form.Label className='mt-2 h5 text-light' defaultValue={myResult} size="lg">Result</Form.Label>

            <Form.Control disabled type="text" defaultValue={myResult} placeholder='Result' />
            <div className='d-grid gap-2 mt-3'>
                <Button className='button' style={{ borderRadius: "10px" }} size='lg' onClick={handleClick}>Convert</Button>
            </div>
            <div className='d-grid gap-2 mt-3'>
                <Button className='button' style={{ borderRadius: "10px",background:"blueviolet" }} size='lg' onClick={resetButton}>Reset</Button>
            </div>
        </div>
    )
}

export default Length