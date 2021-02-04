function touch(sprites, target){
    if(sprites.x-target.x<sprites.width/2+target.width/2
      && target.x-sprites.x<target.width/2+sprites.width/2
      && sprites.y-target.y<sprites.height/2+target.height/2
      && target.y-sprites.y<sprites.height/2+target.height/2){
  
        //returning values
      return true
    }
  
    else{
    return false
    }
  }
  