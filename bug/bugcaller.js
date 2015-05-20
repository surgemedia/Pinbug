$(function(){
		$("<div></div>").attr('id','bugform_wrapper').appendTo('body'); 

      $("#bugform_wrapper").load("www.pinbug.com.au/bug/contact_form.html");

      // console.log(window.location.href)


      $('head').append('<link rel="stylesheet" href="www.pinbug.com.au/bug/style.css">');
      $('head').append('<script type="text/javascript" src="www.pinbug.com.au/bug/html2canvas.js"></script>');

    });
function saveImg()  {
var canvas = $('canvas')[0];
var img    = canvas.toDataURL("image/png");
var dataURL = canvas.toDataURL();
//imgtag.src = dataURL;
var ajax = new XMLHttpRequest();
ajax.open("POST",'www.pinbug.com.au/bug/save.php',false);

ajax.setRequestHeader('Content-Type', 'application/upload');

ajax.send(dataURL);  

}

function getPage(){
html2canvas(document.body, {
  onrendered: function(canvas) {
  	 document.body.appendChild(canvas);
    var canvas = $('canvas')[0];
    saveImg();
    $( "body" ).find( "canvas" ).css( "display", "none" );

    //var dataURL = canvas.toDataURL();
    
    //$("#screenshot_pinbug").val(dataURL)
    //console.log(dataURL)
   
  }
});
}

   