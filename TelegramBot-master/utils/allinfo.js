const request = require('request')

var getDateInfo=function(name,callbackfunc) {
    
    const url='https://corona.lmao.ninja/v3/covid-19/all';

    request({url: url, json: true}, function(error, response) {
        if(error) {
            callbackfunc(error,null)
        }
        else {
            var casesinfo = response.body
            
            callbackfunc(null,casesinfo);
        }
    })
}

module.exports.getDateInfo=getDateInfo