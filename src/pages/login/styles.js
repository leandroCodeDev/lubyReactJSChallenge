import styled from 'styled-components'
import { AiOutlineArrowRight, AiOutlineGithub } from "react-icons/ai";


export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding-top:234pt;
`

export const Button = styled.button`
  background: #FFCE00;
  height: 56pt;
  width: 339pt;
  opacity:100%;
  border-radius: 12pt 12pt 12pt 12pt;


  font-weight: bold;
  color: #030202;
  font-size: 20pt;
  text-align: center;
  font-weight: bold;
  &:hover {
    background: #d5b014;
    height: 58pt;
    width: 341pt;
  }
`


export const Input = styled.input`
  height: 56pt;
  width: 339pt;
  opacity:100%;
  border:#E5E5E5;
  border-radius: 12pt 12pt 12pt 12pt;
  padding:19pt 20pt 16pt 20pt;

  color: #535353;
  font-size: 20pt;
  font-weight: bold;
  margin-bottom:9pt;
`

export const Text = styled.text`
  opacity:100%;
  border:#E5E5E5;
  color: #030202;
  font-size: 20pt;

  
  font-weight: bold;
  
`


export const IconGitHub = styled(AiOutlineGithub)`
  color:#FFCE00;
  height: 96pt;
  width: 98pt;
  margin-bottom:48pt;
`

export const IconRigthArrow = styled(AiOutlineArrowRight)`
  color:#000000;
  vertical-align: text-bottom;
  font-weight: bold;
`