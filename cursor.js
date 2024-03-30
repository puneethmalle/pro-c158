AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.cursorOn();
      this.cursorOff();
    },
  
    cursorevents: function () {
      const id = this.el.getAttribute("id")
      const placesId = ["batman", "ironman", "spiderman", "flash"];
      if (placesId.includes(id)){
        const placesContainer = document.querySelector("#places-container")
        placesContainer.setAttribute("cursor-listener",{selectedItemId:id})
        this.el.setAttribute("material",{color:"blue",opacity:1})
  
      }
    },
    cursorOn: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.cursorevents();
      });
    },
    cursorOff: function () {
      this.el.addEventListener("mouseleave",()=>{
        const {selectedItemId} = this.data
        if (selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`)
          const id = el.getAttribute("id")
          if(id == selectedItemId){
            el.setAttribute("material",{color:"#fff",opacity:1})
          }
  
        }
      })
      
    },
  });
  