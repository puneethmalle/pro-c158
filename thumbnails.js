AFRAME.registerComponent("comics",{
    init:function(){
        this.placesContainer = this.el;
        this.createcomics()
    },

createcomics:function(){
    const picture = [
        {
        id: "batman",
        title: "Batman",
        url: "batman.jpg",
        },
        {
        id: "ironman",
        title: "Ironman",
        url: "ironman.jpg",
        },
        {
        id: "spiderman",
        title: "Spiderman",
        url: "spiderman.jpg",           
        },
        {
        id: "flash",
        title: "Wally West",
        url: "flash.jpg",
        }
    ];
    let prevoiusXPosition = -60;

    for (var item of picture) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorders(position,item.id)
      // Thumbnail Element
     const thumbnail = this.createThumbnail(item)
     borderEl.appendChild(thumbnail)

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorders:function(pos,id){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("id",id)
      entityel.setAttribute("visible",true)
      entityel.setAttribute("geometry",{primitive:"plane",width:21,height:29})
      entityel.setAttribute("position",pos)
      entityel.setAttribute("material",{color:"#fff"})
      return entityel
  },
  createThumbnail:function(item){
      const enitityel = document.createElement("a-entity")
      enitityel.setAttribute("visible",true)
      enitityel.setAttribute("geometry",{primitive:"plane",width:20,height:28})
      enitityel.setAttribute("material",{src:item.url})
      enitityel.setAttribute("position",{x:0,y:0,z:0.1})
      return enitityel
  }
  
})