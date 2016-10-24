var light = new THREE.SpotLight( 0xffffff );
light.position.set( 0, 2, 5 );

light.castShadow = true;

light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

light.shadow.camera.near = 500;
light.shadow.camera.far = 4000;
light.shadow.camera.fov = 30;

$(window).keydown(function (event)
{
    if(event.keyCode === 87)
    {
        Camera.position.z--;
    }
    
    if(event.keyCode === 83)
    {
        Camera.position.z++;
    }
    
    if(event.keyCode === 65)
    {
        Camera.position.x--;
    }
    
    if(event.keyCode === 68)
    {
        Camera.position.x++;
    }
});



var x = 0;
var y = 0;

var h1 =  (window.innerHeight/2/180)+(window.innerHeight/2/180);
var h2 = -(window.innerHeight/2/180); 
//
//$(window).mousemove(function (event)
//{
//    if(x < event.pageX || x > event.pageX)
//    {
//        camera.rotation.y += (x-event.pageX)*Math.PI/180;
//        x = event.pageX;
//    }
//    
//    if(y < event.pageY || y > event.pageY)
//    {
//        camera.rotation.x += (y-event.pageY)*Math.PI/180;
//        y = event.pageY;
//    }
//});