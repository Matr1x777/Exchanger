import React, {createRef, useState} from "react";
import styled from "styled-components";
import change from "./../../assets/img/changeBtn.png";

const MainPageBlock = styled.div`
  display: flex;
  justify-content: center;
  
  background-color: #2B2C31;
`
const Content = styled.div`
  width: 1100px;
  padding: 80px 0 170px 0;
`
const TitleBlock = styled.label`
  display: block;
  width: 100%;
  padding: 58px 0 34px 0;
  
  border-radius:50px 50px 0 0;
  background-color: #FC704D;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;

  color: #2B2C31;
`
const InteractionBlock = styled.div`
  padding: 66px 84px 34px 84px;
  
  text-align: center;
  background-color:#18191D;
`
const ForDescript = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  margin-bottom: 15px;
`
const Descriptions = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  
  padding-bottom: 1px;

  color: #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
`
const InputsBlock = styled.div`
  height: 50px;
  padding: 20px 30px;
  display: flex;
  
  color: #FFFFFF;
  background-color: #2B2C31;
  border-radius: 5px;
`
const Input = styled.input`
  width: 100%;
  
  color: #FFFFFF;
  font-size: 24px;
  background-color: #2B2C31;
  border: none;
  &:focus {
    outline: none;
  }

`
const Select = styled.select`
  padding: 0 35px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;

  color: #FFFFFF;
  background-color: #2B2C31;
  border: none;
  border-left: 2px solid #FFFFFF;
  border-top: 2px solid #2B2C31;
  border-bottom: 2px solid #2B2C31;
  border-right: 2px solid #2B2C31;
  &:hover{
    background-color: #2B2C31;
  }
`


let MainPage = (props) => {
    const [currency, setCurrency] = useState([{r030: 978, txt: 'Євро', rate: 37.2689, cc: 'EUR', exchangedate: '22.07.2022'}]);
    const [calcResult,setCalcResult] = useState("")

    const inpRef = createRef();
    const fCurrRef = createRef();

    let ListCurrency = () => {
        if (props.actualCourses === 0){
            return(
                <>

                </>
            )
        }else{
            return (
                <>
                    {props.actualCourses.map(e => {
                        return(
                            <option key={Math.random()}>{e.cc}</option>
                        )
                    })}
                </>
            )
        }
    }

    let setActualCurrency = () => {
        let  fCurrValue = fCurrRef.current.value;
        let allValueOfCurrency = props.actualCourses.filter( c => {
            return c.cc === fCurrValue
        })
        setCurrency(allValueOfCurrency)
        setCalcResult("")
        inpRef.current.value = ""
    }
    let doCalc = () => {
        let inpValue = inpRef.current.value
        setCalcResult((inpValue * currency[0].rate).toFixed(2))
    }

    let price = Number(currency[0].rate).toFixed(2)
    return(
        <MainPageBlock>
           <Content>
               <TitleBlock>Currency converter</TitleBlock>
               <InteractionBlock>
                   <ForDescript>
                       <Descriptions>I give:</Descriptions>
                       <Descriptions>1 {currency[0].txt} = {price} ГРН</Descriptions>
                   </ForDescript>
                   <InputsBlock>
                       <Input type="number" placeholder="Введіть кількість" ref={inpRef} onChange={doCalc}/>
                       <Select value={currency[0].cc} ref={fCurrRef} onChange={setActualCurrency} >
                           <ListCurrency/>
                       </Select>
                   </InputsBlock>
                   <img src={change} />
                   <ForDescript>
                       <Descriptions>i will get:</Descriptions>
                   </ForDescript>
                   <InputsBlock>
                       <Input type="number" value={calcResult}/>
                       <Select>
                           <option selected>UAH</option>
                       </Select>
                   </InputsBlock>
               </InteractionBlock>
           </Content>
        </MainPageBlock>
    )
}
export default MainPage;