

function changeText(){
  document.getElementById("button").innerHTML = "您已经点击我了";
}


function display(){
  console.log("1111111");
  var x = document.getElementById("input3");
  console.log(x);
  console.log(x.innerHTML);
  document.getElementById("text").innerHTML = x.value;

}

//点击按钮隐藏列表

  $("#hmc_button").click(function(){
    $("#hmc_select").hide();
  });
//点击按钮显示列表
  $("#hmc_button2").click(function(){
    $("#hmc_select").show();
  });


  //点击按钮隐藏地图

  $("#hmc_button3").click(function(){
    $("#map").hide(3000,function(){
       alert("您已将地图隐藏!");
    });
  });
  //点击按钮显示地图
  $("#hmc_button4").click(function(){
    $("#map").show(1000);
  });


  setTimeout(function(){
    // document.getElementById("map").style.display = "none";


   }, 3000);



  //点击按钮隐藏地图

  $("#hmc_button5").click(function(){
    $("#map").hide("slow",function(){
       alert("您已将地图隐藏!");
    });
  });
  //点击按钮显示地图
  $("#hmc_button6").click(function(){
    $("#map").show("fast",function(){
      alert("您已显示地图!");
    });
  });

    //点击按钮隐藏/显示地图

  $("#hmc_button7").click(function(){
    $("#map").toggle("slow",function(){
       alert("toggle()方法已完成");
    });
  });

//更改p背景颜色
$(document).ready(function(){
    $("#text").css("background-color","yellow");
});




//点击更改P字体大小
$("#hmc_button8").click(function(){ 
  $("#text").css("font-size","200%");
});

//点击显示P
$("#hmc_button9").click(function(){ 
  $("#text").css("display","block");
});

//点击隐藏P
$("#hmc_button10").click(function(){ 
  $("#text").css("display","none");
});


$(function () { 
  $("[data-toggle='popover']").popover();
});


//点击隐藏警告
$("#hmc_button12").click(function(){ 
  $("#hmc_alert1").css("display","none");
});

//点击显示警告
$("#hmc_button13").click(function(){ 
  $("#hmc_alert1").css("display","block");
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
$("#hmc_button_showmap").click(function(){




  if($("#map").css("display")=="none"){
$("#map").removeClass("hmc_map");
$("#hmc_button_showmap").text("点击隐藏地图");
$("#hmc_button_showmap").removeClass("btn-success");
$("#hmc_button_showmap").addClass("btn-danger");

}else{
$("#map").addClass("hmc_map");
$("#hmc_button_showmap").text("点击显示地图");
$("#hmc_button_showmap").removeClass("btn-danger");
$("#hmc_button_showmap").addClass("btn-success");

}
});


//点击注册按钮高亮
$("#hmc_button_login").click(function() {
  // $( "#hmc_button_login" ).toggle( "highlight" );
  $("#hmc_button_login").effect( "highlight", {}, 2000 );
});
 
//AJAX post()

console.log("jj");
  $("#hmc_button_post").click(function(){
    console.log("click");
    var url="http://192.168.31.180:3000/bb_api/get_nearby_points";
    var data = {"point":{"latitude":0,"longitude":0}};

    console.log("url");
    $.post(url,data,function(data,status){
      
    for (var i=0;i<data.results.length;i++)
      {
        console.log(data.results[i] + "<br>");
      }

      console.log(data);
      console.log(status);
    });
  });


//点击运行AJAX
$("#hmc_button11").click(function(){


  try{
    var url = "http://api.population.io:80/1.0/countries";
    $.get(url,function(data,status){
      console.log(data.countries);
      console.log(status);
    });
  }catch(e){
    console.log(e);
  }



  var root = 'https://jsonplaceholder.typicode.com';
  $.ajax({
    url: root + '/posts/1',
    method: 'GET'
  }).then(function(data) {
    console.log(data);
  });
});


var result; //保存点击运算符之前输入框中的数值 
var operator; //保存运算符  
var isPressEqualsKey = false; //记录是否按下”=“键  



//计算器输入数据
function typetoinput(num)
{
  var input=document.getElementById("c_input");
  if (input.value == "0") 
  { 
    input.value="";
  }
    input.value+=num.value;
  
}
//运算
function calculation(control)
{ 
  operator = control.value;   //保存运算符
  var input = document.getElementById("c_input");
  if(c_input.value == "")return false;
  result = c_input.value;
  c_input.value = "";
}

$("#c_c").click(function(){
  var input = document.getElementById("c_input");
  input.value="0";
  result = "";  
  operator = "";  
});

function getResult()
{
var opValue;
var firstValue = parseFloat(result); //parseFloat()解析一个字符串，并返回一个浮点数
var input = document.getElementById("c_input");
if(operator == '*')  
opValue = firstValue * parseFloat(input.value);  
else if(operator == '/')  
opValue = firstValue / parseFloat(input.value);  
else if(operator == '+')  
opValue = firstValue + parseFloat(input.value);  
else if(operator == '-')  
opValue = firstValue - parseFloat(input.value); 
input.value=opValue;
isPressEqualsKey = true;  
result = "";  
opValue = "";  
}  



  function sort()
  { 
    var button_sort = document.getElementById("button_sort");  //获取按钮  
    var input_sort = document.getElementById("input_sort");    //获取输入框
    var text_sort =document.getElementById("text_sort");       //获取文本
    var i,j,k,temp;    //声明变量,temp占位符

    var arr = input_sort.value.split(",");//将输入框中输入的值按照","分隔开,存入数组arr中

    var arr_num = new Array();               //声明一个名为arr_num的新数组
    for(i=0;i<arr.length;i++){            //循环,将arr中的每一个元素(数字字符串)都转化为数字存入数组arr_num中
      arr_num[i]=parseInt(arr[i]);
    }
    var arr1=arr_num.concat();//复制数组arr_num
    var arr2=arr_num.concat();//复制数组arr_num
    var arr3=arr_num.concat();//复制数组arr_num
    // console.log(arr_num);
    //插入排序
    for(i=1;i<arr1.length;i++){
      temp=arr1[i];
      j=i-1;
      while(j>=0&&arr1[j]>temp){
        arr1[j+1]=arr1[j];
        j--
      }
      arr1[j+1]=temp;
    }
// console.log(arr2);
    // //冒泡排序
    for(i=0;i<arr2.length;i++){
      for(j=0;j<arr2.length-i;j++){
        if(arr2[j] > arr2[j+1]){
          temp = arr2[j];
          arr2[j] = arr2[j+1];
          arr2[j+1] = temp;
        }
      }
    }


    // //选择排序
    for(i=0; i<arr3.length; i++) {
        var k=i;
        for(var j=i+1; j<arr3.length; j++) {
            if(arr3[j] < arr3[k]) {
                k=j; // 查找第i小的元素
            }   
        }   
        if(k!==i) {
            var temp = arr3[i];
            arr3[i] = arr3[k];
            arr3[k] = temp;
        }   
    }   
    // var string_sort=arr.join(",");
    text_sort.innerHTML="插入排序结果:"+arr1+"<br>"+"冒泡排序结果:"+arr2+"<br>"+"选择排序结果:"+arr3;  //将排序后的结果显示在文本中
  }



// function hmc_creatCookie(name,value,days){

//   if(days){
//     var hmc_date=new Date();
//     hmc_date.setDate(hmc_date.getDate()+days);
//     var expires="; expires="+hmc_date.toGMTString();
//   }
//   else var expires="";
//   document.cookie=name+ "=" + value +expires+"; path=/";
// }

// function hmc_readCookie(){
//   var arr = document.cookie.split(";");
//   for (var i = 0; i < arr.length; i++) {
//     var arr2=arr[i].split("=");
//     // if(arr2[0]==name)
//     //   {
//     //     arr2[1];
//     //   }
//     if (arr2[1]!=null&&arr2[1]!=undefined) {
//       $("#list").append(arr2[1]);
//     }
//     // var c = hmc_arr_cookie[i];
//     // while (arr[i].charAt(0) == ' ') 
//     //   c = c.substring(1, c.length);
//     // if (c.indexOf(nameEQ) == 0) 
//     // return c.substring(nameEQ.length, c.length);
//   }
//   return null;

// }


// function hmc_eraseCookie(name){
//   createCookie(name,"",-1);
// }

var hmc_oldtext="";
function hmc_finish(obj){



    var hmc_this=$(obj);
    // hmc_this.parent().remove();
    console.log(hmc_oldtext);
    var textToAdd = hmc_this.prev().text();
    console.log(textToAdd);

    var hmc_todoList_str=$.cookie("todoList");
    var hmc_todoList=JSON.parse(hmc_todoList_str);

    if(hmc_this.val() == "编辑"){
        console.log("a");
        hmc_this.prev().attr("contenteditable","true");
        hmc_this.prev().focus();
        hmc_this.val("完成");
        hmc_this.attr("class","btn btn-success btn-sm");
        hmc_oldtext = hmc_this.prev().text();
        console.log(hmc_oldtext);
        
  }

  else{
        delete hmc_todoList[hmc_oldtext];
        console.log("!!!:"+hmc_oldtext);
        hmc_todoList[textToAdd]=textToAdd;
        console.log(hmc_todoList);
        hmc_todoList_str = JSON.stringify(hmc_todoList);
        $.removeCookie("todoList",{path:'/'});
        $.cookie("todoList",hmc_todoList_str,{ path:'/',expires:1000});

      // $.cookie(textToAdd,textToAdd,{ path:'/',expires:7});
      hmc_this.val("编辑");
      hmc_this.attr("class","btn btn-default btn-sm");
  }

}


function hmc_delete(obj){
  var hmc_this=$(obj);
  hmc_this.parent().remove();
  console.log(hmc_this);
  console.log(hmc_this.parent())
  var hmc_key = hmc_this.parent().text();
  var hmc_todoList_str=$.cookie("todoList");
  var hmc_todoList=JSON.parse(hmc_todoList_str);
  delete hmc_todoList[hmc_key];
  $.removeCookie("todoList",{path:'/'});
  hmc_todoList_str = JSON.stringify(hmc_todoList);
  $.cookie("todoList",hmc_todoList_str,{ path:'/',expires:1000});
}

$(document).ready(function() {

    var _li_start = '<li class="item">';
    var _input_finish = '<input type="button" onclick="hmc_finish(this)" class="btn btn-default  btn-sm" value="编辑">';
    var _input_delete = '<input type="button" style="margin-left:7px" onclick="hmc_delete(this)" class="btn btn-danger btn-sm" value="×">';
    var _li_end = '</li>';
    var hmc_todoList_str=$.cookie("todoList");
    var hmc_todoList=JSON.parse(hmc_todoList_str);

    $.each(hmc_todoList, function (i) {
        console.log(i);
        var _p = '<p contenteditable="none" style="display:inline;margin-right:30px">' + hmc_todoList[i] + '</p>';
        var liToAdd = _li_start + _p + _input_finish + _input_delete + _li_end;
        $("#list").append(liToAdd);
    });

    console.log($.cookie());
    $.each($.cookie(), function (k, v) {
        console.log(k + ":" + v)
    });
});
//   $("#button_add").click(function(){
//     if($("#input_text").val()!=""){
//       var textToAdd = $("#input_text").val();
//       var liToAdd = '<li class="item">' + textToAdd + '<input type="button" onclick="hmc_delete(this)" class="delete" value="×"></li>'
//       $("#list").append(liToAdd);
//       // 获取当前时间戳
//       var hmc_time = new Date().getTime();
//       //
//       $.cookie(hmc_time,liToAdd,{ path:'/',expires:7});
      
//       $("#input_text").val(" ");
//     }
//   })
// })




//添加按钮

 $("#button_add").click(function(){

    if($("#input_text").val()!=""){



       var textToAdd = $("#input_text").val();
       var _li_start = '<li class="item">';
       var _p = '<p contenteditable="true" style="display:inline;margin-right:30px">'+textToAdd+'</p>';
       var _input_finish = '<input type="button" onclick="hmc_finish(this)" class="btn btn-default btn-sm" value="编辑">';
       var _input_delete = '<input type="button" style="margin-left:7px" onclick="hmc_delete(this)" class="btn btn-danger btn-sm" value="×">';
       var _li_end = '</li>';
       var liToAdd = _li_start + _p + _input_finish +_input_delete +  _li_end;
       $("#list").append(liToAdd);


        if($.cookie("todoList")==undefined){
            var hmc_todoList = {};  //创建数组
        }
        else {
            var hmc_todoList = JSON.parse($.cookie("todoList"));
        }

            hmc_todoList[textToAdd]=textToAdd;

            console.log("textToAdd:"+textToAdd);
            console.log("hmc_todoList:"+hmc_todoList);

            hmc_todoList_str = JSON.stringify(hmc_todoList);


            console .log(hmc_todoList_str);
            $.cookie("todoList",hmc_todoList_str,{ path:'/',expires:1000});




        $("#input_text").val(" ");

  }
});


$("#hmc_button_delete").click(function(){
   $.each($.cookie(), function(key, v){
     console.log(key);
     $.removeCookie(key,{path:'/'});
  })
})

