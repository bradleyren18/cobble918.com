import {
    table,
    elements,
    names,
    numbers
} from "./info.js";

console.log("No errors present! :)")

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
c.width = 1440;
c.height = 720;
var xpos = 0;
var ypos = 0;
var pos = 0;
var cellSize = 70;

for (let x = 0; x < table.length; x++) {
    for (let y = 0; y < table[x].length; y++) {
        ctx.fillStyle = table[x][y];
        ctx.fillRect(xpos, ypos, cellSize, cellSize);
        if (table[x][y] != "black") {
            var text = elements[pos]
            ctx.font = "20px Arial";
            ctx.fillStyle = "black"

            const textMetrics = ctx.measureText(text);
            const textX = xpos + (cellSize - textMetrics.width) / 2;
            const textY = ypos + (cellSize + parseInt(ctx.font, 10)) / 2;

            ctx.fillText(text, textX, textY);

            var text1 = names[pos]
            ctx.font = "10px Arial";
            const textMetrics1 = ctx.measureText(text1);
            const textX1 = xpos + (cellSize - textMetrics1.width) / 2;
            const textY1 = ypos + (cellSize + parseInt(ctx.font, 10)) / 2;
            ctx.fillText(text1, textX1, textY1 + 20);

            var text2 = numbers[pos]
            ctx.font = "15px Arial";
            const textMetrics2 = ctx.measureText(text2);
            const textX2 = xpos + (cellSize - textMetrics2.width) / 2;
            const textY2 = ypos + (cellSize + parseInt(ctx.font, 10)) / 2;
            ctx.fillText(text2, textX2, textY2 - 20);

            pos++
        }
        xpos += cellSize + 10;
    }
    xpos = 0;
    ypos += cellSize + 10;
}