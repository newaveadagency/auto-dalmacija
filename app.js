/* Auto Dalmacija – zajednička skripta */
(function () {
  "use strict";
  var V = window.VOZILA || [];
  var TEL = "+38521381457", MOB = "+385995296793", MAIL = "prodaja@autodalmacija.hr";

  /* ---------- ikone ---------- */
  var P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    ok: '<circle cx="12" cy="12" r="9.5"/><path d="m8 12.5 2.8 2.8L16.5 9.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    road: '<path d="M4 20 8 4M20 20 16 4M12 6v2M12 11v2M12 16v2"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    fuel: '<path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M4 10h11M15 8l3 3v6a1.5 1.5 0 0 0 3 0V9l-3-3"/>',
    gear: '<circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v8M12 8v8M18 8v4H6"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    check: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    euro: '<path d="M17 6.5A7 7 0 1 0 17 17.5M4 10h9M4 14h9"/>',
    swap: '<path d="M7 7h13l-4-4M17 17H4l4 4"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
    tire: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v5M12 16v5M3 12h5M16 12h5"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    paint: '<rect x="3" y="3" width="14" height="6" rx="1.5"/><path d="M17 6h3v5h-8v3M10 14h4v7h-4z"/>',
    doc: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    car: '<path d="M5 17h14M3 13l2-6a2 2 0 0 1 2-1.4h10A2 2 0 0 1 19 7l2 6v4a1 1 0 0 1-1 1h-1M4 18H3a1 1 0 0 1-1-1v-4h20"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
  };
  var sprite = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">';
  for (var k in P) sprite += '<symbol id="' + k + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + P[k] + "</symbol>";
  if (!document.getElementById("arrow")) document.body.insertAdjacentHTML("afterbegin", sprite + "</svg>");
  function ic(n, c) { return '<svg class="i' + (c ? " " + c : "") + '"><use href="#' + n + '"/></svg>'; }
  window.AD = { ic: ic };

  /* ---------- pomoćne ---------- */
  var nf = new Intl.NumberFormat("hr-HR");
  function eur(n) { return nf.format(Math.round(n)) + " €"; }
  function eur2(n) { return n.toLocaleString("hr-HR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €"; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function params() { var o = {}; new URLSearchParams(location.search).forEach(function (v, k) { o[k] = v; }); return o; }

  /* ---------- otvoreno sada ---------- */
  $$("[data-open]").forEach(function (el) {
    var d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
    var open = (day >= 1 && day <= 5 && h >= 8 && h < 19) || (day === 6 && h >= 8 && h < 13);
    el.innerHTML = open ? "<b>Otvoreno</b> · do " + (day === 6 ? "13" : "19") + " h" : '<b class="cl">Zatvoreno</b> · ' + (day === 6 && h >= 13 || day === 0 ? "pon 8 h" : h < 8 ? "danas od 8 h" : "sutra od 8 h");
  });

  /* ---------- izbornik ---------- */
  var burger = $(".burger");
  if (burger) burger.addEventListener("click", function () {
    var m = $(".menu"); m.classList.toggle("open"); burger.setAttribute("aria-expanded", m.classList.contains("open"));
  });
  $$(".menu a").forEach(function (a) { a.addEventListener("click", function () { $(".menu").classList.remove("open"); }); });

  /* ---------- kartica vozila ---------- */
  function badges(c) {
    var b = [];
    if (c.stanje === "Novo") b.push('<span class="bdg novo">Novo</span>');
    if (c.stanje === "Testno") b.push('<span class="bdg test">Testno vozilo</span>');
    if (c.oznake.indexOf("tvorničko jamstvo") > -1) b.push('<span class="bdg jam">Tvorničko jamstvo</span>');
    else if (c.oznake.indexOf("jamstvo") > -1) b.push('<span class="bdg jam">Jamstvo</span>');
    if (c.oznake.indexOf("zimske gume gratis") > -1) b.push('<span class="bdg">Zimske gume gratis</span>');
    return b.join("");
  }
  function card(c) {
    var km = c.stanje === "Novo" ? "0 km" : nf.format(c.km) + " km";
    return '<a class="car rv" href="vozilo.html?v=' + c.slug + '">' +
      '<div class="ph"><img src="' + c.slika + '" alt="' + esc(c.naziv) + '" loading="lazy" width="1000" height="751"><div class="badges">' + badges(c) + "</div></div>" +
      '<div class="bd"><h3>' + esc(c.marka + " " + c.model) + '</h3><div class="sub">' + esc(c.naziv.replace(/^\S+\s+\S+\s*/, "")) + "</div>" +
      '<div class="specs"><span>' + ic("cal") + c.godina + "</span><span>" + ic("road") + km + "</span><span>" + ic("fuel") + c.gorivo + "</span>" + (c.mjenjac ? "<span>" + ic("gear") + c.mjenjac + "</span>" : "") + "</div>" +
      '<div class="ft"><div><div class="price">' + eur(c.cijena) + '</div><div class="rate">ili od <b>' + eur2(c.rata) + "</b>/mj</div></div>" +
      '<span class="go">' + ic("arrow") + "</span></div></div></a>";
  }
  window.AD.card = card;

  /* ---------- otkrivanje pri skrolanju ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function reveal(root) { $$(".rv:not(.in)", root).forEach(function (el) { io ? io.observe(el) : el.classList.add("in"); }); }
  window.AD.reveal = reveal;

  /* ---------- tražilica (naslovnica) ---------- */
  var qf = $("#finder");
  if (qf) {
    var marke = {}; V.forEach(function (c) { marke[c.marka] = (marke[c.marka] || 0) + 1; });
    Object.keys(marke).sort().forEach(function (m) { qf.marka.insertAdjacentHTML("beforeend", '<option value="' + m + '">' + m + " (" + marke[m] + ")</option>"); });
    [10000, 15000, 20000, 25000, 30000, 35000].forEach(function (p) { qf.cijena_do.insertAdjacentHTML("beforeend", '<option value="' + p + '">do ' + eur(p) + "</option>"); });
  }

  /* ---------- naslovnica: istaknuta ---------- */
  var home = $("#home-grid");
  if (home) {
    var pick = V.filter(function (c) { return c.stanje !== "Novo"; }).sort(function (a, b) { return b.id === 1 ? 1 : b.godina - a.godina; }).slice(0, 6);
    home.innerHTML = pick.map(card).join("");
    $$("[data-count]").forEach(function (el) { el.textContent = V.length; });
  }

  /* ---------- PONUDA ---------- */
  var pg = $("#plist-grid");
  if (pg) {
    var f = $("#filters"), st = params();
    var opts = function (key) { var o = {}; V.forEach(function (c) { if (c[key]) o[c[key]] = (o[c[key]] || 0) + 1; }); return o; };
    var fill = function (sel, key) { var o = opts(key); Object.keys(o).sort().forEach(function (v) { sel.insertAdjacentHTML("beforeend", '<option value="' + v + '">' + v + " (" + o[v] + ")</option>"); }); };
    fill(f.marka, "marka"); fill(f.karoserija, "karoserija"); fill(f.gorivo, "gorivo");
    ["marka", "karoserija", "gorivo", "mjenjac", "cijena_do", "stanje"].forEach(function (k) { if (st[k] && f[k]) f[k].value = st[k]; });
    if (st.sort) $("#sort").value = st.sort;
    var stanjeBtns = $$("#stanje .pill");
    stanjeBtns.forEach(function (b) {
      if ((st.stanje || "") === b.dataset.v) { stanjeBtns.forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); }
      b.addEventListener("click", function () { stanjeBtns.forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); f.stanje.value = b.dataset.v; run(); });
    });
    var run = function () {
      var q = { marka: f.marka.value, karoserija: f.karoserija.value, gorivo: f.gorivo.value, mjenjac: f.mjenjac.value, cijena_do: f.cijena_do.value, stanje: f.stanje.value, sort: $("#sort").value };
      var list = V.filter(function (c) {
        return (!q.marka || c.marka === q.marka) && (!q.karoserija || c.karoserija === q.karoserija) && (!q.gorivo || c.gorivo === q.gorivo) &&
          (!q.mjenjac || c.mjenjac === q.mjenjac) && (!q.cijena_do || c.cijena <= +q.cijena_do) && (!q.stanje || c.stanje === q.stanje);
      });
      var s = { cijena_asc: function (a, b) { return a.cijena - b.cijena; }, cijena_desc: function (a, b) { return b.cijena - a.cijena; }, km: function (a, b) { return a.km - b.km; }, godina: function (a, b) { return b.godina - a.godina; } }[q.sort];
      if (s) list.sort(s);
      pg.innerHTML = list.length ? list.map(card).join("") : '<div class="empty"><b>Nema vozila za odabrane kriterije.</b><br>Promijenite filtere ili nas nazovite, pronaći ćemo vozilo za vas.<br><br><button class="btn btn-line" type="button" id="reset2">Poništi filtere</button></div>';
      $("#count").textContent = list.length + (list.length === 1 ? " vozilo" : list.length < 5 && list.length > 1 ? " vozila" : " vozila");
      var u = new URLSearchParams(); for (var k in q) if (q[k]) u.set(k, q[k]);
      history.replaceState(null, "", location.pathname + (u.toString() ? "?" + u : ""));
      reveal(pg);
      var r2 = $("#reset2"); if (r2) r2.addEventListener("click", reset);
    };
    var reset = function () { f.reset(); f.stanje.value = ""; stanjeBtns.forEach(function (x, i) { x.classList.toggle("on", i === 0); }); run(); };
    f.addEventListener("change", run);
    f.addEventListener("submit", function (e) { e.preventDefault(); f.classList.remove("open"); });
    $("#sort").addEventListener("change", run);
    $("#reset").addEventListener("click", reset);
    $$(".fbtn,.fclose").forEach(function (b) { b.addEventListener("click", function () { f.classList.toggle("open"); }); });
    run();
  }

  /* ---------- VOZILO ---------- */
  var vd = $("#vozilo");
  if (vd) {
    var slug = params().v, c = V.filter(function (x) { return x.slug === slug; })[0];
    if (!c) { location.replace("ponuda.html"); return; }
    document.title = c.naziv + " (" + c.godina + ") – " + eur(c.cijena) + " | Auto Dalmacija";
    $$("[data-v]").forEach(function (el) {
      var k = el.dataset.v;
      var val = { naziv: c.naziv, cijena: eur(c.cijena), rata: eur2(c.rata), km: c.stanje === "Novo" ? "0 km" : nf.format(c.km) + " km", godina: c.godina, gorivo: c.gorivo, mjenjac: c.mjenjac || "Upitajte nas", karoserija: c.karoserija, stanje: c.stanje === "Rabljeno" ? "Rabljeno" : c.stanje === "Testno" ? "Testno vozilo" : "Novo vozilo", lokacija: c.lokacija === "Divulje" ? "Divulje (Trogir)" : "Plano (Trogir)", marka: c.marka + " " + c.model }[k];
      if (val !== undefined) el.textContent = val;
    });
    var img = $("#vimg"); img.src = c.slika; img.alt = c.naziv;
    $("#vbadges").innerHTML = badges(c);
    $("#vnj").href = c.njuskalo;
    var perks = ["Provjereno od strane našeg servisa", "Jamčena originalna kilometraža", "Mogućnost probne vožnje", "Financiranje i leasing", "Staro vozilo uzimamo u zamjenu", "Bez skrivenih troškova – izložena cijena je cijena koju plaćate"];
    if (c.oznake.indexOf("tvorničko jamstvo") > -1) perks.unshift("Preostalo tvorničko jamstvo proizvođača");
    else if (c.oznake.indexOf("jamstvo") > -1) perks.unshift("Vozilo se prodaje s jamstvom");
    if (c.oznake.indexOf("zimske gume gratis") > -1) perks.unshift("Zimske gume na poklon");
    $("#vperks").innerHTML = perks.map(function (p) { return "<li>" + ic("ok") + p + "</li>"; }).join("");
    var msg = $("#poruka"); if (msg) msg.value = "Pozdrav, zanima me " + c.naziv + " (" + c.godina + ", " + eur(c.cijena) + "). Je li vozilo još dostupno?";
    var cv = $("#vrijednost"); if (cv) cv.value = c.cijena;
    var sim = V.filter(function (x) { return x.id !== c.id && (x.karoserija === c.karoserija || x.marka === c.marka); }).sort(function (a, b) { return Math.abs(a.cijena - c.cijena) - Math.abs(b.cijena - c.cijena); }).slice(0, 3);
    $("#slicna").innerHTML = sim.map(card).join("");
    var ld = { "@context": "https://schema.org", "@type": "Car", name: c.naziv, brand: { "@type": "Brand", name: c.marka }, model: c.model, vehicleModelDate: String(c.godina), mileageFromOdometer: { "@type": "QuantitativeValue", value: c.km, unitCode: "KMT" }, fuelType: c.gorivo, image: location.origin + "/" + c.slika, offers: { "@type": "Offer", price: c.cijena, priceCurrency: "EUR", availability: "https://schema.org/InStock", seller: { "@type": "AutoDealer", name: "Auto Dalmacija d.o.o." } } };
    document.head.insertAdjacentHTML("beforeend", '<script type="application/ld+json">' + JSON.stringify(ld) + "<\/script>");
  }

  /* ---------- kalkulator leasinga ---------- */
  var calc = $("#calc");
  if (calc) {
    var KAMATA = 6.5, uc = 20, mj = $("#vozilo") ? 84 : 60;
    var segs = function (el, vals, cur, fmt, set) {
      el.innerHTML = vals.map(function (v) { return '<button type="button" class="' + (v === cur ? "on" : "") + '" data-v="' + v + '">' + fmt(v) + "</button>"; }).join("");
      $$("button", el).forEach(function (b) { b.addEventListener("click", function () { $$("button", el).forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); set(+b.dataset.v); upd(); }); });
    };
    segs($("#ucesce"), [0, 10, 20, 30, 40], uc, function (v) { return v + " %"; }, function (v) { uc = v; });
    segs($("#trajanje"), [24, 36, 48, 60, 84], mj, function (v) { return v; }, function (v) { mj = v; });
    var upd = function () {
      var val = Math.max(0, +$("#vrijednost").value || 0), u = val * uc / 100, fin = val - u, r = KAMATA / 100 / 12;
      var rata = fin > 0 ? fin * r / (1 - Math.pow(1 + r, -mj)) : 0;
      $("#rata").textContent = eur2(rata);
      $("#rUc").textContent = eur(u); $("#rFin").textContent = eur(fin); $("#rN").textContent = mj + " mj";
    };
    $("#vrijednost").addEventListener("input", upd);
    upd();
  }

  /* ---------- obrasci upita ---------- */
  $$("form.upit").forEach(function (fm) {
    fm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!fm.checkValidity()) { fm.reportValidity(); return; }
      var d = new FormData(fm), body = [];
      d.forEach(function (v, k) { if (k !== "privola" && v) body.push(k.charAt(0).toUpperCase() + k.slice(1) + ": " + v); });
      var subj = (d.get("tema") || "Upit s web stranice") + (d.get("ime") ? " – " + d.get("ime") : "");
      location.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body.join("\n") + "\n\nPoslano sa stranice autodalmacija.hr");
      var ok = $(".ok", fm); if (ok) ok.style.display = "block";
    });
  });

  reveal(document);
})();
