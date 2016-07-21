/**
 * Created by liling on 7/20/16.
 */
app.factory('$Ajax',['$http','$location','$q',function ($http,$location,$q) {

    var _this = {};

    _this.setHeader = function(name, value){
        $http.defaults.headers.common[name] =value;
    };

    _this.setHeader('Content-Type','application/json');

    _this.formPost = function(dom,url,success,error) {

        //url = '/api' + (url[0]==='/'?'':'/') + url;
        var options = {
            url: url,
            type:'post',
            beforeSend: function(xhr) {
                xhr.setRequestHeader("auth-token",$.cookie("username"));
            },
            success: function(data) {
                if($.isFunction(success)) {
                    success(data);
                }
            },
            error: function(data) {
               // checkAuthorizedStatus(data);
                if($.isFunction(error)) {
                    error(data);
                }
            }
        };
        $(dom).ajaxSubmit(options);
    };


    return _this;
}]);