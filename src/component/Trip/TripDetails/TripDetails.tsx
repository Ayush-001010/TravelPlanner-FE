import React from 'react';
import type ITripDetails from './ITripDetails';
import { useTripContext } from '../Trip';

const TripDetails: React.FC<ITripDetails> = () => {
    const { openFormHandler } = useTripContext();
    return (
        <div>
            <h1 onClick={() => openFormHandler("Places")}>Hello World</h1>
        </div>
    )
};

export default TripDetails;