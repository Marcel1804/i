$(document).ready(function (){

  //store the puzzle Area div
  let puzzleArea = $("#puzzlearea");
  // store all the children div in the puzzle Area
  let  title = puzzleArea.children();

  //store the shuffleButton
  let shuffleButton=$("#shufflebutton");
  //active the shuffleButton function
  $(shuffleButton).on("click", function() {shuffle();});

  //store the top value for the box position in the 400X400 puzzle Area
  let y ="0px";
  //store the left value for the box position in the 400X400 puzzle Area
  let x ="0px";
  // store empty square position
  let emptyX="300px";
  let emptyY="300px";

//set up the inital puzzlearea
  start();


//set up the inital puzzlearea
 function start() {
   //track of the box in order to add the left value to them
   let count=0;
   //track of the box in order to add the top value to them
   let increment=0;
   //to run the move function eventlistener
      let starter=0

     // add the puzzlepiece class to the children div of the puzzlearea div
      for(i=0;i<title.length;i++)
    	    {
            	   let titles = title[i];
        	       $(titles).addClass("puzzlepiece");
                 $(titles).on("click",function(){
                   starter+=1;
                   runMove(starter,titles);
                   starter=0;
                 });
                 $(titles).on("mouseover",function(){
                   if(testIfMovable(titles)===true)
                    {
                     $(titles).addClass("movablepiece");
                    }
                   });


        		if(i>=1)
                        {
        		    count+=1;
        		    if(count!=4)
          		     {
          			    x=""+100*count+"px";
          		     }
                 else{
      		             if (count==4)
                				{
                				  count=0;
                				  x=""+100*count+"px";
                			   	  increment+=1;
                			  }
          		        }
        		       }
        		if(i>=1)
        		{
        		  y=""+100*increment+"px";
        		}
        	  $(titles).css({"top": y,"left":x});

            $(title[0]).css({"background-position": "0px 0px"});
            $(title[4]).css({"background-position": "0px 300px"})
            $(title[8]).css({"background-position": "0px 200px"})
            $(title[12]).css({"background-position": "0px 100px"})

        	  $(title[1]).css({"background-position": "300px 0px"});
            $(title[5]).css({"background-position": "300px 300px"});
            $(title[9]).css({"background-position": "300px 200px"});
            $(title[13]).css({"background-position": "300px 100px"});

        	  $(title[2]).css({"background-position": "200px 0px"});
            $(title[6]).css({"background-position": "200px 300px"});
            $(title[10]).css({"background-position": "200px 200px"})
            $(title[14]).css({"background-position": "200px 100px"});

        	  $(title[3]).css({"background-position": "100px 0px"});
            $(title[7]).css({"background-position": "100px 300px"});
            $(title[11]).css({"background-position": "100px 200px"});
              }
        }

function shuffle() {
    console.log("ok");
    let index=Math.floor(Math.random()*14);
    let stop= 0;
    let change = Math.floor(Math.random()*14);

    while(stop<15)
    {
              if(testIfMovable(title[index])===true)
              {
                console.log(index,change,"b");
                move(title[index]);

              }
              else{
                        if(testIfMovable(title[index+change])===true && index+change<14)
                        {
                          console.log(index+change);
                          move(title[index+change]);
                        }
                        else if(testIfMovable(title[index-1])===true && index+change>0)
                        {
                             console.log(index-change);
                            move(title[index-change]);
                        }
                 }
             index = Math.floor(Math.random()*14);
             console.log(index,"change index");
             stop+=1;
             console.log(stop);
        }

    }

function runMove(starter,el) {
  if (starter===1)
  {
    move(el);
  }

}

//move square to empty neighbour
function move(el) {
       //split the string into array
        let intY=""+el.offsetTop
        let intX=""+el.offsetLeft;
        let intEmptyY=emptyY.split("p");
        let intEmptyX=emptyX.split("p");

        //store the empty string in order to make the switch
        let tempX;
        let tempY;

        //check if the square box in the same colums is empty
        if (intEmptyX[0]===intX && intEmptyY[0]-intY===100|| intEmptyX[0]===intX && intY-intEmptyY[0]===100)
        {
                   tempX=emptyX;
                   emptyX=intX+"px";
                   intX=tempX;

                   tempY=emptyY;
                   emptyY=intY+"px";
                   intY=tempY;
                   $(el).css({"top": intY,"left":intX});

        }
        //check if the square box in the same rows is empty

         else if (intEmptyY[0]===intY && intEmptyX[0]-intX===100 ||intEmptyY[0]===intY && intX-intEmptyX[0]===100)
         {

                   tempX=emptyX;
                   emptyX=intX+"px";
                   intX=tempX;

                   tempY=emptyY;
                   emptyY=intY+"px";
                   intY=tempY;
                   $(el).css({"top": intY,"left":intX});


        }
     }

     //test If puzzlepiece is Movable
     function testIfMovable(el) {
       let intY=""+el.offsetTop
       let intX=""+el.offsetLeft;
       let intEmptyY=emptyY.split("p");
       let intEmptyX=emptyX.split("p");

       if (intEmptyX[0]===intX && intEmptyY[0]-intY===100|| intEmptyX[0]===intX && intY-intEmptyY[0]===100)
       {
         return true;
       }
       else if (intEmptyY[0]===intY && intEmptyX[0]-intX===100 ||intEmptyY[0]===intY && intX-intEmptyX[0]===100)
       {
         return true;
       }
     }

});
