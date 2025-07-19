import React from 'react';
import Knowledge from '../assets/knowledge.svg';
import dot from '../assets/dot.webp';

function Ongoing() {
    return (
        <div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-padding-small uk-padding-remove-horizontal@m uk-padding-small@l uk-text-center">
                        <img
                            src={Knowledge}
                            style={{
                                height: '72px',
                                width: '72px',
                            }}
                            className=""
                        />
                        <div className="uk-flex uk-flex-center" style={{ gap: '0.375rem' }}>

                            <div
                                className="uk-text-center"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: '28px',
                                    fontWeight: '600',
                                    lineHeight: '2rem',
                                    background: 'linear-gradient(180deg, #ffffff 0%, #999999 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Ongoing
                            </div>
                            <div
                                className="uk-text-center"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: '28px',
                                    fontWeight: '600',
                                    lineHeight: '2rem',
                                    color: '#FF0078',
                                }}
                            >
                                Workshops
                            </div>
                        </div>

                        {/* Divider with dot */}
                        <div
                            className="uk-flex uk-flex-center uk-flex-middle uk-margin-small-top"
                            style={{ gap: '0.375rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
                        >
                            <div
                                style={{
                                    height: '1px',
                                    width: '100%',
                                    background: 'linear-gradient(to right, #060606, rgba(255,255,255,0.5))',
                                }}
                            />
                            <img
                                src={dot}
                                alt="dot"
                                style={{
                                    height: '18px',
                                    width: '18px',
                                }}
                            />
                            <div
                                style={{
                                    height: '1px',
                                    width: '100%',
                                    background: 'linear-gradient(to right, rgba(255,255,255,0.5), #060606)',
                                }}
                            />
                        </div>

                        {/* Subtitle */}
                        <div
                            className="uk-text-center uk-margin-small-top"
                            style={{
                                color: '#ccc',
                                fontSize: '1rem',
                                lineHeight: '1.5rem',
                                marginTop: '0.25rem',
                            }}
                        >
                            Attend the Free Course Workshops and Get to Know All the Details.
                        </div>
                    </div>
                    <div>
                        <div className="uk-grid-small uk-child-width-1-3@m uk-margin-top" uk-grid="true">
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-psd/workshop-webinar-social-media-banner-template_695097-1784.jpg?semt=ais_hybrid&w=740" alt="" />
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


                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>
                                                <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b73a3c40-1734-11ef-bcb0-c1c1625fd85c_Star-Icon-Yellow.svg"
                                                    className="uk-preserve-width"
                                                    width="25"
                                                    height="25"
                                                    alt="Rating"
                                                    uk-svg />
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
                                                    <button class="uk-button uk-button-danger uk-border-rounded">Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-psd/workshop-webinar-social-media-banner-template_695097-1784.jpg?semt=ais_hybrid&w=740" alt="" />
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


                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>
                                                <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b73a3c40-1734-11ef-bcb0-c1c1625fd85c_Star-Icon-Yellow.svg"
                                                    className="uk-preserve-width"
                                                    width="25"
                                                    height="25"
                                                    alt="Rating"
                                                    uk-svg />
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
                                                    <button class="uk-button uk-button-danger uk-border-rounded">Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-psd/workshop-webinar-social-media-banner-template_695097-1784.jpg?semt=ais_hybrid&w=740" alt="" />
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


                                            </div>

                                            {/* Right side - Rating */}
                                            <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                style={{
                                                    borderRight: '1px solid #FDE047',
                                                    background: 'linear-gradient(90deg, rgba(253, 224, 71, 0) 0%, rgba(253, 224, 71, 0.12) 100%)'
                                                }}>
                                                <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b73a3c40-1734-11ef-bcb0-c1c1625fd85c_Star-Icon-Yellow.svg"
                                                    className="uk-preserve-width"
                                                    width="25"
                                                    height="25"
                                                    alt="Rating"
                                                    uk-svg />
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
                                                    <button class="uk-button uk-button-danger uk-border-rounded">Brochure</button>
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
    )
}

export default Ongoing