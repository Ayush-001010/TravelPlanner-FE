import React from 'react';
import type IDashboard from './IDashboard';
import { Button } from 'antd';
import CreateTrip from '../Forms/CreateTrip/CreateTrip';

const Dashboard: React.FC<IDashboard> = () => {
    const [openCreateTripModal, setOpenCreateTripModal] = React.useState(false);

    const handleCreateTrip = () => {
        setOpenCreateTripModal(true);
    };
    return (
        <div>

            <div>
                <p>Up comming Journey</p>
                <Button onClick={handleCreateTrip}>
                    Create Trip
                </Button>
                <Button>
                    Join Trip
                </Button>
                <CreateTrip open={openCreateTripModal} closeFunc={() => setOpenCreateTripModal(false)} />
            </div>
        </div>
    )
};

export default Dashboard;