const request = require('request')

var getcoun=function(callbackfunc) {
    
    const url='https://api.covid19api.com/countries';

    request({url: url, json: true}, function(error, response) {
        if(error) {
            return callbackfunc(error,null)
        }
        else {
            var data = response.body
            return callbackfunc(null, data);
        }
    })
}
module.exports.getcoun = getcoun