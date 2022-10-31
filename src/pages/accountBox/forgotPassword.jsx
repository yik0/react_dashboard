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

export function ForgotPassword(props) {
  const { currentColor } = useStateContext();
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="password" placeholder="New Password" />
        <Marginer direction="vertical" margin="0.65em" />
        <Input type="password" placeholder="Confirm New Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton 
        type="button" 
        onClick={switchToSignin}
        style={{ background: `${currentColor}` }}
      >
      Confirm
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}