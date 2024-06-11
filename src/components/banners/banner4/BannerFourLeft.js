import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BannerFourLeft extends Component {
    render() {
        return (
            <>
                <div className="col-lg-6">
                    <div className="banner-content">
                        <div className="section-heading">
                            <h2 className="section__title mt-0">WHAT IS COMSUCE?</h2>
                        </div>
                        <div className="section-description">
                            <p className="section__desc">
                                COMSUCE (meaning COMMUNICATION SYSTEM FOR URGENT CLINICAL ENQUIRES) is a software which provides a platform to enable direct communication between clinicians in primary care to aid the resolution of urgent clinical enquires on behalf of their patients.

                                </p>
                        </div>
                        <div className="btn-box hero-btn-box hero-btn-box-2">
                            <Link to="/prevention" className="template-btn mr-2">check suggestions</Link>
                            <Link to="/about" className="template-btn">about COVID-19</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
