import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useStateContext } from '../../contexts/ContextProvider';

export function SignupForm(props) {
  const { currentColor } = useStateContext();
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Marginer direction="vertical" margin="0.6em" />
        <Input type="email" placeholder="Email" />
        <Marginer direction="vertical" margin="0.6em" />
        <Input type="password" placeholder="Password" />
        <Marginer direction="vertical" margin="0.6em" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton 
        type="submit"
        style={{ background: `${currentColor}` }}
      >Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?{" "}
        <BoldLink href="#" onClick={switchToSignin} style={{ color: `${currentColor}` }}>
          Signin
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="0.8em" />
    </BoxContainer>
  );
}