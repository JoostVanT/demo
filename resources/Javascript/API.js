function fetchAPIDetails(){	
			var msg="Unable to retrieve account information due to restrictions";
			var dialogInstance1 = new BootstrapDialog({

				message: msg
			});
			$.ajax({
				headers: { 
					'Accept': "application/json",
					'Content-Type': "application/json" 
				},			
	
				url: "http://10.21.194.250:9082/TPAdminRestLayer/rest/api",
				
				type: 'GET',
				data: "",			
				dataType: "json",			
				success: function(data) {
									
					iterateData(data);
				},
				error: function(xhr, ajaxOptions, thrownError) {
					setTimeout(function(){ dialogInstance1.open(); }, 2000);
					//alert("I'm in Error");

				}
			});	
			function iterateData(responsetxt){
			if(responsetxt==null){
				var msg="No Records found!!";
				var dialogInstance1 = new BootstrapDialog({

				message: msg
				});
				setTimeout(function(){ dialogInstance1.open(); }, 2000);
			}
			
			var customers = new Array();
				customers.push(["API Id","Name","Blocked","Type"]);
				$.each(responsetxt, function() {  
					$.each(this, function(k,v) {        					
						customers.push([v["apiId"],v["apiName"],v["blocked"],v["type"]]);
					});
				});
				
			//Create a HTML Table element.
			var table = document.createElement("TABLE");
			table.className="ais-table";
			table.border = "1";

			//Get the count of columns.
			var columnCount = customers[0].length;

			//Add the header row.
			var row = table.insertRow(-1);
			row.className="tabletitle";
			for (var i = 0; i < columnCount; i++) {
				var headerCell = document.createElement("TH");
				headerCell.className="ais-tableheader";
				headerCell.innerHTML = customers[0][i];
				row.appendChild(headerCell);
			}

			//Add the data rows.
			for (var i = 1; i < customers.length; i++) {
				row = table.insertRow(-1);
				for (var j = 0; j < columnCount; j++) {
					var cell = row.insertCell(-1);
					cell.className="ais-tablecell";	
					if(j==0){
						var url="updateAPIDetails.htm?id="+ customers[i][j];
						var Message='<a href="'+url+'">'+ customers[i][j]+'</a>';
						cell.innerHTML = Message;		
					}
					else
						cell.innerHTML = customers[i][j];
				}	
							
			}
			
			var dvTable = document.getElementById("sendbtn");

			dvTable.innerHTML = "";
			dvTable.appendChild(table);
		}

}


function updateAPIDetails(){
	var msg="Unable to retrieve account information due to restrictions";
	var dialogInstance1 = new BootstrapDialog({

		message: msg
	});
	function getParameter(paramName) {
		  var searchString = window.location.search.substring(1),
		      i, val, params = searchString.split("&");

		  for (i=0;i<params.length;i++) {
		    val = params[i].split("=");
		    if (val[0] == paramName) {
		      return val[1];
		    }
		  }
		  return null;
		}
		 var id=getParameter("id");
	
	$.ajax({
		headers: { 
			'Accept': "application/json",
			'Content-Type': "application/json" 
		},				
		url: "http://10.21.194.250:9082/TPAdminRestLayer/rest/api/"+id,
		type: 'GET',
		data: "",			
		dataType: "json",			
		success: function(data) {
			document.getElementById("apiId").innerHTML=data.apiId;
			document.getElementById("apiName").innerHTML=data.apiName;			
			if(data.blocked=='Y')
			$("#block").attr('checked', 'checked');
			else
			$("#unblock").attr('checked', 'checked');	
			document.getElementById("apiType").innerHTML=data.type;
			json=data;				
			return json;
		},
		error: function() {
			setTimeout(function(){ dialogInstance1.open(); }, 2000);	
		}
	});	
	
}

function saveAPIDetails(blocked){
	var msg="Unable to retrieve account information due to restrictions";
	var dialogInstance1 = new BootstrapDialog({

		message: msg
	});
	var blocked=null;
	if(document.getElementById('unblock').checked)
	blocked=document.getElementById("unblock").value;
	else if(document.getElementById('block').checked)
	blocked=document.getElementById("block").value;
	var apiName  = document.getElementById("apiName").innerHTML;					
	var apiType = document.getElementById("apiType").innerHTML;
	var apiId = document.getElementById("apiId").innerHTML;
	var apiInfo={
			"blocked":blocked,
			"apiName":apiName,
			"type":apiType,
			"apiId":apiId			
	};
	$.ajax({
		headers: { 
			
			'Content-Type': "application/json" 
		},				
		url: "http://10.21.194.250:9082/TPAdminRestLayer/rest/api",
		type: 'POST',
		data: JSON.stringify(apiInfo),			
		dataType: "text",			
		success: function(data) {			   	 
			window.location.href = "http://10.21.194.250:9082/Demo/apiAdministration.htm";
		},
		error: function() {
			setTimeout(function(){ dialogInstance1.open(); }, 2000);
		}
	});	
	
}

		
	

		




