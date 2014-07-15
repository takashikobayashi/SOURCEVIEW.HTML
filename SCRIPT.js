/* Source View | SyntaxHighlirhter, jQuery, AngularJS, Bootstrap | JavaScript, html5, CSS3 Study | (c) 2014 twitter@sumo_ninja_jp
*/

function SourceViewModel( $scope, $http,$q ) {

var u = "http://dl.dropboxusercontent.com/u/135100373/Study/201407106/";
var e = "sventry.json";
var p = encodeURIComponent( JSON.stringify( {"url":u,"entry":e} ) );

  var param = 
//"%7B%22title%22%3A%22yyyymmdd%20-%20some%20title%22%2C%22url%22%3A%22https%3A%2F%2Fdl.dropboxusercontent.com%2Fu%2F135100373%2FStudy%2F201405238%2F%22%2C%22exec%22%3A%22index.html%22%2C%22files%22%3A%5B%7B%22name%22%3A%22Style.css%22%2C%22brush%22%3A%22css%22%2C%22title%22%3A%22Style.css%22%7D%5D%7D";

p;
/*
window.location.search.substring( 1 );
  if( param === undefined || param.length <= 0 ) {
    $scope.sv_title = "No parameters.";
    return;
  }
*/

  var obj = JSON.parse( decodeURIComponent( param ) );
  var files={};

alert("there: "+JSON.stringify(obj));

  if( obj.entry !== undefined ) {
    $http.get( obj.url + obj.entry ).then( function( res ) {
      setEntry( res.data );
    } );
  }
  else {
    setEntry( obj );
  }

  function setEntry( obj ) {
alert("here: "+JSON.stringify(obj));

    $scope.sv_title = obj.title;
    $scope.sv_url = obj.url;
    $scope.sv_files = obj.files;

    if( obj.exec != undefined ) {
      $scope.sv_exec = obj.url + obj.exec;
    }

    setFileContents();
  };

  function setFileContents() {
    var i;
    var ds = [];
    for( i = 0; i < $scope.sv_files.length; i++ ) {
      ds.push( $http.get( $scope.sv_url + $scope.sv_files[i].name ).then( function( obj ) {
        var d = $q.defer();
        var t = obj.config.url.substring( obj.config.url.lastIndexOf( "/" ) + 1 );
        files[t] = obj.data;
        d.resolve( obj.data );
        return d.promise;
      } ) );
    }
    $q.all( ds ).then( function( res ){
      setHighlight();
    } );
  }

  function setHighlight() {
    var i;
    for( i = 0; i < $scope.sv_files.length; i++ ) {
      angular.element( "pre[title='" + $scope.sv_files[i].title + "']" ).text( files[$scope.sv_files[i].name] );
    }

    SyntaxHighlighter.highlight();

    $( "body" ).scrollspy( "refresh" );
  };

  $scope.normalize = function( f ) {
    return f.replace( ".", "" );
  };
}
