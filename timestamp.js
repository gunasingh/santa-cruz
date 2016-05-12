

function TimeHandler () {

    this.timeStampCalc = function(timestamp, callback) {
        var unix = null;
        var natural = null;
        if (Date.parse(timestamp) != null && !isNaN(Date.parse(timestamp))) {
            unix = Date.parse(timestamp)/1000;
            natural = timeConverter(unix);
        } else {
            unix = timestamp;
            natural = timeConverter(timestamp);
        }
    
        callback(JSON.stringify({unix: unix, natural: natural}));
    };
}

module.exports = TimeHandler;

var timeConverter = function(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var day = month + ' ' + date + ', ' + year;
  return day;
}

