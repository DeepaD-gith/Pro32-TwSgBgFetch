function CreateBoxSet(trayXPos,trayYPos,trayWidth,trayHeight,boxWidth)
{
  
  var boxXPos,boxYPos,boxCount, boxLineWidth;
  
  boxLineWidth = trayWidth;
  boxCount = Math.floor(boxLineWidth / boxWidth);
  boxXPos = trayXPos - (boxCount*boxWidth)/2;
  boxYPos = trayYPos - trayHeight/2;  
 

  for(var k=boxLineWidth;boxLineWidth>=boxWidth;boxLineWidth=boxLineWidth-2*boxWidth)
 {
    boxCount =  Math.floor(boxLineWidth / boxWidth);
    boxXPos = (trayXPos - boxCount*boxWidth/2);
   
  for(var i = 0;i<boxCount;i++)
  {
    box1 = new Box(boxXPos,boxYPos,boxWidth,boxWidth);
    boxGroup[boxCt] = box1;
    boxCt++;
    boxXPos = boxXPos + boxWidth;
  }
 

  boxYPos = boxYPos - boxWidth;
  

 }

}


