import React, { useState } from 'react';
import type ISideNavBar from './ISideNavBar';
import CommonConfig from '../../services/CommonConfig';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const SideNavBar: React.FC<ISideNavBar> = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.4 }
            }}
            className={`relative sticky top-0 h-screen shrink-0 overflow-hidden border-r border-white/10 bg-gradient-to-br from-[#003566] via-[#002855] to-[#001d3d] text-[#d7e3fc] shadow-2xl backdrop-blur-sm transition-all duration-500 ease-in-out ${collapsed ? 'w-26' : 'w-72'
                }`}
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5" />

            <div className="relative flex h-full flex-col p-4">
                <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <motion.div
                        layout
                        className="flex items-center gap-3 overflow-hidden"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {!collapsed && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 text-lg font-bold shadow-lg ring-2 ring-white/20"
                                >
                                    <span className="relative z-10">TL</span>
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-white/20"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.3, 0, 0.3]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        )}

                        <AnimatePresence mode="wait">
                            {!collapsed && (
                                <motion.p
                                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="m-0 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-2xl font-bold tracking-wide text-transparent"
                                >
                                    {CommonConfig.companyTitle}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.button
                        type="button"
                        onClick={() => setCollapsed((prev) => !prev)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 active:bg-white/30"
                        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    >
                        <motion.i
                            animate={{ rotate: collapsed ? 180 : 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className={`bi ${collapsed ? 'bi-chevron-right' : 'bi-chevron-left'} text-lg`}
                        />
                    </motion.button>
                </div>

                {/* Navigation Section */}
                <motion.nav
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    className="flex-1 space-y-2 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
                >
                    {CommonConfig.sideNavBarConfig.map((item) => (
                        <motion.div
                            key={item.link}
                            variants={{
                                hidden: { opacity: 0, x: -20, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15
                                    }
                                },
                            }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <NavLink
                                to={item.link}
                                className={({ isActive }) =>
                                    `!no-underline  group relative flex items-center gap-4 overflow-hidden rounded-2xl px-3 py-3.5 text-sm font-medium transition-all duration-300 ${isActive
                                        ? 'bg-gradient-to-r from-white to-blue-50 text-[#003566] shadow-xl shadow-blue-500/20 ring-1 ring-white/20'
                                        : 'text-[#d7e3fc]/70 hover:bg-white/10 hover:text-white hover:shadow-lg'
                                    } ${collapsed ? 'justify-center px-3' : ''}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {/* Active indicator bar */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-blue-400 to-blue-600"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }}
                                            />
                                        )}

                                        <motion.i
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className={`${item.icon} relative z-10 text-xl ${isActive ? 'text-[#003566]' : 'text-[#d7e3fc]'
                                                }`}
                                        />

                                        <AnimatePresence mode="wait">
                                            {!collapsed && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -10 }}
                                                    transition={{ duration: 0.2, delay: 0.05 }}
                                                    className="relative z-10 truncate text-black"
                                                >
                                                    {item.title}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>

                                        {/* Hover glow effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-purple-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        />
                                    </>
                                )}
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.nav>

                {/* Footer - Optional decorative element */}
                <AnimatePresence mode="wait">
                    {!collapsed && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
                        >
                            <p className="m-0 text-xs text-white/60">
                                <i className="bi bi-info-circle mr-2" />
                                Version 1.0.0
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.aside>
    )
};

export default SideNavBar;