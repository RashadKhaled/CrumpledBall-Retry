class Ground{
   constructor(x,y,width,height){
       var options={
           isStatic:true,
           restitution:0,
           density:1.2
       }
       this.body=Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
       this.width=width
       this.height=height
    }
    display(){
        var pos=this.body.position
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height)
    }
   }; 
