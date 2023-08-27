// clickNav function for onclick for button on navigation
function clickNav(loc, event) {
    // Onclick add class for transition | check css to understand
    let button2 = event.target
    button2.classList.add("colorChanged")
    setTimeout(function() { // A bit delay so animation goes off
        location.href = loc // Redirect to specified href
        button2.classList.remove("colorChanged")
    }, 300)
}

// Domloader for random color
document.addEventListener("DOMContentLoaded", function() {
    let color= generateRandomColor()
    document.documentElement.style.setProperty("--nav-col", color) // color for nav 
    document.querySelectorAll('.item').forEach(function(element) { //color for items class
        element.style.backgroundColor = color
    })
});

// Random color generation
function generateRandomColor() {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}


