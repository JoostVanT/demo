function fetchDetails(service){	
		if(service=="ais"){
			var accountNumber  = document.getElementById("iban").value;					
			var startDate = document.getElementById("startDate").value;
			var endDate = document.getElementById("endDate").value;
			var tppId=document.getElementById("tppId").value;
			var formatStartDate="";
			var formatEndDate="";			 
			if(startDate!="" || endDate!=""){
				formatStartDate=startDate.substring(6,10)+"-"+startDate.substring(3,5)+"-"+startDate.substring(0,2);
				formatEndDate=endDate.substring(6,10)+"-"+endDate.substring(3,5)+"-"+endDate.substring(0,2);

			}
			var code = document.getElementById("code").value;
			var accntinfo={
					"accountNumber":accountNumber,
					"startDate":formatStartDate,
					"endDate":formatEndDate,
					"code":code,
					"tppId":tppId
			};
			//var accessToken= document.getElementById("accessToken").value;
			var msg = "Invalid Date range!";
			var now = new Date();
			var startDt=new Date(formatStartDate);
			var endDt=new Date(formatEndDate);

			if( startDt > now || endDt > now || startDt > endDt){
				var dialogInstance1 = new BootstrapDialog({

					message: msg
				});
				dialogInstance1.title="Alert";
				dialogInstance1.open(); 

			}
			else if(code=="BKF"){
				var msg="Unable to retrieve account information due to restrictions";
				/*var dialogInstance1 = new BootstrapDialog({
					message: msg
				});*/
				$.ajax({
					headers: { 						
						'Content-Type': "application/json"
					},								
					url:"http://10.21.194.250:9082/AISRestTransferLayer/ais/formatted",
					type:'POST',
					data: JSON.stringify(accntinfo),			
					dataType: "text",			
					success: function(data) {										
						iterateCAMT53(data);			
					},
					error: function(xhr, ajaxOptions, thrownError) {
						
				        var msg="Invalid TPP ID!";
						var dialogInstance1 = new BootstrapDialog({
							//message: xhr.status+" "+thrownError
							message:msg
						});
					     
						setTimeout(function(){ dialogInstance1.open(); }, 2000);
						

					}
				});	
			}
			else{ 
				if(code=="BKU")
				var urlLink="http://10.21.194.250:9082/AISRestTransferLayer/ais/mutations";
				else if(code=="REJ"||code=="INP"||code=="SCH")
				var urlLink="http://10.21.194.250:9082/AISRestTransferLayer/ais/transactions";
				var type='POST';
				var data=JSON.stringify(accntinfo);
				apiCall(urlLink,type,data);
			}
			
		}
		else if(service=="tpp"){
			var urlLink="http://10.21.194.250:9082/TPAdminRestLayer/rest/tpp";
			//var urlLink="http://localhost:9081/TPAdminRestLayer/rest/tpp";
			var type='GET';
			var data="";
			apiCall(urlLink,type,data);
		}
		function apiCall(urlLink,type,data) {	
			var acceptTypeReq="application/json";
			var dataTypeReq="json";
			var msg="Unable to retrieve account information due to restrictions";
			var dialogInstance1 = new BootstrapDialog({

				message: msg
			});
			$.ajax({
				headers: { 
					'Accept': acceptTypeReq,
					'Content-Type': "application/json" 
				},			
				//url: 'http://10.21.197.78:9082/TestRest/Test/users?',
				//url:'http://10.21.197.78:9082/SpringTestRest/rest/users?access_token='+accessToken,
				//url:'http://localhost:9081/AISRestTransferLayer/rest/users?accountNumber='+accountNumber,
				url: urlLink,
				//type:'POST',
				type: type,
				data: data,			
				dataType: dataTypeReq,			
				success: function(data) {
									
					iterateData(data,dataTypeReq,service);
				},
				error: function(xhr, ajaxOptions, thrownError) {
					setTimeout(function(){ dialogInstance1.open(); }, 2000);
					//alert("I'm in Error");

				}
			});	
		}
		function iterateCAMT53(responsetxt){
			if(responsetxt==null){
				var msg="No Records found!!";
				var dialogInstance1 = new BootstrapDialog({

				message: msg
				});
				setTimeout(function(){ dialogInstance1.open(); }, 2000);
			}
			else if(code=="BKF"){
				
				var xmlstr=responsetxt;
				
				var reg = /(>)(<)(\/*)/g;
				var res10 = xmlstr.replace(reg, '$1\r\n$2$3');
				var formatted = '';
				var pad = 0;
				jQuery.each(res10.split('\r\n'), function(index, node) {
					var indent = 0;
					if (node.match( /.+<\/\w[^>]*>$/ )) {
						indent = 0;
					} else if (node.match( /^<\/\w/ )) {
						if (pad != 0) {
							pad -= 1;
						}
					} else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
						indent = 1;
					} else {
						indent = 0;
					}

					var padding = '';
					for (var i = 0; i < pad; i++) {
						padding += '    ';
					}

					formatted += padding + node + '\r\n';
					pad += indent;
				});

				var res11 = formatted.replace(/&/g,"&amp;");
				var res12= res11.replace(/</g,"<b/>&lt;");
				var res13= res12.replace(/>/g,"&gt;</b>");
				var res14= res13.replace(/ /g, "&nbsp;");
				var res15= res14.replace(/\n/g,"<br/>");
				var divTag = document.getElementById("resp");
				divTag.className="pis-response";
				divTag.style="";
				document.getElementById("resp").innerHTML=res15;    
			}
			
		}
		function iterateData(responsetxt,dataTypeReq,service){
			if(responsetxt==null){
				var msg="No Records found!!";
				var dialogInstance1 = new BootstrapDialog({

				message: msg
				});
				setTimeout(function(){ dialogInstance1.open(); }, 2000);
			}
			var customers = new Array();
			if(service=="tpp"){
				customers.push(["Tpp Id","Tpp Name","PIS","AIS","Valid From","Valid To"]);
				$.each(responsetxt, function() {  
					$.each(this, function(k,v) {        
						var validFrom=v["validFrom"];
						var validTo=v["validTo"];
						var validFromDt = new Date(validFrom);		                
						var validFromFormatDt = validFromDt.getDate() + "/" + (validFromDt.getMonth() + 1) + "/" + validFromDt.getFullYear();
						var validToDt = new Date(validTo);						
						var validToFormatdt = validToDt.getDate() + "/" + (validToDt.getMonth() + 1) + "/" + validToDt.getFullYear();						
						customers.push([v["ebaTppId"],v["tppName"],v["pis"],v["ais"],validFromFormatDt,validToFormatdt]);
					});
				});
			}
			else{
				if(dataTypeReq=="xml"){
					customers.push(["Mutation Code","Book Date","Value Date","Currency Code","Amount","Balance After Transaction","Description","Name Counter Account","Counter Account Number","Transaction Date","Source Enquiry Number"]);

					$(resultpost).find().each(function() {				
						var mutationCode=$(this).find('mutationCode').text();
						var bookDate=$(this).find('bookDate').text();
						var amount=$(this).find('amount').text();
						var valueDate=$(this).find('valueDate').text();
						var currencyCode=$(this).find('currencyCode').text();
						var balanceAfterTransaction=$(this).find('balanceAfterTransaction').text();
						var desription=$(this).find('description').text();
						var nameCounterAccount=$(this).find('nameCounterAccount').text();
						var counterAccountNumber=$(this).find('counterAccountNumber').text();
						var transactionDate=$(this).find('transactionDate').text();
						var sourceEnquiryNumber=$(this).find('sourceInquiryNumber').text();
						/*var counterAccountNumberType=$(this).find('counterAccountNumberType').text();
					var bookDt = new Date(bookDate);					
					var bookFormatDt = bookDt.getDate() + "/" + bookDt.getMonth() + 1 + "/" + bookDt.getFullYear();
					var valueDt = new Date(valueDate);					
					var valFormatdt = valueDt.getDate() + "/" + valueDt.getMonth() + 1 + "/" + valueDt.getFullYear();
					var transactionDt = new Date(transactionDate);					
					var tranFormatDt = transactionDt.getDate() + "/" + transactionDt.getMonth() + 1 + "/" + transactionDt.getFullYear();*/										
						//customers.push([mutationCode,bookFormatDt,amount,valFormatdt,currencyCode,balanceAfterTransaction,desription,nameCounterAccount,counterAccountNumber,tranFormatDt,sourceEnquiryNumber,counterAccountNumberType]);										
						customers.push([mutationCode,bookDate,valueDate,currencyCode,amount,balanceAfterTransaction,desription,nameCounterAccount,counterAccountNumber,transactionDate,sourceEnquiryNumber]);										


					});
				}
				else{
					 if(code=="BKU")
					 {
						customers.push(["Mutation Code","Book Date","Value Date","Currency Code","Amount","Balance After Transaction","Description","Name Counter Account","Counter Account Number","Transaction Date","Source Enquiry Number"]);
						if(responsetxt.financialTransactionDTO.length>0){

							$.each(responsetxt, function() {  
								$.each(this, function(k,v) {
									var bookDate=v["bookDate"];
									var amount=v["amount"];
									var valueDate=v["valueDate"];
									var balanceAfterTransaction=v["balanceAfterTransaction"];
									var transactionDate=v["transactionDate"];
									//var counterAccountNumberType=v["counterAccountNumberType"];   
									balanceAfterTransaction=parseFloat(balanceAfterTransaction, 10).toFixed(2).replace(".",",");                   
									amount=parseFloat(amount, 10).toFixed(2).replace(".",",");                 
									var bookDt = new Date(bookDate);	
									var bookFormatDt = bookDt.getDate() + "/" + (bookDt.getMonth() + 1)  + "/" + bookDt.getFullYear();
									var valueDt = new Date(valueDate);	
									var valFormatdt = valueDt.getDate() + "/" + (valueDt.getMonth() + 1) + "/" + valueDt.getFullYear();
									var transactionDt = new Date(transactionDate);		
									var tranFormatDt = transactionDt.getDate() + "/" + (transactionDt.getMonth() + 1) + "/" + transactionDt.getFullYear();						
									customers.push([v["mutationCode"],bookFormatDt,valFormatdt,v["currencyCode"],amount,balanceAfterTransaction,v["description"],v["nameCounterAccount"],v["counterAccountNumber"],tranFormatDt,v["sourceInquiryNumber"]]);					
								});			 
							});
						}
						else{ 
							$.each(responsetxt, function(k,v) {  	                
								//var counterAccountNumberType="codeAsString:"+v.counterAccountNumberType.codeAsString+"codeLabel:"+
								//v.counterAccountNumberType.codeLabel;		                	
								var bookDate=v["bookDate"];		                   
								var valueDate=v["valueDate"];
								var transactionDate=v["transactionDate"];	                   
								//var counterAccountNumberType=v["counterAccountNumberType"]; 
								var amount=v["amount"];
								var balanceAfterTransaction=v["balanceAfterTransaction"];
								balanceAfterTransaction=parseFloat(balanceAfterTransaction, 10).toFixed(2).replace(".",",");                   
								amount=parseFloat(amount, 10).toFixed(2).replace(".",",");                 
								var bookDt = new Date(bookDate);	
								var bookFormatDt = bookDt.getDate() + "/" + (bookDt.getMonth() + 1)  + "/" + bookDt.getFullYear();
								var valueDt = new Date(valueDate);	
								var valFormatdt = valueDt.getDate() + "/" + (valueDt.getMonth() + 1) + "/" + valueDt.getFullYear();
								var transactionDt = new Date(transactionDate);		
								var tranFormatDt = transactionDt.getDate() + "/" + (transactionDt.getMonth() + 1) + "/" + transactionDt.getFullYear();					
								customers.push([v["mutationCode"],bookFormatDt,valFormatdt,v["currencyCode"],amount,balanceAfterTransaction,v["description"],v["nameCounterAccount"],v["counterAccountNumber"],tranFormatDt,v["sourceInquiryNumber"]]);					
								//customers.push([mutationCode,bookDate,amount,valueDate,currencyCode,balanceAfterTransaction,desription,nameCounterAccount,counterAccountNumber,transactionDate,sourceEnquiryNumber]);					
							});			 

						}       		 
					}
					 else{							
							if(code=="SCH"){
								customers.push(["CounterParty Account","CounterParty Name","Currency Code","Amount","Remittance Information","Execution Date"]);
								$.each(responsetxt, function() {  
									$.each(this, function(k,v) { 
										var requestedExecutionDate=v["requestedExecutionDate"];	
										var requestedExecutionDt = new Date(requestedExecutionDate);	
										var requestedFormatDt = requestedExecutionDt.getDate() + "/" + (requestedExecutionDt.getMonth() + 1)  + "/" + requestedExecutionDt.getFullYear();
										
									customers.push([v["counterAccountNumber"],v["nameCounterAccount"],v["currencyCode"],v["amount"],v["remittanceInfo"][0],requestedFormatDt]);											
								});		
								});
							}
							else{
								customers.push(["CounterParty Account","CounterParty Name","Currency Code","Amount","Error Code","Remittance Information","Rejected Date"]);
								$.each(responsetxt, function() {  
									$.each(this, function(k,v) { 
										var rejectedDate=v["rejectedDate"];	
										var rejectedDt = new Date(rejectedDate);	
										var rejectedFormatDt = rejectedDt.getDate() + "/" + (rejectedDt.getMonth() + 1)  + "/" + rejectedDt.getFullYear();
					
									customers.push([v["counterAccountNumber"],v["nameCounterAccount"],v["currencyCode"],v["amount"],v["errorCode"],v["remittanceInfo"][0],rejectedFormatDt]);											
								});		
								});
							}
						}
					}
				}
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
					cell.innerHTML = customers[i][j];
				}
			}
			/*if(customers[0][5]=="Remittance Information"){
				cell.className="ais-tablecell remit";

			}*/
			var dvTable = document.getElementById("sendbtn");

			dvTable.innerHTML = "";
			dvTable.appendChild(table);
			/*var pg="<ul style=\"float:right\" class=\"pagination\"><li><a>1</a></li><li><a>2</a></li></ul>";
			var dvPage = document.getElementById("pgbtn");
			dvPage.innerHTML=pg;*/
		}
		delDiv();
	}
		



function delDiv(){
	var div1 = document.getElementById("resp");
	var div2 = document.getElementById("sendbtn");
	//var div3 = document.getElementById("sendPg");
	div1.innerHTML="";
	div1.className="";
	div2.innerHTML="";
	//div3.innerHTML="";
}

function sendPain(){
	var TPParr=["Bol.com", "Flipkart", "Amazon","Airtel","Vodafone","Paytm"];
	var custarr=["1234567", "6234567", "2234567","3234567","4234567","5234567"];
	var debtarr=["NL06ABNA1234567890", "NL06ABNA1234567891", "NL06ABNA1234567892","NL06ABNA1234567893","NL06ABNA1234567894","NL06ABNA1234567895"];
	var amt=["100", "150", "175","200","250","275"];           
	var index1;
	var index2;
	var index3;
	var flag1 = false;
	var flag2 = false;
	var flag3 = false;
	var msg="";
	var tname = document.getElementById("tname").value;
	var cBID = document.getElementById("CBID").value;
	var dIBAN = document.getElementById("dIBAN1").value+document.getElementById("dIBAN2").value+document.getElementById("dIBAN3").value;
	var amount = document.getElementById("amount").value;
	for(index1 = 0; index1 < TPParr.length; index1++) {
		if(tname== TPParr[index1])
		{
			msg = tname + " is authorized for the transaction.<br/>";
			flag1=true;
			flag2=true;
			for(index2 = 0; index2 < custarr.length; index2++) {
				if(cBID== custarr[index2])
				{
					msg = msg + "Customer " +cBID+ " has blocked "+ tname+" for the transaction.<br/> Payment order not accepted!!";
					flag2=false;
				}
			}
			if(flag2 == true){
				msg = msg + "Customer " + cBID+ " has authorized "+ tname+" for transactions.<br/>";
				flag3=true;
				for(index3 = 0; index3 < debtarr.length; index3++) {
					if(dIBAN== debtarr[index3] && parseInt(amount) > parseInt(amt[index3]))
					{
						msg = msg + "Payment order not accepted!!";
						flag3=false;
					}
				}
				if(flag3 === true){
					msg = msg + "Payment order accepted.The reference No is AB124N7!";
				}
			}
		}
	}
	if(flag1 == false){
		msg = tname + " is unauthorized for the transaction.<br/> Payment order not accepted!!";
	}   
	var $textAndPic = $('<div></div>');           		
	$textAndPic.append('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>');            
	// Using init options
	var dialogInstance1 = new BootstrapDialog({

		message: msg
	});
	setTimeout(function(){ dialogInstance1.open(); }, 2000);

	// Construct by using setters
	var dialogInstance2 = new BootstrapDialog();
	dialogInstance2.setTitle('Processing....');
	dialogInstance2.setMessage($textAndPic);

	dialogInstance2.open();
	setTimeout(function(){ dialogInstance2.close();}, 2000);

	delDiv();


} 

function getPainRequest(){
	var xmlstr="<CstmrCdtTrfInitn><GrpHdr><MsgId>000001</MsgId><CreDtTm>timest</CreDtTm><NbOfTxs>1</NbOfTxs><CtrlSum>amt</CtrlSum><InitgPty><Nm>Klantnaam</Nm></InitgPty></GrpHdr><PmtInf><PmtInfId>12345</PmtInfId><PmtMtd>TRF</PmtMtd><NbOfTxs>1</NbOfTxs><PmtTpInf><SvcLvl><Cd>SEPA</Cd></SvcLvl></PmtTpInf><ReqdExctnDt>currdate</ReqdExctnDt><Dbtr><Nm>Dname</Nm></Dbtr><DbtrAcct><Id><IBAN>Diban</IBAN></Id></DbtrAcct><DbtrAgt><FinInstnId><BIC>ABNANL2A</BIC></FinInstnId></DbtrAgt><ChrgBr>SLEV</ChrgBr><CdtTrfTxInf><PmtId><EndToEndId>Cbic</EndToEndId></PmtId><Amt><InstdAmt Ccy=\"cur\">amount</InstdAmt></Amt><CdtrAgt><FinInstnId><BIC>RABONL2U</BIC></FinInstnId></CdtrAgt><Cdtr><Nm>Cname</Nm></Cdtr><CdtrAcct><Id><IBAN>Ciban</IBAN></Id></CdtrAcct><RmtInf><Ustrd>desc</Ustrd></RmtInf></CdtTrfTxInf></PmtInf></CstmrCdtTrfInitn>";         
	var tname = document.getElementById("tname").value;
	var amount = document.getElementById("amount").value;
	var dname = document.getElementById("dname").value;
	var dIBAN = document.getElementById("dIBAN1").value+document.getElementById("dIBAN2").value+document.getElementById("dIBAN3").value;
	var desc = document.getElementById("desc").value;
	var cname = document.getElementById("cname").value;
	var cIBAN = document.getElementById("cIBAN1").value+document.getElementById("cIBAN2").value+document.getElementById("cIBAN3").value;
	var eid = document.getElementById("eid").value;
	var cur = document.getElementById("cur").value;
	var currentDate = new Date();
	var currtime="T"+currentDate.getHours() + ":"  + currentDate.getMinutes() + ":" + currentDate.getSeconds();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var cdate= year+ "-" + month + "-" +day ;
	var res9= xmlstr.replace("timest",cdate+currtime).replace("\"cur\"","\""+cur+"\"").replace("amt", amount).replace("amount",amount).replace("Dname", dname).replace("Diban", dIBAN).replace("desc", desc).replace("Cname", cname).replace("Ciban", cIBAN).replace("Cbic", eid).replace("currdate",cdate).replace("Klantnaam",tname);               	 
	var reg = /(>)(<)(\/*)/g;
	var res10 = res9.replace(reg, '$1\r\n$2$3');
	var formatted = '';
	var pad = 0;
	jQuery.each(res10.split('\r\n'), function(index, node) {
		var indent = 0;
		if (node.match( /.+<\/\w[^>]*>$/ )) {
			indent = 0;
		} else if (node.match( /^<\/\w/ )) {
			if (pad != 0) {
				pad -= 1;
			}
		} else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
			indent = 1;
		} else {
			indent = 0;
		}

		var padding = '';
		for (var i = 0; i < pad; i++) {
			padding += '    ';
		}

		formatted += padding + node + '\r\n';
		pad += indent;
	});

	var res11 = formatted.replace(/&/g,"&amp;");
	var res12= res11.replace(/</g,"<b/>&lt;");
	var res13= res12.replace(/>/g,"&gt;</b>");
	var res14= res13.replace(/ /g, "&nbsp;");
	var res15= res14.replace(/\n/g,"<br/>");
	var divTag = document.getElementById("resp");
	divTag.className="pis-response";
	divTag.style="";
	document.getElementById("resp").innerHTML=res15;            
	var element = document.createElement("div");
	element.innerHTML="<input type='button' style='float: right;background:linear-gradient(Chocolate,GoldenRod );color: white;margin-right: 39px;' class='inputdetailsbutton'          onclick='sendPain()' value='Send Pain'>";
	var foo = document.getElementById("sendbtn");
	if(!foo.children.length > 0){
		foo.appendChild(element);
	}
}
$(document).ready(function() {
	if (document.URL.indexOf("code") != -1) {

		$("#authCode").show();
	} else {
		$("#authCode").hide();
	}

	if (document.URL.indexOf("token") != -1) {

		$("#accessToken").show();
	} else {
		$("#accessToken").hide();
	}

});
function getAuthenticationCode() {
	var clientId = document.getElementById("clientId").value;
	var clientSecret = document.getElementById("clientSecret").value;

	window.location = "http://10.21.197.78:9082/SpringTestRest/oauth/authorize?response_type=code&client_id="
		+ clientId
		+ "&client_secret="
		+ clientSecret
		+ "&redirect_uri=http://localhost:9081/Oauth2/token.htm?client_id="
		+ clientId;

}
function getAccessToken() {
	var clientId = document.getElementById("clientId").value;
	$
	.ajax({
		headers : {
			'Accept' : "application/json",
			'Content-Type' : "application/json"
		},
		url : "http://10.21.197.78:9082/SpringTestRest/oauth/token?grant_type=authorization_code&code=${param.code}&client_id=demo&client_secret=demo&redirect_uri=http://localhost:9081/Oauth2/token.htm?client_id="
			+ clientId,
			type : 'GET',
			success : function(data) {
				parseJson(data);

			},
			error : function() {
				alert("I'm in Error");
			}
	});
}

function parseJson(data) {
	var key = 'access_token';
	document.getElementById("token").value = data[key];

}