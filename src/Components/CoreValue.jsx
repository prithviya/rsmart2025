import React from 'react';
import coach from '../assets/core.svg'
import portfilo from '../assets/booklearn.svg';
import skill from '../assets/lang.svg';
import mentor from '../assets/grouppeople.svg';
import dot from '../assets/dot.webp'

function CoreValue() {
    const features = [
        {
            icon: portfilo,
            title: 'Portfolio building mentor',
            desc: 'Shaping a professional portfolio but also assisting individuals in developing a strong self- brand and honing essential leadership qualities for a well - rounded and impactful professional identity.',
        },
        {
            icon: skill,
            title: 'life skills mentor',
            desc: 'Commitment to guiding individuals in developing crucial life skills, with a specific focus on honing effective communication and other essential professional capabilities. ',
        },
        {
            icon: mentor,
            title: 'expertise elevation mentor',
            desc: 'Commitment to guiding individuals through a transformative journey, helping them attain elevated levels of technical expertise and proficiency in the ever- evolving landscape of technology.',
        }
    ];
    return (
        <div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-padding-small uk-padding-remove-horizontal@m uk-padding-small@l uk-text-center">
                        {/* Heading */}
                        <img
                            src={coach}
                            style={{
                                height: '100px',
                                width: '100px',
                                marginBottom: '-40px'
                            }}
                            className="" 
                            alt='coach'
                        />
                        <div className="uk-flex uk-flex-center" style={{ gap: '0.375rem' }}>
                            <div
                                className="uk-text-center uk-text-capitalize"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: '35px',
                                    fontWeight: '600',
                                    lineHeight: '2rem',
                                    background: 'linear-gradient(180deg, #ffffff 0%, #999999 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Corporate
                            </div>

                            <div
                                className="uk-text-center uk-text-capitalize"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: '35px',
                                    fontWeight: '600',
                                    lineHeight: '2rem',
                                    color: '#FF0078',
                                }}
                            >
                                Growth
                            </div>
                            <div
                                className="uk-text-center uk-text-capitalize"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: '35px',
                                    fontWeight: '600',
                                    lineHeight: '2rem',
                                    background: 'linear-gradient(180deg, #ffffff 0%, #999999 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Coach
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
                            Empowering Learners with Expert Guidance and Practical Skills. Here's What We Offer:
                        </div>
                    </div>

                    <div className="uk-light uk-margin-top">
                        <div className="uk-grid-small uk-child-width-1-1 uk-child-width-1-3@m" uk-grid="true">
                            {features.map((item, index) => (
                                <div key={index}>
                                    <div
                                        className="uk-card uk-card-default uk-card-body uk-border-rounded"
                                        style={{
                                            backgroundColor: '#0B0B0B',
                                            border: '1px solid #161616',
                                            minHeight: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '18px',
                                        }}
                                    >
                                        <div
                                            className="p-3 w-fit rounded-xl"
                                            style={{
                                                boxShadow: '0px 1px 1px 0px rgba(255, 255, 255, 0.12) inset',
                                                background: 'linear-gradient(180deg, rgba(38, 38, 38, 0.2) 0%, rgba(255, 0, 120, 0.1) 100%)', width: '30px', padding: '8px', borderRadius: '5px'
                                            }}
                                        >
                                            <img src={item.icon} alt={item.title} className="uk-width-small uk-height-small" style={{ width: '28px', height: '28px' }} />
                                        </div>
                                        <div>
                                            <h3 className="uk-text-lead uk-margin-small-bottom uk-text-capitalize" style={{ color: '#E5E5E5' }}>{item.title}</h3>
                                            <p className="uk-text-small" style={{ color: '#999' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreValue