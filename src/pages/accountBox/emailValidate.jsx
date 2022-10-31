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

export function EmailValidate(props) {
  const { currentColor } = useStateContext();
  const { switchToSignin, switchToForgot } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#"  className="pointer-events-none">Please enter your email to validate?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton 
        type="button" 
        onClick={switchToForgot}
        style={{ background: `${currentColor}` }}
      >
      Send
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?{" "}
        <BoldLink href="#" onClick={switchToSignin} style={{ color: `${currentColor}` }}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}