import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {FormGroup, Form, Label, Input, Button, Card} from "reactstrap";
import { useHistory } from "react-router-dom";

const initialClass = {
    class_name: "",
    class_type: "",
    class_duration: "",
    class_intensity: "",
    class_location: "",
    class_max: ""
}

const ClassForm = (props) => {    

    const [classState, setClassState] = useState(initialClass);
    const { push } = useHistory();

    const changeHandle = e => {
        e.persist();
        setClassState({
            ...classState,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://anytimefitness.herokuapp.com/api/classes/create", classState)
                .then(res => {
                    console.log('i added a class')
                    props.setClassList(res.data);
                    push('/classlist');
                })
                .catch(err => {
                    console.error(err);
                })
    }

    const { class_name, class_type, class_duration, class_intensity, class_location, class_max } = classState;

    return(
        <div className='class-form'>
            <Card body className='form-text'>
                <Form onSubmit={handleSubmit}>
                    <h2>Add A New Class</h2>
                    <FormGroup>
                        <Label for='class_name'>Class Name</Label>
                        <Input
                            type='text'
                            name='class_name'
                            value={class_name}
                            placeholder='Name of the class'
                            onChange={changeHandle}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='class_type'>Class Type</Label>
                        <Input
                            type='select'
                            name='class_type'
                            value={class_type}
                            placeholder='Select a type'
                            onChange={changeHandle}
                        >
                            <option>Cardio</option>
                            <option>Stregth</option>
                            <option>Yoga</option>
                            <option>Calisthenics</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='class_duration'>Class Duration</Label>
                        <Input
                            type='number'
                            name='class_duration'
                            value={class_duration}
                            placeholder='Duration'
                            onChange={changeHandle}
                            max='120'
                            min='30'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='class_intensity'>Class Intensity</Label>
                        <Input
                            type='select'
                            name='class_intensity'
                            value={class_intensity}
                            placeholder='Select an Intensity'
                            onChange={changeHandle}
                        >
                            <option>Introductory</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                            <option>Professional</option>
                            <option>Olympic</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='class_location'>Class Location</Label>
                        <Input
                            type='text'
                            name='class_location'
                            value={class_location}
                            placeholder='Location'
                            onChange={changeHandle}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='class_max'>Class Max</Label>
                        <Input
                            type='number'
                            name='class_max'
                            value={class_max}
                            placeholder='Max #'
                            onChange={changeHandle}
                        />
                    </FormGroup>
                    <Button>Add Class</Button>
                </Form>
            </Card>
        </div>   
    )
}

export default ClassForm;