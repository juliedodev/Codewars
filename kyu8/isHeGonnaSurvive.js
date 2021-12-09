function hero(bullets, dragons){
    let bulletsToKillDragons = dragons * 2
    if(bullets >= bulletsToKillDragons){
      return true
    }
    else{
      return false
    }
  }