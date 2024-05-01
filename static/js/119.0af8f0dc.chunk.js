(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[119],{509:function(e){e.exports=JSON.parse('{"pageType":"crud","pageTitle":"Users","pageModuleTitle":"App","crudOpt":{"endpointName":"api/user","baseUrl":"sso","getApiSummaryData":false,"serverSideGrid":true,"detailPage":true,"detailPageModalSize":"lg","detailPageFieldTitle":["name"],"detailPageFieldTitleSeparator":[" "],"detailFromGrid":true,"getAlwaysGrid":false,"deleteSelection":false,"getApiAfterPut":false,"getApiAfterUpload":true,"getApiAfterPost":false,"getApiAfterDelete":false,"disabledEdit":false,"disabledAdd":false,"disabledDelete":false,"data":{"dynamicColumns":[{"fieldName":"name","columnName":"User","type":"avatar_title","avatarTitleField":["name"],"avatarDescField":"email","avatarImgField":"avatar","clickToEdit":true,"minWidth":"210px"},{"fieldName":"role_name","columnName":"Role","type":"badge","pill":false,"color":"light-info","clickToLink":true,"clickToLinkUrl":"/dyn_pages/_admin_/role/edit","clickToLinkFieldId":"id_role","sortable":false,"center":true},{"fieldName":"unit_name","columnName":"Unit","sortable":false},{"fieldName":"name_employee","columnName":"Employee","showIf":[{"fieldName":"__domainData__.unit.unit_app_attributes.setting.user_employee_mapping"}]},{"fieldName":"approvalLineName","columnName":"Approval Line","showIf":[{"fieldName":"__domainData__.unit.unit_app_attributes.setting.user_employee_mapping"}]},{"fieldName":"isManager","columnName":"Manager","lookupValue":[{"value":true,"label":"","icon":"material:verified","class":"text-warning"}],"minWidth":"100px","center":true,"showIf":[{"fieldName":"__domainData__.unit.unit_app_attributes.setting.user_employee_mapping"}]},{"fieldName":"blockCount","columnName":"Block","type":"badge","color":"danger","center":true}],"dynamicColumnsFilter":[{"fieldName":"id_unit","hideOptionsCodeField":true,"fieldLabel":"Unit","field_label":["name"],"apiParamsName":"filter_unit"},{"fieldName":"id_role","hideOptionsCodeField":true,"fieldLabel":"Role","type":"dropdown","size":4,"field_label":["name"],"apiParamsName":"filter_role","dataFrom":{"api":"api/role?mode=summary","resp_key":"data","baseUrl":"sso","field_label":["name"],"field_value":"id","field_label_separator":" - ","api_getAlways":false}}],"dynamicForm":[{"type":"column","size":2,"children":[{"fieldName":"avatar","fieldLabel":"Photo","type":"file_image","blankWithInitial":true}]},{"type":"column","size":10,"children":[{"fieldName":"username","size":6,"rules":{"required":true,"pattern":{"value":"/^\\\\S*$/","message":"not allowed space"},"maxLength":{"value":15,"message":"Max character length is 15"},"minLength":{"value":4,"message":"Minimum character length is 4"}},"disabledOnPage":{"add":false,"edit":true,"view":true}},{"fieldName":"email","type":"email","size":6,"rules":{"required":true},"disabledOnPage":{"add":false,"edit":true,"view":true}},{"fieldName":"name","fieldLabel":"Name","size":6,"rules":{"required":true}},{"fieldName":"id_role","fieldLabel":"Role","type":"dropdown","size":6,"dataFrom":{"api":"api/role?mode=summary","resp_key":"data","baseUrl":"sso","field_label":["name"],"field_value":"id","field_label_separator":" - ","api_getAlways":false},"initialValueFromOther":"role_name","initialValueFromOtherByLabel":true,"rules":{"required":true}},{"fieldName":"id_unit","size":6,"hideOptionsCodeField":true,"fieldLabel":"Member Of","field_label":["name"],"apiParamsName":"filter_unit","afterChangeFillOther":["id_employee:filter_unit=id"]},{"fieldName":"password","size":6,"type":"password","icon":"material:password","hideOnPage":{"add":false,"edit":false,"view":true},"rules":{"required":true,"pattern":{"value":"/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/","message":"enter 6 - 16 character, have special characters and number"}}},{"fieldName":"last_request_time","size":4,"type":"datetime","includeOnPayload":false,"isDisabled":true,"hideOnPage":{"add":true,"edit":false,"view":false}},{"fieldName":"blockCount","size":2,"type":"number-btn","hideOnPage":{"add":true,"edit":false,"view":false}},{"type":"separator","size":12,"fieldLabel":"Employee Mapping","className":"divider-start divider-dashed fw-bolder","icon":"material:person_search","showIf":[{"fieldName":"__domainData__.unit.unit_app_attributes.setting.user_employee_mapping"}]},{"fieldName":"id_employee","fieldLabel":"Employee","size":6,"type":"dropdown","dataFrom":{"api":"api/user/users_employee","resp_key":"data","baseUrl":"sso","field_label":["FirstName","LastName"],"field_value":"id","field_img":"PhotoPath","field_label_separator":" ","api_getAlways":false,"get_params":[{"key":"filter_unit","value":"id_unit","valueFrom":"other"}]},"initialValueFromOther":"name_employee","initialValueFromOtherByLabel":true,"afterChangeFillOther":["name_employee=FirstName","name_last_employee=LastName","avatar_employee=PhotoPath","approvalLine=ApprovalLine","approvalLineName=ApprovalLine_name","jobLevel_name=JobLevel_name"],"showIf":[{"fieldName":"__domainData__.unit.unit_app_attributes.setting.user_employee_mapping"}]},{"fieldName":"name_employee","isHidden":true},{"fieldName":"avatar_employee","isHidden":true},{"fieldName":"name_last_employee","isHidden":true},{"fieldName":"approvalLine","isHidden":true},{"fieldName":"approvalLineName","isDisabled":true,"showIf":[{"fieldName":"__domainData__.unit.unit_app_attributes.setting.user_employee_mapping"}]},{"fieldName":"jobLevel_name","isHidden":true},{"fieldName":"isManager","fieldLabel":"Manager","size":2,"type":"radio","dataFrom":{"value":[{"value":true,"label":"Yes","color":"success"},{"value":false,"label":"No","color":"danger"}]},"isHidden":true}]}]}}}')}}]);
//# sourceMappingURL=119.0af8f0dc.chunk.js.map