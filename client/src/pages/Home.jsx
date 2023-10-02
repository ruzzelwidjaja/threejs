import React from 'react'
// Framer Motion is used to create dynamic and visually appealing UI transitions
import { motion, AnimatePresence} from 'framer-motion';
// Valtio is a JavaScript library that provides a minimalistic and efficient way 
// to manage and share global state
import { useSnapshot } from 'valtio';
import state from '../store';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import { CustomButton } from '../components';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        // AnimatePresence helps manage the animation transitions of entering and exiting components
        <AnimatePresence>
            {snap.intro && ( // if snap.intro is truthy ('true'), render below
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./threejs.png' // if file isn't in the current directory, react will look for this file in the 'public' directory
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        />
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text text-purple'>
                                LET'S <br className='xl:block hidden'/> GOO!!! 👊
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create your unique and exclusive shirt with our
                                brand-new 3D customization tool. <strong>Unleash
                                your imagination</strong>{" "} and define 
                                your own style.
                            </p>
                        </motion.div>
                        <CustomButton
                            type="filled"
                            title="Customize It"
                            handleClick={() => state.intro = false} // state.intro provides both read and write access to the state property, allowing you to change it
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm flex-initial"
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home