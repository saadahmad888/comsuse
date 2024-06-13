import React, { Component } from 'react'
import Service2Left from './Service2Left'
import Service2Right from './Service2Right'

export default class ServiceTwo extends Component {
    render() {
        return (
            <div className="container">
                <div className='row padding-top-100px'>
                    <div className='col-12'>
                        <div>
                            <p>
                                It is clear that good communication between healthcare professionals is a key component in the deliverance of quality clinical service, hence the relevance of an efficient direct communication system is vitally important. <br/>
                                COMSUCE is broadly focused on primary care communications with its starting point being the direct communication between clinicians in General practice and Community pharmacies to aid the quick resolution of urgent clinical enquires in the prescribing and dispensing of prescriptions. This is important because the various communication systems that currently exist between the two organisations (i.e phone calls, emails, 3rd party etc) aren’t efficient and robust enough to keep up with the fast pace of the current healthcare system, hence this can potentially result in misinformation, clinical errors, unwanted risk to patient’s health and waste. <br/>
                                Stated below are the “Pros of COMSUCE” which demonstrates the provision of a robust and efficient clinical communication system.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row padding-top-100px">
                    <Service2Left />
                    <Service2Right />
                </div>
            </div>
        )
    }
}
