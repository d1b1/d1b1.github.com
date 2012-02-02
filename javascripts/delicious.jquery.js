function get_delicious_json( tags, settings) {

  var url = 'http://feeds.delicious.com/v2/json/' + settings.username + '/';
  var tagStories = new Object();

  var target = $('<ul>', {}).appendTo(settings.target);
  
  $.each(tags.split(settings.separator), function(index, value) { 
	  $.getJSON(url + value + "?callback=?", function(data) { 
		  $.each(data, function(key, val) {
		    t = val.u;
		    if (!(t in tagStories)) {
		      $('<a>', { href : val.u, title : val.d, text : value + ' ' + val.d  }).appendTo($('<li>').appendTo(target));
		      tagStories[val.u] = val;
		    }
	     });
	  });
  });
  
}