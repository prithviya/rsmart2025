import React from 'react';

const JoinCTA = () => {
    return (
        <div
            className="uk-container uk-margin-large-top"
        >
            <div
                className="uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-border-rounded"
                style={{
                    backgroundColor: '#ff007819',
                    border: '1px solid #ff007819',
                    padding: '2rem',
                    paddingLeft: '4rem',
                    paddingRight: '4rem',
                }}
            >
                <div className="uk-flex uk-flex-middle uk-flex-center uk-flex-wrap uk-text-center uk-margin-small-bottom">
                    <div
                        className="uk-text-bold"
                        style={{
                            fontSize: '30px',
                            lineHeight: '1.5',
                            background: 'linear-gradient(180deg, #ffffff 0%, #999999 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Join with Fellow
                    </div>
                    <div
                        className="uk-text-bold"
                        style={{
                            fontSize: '30px',
                            lineHeight: '1.5',
                            color: '#FF0078',
                            marginLeft: '6px'
                        }}
                    >
                        Learners
                    </div>
                </div>

                <div className="uk-text-center uk-margin-small-top">
                    <p className="uk-text-muted" style={{ fontSize: '16px' }}>
                        Our foundation rests on real world relevance.
                    </p>
                </div>

                <div className="uk-margin-small-top">
                    <img
                        src="https://hubble.cdn.chittiapp.com/cdn_uploads/a884fe20-612f-11ef-a1af-d1ea895731e2_student-profile-mix-plus.png"
                        alt="student group"
                        style={{ height: '48px', width: '250px' }}
                        className="uk-visible@s"
                    />
                </div>

                <a href="#live-course-section" className="uk-margin-top uk-border-rounded uk-display-inline-block uk-border-dashed uk-padding-small" style={{ borderColor: '#FF0078', borderWidth: '2px' }}>
                    <button
                        className="uk-button uk-button-default uk-border-rounded"
                        style={{
                            backgroundColor: '#FF0078',
                            padding: '0.45rem 1.5rem',
                            color: 'white',
                            borderRadius: '35px',
                            boxShadow:
                                '0px 2px 0px 0px rgba(255, 255, 255, 0.2) inset, 0px 2px 8px 0px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <span className="uk-text-small uk-text-bold uk-text-white">Explore Courses</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default JoinCTA;
