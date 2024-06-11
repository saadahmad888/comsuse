import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import LoginForm from '../components/others/account/LoginForm'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class Login extends Component {
    render() {
        return (
            <main className="login">
                <Navbar2 />
                <Breadcrumb title="Login" />
                <section className="contact-area padding-top-140px padding-bottom-120px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 mx-auto">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
