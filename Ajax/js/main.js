$(document).ready(function(){
    $.ajax({
        url: "http://aqua-talk.shop:8080/10-SpringTodoApp/GetTodoList.do",
        type: "GET",
        data: {pickedData},
        success: function(resultData){
            console("todoList");
        }
    });
});
