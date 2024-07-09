function ajaxReqMethod(reqType, reqSubUrl, callback) {
   
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open(reqType, 'http://43.143.190.87:8182/' + reqSubUrl);
    if (reqType == 'post') {
        ajaxObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    
    ajaxObj.send(reqPar);

    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            var res = ajaxObj.responseText;
            var jsonObj = JSON.parse(res);

            callback(jsonObj);
            //return jsonObj;
        }
    }

}