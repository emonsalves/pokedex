// "use strict";

// var options = {
//   method: 'POST',
//   url: 'http://192.168.0.60:50001/b1s/v1/Login',
//   headers:
//   {
//     'postman-token': '352ed32d-8452-b686-ac6a-5cf8c11f2c64',
//     'cache-control': 'no-cache',
//     'content-type': 'application/json'
//   },
//   body:
//   {
//     CompanyDB: 'PRDCOMKAYSER_20190523',
//     UserName: 'manager2',
//     Password: '123456'
//   },
//   json: true
// };


// const axios = require('axios').default;
// import {axios} from 'axios';
import { request } from 'axios';

//Connect to Service Layer
let Connect = function () {
    return new Promise(function (resolve, reject) {
        const options = {
            method: "POST",
            baseURL: "http://192.168.0.60",
            port: 50001,
            url: "/b1s/v2/Login",
            data: {
                UserName: "manager2",
                Password: "123456",
                CompanyDB: "PRDCOMKAYSER_20190523"
            }
        }

        request(options).then((response) => {
                console.log(`SL Response: is ${response.status} - ${response.statusText}`)
                
    })
})}

