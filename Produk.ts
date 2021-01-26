class Smartphone {
    protected brand:string;
    protected harga:string;
    protected fitur = [];

    constructor(brand:string, harga:string, fitur:[]) {
        this.brand = brand;
        this.harga = harga;
        if(fitur.length > 0) {
            for(let i = 0; i <= fitur.length; i++) {
                this.fitur.push(fitur[i]);
            }
        }
    }

    tampilkanProduk(imageUrl:string, alt:string) {
        let html:string;
        html = `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <div class="text-center"><h4>${this.brand}</h4></div>
                    <div class="text-center"><h5>Rp. ${this.harga}</h5></div>
                    <img src="${imageUrl}" class="card-img-top img-responsive" alt="${alt}">
                    <div class="card-body">`;

        for(let j = 0; j < this.fitur.length - 1; j++) {
            html += `
                        <p class="card-text">${this.fitur[j]}</p>
            `;
        }
        
        html += `
                    </div>
                </div>
            </div>
        `;

        return html;
    }

}