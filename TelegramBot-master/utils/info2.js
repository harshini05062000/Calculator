const req = require('request')
var det= function(start,end,callbackfunc) {
var url = 'https://api.covid19api.com/country/india?from=' + start + '&amp;to=' + end;
req({url:url,json:true},function(error,response) {
        if(error) {
            return callbackfunc(error,null)
        }
        else {
                var data = response.body;
                var obj=[];

                var i;
                for (i = 0; i < data.length; i++) { 
                obj.push({
                    date:data[i].Date.replace('T00:00:00Z',''),
                    cases:data[i].Confirmed,
                    deaths:data[i].Deaths,
                    Active:data[i].Active,
                    Recovered:data[i].Recovered
                });
                }
            return callbackfunc(null,obj);
        }
    })
}
module.exports.det = det