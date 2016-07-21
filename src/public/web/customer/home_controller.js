/**
 * Created by liling on 7/20/16.
 */
app.controller("homeController", ['$rootScope','$scope','$Ajax',
    function($rootScope,$scope ,$Ajax) {

        $scope.csvFilesSubmit = function(){
            console.log("$('#uploadCSVForm'): ",document.getElementById("input_file"));
            //get file name from input
            var filename = $('#input_file').val();
            // var filename = $(dom).val();
            var extension = filename.replace(/^.*\./,'');
            if(extension==filename){
                extension='';
            }else{
                extension = extension.toLowerCase();
            }
            if(extension=='csv'){
                var max_size = 1*1024*1024;
                var max_size_str = '1M';
                $scope.filesize = $('#input_file')[0].files[0].size;

                if($('#input_file')[0].files[0].size < max_size){
                    console.log("$('#uploadCSVForm')",$('#uploadCSVForm'));

                    $Ajax.formPost($('#uploadCSVForm'),'/api/importFile', function(data){
                        console.log("formpost");

                      //  InfoBox("文件导入:" + data.successInsert + " 条 , 更新: " + data.successUpdate + " 条 , 失败: " + data.failedCase  + " 条.");
                        //  $scope.successInsert = data.successInsert;
                        //  $scope.successUpdate = data.successUpdate;
                        //  $scope.failedCase = data.failedCase;
                        //window.location.href ="/truck_upload_file_info";

                    },function(error){

                        //ErrorBox("上传失败");
                        console.log("上传失败");
                    })
                }
                else{
                    //ErrorBox('可最大上传文件: '+max_size_str);
                    console.log("可最大上传文件:"+max_size_str);
                    return false;
                }
            }else{
                //ErrorBox('只接受csv文件类型 ');
                console.log("只接受csv文件类型 ");
            }

        }
        
    }
    ]);