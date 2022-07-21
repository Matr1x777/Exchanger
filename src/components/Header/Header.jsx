import React, {useEffect,useState} from "react";
import styled from "styled-components";
import logo from "./../../assets/img/logo.png"


const HeaderBlock = styled.div`
  height: 100px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 100px;
  
  background-color:#18191D;
`
const LogoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`
const LogoName = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 48px;
  
  color: #FC704D;
`
const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Time = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: #FFFFFF;
`


let Header = (props) => {
    const [time, setTime] = useState('')
    let data = new Date();
    useEffect(() => {
        setTimeout(() => {
            setTime(data.getHours() + ":" + data.getMinutes())
        }, 1000)
    })

    return(
        <HeaderBlock>
            <LogoBlock>
                <img src={logo}/>
                <LogoName>OnlineExchanger</LogoName>
            </LogoBlock>
            <DataBlock>
                <Time>{time}</Time>
            </DataBlock>
        </HeaderBlock>
    )
}
export default Header;