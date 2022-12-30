import { useState } from "react";
import { Row, Form, Stack, Button } from "react-bootstrap";
import Options from "./Options";


const Language_Translator = () => {
    const [isOpen, setIsOpen] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();

        // console.log(e.target.from_text.value ,e.target.from_code.value)
        const from_code = e.target.from_code.value;
        const to_code = e.target.to_code.value;
        const from_text = e.target.from_text.value;

        // console.log(from_code,to_code,from_text)
        
        
    }

    return (<Form onSubmit={submitHandler} className='m-4'>
        <Row className="mb-3">
            <Stack direction='horizontal' gap={3}>
                <Form.Select id='from_code'>
                    <option>from</option>
                    <Options />
                </Form.Select>
                <Form.Select id='to_code'>
                    <option>to</option>
                    <Options />
                </Form.Select>

            </Stack>
        </Row>
        <Row className="mb-3">
            <Stack direction='horizontal' gap={4}>
                <Form.Control as="textarea" rows={8}  id='from_text'/>
                <Form.Control as="textarea" rows={8} id='to_text' value='janiksdjf' readOnly/>

            </Stack>
        </Row>
        <Row className="mb-3">
            <Button type='submit' style={{ width: '10rem',height:'3rem' }} className="m-auto">Convert</Button>
        </Row>
    </Form>)
}

export default Language_Translator;