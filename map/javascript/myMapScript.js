function myPosition(a,b,map,city) {
	var p = new google.maps.LatLng(a,b);
	var marker = new google.maps.Marker({position:p});
    marker.setMap(map);

    // 创建了一个窗口
    var infowindow = new google.maps.InfoWindow({
        content:city
    });

    //给这个marker添加一个点击事件
    // function()这个匿名函数当marker被点击时会触发
    google.maps.event.addListener(marker, 'click', function() {
    	// 窗口将会被显示在这个marker上边
        infowindow.open(map, marker);

        /*
        var oldZoom = map.getZoom();
        var newZoom = 9;
        map.setZoom(newZoom);
        */

        // 这个setTimeout是倒计时3秒钟之后执行的操作

        window.setTimeout(function() {

        	// map.setZoom(oldZoom);
        	infowindow.close(map,marker);
        },3000); // 3 sec

    });
   
}
//a1为p点的lat值,b1为lng值,map为地图
function newMaker(a1,b1,map){
  // 用a1为lat值,b1为lng值创建一个地图的坐标点
  var p = new google.maps.LatLng(a1,b1);
  console.log(p);
  var marker = new google.maps.Marker({position:p});
  // console.log(marker);
  // console.log(marker.position.lat());
  // console.log(marker.position.lng());
  marker.setMap(map);
  var abc = "纬度(Latitude):" + p.lat() +  ",经度(Longitude):" + p.lng();
  var infowindow = new google.maps.InfoWindow({
        content:abc
    });
  console.log(infowindow);
  infowindow.open(map,marker);


  
}


//这是Google地图加载完首次运行的函数
function myMap() {
  
  // 地图中心
  var myCenter = new google.maps.LatLng(28,117);


//getElementById 返回拥有指定ID的第一个对象的引用
  var mapCanvas = document.getElementById("map");
  //json 存储运输数据的工具
  var mapOptions = {center: myCenter, zoom: 4};
  // 此处创建了Google map,输入值为
  var map = new google.maps.Map(mapCanvas, mapOptions);


  	//青岛
	myPosition(36,120,map,"青岛");
    //枣庄
    myPosition(35,117,map,"枣庄");
    //香港
    myPosition(22,114.15,map,"香港");
    //东京
    myPosition(35.5,139.7,map,"东京");
    //首尔
    myPosition(37.3,126.97,map,"首尔");
    //曼谷
    myPosition(13.4,100.56,map,"曼谷");

    map.addListener('mousemove', function(a1) {
     	//alert("aaa");

       // console.log(a1.latLng.lat());
       // console.log(a1.latLng.lng());

        var x = document.getElementById("x");
        var y = document.getElementById("y");
        x.value = a1.latLng.lat();
        y.value = a1.latLng.lng();
 }); 

    //右键点击创建marker
    map.addListener('rightclick', function(p1) {
      // console.log(p1.latLng.lat());
      // console.log(p1.latLng.lng());
      newMaker(p1.latLng.lat(),p1.latLng.lng(),map);





    });


    map.addListener('dblclick', function() {
       console.log("bbb");
    });
  // var marker = new google.maps.Marker({position:myCenter});
  // marker.setMap(map);
  // var marker = new google.maps.Marker({position:myCenter1});
  // marker.setMap(map);
  // var marker = new google.maps.Marker({position:myCenter2});
  // marker.setMap(map);
  // var marker = new google.maps.Marker({position:myCenter3});
  // marker.setMap(map);
}
 