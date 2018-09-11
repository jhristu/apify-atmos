// find elements
var preText = $("pre").text();
var lines = preText.split("\n");
var citiesData = Array();

for (i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.startsWith("CITY")) {
        console.log("CITY at " + i);
        // TODO: Find columnar locations

        var cityIndices = Array();

        while (!lines[++i].startsWith("$$")) {
            line = lines[i];
            citiesData.push(line);
        }
    }
}

console.log(citiesData)