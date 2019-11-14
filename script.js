
function refresh(){
$.getJSON( "https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", function(data) {
 var items = [];

 $.each( data, function(i) {
     let value = data[i].rate;
     let name = data[i].txt + ":";
   items.push( "<tr><td>" + name + "</td><td>" + value + "</td></tr>" );
});
 
 $('div#forTable').html(buildTable(items));
});

var buildTable = function(items){
  return $( "<table/>", {
       html: items.join( "" )
 })

};
};




































//$.getJSON( "https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", function( data ) {
  //var items = [];
  //$.each( data, function( key, val ) {
    //items.push( "<tr><td id='" + JSON.stringify(key) + "'>" + JSON.stringify(val) + "</td></tr>" );
  //});
 
  //$( "<table/>", {
   // "class": "my-new-list",
    //html: items.join( "" )
  //}).appendTo( "body" );
//}