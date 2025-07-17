// JavaScript source code
function calculatePower()
{
    let base = Number(document.getElementById('base').value);
    let exponent = Number(document.getElementById('exponent').value);
    document.getElementById('power').value = Power(base, exponent);
}
function Power(base, exponent)
{
    return base ** exponent;
}
function SwitchBackground()
{
    let switchButton = document.getElementById('switchBackground');
    //console.log(switchButton.attributes.src);
    /*switchButton.attributes.src.nodeValue = switchButton.attributes.src.nodeValue == 'img/moon.png' ? 'img/sun.png' : 'img/moon.png';*/
    /*if (switchButton.attributes.src.nodeValue == 'img/moon.png')
    {
        switchButton.attributes.src.nodeValue = 'img/sun.png';
        document.body.style.background = "#323232";
        document.body.style.color = "white";
    }
    else
    {
        switchButton.attributes.src.nodeValue = 'img/moon.png';
        document.body.style.background = "#FFFFFF";
        document.body.style.color = "black";
    }*/
    let delay = Number(document.getElementById("delay").value);
    console.log(delay);
    document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
    document.getElementById('switchBackground').style.transition = `background-image ${delay}s`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
}
document.addEventListener("mousemove", function (event)
{
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mouse").innerHTML = `X = ${x}, Y = ${y}`;
}
);

function setImage()
{
    let filename = document.getElementById("image-file");
    //console.log(filename);
    //console.log(filename.split('\\'));
    //let splitted_filename = filename.split('\\');
    //document.getElementById("photo").src = splitted_filename[splitted_filename.length - 1];
    let reader = new FileReader();
    reader.onload = function (e)
    {
        document.getElementById("photo").src = e.target.result;
    }
        reader.readAsDataURL(filename.files[0]);

}