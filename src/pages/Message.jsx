import React from 'react';

import Loading from '../components/Loading';

function Message() {
    return (
        <div className='w-full min-h-screen'>
            <Loading title="Message" />
        </div>
    );
}

export default Message;