function trans() {
    let x=document.getElementById("engl").value;
    let eng = ["dog", "cat", "duck", "chicken"];
    let vi = ["chó", "mèo", "vịt", "gà"];
    for (let i = 0; i < eng.length; i++) {
        if (eng.indexOf(x) !== -1) {
           document.getElementById("result").innerHTML=(vi[eng.indexOf(x)]);
        } else {
            document.getElementById("result").innerHTML="Don't have this word!!";
        }
    }
    alert(result.join(""));
}