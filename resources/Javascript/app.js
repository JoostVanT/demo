var app=angular.module('tpAdmin', ['ngRoute','ui.bootstrap']);
app.config(function ($routeProvider, $locationProvider) {
	//configure the routing rules here
	$routeProvider.when('/apiAdministration', {
		templateUrl: 'apiAdministration.html',
		controller: 'fetchAPIController'
	}).
	when('/updateAPIDetails/:apiId', {
		templateUrl: 'updateAPIDetails.html',
		controller: 'updateAPIController'
	}).
	when('/createTPP', {
		templateUrl: 'createTPP.html',
		controller: 'createTPPController'
	}).
	when('/createTPP/:tppId', {
		templateUrl: 'createTPP.html',
		controller: 'createTPPController'
	}).
	when('/changeTPP/:tppId', {
		templateUrl: 'createTPP.html',
		controller: 'changeTPPController'
	}).
	when('/changeOverview', {
		templateUrl: 'changeOverview.html',
		controller: 'overviewTPPController'
	}).
	when('/tppDetails/:tppId', {
		templateUrl: 'tppDetails.html',
		controller: 'changeTPPController'
	}).
	when('/addAPI', {
		templateUrl: 'addAPI.html',
		controller: 'addAPIController'
	}).  
	when('/apiMaintenance',{
	        templateUrl: 'apiMaintenance.html',
	        controller: 'apiMaintenanceController'
	}).
	when('/apiMaintenance/:apiIndx',{
	        templateUrl: 'apiMaintenance.html',
	        controller: 'editApiController'
   }).
   when('/apiReview/:apiIndx',{
        	templateUrl: 'apiReview.html',
            controller: 'addApiReviewController'
    }).
	when('/searchTPP', {
			templateUrl: 'searchTPP.html',
			controller: 'searchTPPController'
	}).
	when('/reviewAPIChange/:apiIndx', {
			templateUrl: 'reviewAPIChange.html',
			controller: 'reviewAPIChangeController'
	}).
	 when('/tppAdministration', {
		 	templateUrl: 'outstandingActionOverview.html',   
		 	controller: "tppAdministrationController" 
	 }).
	 when('/reviewTppChange/:tppId', {
			templateUrl: 'changeOverview.html',
			controller: 'reviewTppChangeController'
		}).
	 otherwise({
	        redirectTo: '/tppAdministration'
	});

	//routing DOESN'T work without html5Mode
	//$locationProvider.html5Mode(true);
});

app.controller('tppAdministrationController', function ($scope,$http, $uibModal, $log) {
        var linkurl= $scope.getUrl() + "/outstandingoverview";
        //var linkurl= "http://10.21.73.234:9082/BAI562_RestWeb/rest/tpp/OutstandingOverview";
        //var linkurl= "http://10.21.197.78:9082/BAI562_RestWeb/rest/tpp/searchtpp?id=1&name=";
        $('#apiLink').removeClass('active');		
    	$('#tppLink').addClass('active');
    	$('#sidebar').show();
    	$scope.loader = {
   			 loading: false,
   	};
   	$scope.loader.loading = true ;
		$http({	
			method: 'GET',
			url: linkurl,   
			data    : "", // pass in data as strings
			headers : { 'Content-Type': "application/json" }  
		})
		.success(function(data) {	   

			/*$scope.data= data;
			$scope.numberOfPages=function(){
				return Math.ceil($scope.data.length/$scope.pageSize);                
			};
			*/
			$scope.data= data;
			$scope.loader.loading = false ;
			//submittedTpp
			$scope.submittedTpp = $scope.data.submittedTpp;
			$scope.action = $scope.getAction($scope.submittedTpp)
			$scope.submittedTppSortType     = 'actionDate'; // set the default sort type
			$scope.submittedTppSortReverse  = false;  // set the default sort order
			$scope.submittedTppSearch   = '';     // set the default search/filter term
			
			//rejectedTpp
			$scope.rejectedTpp = $scope.data.rejectedTpp;
			$scope.rejectedTppSortType     = 'actionDate'; // set the default sort type
			$scope.rejectedTppSortReverse  = false;  // set the default sort order
			$scope.rejectedTppSearch   = '';     // set the default search/filter term
			
			
			//savedTpp
			$scope.savedtpp = $scope.data.savedTpp;
			$scope.savedTppSortType     = 'actionDate'; // set the default sort type
			$scope.savedTppSortReverse  = false;  // set the default sort order
			$scope.savedTppSearch   = '';     // set the default search/filter term
			
			$scope.rejectTpp = function (size, tpp) {
				  var modalInstance = $scope.getModalInstance(false, "rejectTpp.html", size, tpp); 
				 
				  modalInstance.result.then(function () {
					  $log.info('Modal dismissed at: ' + new Date());
			    });
			  };
			
			$scope.getMutation = function(mutation) {
				return $scope.getAction(mutation);
			  }; 
			/*$scope.numberOfPages=function(){
				return Math.ceil($scope.submittedTpp.length/$scope.pageSize);                
			};*/
			if($scope.data.messagesForXML != null){	
				var msg=$scope.data.messagesForXML.messages[0].messageKeyId;
				errorHandling(msg);
			}else{
				//if($scope.data.length != 0)	
				//	$(searchResult).show();
			}		

			  
		})
		.error(function(data){
			var msg="Unable to fetch the TPP details for the given TPP id/TPP Name";
			errorHandling(msg);
		});		
		$scope.currentPage = 0;
		$scope.pageSize = 15;	   
		
		
        });


function errorHandling(message){	
	if("MESSAGE_DAO374_0013" == message){
		message= message + ": User may not authorise its own change";
	}else if("MESSAGE_BAI560_0019" == message){
		message= message + ": TPP is blocked";
	}else if("MESSAGE_BAI560_0020" == message){
		message = message + ": TPP does not have API access";
	}else if("MESSAGE_BAI560_0011" == message){
		message = "Technical Error Occurred";
	}else if("MESSAGE_WEB000_999" == message){
		message = "Technical Error Occurred";
	}else if("MESSAGE_BAI560_0008" == message){
		message = "No records found";
	}else if("MESSAGE_BAI560_0003" == message){
		message = "Account Number is missing";
	}else if("MESSAGE_BAI560_0004" == message){
		message = "TPP Id is missing";
	}else if("MESSAGE_RST560_0001" == message){
		message= message + ": Account Number is missing";
	}else if("MESSAGE_RST560_0002" == message){
		message = message + ": From Date is missing";
	}else if("MESSAGE_RST560_0003" == message){
		message = "To Date is missing";
	}else if("MESSAGE_RST560_0004" == message){
		message = "Tpp id is missing";
	}else if("MESSAGE_RST560_0005" == message){
		message = "From Date is missing";
	}else if("MESSAGE_RST560_0006" == message){
		message = "Start date greater than end date";
	}else if("MESSAGE_RST560_0007" == message){
		message = "Invalid IBAN account number";
	}else if("MESSAGE_RST560_0008" == message){
		message = "To date format is invalid";
	}else if("MESSAGE_RST560_0009" == message){
		message = "From date format is invalid";
	}
	var dialogInstance1 = new BootstrapDialog({
		message: message
	});
	setTimeout(function(){ dialogInstance1.open(); }, 20);	
}

function displayBootstrapDialog(title, msg){		
	var dialogInstance1 = new BootstrapDialog({
		title: title,
		message: msg
	});
	setTimeout(function(){ dialogInstance1.open(); }, 20);	
}



app.controller("overviewTPPController",function($scope,$http,DataService,$window,ApiServices, $uibModal){
	$(detailsResult).hide();
	$scope.resultset = DataService;
	$scope.resultset.screenFlow = "overview";
	$scope.resultset.tpp.apiAccess='';
	$scope.resultset.tpp.apiAccess = ApiServices.getApiAccessList(ApiServices.list());
	
	if($scope.resultset.tpp.flowStatus != "New"){
		$scope.previous = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "PREVIOUS");
		$scope.save = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "SAVE");
		$scope.submit = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "SUBMIT");
		$scope.authorize = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "AUTHORIZE");
		$scope.reject = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "REJECT");
		$scope.withdraw = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "WITHDRAW");
	}else{
		$scope.previous = true;
		$scope.save = true;
		$scope.submit = true;
		//$scope.authorize = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "AUTHORIZE");
		//$scope.reject = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "REJECT");
		//$scope.withdraw = $scope.getButtonAccess($scope.resultset.tpp.actionsforXML, "WITHDRAW");
	}
	$scope.apiList = ApiServices.list();
	//$scope.enableApiChangeLnk = false;
	var activeTPP=$scope.resultset.activetpp;
	
	if( $scope.resultset.tpp.apiAccess!=undefined){
		if($scope.resultset.tpp.apiAccess.length!=0){
		$(detailsResult).show(); 
     }
	}
	if (!angular.equals($scope.resultset.tpp, $scope.resultset.activetpp)) {
		$scope.change={
				id:'',
				name:'',
				blocked:'',
				oauthRedirectUrl:'',
				certificateIssuer:'',
				certificateDN:'',
				flowStatus:''					 
		};
		if(activeTPP != null){
		//	$scope.enableApiChangeLnk = true;
			
			activeTPP.blocked = $scope.getBlocked(activeTPP.blocked);
			if($scope.resultset.tpp.id!=activeTPP.id)				 
				$scope.change.id = activeTPP.id;		
			if($scope.resultset.tpp.name!=activeTPP.name)
				$scope.change.name = activeTPP.name;				 
			if($scope.resultset.tpp.blocked!=activeTPP.blocked)
				$scope.change.blocked = activeTPP.blocked;
			if($scope.resultset.tpp.oauthRedirectUrl!=activeTPP.oauthRedirectUrl)
				$scope.change.oauthRedirectUrl = activeTPP.oauthRedirectUrl;
			if($scope.resultset.tpp.certificateIssuer!=activeTPP.certificateIssuer)
				$scope.change.certificateIssuer = activeTPP.certificateIssuer;
			if($scope.resultset.tpp.certificateDN!=activeTPP.certificateDN)
				$scope.change.certificateDN = activeTPP.certificateDN;
			if($scope.resultset.tpp.flowStatus!=activeTPP.flowStatus)
				$scope.change.flowStatus = activeTPP.flowStatus;
		}else{
			$scope.change={
						id:'',
						name:'',
						blocked:'',
						oauthRedirectUrl:'',
						flowStatus:''					 
				};
		}
		
	}



	$scope.tppDetails=function(button,operation){
		var linkUrl;
		var msg;
		if(button == 1) {
			$scope.toDo = 'Save';
		} else if(button == 2) {
			$scope.toDo = 'Submit';
		}
		var operation= $scope.toDo;
		$scope.resultset=DataService;
		var tppId=$scope.resultset.tpp.tppId;
		$scope.resultset.tpp.blocked = $scope.setBlocked($scope.resultset.tpp.blocked);
		if(tppId == null)
			linkUrl= $scope.getUrl() +"rest/tpp";
		else if(tppId != null)
			linkUrl= $scope.getUrl() + "rest/tpp/"+tppId;
		
		$http({
			method: 'POST',
			url: linkUrl+"?operation="+operation,
			data    : $scope.resultset.tpp, // pass in data as strings
			headers : { 'Content-Type': "application/json" }  
		})
		.success(function(data) {	   
			
			$window.location.href = "#home";
			$scope.resultset=DataService;
			$scope.data = data;	 
			//alert ($scope.data.messagesForXML);
			if($scope.data.messagesForXML != null){	
				var msg=$scope.data.messagesForXML.messages[0].messageKeyId;
				errorHandling(msg);
			}else{
				if(operation=='Save')
					msg="TPP saved successfully";
					else if(operation=='Submit')
					msg="TPP submitted successfully";
				errorHandling(msg);
			}		

			/*if($scope.resultset.length != 0)	
				$(searchResult).show();  */
		})
		.error(function(data){
			msg="Unable to save/submit the TPP Details";
			errorHandling(msg);

		}
		);
	};

	  $scope.withdrawTpp = function (size) {
		  var modalInstance = $scope.getModalInstance(false, "withdrawTpp.html", size, $scope.resultset.tpp); 
		  
		  modalInstance.result.then(function (tpp) {
 				$scope.deleteRequest(tpp, { 'Content-Type': "application/json" } , "Withdraw");
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

	  $scope.rejectTpp = function (size) {
		  var modalInstance = $scope.getModalInstance(false, "rejectTpp.html", size, $scope.resultset.tpp); 
		 
		  modalInstance.result.then(function (tpp) {
			  $scope.postRequest(tpp, { 'Content-Type': "application/json" } , "Reject");
		  }, function () {
			  $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

});
app.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});
app.controller("createTPPController",function($scope,DataService,ApiServices,$window){

	$scope.title="Create TPP";
	$scope.resultset = DataService;
	$scope.resultset.tpp = '';
	$scope.resultset.activetpp='';
	$scope.resultset.flowStatus = "NEW";
	$scope.resultset.screenFlow='create';
	ApiServices.removeAll();
	$scope.validateInput=function(){
		if($scope.resultset.tpp.name==undefined){
			var msg="Name is mandatory";
			errorHandling(msg);
		}else{
			$window.location.href = "#addAPI";
		}
	};

	$scope.openfileDialog = function() {
	    $("#fileLoader").click();
	};

		
			 $scope.showContent = function($fileContent){
			        $scope.content = $fileContent;
			      		var c = new X509();			      		
			     		c.readCertPEM($fileContent);
			     		//var sIssuer    = c.getIssuerString();    
			     		//var sSubject   = c.getSubjectString();   
			     		var str1=c.getIssuerString();
			     		var str2=c.getSubjectString();
			     		String.prototype.replaceAll = function(s,r){return this.split(s).join(r)}
			     		if (str1.substring(0, 1) == '/') { 
			     			  str1 = str1.substring(1);
			     		}
			     		if (str2.substring(0, 1) == '/') { 
			     			  str2 = str2.substring(1);
			     		}
			     		str1=str1.replaceAll("/", ",").split(",").reverse().join();
			     		str2=str2.replaceAll("/", ",").split(",").reverse().join();
			     		var foundIssuer=str1.search("undefined");
			     		var foundDN=str2.search("undefined");
			     		if(foundIssuer == -1 || foundDN == -1){
			     			$scope.resultset.tpp.certificateIssuer = str1;
			         		$scope.resultset.tpp.certificateDN = str2;
			     		} 
			     		else{
			     			var msg="Invalid Certificate file!";
			     			errorHandling(msg);
			     		}
			    };
				
});




app.controller("changeTPPController",function($scope,$http,$routeParams,DataService,$window) {
	//$(detailsResult).hide();
	var id = $routeParams.tppId;


	$http({
		method: 'GET',
		//url: "http://10.21.197.78:9082/BAI562_RestWeb/rest/tpp/"+ id,
		url: $scope.getUrl() +"tppmanagerequest/"+ id,
		data    : "", // pass in data as strings
		headers : { 'Content-Type': "application/json" }  
	})
	.success(function(data) {	 
		$scope.resultset = DataService;
		$scope.resultset.screenFlow='change';
		$scope.title="Change TPP";
		var tpp=data.tpp;
		$scope.resultset.activetpp=data.activeTpp;
		$scope.resultset.tpp=data.thirdPartyPaymentServiceProviderManageRequest;
		
		
		
		var apiArr = data.thirdPartyPaymentServiceProviderManageRequest.targetTpp.apiAccess;
		
		
		if(null != apiArr){
			for(j in apiArr){
			
			

				if(apiArr[j].blocked == 'Y')
					apiArr[j].blockedStatus ='Yes';
				else if(apiArr[j].blocked == 'N')
					apiArr[j].blockedStatus ='No';

				if(apiArr[j].granLevelId == '1000'){
					apiArr[j].granLevelName = "Client credentials";
				}if(apiArr[j].granLevelId == '4000'){
					apiArr[j].granLevelName = "Authorisation code";
				}
				if(apiArr[j].validFrom!=undefined){
					apiArr[j].validFrom=new Date(apiArr[j].validFrom);
				}
			if(apiArr[j].validTo!=undefined){						
					apiArr[j].validTo=new Date(apiArr[j].validTo);
				} 
			}

			
		
		}
		
		$scope.resultset.apiList = apiArr;
		
		
		$scope.resultset.flowStatus = $scope.resultset.tpp.flowStatus;
		$scope.resultset.tpp.blocked = $scope.getBlocked($scope.resultset.tpp.blocked);
		$scope.validateInput=function(){
			if($scope.resultset.tpp.name==undefined || $scope.resultset.tpp.name.trim()==''){
				var msg="Name is mandatory";
				errorHandling(msg);
			}else{
				$window.location.href = "#addAPI";
			}
		};
		/*if($scope.resultset.tpp.apiAccess.length!=0){
			$(detailsResult).show(); 	   	  							
		}*/
		$scope.openfileDialog = function() {
		    $("#fileLoader").click();
		};
		$scope.showContent = function($fileContent){
			$scope.content = $fileContent;
      		var c = new X509();			      		
     		c.readCertPEM($fileContent);
     		var str1=c.getIssuerString();
     		var str2=c.getSubjectString();
     		String.prototype.replaceAll = function(s,r){return this.split(s).join(r)}
     		if (str1.substring(0, 1) == '/') { 
     			  str1 = str1.substring(1);
     		}
     		if (str2.substring(0, 1) == '/') { 
     			  str2 = str2.substring(1);
     		}
     		str1=str1.replaceAll("/", ",").split(",").reverse().join();
     		str2=str2.replaceAll("/", ",").split(",").reverse().join();
     		var foundIssuer=str1.search("undefined");
     		var foundDN=str2.search("undefined");
     		if(foundIssuer == -1 || foundDN == -1){
     			$scope.resultset.tpp.certificateIssuer = str1;
         		$scope.resultset.tpp.certificateDN = str2;
     		} 
     		else{
     			var msg="Invalid Certificate file!";
     			errorHandling(msg);
     		}
		};

	})
	.error(function(data){
		var msg="Unable to fetch the TPP details for the given TPP id";
		errorHandling(msg);

	}
	);

});




app.controller("searchTPPController",function($scope,$http) {
	
	//InitService.$http.GET;
		
	$(searchResult).hide();
	$scope.searchTPP=function(){

		var linkurl;
		var tppId= $scope.tppId;
		var name=$scope.name;
		if(tppId!== undefined && tppId!== null && (name===undefined || name===null || name==""))
			linkurl= $scope.getUrl() + "thirdpartypaymentserviceproviders?id="+tppId+"&name=";
		else if(name!==undefined && name!==null && (tppId===undefined || tppId===null || tppId==""))
			linkurl= $scope.getUrl()+ "thirdpartypaymentserviceproviders?id=&name="+name;			
		$http({	
			method: 'GET',
			url: linkurl,   
			data    : "", // pass in data as strings
			headers : { 'Content-Type': "application/json" }  
		})
		.success(function(data) {	   

			$scope.resultset = data.thirdPartyPaymentServiceProviderList;
			//$window.location.href = "#home";
			//$scope.resultset=DataService;
			$scope.data = data;	 
			//alert ($scope.data.messagesForXML);
			if($scope.data.messagesForXML != null){	
				var msg=$scope.data.messagesForXML.messages[0].messageKeyId;
				errorHandling(msg);
			}else{
				if($scope.resultset.length != 0)	
					$(searchResult).show();
			}		

			  
		})
		.error(function(data){
			var msg="Unable to fetch the TPP details for the given TPP id/TPP Name";
			errorHandling(msg);
		});			
		/* $scope.currentPage = 0;
    $scope.pageSize = 10;	   
    $scope.numberOfPages=function(){
        return Math.ceil($scope.resultset.length/$scope.pageSize);                
    }

  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.search   = '';     // set the default search/filter term
		 */	 };
});

app.controller("reviewTppChangeController",function($scope,$http,$routeParams,DataService,$window,ApiServices,$uibModal, $log) {
	$(detailsResult).hide();
	//$(rejectionReason).hide();
	var id = $routeParams.tppId;

	
	$http({
		method: 'GET',
		//url: "http://10.21.197.78:9082/BAI562_RestWeb/rest/tpp/"+ id,
		url: $scope.getUrl() +"rest/tpp/details/"+ id,
		data    : "", // pass in data as strings
		headers : { 'Content-Type': "application/json" }  
	})
	.success(function(returnObject) {
		var data = returnObject.tppDetails;
		var actions = returnObject.actions;
		$scope.previous = $scope.getButtonAccess(actions, "PREVIOUS");
		$scope.save = $scope.getButtonAccess(actions, "SAVE");
		$scope.submit = $scope.getButtonAccess(actions, "SUBMIT");
		$scope.authorize = $scope.getButtonAccess(actions, "AUTHORIZE");
		$scope.reject = $scope.getButtonAccess(actions, "REJECT");
		$scope.withdraw = $scope.getButtonAccess(actions, "WITHDRAW");

		
		$scope.resultset = DataService;
		
		$scope.resultset.screenFlow='change';
		$scope.title="Change TPP";
		var tpp=data.tpp;
		$scope.resultset.activetpp=data.activeTpp;
		$scope.resultset.tpp=data.tpp;
		ApiServices.removeAll();
		if(null != $scope.resultset.activetpp){
			ApiServices.addAll($scope.resultset.tpp.apiAccess,$scope.resultset.activetpp.apiAccess);
		}
		else{
			ApiServices.addAll($scope.resultset.tpp.apiAccess,new Array());
		}
		$scope.actionsForXML = data.tpp.actionsforXML;
				var apiArr = data.tpp.apiAccess;
		
				if( $scope.resultset.tpp.apiAccess!=undefined){
					if($scope.resultset.tpp.apiAccess.length!=0){
					$(detailsResult).show(); 
			     }
				}
		if(null != apiArr){
			for(j in apiArr){
			
			

				if(apiArr[j].blocked == 'Y')
					apiArr[j].blockedStatus ='Yes';
				else if(apiArr[j].blocked == 'N')
					apiArr[j].blockedStatus ='No';

				if(apiArr[j].granLevelId == '1000'){
					apiArr[j].granLevelName = "Client credentials";
				}if(apiArr[j].granLevelId == '4000'){
					apiArr[j].granLevelName = "Authorisation code";
				}
			}

			
		
		}
		$scope.apiList = ApiServices.list();
		$scope.resultset.apiList = apiArr;
		
		
		$scope.resultset.flowStatus = $scope.resultset.tpp.flowStatus;
		$scope.resultset.tpp.blocked = $scope.getBlocked($scope.resultset.tpp.blocked);
		var activeTPP=$scope.resultset.activetpp;
		if (!angular.equals($scope.resultset.tpp, $scope.resultset.activetpp)) {
			$scope.change={
					id:'',
					name:'',
					blocked:'',
					oauthRedirectUrl:'',
					certificateIssuer:'',
					certificateDN:'',
					flowStatus:''					 
			};
			if(activeTPP != null){
			//	$scope.enableApiChangeLnk = true;
				
				activeTPP.blocked = $scope.getBlocked(activeTPP.blocked);
				if($scope.resultset.tpp.id!=activeTPP.id)				 
					$scope.change.id = activeTPP.id;		
				if($scope.resultset.tpp.name!=activeTPP.name)
					$scope.change.name = activeTPP.name;				 
				if($scope.resultset.tpp.blocked!=activeTPP.blocked)
					$scope.change.blocked = activeTPP.blocked;
				if($scope.resultset.tpp.oauthRedirectUrl!=activeTPP.oauthRedirectUrl)
					$scope.change.oauthRedirectUrl = activeTPP.oauthRedirectUrl;
				if($scope.resultset.tpp.certificateIssuer!=activeTPP.certificateIssuer)
					$scope.change.certificateIssuer = activeTPP.certificateIssuer;
				if($scope.resultset.tpp.certificateDN!=activeTPP.certificateDN)
					$scope.change.certificateDN = activeTPP.certificateDN;
				if($scope.resultset.tpp.flowStatus!=activeTPP.flowStatus)
					$scope.change.flowStatus = activeTPP.flowStatus;
			}else{
				$scope.change={
							id:'',
							name:'',
							blocked:'',
							oauthRedirectUrl:'',
							flowStatus:''					 
					};
			}
			
		}
		
		$scope.validateInput=function(){
			if($scope.resultset.tpp.name==undefined || $scope.resultset.tpp.name.trim()==''){
				var msg="Name is mandatory";
				errorHandling(msg);
			}else{
				$window.location.href = "#addAPI";
			}
		};
		

	})
	.error(function(data){
		var msg="Unable to fetch the TPP details for the given TPP id";
		errorHandling(msg);

	}
	);
	$scope.tppDetails=function(button,operation){
		var linkUrl;
		var msg;
		if(button == 1) {
			$scope.toDo = 'Save';
		} else if(button == 2) {
			$scope.toDo = 'Submit';
		}else if(button == 4) {
			$scope.toDo = 'Authorise';
		}
		var operation= $scope.toDo;
		$scope.resultset=DataService;
		var tppId=$scope.resultset.tpp.tppId;
		$scope.resultset.tpp.blocked = $scope.setBlocked($scope.resultset.tpp.blocked);
		if(tppId == null)
			linkUrl= $scope.getUrl() +"rest/tpp";
		else if(tppId != null)
			linkUrl= $scope.getUrl() + "rest/tpp/"+tppId;
		
		$http({
			method: 'POST',
			url: linkUrl+"?operation="+operation,
			data    : $scope.resultset.tpp, // pass in data as strings
			headers : { 'Content-Type': "application/json" }  
		})
		.success(function(data) {	   
			
			$window.location.href = "#home";
			$scope.resultset=DataService;
			$scope.data = data;	 
			//alert ($scope.data.messagesForXML);
			if($scope.data.messagesForXML != null){	
				var msg=$scope.data.messagesForXML.messages[0].messageKeyId;
				errorHandling(msg);
			}else{
				if(operation=='Save')
						msg="TPP saved successfully";
					else if(operation=='Submit')
						msg="TPP submitted successfully";
					else if(operation=='Authorise')
						msg="TPP authorised successfully";
				errorHandling(msg);
			}		

			/*if($scope.resultset.length != 0)	
				$(searchResult).show();  */
		})
		.error(function(data){
			msg=data.messages[0].messageKey;
			errorHandling(msg);

		}
		);
	};
	

	  $scope.withdrawTpp = function (size) {
		  var modalInstance = $scope.getModalInstance(false, "withdrawTpp.html", size, $scope.resultset.tpp); 
		  
		  modalInstance.result.then(function (tpp) {
 				$scope.deleteRequest(tpp, { 'Content-Type': "application/json" } , "Withdraw");
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

	  $scope.rejectTpp = function (size) {
		  var modalInstance = $scope.getModalInstance(false, "rejectTpp.html", size, $scope.resultset.tpp); 
		 
		  modalInstance.result.then(function (tpp) {
			  $scope.postRequest(tpp, { 'Content-Type': "application/json" } , "Reject");
		  }, function () {
			  $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
});


	// Please note that $modalInstance represents a modal window (instance) dependency.
	// It is not the same as the $uibModal service used above.

	app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, tpp) {

	  $scope.tpp = tpp;
	 

	  $scope.ok = function (tpp) {
		 $uibModalInstance.close(tpp);
	  };

	  $scope.cancel = function () {
		 $uibModalInstance.dismiss('cancel');
	  };
	});
app.controller("apiMaintenanceController",function($scope,$filter,ApiServices,$window,$http,DataService) {

	$scope.resultset = DataService;
	//alert("$scope.data "+$scope.data.screenFlow);
	
	$scope.resultset.screenFlow = "apiAddition";
  	
	$scope.title="Add API";
	
	$scope.showVal1 = true;
	$scope.showVal2 = false;
	
	//$scope.apiDDList = $localStorage.apiDropDownLst;
	//$scope.grntlvlDDList = $localStorage.grntLvlDropDownLst;
	
	$http({
		  method: 'GET',
		  url: $scope.getUrl() + "rest/tpp/listapi",
		  data    : "", 
		  headers : { 'Content-Type': "application/json" }  
		 })
		  .success(function(data) {	   
			  $scope.apiDDList = data;
		  })
		  .error(function(data){
			  var msg="Unable to retrieve account information due to restrictions";
			  errorHandling(msg);	
		  }			
	);
	
	$http({
		  method: 'GET',
		  url: $scope.getUrl() + "rest/tpp/listgrantlevel",
		  data    : "", 
		  headers : { 'Content-Type': "application/json" }  
		 })
		  .success(function(data) {	   
			  $scope.grntlvlDDList = data;
		
		  })
		  .error(function(data){
			  var msg="Unable to retrieve account information due to restrictions";
			  errorHandling(msg);	
		  }			
	);
	
	
	$scope.blockedCheck='No';
	  
	  $scope.minStartDate = new Date(); //fixed date
	  
	 $scope.truefalse = false;

	 $scope.open = function($event,opened) {
		 
		
		    $event.preventDefault();
		    $event.stopPropagation();
		    if(opened == "opened1"){
		    	$scope["opened1"] = true;
		    	$scope["opened2"] = false;
		    }
		    else{
		    	$scope["opened1"] = false;
		    	$scope["opened2"] = true;
		    }
		  };
		  
		
			
		  $scope.saveApi = function() {
			 
			  
			if( $scope.apiObj != undefined){
				if( $scope.apiObj.apiService == undefined && $scope.apiObj.validFrom == undefined){
					var msg="Please select a value for Services and Valid from date";
					errorHandling(msg);
				}
				else if($scope.apiObj.apiService == undefined){
					var msg="Please select a value for Services";
					errorHandling(msg);
				}
			
				else if($scope.apiObj.validFrom == undefined){  
					if ($scope.apiMaintenance.validFrom.$error.date) {
						 var msg="Valid From date is invalid";
							errorHandling(msg);
		    			  
		    		 
					}
					else{
						var msg="Please select a value for Valid From Date";
						errorHandling(msg); 
					}
				}
				
				else{
		
			  	var validFrm = $scope.apiObj.validFrom.getTime();
			
			
			    if($scope.apiObj.validTo != undefined ){
			    	var validTo = $scope.apiObj.validTo.getTime();
			    	

			 		if(validTo < validFrm ){
						var msg="Valid To date should be greater than Valid From date";
						errorHandling(msg);
					}else{
						 ApiServices.save($scope.apiObj);
						$window.location.href = "#addAPI";
					}
			    	
			    }
			    else{
			    	if ($scope.apiMaintenance.validTo.$error.date) {
			    			  var msg="Valid To date is invalid";
								errorHandling(msg); 
			    		 
			    	}
			   
			    	else{
			    	 ApiServices.save($scope.apiObj);
						$window.location.href = "#addAPI";
			    	}
			    }
			
			}
			}		
			else{
				var msg="Please select a value for Services";
				errorHandling(msg);
			}
			
			
			
			
		        };

		        $scope.cancelApi = function(){

	    	$window.location.href = '/Demo/home.html#/addAPI';
	    };
});




app.controller("editApiController",function($scope,ApiServices,$routeParams,$window,$http,DataService){
	
	$scope.title="Update API Service";
	$scope.apiObj = ApiServices.get($routeParams.apiIndx);
	$scope.truefalse = true;
	$scope.resultset = DataService;
	$scope.resultset.screenFlow = "editApiController";
	$scope.showVal1 = false;
	$scope.showVal2 = true;
	$scope.blockedCheck=$scope.apiObj.blocked;
	$http({
		  method: 'GET',
		  url: $scope.getUrl() + "rest/tpp/listapi",
		  data    : "", 
		  headers : { 'Content-Type': "application/json" }  
		 })
		  .success(function(data) {	   
			  $scope.apiDDList = data;
		  })
		  .error(function(data){
			  var msg="Unable to retrieve account information due to restrictions";
			  errorHandling(msg);	
		  }			
	);
	
	$http({
		  method: 'GET',
		  url: $scope.getUrl() + "rest/tpp/listgrantlevel",
		  data    : "", 
		  headers : { 'Content-Type': "application/json" }  
		 })
		  .success(function(data) {	   
			  $scope.grntlvlDDList = data;
		
		  })
		  .error(function(data){
			  var msg="Unable to retrieve account information due to restrictions";
			  errorHandling(msg);	
		  }			
	);
	
	 $scope.minStartDate = new Date(); //fixed date
	 
	 $scope.open = function($event,opened) {
		 
		
		    $event.preventDefault();
		    $event.stopPropagation();
		    if(opened == "opened1"){
		    	$scope["opened1"] = true;
		    	$scope["opened2"] = false;
		    }
		    else{
		    	$scope["opened1"] = false;
		    	$scope["opened2"] = true;
		    }
		  };
		  
		  $scope.saveApi = function () {

			  var valid_Frm = null;
			  var valid_To = null;
			
			  
			  if($scope.apiObj.validFrom == undefined){
				  if ($scope.apiMaintenance.validFrom.$error.date) {
						 var msg="Valid From date is invalid";
							errorHandling(msg);
		    			  
		    		 
					}
					else{
						var msg="Please select a value for Valid From Date";
						errorHandling(msg); 
					}
			  }
			  
			  else{
			  
			  if(angular.isDate($scope.apiObj.validFrom) ){
				  valid_Frm = $scope.apiObj.validFrom.getTime();
				}
				else{
					valid_Frm = $scope.apiObj.validFrom;
				}
				
					
			    if($scope.apiObj.validTo != undefined){
			    //	var validTo = $scope.apiObj.validTo.getTime();
			    	
			    	if(angular.isDate($scope.apiObj.validTo)){
			    		valid_To = $scope.apiObj.validTo.getTime();
					}
					else{
						valid_To = $scope.apiObj.validTo;
					}
			    	

			 		if(valid_To < valid_Frm ){
						var msg="Valid To date should be greater than Valid From date";
						errorHandling(msg);
					}else{
						 ApiServices.save($scope.apiObj);
						$window.location.href = "#addAPI";
					}
			    	
			    }
			    else{
			    	
			    	if ($scope.apiMaintenance.validTo.$error.date) {
		    			  var msg="Valid To date is invalid";
							errorHandling(msg); 
		    		 
		    	}
		   
		    	else{
		    	 ApiServices.save($scope.apiObj);
					$window.location.href = "#addAPI";
		    	}
			    }
			  
			  }
			  
			  
			  
			//  ApiServices.save($scope.apiObj);
			
			
			
			
			
			
		//	$window.location.href = '/Demo/home.html#/addAPI';
		  };
	
		  $scope.cancelApi = function(){
		    	
		    	$window.location.href = '/Demo/home.html#/addAPI';
		    };
});

app.controller("addApiReviewController",function($scope,ApiServices,$routeParams,$window,$http){
	
	$scope.title="Review API Service";
	$scope.apiObj = ApiServices.get($routeParams.apiIndx);
	//alert("$scope.apiObj "+$scope.apiObj.apiService.apiName);
	
	var apiArr = new Array();
	apiArr.push($scope.apiObj.apiService);
	
	 $scope.apiDDList =apiArr;
	 var grntArr = new Array();
	 grntArr.push($scope.apiObj.grntlvl);
	 $scope.grntlvlDDList = grntArr;
	$scope.truefalse = true;

	
});


app.controller("updateAPIController", ['$scope', '$http', '$routeParams','$window',function($scope, $http,$routeParams,$window) { 
	var id = $routeParams.apiId;
	//$routeParams.id=1;
	$http({
		method: 'GET',
		url: $scope.getUrl() + "rest/api/"+ id,
		data    : "", // pass in data as strings
		headers : { 'Content-Type': "application/json" }  
	})
	.success(function(data) {	   
		$scope.apiId = data.apiId;
		$scope.apiName = data.apiName;		 
		$scope.apiType = data.type;
		$scope.blocked = data.blocked;
	})
	.error(function(data){
		var msg="Unable to fetch the API details for the given API id";
		errorHandling(msg);

	}
	);
	$scope.saveAPIDetails=function(){
		var apiInfo={
				"blocked":$scope.blocked,
				"apiName":$scope.apiName,
				"type":$scope.apiType,
				"apiId":$scope.apiId			
		};

		$http({
			method: 'POST',
			url: $scope.getUrl() +"rest/api",
			data    : JSON.stringify(apiInfo), // pass in data as strings
			headers : { 'Content-Type': "application/json" }  
		})
		.success(function(data) {	   
			$window.location.href = "#apiAdministration";
		})
		.error(function(data){
			var msg="Unable to retrieve account information due to restrictions";
			errorHandling(msg);

		}
		);
	};

}]);
app.filter('startFrom', function() {
	return function(input, start) {
		start = +start; //parse to int
		return input.slice(start);
	}
});	
app.factory('tppAdminCache', function($cacheFactory) {
	return $cacheFactory('cacheData');
});

app.controller("fetchAPIController",['$scope', '$http', function($scope,$http) {


	$('#sidebar').hide();
	$('#tppLink').removeClass('active');		
	$('#apiLink').addClass('active');

	$http({
		method: 'GET',
		url: $scope.getUrl() +"rest/api",
		data    : "", // pass in data as strings
		headers : { 'Content-Type': "application/json" }  
	})
	.success(function(data) {	   
		//$scope.resultset = data.apiAdminOutputCustomDTO;
		$scope.resultset = data;
	})
	.error(function(data){
		var msg="Unable to fetch the API Details";
		errorHandling(msg);	
	}			
	);	
	$scope.currentPage = 0;
	$scope.pageSize = 10;	   
	$scope.numberOfPages=function(){
		return Math.ceil($scope.resultset.length/$scope.pageSize);                
	};

	$scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.search   = '';     // set the default search/filter term
}]);


app.run(function($http,$window,$rootScope, $filter, $uibModal) {

	  $rootScope.getUrl = function() {
		  return localUrl;
	  };
	  
	  $rootScope.getBlocked = function(blocked) {
		  if("Y" == (blocked) ){
			  return "Yes";
		  }else{
			  return "No";
		  }
	  }; 
		  $rootScope.setBlocked = function(blocked) {
			  if("Yes" == (blocked) ){
				  return "Y";
			  }else{
				  return "N";
			  }
		  };
		  $rootScope.getAction = function(mutation) {
			  if("C" == (mutation) ){
				  return "New";
			  }else if("U" == (mutation) ){
				  return "Changed";
			  }else if("D" == (mutation) ){
				  return "Deleted";
			  }
		  };
		  $rootScope.getButtonAccess = function(actionsForXML, buttonName) {
			
			  var found = $filter('filter')(actionsForXML, {name: buttonName}, true);
			 // alert(found[0].userActionIndicator);
			  if (found.length) {
		        			  if("ALLOWED" == (found[0].userActionIndicator) ){
		        				  //alert("Found : " + found[0].name);
		        				  return true;
		        			  }else{
		        				  return false;
		        			  }
			  }else{
				  return false;
			  }
		  };
		  //return "http://10.21.197.78:9082/BAI562_RestWeb/";
		  $rootScope.postRequest = function(postData, postHeaders, operation) {
			  $http({
					method: 'POST',
					url: $rootScope.getUrl() +"rest/tpp/"+ postData.tppId + "?operation="+operation,
					data    : postData, // pass in data as strings
					headers : postHeaders  
				})
				.success(function(data) {	   
					
					$window.location.href = "#home";
						if(operation=='Save')
								msg="TPP saved successfully";
							else if(operation=='Submit')
								msg="TPP submitted successfully";
							else if(operation=='Reject')
								msg="TPP rejected";
							else if(operation=='Authorize')
								msg="TPP authorized successfully";
							else if(operation=='Withdraw')
								msg="TPP withdrawn successfully";
						errorHandling(msg);
				})
				.error(function(data){
					msg="Unable to save/submit the TPP Details";
					errorHandling(msg);

				}
				);
			//});
};

$rootScope.deleteRequest = function(postData, postHeaders, operation) {
	 // alert("Inside delete Request");
	  $http({
			method: 'DELETE',
			//url: "http://10.21.197.78:9082/BAI562_RestWeb/rest/tpp/"+ id,
			url: $rootScope.getUrl() +"rest/tpp/"+ postData.tppId,
			data    : "", // pass in data as strings
			headers : { 'Content-Type': "application/json" }  
		})
		.success(function(data) { 
			$window.location.href = "#home";
			msg="TPP withdrawn successfully";
			errorHandling(msg);
		})
		.error(function(data){
			msg="Unable to save/submit the TPP Details";
			errorHandling(msg);

		}
		);
	//});
};
$rootScope.getRequest = function(postUrl, postData, postHeaders, operation) {
	  $http({
			method: 'GET',
			//url: "http://10.21.197.78:9082/BAI562_RestWeb/rest/tpp/"+ id,
			url: $scope.getUrl() +"rest/tpp/details/"+ id,
			data    : "", // pass in data as strings
			headers : { 'Content-Type': "application/json" }  
		})
		.success(function(returnObject) {   
			
			return returnObject;
		})
		.error(function(data){
			msg="Unable to save/submit the TPP Details";
			errorHandling(msg);

		}
		);
	//});
};

$rootScope.getModalInstance = function(animationsEnabled, templateUrl, size, tppObject) {
 return $uibModal.open({
    animation: animationsEnabled,
    templateUrl: templateUrl,
    controller: 'ModalInstanceCtrl',
    size: size,
    resolve: {
      tpp: function () {
        return tppObject;
      }
    }
  });
}; 
	});

/*Array.prototype.removeDuplicates = function (){
	alert("in here");
	  var temp=new Array();
	 // this.sort();
	  for(i=0;i<this.length;i++){
	    if(this[i]==this[i+1]) {continue}
	    temp[temp.length]=this[i];
	  }
	  return temp;
	}*/

