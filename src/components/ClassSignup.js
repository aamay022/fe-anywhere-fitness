import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';


const ClassSignup = (props) => {

    const { classes } = props

    let classList = classes.length > 0
        && classes.map((item, index) => {
            return <option key={index} value={item.class_id}>{item.class_name}</option>
        })

    let locationList = classes.length > 0
        && classes.map((item, index) => {
            return <option key={index} value={item.class_id}>{item.class_location}</option>
        })


    const [formValue, setFormValue] = useState('')

    const inputChange = (name, value) => {
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const onChange = event => {
        const { name, value } = event.target;
        inputChange(name, value);
    }

    const onSubmit = event => {
        event.preventDefault()
    }

    // const classInfo = classes.map((item, index) => {
    //     if (item.class_id === Number(formValue['class-select'])) {
    //         return (<>
    //             <FormGroup>
    //                 <Label>Type:&nbsp;
    //                     <span>
    //                         {item.class_type}
    //                     </span>
    //                 </Label>
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label>Duration:&nbsp;
    //                     <span>
    //                         {item.class_duration} Minutes
    //                     </span>
    //                 </Label>
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label>Intensity:&nbsp;
    //                     <span>
    //                         {item.class_intensity}
    //                     </span>
    //                 </Label>
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label>Max Class Size:&nbsp;
    //                     <span>
    //                         {item.class_max_attendees}
    //                     </span>
    //                 </Label>
    //             </FormGroup>
    //         </>
    //         )
    //     }
    // })

    // console.log(classInfo)
    // console.log(formValue)
    // console.log(classes)
    // console.log(classesInput)
    return (
        <div className='pt-3'>
            <Form
                onSubmit={onSubmit}
                style={{
                    border: 'solid 1px grey',
                    borderRadius: '.5rem',
                    // margin: '3rem',
                    marginLeft: '30%',
                    marginRight: '30%',
                    padding: '2rem',
                    backgroundColor: 'lightgray'
                }}>
                <h2>Class Sign-up</h2>
                <FormGroup className='my-1' style={{ marginLeft: '35%', marginRight: '35%' }}>
                    <Label>Class</Label>
                    <Input onChange={onChange} value={formValue.value} style={{ textAlign: 'center' }} type='select' name='class-select' id='class-select'>
                        <option>Select a class</option>
                        {classList}
                    </Input>
                </FormGroup>
                <FormGroup className='my-1' style={{ marginLeft: '35%', marginRight: '35%' }}>
                    <Label>Location</Label>
                    <Input style={{ textAlign: 'center' }} type='select' name='location-select'>
                        <option>Select a location</option>
                        {locationList}
                    </Input>
                </FormGroup>
                {/* <FormGroup>
                    {classInfo}
                </FormGroup> */}
                <FormGroup className='mt-3'>
                    <Button>Confirm</Button>
                </FormGroup>
            </Form>
        </div>
    )

}

export default ClassSignup