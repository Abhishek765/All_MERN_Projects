import React from 'react'
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form id="register-form" className="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autocomplete="off"
                                        placeholder="Enter your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autocomplete="off"
                                        placeholder="Enter your Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk"></i>
                                    </label>
                                    <input type="text" name="phone" id="phone" autocomplete="off"
                                        placeholder="Enter your Phone"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-slideshow"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autocomplete="off"
                                        placeholder="Enter your profession"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autocomplete="off"
                                        placeholder="Enter your Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-account"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autocomplete="off"
                                        placeholder="Enter your Confirm Password"
                                    />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register" />
                                </div>
                            </form>

                            <div className="signup-image">
                                <figure>
                                    <img src="" alt="registration Pic" />
                                </figure>
                                <NavLink to='/login' className="signup-image-link">I am already signed up</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
