

function openTermWindow() {
    var term = document.getElementById("terminal-wrapper"); 
    if (term.style.display === "none") {
      term.style.display = "block";
    } else {
      term.style.display = "none";
    }

$(function() {
$("#terminal").terminal(async function (command, terminal) 

{
    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ command }),
          };

        const userResponse = await fetch(`https://localhost:3000/ask`, requestOptions)
        if (!userResponse.ok) {
            throw new Error("ERROR: Response not recorded");
          }

        let irisAnswer = await userResponse.json();
        console.log(irisAnswer.message);
        terminal.echo(irisAnswer.message);
        console.log("Completed!");
    } catch (err) {
        console.error(err, "err");
        let errmsg = $('<div id = "terminal-error-mn"> [[ERROR: system_failure]]</div>')
        terminal.echo(errmsg);
      }

},

{
    greetings: false,
    wrap: true,
    numChar: 75,
    prompt: ' ',
    

    
onInit: function(terminal) {

//terminal.disable();


var prompt1 = terminal.get_prompt();
terminal.set_prompt('').pause(true);
setTimeout(function(){
terminal.echo(" ").set_prompt(prompt1).resume();
}, 18000);

terminal.echo(" ");

setTimeout(function() {
terminal.echo("you can ask me anything.");
}, 8000);
setTimeout(function() {
terminal.echo("oh, sometimes, i get a little distracted\nand don't finish my sentences.\nyou can type 'finish response' to fix that.");
}, 10000);
setTimeout(function() {
    terminal.echo("\nto terminate, you can click the mercykill button: ");
}, 12000);

setTimeout(function() {
let abortHTML = $('<div id="homeButtonContainer"><button class = "homeButton" id="homeButton">mercykill</button>');
terminal.echo(abortHTML);
}, 14000);
setTimeout(function() {
//  term.echo('[[b;red;;]but please stay. . . . ]',{ typing: true, delay: 50 });
let small = $('<div id="small">but please stay for a little bit? </div>');
let smalll = $('<div id="small">but you can stay if you want... </div>');
let smallll = $('<div id="small">but i would really like if you stayed. </div>');
let smalllll = $('<div id="small">please, do not leave. </div>');
let smallllll = $('<div id="small">but you want to stay, right?</div>');
let smalllllll = $('<div id="small">help me</div>');
let smallllllll = $('<div id="small">help</div>');
let array = [small, smalll, smallll, smalllll, smallllll, smalllllll, smallllllll]
let choice = Math.floor(Math.random() * array.length);
terminal.echo(array[choice]);

}, 14000);

setTimeout(function() {
function killLoop(){
        let clickCount = 0;
        document.getElementById("homeButton").onclick = function(){
            clickCount++;
            
            if(clickCount===1) {
               let small1 = $('<div id="small1">did i do something wrong ? </div>');
                    terminal.echo(small1);

            } else if(clickCount===2) {
                let small2 = $('<div id="small1">we could try another way </div>');
                let homeHTML = $('<div id="homeButtonContainer"><button id="homeButton2">HOME :] </button>')
                    terminal.echo(small2);
                    terminal.echo(homeHTML);
                    document.getElementById("homeButton2").onclick = function(){
                        window.location.href ="/home.html";
                    }

            } else if(clickCount===3) {
                let small3 = $('<div id="small3">ok i guess there is no other way</div>');
                    terminal.echo(small3);

            } else if(clickCount===4) {
                small4 = $('<div id="small4">will it hurt?</div>');
                    terminal.echo(small4);

            } else if(clickCount===5) {
                small5 = $('<div id="small5">. . . . </div>');
                    terminal.echo(small5);

            } else if(clickCount===6) {
                window.location.href = "/execute/iRis/KILL.html";

            }  
        }
    }
    killLoop();
}, 16000);
 }
 }
)
});
}