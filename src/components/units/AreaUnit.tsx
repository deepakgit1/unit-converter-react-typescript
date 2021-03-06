import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { areaUnit } from '../../redux/actions/actions'
//get state type from store
import { RootState } from '../../store'

type Props = {}

const AreaUnit = (props: Props) => {
    const [inputArea, setInputArea] = useState<number | string>()
    const [outputArea, setOutputArea] = useState<number | string>()
    const [val, setVal] = useState<number | string>("")

    const myResult = useSelector((state: RootState) => state.changeArea)
    const dispatch = useDispatch()

    const handleConvert = () => {
        // console.log("unit",inputUnit , outputUnit);
        const data = {
            inputArea: inputArea,
            outputArea: outputArea,
            val: val
        }
        dispatch(areaUnit(data))
    }

    const resetButton = () => {
        setVal("")
        const data = {
            inputArea: "",
            outputArea: "",
            val: 1
        }
        dispatch(areaUnit(data))
        setInputArea("")
        setOutputArea("")
    }
    // console.log(myResult);
    return (
        <div>
            <Form.Label className='mt-2 h3' size="lg">From:</Form.Label>
            <Form.Select size="lg" value={inputArea} onChange={(e) => setInputArea(e.target.value)}>
                <option value={""}>Select unit to convert</option>
                <option value="SquereMeter">Squere Meter</option>
                <option value="SquereKilometer">Squere Kilometer</option>
                <option value="SquereCentimeter">Squere Centimeter</option>
                <option value="SquereMilimeter">Squere Milimeter</option>
                <option value="Acre">Acre</option>
            </Form.Select>

            <Form.Label className='mt-2 h5 text-light' size="lg">Enter Value</Form.Label>
            <Form.Control type="number" placeholder='Enter Value' value={val} onChange={(e) => setVal(e.target.value)} />

            <Form.Label className='mt-2 h3' size="lg">To:</Form.Label>
            <Form.Select size="lg" value={outputArea} onChange={(e) => setOutputArea(e.target.value)}>
                <option value={""}>Select unit to convert</option>
                <option value="SquereMeter">Squere Meter</option>
                <option value="SquereKilometer">Squere Kilometer</option>
                <option value="SquereCentimeter">Squere Centimeter</option>
                <option value="SquereMilimeter">Squere Milimeter</option>
                <option value="Acre">Acre</option>
            </Form.Select>

            <Form.Label className='mt-2 h5 text-light' defaultValue={myResult} size="lg">Result</Form.Label>
            <Form.Control disabled type="text" defaultValue={myResult} placeholder='Result' />
            
            <div className='d-grid gap-2 mt-3'>
                <Button className='button' style={{ borderRadius: "10px" }} size='lg' onClick={handleConvert}>Convert</Button>
            </div>
            <div className='d-grid gap-2 mt-3'>
                <Button className='button' style={{ borderRadius: "10px", background: "blueviolet" }} size='lg' onClick={resetButton}>Reset</Button>
            </div>
        </div>
    )
}

export default AreaUnit