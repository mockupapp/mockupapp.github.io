const result = sessionStorage.getItem("result");
console.log(result);
Document.getElementById("firstname").innerHTML = result["firstname"]; // foreach loop