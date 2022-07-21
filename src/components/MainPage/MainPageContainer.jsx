import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import MainPage from "./MainPage";
import {exchangeAPI} from "../../API/api";


let MainPageContainer = (props) => {
    const [actualCourses,setActualCourses]= useState(0)

    let getCourses = () => {
        exchangeAPI.setCourses().then(result=>{
            setActualCourses(result)
        })
    }
    useEffect(()=>{
        if (actualCourses === 0){
            getCourses()
        }
    },[])

    return(
       <MainPage actualCourses ={actualCourses}

                 getCources={getCourses}

       />
    )
}

let mapStateToProps = (store) => {
    return{

    }
}

export default connect(mapStateToProps,{})(MainPageContainer);