import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ClassCarousel from './ClassCarousel';

const OnboardModal = (props) => {

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    }
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>First Time?</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>First time here?</ModalHeader>
                <ModalBody>
                    Check out the onboarding below, otherwise feel free to skip this.
                    <br />
                    <Button color="primary" className='my-3' onClick={toggleNested}>Check it out</Button>
                    <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>Welcome!</ModalHeader>
                        <ClassCarousel />
                        <ModalBody>Sign up for classes in the classes section by picking a class time, date, duration, type, level, and location.</ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={toggleAll}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


export default OnboardModal