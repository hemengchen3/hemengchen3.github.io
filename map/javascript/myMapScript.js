var gmarkers=[];
function myPosition(a,b,map,city,c) {
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
   if(c != undefined) {
       gmarkers.push(marker);
       console.log("11111我还不信了");
   }
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


var map;

console.log(gmarkers);
//这是Google地图加载完首次运行的函数
function myMap() {
  
  // 设置地图中心
  // 定位地图中心的lat和lng值
  var myCenter = new google.maps.LatLng(36.27,120.3);


//getElementById 返回拥有指定ID的第一个对象的引用
  var mapCanvas = document.getElementById("map");
  //json 存储运输数据的工具
  var mapOptions = {center: myCenter, zoom: 13};
  // 此处创建了Google map,输入值为
  map = new google.maps.Map(mapCanvas, mapOptions);


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

    google.maps.event.addListenerOnce(map, 'idle', function(){



        console.log("地图已经加载完");
        if (containsCookie("jwt")) {
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
                Debugger.log(data);
                Debugger.log(status);
                Debugger.log(data.results);

                $.each(data.results, function () {
                    console.log(this.point.latitude);
                    console.log(this.point.longitude);
                    console.log(this.order.deliver_addr);
                    var lat = this.point.latitude;
                    var lng = this.point.longitude;
                    var addr = this.order.deliver_addr;

                    myPosition(lat, lng, map, addr,"abc");
                    console.log("能不能打印啊啊啊"+gmarkers);
                });
            });
        }
    });

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
 