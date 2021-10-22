import styled from 'styled-components'
import { IoExitOutline } from "react-icons/io5";


export const Content = styled.div`
    width: 100%;
    height: 120pt;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #1F1F1F;
    padding: 10pt 19pt 0 12pt;
`

export const NameUser = styled.text`
  opacity:100%;
  color: #FFFFFF;
  font-size: 17pt;
  font-weight: bold;
  text-align: left;
  display: flex;
`



export const ExitText = styled.text`
  opacity:100%;
  color: #FFFFFF;
  height: 18pt;
  font-size: 17pt;
  display: flex;
  justify-content: space-between; 
  &:hover{
      cursor: pointer;
      border-bottom: #fff solid 1pt;
  }
`

export const IconExit = styled(IoExitOutline)`
    color: #D03434;
    margin-left:  5pt;
`