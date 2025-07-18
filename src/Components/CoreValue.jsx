import React from 'react'

function CoreValue() {
    const features = [
        {
            icon: 'https://hubble.cdn.chittiapp.com/cdn_uploads/3b44b550-5ea8-11ef-a986-a7ed35392fc2_online-learning-icon.svg',
            title: 'Live Courses',
            desc: 'Real-time, interactive courses designed to engage learners directly with expert instructors, creating a dynamic and immersive educational experience.',
        },
        {
            icon: 'https://hubble.cdn.chittiapp.com/cdn_uploads/3b45c6c0-5ea8-11ef-a986-a7ed35392fc2_tamil-icon.svg',
            title: 'Learn in Tamil',
            desc: 'UPTOR is dedicated to making quality education accessible to everyone by providing courses in Tamil, empowering learners to excel in their native language.',
        },
        {
            icon: 'https://hubble.cdn.chittiapp.com/cdn_uploads/3b1eddd0-5ea8-11ef-a986-a7ed35392fc2_mentoring-icon.svg',
            title: 'Guidance From Industry Expert',
            desc: 'Every course at UPTOR is led by seasoned industry professionals, bringing real-world experience into the classroom to ensure that students receive insights that are both current and relevant.',
        },
        {
            icon: 'https://hubble.cdn.chittiapp.com/cdn_uploads/3b48d400-5ea8-11ef-a986-a7ed35392fc2_touch-interaction-icon.svg',
            title: 'Hands-On Practical Learning',
            desc: 'UPTOR emphasizes practical, hands-on learning experiences, equipping students with the skills they need to succeed in their careers from the very first day.',
        }
    ];
    return (
        <div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-padding-small uk-padding-remove-horizontal@m uk-padding-small@l uk-text-center">
                        {/* Heading */}
                        <img
                            src="https://hubble.cdn.chittiapp.com/cdn_uploads/c3856f00-4fed-11ef-b1fe-5781ecb07285_core-values-illustration.svg"
                            alt="Live Illustration"
                            style={{
                                height: '100px',
                                width: '100px',
                                marginBottom: '-40px'
                            }}
                            className="" // visible on medium+ screens (like lg:h-[84px] lg:w-[84px])
                        />
                        <div className="uk-flex uk-flex-center" style={{ gap: '0.375rem' }}>
                            <div
                                className="uk-text-center"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: '35px',
                                    fontWeight: '600',
                                    lineHeight: '2rem',
                                    color: '#FF0078',
                                }}
                            >
                                Core
                            </div>
                            <div
                                className="uk-text-center"
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
                                Values
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
                                src="https://hubble.cdn.chittiapp.com/cdn_uploads/0de4bc50-4fd4-11ef-b1fe-5781ecb07285_h-dot.png"
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
                        <div className="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m" uk-grid="true">
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
                                            <h3 className="uk-text-lead uk-margin-small-bottom" style={{ color: '#E5E5E5' }}>{item.title}</h3>
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