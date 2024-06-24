(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[113],{502:function(e){e.exports=JSON.parse('{"pageType":"crud","pageTitle":"Role","pageModuleTitle":"Apps Management","pageDesc":"A role provides access to predefined menus and features depending on the assigned role to an administrator that can have access to what he needs.","crudOpt":{"endpointName":"api/role?mode=summary","baseUrl":"sso","serverSideGrid":false,"rowClickEvent":"edit","detailFromGrid":true,"detailPage":true,"disabledEdit":false,"disabledDelete":false,"disabledAdd":false,"gridTheme":"grid_card","gridSizeLg":"3","gridSizeMd":"6","gridSizeSm":"12","gridStyle":{"background":"linear-gradient(90deg, rgb(210 243 255) 0%, rgb(237 243 255) 100%)"},"gridStyle_dark":{"background":"linear-gradient(90deg, rgb(17 47 58) 0%, rgb(16 42 94) 100%)"},"hideTablePagination":true,"hideTablePageLengthInfo":true,"dynamicColumnsFilterPos":"table-header","detailPageFieldSubHeader":["\'Role ID : \'","name"],"data":{"dynamicColumnsSearchFields":["name","code"],"dynamicColumns":[{"fieldName":"description","textStyle":{"fontSize":"18px","fontWeight":"bold"},"clickToEdit":true},{"fieldName":"name","columnName":"Role Id","inline_value":true,"clickToEdit":true},{"fieldName":"isAdminUser","columnName":"Admin Priviledge","type":"boolean","inline_value":true,"clickToEdit":true}],"dynamicColumnsFilter":[{"fieldName":"id_app","fieldLabel":"App","type":"dropdown","rules":{"required":true},"dataFrom":{"api":"api/app?length=200","resp_key":"data","baseUrl":"sso","field_label":["name","info.appType"],"field_value":"id","field_img":"logo.appLogo","field_label_separator":" ~~~ ","api_getAlways":false}}],"dynamicForm":[{"fieldName":"id_app","fieldLabel":"App","type":"dropdown","dataFrom":{"api":"api/app?length=200","resp_key":"data","baseUrl":"sso","field_label":["name","info.appType"],"field_value":"id","field_img":"logo.appLogo","field_label_separator":" ~~~ ","api_getAlways":false},"disabledOnPage":{"add":false,"edit":true}},{"fieldName":"name","fieldLabel":"Role ID","size":3,"disabledOnPage":{"add":false,"edit":true},"rules":{"required":true,"pattern":{"value":"/^[a-zA-Z0-9_-]+$/","message":"without space & without special character except (_) dan (-)"}}},{"fieldName":"isAdminUser","fieldLabel":"is Admin ?","size":3,"type":"radio","dataFrom":{"value":[{"value":true,"label":"Yes","color":"success"},{"value":false,"label":"No","color":"danger"}]}},{"fieldLabel":"Role Description","fieldName":"description","required":true,"size":6},{"fieldLabel":"App Global Search","fieldName":"global_search_url","size":6,"includeOnPayload":false,"tooltip":"The URL address of the data when typing global search on the navbar. This setting can be different for each role.","rules":{"pattern":{"value":"^(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]+.[^ ]+|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]+.[^ ]+|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^ ]+|www.[a-zA-Z0-9]+.[^ ]+)/$","message":"enter valid url \'http://test.co.id/\', diawali \'http://\' atau \'https://\' + \'example.com\' or \'example.co.id\' + akhiran \'/\'"}}},{"fieldName":"dashboardWidget","fieldLabel":"Widgets Accessibility","size":12,"type":"array","tooltip":"Widget Access will showing on Main Dashboard. This setting can be different for each role."},{"fieldName":"","fieldLabel":"Permission List","fieldDesc":"","type":"relationsCrud","size":12,"relationsCrud":{"pageId":"role_permission_form","pageType":"crud","pageTitle":"Permission","pageDesc":"list of permissions used by this role","menuIcon":"fontAwesome:list-check","pageModuleTitle":"Finance and Accounting","crudOpt":{"endpointName":"api/role_permission","baseUrl":"sso","initialFiltersCondition":[{"fieldNameCurrent":"id_role","value_from_parentFieldName":"id"},{"fieldNameCurrent":"id_app","value_from_parentFieldName":"id_app","disablePageQueryParam":true}],"getApiSummaryData":false,"serverSideGrid":false,"getAlwaysGrid":false,"hideBtnSwitchLayout":true,"hideTableSearchInput":true,"hideTablePageLengthInfo":true,"hideTablePagination":true,"disabledEdit":true,"disabledAdd":false,"disabledDelete":false,"data":{"dynamicColumns":[{"fieldName":"permission_name"},{"fieldName":"post","width":"150px","type":"boolean","center":true,"sortable":false,"editable":true},{"fieldName":"put","width":"150px","type":"boolean","center":true,"sortable":false,"editable":true},{"fieldName":"delete","width":"150px","type":"boolean","center":true,"sortable":false,"editable":true}],"dynamicForm":[{"fieldName":"id_role","isHidden":true},{"fieldName":"id_app","isHidden":true,"includeOnPayload":false},{"fieldName":"id_permission_select","includeOnPayload":false,"fieldLabel":"Permission","size":12,"type":"selectTable","rules":{"required":true},"dataFrom":{"api":"api/permission","get_params":[{"key":"id_role","value":"id_role","valueFrom":"other"},{"key":"id_app","value":"id_app","valueFrom":"other"}],"multiselectToCurrentForm":false,"multiselectToCurrentFormType":"form-repeater","multiselectPayloadExtra":[{"fieldName":"id","alias":"id_permission"}],"baseUrl":"sso","resp_key":"data","api_getAlways":true,"tableOpt":{"crudOpt":{"getAlwaysGrid":true,"data":{"dynamicColumns":[{"fieldName":"title","type":"avatar_title","avatarTitleField":"title","avatarDescField":"subject","avatarClassName":"avatar-square-no-shadow bg-transparent"},{"fieldName":"description"}]}}}}}]}}}}]}}}')}}]);
//# sourceMappingURL=113.ec7715b9.chunk.js.map