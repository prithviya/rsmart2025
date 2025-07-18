import React from 'react';

function MarqueeBan() {
    const staffData = [
        {
            image: 'https://hubble.cdn.chittiapp.com/cdn_uploads/6eb9d910-bc4a-11ef-9467-dbf64511c27d_senthil-vel-electronics-engineer.jpg',
            name: 'John Doe',
            designation: 'CEO'
        },
        {
            image: 'https://hubble.cdn.chittiapp.com/cdn_uploads/8fca3410-bc4a-11ef-9467-dbf64511c27d_anjali-data-scientist.jpg',
            name: 'Jane Smith',
            designation: 'CTO'
        },
        {
            image: 'https://hubble.cdn.chittiapp.com/cdn_uploads/7a005a60-bc4a-11ef-9467-dbf64511c27d_meghana-developer.jpg',
            name: 'Mike Johnson',
            designation: 'Designer'
        },
        {
            image: 'https://hubble.cdn.chittiapp.com/cdn_uploads/7275a890-bc4a-11ef-9467-dbf64511c27d_priya-data-analyst.jpg',
            name: 'Sarah Williams',
            designation: 'Developer'
        },
        {
            image: 'https://hubble.cdn.chittiapp.com/cdn_uploads/8cddc280-bc4a-11ef-9467-dbf64511c27d_devi-developer.jpg',
            name: 'David Brown',
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
                                                <img width="30" height="30" src="https://hubble.cdn.chittiapp.com/cdn_uploads/a03a46a0-4f26-11ef-bb2f-cf969e117417_Verified-Badge.png" alt="approval" />
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
                        <div className="" style={{ animation: 'scrollUp 20s linear infinite', padding: '0' }}>
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
                                                <img width="30" height="30" src="https://hubble.cdn.chittiapp.com/cdn_uploads/a03a46a0-4f26-11ef-bb2f-cf969e117417_Verified-Badge.png" alt="approval" />
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
        `}
            </style>
        </div>
    )
}

export default MarqueeBan