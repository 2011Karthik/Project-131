results = [];
function gotResults() {

}

function draw() {
     if(Status != "")
     {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFIll()
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height)
        }
     }
}