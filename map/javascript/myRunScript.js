function changeText() {
    document.getElementById("button").innerHTML = "您已经点击我了";
}


function display() {
    Debugger.log("1111111");
    var x = document.getElementById("input3");
    Debugger.log(x);
    Debugger.log(x.innerHTML);
    document.getElementById("text").innerHTML = x.value;

}

//点击按钮隐藏列表

$("#hmc_button").click(function () {
    $("#hmc_select").hide();
});
//点击按钮显示列表
$("#hmc_button2").click(function () {
    $("#hmc_select").show();
});


//点击按钮隐藏地图

$("#hmc_button3").click(function () {
    $("#map").hide(3000, function () {
        alert("您已将地图隐藏!");
    });
});
//点击按钮显示地图
$("#hmc_button4").click(function () {
    $("#map").show(1000);
});


setTimeout(function () {
    // document.getElementById("map").style.display = "none";


}, 3000);


//点击按钮隐藏地图

$("#hmc_button5").click(function () {
    $("#map").hide("slow", function () {
        alert("您已将地图隐藏!");
    });
});
//点击按钮显示地图
$("#hmc_button6").click(function () {
    $("#map").show("fast", function () {
        alert("您已显示地图!");
    });
});

//点击按钮隐藏/显示地图

$("#hmc_button7").click(function () {
    $("#map").toggle("slow", function () {
        alert("toggle()方法已完成");
    });
});

//更改p背景颜色
$(document).ready(function () {
    $("#text").css("background-color", "yellow");
});


//点击更改P字体大小
$("#hmc_button8").click(function () {
    $("#text").css("font-size", "200%");
});

//点击显示P
$("#hmc_button9").click(function () {
    $("#text").css("display", "block");
});

//点击隐藏P
$("#hmc_button10").click(function () {
    $("#text").css("display", "none");
});


$(function () {
    $("[data-toggle='popover']").popover();
});


//点击隐藏警告
$("#hmc_button12").click(function () {
    $("#hmc_alert1").css("display", "none");
});

//点击显示警告
$("#hmc_button13").click(function () {
    $("#hmc_alert1").css("display", "block");
});

$("#myModal").on('shown.bs.modal', function () {
    $("#text2").text("模态框已经显示!");
})

$("#myModal").on('hidden.bs.modal', function () {
    $("#text2").text("模态框已经关闭!");
})
//添加classmap
$("#myCarousel").addClass("hmc_map");
//点击按钮显示地图
$("#hmc_button_showmap").click(function () {


    if ($("#map").css("display") == "none") {
        $("#map").removeClass("hmc_map");
        $("#hmc_button_showmap").text("点击隐藏地图");
        $("#hmc_button_showmap").removeClass("btn-success");
        $("#hmc_button_showmap").addClass("btn-danger");

    } else {
        $("#map").addClass("hmc_map");
        $("#hmc_button_showmap").text("点击显示地图");
        $("#hmc_button_showmap").removeClass("btn-danger");
        $("#hmc_button_showmap").addClass("btn-success");

    }
});


//封装console.log
var Debugger=function(){};
Debugger.log=function(message){
    try{
        console.log(message);
    }catch(exception){
        console.log(exception);
        return;
    }
};


var containsCookie = function (str) {
    return!(undefined === $.cookie(str));

};

var notContainsCookie = function (str) {
    return(undefined === $.cookie(str));
};

var getCookie = function (str) {
    return $.cookie(str);
};

var setCookie = function (str,val) {
    return $.cookie(str, val, {path: '/', expires: 1000});

};

var removeCookie =function (str) {
    $.removeCookie(str, {path: '/'});
};

//debug usage
var resetAllCookie= function () {
   return $.each($.cookie(), function (key, v) {
       Debugger.log(key);
       $.removeCookie(key, {path: '/'});
   })
};


//加载页面运行
$(document).ready(function () {
   if (containsCookie("jwt")) {
       var hmc_jwt_str = getCookie("jwt");
       var hmc_jwt = JSON.parse(hmc_jwt_str);
       Debugger.log(getCookie("jwt"));
       for (var k in hmc_jwt) {
           Debugger.log(k);

           $("#button_登录").text("退出 "+k);
           $("#button_登录").attr("class", "btn btn-danger");

       }
   }
});


//验证手机号
$("#hmc_button_verify").click(function () {

    var url = "http://121.43.156.47:3000/bb_contact/send_sms_code";
    //发送到请求的服务器的普通对象或字符串
    var data =
    {
        "phone_num":$("#注册_input_phoneNumber").val()
    };

    //打印input中填入的手机号
    Debugger.log($("#注册_input_phoneNumber").val());
    //post请求方法----向指定的资源提交要被处理的数据
    $.post(url,data, function(data,status){
        // alert("Data: " + data + "\nStatus: " + status);
        console.log(data);
        console.log(data.code.code );
        $("#hmc_button_verify").hide();
        $("#hmc_countdown").show();

        var second = 60;
        var timer = null;
        timer = setInterval(function(){
            second -= 1;
            if(second >0 ){
                $('#J_second').html(second);
            }else{
                clearInterval(timer);
                $("#hmc_countdown").hide();
                $("#hmc_button_verify").show();

            }
        },1000);


        $("#注册_input_phoneNumber").val( data.code.code );


    });
});


//发送注册POST请求
$("#hmc_button_注册").click(function () {
    //点击注册按钮高亮
    $("#hmc_button_注册").effect("highlight", {}, 2000);
    //发送请求的URL的字符串
    var url = "http://121.43.156.47:3000/users";
    //发送到请求的服务器的普通对象或字符串
    var data = {
        "user":{
            "email":$("#注册_input_user").val(),
            "password":$("#注册_input_password").val()
        },
        "contact":{
            "id":1
        }
    };
    //打印input中填入的用户邮箱
    Debugger.log($("#注册_input_user").val());
    //post请求方法----向指定的资源提交要被处理的数据
    $.post(url,data, function(data,status){
        //如果请求成功，则执行回调函数
        alert("Data: " + data + "\nStatus: " + status);
        Debugger.log(data);
        Debugger.log(status);

        var hmc_userInfo;
        //若cookie中无存放jwt的数组,则创建新数组
        if (notContainsCookie("userInfo")) {
            hmc_userInfo = {};  //创建数组
        }
        else {
            //从cookie中获取userInfo对应的值,并准换为json数组,赋值到hmc_userInfo
            hmc_userInfo = JSON.parse(getCookie("userInfo"));
        }
        var user = $("#注册_input_user").val();
        //将存放用户信息data的json转换为字符串样式
        hmc_userInfo_v = JSON.stringify(data);
        //向 hmc_userInfo数组中添加元素,key为用户邮箱,value为对应的用户信息
        hmc_userInfo[user] = hmc_userInfo_v;

        Debugger.log("user:" + user);
        Debugger.log("hmc_userInfo:" + hmc_userInfo);
        //将json转换为字符串样式
        hmc_userInfo_str = JSON.stringify(hmc_userInfo);

        Debugger.log(hmc_userInfo_str);
        //将userInfo信息上传至cookie
        setCookie("userInfo", hmc_userInfo_str);

        //点击关闭按钮 关闭登陆模态框
        $("#注册_model_close").click();
    });
    // loadXMLDoc();
});


//点击注册模态框里 已有账号 按钮
$("#注册_model_已有账号").click(function () {
    $("#注册_model_close").click();
    $("#button_登录").click();
});

//点击页面登录按钮
$("#button_登录").click(function () {
    //当用户已经登录时
    if($("#button_登录").text() != "登录"){
        removeCookie("jwt");
        $("#button_登录").text("登录");
        $("#button_登录").attr("class", "btn btn-primary");
        $("#button_登录").removeAttr("data-toggle");

        for(i=0; i<gmarkers.length; i++){
            gmarkers[i].setMap(null);
        }

    }
    else{
        $("#button_登录").attr("data-toggle", "modal");

    }
});


//点击模态框内登录按钮
$("#hmc_button_登录").click(function () {
    //发送请求的URL的字符串
    var url = "http://121.43.156.47:3000/users/sign_in";
    //发送到请求的服务器的普通对象或字符串
    var data = {
        "user":{
            "email":$("#登录_input_user").val(),
            "password":$("#登录_input_password").val()
        },
        "point":{
            "latitude":35.9519532,
            "longitude":120.1561329
        }
    };
    //若cookie中无存放jwt的数组,则创建新数组,向指定的资源提交要被处理的数据
    Debugger.log("bbb");
    Debugger.log($("#button_登录").text());

    if(notContainsCookie("jwt")){
        Debugger.log("cccccc");
        $.post(url, data, function (data, status) {
            //如果请求成功，则执行回调函数
            alert("Data: " + data + "\nStatus: " + status);
            Debugger.log(data);
            Debugger.log(status);

            var  hmc_jwt = {};  //创建数组

            var email = $("#登录_input_user").val();
            Debugger.log(data);
            Debugger.log(data.user);
            Debugger.log(data.user.jwt);
            //向hmc_jwt json数组中添加元素,key为用户邮箱,value为对应jwt
            hmc_jwt[email] = data.user.jwt;

            Debugger.log("user:" + email);
            Debugger.log("hmc_jwt:" + hmc_jwt);
            //将json转换为字符串样式
            hmc_jwt_str = JSON.stringify(hmc_jwt);

            Debugger.log(hmc_jwt_str);
            //将jwt信息上传至cookie
            setCookie("jwt", hmc_jwt_str);
            //点击关闭按钮 关闭登陆模态框
            $("#登陆_model_close").click();
            //登录成功后将页面上的登录按钮显示为 ***已登录,并改变按钮样式
            $("#button_登录").text("退出 "+ $("#登录_input_user").val());
            $("#button_登录").attr("class", "btn btn-danger");

            var url = "http://121.43.156.47:3000/bb_api/get_nearby_points";
            //发送到请求的服务器的普通对象或字符串
            var data = {
                "point": {
                    "latitude": 0.0,
                    "longitude": 0
                },
                "radius": 10000000000
            };


            //post请求方法----向指定的资源提交要被处理的数据
            $.post(url, data, function (data, status) {
                //alert("Data: " + data + "\nStatus: " + status);
                console.log("有没有运行啊");
                Debugger.log(data);
                Debugger.log(status);
                Debugger.log(data.results);

                $.each(data.results, function () {
                    console.log(this.point.latitude);
                    console.log(this.point.longitude);
                    console.log(this.order.deliver_addr);
                    console.log(this.point.order_id);
                    console.log(this.point.rider_id);
                    console.log(this.point.user_id);

                    var lat = this.point.latitude;
                    var lng = this.point.longitude;
                    var addr = this.order.deliver_addr;

                    var icon;
                    if(this.point.order_id!="null"){
                        icon="map_goods.png";
                        console.log("hahahahahhahahahaha哈哈哈");
                    }
                    else if(this.point.rider_id!="null"){
                        icon="map_user.png";
                    }
                    else{
                        icon="map_user.png";
                    }

                    myPosition(lat, lng, map, addr,"abc",icon);

                });
            });
        });
    }
});

//点击登陆模态框里注册按钮
$("#登陆_model_注册").click(function () {
    $("#登陆_model_close").click();
    $("#button_注册").click();
});

$("#show_hide_optional").click(function () {
    if($("#show_hide_optional").val()=="收起"){
        console.log("起作用了")
        $(".optional").hide();
        $("#show_hide_optional").val("展开");
    }else{
        $(".optional").show();
        $("#show_hide_optional").val("收起");
    }

})

//发布订单

$("#hmc_button_发布").click(function () {

    var test = {
        "order":{
            "created_at":$("#发布_input_取货时间").val(),
            "deliver_addr":$("#发布_input_送到地点").val(),
            "deliver_at":$("#发布_input_取货时间").val(),
            "deliver_loc_lat":36.273618,
            "deliver_loc_lng":120.306598,
            "order_detail_id":0,
            "order_thing_des":$("#发布_input_货物类型").val(),
            "pick_up_addr":$("#发布_input_取货地点").val(),
            "pick_up_at":"2017-07-05T13:00:42.803+0800",
            "point_id":0,
            "status":0,
            "updated_at":$("#发布_input_取货时间").val()
        },
        "orderDetail":{
            "compensation":1000.0,
            "created_at":"2017-07-05T13:00:42.803+0800",
            "height":101.0,
            "insurance":20.0,
            "is_fragile":$("#发布_input_是否易碎").defaultChecked,
            "notes":"I am a piece of note",
            "order_id":0,
            "price_actual":$("#发布_input_货物价格").val(),
            "price_estimated":$("#发布_input_货物价格").val(),
            "transaction_id":0,
            "updated_at":$("#发布_input_取货时间").val(),
            "weight":$("#发布_input_货物重量").val(),
            "width":100.0
        },
        "point":{
            "created_at":$("#发布_input_取货时间").val(),
            "latitude":36.262808,
            "longitude":120.319837,
            "order_id":0,
            "rider_id":0,
            "updated_at":$("#发布_input_取货时间").val(),
            "user_id":0
        },
        "receiver":{
            "name":$("#发布_input_收件人名字").val(),
            "person_type":3,
            "tel_num_tmp":$("#发布_input_收件人电话").val()
        },
        "sender":{
            "person_type":2,
            "user__resolvedKey":1,
            "user_id":1
        },
        "user":{
            "id":1,
            "jwt":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2VtYWlsIjoid2FueWFuZzZAaG90bWFpbC5jb20iLCJ1c2VyX2lkIjoxLCJleHAiOjE1MDE4OTY4Mjl9.xAZSZw87nij4KpxPeLgH2yBQMFYwTWjEM69pxKiICTQ",
            "person_identification_id":0,
            "point_id":0
        }
    };

    $.ajax({
        type: 'post',
        contentType: 'multipart/form-data',
        // contentType: 'json',
        // processData: false,
        url:"http://121.43.156.47:3000/users/post_order/post_order",
//                url:"http://localhost:3000/users/post_order/post_order",
//                data:JSON.stringify(test),
        data: test,
        success:function(response){
            console.log(response);
        },
        error:function(response){
            console.log('err');
            console.log(response);
        }

    });

});




//AJAX post()

$("#hmc_button_post").click(function () {
    Debugger.log("click");
    var url = "http://121.43.156.47:3000/bb_api/get_nearby_points";
    var data = {"point": {"latitude": 0, "longitude": 0}};

    Debugger.log("url");
    $.post(url, data, function (data, status) {

        for (var i = 0; i < data.results.length; i++) {
            Debugger.log(data.results[i] + "<br>");
        }

        Debugger.log(data);
        Debugger.log(status);
    });
});


//点击运行AJAX
$("#hmc_button11").click(function () {


    try {
        var url = "http://api.population.io:80/1.0/countries";
        $.get(url, function (data, status) {
            Debugger.log(data.countries);
            Debugger.log(status);
        });
    } catch (e) {
        Debugger.log(e);
    }


    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
        url: root + '/posts/1',
        method: 'GET'
    }).then(function (data) {
        Debugger.log(data);
    });
});


var result; //保存点击运算符之前输入框中的数值 
var operator; //保存运算符  
var isPressEqualsKey = false; //记录是否按下”=“键  


//计算器输入数据
function typetoinput(num) {
    var input = document.getElementById("c_input");
    if (input.value == "0") {
        input.value = "";
    }
    input.value += num.value;

}
//运算
function calculation(control) {
    operator = control.value;   //保存运算符
    var input = document.getElementById("c_input");
    if (c_input.value == "")return false;
    result = c_input.value;
    c_input.value = "";
}

$("#c_c").click(function () {
    var input = document.getElementById("c_input");
    input.value = "0";
    result = "";
    operator = "";
});

function getResult() {
    var opValue;
    var firstValue = parseFloat(result); //parseFloat()解析一个字符串，并返回一个浮点数
    var input = document.getElementById("c_input");
    if (operator == '*')
        opValue = firstValue * parseFloat(input.value);
    else if (operator == '/')
        opValue = firstValue / parseFloat(input.value);
    else if (operator == '+')
        opValue = firstValue + parseFloat(input.value);
    else if (operator == '-')
        opValue = firstValue - parseFloat(input.value);
    input.value = opValue;
    isPressEqualsKey = true;
    result = "";
    opValue = "";
}

//排序
function sort() {
    var button_sort = document.getElementById("button_sort");  //获取按钮  
    var input_sort = document.getElementById("input_sort");    //获取输入框
    var text_sort = document.getElementById("text_sort");       //获取文本
    var i, j, k, temp;    //声明变量,temp占位符

    var arr = input_sort.value.split(",");//将输入框中输入的值按照","分隔开,存入数组arr中

    var arr_num = new Array();               //声明一个名为arr_num的新数组
    for (i = 0; i < arr.length; i++) {            //循环,将arr中的每一个元素(数字字符串)都转化为数字存入数组arr_num中
        arr_num[i] = parseInt(arr[i]);
    }
    var arr1 = arr_num.concat();//复制数组arr_num
    var arr2 = arr_num.concat();//复制数组arr_num
    var arr3 = arr_num.concat();//复制数组arr_num
    //插入排序
    for (i = 1; i < arr1.length; i++) {
        temp = arr1[i];
        j = i - 1;
        while (j >= 0 && arr1[j] > temp) {
            arr1[j + 1] = arr1[j];
            j--
        }
        arr1[j + 1] = temp;
    }

    // //冒泡排序
    for (i = 0; i < arr2.length; i++) {
        for (j = 0; j < arr2.length - i; j++) {
            if (arr2[j] > arr2[j + 1]) {
                temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }
        }
    }


    // //选择排序
    for (i = 0; i < arr3.length; i++) {
        var k = i;
        for (var j = i + 1; j < arr3.length; j++) {
            if (arr3[j] < arr3[k]) {
                k = j; // 查找第i小的元素
            }
        }
        if (k !== i) {
            var temp = arr3[i];
            arr3[i] = arr3[k];
            arr3[k] = temp;
        }
    }
    // var string_sort=arr.join(",");
    text_sort.innerHTML = "插入排序结果:" + arr1 + "<br>" + "冒泡排序结果:" + arr2 + "<br>" + "选择排序结果:" + arr3;  //将排序后的结果显示在文本中
}



//cookie
//刷新页面,读取cookie,加载列表
$(document).ready(function () {
    var _li_start = '<li class="item">';
    var _input_finish = '<input type="button" onclick="hmc_finish(this)" class="btn btn-default  btn-sm" value="编辑">';
    var _input_delete = '<input type="button" style="margin-left:7px" onclick="hmc_delete(this)" class="btn btn-danger btn-sm" value="×">';
    var _li_end = '</li>';

    if (containsCookie("todoList")) {
        var hmc_todoList_str = $.cookie("todoList");
        var hmc_todoList = JSON.parse(hmc_todoList_str);
        $.each(hmc_todoList, function (key,v) {

            Debugger.log(v);
            Debugger.log(key);

            var _p1 = '<p contenteditable="none" style="display:inline-block;margin-right:30px;">' + key + '</p>';
            var _p2 = '<p style="display:inline-block;color:#9d9d9d;font-size:70%;margin-right:10px;width:60px">' + v[0] + '</p>';
            var _p3 = '<p style="display:inline-block;color:#9d9d9d;font-size:70%;margin-right:10px;width:60px">' + v[1] + '</p>';
            var _p4 = '<p style="display:inline-block;color:#9d9d9d;font-size:70%;margin-right:20px;width:140px">' + v[2] + '</p>';
            var liToAdd = _li_start + _p1 + _p2 +_p3 + _p4 + _input_finish + _input_delete + _li_end;
            $("#list").append(liToAdd);
            hmc_text_width();
        });
    }
    Debugger.log($.cookie());
    $.each($.cookie(), function (k, v) {
        Debugger.log(k + ":" + v)
    });
});


function hmc_text_width(to_be_deleted_width){
    var arr_width = new Array;

    Debugger.log($("#list").children());

    var hmc_position = -1;
    $("#list").children().each(function (i) {
        var _w = $(this).children().first().css("width");
        if(_w == to_be_deleted_width){
            hmc_position = i;
        }
        arr_width.push(_w);
    });
    Debugger.log("要删除的一行:"+to_be_deleted_width);
    Debugger.log("删除前:" + arr_width);
    if(to_be_deleted_width != undefined){
       delete arr_width[hmc_position];
    }
    Debugger.log("删除后:" + arr_width);
    var width_max = arr_width[0];
    for (i = 0; i < arr_width.length; i++) {
        Debugger.log("aaa");
        if (parseFloat(arr_width[i]) > parseFloat(width_max)) {
            width_max = arr_width[i];
        }
    }
    Debugger.log(parseFloat(width_max));

    $("#list").children().each(function () {
        $(this).children().first().css("width", width_max)
    })
}



//添加按钮  点击按钮添加列表 并把当前文本存入cookie
$("#button_add").click(function () {

    if ($("#input_text").val() != "") {

        var textToAdd = $("#input_text").val();
        var latitude = $("#input_latitude").val();
        var longtitude = $("#input_longtitude").val();

        //获取当前时间
        var hmc_date = new Date();
        var hmc_date_str = hmc_date.toLocaleString();


        var _li_start = '<li class="item">';
        var _p1 = '<p contenteditable="none" style="display:inline-block;margin-right:30px;">' + textToAdd + '</p>';
        var _p2 = '<p style="display:inline-block;color:#9d9d9d;font-size:70%;margin-right:10px;width:60px">' + latitude + '</p>';
        var _p3 = '<p style="display:inline-block;color:#9d9d9d;font-size:70%;margin-right:10px;width:60px">' + longtitude + '</p>';
        var _p4 = '<p style="display:inline-block;color:#9d9d9d;font-size:70%;margin-right:20px;width:140px">' + hmc_date_str + '</p>';
        var _input_finish = '<input type="button" onclick="hmc_finish(this)" class="btn btn-default btn-sm" value="编辑">';
        var _input_delete = '<input type="button" style="margin-left:7px" onclick="hmc_delete(this)" class="btn btn-danger btn-sm" value="×">';
        var _li_end = '</li>';

        var liToAdd = _li_start + _p1 + _p2 + _p3 + _p4 + _input_finish + _input_delete + _li_end;
        //将当前生成的一列添加到列表中

        $("#list").append(liToAdd);
        hmc_text_width();

        // var width_new = $("#list").children().last().children().first().css("width");
        // var width_last = $("#list").children().first().children().first().css("width");
        // if(parseInt(width_new) > parseInt(width_last)){
        //     console.log("a");
        //     console.log($("#list").children().length);
        //     $("#list").children().each(function(){
        //         $(this).children().first().css("width",width_new)
        //     })
        // }
        // else{
        //     $("#list").children().last().children().first().css("width",width_last);
        // }

        var hmc_todoList_v = new Array();

        //声明全局变量 hmc_todoList 存放数组
        var hmc_todoList;

        if (notContainsCookie("todoList")) {
            hmc_todoList = {};  //创建数组
        }
        else {
            hmc_todoList = JSON.parse(getCookie("todoList"));
        }

        hmc_todoList_v = [latitude,longtitude,hmc_date_str];
        hmc_todoList[textToAdd] = hmc_todoList_v;

        Debugger.log("textToAdd:" + textToAdd);
        Debugger.log("hmc_todoList:" + hmc_todoList);
        //将json转换为字符串样式
        hmc_todoList_str = JSON.stringify(hmc_todoList);

        Debugger.log(hmc_todoList_str);

        setCookie("todoList", hmc_todoList_str);

        $("#input_text").val("");
        $("#input_latitude").val("");
        $("#input_longtitude").val("");


    }
});


//编辑/完成按钮  改变文本与cookie
//声明全局变量 hmc_oldtext ,保存未编辑前文本值
var hmc_oldtext = "";
function hmc_finish(obj) {
    var hmc_this = $(obj);
    var textToAdd = hmc_this.parent().children().first().text();
    var latitude = hmc_this.prev().prev().prev().text();
    var longtitude = hmc_this.prev().prev().text();

    Debugger.log(hmc_oldtext);
    Debugger.log(textToAdd);

    var hmc_todoList_str = getCookie("todoList");
    var hmc_todoList = JSON.parse(hmc_todoList_str);

    //当此按钮的值为"编辑"时
    if (hmc_this.val() == "编辑") {
        hmc_this.parent().children().first().attr("contenteditable", "true");
        hmc_this.parent().children().first().focus();
        hmc_this.val("完成");
        hmc_this.attr("class", "btn btn-success btn-sm");
        hmc_oldtext = hmc_this.parent().children().first().text();
        Debugger.log(hmc_oldtext);
    }
    //编辑完毕,点击完成按钮
    else {
        delete hmc_todoList[hmc_oldtext];
        Debugger.log("!!!:" + hmc_oldtext);
        //获取当前时间
        var hmc_date = new Date();
        var hmc_date_str = hmc_date.toLocaleString();
        //改变当前编辑的列表的时间值
        hmc_this.prev().text(hmc_date_str);

        var hmc_todoList_v = [latitude,longtitude,hmc_date_str];
        hmc_todoList[textToAdd] = hmc_todoList_v;
        //把todoList从json格式转换为字符串格式
        hmc_todoList_str = JSON.stringify(hmc_todoList);

        removeCookie("todoList");
        setCookie("todoList", hmc_todoList_str);
        hmc_this.parent().children().first().attr("contenteditable", "none");
        hmc_this.val("编辑");
        hmc_this.attr("class", "btn btn-default btn-sm");


        $("#list").children().each(function () {
            $(this).children().first().css("width","");

        });
        hmc_text_width();
    }
}

//删除按钮 删除列表中这一项并删除在cookie中的值
function hmc_delete(obj) {
    var hmc_this = $(obj);
    hmc_this.parent().remove();

    var hmc_key = hmc_this.parent().children().first().text();
    var hmc_todoList_str = getCookie("todoList");
    var hmc_todoList = JSON.parse(hmc_todoList_str);

    Debugger.log(hmc_key);
    delete hmc_todoList[hmc_key];
    removeCookie("todoList");

    hmc_todoList_str = JSON.stringify(hmc_todoList);
    setCookie("todoList", hmc_todoList_str);
    var to_be_deleted_width = hmc_this.parent().children().first().css("width");

    $("#list").children().each(function () {
        $(this).children().first().css("width","");

    });

    hmc_text_width();
    Debugger.log("a");

}


// //点击按钮清除所有cookie
// $("#hmc_button_delete").click(function () {
//     $.each($.cookie(), function (key, v) {
//         console.log(key);
//         $.removeCookie(key, {path: '/'});
//     })
// })


// $("#hmc_button_showpoint").click(function () {
//     //发送请求的URL的字符串
//     var url = "http://121.43.156.47:3000/bb_api/get_nearby_points";
//     //发送到请求的服务器的普通对象或字符串
//     var data = {
//         "point":{
//             "latitude":0.0,
//             "longitude":0
//         },
//         "radius":10000000000
//     };
//
//
//     //post请求方法----向指定的资源提交要被处理的数据
//     $.post(url,data, function(data,status){
//         //alert("Data: " + data + "\nStatus: " + status);
//         Debugger.log(data);
//         Debugger.log(status);
//         Debugger.log(data.results);
//
//         $.each(data.results, function(){
//             console.log(this.point.latitude);
//             console.log(this.point.longitude);
//             console.log(this.order.deliver_addr);
//             var lat = this.point.latitude;
//             var lng = this.point.longitude;
//             var addr =this.order.deliver_addr;
//             myPosition(lat,lng,map,addr);
//         });
//     });
// });

// $(function () {
//     $('#datetimepicker1').datetimepicker();
// });



//只允许输入数字,左右移动键,删除键,回车键
//author:larger
    function intOnly(){
        var codeNum=event.keyCode;
        if(codeNum==8||codeNum==37||codeNum==39||(codeNum>=48&&codeNum<=57)){
            event.returnValue=codeNum;
        }else{
            event.returnValue=false;
        }
    }