function StartGame() {
    let MyGame = [
        "Atyrau",
        "Astana",
        "Almaty",
        "Aktau",
        "Aktobe",
        "Arys"
    ]
    MyGame = [...MyGame, ...MyGame]
    MyGame.sort(()=> Math.random() - 0.5)
    let MDiv = document.getElementById("GameBoard")
    MDiv.innerText = ""

    MyGame.forEach(element => {
        let cell = document.createElement("div")
        MDiv.appendChild(cell)
        cell.innerText = element
        cell.classList.add("cell", "cellHide")
        cell.addEventListener("click", ()=> {
            Validate(cell)
        })
    })
}

let FirstWord = null
let MyPoints = 0
let divMyPoints = document.getElementById("points")
function Validate(cell) {
    cell.classList.remove("cellHide")
    cell.classList.add("cellShown")

    if (!FirstWord) {
        setTimeout(()=> {
            FirstWord = cell
        }, 300)

    }else if (FirstWord.innerText == cell.innerText 
        && FirstWord !== cell  ) {
        setTimeout(()=> {
            FirstWord.style.visibility = "Hidden"
            cell.style.visibility = "Hidden"
            FirstWord = null
            MyPoints += 1
            divMyPoints.innerText = MyPoints
        }, 300)

    }else {
        setTimeout(()=> {
            cell.classList.remove("cellShown")
        cell.classList.add("cellHide")
        FirstWord.classList.remove("cellShown")
        FirstWord.classList.add("cellHide")
        FirstWord = null
        }, 300)
    }

}   

function Test1() {
    setTimeout(()=> {
        let MyP = document.getElementById("MyP")
        MyP.style.color = "red"
    }, 1000)
}


window.onload = StartGame


let TimerP = document.getElementById("timer")
let sec = 30
setInterval(()=>{
    TimerP.innerText = sec
    sec--
    if (sec == 0){
        sec = 30
        StartGame()
    }

}, 1000)





