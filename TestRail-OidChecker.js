var urlSearch = window.location.search;
if (urlSearch.indexOf("/view/") >= 0)
{
	console.log("TestRail OidChecker is Online - view");
	// A $( document ).ready() block.
	$( document ).ready(function() {
		if ($('.content-breadcrumb').children('a:contains("Master")').text().indexOf("Master") >= 0){
			var id = $('.content-header-id');
			var oid = $('#cell_custom_custom_original_id');
			if ($(oid).text().indexOf(("oid" + $(id).text())) >= 0){
				//pass
			}
			else{
				$(id).css({
					'background-color': '#FFFF00',
					'color': 'red'
				});
			}
		}	
	});	
}
/*
if (urlSearch.indexOf("/edit/") >= 0)
{
	console.log("TestRail OidChecker is Online - edit");
	// A $( document ).ready() block.
	$( document ).ready(function() {
		var id = $('.content-header-id').text();
		var oids = $('#custom_custom_original_id').val();
		var oids = oids.split(',');
		var polarionId = oids[0];
		var oid = polarionId + ", " + "oid" + id;
		$('#milestone_id').val("2175"); //Version 2.0	 
		$('#custom_custom_original_id').val(oid);
	});
}
*/