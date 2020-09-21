const TelegramBot = require('node-telegram-bot-api');
var chalk = require('chalk');
const colors = require('colors');
var stateinfo = require('./utils/stateinfo.js');
var val = require('validator')
var dateinfo = require('./utils/dateinfo.js');
var coun = require('./utils/coun.js');
var datacoun = require('./utils/datacoun.js');
var covidinfo = require('./utils/covidinfo1.js');
var dateinfo1 = require('./utils/dateinfo1.js');
var info1 = require('./utils/info.js');
var info2 = require('./utils/info2.js');
var twostates = require('./utils/two_states.js');
var covidinfo2 = require('./utils/covidinfo2.js');
var allinfo = require('./utils/allinfo.js');
require('date-utils');

const token = '1268495463:AAGF2n-l6odNR7mpOGB2yEBeYJwaYSwJlrM'
const bot = new TelegramBot(token, {polling: true});

bot.on('message',function(msg){
    
    var chatid = msg.chat.id;
    var cu = msg.text
    var info = cu.split('/');
   
    if(cu == '/start') {
        bot.sendMessage(chatid,
        '1.To know the details of covid 19 on particular date: \n' + "      <b><u>a/DD-MM-YYYY</u>   e.g.. a/03-05-2020</b>" + '\n' + 
        '2.To know the details of Covid 19 in a particular state:\n' + '      <b><u>b/StateCode</u>  e.g.. b/AP</b>\n' +
        '3.To know the all effected countries of Covid 19:\n' + '      <b><u>c</u>  e.g.. c</b>\n ' +
        '4.To display all case details for the given country :\n' + '      <b><u>d/Country name</u>  e.g.. d/India\</b>\n ' + 
        '5.To know the first covid case in particular country :\n' +  '      <b><u>e/Country name</u>  e.g.. e/India</b>\n ' +
        '6.To know the test results of Covid 19 on a particular date :\n' + '      <b><u>f/DD-MM-YYYY</u>  e.g.. f/03-05-2020\n</b> ' +
        '7.To know the Confirmed covid 19 cases in India from the given date range :\n' +'      <b><u>g/YYYY-MM-DD:YYYY-MM-DD</u>  e.g.. g/2020-03-02:2020-03-05</b>\n ' +
        '8.To know all case types of Covid 19 in India from the given range :\n' + '      <b><u>h/YYYY-MM-DD:YYYY-MM-DD</u>  e.g.. h/2020-03-02:2020-03-05</b>\n ' +
        '9.To display Ap and Telangana state detected Covid 19 case details :\n' +  '      <b><u>i/Statecode</u>  e.g.. i/AP</b>\n ' +
        '10.To display covid 19 cases detail for selected district in the selected state :\n' +  '      <b><u>j/District name/State name</u>  e.g.. j/Guntur/Andhra Pradesh</b>\n'+
        '11.To display World Wide Info of COvid-19"\n' + '        <b><u>k</u> e.g.. k </b>\n',{ parse_mode: "HTML" }).then(() => {
  });
    }
    else if(cu == '/symptoms') {
        bot.sendPhoto(chatid,'https://i.ytimg.com/vi/7zzfdYShvQU/maxresdefault.jpg');
    }
    else if(cu == '/about') {
        bot.sendVideo(chatid,'https://cdn.dribbble.com/users/1734000/screenshots/11165398/media/96ed06f33f696eaabd5efcd79b31f5bf.gif',{caption : "Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV). A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans."} );
    }
    else if(cu == '/precautions') {
        bot.sendVideo(chatid,'https://chungchenghighyishun.moe.edu.sg/qql/slot/u496/Attachment%201%20Wuhan%20Virus%20Precautionary%20Measures.gif',{caption:'1.Clean your hands often. Use soap and water, or an alcohol-based hand rub.\n2.Maintain a safe distance from anyone who is coughing or sneezing.\n3.Don’t touch your eyes, nose or mouth.\n4.Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.\n5.Stay home if you feel unwell.\n6.If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance.\n7.Follow the directions of your local health authority.'});
    }
    else if(info[0] == 'a') {
        var reqdate = info[1];
        var datePart = reqdate.split('-');
        day_month = '';
        day_month += datePart[0];
        day_month += ' ';
        if(datePart[1] == "01") {
            day_month += "January";
        }
        else if(datePart[1] == '02') {
            day_month += 'February';
        }
        else if(datePart[1] == '03') {
            day_month += 'March';
        }
        else if(datePart[1] == '04') {
            day_month += 'April';
        }
        else if(datePart[1] == '05') {
            day_month += 'May';
        }
        else if(datePart[1] == '06') {
            day_month += 'June';
        }
        else if(datePart[1] == '07') {
            day_month += 'July';
        }
        else if(datePart[1] == '08') {
            day_month += 'August';
        }
        else if(datePart[1] == '09') {
            day_month += 'September';
        }
        else if(datePart[1] == '10') {
            day_month += 'October';
        }
        else if(datePart[1] == '11') {
            day_month += 'November';
        }
        else if(datePart[1] == '12') {
            day_month += 'December';
        }
        day_month += ' '; 
        reqdate = day_month;
        var name = {reqdate:reqdate};

        dateinfo.getDateInfo(name, function(error, data) {
            if(error) {
                console.log(error);
            }
            else if(datePart[2] == '2020'){    
                name.detail = data;
                xyz = name.detail[0]
                bot.sendMessage(chatid,'1.Daily Confirmed : ' + xyz.dailyconfirmed + '\n2.Daily Deceased : ' + xyz.dailydeceased + '\n3.Daily Recovered : ' + xyz.dailyrecovered +  '\n4.Total Confirmed : ' + xyz.totalconfirmed +  '\n5.Total Deceased : ' + xyz.totaldeceased +  '\n6.Total Recovered : ' + xyz.totalrecovered);   
            }
        })
    }
    else if(info[0] == 'b') {
        var statename = info[1];
        var name = {statename:statename};
        stateinfo.getStateInfo(name, function(error, data) {
        if(error) {
            console.log(error);
        }
        else {
            name.detail = data;
            xyz = name.detail[0]
            bot.sendMessage(chatid,'1.Total Confirmed: ' + xyz.confirmed +
                                    '\n2. Active: ' + xyz.active +  
                                    '\n3.Total Deceased : ' + xyz.deaths +  
                                    '\n4.Total Recovered : ' + xyz.recovered + 
                                    '\n5.Lastupdatedtime:' + xyz.lastupdatedtime.substring(0, 10) +
                                    '\n6.Statecode: ' + xyz.statecode +
                                    '\n7.Statenotes: '+ xyz.statenotes);
        }
        })
    }
    else if(cu == 'c') {
        coun.getcoun(function(error, data) {
            var i, a = [];
            for(i = 0;i < 248; i++)
                a.push("\n" + data[i].Country)
            bot.sendMessage(chatid, "Countries are: " + a);
        })
    }
    else if(info[0] == 'd'){
        datacoun.getcoundata(info[1], function(error, data) {
            console.log(data);
            bot.sendMessage(chatid, "Starting Date: " + data[0].Date.substring(0, 10) + ", Confirmed Cases: " + data[0].Confirmed + 
                                    "\nTill Date: " + data[data.length - 1].Date.substring(0, 10) + ", Confirmed Cases: " + data[data.length - 1].Confirmed);
        })
    }
    else if(info[0] == 'e') {
        var countryname = info[1];
  
        covidinfo.getCovidInfo(countryname,function(error,data) {
        if(error) {
            console.log(error);
        }
        else {
            var date = data
            var date1 = date.substring(0,10);
            
            bot.sendMessage(chatid,'The First Case in the country ' + countryname + ' is on ' + date1);
        }
    })
    }
    else if(info[0] == 'f') {
        var reqdate = info[1];
        var datePart = reqdate.split('-');
        var day_month = '';
        day_month += datePart[0];
        day_month += '/';
        day_month += datePart[1];
        day_month += '/';
        day_month += datePart[2];
        reqdate = day_month;
        
        console.log(reqdate);
        var name = {reqdate:reqdate};
        dateinfo1.getDateInfo(name, function(error, data) {
            console.log(name.detail);
            if(error) {
            console.log(error);
            }
            else {    
            name.detail = data;
            
            xyz = name.detail[0]
            
            bot.sendMessage(chatid,'1.Individuals Tested Per Confirmed Case: ' + xyz.individualstestedperconfirmedcase +
                                    '\n2.Test Positivity Rate: ' + xyz.testpositivityrate +  
                                    '\n3.Tests Per Confirmed Case : ' + xyz.testsperconfirmedcase +  
                                    '\n4.Tests Per Million : ' + xyz.testspermillion + 
                                    '\n5.Total Individuals Tested:' + xyz.totalindividualstested +
                                    '\n6.Total Positive Cases: ' + xyz.totalpositivecases +
                                    '\n7.Total Samples Tested: '+ xyz.totalsamplestested +
                                    '\n8.Updated Time Stamp: '+ xyz.updatetimestamp);
            
            }
        })
    }
    else if(cu == '/daily5') {
        var x = Date.today();
        var y = x.toISOString().slice(0,10);
        
        x.setDate(x.getDate() - 5);
        var n = x.toISOString().slice(0,10);
        var end = y;
        var start = n;
        info1.det(start,end,function(error,de){
        //console.log(de);
        var a1 = start.split('-');
        var a2 = end.split('-');
        var mg = '';
        var c = 0;
        for(var i=0; i < de.length ; i++) {
            if(i != 0) {
            console.log(Math.abs(c-de[i].cases));
            }
            var a = de[i].date.split('-');
            a[2]+'-'+a[1]+'-'+a[0]
            if(i != 0) {
            mg += 'Date:' + a[2]+'-'+a[1]+'-'+a[0] + ' Cases: ' + de[i].cases + '\n';
            } 
            c = de[i].cases;
        }
        bot.sendMessage(chatid,mg);
        })
    }
    else if(cu == '/newdaily5') {
        var x = Date.today();
        var y = x.toISOString().slice(0,10);
        
        x.setDate(x.getDate() - 5);
        var n = x.toISOString().slice(0,10);
        var end = y;
        var start = n;
        info1.det(start,end,function(error,de){
        //console.log(de);
        var a1 = start.split('-');
        var a2 = end.split('-');
        var mg = '';
        var c = 0;
        for(var i=0; i < de.length ; i++) {
            var a = de[i].date.split('-');
            a[2]+'-'+a[1]+'-'+a[0]
            if(i != 0) {
            mg += 'Date:' + a[2]+'-'+a[1]+'-'+a[0] + '  New Cases: ' + Math.abs(c-de[i].cases) + '\n';
            }
            c = de[i].cases;
            
        }
        bot.sendMessage(chatid,mg);
        })
    }
    else if(info[0] == 'g') {
        var datePart = info[1].split(':');
        var start = datePart[0];
        var end = datePart[1];
        info1.det(start,end,function(error,de){
        //console.log(de);
        var a1 = start.split('-');
        var a2 = end.split('-');
        var mg = '';
        for(var i=0; i < de.length ; i++) {
            var a = de[i].date.split('-');
            a[2]+'-'+a[1]+'-'+a[0]
            mg += 'Date:' + a[2]+'-'+a[1]+'-'+a[0] + ' Cases: ' + de[i].cases + '\n';       
        }
        bot.sendMessage(chatid,mg);
        })
    }
    else if(info[0] == 'h') {
        var datePart = info[1].split(':');
        var start = datePart[0];
        var end = datePart[1];
        info2.det(start,end,function(error,de){
            var a1 = start.split('-');
            var a2 = end.split('-');
            var mg = '';
            for(var i=0; i < de.length ; i++) {
            var a = de[i].date.split('-');
            a[2]+'-'+a[1]+'-'+a[0]
            mg += 'Date:' + a[2]+'-'+a[1]+'-'+a[0] + ' Cases: ' + de[i].cases + ' Deaths:' + de[i].deaths + ' Active : ' + de[i].Active + ' Recovered : ' + de[i].Recovered + '\n';    
            }
            bot.sendMessage(chatid,mg);
        });
    }
    else if(info[0] == 'i'){
        
        var statename = info[1];
        var name = {statename:statename};

        twostates.twoStatesInfo(name, function(error, data){
            if(error){
                console.log(error)
            }
            else{
                name.detail = data;
                bot.sendMessage(chatid, 'Number of cases : ' + name.detail[0].numcases + '\nGender : ' + name.detail[0].gender +'\nAge-Bracket : ' + name.detail[0].agebracket + '\nBackupNotes : ' + name.detail[0].backupnotes + '\nCurrent-Status : ' + name.detail[0].currentstatus +  '\nAnnounced date : ' + name.detail[0].dateannounced +'\nDetected city : ' + name.detail[0].detectedcity + '\nDetected District : ' + name.detail[0].detecteddistrict + '\nNumber of cases : ' + name.detail[0].numcases +'\nPatientId : ' + name.detail[0].patientnumber);
            }
        })
    }
    else if(info[0] == 'j') {
        var district=info[1]; 
        var state=info[2];
        covidinfo2.getAllCoviddataInfo(state,district,function(error,data){
            if(error){
                console.log(error);
            }
            else{
                var disdata={disdata:data}
                bot.sendMessage(chatid,'Active Cases: ' + disdata.disdata.active + '\nConfirmed Cases: ' + disdata.disdata.confirmed + '\nDeceased: ' + disdata.disdata.deceased + '\nRecovered: ' + disdata.disdata.recovered);// prepare ejs 
            }
        })
    }
    else if(info[0] == 'k'){
        
        allinfo.getDateInfo(name,function(error,data){
          bot.sendMessage(chatid,"Updated : " + data.updated + '\n' + "Cases : " + data.cases + '\n' + "Today Cases : " + data.todayCases + '\n' + "Deaths : " + data.deaths + '\n' + "Today Deaths : " + data.todayDeaths + '\n' + "Recovevered : " + data.recovered + '\n' + "Today Recovered : " + data.todayRecovered + '\n' + "Active : " + data.active + '\n' + "Critical : " + data.critical + '\n' + "Cases Per One Million : " + data.testsPerOneMillion + '\n'); 
        })

    }
})
bot.on("polling_error", (err) => console.log(err));

