// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
	    this.strength=strength;        
    }

    attack(){
        return this.strength
    }

    receiveDamage(thedamage){
        this.health -= thedamage
    }


}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (health, strength)
        this.name = name;
    }
    
    receiveDamage(thedamage){
        this.health -= thedamage

        if (this.health >0 ){
            return `${this.name} has received ${thedamage} points of damage`
        }
        else {
            return  `${this.name} has died in act of combat`
        }

    }

    battleCry(){
        return "Odin Owns You All!"
    }
    
} 


// Saxon
class Saxon extends Soldier{
    
    
    receiveDamage(thedamage){
        this.health -= thedamage
        if (this.health >0 ){
            return `A Saxon has received ${thedamage} points of damage`
        }
        else {
            return  `A Saxon has died in combat`
        }
    }
    
    
}


// BONUS - Iteration 4:War
class War {
    constructor (){
        
    }
    
   vikingArmy=[]
   saxonArmy=[] 

   addViking(Viking){
    this.vikingArmy.push(Viking)
    
   }
   addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
   }
// should make a Saxon receiveDamage() equal to the strength of a Viking
// should remove dead Saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking
//wrong code below:
   vikingAttack() {
     this.saxon.receiveDamage(this.viking.strength)

     if (this.saxon.health <= 0) {
       this.saxonArmy.splice(this.saxon, 1)
     } 
     return receiveDamage(this.viking.strength)
   }

   saxonAttack(){
    this.viking.receiveDamage(this.saxon.strength)

    if (this.viking.health <= 0) {
        this.vikingArmy.splice(this.viking, 1)
      } 
      return receiveDamage(this.saxon.strength)
     
   }

}




