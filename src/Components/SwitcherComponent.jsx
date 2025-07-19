import React, { useEffect } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import calendar from '../assets/calendar.svg';
import people from '../assets/people.svg';

// Initialize UIkit with icons
UIkit.use(Icons);

const SwitcherComponent = () => {
    // Initialize UIkit components after render
    useEffect(() => {
        // This ensures UIkit components are properly initialized
        const switchers = document.querySelectorAll('[uk-switcher]');
        switchers.forEach(switcher => UIkit.switcher(switcher));
    }, []);

    const courses = [
        {
            title: "B.Sc Computer Science",
            img: "https://wp.wpi.edu/catalyst/files/2023/04/Computer-science-jobs-1.jpg",
            logo: "https://rsmartedu.in/wp-content/uploads/2024/01/cropped-Rsmart-Logo-ORG-01-192x192.png",
            "duration": "36 Months",
            "mode": "Full Time",
            "eligibility": "Eligibility +2",
            "brochure": "#"
        },
        {
            title: "B.Sc Information Technology",
            img: "https://www.captechu.edu/sites/default/files/How%20does%20your%20computer%20science%20degree%20help%20you%20with%20cybersecurity.jpg",
            logo: "https://rsmartedu.in/wp-content/uploads/2024/01/cropped-Rsmart-Logo-ORG-01-192x192.png",
            "duration": "36 Months",
            "mode": "Full Time",
            "eligibility": "Eligibility +2",
            "brochure": "#"
        },
        {
            title: "B.Sc CS with Cyber Security",
            img: "https://1602894.fs1.hubspotusercontent-na1.net/hub/1602894/hubfs/cybersecurity%20%281%29.webp?width=1170&name=cybersecurity%20%281%29.webp",
            logo: "https://rsmartedu.in/wp-content/uploads/2024/01/cropped-Rsmart-Logo-ORG-01-192x192.png",
            "duration": "36 Months",
            "mode": "Full Time",
            "eligibility": "Eligibility +2",
            "brochure": "#"
        },
        {
            title: "B.Sc CS with AI & DS",
            img: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
            logo: "https://rsmartedu.in/wp-content/uploads/2024/01/cropped-Rsmart-Logo-ORG-01-192x192.png",
            "duration": "36 Months",
            "mode": "Full Time",
            "eligibility": "Eligibility +2",
            "brochure": "#"
        }
    ];


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
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slider="sets: true; autoplay: true;">

                        <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid-small uk-margin-top">
                            {courses.map((course, index) => (
                                <div key={index}>
                                    <div className="uk-padding-small uk-border-rounded">
                                        <div className="second hero uk-card-hover">
                                            <img className="hero-profile-img" src={course.img} alt="Profile" />
                                            <div className="hero-description-bk"></div>

                                            <div className="hero-logo">
                                                <img src={course.logo} alt="Logo" />
                                            </div>

                                            <div className="hero-description">
                                                <p>{course.title}</p>
                                            </div>

                                            <div className="hero-date uk-text-center uk-margin-small-top">
                                                <small className='uk-margin-remove'><span uk-icon="calendar"></span> {course.duration}</small><br />
                                                <small className='uk-margin-remove '><span uk-icon="clock"></span> {course.mode}</small><br />
                                                <small className='uk-margin-remove '><span uk-icon="users"></span> {course.eligibility}</small>
                                            </div>

                                            <div className="hero-btn">
                                                <a href={course.brochure}>
                                                    <span className="uk-margin-small-right" uk-icon="icon: download"></span>
                                                    Brochure
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="uk-flex uk-flex-center uk-margin-top">
                            <ul className="uk-slider-nav uk-dotnav"></ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-grid-small uk-child-width-1-3@m" uk-grid="true">
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-vector/online-education-student-course-technology-illustration-knowledge-computer-internet-web-distance-study-people_109722-1865.jpg" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={people}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                    />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={calendar}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                    />
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
                                        <div className="uk-clearfix">
                                            <div className="uk-float-left">
                                                <div className="">
                                                    <button className="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div className="uk-float-right">
                                                <div>
                                                    <button className="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-vector/online-education-student-course-technology-illustration-knowledge-computer-internet-web-distance-study-people_109722-1865.jpg" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={people}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                    />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={calendar}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                    />
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
                                        <div className="uk-clearfix">
                                            <div className="uk-float-left">
                                                <div className="">
                                                    <button className="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div className="uk-float-right">
                                                <div>
                                                    <button className="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-vector/online-education-student-course-technology-illustration-knowledge-computer-internet-web-distance-study-people_109722-1865.jpg" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={people}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                    />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={calendar}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                    />
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
                                        <div className="uk-clearfix">
                                            <div className="uk-float-left">
                                                <div className="">
                                                    <button className="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div className="uk-float-right">
                                                <div>
                                                    <button className="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
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
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-vector/online-education-student-course-technology-illustration-knowledge-computer-internet-web-distance-study-people_109722-1865.jpg" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={people}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                    />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={calendar}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                    />
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
                                        <div className="uk-clearfix">
                                            <div className="uk-float-left">
                                                <div className="">
                                                    <button className="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div className="uk-float-right">
                                                <div>
                                                    <button className="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-vector/online-education-student-course-technology-illustration-knowledge-computer-internet-web-distance-study-people_109722-1865.jpg" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={people}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                    />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={calendar}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                    />
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
                                        <div className="uk-clearfix">
                                            <div className="uk-float-left">
                                                <div className="">
                                                    <button className="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div className="uk-float-right">
                                                <div>
                                                    <button className="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-padding-small cus-border uk-border-rounded cus-card-bg">
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-vector/online-education-student-course-technology-illustration-knowledge-computer-internet-web-distance-study-people_109722-1865.jpg" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={people}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                    />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={calendar}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                    />
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
                                        <div className="uk-clearfix">
                                            <div className="uk-float-left">
                                                <div className="">
                                                    <button className="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div className="uk-float-right">
                                                <div>
                                                    <button className="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
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
                                    <img className='uk-border-rounded' src="https://img.freepik.com/premium-vector/online-education-student-course-technology-illustration-knowledge-computer-internet-web-distance-study-people_109722-1865.jpg" alt="" />
                                    <div className='uk-text-left uk-padding-small'>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            {/* Left side - User count and Duration */}
                                            <div className="uk-flex uk-flex-middle uk-grid-small" uk-grid>
                                                <div className="uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={people}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Users"
                                                    />
                                                    <span className="uk-text-small uk-margin-small-left" style={{ color: '#a3a3a3', padding: '10px', fontWeight: 500 }}>
                                                        2000+
                                                    </span>
                                                </div>

                                                <div className="uk-margin-small-left uk-flex uk-flex-middle uk-border-rounded"
                                                    style={{
                                                        backgroundColor: '#262626',
                                                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset'
                                                    }}>
                                                    <img src={calendar}
                                                        className="uk-preserve-width"
                                                        width="25"
                                                        height="25"
                                                        alt="Duration"
                                                    />
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
                                        <div className="uk-clearfix">
                                            <div className="uk-float-left">
                                                <div className="">
                                                    <button className="uk-button uk-button-default text-white uk-border-rounded">View More</button>
                                                </div>
                                            </div>
                                            <div className="uk-float-right">
                                                <div>
                                                    <button className="uk-button uk-button-danger uk-border-rounded"><span className="uk-margin-small-right text-white" uk-icon="icon: download" />Brochure</button>
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