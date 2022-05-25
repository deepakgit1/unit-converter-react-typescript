import React, { FormEvent, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

type Props = {}

const Home = (props: Props) => {
    const [inputUnit, setInputUnit] = useState<number | string>()
    const [outputUnit, setOutputUnit] = useState<any>()
    const [val, setVal] = useState<any>()
    const [result, setResult] = useState<number>()

    const handleClick = () => {
        // console.log("unit",inputUnit , outputUnit);
        if (inputUnit === "KGS") {
            switch (outputUnit) {
                case "KGS": setResult(val * 1); break;
                case "GMS": setResult(val * 1000); break;
                case "MGS": setResult(val * 1000000); break;
                case "POUND": setResult(val * 2.2046244202); break;
                case "TONNE": setResult(val * 0.001); break;
                default:
                    break;
            }
        } else if (inputUnit === "GMS") {
            switch (outputUnit) {
                case "KGS": setResult(val * 0.001); break;
                case "GMS": setResult(val * 1); break;
                case "MGS": setResult(val * 1000); break;
                case "POUND": setResult(val * 0.0022046244); break;
                case "TONNE": setResult(val * 0.000001); break;
                default:
                    break;
            }
        } else if (inputUnit === "MGS") {
            switch (outputUnit) {
                case "KGS": setResult(val * 0.000001); break;
                case "GMS": setResult(val * 0.001); break;
                case "MGS": setResult(val * 1); break;
                case "POUND": setResult(val * 0.0000022046); break;
                case "TONNE": setResult(val * 0.000000001); break;
                default:
                    break;
            }
        } else if (inputUnit === "POUND") {
            switch (outputUnit) {
                case "KGS": setResult(val * 0.453592); break;
                case "GMS": setResult(val * 453.592); break;
                case "MGS": setResult(val * 453592); break;
                case "POUND": setResult(val * 1); break;
                case "TONNE": setResult(val * 0.000453592); break;
                default:
                    break;
            }
        } else if (inputUnit === "TONNE") {
            switch (outputUnit) {
                case "KGS": setResult(val * 1000); break;
                case "GMS": setResult(val * 1000000); break;
                case "MGS": setResult(val * 1000000000); break;
                case "POUND": setResult(val * 2204.6244202); break;
                case "TONNE": setResult(val * 1); break;
                default:
                    break;
            }
        }

    }


    return (
        <div>
            <Container className='w-50 mt-2'>
                <Form.Label className='mt-2 h3' size="lg">From:</Form.Label>
                <Form.Select size="lg" onChange={(e) => setInputUnit(e.target.value)}>
                    <option>Select unit to convert</option>
                    <option value="KGS">KGS</option>
                    <option value="GMS">Grams</option>
                    <option value="MGS">Miligrams</option>
                    <option value="POUND">Pound</option>
                    <option value="TONNE">Tonne</option>
                </Form.Select>

                <Form.Label className='mt-2 h5 text-info' size="lg">Enter Value</Form.Label>
                <Form.Control type="number" placeholder='Enter Value' onChange={(e) => setVal(e.target.value)} />

                <Form.Label className='mt-2 h3' size="lg">To:</Form.Label>
                <Form.Select size="lg" onChange={(e) => setOutputUnit(e.target.value)}>
                    <option>Select unit to convert</option>
                    <option value="KGS">KGS</option>
                    <option value="GMS">Grams</option>
                    <option value="MGS">Miligrams</option>
                    <option value="POUND">Pound</option>
                    <option value="TONNE">Tonne</option>
                </Form.Select>
                <Form.Label className='mt-2 h5 text-info' defaultValue={result} size="lg">Result</Form.Label>

                <Form.Control type="number" defaultValue={result} placeholder='Result' />
                <div style={{ alignItems: "center", margin: "auto" }}>
                    <Button className='bg-success mt-3' size='lg' onClick={handleClick}>Convert</Button>
                </div>
            </Container>
        </div>
    )
}

export default Home