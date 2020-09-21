const request = require('request')

var twoStatesInfo=function(name,callbackfunc) {
    
    const url='https://api.covid19india.org/raw_data.json';

    request({url: url, json: true}, function(error, response) {
        if(error) {
            callbackfunc(error,null)
        }
        else {
            var casesinfo = response.body.raw_data
            var respectivedatecases = casesinfo.filter(function(dateinfo) {
                return dateinfo.statecode == name.statename
            })
            if(respectivedatecases.length!=0) {
                callbackfunc(null,respectivedatecases);
            }
        }
    })
}
module.exports.twoStatesInfo=twoStatesInfo;