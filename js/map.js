
window.onload = roomsComplete;

function roomsComplete() {
           
            var room1 = localStorage.getItem("room1");
            var room2 = localStorage.getItem("room2");
            var room3 = localStorage.getItem("room3");
            var room4 = localStorage.getItem("room4");
            var room5 = localStorage.getItem("room5");
            var room6 = localStorage.getItem("room6");
            var room7 = localStorage.getItem("room7");
            var room8 = localStorage.getItem("room8");

            //localStorage.removeItem("room5");

            if(room1 == 'complete')
            {
                document.getElementById("imglock1").src = "assets/unlock.png";
            }

            if(room2 == 'complete')
            {
                document.getElementById("imglock2").src = "assets/unlock.png";
            }

            if(room3 == 'complete')
            {
                document.getElementById("imglock3").src = "assets/unlock.png";
            }

            if(room4 == 'complete')
            {
                document.getElementById("imglock4").src = "assets/unlock.png";
            }

            if(room5 == 'complete')
            {
                document.getElementById("imglock5").src = "assets/unlock.png";
            }

            if(room6 == 'complete')
            {
                document.getElementById("imglock6").src = "assets/unlock.png";
            }

            if(room7 == 'complete')
            {
                document.getElementById("imglock7").src = "assets/unlock.png";
            }

            if(room8 == 'complete')
            {
                document.getElementById("imglock8").src = "assets/unlock.png";
            }


        }


function clearLocks() {

localStorage.removeItem("room1");
localStorage.removeItem("room2");
localStorage.removeItem("room3");
localStorage.removeItem("room4");
localStorage.removeItem("room5");
localStorage.removeItem("room6");
localStorage.removeItem("room7");
localStorage.removeItem("room8");

location.reload();
return false;

}




//Useful links to activties
function displayCup() {

    document.getElementById("results").textContent = "Room 1: This is a cup"

}

function displayTable() {

    document.getElementById("results").textContent = "Room 2: This is a Table"

}

function displayMonitor() {

    document.getElementById("results").textContent = "Room 3: This is a Monitor"

}

function displayLamphead() {

    document.getElementById("results").textContent = "Room 4: This is a lamphead"

}

function displayFlatBook3() {

    document.getElementById("results").textContent = "Room 5: This is knob 1"

}

function displayPenstand() {

    document.getElementById("results").textContent = "Room 6: This is a penstand"

}

function displaySlantBook() {

    document.getElementById("results").textContent = "Room 7: This is a slanted book"

}

function displayWindow() {

    document.getElementById("results").textContent = "Room 8: This is a window"

}





//Links for interest with no activties
function displayFloor() {

    document.getElementById("results").textContent = "No time for sitting down !"

}

function displayFlatBook() {

    document.getElementById("results").textContent = "This is just a book"

}

function displayKnob1() {

    document.getElementById("results").textContent = "This is just a knob"

}

function displayKnob2() {

    document.getElementById("results").textContent = "Bin: Reset Locks"
}
