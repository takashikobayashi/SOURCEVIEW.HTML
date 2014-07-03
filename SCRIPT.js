/* Source View | SyntaxHighlirhter, jQuery, AngularJS | JavaScript, html5, CSS3 Study | (c) 2014 twitter@sumo_ninja_jp
*/

function SourceViewModel( $scope, $http ) {
  var param = window.location.search.substring( 1 );
  if( param === undefined || param.length <= 0 ) {
    $scope.sv_title = "No parameters.";
  }

  var obj = JSON.parse( decodeURIComponent( param ) );
  var files=[];

  if( obj.entry !== undefined ) {
    $http.get( obj.url + obj.entry ).then( function( res ) {
      setEntry( res.data );
    } );
  }
  else {
    setEntry( obj );
  }

  function setEntry( obj ) {
    $scope.sv_title = obj.title;
    $scope.sv_url = obj.url;
    $scope.sv_files = obj.files;

    if( obj.exec != undefined ) {
      $scope.sv_exec = obj.url + obj.exec;
    }

    return setFileContents( 0 );
  };

  function setFileContents( i ) {
    if( i < $scope.sv_files.length ) {
      $http.get( $scope.sv_url + $scope.sv_files[i].name ).then( function( obj ) {
        files.push( obj.data );
        return setFileContents( ++i );
      } );
    }
    else {
      return setHighlight();
    }
  };

  function setHighlight() {
    var i;
    for( i = 0; i < files.length; i++ ) {
      angular.element( "pre[title='" + $scope.sv_files[i].title + "']" ).text( files[i] );
    }

     SyntaxHighlighter.highlight();
  };
}
