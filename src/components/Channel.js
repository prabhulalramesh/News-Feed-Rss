import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './channel.css';


export default function Channel({channel :{ id, title, backgroundColor}, onHoverChannel})
{

    return (
        <div  className={['list-item',`${backgroundColor}` ].join(' ') }>
                <span className = "title" >{id} {title}</span>
        </div>
    )
};


Channel.propTypes = {
id: PropTypes.string,
size: PropTypes.oneOf(['small', 'medium', 'large']),
title: PropTypes.string,
onClick: PropTypes.func,
backgroundColor: PropTypes.string,
channel: PropTypes.object,
};

Channel.defaultProps = {
backgroundColor: null,
primary: false,
size: 'medium',
id:null,
title:null,
onClick: undefined,
channel: {id:null,title:null}
};

