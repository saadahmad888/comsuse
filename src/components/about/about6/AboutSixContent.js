import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import { FiPlay } from 'react-icons/fi'

export default class AboutSixContent extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='5DGwOJXSxqg' onClose={() => this.setState({ isOpen: false })} />
                <div className="service-item corona-detail-wrap">
                    <div className="corona-img position-relative">
                        <img src="images/corona-virus.jpg" alt="Coronavirus" />
                        <Link
                                    className="mfp-iframe video-btn about-six video-play-btn"
                                    to="#"
                                    title="Watch Video"
                                    onClick={this.openModal}
                                >
                                    <FiPlay />
                                </Link>
                    </div>
                    <div className="corona-detail">
                        <ul className="list-items mb-3">
                            <li>Please watch a brief video below to see how to register and sign in.</li>
                            <li>Please watch a brief video on how messages are sent and received.</li>
                        </ul>
                        <div className="section-block"></div>
                        <p className="pt-3">Source: COMSUCE</p>
                    </div>
                </div>
            </>
        )
    }
}
