import React from 'react';
import MarqueeBan from './MarqueeBan';
import learn from '../assets/learn.svg';
import apply from '../assets/apply.svg';
import placed from '../assets/placed.svg';
import student from '../assets/setpics.webp';
import star from '../assets/5star.webp';
import sparkle from '../assets/sparkle.gif'


function Banner() {
    return (
        <div>
            <div className="uk-section-bottom">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid="true" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div>
                            <div className="uk-text-left">
                                <h1 className='text-white uk-text-left banner-title'>
                                    Experience the New Era of <span>
                                        <span
                                            style={{
                                                textDecoration: 'underline',
                                                textDecorationColor: '#ff007a'
                                            }}
                                        >
                                            E
                                        </span>
                                        xperiential
                                    </span> Learning
                                </h1>
                                <p className='text-white'>
                                    RSmart Intellect Hub has emerged as the pinnacle of tech-focused education, offering an outcome-based space and methodology tailored for aspiring tech professionals.
                                </p>
                                <div
                                    className="uk-flex uk-flex-wrap uk-flex-middle uk-child-width-auto uk-grid-small uk-margin-top"
                                    uk-grid="true"
                                >
                                    {/* LEARN */}
                                    <div className="uk-flex uk-flex-middle uk-flex-nowrap">
                                        <img
                                            src={learn}
                                            alt="Read Icon"
                                            width="20"
                                            height="20"
                                            style={{ marginRight: '6px' }}
                                        />
                                        <span className="uk-text-small" style={{ color: '#fff', letterSpacing: '0.28px' }}>
                                            LEARN
                                        </span>
                                    </div>

                                    {/* APPLY */}
                                    <div className="uk-flex uk-flex-middle uk-flex-nowrap">
                                        <img
                                            src={apply}
                                            alt="Check Icon"
                                            width="20"
                                            height="20"
                                            style={{ marginRight: '6px' }}
                                        />
                                        <span className="uk-text-small" style={{ color: '#fff', letterSpacing: '0.28px' }}>
                                            APPLY
                                        </span>
                                    </div>

                                    {/* GET PLACED */}
                                    <div className="uk-flex uk-flex-middle uk-flex-nowrap">
                                        <img
                                            src={placed}
                                            alt="Cap Icon"
                                            width="20"
                                            height="20"
                                            style={{ marginRight: '6px' }}
                                        />
                                        <span className="uk-text-small" style={{ color: '#fff', letterSpacing: '0.28px' }}>
                                            GET PLACED
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="uk-margin-top uk-flex uk-flex-middle uk-flex-wrap uk-gap-small"
                                    style={{ gap: '0.5rem' }} // fallback gap if UIKit's gap classes are insufficient
                                >
                                    {/* Student Profile Image */}
                                    <img
                                        src={student}
                                        alt="Student Profile"
                                        width="160"
                                        height="40"
                                        className="uk-visible@m"
                                        style={{ height: '40px', width: '160px' }}
                                    />

                                    {/* Star Rating and Text */}
                                    <div className="uk-flex uk-flex-column" style={{ gap: '6px' }}>
                                        {/* Stars */}
                                        <img
                                            src={star}
                                            alt="5 Stars"
                                            style={{ height: '18px', width: '98px' }}
                                        />

                                        {/* Text Row */}
                                        <div className="uk-flex uk-flex-middle uk-flex-wrap" style={{ gap: '6px' }}>
                                            <span className="uk-text-small" style={{ color: '#aaa', fontWeight: 500 }}>
                                                Loved by
                                            </span>
                                            <span className="uk-text-small" style={{ color: '#fff', fontWeight: 500 }}>
                                                10,000+
                                            </span>
                                            <span className="uk-text-small" style={{ color: '#aaa', fontWeight: 500 }}>
                                                Students
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="uk-visible@l  uk-margin-large-top">
                                <div
                                    className="uk-flex uk-flex-middle uk-margin-top"
                                    style={{ marginTop: '62px', gap: '0.75rem', paddingRight: '1.25rem' }} // mt-[62px] and pr-5
                                >
                                    {/* Sparkle Icon */}
                                    <img
                                        className="uk-preserve-width"
                                        src={sparkle}
                                        alt="Sparkle"
                                        width="24"
                                        height="24"
                                    />

                                    {/* Gradient Line */}
                                    <div
                                        className="uk-width-expand"
                                        style={{
                                            height: '1px',
                                            backgroundImage: 'linear-gradient(to right, #2D2D2D, #060606)',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-padding-remove">
                                <div className="uk-container uk-overflow-auto uk-flex-nowrap uk-flex" style={{
                                    gap: "1px", display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end'
                                }}>
                                    <MarqueeBan />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner