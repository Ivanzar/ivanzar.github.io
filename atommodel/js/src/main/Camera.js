var Camera = new function ()
{
    this.position = 
    {
        x: 0,
        y: 0,
        z: 0
    };
    
    this.rotation = 
    {
        x: 0,
        y: 0,
        z: 0
    };
    
    if(this.rotation.x < - 180*Math.PI/180)
    {
        this.rotation.x = -180*Math.PI/180;
    }
    
    if(this.rotation.x > 180*Math.PI/180)
    {
        this.rotation.x = 180*Math.PI/180;
    }
};