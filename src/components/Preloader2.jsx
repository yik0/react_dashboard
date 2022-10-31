import React, { useEffect, useState } from 'react';
import { SiShopware } from 'react-icons/si';
import Lottie from 'react-lottie';
import * as location from '../pages/loader/96674-loader.json';
import * as reactNative from '../pages/loader/83300-react-native.json';
import { useStateContext } from '../contexts/ContextProvider';

import '../pages/loader/splashScreen.css';

// Lottie animation
const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true, 
  animationData: reactNative.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Preloader2 = () => {
  const [data, setData] = useState([]);
  // Preload func
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);
  // Current mode func
  const { setCurrentMode, currentMode, currentColor } = useStateContext();

  // Store current mode
  useEffect(() => {
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, []);

  // Preloader
  useEffect(() => {
    setTimeout(() => {
        setLoading(true);

        setTimeout(() => {
          setCompleted(true);
        },3000);
    }, 3000);
  }, []);

  return (
    <>
    { loading && !completed && (
      <div className={currentMode === 'Dark' ? 'dark' : ''} style={{ overflow: 'hidden' }}>
        <div className="w-screen h-screen relative nav-item flex justify-center items-center overflow-hidden splashCon" style={{ background: `${currentColor}` }}>
          <div className="block text-center text-white">
            <div className="block mx-auto mb-4 pt-2 bg-white rounded-full w-40 h-40 splashLogo">
              <Lottie options={defaultOptions2}
                height={150}
                width={150}
              />
            </div>
            <div className="flex flex-wrap relative splashTextCon">
              <h1 className="text-white text-6xl font-bold mb-3 mr-2 drop-shadow-2xl tracking-wide">React</h1>
            </div>
          </div>
        </div>
      </div>
      )
    }
    {
      !loading && (
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="bg-white dark:bg-slate-700 w-screen h-screen fixed nav-item top-0 right-0 flex justify-center items-center overflow-hidden PrelaodCon">
          <Lottie options={defaultOptions}
            height={300}
            width={300}
          />
        </div>
      </div>
      )
    }
    </>
  )
}

export default Preloader2