

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
