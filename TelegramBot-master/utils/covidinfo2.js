const request = require('request')

var getAllStateInfo=function(callbackfunc) {
    
    const url='https://api.covid19india.org/state_district_wise.json';

    request({url: url, json: true}, function(error, response) {

        if(error) {
            callbackfunc(error,null)
        }
        else {
        
            callbackfunc(null,response.body)
        }
    })
}
var getAllDistrictInfo=function(state,callbackfunc) {
    
    const url='https://api.covid19india.org/state_district_wise.json';

    request({url: url, json: true}, function(error, response) {

        if(error) {
            callbackfunc(error,null)
        }
        else {
            var districts=response.body[state];
            callbackfunc(null,districts)
        }
    })
}
var getAllCoviddataInfo=function(state,district,callbackfunc) {
    
    const url='https://api.covid19india.org/state_district_wise.json';

    request({url: url, json: true}, function(error, response) {

        if(error) {
            callbackfunc(error,null)
        }
        else {
            console.log(state)
            var statedata=response.body[state];
            var districtdata=statedata.districtData[district]
           
            callbackfunc(null,districtdata)
        }
    })
}

module.exports.getAllCoviddataInfo=getAllCoviddataInfo
module.exports.getAllStateInfo=getAllStateInfo
module.exports.getAllDistrictInfo=getAllDistrictInfo