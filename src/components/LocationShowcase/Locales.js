import React from 'react'
import NewYork from './NewYorkCarousel'
import LosAngeles from './LACarousel'
import Miami from './MiamiCarousel'
import Chicago from './ChicagoCarousel'
import GrandRapids from './GrandRapids'

const Locales = (props) => {

    return (
        <div style={{ backgroundColor: 'gray', paddingLeft: '20%', paddingRight: '20%' }}>
            <div className='py-4'>
                <NewYork />
            </div>
            <div className='py-3'>
                <LosAngeles />
            </div>
            <div className='py-3'>
                <Miami />
            </div>
            <div className='py-3'>
                <Chicago />
            </div>
            <div className='py-3'>
                <GrandRapids />
            </div>
        </div>
    )
}

export default Locales