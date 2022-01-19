import React from 'react';
import { Form } from '../../components/form-hook/UseForm';
import Input from '../../components/FormElements/Input';

const configuration = () => {

    const submitHandler = (e) => {
        e.preventDefault();

    }

    return (
    <div>
        <h1></h1>
        <Form onSubmit={submitHandler}>
        <Input label='Nom de la société' />
        </Form>
    </div>
    )
}

export default configuration
