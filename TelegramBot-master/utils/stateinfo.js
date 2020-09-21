const request = require('request')

var getStateInfo=function(name,callbackfunc) {
    
    const url='https://api.covid19india.org/data.json';

    request({url: url, json: true}, function(error, response) {
        if(error) {
            callbackfunc(error,null)
        }
        else {
            var casesinfo = response.body.statewise
            var respectivedatecases = casesinfo.filter(function(dateinfo) {
                return dateinfo.statecode == name.statename
            })
            if(respectivedatecases.length!=0) {
                callbackfunc(null,respectivedatecases);
            }
        }
    })
}
module.exports.getStateInfo=getStateInfo
