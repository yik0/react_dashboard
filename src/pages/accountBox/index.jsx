import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import { EmailValidate } from "./emailValidate";
import { ForgotPassword } from "./forgotPassword";
import '../loader/splashScreen.css';
import { useStateContext } from '../../contexts/ContextProvider';

const BoxContainer = styled.div`
  width: 100%;
  max-width: 550px;
  min-height: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  border: 2px solid;
  position: relative;
  overflow: hidden;
  font-family: "Poppins";
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  font-family: "Poppins";
`;

const BackDrop = styled(motion.div)`
  width: 200%;
  height: 520px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(5deg);
  top: -290px;
  right: -70px;
  font-family: "Poppins";
  z-index: 3;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
`;

const HeaderText = styled.h2`
  font-size: 33px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-family: "Poppins";
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  font-family: "Poppins";
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  font-family: "Poppins";
`;

const backdropVariants = {
  expanded: {
    width: "500%", // default = 233%
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(0deg)",
  },
  collapsed: {
    width: "200%", // default = 160%
    height: "520px",
    borderRadius: "50%",
    transform: "rotate(5deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  const { currentColor, currentMode } = useStateContext();

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const switchToValidate = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("validate");
    }, 400);
  };

  const switchToForgot = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("forgotPassword");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin, switchToValidate, switchToForgot };


    // Login
    const adminUser = {
      username: "admin",
      password: "admin"
    }
  
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
  
    const Login = details => {
      console.log(details);
    }
  
    const Logout = () => {
      console.log('Logout');
    }
    // En login

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="w-screen h-screen dark:bg-main-dark-bg">
        <div className="pt-24 rounded-3xl flex justify-center items-center fadeAnimated">
        <AccountContext.Provider value={contextValue}>
          <BoxContainer 
            style={{ 
              borderColor: `${currentColor}`, 
              boxShadow: `0px 3px 1px 4px ${currentColor}75`, 
            }}
          >
            <TopContainer>
              <BackDrop
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
                style={{ background: `${currentColor}` }}
              />
              {active === "signin" && (
                <HeaderContainer>
                  <HeaderText>Welcome</HeaderText>
                  <HeaderText>Back</HeaderText>
                  <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>
              )}
              {active === "signup" && (
                <HeaderContainer>
                  <HeaderText>Create</HeaderText>
                  <HeaderText>Account</HeaderText>
                  <SmallText>Please sign-up to continue!</SmallText>
                </HeaderContainer>
              )}
              {active === "validate" && (
                <HeaderContainer>
                  <HeaderText>Forgot</HeaderText>
                  <HeaderText>Password</HeaderText>
                  <SmallText>Please enter your email to continue!</SmallText>
                </HeaderContainer>
              )}
              {active === "forgotPassword" && (
                <HeaderContainer>
                  <HeaderText>New</HeaderText>
                  <HeaderText>Password</HeaderText>
                  <SmallText>Please enter your new password to continue!</SmallText>
                </HeaderContainer>
              )}
            </TopContainer>
            {/* Container switcher */}
            <InnerContainer>
              {active === "signin" && <LoginForm />}
              {active === "signup" && <SignupForm />}
              {active === "validate" && <EmailValidate />}
              {active === "forgotPassword" && <ForgotPassword />}
            </InnerContainer>
          </BoxContainer>
        </AccountContext.Provider>
        </div>
      </div>
    </div>
  );
}