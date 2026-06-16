import React, { useState } from 'react';
import type ISideNavBar from './ISideNavBar';
import CommonConfig from '../../services/CommonConfig';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type IUserInterface from '../../services/Interfaces/UserInterface';

const SideNavBar: React.FC<ISideNavBar> = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { userName } = useSelector((state: any) => state.userDetails as IUserInterface);
    const collapseHandler = () => setCollapsed((prev) => !prev);

    return (
        <div className={`relative sticky top-0 h-screen shrink-0 overflow-hidden border-r border-[#3a4048] bg-[#1f2428] text-[#adb5bd] shadow-2xl transition-all duration-500 ${collapsed ? "w-[95px]" : "w-3xs"}`}>
            <div className={"relative flex flex-col" + (collapsed ? " items-center py-4 border-b border-[#3a4048] mb-6" : " p-4")}>
                <div>
                    <p className="m-0 mb-2 flex cursor-pointer items-center text-lg font-bold justify-end" onClick={collapseHandler}>
                        <i className="bi bi-box-arrow-left bg-[#ced4da] flex justify-center items-center h-8 w-8 rounded-full text-[#212529]" />
                    </p>
                </div>
                {!collapsed && (<div className="mb-6 flex items-center justify-between gap-3 border-b border-[#3a4048] pb-4">
                    <div className="flex items-center gap-3 overflow-hidden rounded-lg bg-[#2a2f36] p-2 w-full">
                        <p className="m-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#ced4da] p-2 text-lg font-bold text-[#212529] shadow-lg">
                            <i className="bi bi-person" />
                        </p>
                        <div className="flex w-full flex-col items-center justify-center">
                            <p className="m-0 text-[#f1f3f5]">{userName}</p>
                            <div className="mt-1 flex w-full justify-between">
                                <p className="m-0 text-[9px] text-[#868e96]">Total Trip : 0</p>
                                <p className="m-0 text-[9px] text-[#868e96]">Upcoming Trip : 0</p>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className={ "flex flex-col gap-4" + (collapsed ? " items-center" : "") }>
                {CommonConfig.sideNavBarConfig.map(({ link, icon, title }, index) => (
                    <NavLink to={link} className={"  flex items-center justify-start gap-2 m-0 !no-underline  px-4 py-2 hover:bg-[#343a40] text-shadow-lg " + (title === "Dashboard" ? "bg-[#343a40] " + ( collapsed ? "rounded-full": ""): "")} key={index}>
                        <i className={icon + " text-lg text-[#adb5bd]"} />
                        {!collapsed && <p className="m-0 text-lg text-[#e9ecef]">{title}</p>}
                    </NavLink>
                ))}
            </div>
            <div className="absolute bottom-0 w-full border-t border-[#3a4048] p-4 text-center">
                <p className="m-0 bg-[#3a4048] rounded-lg w-full h-10 flex items-center justify-center p-2">{collapsed ? CommonConfig.companyTitle.split(" ")[0][0] +  CommonConfig.companyTitle.split(" ")[1][0]: CommonConfig.companyTitle}</p>
            </div>
        </div>
    )
};

export default SideNavBar;