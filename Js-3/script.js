const broevi = [ 21,22,34,67,45]

var sum = 0;

for(var i=0 ; i<broevi.length;i++){
    sum += broevi[i]
}
console.log(sum)

const students = [
    {name:"Dejan",surname:"Kitanoski",prosek:7.8,city:"Skopje"},
    {name:"Tamara",surname:"Murdzoska",prosek:9.9,city:"Struga"},
    {name:"Ognen",surname:"Korunoski",prosek:8.5,city:"Ohrid"},
    {name:"Marko",surname:"Kalajdzieski",prosek:8.8,city:"Skopje"},
]
var studentsfilter = students.filter(srudent => srudent.prosek >8)
console.log(studentsfilter)
for( var i=0 ; i<students.length;i++ ){
    students[i].dobivastipendija= students[i].prosek>8
}
console.log(students)



const cities = [
    {name:"Skopje",population:600000},
    {name:"Vevacani",population:6563453},
    {name:"Struga",population:23432423},
    {name:"Stip",population:532423432},
    {name:"Veles",population:324324234},
    {name:"Ohrid",population:123213123},
    {name:"Amsterdam",population:600000000},
]
cities.sort((a, b) => b.population - a.population)
var gradovi = cities.slice(0,3)
console.log(gradovi)
var gradovia =cities.filter(city => city.name.startsWith("A") && city.population > 1000000)
console.log(gradovia)

var suma = 0
for(i=0 ; i<cities.length;i++){

    suma +=cities[i].population
    
}
var prosek1 = suma / cities.length
console.log(prosek1)

