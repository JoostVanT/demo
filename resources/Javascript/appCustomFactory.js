app.factory('DataService',function(){
	return { 
		screenFlow:'',
		activetpp:'',
		tpp:'',
		apiList:''
	};
});


app.service('ApiServices',function(DataService){
	  
	var apiObjList =new Array();
	var uId = 1;
	
	var toSave = {
			_name:'',
			_validTo:'',
			_validFrom:'',
			_blocked:'',
			_service:'',
			_mutation:'',
			_granLevel:'',
			_granLevelId:'',
			apiIndx:'',
			enableApiChangeLnk:'',
			_apiId:''
			
	
	};
		this.save = function(apiObj){
		
			if(apiObj.apiIndx == null){
				
				var toSave = {
						_name:'',
						_validTo:'',
						_validFrom:'',
						_blocked:'',
						_service:'',
						_mutation:'',
						_granLevel:'',
						_granLevelId:'',
						apiIndx:'',
						_apiId:''
						
				
				};
				
				var unq = uId++;
			
				toSave.apiIndx = unq;
				
				if(null != apiObj.apiService){
					toSave._service = apiObj.apiService;
					toSave._name = apiObj.apiService.name;
					toSave._apiId = apiObj.apiService.apiId;
				}
				toSave._validTo = apiObj.validTo;
				toSave._validFrom = apiObj.validFrom;
				toSave._blocked = apiObj.blocked;
				
				if(null != apiObj.grntlvl){
					toSave._granLevel = apiObj.grntlvl;
					toSave._granLevelId = apiObj.grntlvl.id;
				}
				
				toSave.enableApiChangeLnk = 'new';
				
				apiObjList.push(toSave);
				
			}
			else {
				
	            //for existing api , find this contact using apiIndx
                //and update it.
                for (i in apiObjList) {
                    if (apiObjList[i].apiIndx == apiObj.apiIndx) {
                    	
                    	toSave = apiObjList[i];
                    	
                    	if(null != apiObj.apiService){
        					toSave._service = apiObj.apiService;
        					toSave._name = apiObj.apiService.name;
        					toSave._apiId = apiObj.apiService.apiId;
        				}
                    	
        				toSave._validTo = apiObj.validTo;
        				toSave._validFrom = apiObj.validFrom;
        				toSave._blocked = apiObj.blocked;
        				
        				if(null != apiObj.grntlvl){
        					toSave._granLevel = apiObj.grntlvl;
        					toSave._granLevelId = apiObj.grntlvl.id;
        				}
        				
        				if(null != DataService.activetpp ){
        					var actApiArr = DataService.activetpp.apiAccess;
        				if(null != actApiArr && actApiArr != undefined && null != actApiArr[i]){
        					
        					var actApiobj = actApiArr[i];
        					
        					if(actApiobj.validTo != apiObj.validTo){
        						toSave.enableApiChangeLnk = 'changed';
        					}
        					else if(actApiobj.validFrom != apiObj.validFrom){
        						toSave.enableApiChangeLnk = 'changed';
        					}
        					else if(actApiobj.grntlvl != apiObj.grntlvl.name){
        						toSave.enableApiChangeLnk = 'changed';
        					}
        					else if(actApiobj.blockedStatus != apiObj.blocked){
        						toSave.enableApiChangeLnk = 'changed';
        					}
        					else{
        						toSave.enableApiChangeLnk = 'unchanged';
        					}
        				}
        				else{
        					toSave.enableApiChangeLnk = 'new';
        				}
        				
        				
        				}
        				
        				apiObjList[i] = toSave;
                    }
                }
            }
		};
		
		this.get = function(apiIndx){
			for(i in apiObjList){
				if(apiObjList[i].apiIndx == apiIndx){
					//return apiObjList[i];
					
					var apiObj = {
							name:'',
							validTo:'',
							validFrom:'',
							blocked:'',
							service:'',
							grntlvl:'',
							granLevelId:'',
							apiIndx:''
							
					
					};
					
					toSave = apiObjList[i];
					apiObj.name = toSave._name;
					apiObj.validTo = toSave._validTo;
					apiObj.validFrom = toSave._validFrom;
					apiObj.blocked = toSave._blocked;
					apiObj.apiService = toSave._service;
					apiObj.grntlvl = toSave._granLevel;
					apiObj.apiIndx = toSave.apiIndx;
					
					
					return apiObj; 
					
					
				}
			}
		};
		
		
		this.list = function(){
			
			//return apiObjList;
			var apiList = new Array();
			for(i in apiObjList){
				
				
				var apiObj = {
						apiId:'',
						name:'',
						validTo:'',
						validFrom:'',
						blocked:'',
						apiService:'',
						grntlvl:'',
						granLevelId:'',
						apiIndx:'',
						//enableApiChangeLnk:false
						
				
				};
				
				toSave = apiObjList[i];
				apiObj.name = toSave._name;
				apiObj.validTo = toSave._validTo;
				apiObj.validFrom = toSave._validFrom;
				apiObj.blocked = toSave._blocked;
				apiObj.apiService = toSave._service;
				apiObj.grntlvl = toSave._granLevel;
				apiObj.apiIndx = toSave.apiIndx;
				apiObj.enableApiChangeLnk = toSave.enableApiChangeLnk; 
				apiObj.apiId = toSave._apiId;
				apiList.push(apiObj);
				
				
			}
			
			return apiList;
			
			
		};
		
		this.remove = function(apiIndx){			
			for(i in apiObjList){
				if(apiObjList[i].apiIndx == apiIndx){
					apiObjList.splice(i,1);
				}
			}
		};
		
		this.removeAll = function(){	
			uId = 1;
			apiObjList.length=0;
		};
		
		this.addAll = function(apiArr,actApi){
			
			for(i in apiArr){
				
				var service = {
								name:'',
								validTo:'',
								validFrom:'',
								blocked:'',
								apiId:'',
								mutation:'',
								granLevelId:''					 
						
				};
				
				var apiObjN = {
						_name:'',
						_validTo:'',
						_validFrom:'',
						_blocked:'',
						_apiId:'',
						_mutation:'',
						_granLevelId:'',
						_service:'',
						apiIndx:'',
						enableApiChangeLnk:''
						
				
				};
				
				//apiObj = apiArr[i];
				var service = apiArr[i];
				var grntlvlObj ={
						id:'',
						name:''
											 
				};
				//Code to be changed 
			if(apiArr[i].grantLevelId == '1000'){
					grntlvlObj.id = 1000;
					grntlvlObj.name = "Client credentials";
				}else if(apiArr[i].grantLevelId == '4000'){
					grntlvlObj.id = 4000;
					grntlvlObj.name = "Authorisation code";
				}
				
				apiObjN._name = apiArr[i].name;
				apiObjN._validTo = apiArr[i].validTo;
				apiObjN._validFrom = apiArr[i].validFrom;
				
				
				
				if(apiArr[i].blocked == 'Y')
					apiObjN._blocked = 'Yes';
				else if(apiArr[i].blocked == 'N')
					apiObjN._blocked = 'No';
				
				
				//apiObjN.blocked = apiArr[i].blocked;
				apiObjN._apiId = apiArr[i].apiId;
				apiObjN._mutation = apiArr[i].mutation;
				apiObjN._granLevelId = apiArr[i].granLevelId;
				apiObjN.apiIndx=uId++;
				apiObjN._service = service;
				apiObjN._granLevel = grntlvlObj;
				
				if(actApi.length > i){
					actApi[i].apiIndx = apiObjN.apiIndx;
					actApi[i].grntlvl = grntlvlObj.name;
					actApi[i].blockedStatus = apiObjN._blocked;
					//apiObjN.enableApiChangeLnk = true;
					apiObjN.enableApiChangeLnk = 'unchanged';
				}
				else{
					apiObjN.enableApiChangeLnk = 'new';
				}
				apiObjList.push(apiObjN);
			}
			
		};
		
		

		
		this.getApiAccessList = function(newArr){
			var apiAccessList = new Array();
			for(i in newArr){
		
				var api ={
						name:'',
						validTo:'',
						validFrom:'',
						blocked:'',
						apiId:'',
						mutation:'',
						granLevelId:'',
						apiIndx:''
				};
				
				api.name = newArr[i].name;
				api.validTo = newArr[i].validTo;
				api.validFrom = newArr[i].validFrom;
				
				if(newArr[i].blocked == 'Yes')
					api.blocked = 'Y';
				else if(newArr[i].blocked == 'No')
					api.blocked = 'N';

				api.apiId = newArr[i].apiId;
				
				api.mutation = newArr[i].mutation;
				api.grantLevelId = newArr[i].grntlvl.id;
				api.apiIndx = uId++;				
				apiAccessList.push(api);
				
			}
			
			return apiAccessList;
		};
});
