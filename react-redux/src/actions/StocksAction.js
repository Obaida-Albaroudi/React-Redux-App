import axios from "axios";

export const Start = "Start";
export const Succeeded = "Succeeded";
export const Failed = "Failed";

export const Data = () =>{
    return dispatch =>{
        dispatch ({type: Start });
        axios.get("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=859f6ad4&app_key=6c7669c58be6c09be48fc7cecc5e79a7&results_per_page=20&what=javascript%20developer&content-type=application/json")
        .then(res =>{
            console.log(res)
            dispatch({type: Succeeded, payload:res.data.results});
        })
        .catch(err => {
            dispatch({type: Failed, payload: err.response})
        })
    }
}