import React, { useEffect } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


// Initialize UIkit with icons
UIkit.use(Icons);

const SwitcherComponent = () => {
    // Initialize UIkit components after render
    useEffect(() => {
        // This ensures UIkit components are properly initialized
        const switchers = document.querySelectorAll('[uk-switcher]');
        switchers.forEach(switcher => UIkit.switcher(switcher));
    }, []);

    return (
        <div className="uk-container uk-margin-medium-top">
            {/* Pill Navigation Switcher */}
            <ul className="uk-subnav uk-subnav-pill uk-flex uk-flex-center" uk-tab="animation: uk-animation-fade">
                <li><a href="#!">All Courses</a></li>
                <li><a href="#!">RCAS</a></li>
                <li><a href="#!">RTC</a></li>
                <li><a href="#!">MBA</a></li>
            </ul>

            {/* Switcher Content */}
            <div className="uk-switcher uk-margin">
                <div>
                    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slider="sets: true; autoplay: true;">

                        <div class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid-small uk-margin-top">
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-xsmall-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        24 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    UG
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            MBA
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Lead teams, drive growth, master business strategy.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2500+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-xsmall-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        36 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    IT
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            B.Sc (AIDS)
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Decode data, trained AI Agents, solve real problems.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2500+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        36 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    IT
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            B.Sc Information Technology
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Build digital systems, apps & secure networks.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2500+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        36 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    IT
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            B.Sc Computer Science & Engg
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Master coding, algorithms & future tech tools.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2300+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        48 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    IT
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            B.E CSE (Cybersecurity)
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Protect systems, detect threats, defend digital assets.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2500+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        36 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    IT
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            B.Sc CS (Cybersecurity)
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Safeguard data, master ethical hacking tools.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2500+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        36 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    IT
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            B.Sc Data Science & Analytics
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Become a Data Scientist. No Coding Knowledge Required.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="/#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="/#" data-uk-slidenav-next data-uk-slider-item="next"></a>

                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-grid-small uk-child-width-1-3@m" uk-grid="true">
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        5 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    4.8
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            Data Science & Machine Learning
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Become a Data Scientist. No Coding Knowledge Required.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        5 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    4.8
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            Data Science & Machine Learning
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Become a Data Scientist. No Coding Knowledge Required.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        5 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    4.8
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            Data Science & Machine Learning
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Become a Data Scientist. No Coding Knowledge Required.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-grid-small uk-child-width-1-3@m" uk-grid="true">
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        5 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    4.8
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            Data Science & Machine Learning
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Become a Data Scientist. No Coding Knowledge Required.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        5 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    4.8
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            Data Science & Machine Learning
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Become a Data Scientist. No Coding Knowledge Required.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        5 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    4.8
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            Data Science & Machine Learning
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Become a Data Scientist. No Coding Knowledge Required.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-grid-small uk-child-width-1-3@m" uk-grid="true">
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://hubble.cdn.chittiapp.com/cdn_uploads/28d7c830-5566-11ef-b501-3f25b685e045_data-science-thumb.png" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b36928d0-5094-11ef-bb17-fb25afea96ce_user-group.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b3681760-5094-11ef-bb17-fb25afea96ce_calendar.svg"
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                        uk-svg />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        5 Months
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>

                                                <span className="uk-text-small uk-margin-small-left" style={{ color: 'white', padding: '10px', fontWeight: 600 }}>
                                                    4.8
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className='text-white uk-text-bold'>
                                            MBA
                                        </h4>
                                        <p className='uk-text-muted'>
                                            Become a Data Scientist. No Coding Knowledge Required.
                                        </p>
                                        <hr />
                                        <div class="uk-clearfix">
                                            <div class="uk-float-left">
                                                <div class="">
                                                    <button class="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div class="uk-float-right">
                                                <div>
                                                    <button class="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwitcherComponent;