/* Source View | SyntaxHighlirhter | JavaScript, html5 and CSS3 Study | (c) 2014 twitter@sumo_ninja_jp
*/

var sv = function() {
  var param = window.location.search.substring( 1 );
  var obj = JSON.parse( decodeURIComponent( param ) );

  $( "#sv_title" ).text( obj.title );
  $( "#sv_url" ).text( obj.url );

  var i = obj.files.length;
  while( i > 0 ) {
    $( "#sv_url" ).after( "<pre title='" + obj.files[--i].title + "' />" );
  }

  var xhrs = [];

  for( i = 0; i < obj.files.length; i++ ) {
    xhrs[i] = new XMLHttpRequest();
    xhrs[i].open( "GET", obj.url + obj.files[i].name, false );
    xhrs[i].onload = function() {
      var pre = "pre[title='" + obj.files[i].title + "']";
      $( pre ).text( xhrs[i].responseText );
      $( pre ).addClass( "brush: " + obj.files[i].brush );
       SyntaxHighlighter.highlight();
    }
    xhrs[i].send();
  }
}

window.addEventListener( "load", sv, false);
