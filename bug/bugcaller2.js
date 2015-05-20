$(function(){
//		$("<div></div>").attr('id','bugform_wrapper').appendTo('body'); 
//
//      $("#bugform_wrapper").load("http://54.252.159.245/~pinbug/bug/contact_form.html");
		// file to embed 
		var myfileurl="http://54.252.159.245/~pinbug/bug/contact_form.html"; 
		
		// load the file 
		var xhr = new XMLHttpRequest(); 
		xhr.open( "GET", myfileurl, true ); 
		xhr.send(); 
		
		// create a 'div' element to wrap it 
		("<div></div>").attr('id','bugform_wrapper').appendTo('body');
		// inject the file in the div 
		elem.innerHTML = xhr.responseText; 
		// add the div to the document 
		document.body.appendChild( elem ); 
		console.log(window.location.href)

//       var styles;
//       styles = '<style type="text/css">';
//       styles += '#bugform_wrapper {position: fixed; height:auto;  }';
//       styles += '#bugform.hidden_bug { display:none; height:0px; }';
//       styles += '#bugform { display:block; width:100%; top:150px;  }'
//       styles += 'button#bugform_button{background-image:-webkit-gradient(linear,left 0,left 100%,from(#f0ad4e),to(#ec971f));background-image:-webkit-linear-gradient(top,#f0ad4e,0,#ec971f,100%);background-image:-moz-linear-gradient(top,#f0ad4e 0,#ec971f 100%);background-image:linear-gradient(to bottom,#f0ad4e 0,#ec971f 100%);background-repeat:repeat-x;border-color:#eb9316;display:block;:color#fff}
// ';
// styles += '</style>';

      $('head').append('<link rel="stylesheet" href="http://54.252.159.245/~pinbug/bug/style.css">');
      $('head').append('<script type="text/javascript" src="http://54.252.159.245/~pinbug/bug/html2canvas.js"></script>');
      $('head').append('<script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.min.js"></script>');
    });
function saveImg()  {
var canvas = $('canvas')[0];
var img    = canvas.toDataURL("image/png");
var dataURL = canvas.toDataURL();
//imgtag.src = dataURL;
var ajax = new XMLHttpRequest();
ajax.open("POST",'http://54.252.159.245/~pinbug/bug/save.php',false);

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

   