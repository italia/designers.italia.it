var url = "//api.ipresslive.com/v2/pressreleases/list/" + document.getElementById("content-ipress").getAttribute("data-key") + "?lang=" + document.getElementById("content-ipress").getAttribute("data-lang") + "&size=" + document.getElementById("content-ipress").getAttribute("data-size");
    if (document.getElementById("content-ipress").getAttribute("data-tag") != null);
    {
        url += "&t=" + document.getElementById("content-ipress").getAttribute("data-tag");
    }
    // Register a helper to format date
    Handlebars.registerHelper('formatDate', function (str, lang) {
        var date = new Date(str);
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        var day = date.getDate().toString();
        month = month.length > 1 ? month : '0' + month;
        day = day.length > 1 ? day : '0' + day;

        if (lang == "it") {
            return day + '/' + month + '/' + year;
        }
        else if (lang == "en") {
            return month + '/' + day + '/' + year;
        }
    });
    Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!=':
                return (v1 != v2) ? options.fn(this) : options.inverse(this);
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });
    function loadPressReleases() {

        var xmlhttp = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {

                    var context = JSON.parse(xmlhttp.responseText);
                    if(context.elements.length > 0)
                    {
                        context.lang = document.getElementById("content-ipress").getAttribute("data-lang");
                        // Grab the template script
                        var theTemplateScript = document.getElementById("built-in-helpers-template").innerHTML;
                        // Compile the template
                        var theTemplate = Handlebars.compile(theTemplateScript);
                        // Pass our data to the template
                        var theCompiledHtml = theTemplate(context);
                        document.getElementById("content-ipress").innerHTML = theCompiledHtml;
                        // get the number of shown elements
                        var numbershownInPreview = 2;
                        var nodes = document.getElementById('ipress').childNodes;
                        if (context.elements.length > numbershownInPreview) {
                            document.getElementById("ipress").style.overflowY = "scroll";
                            document.getElementById("ipress").style.overflowX = "hidden";
                            document.getElementById("ipress").style.border = "solid 1px silver";
                            document.getElementById("ipress").style.borderLeft = "none";
                            document.getElementById("ipress").style.borderRight = "none";
                        }
                        var boxHeight = 0;
                        var boxElementsEvaluated = 0;
                        for (var i = 0; i < nodes.length ; i++) {
                            if (nodes[i].nodeName.toLowerCase() == 'div') {
                                boxElementsEvaluated++;
                                if (boxElementsEvaluated > numbershownInPreview) {
                                    break;
                                }
                                boxHeight += nodes[i].offsetHeight;
                            }

                        }
                        document.getElementById('ipress').style.height = boxHeight.toString() + "px";
                    }
                }
                else if (xmlhttp.status == 400) {
                }
                else {
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    loadPressReleases();