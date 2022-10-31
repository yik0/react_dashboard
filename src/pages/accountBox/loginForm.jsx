import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { MdCheckCircle, MdCancel } from 'react-icons/md';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';
import { useStateContext } from '../../contexts/ContextProvider';
import '../loader/splashScreen.css';
import { setUserSession } from "../../Utils/Common";

export function LoginForm(props) {
  const { currentColor } = useStateContext();

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const default_data = await axios(`https://jsonplaceholder.typicode.com/users`);
  //     for(const val of default_data.data) {
  //       console.log(val.email);
  //   }
  //   };
  //   fetchData();
  // },[])

  // Test login func
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({username: "", password: ""});

  // Default user info
  const [defaultUser, setDefaultUser] = useState({
    defaultUser: "", 
    defaultPassword: "",
    defaultUserId: "",
    defaultName: "",
    defaultEmail: "",
    isAdmin: true
  });
  // const jsonURL= 'https://jsonplaceholder.typicode.com/users';
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const default_data = await axios(`${jsonURL}`);
  //     if(default_data.status == 200) {
  //       // for(const val of default_data.data) {
  //       //   setDefaultUser(prevDefaultUser => ({
  //       //     ...prevDefaultUser,
  //       //     defaultUser: val.username,
  //       //     defaultPassword: val.username,
  //       //     defaultUserId: val.id,
  //       //     defaultName: val.name,
  //       //     defaultEmail: val.email,
  //       //   }));
  //       // }
  //       axios.post('http://localhost:4000/users/signin', {
  //         default: default_data.data
  //       })
  //     }
  //   };
  //   fetchData();
  // },[setDefaultUser])

  // console.log('response >>>', defaultUser);
  const [dUser, setDUser] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      const default_data = await axios('https://jsonplaceholder.typicode.com/users');
      if(default_data.status == 200) {
        setDUser(default_data.data)
      }
    };
    fetchData();
  },[setDUser])

  // Submit handle func
  const submitHandler = e => {
    e.preventDefault();
    // console.log('Details >>>', details);
    // console.log('det >>>', defaultUser);
    setError(null);
    setLoading(true);
    setDone(false);
      
    setTimeout(() => {
        axios.post('http://localhost:4000/users/signin', {
          username: details.username,
          password: details.password,
          default: dUser
          // Default user info
          // defaultUser: defaultUser.defaultUser,
          // defaultPassword: defaultUser.defaultPassword,
          // defaultUserId: defaultUser.defaultUserId,
          // defaultName: defaultUser.defaultName,
          // defaultEmail: defaultUser.defaultEmail,
          // isAdmin: true
        }).then(response => {
            // console.log('response >>>', response);
            setLoading(false);
            setDone(true);
            // Redirect to dashboard
            setTimeout(() => {
              console.log('logged in');
              setUserSession(response.data.token, response.data.user);
              window.location.reload(false);
            }, 1500);

        }).catch(error => {
            // console.error('response >>>', error);
            setLoading(false);
            // Error message
            if (error.response.status === 401 || error.response.status === 400) {
              setError(error.response.data.message);
            } else {
              setError('Something went wrong with this page.');
            }

        })
    },1700);
  }

  // Switch box func
  const { switchToSignup, switchToValidate } = useContext(AccountContext);


  // const handleClick = () => {
  //   setLoading(false);

  //     setTimeout(() => {
  //       setLoading(true);
  //       setDone(true);

  //       setTimeout(() => {
  //         setLogin(true);
  //       }, 1500);
  //     }, 2000);
  // }
  

  return (
    <BoxContainer>

    {/* <div className="my-3 px-3 py-2 rounded-lg bg-green-100 border border-green-400 text-green-400 w-full">
    <h4 className="text-sm font-semibold tracking-normal">Yor are logged in!</h4>
    <a href="#" className="decoration-1">Go to Home</a>
    </div> */}
    <>
    {
      done ?
        <div className="my-3 px-6 py-2 rounded-lg w-full success-msg fadeOutAnimated2">
          <div className="flex justify-start relative items-center">
            <MdCheckCircle className="text-5xl pr-5" />
            <div className="block relative">
              <h4 className="text-base font-semibold tracking-wide">Success</h4>
              <h4 className="text-sm font-normal tracking-wide text-gray-600">You are logged in!</h4>
              <h4 className="text-sm font-normal tracking-wide text-gray-600">Redirecting to home...</h4>
            </div>
          </div>
        </div>
      :
      <div></div>
    }
    </>

    {error && 
      <div className="my-3 px-6 py-2 rounded-lg w-full fadeOutAnimated error-msg">
        <div className="flex justify-start relative items-center">
          <MdCancel className="text-5xl pr-5" />
          <div className="block relative">
            <h4 className="text-base font-semibold tracking-wide">Error</h4>
            <h4 className="text-sm font-normal tracking-wide text-gray-600">{error}</h4>
          </div>
        </div>
      </div>
    }
    
    <form className="w-full" onSubmit={submitHandler}>
      <FormContainer>
        <Input
          type="text"
          placeholder="Username"
          id="username"
          autoComplete="off"
          onChange={e => setDetails({...details, username: e.target.value})}
          value={details.username}
        />
        <Marginer direction="vertical" margin="0.6em" />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          onChange={e => setDetails({...details, password: e.target.value})}
          value={details.password}
          focus="#fff"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={8} />
      <MutedLink href="#" className="float-right" onClick={switchToValidate}>Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="2em" />
      <SubmitButton 
        type="submit"
        // onClick={handleClick}
        className={loading ? 'confirm_transfer transfer_loading' : 'confirm_transfer'}
        style={{ background: `${currentColor}` }}
      >
      <span className="transfer_text text-center">Login</span>
      </SubmitButton>
      </form>
      <Marginer direction="vertical" margin="0.8em" />
      <MutedLink href="#">
        Didn't have an account? &nbsp;
        <BoldLink href="#" onClick={switchToSignup} style={{ color: `${currentColor}` }}>
          Signup
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="0.8em" />

    </BoxContainer>
  );
}