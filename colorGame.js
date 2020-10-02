var numSquares = 6
var colors = generateRandomColors(numSquares)

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("resetButton");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    h1.style.background = "steelblue";
    message.textContent = ""
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i = 0;i<squares.length; i++)
    {
        if (colors[i])
        {
            squares[i].style.background = colors[i]
        }
        else
        {
            squares[i].style.display = "none"
        }
        
    }
});

hardBtn.addEventListener("click", function(){
    h1.style.background = "steelblue";
    message.textContent = ""
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i = 0;i<squares.length; i++)
    {
        squares[i].style.background = colors[i]
        squares[i].style.display = "block"
        
        
    }
});

resetButton.addEventListener("click", function(){
    
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase(); 
    this.textContent = "New Color"
    for(var i = 0;i<squares.length; i++)
    {
        squares[i].style.background = colors[i]
    }
    h1.style.background = "steelblue";
    message.textContent = ""
});

colorDisplay.textContent = pickedColor.toUpperCase(); 
for(var i = 0;i<squares.length;i++)
{
    // Give color to each square
    squares[i].style.background = colors[i];

    // add event listener to each square
    squares[i].addEventListener("click",function(){
        // alert("Clicked a square")
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor )
        {
            message.textContent = "Correct"
            changeColor(clickedColor)
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?"
        }
        else
        {
            this.style.background = "#232323";
            message.textContent = "Try Again"
            // alert("Wrong");
        }
    });
}

function changeColor(color)
{
    for(var i = 0;i<squares.length; i++)
    {
        squares[i].style.background = color
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColors(num)
{
    //make an array
    var arr = []
    //assign random colors to the array
    for(var i=0; i<num;i++)
    {
        arr[i] = randomColor();
    }
    
    //return an array
    return arr

}

function randomColor()
{
    var r = Math.floor(Math.random() *256)
    var g = Math.floor(Math.random() *256)
    var b = Math.floor(Math.random() *256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}




