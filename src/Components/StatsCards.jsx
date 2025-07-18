import React from 'react';
import CoursesHeader from './CoursesHeader';
import people from '../assets/people.svg';
import book from '../assets/book.svg';
import growth from '../assets/growth.svg'

const statsData = [
    {
        icon: people,
        title: "5,000+",
        subtitle: "Total Students",
    },
    {
        icon: book,
        title: "12+",
        subtitle: "Courses",
    },
    {
        icon: growth,
        title: "80%",
        subtitle: "Happy outcome",
    },
];

const StatsCards = () => {
    return (
        <div>
            <div className="uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom">
                <div className="uk-container">
                    <div
                        className="uk-flex uk-flex-column"
                        style={{ marginTop: '2rem' }} // mt-7 / lg:mt-10
                    >
                        <div
                            className="uk-flex uk-flex-wrap uk-flex-center"
                            style={{
                                gap: '1rem', // default gap
                                rowGap: '1.5rem',
                                justifyContent: 'center',
                            }}
                        >
                            {statsData.map((item, index) => (
                                <div
                                    key={index}
                                    className="uk-card uk-card-body"
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: '286px',
                                        border: '1.2px solid #212121',
                                        backgroundColor: '#0D0D0D',
                                        borderRadius: '1rem',
                                        padding: '2rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {/* Icon top-right */}
                                    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                        <img
                                            src={item.icon}
                                            alt="icon"
                                            width={48}
                                            height={48}
                                        />
                                    </div>

                                    {/* Title */}
                                    <div
                                        style={{
                                            fontSize: '1.875rem', // text-2xl / lg:text-[30px]
                                            fontWeight: 600,
                                            lineHeight: '2.25rem',
                                            color: '#E5E5E5',
                                            marginBottom: '0.25rem',
                                        }}
                                    >
                                        {item.title}
                                    </div>

                                    {/* Subtitle */}
                                    <div
                                        style={{
                                            fontSize: '1rem', // lg:text-base
                                            fontWeight: 400,
                                            lineHeight: '1.5rem',
                                            whiteSpace: 'nowrap',
                                            color: '#9CA3AF', // neutral-400
                                        }}
                                    >
                                        {item.subtitle}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <CoursesHeader />
        </div>
    );
};

export default StatsCards;
