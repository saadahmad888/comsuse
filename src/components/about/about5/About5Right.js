import React, { Component } from 'react'
import SectionTitle from '../../common/SectionTitle'

export default class About5Right extends Component {
    render() {
        return (
            <>
                <div className="col-lg-6">
                    <div className="section-content-box pl-5">
                        <SectionTitle title="waht we are?" subtitle="More About Comsuce">
                            <h4 className="widget-title pt-4 pb-3">
                                COMSUCE Software is a product of COMSUCE Limited (14695195), previously registered as GP-PHARM limited.
                            </h4>
                        </SectionTitle>
                        <div className="section-description">
                            <p className="section__desc mb-2">
                                COMSUCE limited was founded by Mr Ike Okeke (CEO) and incorporated on 28th February 2023. Together with Mr Ifeanyi C.Okoye (COO) and Mr Reggie C. Ahaneku (CTO), we put in collective  efforts in building an organisation which aspires to make a positive difference towards technologically improving the communication system between healthcare staff in primary care and eventually beyond it.

                        </p>
                            <p className="section__desc">
                                The vision behind COMSUCE started in April 2022 as a question which was based on how to effortlessly communicate medication changes being made on a patient’s record in his G.P surgery (during a CCG clinical audit) to the patient’s community pharmacy to avoid polypharmacy and medicinal waste. The reflection on this question sprung into an idea which prompted committed action, team formation and consistent hardwork to make COMSUCE a reality. 

                        </p>
                        </div>
                        <div className="btn-box">
                            <a href="/about" className="template-btn">Read more</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
