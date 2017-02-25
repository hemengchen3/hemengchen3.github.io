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




//这是Google地图加载完首次运行的函数
function myMap() {
  
  // 地图中心
  var myCenter = new google.maps.LatLng(28,117);



  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 4};
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
 