import React, { useEffect } from 'react';
import { SiShopware } from 'react-icons/si';
import { useStateContext } from '../contexts/ContextProvider';

import '../pages/loader/splashScreen.css';

const Preloader = () => {
  // Current mode func
  const { setCurrentMode, currentMode } = useStateContext();

  // Store current mode
  useEffect(() => {
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="bg-white dark:bg-slate-700 w-screen h-screen relative nav-item flex justify-center items-center overflow-hidden">
          <div className="block text-center text-cyan-200">
            <SiShopware className="block mx-auto mb-3 text-8xl splashLogo" />
            <div className="flex flex-wrap relative splashTextCon">
              {/* <h1 className="text-slate-700 dark:text-white text-3xl font-bold mb-3 mr-2 splashText splashText1">Welcome</h1>
              <h1 className="text-slate-700 dark:text-white text-3xl font-bold mb-3 mr-2 splashText splashText2">To</h1> */}
              <h1 className="text-slate-700 dark:text-white text-5xl font-bold mb-3 mr-2 splashText splashText3">React</h1>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Preloader