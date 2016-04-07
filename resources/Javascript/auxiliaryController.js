
app.controller("addAPIController", function($scope,DataService,ApiServices) {
	
		$scope.title="Add API";
		$scope.resultset = DataService;
		$scope.resultset.tpp = DataService.tpp;
		$scope.resultset.flowStatus = $scope.resultset.tpp.flowStatus;
		
		
		if($scope.resultset.screenFlow == 'change'){
		
			ApiServices.removeAll();
			if(null != $scope.resultset.activetpp){
				ApiServices.addAll($scope.resultset.tpp.apiAccess,$scope.resultset.activetpp.apiAccess);
			}
			else{
				ApiServices.addAll($scope.resultset.tpp.apiAccess,new Array());
			}
			$scope.resultset.tpp.apiAccess = ApiServices.getApiAccessList(ApiServices.list());
		}
		
		if($scope.resultset.screenFlow == 'apiAddition'){
			
			if(ApiServices.list().length > 0)
				$scope.resultset.tpp.apiAccess = ApiServices.getApiAccessList(ApiServices.list());
		}
		
		
		if($scope.resultset.screenFlow == 'create'){
			
			ApiServices.removeAll();
			$scope.resultset.tpp.flowStatus = "New";
		}
		
		if($scope.resultset.screenFlow == 'overview'){
			
		}
		
		
	 
		 $scope.apiList = ApiServices.list();
   	 	 
		 if($scope.apiList.length > 0){
			 $(apiTab).show();
		 }
		 else{
			 $(apiTab).hide();
		 }
	 
});



app.controller("reviewAPIChangeController", function($scope,$routeParams,DataService,ApiServices) {
	
	var changeTppApi = ApiServices.list();
	
	var _apiIndx = $routeParams.apiIndx;
	$scope.actApiObj = null;

	
	var i=0;
	for (i in changeTppApi ){
		
		if(changeTppApi[i].apiIndx == _apiIndx ){
			$scope.changeApiObj = changeTppApi[i];
			
			if(null != DataService.activetpp){
				var activeTppApi = DataService.activetpp.apiAccess;
				if(null != activeTppApi && activeTppApi != undefined){
					if(activeTppApi[i].apiIndx == _apiIndx){
						$scope.actApiObj = activeTppApi[i];
					}
				}
			}
			
		}
		
	}
	
	$scope.oldValue = {
			validTo:'',
			validFrom:'',
			blocked:'',
			grntlvl:''
	};
	
	if(null != $scope.actApiObj || undefined != $scope.actApiObj){
		if($scope.actApiObj.grntlvl != $scope.changeApiObj.grntlvl.name){
			$scope.oldValue.grntlvl = $scope.actApiObj.grntlvl; 
		}
		if($scope.actApiObj.blockedStatus != $scope.changeApiObj.blocked){
			$scope.oldValue.blocked = $scope.actApiObj.blockedStatus; 
		}
		if($scope.actApiObj.validFrom != $scope.changeApiObj.validFrom){
			$scope.oldValue.validFrom = $scope.actApiObj.validFrom; 
		}
		if($scope.actApiObj.validTo != $scope.changeApiObj.validTo){
			$scope.oldValue.validTo = $scope.actApiObj.validTo; 
		}
	}
	else{
		
		$scope.actApiObj = {
				name:'',
				validTo:'',
				validFrom:'',
				blocked:'',
				service:'',
				grntlvl:'',
				granLevelId:'',
				apiIndx:''
				
		
		};
		
	}
	
});




