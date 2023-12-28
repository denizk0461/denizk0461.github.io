function generateTableOfContents(document, into) {
    var headers = document.getElementsByTagName("h2");
    var entries = [];
    for (var i = 0; i < headers.length; i += 1) {
        var headerId = headers[i].id;
        var headerName = headers[i].innerText;
        var template = `<li><a href="#${headerId}">${headerName}</a></li>\n`;
        entries.push(template);
    }
    into.innerHTML = "<h3>Table of Contents</h2>\n" +
        "<ul>\n" +
        entries.join("") +
        "</ul>\n";
}