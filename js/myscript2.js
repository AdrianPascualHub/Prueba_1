/**var course={
    title: "Course JS advanced",
    section:4,
    subsection:6,
    teacher:"Javier Prada",
    intro: function(){
        return "Welcome to "+this.title+" with "+this.section+" sections.";
    }
}
//<script src="js\myscript2.js" ></script>
console.log(course["teacher"]);
console.log(course,teacher);

let text = course.intro();

console.log(text);*/
//CAMBIA A LOS 6 SEGUNDOS
/**setTimeout(()=> {
    var titulo = document.getElementById("pregunta");
    titulo.innerText="Se solo feo";
    titulo.style.backgroundColor="blue";
    titulo.style.color="white";
}, 6000);*/

//var subVentana=window.open("https://google.com", "nueva", "height=800,width=600")

/**setTimeout(()=> {
    var subVentana=window.open("https://google.com", "nueva", "height=800,width=600")
}, 6000);*/
