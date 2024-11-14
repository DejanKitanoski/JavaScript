function add(a,b) {
    b = 1.341; 
 var c = a*b;
 
  console.log(`Колата има:${a}Kw i ${c}коњски сили `)
}
add(99);

function hptokw(a) {
    const b = 0.7457; 
    var c = a / b;
    console.log(`Колата има: ${c} коњски сили и ${a} kW`);
}
hptokw(10);

function brzina(brzina){
brzina = (brzina * 1000) /3600;
 brzina = brzina / 5 ;
 console.log(`${brzina}`)
}
brzina(60)

const bmw5 = {
 Carname: "BMW",
 Model: "M5",
 Horsepower: "600",
 Color: "black",
 print: function(){
console.log(`Name: ${this.Carname} , Model: ${this.Model} ,Horsepower: ${this.Horsepower} ,Color: ${this.Color} .`)
 }

}
document.getElementById("bmw5").innerText= `Name: ${this.Carname} , Model: ${this.Model} ,Horsepower: ${this.Horsepower} ,Color: ${this.Color} .`

bmw5.print()
const bmw4 = {
    Carname: "BMW",
    Model: {
       Modelspro: "M4cls",
       Modelbenz: "M4"
       
    },
    Horsepower: {
        M4cls: "600",
        M4b: "500"
    },
    Color: "red",
    print: function(){
   console.log(`Name: ${this.Carname} , Model: ${this.Model.Modelbenz} ,Horsepower: ${this.Horsepower.M4d} ,Color: ${this.Color} .`)
   console.log(`Name: ${this.Carname} , Model: ${this.Model.Modelspro} ,Horsepower: ${this.Horsepower.M4cls} ,Color: ${this.Color} .`)
    }
   
   }
   document.getElementById("bmw4").innerText= `Name: ${this.Carname} , Model: ${this.Model} ,Horsepower: ${this.Horsepower} ,Color: ${this.Color} .`
  
   console.log(bmw4.Horsepower.M4)
   bmw4.print()

   const bmw = [bmw4,bmw5];
   console.log(bmw[0])
  
   const svetskisili =["Америка", "Кина", "Русија", "Англија", "Канада"];
 
   
  for(i = 0 ; i <=4;++i){
console.log(`Држава:${svetskisili[i]}`)
  }