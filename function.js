var data = msg.payload;

var lat = data.latitude;
var lon = data.longitude;

var radius = "25";
var name = "test";
var os = "linux";
var color = "Cyan";

var time = msg.time;
var stale = time.substr(0,14) + (parseInt(time.substr(14,16)) + 20).toString() + time.substr(16);

var string = '<event version="2.0" uid="GATEWAY-5349ebbc573d3d42" type="a-f-G-U-C-I" how="h-e" time="' + time + '" start="' + time + '" stale="' + stale + '"><point lat="' + lat + '" lon="' + lon + '" hae="0" ce="' + radius + '" le="0"/><detail><takv device="ip-172-31-50-151" os="' + os + '" platform="NRedTAK" version="0.3.1"/><contact endpoint="*:-1:stcp" callsign="' + name + '"/><uid Droid="Node-RED"/><__group name="'+ color + '" role="Team Member"/><status battery="99"/></detail></event>';

return {payload: string};