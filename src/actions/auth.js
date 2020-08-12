import axios from 'axios';

import { ROOT_URL } from '../config'
import { response } from 'express';

export function SignUp(fields, sucess) {
    console.log(fields);
    return function(dispatch) {
        // axios.post(`${ROOT_URL}/signUp`, fields)
        //     .then(response => {
        //         //do something with response
        //     })
        //     .catch(err => {
        //         if(err) { console.log(err) }
        //     })
    }
}