/* Postavke uređivača za Auto Dalmaciju */
window.CMS_CONFIG = {
  siteName: "Auto Dalmacija",
  owner: "newaveadagency",
  repo: "auto-dalmacija",
  branch: "main",
  siteUrl: "https://newaveadagency.github.io/auto-dalmacija/",
  uploadDir: "img/uploads",
  phone: "+38521381457",
  email: "prodaja@autodalmacija.hr",
  buttonClass: "btn btn-red",
  activeClass: "on",
  sectionTemplate: '<div class="wrap"><h2>Novi naslov sekcije</h2><p style="color:var(--mute);margin-top:12px;max-width:640px">Kliknite ovdje i upišite tekst.</p></div>',
  pages: [
    { file: "index.html", name: "Naslovnica" },
    { file: "ponuda.html", name: "Ponuda vozila" },
    { file: "vozilo.html", name: "Stranica vozila (predložak)", template: "Ovo je predložak za sva vozila. Naslov, cijena, fotografija i podaci popunjavaju se automatski iz kartice „Vozila”. Ovdje uređujete tekstove i dijelove zajedničke svim vozilima." }
  ],
  dynamic: {
    "#home-grid": "Izdvojena vozila iz ponude (automatski)",
    "#plist-grid": "Popis vozila s filterima (automatski)",
    "#slicna": "Slična vozila (automatski)",
    "#vperks": "Pogodnosti vozila (automatski)"
  },
  locked: ["[data-v]", "#vimg", "#vbadges", "[data-count]", "[data-open]", "#count", "#rata", "#rUc", "#rFin", "#rN"],
  vehicles: {
    file: "vozila.js",
    varName: "VOZILA",
    comment: "Ponuda vozila Auto Dalmacija",
    titleField: "naziv",
    priceField: "cijena",
    imageField: "slika",
    sub: function (v) { return [v.stanje, v.godina, v.km ? new Intl.NumberFormat("hr-HR").format(v.km) + " km" : "", v.gorivo, v.lokacija].filter(Boolean).join(" · "); },
    empty: { naziv: "", marka: "", model: "", stanje: "Rabljeno", km: 0, godina: new Date().getFullYear(), lokacija: "Plano", cijena: 0, rata: 0, mjenjac: "Ručni", gorivo: "Dizel", karoserija: "SUV", oznake: ["jamstvo"], njuskalo: "", slika: "" },
    fields: [
      { k: "naziv", l: "Naziv oglasa", w: "w2", req: true, h: "npr. Kia Sportage 1.6 T-GDI Fresh 7DCT" },
      { k: "stanje", l: "Stanje", t: "select", o: ["Rabljeno", "Testno", "Novo"] },
      { k: "marka", l: "Marka", req: true },
      { k: "model", l: "Model", req: true },
      { k: "godina", l: "Godište", t: "number", req: true },
      { k: "km", l: "Kilometraža (km)", t: "number" },
      { k: "cijena", l: "Cijena (€)", t: "number", req: true },
      { k: "rata", l: "Rata od (€/mj)", t: "number", h: "Prikazuje se kao „ili od … €/mj”" },
      { k: "gorivo", l: "Gorivo", t: "select", o: ["Dizel", "Benzin", "Hibrid", "Električni"] },
      { k: "mjenjac", l: "Mjenjač", t: "select", o: ["Ručni", "Automatski", ""] },
      { k: "karoserija", l: "Karoserija", t: "select", o: ["SUV", "Hatchback", "Limuzina", "Karavan", "Gradski", "Monovolumen", "Kombi", "Coupe"] },
      { k: "lokacija", l: "Lokacija", t: "select", o: ["Plano", "Divulje"] },
      { k: "oznake", l: "Oznake", t: "tags", w: "w3", o: ["jamstvo", "tvorničko jamstvo", "zimske gume gratis", "kao novo", "popust"] },
      { k: "njuskalo", l: "Poveznica na oglas (Njuškalo)", t: "url", w: "w3", h: "Gumb „Sve slike” na stranici vozila vodi na ovaj oglas" },
      { k: "slika", l: "Naslovna fotografija", t: "image", w: "w3" }
    ],
    prepare: function (v, list, slugify, idx) {
      if (!v.id) v.id = Math.max(0, ...list.map(function (x) { return x.id || 0; })) + 1;
      var base = slugify(v.naziv) + "-" + v.godina, s = base, n = 2;
      while (list.some(function (x, i) { return x.slug === s && i !== idx; })) s = base + "-" + n++;
      v.slug = s;
    }
  },
  v: 1
};
