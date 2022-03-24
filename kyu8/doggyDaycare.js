Dog.prototype.checkDog = function(){
    if(this.wormed && this.vaccinated ){
      return `${this.name} can be accepted`
    }
    else if(this.wormed || this.vaccinated){
      return `${this.name} can only be accepted by itself`
    }
    else {
      return `${this.name} can not be accepted`
    }
  }