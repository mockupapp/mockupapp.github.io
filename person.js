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
result = "{\r    \"id\": \"0\",\r    \"firstname\": \"Martina\",\r    \"lastname\": \"LUPINSKI\",\r    \"dateofbirth\": \"10.12.1997\",\r    \"placeofbirth\": \"Wien\",\r    \"dateofissue\": \"01.01.2020\",\r    \"dateofexpiration\": \"01.01.2026\",\r    \"placeofissue\": \"BH Gänserndorf\",\r    \"licensenumber\": 123456789,\r    \"licenses\": {\r      \"A\": \"02.02.2000\",\r      \"A1\": \"02.02.2000\",\r      \"A2\": \"02.02.2000\",\r      \"AM\": \"02.02.2000\",\r      \"B1\": \"02.02.2000\",\r      \"B\": \"02.02.2000\",\r      \"C1\": \"02.02.2000\",\r      \"C\": \"02.02.2000\",\r      \"D1\": \"02.02.2000\",\r      \"D\": \"02.02.2000\",\r      \"BE\": \"02.02.2000\",\r      \"C1E\": \"02.02.2000\",\r      \"CE\": \"02.02.2000\",\r      \"D1E\": \"02.02.2000\",\r      \"DE\": \"02.02.2000\",\r      \"F\": \"02.02.2000\"\r    },\r    \"kfz\": \"W12345-HyundaiI20\"\r}";
console.log(result);

var jsonresult = JSON.parse(result);

//fill fields
document.getElementById("firstname").innerHTML = jsonresult["firstname"].toUpperCase();
document.getElementById("lastname").innerHTML = jsonresult["lastname"].toUpperCase();
document.getElementById("dateofbirth").innerHTML = jsonresult["dateofbirth"];
document.getElementById("placeofbirth").innerHTML = jsonresult["placeofbirth"].toUpperCase();
document.getElementById("dateofissue").innerHTML = jsonresult["dateofissue"];
document.getElementById("dateofexpiration").innerHTML = jsonresult["dateofexpiration"];
document.getElementById("placeofissue").innerHTML = jsonresult["placeofissue"].toUpperCase();
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

                document.getElementById("licenses").innerHTML += "" +
                    "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">MOTORFAHRR&Auml;DER | LEICHTKRAFTFAHRZEUGE</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'A1':

                document.getElementById("licenses").innerHTML += "" +
                    "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">LEICHTE MOTORR&Auml;DER</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'A2':

                document.getElementById("licenses").innerHTML += "" +
                    "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">MITTLERE MOTORR&Auml;DER</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'A':

                document.getElementById("licenses").innerHTML += "<svg height=\"30\" width=\"200\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g fill=\"none\" fill-rule=\"evenodd\"> <path d=\"m0 0h32v32h-32z\"></path> <path d=\"m21.3976443 5c2.1431453 0 4.4846026 1.84790991 6.620489 4.64279757.8158709 1.06759763 1.5223847 2.19181453 1.9561703 3.09686273.2287194.4771992.3789783.8857404.4373777 1.2258968.130692.761235-.1581883 1.5344429-1.1287675 1.5344429l-.3022308-.0070024c-.1493249-.0080425-.3454471-.0248792-.7362058-.0593706-1.0156448-.0896488-1.7787277-.0849352-2.5620878.0882224l.2735604.5873181c.3367329-.0715316.6859964-.1091675 1.0440502-.1091675 2.7614237 0 5 2.2385763 5 5s-2.2385763 5-5 5-5-2.2385763-5-5c0-1.6905344.8389842-3.1851135 2.1232925-4.0900772l-.2916803-.625527c-.4172771.3178525-.9010289.8204435-1.5953421 1.6317997l-.8840221 1.0540812-.4179711.4911367c-1.484606 1.7133031-2.4655634 2.4716217-3.7300048 2.5343236l-.1742549.004263-7.13027629.0011864c-.46372867 2.2816492-2.48120217 3.9988136-4.89974091 3.9988136-2.76142375 0-5-2.2385763-5-5s2.23857625-5 5-5c2.4188915 0 4.43660076 1.7176654 4.89994372 3.999812l.88605628.000188-.000345-.0290143c-.0497943-.8320167-.4146223-1.7355376-1.32459674-2.7640258l-.1893317-.2073797c-.119662-.1271682-.24019224-.2472788-.36160859-.3605633-1.38230621-1.289726-2.51871932-1.6113203-4.62612344-1.62684l-.57566044.0006719c-2.06724456 0-3.61327656-2.85672-3.27069651-4.3497073.17873809-.77895282.76108039-.99029215 1.51676779-.99479566.28648067-.00170727.5990043.02939162 1.02027779.09317291l1.15127949.1858323c.12217216.0173275.1963501.02467046.25189154.02607361l.03132336.00016148c2.03249295-.0334605 3.59649412.23374586 5.03398892.74394776l.34491374.1301715c.40499099.1577722.93693679.3750113 1.11634269.4416987l.1365799.0485321c.017887.0077294.0250971.0129329.0264317.017012l-.0014345.0020518.2520675-.2148009c1.3983183-1.17874429 2.3342246-1.67969947 3.3796944-1.89386139l.1857485-.03489577c1.3428643-.23020797 2.7036501-.1926031 4.0660112.03703614l.2674784.04852192-1.286413-2.00288608c-.1189313-.18803701-.2051957-.32782303-.2755979-.44656326l-.1107182-.19403828c-.031387-.05809474-.0576236-.11051642-.0798155-.15999987-.0485409-.10823645-.0819689-.20464986-.1002331-.3350623-.0700045-.49985777.1936393-1.08240916.8619173-1.15327552l.1390718-.00717469zm-16.3976443 13c-1.65685425 0-3 1.3431458-3 3s1.34314575 3 3 3c1.30588222 0 2.41688515-.8343774 2.82897577-1.9990993l-2.82897577-.0009007c-.55228475 0-1-.4477153-1-1 0-.5128358.38604019-.9355072.88337887-.9932723l.11662113-.0067277 2.82932572.0000889c-.4118113-1.1652388-1.52307366-2.0000889-2.82932572-2.0000889zm22 0c-.05349 0-.1066531.0013999-.1594546.0041651l1.230398 2.6399894c.2334056.50054.0168505 1.0955204-.4836895 1.3289261-.50054.2334056-1.0955204.0168504-1.3289261-.4836896l-1.2673283-2.7174093c-.6085226.5490531-.9909995 1.3438696-.9909995 2.2280183 0 1.6568542 1.3431458 3 3 3s3-1.3431458 3-3-1.3431458-3-3-3zm-5.6023557-11h-1.2816443l.8444984 1.31274802c.4474775.700311.86541 1.36411352 1.2880578 2.04873238l.0569795.0980381c.0690595.1290877.0695063.2071004.0719637.6361704l-.1203878.2422299c-.1714294.3355044-.221574.3584297-.5224418.4959813l-.3274283.0571472c-.0464623.0059021-.0744386.0063313-.1020641.0031225l-.1654307-.0298857-.2487574-.0710719-.1666636-.0525238c-.3688708-.115908-.669621-.2030543-1.0305208-.2926382-1.5247366-.3784758-3.0385175-.5091693-4.4723631-.2633644-.7903674.1354931-1.4766691.4988162-2.8457272 1.6844844-.0569933.0493589-.1154173.0951804-.1755098.1374257-.5711101.4014923-1.1663016.4271691-1.8627384.2029004l-.1959071-.0713023c-.38420867-.1467759-1.11407622-.4459604-1.36735586-.5358555-1.12294024-.3985588-2.33993293-.62238-3.9273684-.631295l-.52961001.0023623c-.16185415-.0029938-.31822177-.0199015-.62617832-.0681936l-1.04788772-.1709569c-.03598737-.0053381-.07074481-.0103457-.10431424-.0150251l.04290695.0945189c.26674166.5546715.74800327 1.1990997 1.12658239 1.1990997l.27220314-.0009284c2.76042521-.0137349 4.38995103.3882582 6.29397617 2.164761.1533039.1430364.3045521.293758.45376.4523255 1.3843914 1.4712317 1.9717584 2.8831727 2.053484 4.2136432l.0062426.1573499h4.2420172c.5860639 0 1.3382278-.6078186 2.6121781-2.1045053l.9311805-1.1118734c1.3736032-1.623637 2.0902116-2.2871761 3.1025117-2.7072528 1.4457497-.5999464 2.5806507-.7577312 4.0436095-.6844539l.355503.0210854-.0232427-.0478351c-.3375546-.654465-.8333421-1.4416014-1.4049656-2.2177166l-.2177527-.2902459c-1.7159496-2.24538439-3.5718606-3.74309956-4.8826124-3.85096134zm-2.3976443 6c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1z\" fill=\"#000000\" fill-rule=\"nonzero\"></path> </g> </g></svg>" +
                    "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">MOTORR&Auml;DER</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'B':

                document.getElementById("licenses").innerHTML += "" +
                    "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">PKW UND MEHR</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'B1':

                document.getElementById("licenses").innerHTML += "" +
                    "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">KLEIN- ODER DREIR&Auml;DRIGE MOTORFAHRZEUGE</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'C1':

                document.getElementById("licenses").innerHTML += "" +
                    "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">KLEIN LASTKRAFTWAGEN</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'C':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">LASTKRAFTWAGEN</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'D1':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">KLEINBUS</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'D':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">BUS</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'BE':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">PKW ANH&Auml;NGER</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'C1E':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">KLEINBUSANH&Auml;NGER</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'CE':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">GROSS LASTKRAFTWAGEN</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'D1E':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">BUS MIT ANH&Auml;NGER</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'DE':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">GROSS BUS MIT ANH&Auml;NGER</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            case 'F':

                document.getElementById("licenses").innerHTML += "<h2 class=\"data\">Klasse " + liClass + "</h2>" +
                    "<h3 class=\"default\">TRAKTOR</h3>" +
                    "<h2 class=\"data\">" + liDate + "</h2>" +
                    "<h3 class=\"default\">AUSSTELLUNGSDATUM</h3>" +
                    "<h3 class=\"default\">-----------------</h3>";
                break;
            
        }
    }
}