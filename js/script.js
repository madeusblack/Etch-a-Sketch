let blocksOfGrid=16;
let colorOfPen="Black"
let typeofdraw="pen"
function resetgrid(){
  

    $(".divrow").remove();
    }
function rowmaker(blocksOfGrid){
    resetgrid()
    let size=960/blocksOfGrid
    let sizepx=size+"px"
        for(numberofdivs=0;numberofdivs<blocksOfGrid;numberofdivs++){
            for (var columns = 0; columns < blocksOfGrid; columns++){
                let  divtoadd = document.createElement("div");
                divtoadd.className="divrow";
                divtoadd.innerHTML="1"
                divtoadd.style.height=sizepx;
                divtoadd.style.width=sizepx;
                divtoadd.onmouseover=function(){
                    this.style.background="black";}
                document.getElementById("appMain").append(divtoadd);
        }
    }

}
function penselect(pensel){
    let divtomod =document.getElementsByClassName("divrow");
    switch (pensel){
    case "pen":
        let buttons = document.getElementsByClassName('divrow');
        for(let i=0; i< buttons.length; i++){
            buttons[i].onmouseover=function(){
            this.style.background="black";}
            }
        console.log("red")      
        break;
    case "brush":
        
        let buttons1 = document.getElementsByClassName('divrow');    
            for(let i=0; i< buttons1.length; i++){
                buttons1[i].onmouseover=function(){
                    let color = $( this ).css( "background-color" );
                    let replaced=color.replace("rgb(", '')
                    let replaced2=replaced.replace("rgba(", '')
                    let replaced1=replaced2.replace(")", '')
                    let res = replaced1.split(",");
                    let redd=parseInt(res[0],10)
                    let greenn=parseInt(res[1],10)
                    let bluee=parseInt(res[2],10)
                    console.log(res)
                    bluee=bluee-30
                    redd=redd-30;
                    greenn=greenn-30
                    this.style.background="rgb("+redd+"," + redd + "," + redd + " )";
                  }
                }
        break;
    case "eraser":
            let buttons2 = document.getElementsByClassName('divrow');
            for(let i=0; i< buttons2.length; i++){
                buttons2[i].onmouseover=function(){
                    this.style.background="white";}}
        break;
        case "rainbow":
        
            let buttons3 = document.getElementsByClassName('divrow');    
                for(let i=0; i< buttons3.length; i++){
                    buttons3[i].onmouseover=function(){
                        let blue=Math.random() * (255 - 0) + 0;
                        console.log(blue)
                        let red=Math.random() * (255 - 0) + 0;
                        let green=Math.random() * (255 - 0) + 0;
                    
                        this.style.background="rgb("+red+"," + green + "," + blue + " )";
                      }
                    }
                    break;
}
}
