import React, { useState } from 'react';

const testimonials = [
    // === Add your 10 testimonials here ===
    {
        name: "Sruthi Selvam",
        role: "Data Architect",
        content: "RSmart's platform gave me hands-on skills that were directly applicable in my job. The mentors are top-notch and the learning experience is immersive and practical.",
    },
    {
        name: "Senthil Vel",
        role: "Electronics Engineer",
        content: "Amazing journey! The curriculum is structured with real-world problems. I was able to land a role within 2 months of completing the program.",
    },
    {
        name: "Priya",
        role: "Data Analyst",
        content: "Great mentors, great projects. The best part is the live doubt-clearing sessions and community support. I would highly recommend this to anyone starting a tech career.",
    },
    {
        name: "Mithun",
        role: "Python Developer",
        content: "The courses helped me switch from manual testing to development. I built 5+ real-world projects during training and those boosted my confidence and résumé.",
        pics: "https://rgpuedu.in/wp-content/uploads/2025/02/cropped-siteicon-1.png"
    },
    {
        name: "Meghana",
        role: "Full Stack Developer",
        content: "The live classes and assignments were extremely helpful. They make sure every student is learning at the right pace. Bonus: amazing placement assistance!",
        pics: "https://rgpuedu.in/wp-content/uploads/2025/02/cropped-siteicon-1.png"
    },
    {
        name: "Manoj Kumar",
        role: "Data Scientist",
        content: "RSmart transformed my career. Their hands-on training is unmatched. The Data Science module helped me secure an internship and later a job offer at a top MNC.",
        pics: "https://rgpuedu.in/wp-content/uploads/2025/02/cropped-siteicon-1.png"
    },
    {
        name: "Kumaran",
        role: "Web Developer",
        content: "The course structure is fantastic. Real-life case studies helped me understand and solve industry challenges better.",
        pics: "https://rgpuedu.in/wp-content/uploads/2025/02/cropped-siteicon-1.png"
    },
    {
        name: "Anjali",
        role: "ML Engineer",
        content: "A perfect blend of theory and practicals. The capstone projects were challenging and rewarding.",
        pics: "https://rgpuedu.in/wp-content/uploads/2025/02/cropped-siteicon-1.png"
    },
    {
        name: "Ravi",
        role: "Backend Developer",
        content: "Amazing support system and well-curated modules. I'm now working with a great team thanks to the placement cell.",
        pics: "https://rgpuedu.in/wp-content/uploads/2025/02/cropped-siteicon-1.png"
    },
    {
        name: "Deepa",
        role: "UI/UX Designer",
        content: "Design principles, hands-on Figma sessions, and the feedback system helped me polish my portfolio and crack interviews.",
        pics: "https://rgpuedu.in/wp-content/uploads/2025/02/cropped-siteicon-1.png"
    }
];

const TestimonialCard = ({ name, role, content }) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 180;

    return (
        <div className="uk-card uk-card-default uk-card-body">
            <h4 className="uk-card-title">{name}</h4>
            <p className="uk-text-meta">{role}</p>
            <p>
                {expanded ? content : `${content.slice(0, limit)}...`}
                {content.length > limit && (
                    <span
                        onClick={() => setExpanded(!expanded)}
                        className="uk-text-primary uk-text-small uk-margin-left"
                        style={{ cursor: "pointer" }}
                    >
                        {expanded ? "Read Less" : "Read More"}{' '}
                        <span uk-icon={`icon: chevron-${expanded ? 'up' : 'down'}`} />
                    </span>
                )}
            </p>
        </div>
    );
};

function Walllove() {
    const [showAll, setShowAll] = useState(false);

    const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

    return (
        <div className="uk-section uk-container">
            {/* Heading */}
            <div className="uk-padding-small uk-padding-remove-horizontal@m uk-padding-small@l uk-text-center">
                {/* Heading */}
                <img
                    src="https://hubble.cdn.chittiapp.com/cdn_uploads/f0cb14f0-4fe9-11ef-b1fe-5781ecb07285_wol-illustration.svg"
                    alt="Live Illustration"
                    style={{
                        height: '150px',
                        width: '150px',
                        marginBottom: '-50px'
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
                            background: 'linear-gradient(180deg, #ffffff 0%, #999999 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Wall of
                    </div>
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
                        Love
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
                    Meet our students & hear their success stories.
                </div>
            </div>
            <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-margin-medium-top uk-margin-small-bottom">
                {/* Main Image */}
                <img
                    src="https://hubble.cdn.chittiapp.com/cdn_uploads/a880b860-612f-11ef-a1af-d1ea895731e2_student-profile-mix.png"
                    className="uk-width-1-1"
                    style={{ maxWidth: '160px', height: '40px' }}
                    alt="Student profiles"
                    data-uk-svg
                />

                {/* Rating and Text Container */}
                <div className="uk-flex uk-flex-column uk-flex-center uk-margin-small-top">
                    {/* Stars Rating */}
                    <div className="uk-flex uk-flex-center">
                        <img
                            src="https://hubble.cdn.chittiapp.com/cdn_uploads/ece342b0-32b9-11ef-93e3-ad58e1e8f122_5-Stars.png"
                            style={{ width: '88px', height: '16px' }}
                            alt="5 star rating"
                            data-uk-svg
                        />
                    </div>

                    {/* Text Content */}
                    <div className="uk-flex uk-flex-middle uk-flex-center uk-margin-small-top">
                        <span className="uk-text-small uk-text-muted" style={{ fontWeight: 500 }}>Loved by</span>
                        <span className="uk-text-small uk-margin-small-left" style={{ fontWeight: 500, color: 'white' }}>10,000+</span>
                        <span className="uk-text-small uk-text-muted uk-margin-small-left" style={{ fontWeight: 500 }}>Students</span>
                    </div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div
                className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m"
                data-uk-grid={showAll ? 'masonry: true' : true} >

                {visibleTestimonials.map((t, i) => (
                    <div key={i} className="p-3 uk-margin-medium-top">
                        <div className="uk-card cus-card-bg uk-height-1-1" style={{ borderRadius: "25px", padding: "15px 25px" }}>
                            <div class="uk-clearfix">
                                <div class="uk-float-left">
                                    <div class="">
                                        <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/ece342b0-32b9-11ef-93e3-ad58e1e8f122_5-Stars.png" alt="" width="100" />
                                    </div>
                                </div>
                                <div class="uk-float-right">
                                    <div className="uk-alert-success uk-flex uk-flex-middle uk-padding-small uk-margin-small"
                                        style={{
                                            border: '1px solid #32d296',
                                            borderRadius: '8px',
                                            backgroundColor: 'transparent',
                                            color: '#32d296',
                                            padding: '5px',
                                            fontSize: '12px'
                                        }}
                                    >
                                        <span className="uk-margin-xsmall-right">
                                            <img width="16" height="16" src="https://img.icons8.com/fluency/16/approval.png" alt="approval" />
                                        </span>
                                        Verified
                                    </div>

                                </div>
                            </div>
                            <p>{t.content}</p>
                            <div className="uk-flex uk-flex-middle uk-margin-small-bottom">
                                {/* Left - Profile Image */}
                                <img
                                    src="https://rgpuedu.in/wp-content/uploads/2025/02/cropped-siteicon-1.png"
                                    alt={t.name}
                                    className="uk-border-circle"
                                    width="48"
                                    height="48"
                                />
                                {/* Right - Name & Role */}
                                <div className="uk-margin-left">
                                    <div className="uk-text-bold uk-text-medium">{t.name}</div>
                                    <div className="uk-text-muted uk-text-small">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More Button */}
            {!showAll && (
                <div className="uk-flex uk-flex-center uk-margin-top">
                    <button
                        className="uk-button uk-button-default text-white uk-border-rounded"
                        onClick={() => setShowAll(true)}
                    >
                        Show More
                        <span className="uk-margin-small-left" uk-icon="icon: arrow-down" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Walllove;
