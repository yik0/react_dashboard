import React, { useState } from "react";
import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${'' /* box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19); */}
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgb(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  font-family: "Poppins";
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: #03C9D7;
  font-weight: 500;
  text-decoration: none;
  font-family: "Poppins";
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 10px 15px;
  ${'' /* border-bottom: 1.4px solid transparent; */}
  transition: all 200ms ease-in-out;
  font-size: 12px;
  font-family: "Poppins";
  transition: all 200ms ease-in-out;
  font-size: 13px;
  border-radius: 100px 100px 100px 100px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #334155;
    padding: 10px 22px;
  }
`;

export const SubmitButton = styled.button`
  width: 80%;
  margin: 0 auto;
  display: block;
  padding: 11px 15px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  font-family: "Poppins";
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #03C9D7;
  text-align: center;
  position: relative;
  bottom: 0;

  &:hover {
    filter: brightness(1.03);
    bottom: 5px;
    ${'' /* box-shadow: 0px 5px 5px #BEFBFF; */}
    letter-spacing: 1.5px;
  }
`;