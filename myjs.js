/**
 * Created by lcc on 15/12/14.
 */
angular.module('app',[])
    .controller('MyCtrl',function($scope){
        $scope.msg="铖城";
        $scope.user={name:'',pwd:''};
        $scope.errormsg="";
        $scope.reverse=function(){
            return $scope.msg.split("").reverse().join("");
        };
        $scope.login=function(){
            if($scope.user.name=="111" && $scope.user.pwd=="111"){
                alert("登入成功");
            }else{
                $scope.errormsg="用户名或者密码错误";
            }
        }
    });