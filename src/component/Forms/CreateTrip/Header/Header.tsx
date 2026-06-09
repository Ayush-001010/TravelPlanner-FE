import React from 'react';
import type IHeader from './IHeader';

const Header: React.FC<IHeader> = () => {
    return (
        <div className="mt-2 flex items-center justify-center flex-col gap-1">
            <p className="text-4xl font-eater font-semibold text-[#abc4ff] text-shadow-xs text-shadow-[#0466c8]">Create Your Trip</p>
            <p className="text-center text-xs text-[#014f86] font-medium">
                You’re only one step away from creating your personalized itinerary and
                unlocking unforgettable trips. Start now and make your travel dreams happen!
            </p>
        </div>
    )
};

export default Header;