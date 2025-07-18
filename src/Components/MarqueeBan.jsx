import React from 'react';
import profile1 from '../assets/profile1.jpeg';
import profile2 from '../assets/profile2.jpeg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpeg';
import profile5 from '../assets/profile5.jpg';
import profile6 from '../assets/profile6.jpeg';
import profile7 from '../assets/profile7.jpeg';
import profile8 from '../assets/profile8.jpeg';
import profile9 from '../assets/profile9.jpg';
import profile10 from '../assets/profile10.jpeg';
import badge from '../assets/badgecert.webp'

function MarqueeBan() {
    const staffData = [
        {
            image: profile1,
            name: 'John Doe',
            designation: 'CEO'
        },
        {
            image: profile2,
            name: 'Jane Smith',
            designation: 'CTO'
        },
        {
            image: profile3,
            name: 'Mike Johnson',
            designation: 'Designer'
        },
        {
            image: profile4,
            name: 'Sarah Williams',
            designation: 'Developer'
        },
        {
            image: profile5,
            designation: 'Marketing'
        }
    ];
    const staffData1 = [
        {
            image: profile6,
            name: 'John Doe',
            designation: 'CEO'
        },
        {
            image: profile7,
            name: 'Jane Smith',
            designation: 'CTO'
        },
        {
            image: profile8,
            name: 'Mike Johnson',
            designation: 'Designer'
        },
        {
            image: profile9,
            name: 'Sarah Williams',
            designation: 'Developer'
        },
        {
            image: profile10,
            designation: 'Marketing'
        }
    ];
    return (
        <div>
            <div className="uk-child-width-1-2@m uk-grid-small" uk-grid="true">
                <div>
                    <div className="uk-card uk-card-default" style={{ height: '635px', overflow: 'hidden', background: 'transparent' }}>
                        <div className="" style={{ animation: 'scrollUp 15s linear infinite', padding: '0' }}>
                            {staffData.map((staff, index) => (
                                <div key={index} className="cus-card-bg"
                                    style={{ margin: '0', border: '1px solid #f7f7f7', marginBottom: '10px', borderRadius: '15px', }}>
                                    <div className="uk-margin">
                                        <img className="uk-border-rounded" width="200" height="200" src={staff.image} alt={staff.name} style={{ padding: '10px', borderRadius: '18px' }} />
                                    </div>
                                    <div className="uk-grid-small uk-flex-middle uk-flex-between" uk-grid
                                        style={{ margin: '0', border: '1px solid transparent', marginTop: '-18px', marginBottom: '10px', paddingRight: '10px' }}>
                                        <div className="uk-clearfix">
                                            <div className="uk-text-left uk-float-left">
                                                <p className="text-white uk-margin-remove">{staff.name}</p>
                                                <p className="uk-text-meta uk-margin-remove">
                                                    <span>{staff.designation}</span>
                                                </p>
                                            </div>
                                            <div className='uk-text-right uk-float-right uk-margin-small-left'>
                                                <img width="30" height="30" src={badge} alt="approval" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default" style={{ height: '635px', overflow: 'hidden', background: 'transparent' }}>
                        <div className="" style={{ animation: 'scrollDown 20s linear infinite', padding: '0' }}>
                            {staffData1.map((staff, index) => (
                                <div key={index} className="cus-card-bg"
                                    style={{ margin: '0', border: '1px solid #f7f7f7', marginBottom: '10px', borderRadius: '15px', }}>
                                    <div className="uk-margin">
                                        <img className="uk-border-rounded" width="200" height="200" src={staff.image} alt={staff.name} style={{ padding: '10px', borderRadius: '18px' }} />
                                    </div>
                                    <div className="uk-grid-small uk-flex-middle uk-flex-between" uk-grid
                                        style={{ margin: '0', border: '1px solid transparent', marginTop: '-18px', marginBottom: '10px', paddingRight: '10px' }}>
                                        <div className="uk-clearfix">
                                            <div className="uk-text-left uk-float-left">
                                                <p className="text-white uk-margin-remove">{staff.name}</p>
                                                <p className="uk-text-meta uk-margin-remove">
                                                    <span>{staff.designation}</span>
                                                </p>
                                            </div>
                                            <div className='uk-text-right uk-float-right uk-margin-small-left'>
                                                <img width="30" height="30" src={badge} alt="approval" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
          @keyframes scrollUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
            @keyframes scrollDown {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
            </style>
        </div>
    )
}

export default MarqueeBan