import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { convertUnit } from '../../redux/actions/actions'

type Props = {}

const WaightUnit = (props: Props) => {
    const [inputUnit, setInputUnit] = useState<number | string>()
    const [outputUnit, setOutputUnit] = useState<any>()
    const [val, setVal] = useState<any>()

    const myResult = useSelector((state: any) => state.changeUnit)
    const dispatch = useDispatch()

    const handleClick = () => {
        // console.log("unit",inputUnit , outputUnit);
        const data = {
            inputUnit: inputUnit,
            outputUnit: outputUnit,
            val: val
        }
        dispatch(convertUnit(data))
    }

    const resetButton =()=>{
        setVal("")
        const data = {
            inputUnit: "",
            outputUnit: "",
            val: 1
        }
        dispatch(convertUnit(data))
        setInputUnit("")
        setOutputUnit("")
    }
    
    return (
        <div>
            <Form.Label className='mt-2 h3' size="lg">From:</Form.Label>
            <Form.Select size="lg" value={inputUnit} onChange={(e) => setInputUnit(e.target.value)}>
                <option value={""}>Select unit to convert</option>
                <option value="KGS">KGS</option>
                <option value="GMS">Grams</option>
                <option value="MGS">Miligrams</option>
                <option value="POUND">Pound</option>
                <option value="TONNE">Tonne</option>
            </Form.Select>

            <Form.Label className='mt-2 h5 text-light' size="lg">Enter Value</Form.Label>
            <Form.Control type="number" value={val} placeholder='Enter Value' onChange={(e) => setVal(e.target.value)} />

            <Form.Label className='mt-2 h3' size="lg">To:</Form.Label>
            <Form.Select size="lg" value={outputUnit} onChange={(e) => setOutputUnit(e.target.value)}>
                <option value={""}>Select unit to convert</option>
                <option value="KGS">KGS</option>
                <option value="GMS">Grams</option>
                <option value="MGS">Miligrams</option>
                <option value="POUND">Pound</option>
                <option value="TONNE">Tonne</option>
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

export default WaightUnit