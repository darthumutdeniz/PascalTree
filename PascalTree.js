function PascalTree(n){
    pascallines = [[1]]
    for (i = 1; i <= n; i++){
        pascallines.push([])
        for (j = 0; j < pascallines[i - 1].length + 1; j++){
            if (j < 1 || j == pascallines[i - 1].length){
                pascallines[i].push(1)
            }
            else{
                newNum = pascallines[i - 1][j - 1] + pascallines[i - 1][j]
                pascallines[i].push(newNum)
            }
        }
    }
    return pascallines
}

let input = document.getElementById("Input");
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        CreateElements();
    }
});

document.getElementById("Execute").addEventListener("click", 
    () => {CreateElements();}
);

function CreateElements()
{
    let n = document.getElementById("Input").value;
    if(n >= 74 ){
        alert("Input must be less than 74");
        return;
    }
    else if(n < 1)
    {
        alert("Input must be a positive integer");
        return;
    }
    let tree = PascalTree(n-1);
    console.log(tree);
    let container = document.getElementById("container");
    let body = document.body;
    let length = n * 100 + 16;
    console.log(tree[tree.length - 1].length);
    body.style = "width: " + length + "px"
    container.innerHTML = "";
    for(i = 0; i < tree.length; i++)
    {
        let row = document.createElement("div");
        row.className = "row";
        for(j = 0; j < tree[i].length; j++)
        {
            let box = document.createElement("input");
            box.className = "box";
            box.value = tree[i][j];
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}




