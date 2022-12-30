import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Setting from './pages/Setting';
import Dashboard from './pages/Dashboard';
import Discount from './pages/Discount';
import Notification from './pages/Notification';
import Message from './pages/Message';
import Home from './pages/Home';
import LogOutModal from './components/LogOutModal';
import ModalPaymentConfirm from './components/ModalPaymentConfirm';

function App() {
    const [ selected, setSelected ] = useState(0);
    const [ isModal, setIsModal ] = useState(true);
    
    return (
        <div className="relative flex items-start gap-x-4 texte-white bg-primary min-h-screen">
            <Sidebar selected={ selected } setSelected={ setSelected } />
            { selected === 0 ? (
                <Home setIsModal={setIsModal} />
            ) : selected === 2 ? (
                <Dashboard />
            ) : selected === 1 ? (
                <Discount />
            ) : selected === 3 ? (
                <Message />
            ) : selected === 4 ? (
                <Notification />
            ) : selected === 5 ? (
                <Setting />
                    ) : (
                <LogOutModal setSelected={ setSelected } />
            ) }
            { isModal && (
                <ModalPaymentConfirm setIsModal={setIsModal} />
            )}
        </div>
    );
}

export default App;