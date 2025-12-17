//Import playwright module
import {test,expect} from '@playwright/test'
import {getPOSTAPIRequestBody} from '../../src/utils/APIHelper';

import {faker} from '@faker-js/faker';
import tokenAPIRequest from '../../test-data/api_requests/Token_API_Request.json'
import putAPIRequest from '../../test-data/api_requests/PUT_API_Request.json'
import patchAPIRequest from '../../test-data/api_requests/PATCH_API_Request.json'


test.use({
    baseURL:process.env.BASE_API_URL,
})
test("Create DELETE API Request using playwright & typescript",async({request})=>
{  
  const firstName=faker.person.firstName();
  const lastName=faker.person.lastName();
  const totalPrice=faker.number.int({min:1000,max:10000});

 const postAPIRequest=await  getPOSTAPIRequestBody(firstName,lastName,totalPrice,
    true,"breakfast","2025-01-25","2025-01-27")

//Create POST API Request
 const postAPIResponse=await request.post(`/booking`,{data:postAPIRequest});

 //Print JSON API response
 const jsonPOSTAPIResponse= await postAPIResponse.json();
 console.log('POST API Response:'+JSON.stringify(jsonPOSTAPIResponse,null,2));

 //Validating api response
expect(postAPIResponse.status()).toBe(200);
expect(postAPIResponse.statusText()).toBe('OK');
expect(postAPIResponse.headers()['content-type']).toContain('application/json');

//Validate property/key names
expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

//validate API response body
expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);

expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-25');
expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-27');

//GET API request
const bookingid= jsonPOSTAPIResponse.bookingid;
console.log('bookingid:'+bookingid);

const getAPIResponse= await request.get(`/booking/${bookingid}`);

//validate status code,status text
expect(getAPIResponse.status()).toBe(200);
expect(getAPIResponse.statusText()).toBe('OK');

//Print GET API response
const getAPIJSONresponse= await getAPIResponse.json();
console.log('GET API Response:'+JSON.stringify(getAPIJSONresponse,null,2));

//Generate Token
const tokenAPIResponse=await request.post(`/auth`,{data:tokenAPIRequest});

//validate status code,status text
expect(tokenAPIResponse.status()).toBe(200);
expect(tokenAPIResponse.statusText()).toBe('OK');

const tokenAPIJSONResponse=await tokenAPIResponse.json();
const token=tokenAPIJSONResponse.token;
console.log('Token:'+token);


//create Patch API Request
const patchAPIResponse=await request.patch(`/booking/${bookingid}`,{
    headers:{
        "Content-Type":"application/json",
        "Cookie":`token=${token}`
    },
    data:patchAPIRequest,
})
//validate status code,status text
expect(patchAPIResponse.status()).toBe(200);
expect(patchAPIResponse.statusText()).toBe('OK');

//Print GET API response
const patchAPIJSONresponse= await patchAPIResponse.json();
console.log('Patch API Response:'+JSON.stringify(patchAPIJSONresponse,null,2));


//create DELETE API Request
const deleteAPIResponse=await request.delete(`/booking/${bookingid}`,{
    headers:{
        "Content-Type":"application/json",
        "Cookie":`token=${token}`
    },
    
})
//validate status code,status text
expect(deleteAPIResponse.status()).toBe(201);
expect(deleteAPIResponse.statusText()).toBe('Created');

console.log('DELETE API Response:'+await deleteAPIResponse.body());
});