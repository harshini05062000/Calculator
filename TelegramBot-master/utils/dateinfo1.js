const request = require('request')

var getDateInfo=function(name,callbackfunc) {
    
    const url='https://api.covid19india.org/data.json';

    request({url: url, json: true}, function(error, response) {
        if(error) {
            callbackfunc(error,null)
        }
        else {
            var casesinfo = response.body.tested
            var respectivedatecases = casesinfo.filter(function(dateinfo) {
                return dateinfo.testedasof == name.reqdate
            })
            if(respectivedatecases.length!=0) {
                callbackfunc(null,respectivedatecases);
            }
        }
    })
}
module.exports.getDateInfo=getDateInfo