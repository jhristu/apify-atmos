function pageFunction(context) {
    // trim polyfill
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
      }

    var $ = context.jQuery;

    // find elements
    var preText = $("pre").text();
    var lines = preText.split("\n");
    var citiesData = Array();

    for (i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.startsWith("CITY")) {
            var labels = line.split(/\s+/).filter(Boolean);
            for (var j = 0; j < labels.length; j++) {
                labels[j] = [labels[j], line.indexOf(labels[j])];
            }

            while (!lines[++i].startsWith("$$")) {
                line = lines[i];
                var cityData = {};
                for (var k = 0; k < labels.length; k++) {
                    if (k == labels.length - 1) {
                        citiyValue = line.slice[labels[k][1]];
                    } else {
                        cityValue = line.slice(labels[k][1], labels[k+1][1]).trim();
                    }

                    if (cityValue !== undefined) {
                        cityValue.trim();
                        cityData[labels[k][0]] = cityValue;
                    }
                }
                citiesData.push(cityData);
            }
        }
    }

    return citiesData;
}