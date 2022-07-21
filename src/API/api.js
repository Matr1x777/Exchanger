import axios from "axios";

export const exchangeAPI ={
    setCourses(){
        return axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(data => {
            return data.data
        })
    }
}