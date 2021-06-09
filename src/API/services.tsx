import axios from 'axios';

let BASE_URL = 'http://baetotiapi.cylsys.com/api';


const AuthServices = {
    UserLogin: async (formData) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(formData);
        console.log(`${BASE_URL}/account/login`);
        const data = await axios.post(`${BASE_URL}/account/login`, formData, config);
        return data;
    },
    UpdateProfile: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/account/updateprofile`);
        const data = await axios.post(`${BASE_URL}/account/updateprofile`, body, config);
        return data;
    },
    Uploadproviderdoc: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/account/uploadproviderdoc`);
        const data = await axios.post(`${BASE_URL}/account/uploadproviderdoc`, body, config);
        return data;
    },
    Addupdateitems: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/store/addupdateitems`);
        const data = await axios.post(`${BASE_URL}/store/addupdateitems`, body, config);
        return data;
    },
    Getitemcategory: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/store/addupdateitems`);
        const data = await axios.post(`${BASE_URL}/store/getitemcategory`, body, config);
        return data;
    },
    Getitemsubcategory: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/store/getitemsubcategory`);
        const data = await axios.post(`${BASE_URL}/store/getitemsubcategory`, body, config);
        return data;
    },
    Getstoreitems: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/store/getstoreitems`);
        const data = await axios.post(`${BASE_URL}/store/getstoreitems`, body, config);
        return data;
    } ,      
    Getstorerating: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/store/getstoreitems`);
        const data = await axios.post(`${BASE_URL}/store/getstorerating`, body, config);
        return data;
    } ,      
    Getstoreorders: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/store/getstoreorders`);
        const data = await axios.post(`${BASE_URL}/store/getstoreorders`, body, config);
        return data;
    } ,
    Getdriverlist: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/store/getdriverlist`);
        const data = await axios.post(`${BASE_URL}/store/getdriverlist`, body, config);
        return data;
    }     ,
    Getcategoryproducts: async (body) => {
        const config = {
            headers: {'Content-Type': `application/json`},
        };
        console.log(body);
        console.log(`${BASE_URL}/customer/getcategoryproducts`);
        const data = await axios.post(`${BASE_URL}/customer/getcategoryproducts`, body, config);
        return data;
    },       
    

}
export default AuthServices;
