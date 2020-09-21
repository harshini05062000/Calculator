const request = require('request')

var getCovidInfo=function(country,callbackfunc){
    var country=country;
    //var date = name.date;
    
    console.log(country)
    const url='https://api.covid19api.com/dayone/country/'+country+'/status/confirmed';
    request({url:url,json:true},function(error,response) {
        if(error){
            console.log(error)
        }
        else{
            var data = response.body
            var date = data[0].Date
            callbackfunc(null,date)
        }
    })
}

module.exports.getCovidInfo=getCovidInfo