var result = sessionStorage.getItem("result");
//FOR TESTING!!!
/*
{
    "id": "0",
    "firstname": "MARTINA",
    "lastname": "LUPINSKI",
    "dateofbirth": "10.12.1997",
    "placeofbirth": "Wien",
    "dateofissue": "01.01.2020",
    "dateofexpiration": "01.01.2026",
    "placeofissue": "BH Gänserndorf",
    "licensenumber": 123456789,
    "licenses": {
      "A": "02.02.2000",
      "A1": "02.02.2000",
      "A2": "02.02.2000",
      "AM": "02.02.2000",
      "B1": "02.02.2000",
      "B": "02.02.2000",
      "C1": "02.02.2000",
      "C": "02.02.2000",
      "D1": "02.02.2000",
      "D": "02.02.2000",
      "BE": "02.02.2000",
      "C1E": "02.02.2000",
      "CE": "02.02.2000",
      "D1E": "02.02.2000",
      "DE": "02.02.2000",
      "F": "02.02.2000"
    },
    "kfz": "W12345-HyundaiI20"
}
    */
result = "{\r    \"id\": \"0\",\r    \"firstname\": \"MARTINA\",\r    \"lastname\": \"LUPINSKI\",\r    \"dateofbirth\": \"10.12.1997\",\r    \"placeofbirth\": \"Wien\",\r    \"dateofissue\": \"01.01.2020\",\r    \"dateofexpiration\": \"01.01.2026\",\r    \"placeofissue\": \"BH Gänserndorf\",\r    \"licensenumber\": 123456789,\r    \"licenses\": {\r      \"A\": \"02.02.2000\",\r      \"A1\": \"02.02.2000\",\r      \"A2\": \"02.02.2000\",\r      \"AM\": \"02.02.2000\",\r      \"B1\": \"02.02.2000\",\r      \"B\": \"02.02.2000\",\r      \"C1\": \"02.02.2000\",\r      \"C\": \"02.02.2000\",\r      \"D1\": \"02.02.2000\",\r      \"D\": \"02.02.2000\",\r      \"BE\": \"02.02.2000\",\r      \"C1E\": \"02.02.2000\",\r      \"CE\": \"02.02.2000\",\r      \"D1E\": \"02.02.2000\",\r      \"DE\": \"02.02.2000\",\r      \"F\": \"02.02.2000\"\r    },\r    \"kfz\": \"W12345-HyundaiI20\"\r}";
console.log(result);

var jsonresult = JSON.parse(result);

//fill fields
document.getElementById("firstname").innerHTML = jsonresult["firstname"];
document.getElementById("lastname").innerHTML = jsonresult["lastname"];
document.getElementById("dateofbirth").innerHTML = jsonresult["dateofbirth"];
document.getElementById("placeofbirth").innerHTML = jsonresult["placeofbirth"];
document.getElementById("dateofissue").innerHTML = jsonresult["dateofissue"];
document.getElementById("dateofexpiration").innerHTML = jsonresult["dateofexpiration"];
document.getElementById("placeofissue").innerHTML = jsonresult["placeofissue"];
document.getElementById("licensenumber").innerHTML = jsonresult["licensenumber"];

if (jsonresult["licenses"] != null && jsonresult["licenses"] != "")
{
    var licenses = jsonresult["licenses"];
    var keys = Object.keys(licenses);
    document.getElementById("licenses").innerHTML = "";

    for (let i = 0; i < keys.length; i++) {

        var liClass = keys[i];
        var liDate = licenses[keys[i]];
        
        switch (liClass) {
            case 'AM':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>"+
                    "<h3>MOTORFAHRR&Auml;DER | LEICHTKRAFTFAHRZEUGE</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'A1':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>LEICHTE MOTORR&Auml;DER</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'A2':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>MITTLERE MOTORR&Auml;DER</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'A':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>MOTORR&Auml;DER</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'B':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>PKW UND MEHR</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'B1':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>KLEIN- ODER DREIR&Auml;DRIGE MOTORFAHRZEUGE</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'C1':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>KLEIN LASTKRAFTWAGEN</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'C':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>LASTKRAFTWAGEN</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'D1':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>KLEINBUS</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'D':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>BUS</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'BE':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>PKW ANH&Auml;NGER</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'C1E':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>KLEINBUSANH&Auml;NGER</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'CE':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>GROSS LASTKRAFTWAGEN</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'D1E':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>BUS MIT ANH&Auml;NGER</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'DE':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>GROSS BUS MIT ANH&Auml;NGER</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            case 'F':

                document.getElementById("licenses").innerHTML += "<h2>Klasse " + liClass + "</h2>" +
                    "<h3>TRAKTOR</h3>" +
                    "<h2>" + liDate + "</h2>" +
                    "<h3>AUSSTELLUNGSDATUM</h3>" +
                    "<h3>-----------------</h3>";
                break;
            
        }
    }
}