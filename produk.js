var Smartphone = /** @class */ (function () {
    function Smartphone(brand, harga, fitur) {
        this.fitur = [];
        this.brand = brand;
        this.harga = harga;
        if (fitur.length > 0) {
            for (var i = 0; i <= fitur.length; i++) {
                this.fitur.push(fitur[i]);
            }
        }
    }
    Smartphone.prototype.tampilkanProduk = function (imageUrl, alt) {
        var html;
        html = "\n            <div class=\"col-md-3 mb-4\">\n                <div class=\"card\">\n                    <div class=\"text-center\"><h4>" + this.brand + "</h4></div>\n                    <div class=\"text-center\"><h5>Rp. " + this.harga + "</h5></div>\n                    <img src=\"" + imageUrl + "\" class=\"card-img-top img-responsive\" alt=\"" + alt + "\">\n                    <div class=\"card-body\">";
        for (var j = 0; j < this.fitur.length - 1; j++) {
            html += "\n                        <p class=\"card-text\">" + this.fitur[j] + "</p>\n            ";
        }
        html += "\n                    </div>\n                </div>\n            </div>\n        ";
        return html;
    };
    return Smartphone;
}());
