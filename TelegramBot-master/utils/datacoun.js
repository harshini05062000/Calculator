const request = require('request')

var getcoundata=function(coun,callbackfunc) {
    
    const url='https://api.covid19api.com/total/country/' + coun;

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
module.exports.getcoundata = getcoundata