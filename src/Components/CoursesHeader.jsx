import React from 'react';
import SwitcherComponent from './SwitcherComponent';
import Courses from '../assets/playicon.svg';
import Dot from '../assets/dot.webp'
const CoursesHeader = () => {
    return (
        <div className="uk-section">
            <div className="uk-padding-small uk-padding-remove-horizontal@m uk-padding-small@l uk-text-center">
                {/* Heading */}
                <img
                    src= {Courses}
                    alt="Live Illustration"
                    style={{
                        height: '100px',
                        width: '100px',
                       
                    }}
                    className="" // visible on medium+ screens (like lg:h-[84px] lg:w-[84px])
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
                            marginTop: '-20px'
                        }}
                    >
                        Our
                    </div>
                    <div
                        className="uk-text-center"
                        style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontSize: '28px',
                            fontWeight: '600',
                            lineHeight: '2rem',
                            color: '#FF0078',
                            marginTop: '-20px'
                        }}
                    >
                        Courses
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
                        src={Dot}
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
                    Placement-centric experiential learning programs
                </div>
            </div>
            <SwitcherComponent />
        </div>
    );
};

export default CoursesHeader;
