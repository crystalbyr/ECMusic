var light={};
var tdata = "";
var th1 = 0;
var th2 = -4;
var http = require('http');
var equal = require('assert').equal;

var time = setInterval( function() {
    var req = http.request("http:\/\/192.168.0.103:8888/ECMusicOut.php", function (res) {
        console.log('STATUS: ' + res.statusCode);
        equal(200, res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
     
        res.on('data',function (chunk) {
            console.log('BODY: ' + chunk);
            var array = chunk.split(",")
            
            for (var i  = 0; i < 6; i++)
            {

                console.log('NO1: ' + array[i]);

               // if ( array[i] < 10 ) light[i] = 0.1;
               // else 
		if ( array[i] < 2 ) light[i] = 0.2;
                    else if ( array[i] < 3 ) light[i] = 0.3;
                        else if ( array[i] < 5 ) light[i] = 0.4;
                            else if ( array[i] < 10 ) light[i] = 0.5;
                                else if ( array[i] < 20 ) light[i] = 0.6;
                                    else if ( array[i] < 35 ) light[i] = 0.7;
                                        else if ( array[i] < 50 ) light[i] = 0.8;
                                            else if ( array[i] < 70 ) light[i] = 0.9;
                                                else light[i] = 1;
                console.log('Light: ' + light[i]);
                
            }
            dev$.selectByID('WDFL000009').set('hsl', {h:0.5, s:1, l:light[0]});
            dev$.selectByID('WDFL00000M').set('hsl', {h:0.5, s:1, l:light[1]});
            dev$.selectByID('WDFL00001A').set('hsl', {h:0.5, s:1, l:light[2]});
	    dev$.selectByID('WDFL00000W').set('hsl', {h:0.5, s:1, l:light[3]});
            dev$.selectByID('WDFL00000D').set('hsl', {h:0.5, s:1, l:light[4]});
            dev$.selectByID('WDFL00000A').set('hsl', {h:0.5, s:1, l:light[5]});
           
        });

    });
     
    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
     
    req.end();

}, 500);   

 
