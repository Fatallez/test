let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");

let command;
let arr;
let itemPosition;
let r1;
let r2;

function draw()
{
    command = document.querySelector(".draw_command").value.split("&");

    command.forEach(item =>
        {
            item = item.trim().split(" -");

            arr = item;
            switch (item[0])
            {
                case 'line':
                    drawLine();
                    break;
                case 'rectangle':
                    drawRectangle();
                    break;
                case 'triangle':
                    drawTriangle();
                    break;
                case 'circle':
                    drawCircle();
                    break;
                case 'ellipse':
                    drawEllipse();
                    break;
            }
        });

    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.lineWidth = 1;
}

function clearCanvas()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function drawLine()
{
    arr.splice(0, 1);

    arr.map((item) =>
    {
        let option = item.slice(0, 1);

        if (option === "p")
        {
            let figure = item.slice(3);
            let itemSplit = figure.split(/\s*\[|,\s*|]/);
            itemPosition = itemSplit.filter(el => el !== "");
        }
        if (option === "c")
        {
            ctx.strokeStyle = item.slice(2);
        }
        if (option === "b")
        {
            ctx.fillStyle = item.slice(2);
        }
        if (option === "w")
        {
            ctx.lineWidth = item.slice(2);
        }
    });

    ctx.beginPath();
    ctx.moveTo(itemPosition[0], itemPosition[1]);
    ctx.lineTo(itemPosition[2], itemPosition[3]);
    ctx.closePath();
    ctx.stroke();
}

function drawRectangle()
{
    arr.splice(0, 1);

    arr.map((item) =>
    {
        let option = item.slice(0, 1);

        if (option === "p")
        {
            let figure = item.slice(3);
            let itemSplit = figure.split(/\s*\[|,\s*|]/);
            itemPosition = itemSplit.filter(el => el !== "");

        }
        if (option === "c")
        {
            ctx.strokeStyle = item.slice(2);
        }
        if (option === "b")
        {
            ctx.fillStyle = item.slice(2);
        }
        if (option === "w")
        {
            ctx.lineWidth = item.slice(2);
        }
    });

    ctx.fillRect(itemPosition[0], itemPosition[1], itemPosition[2]-itemPosition[0], itemPosition[3]-itemPosition[1]);
    ctx.strokeRect(itemPosition[0], itemPosition[1], itemPosition[2]-itemPosition[0], itemPosition[3]-itemPosition[1]);
}

function drawTriangle()
{
    arr.splice(0, 1);

    arr.map((item) =>
    {
        let option = item.slice(0, 1);

        if (option === "p")
        {
            let figure = item.slice(3);
            let itemSplit = figure.split(/\s*\[|,\s*|]/);
            itemPosition = itemSplit.filter(el => el !== "");
        }
        if (option === "c")
        {
            ctx.strokeStyle = item.slice(2);
        }
        if (option === "b")
        {
            ctx.fillStyle = item.slice(2);
        }
        if (option === "w")
        {
            ctx.lineWidth = item.slice(2);
        }
    });

    ctx.beginPath();
    ctx.moveTo(itemPosition[0], itemPosition[1]);
    ctx.lineTo(itemPosition[2], itemPosition[3]);
    ctx.lineTo(itemPosition[4], itemPosition[5]);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawCircle()
{
    arr.splice(0, 1);

        arr.map((item) =>
        {
            let option = item.slice(0, 1);

            if (option === "p")
            {
                let figure = item.slice(3);
                let itemSplit = figure.split(/\s*\[|,\s*|]/);
                itemPosition = itemSplit.filter(el => el !== "");
            }
            if (option === "c")
            {
                ctx.strokeStyle = item.slice(2);
            }
            if (option === "r")
            {
                r1 = item.slice(2);
            }
            if (option === "b")
            {
                ctx.fillStyle = item.slice(2);
            }
            if (option === "w")
            {
                ctx.lineWidth = item.slice(2);
            }
        });

    ctx.beginPath();
    ctx.arc(itemPosition[0], itemPosition[1], r1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawEllipse()
{
    arr.splice(0, 1);

    arr.map((item) =>
    {
        let option = item.slice(0, 2);
        option = option.replace(" ", "");

        if (option === "p")
        {
            let figure = item.slice(3);
            let itemSplit = figure.split(/\s*\[|,\s*|]/);
            itemPosition = itemSplit.filter(el => el !== "");
        }
        if (option === "c")
        {
            ctx.strokeStyle = item.slice(2);
        }
        if (option === "r1")
        {
            r1 = item.slice(2);
        }
        if (option === "r2")
        {
            r2 = item.slice(2);
        }
        if (option === "b")
        {
            ctx.fillStyle = item.slice(2);
        }
        if (option === "w")
        {
            ctx.lineWidth = item.slice(2);
        }
    });

    ctx.beginPath();
    ctx.ellipse(itemPosition[0], itemPosition[1], r1, r2, 0, Math.PI / 4,2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}


