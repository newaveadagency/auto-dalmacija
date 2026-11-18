# Auto Dalmacija – redizajn (demo za ponudu)

Postojeća stranica: http://ac-nova.com (Auto Dalmacija d.o.o., Cesta Plano 2A, Trogir)

## Što ne valja na staroj stranici
- Na vrhu svake stranice vidi se PHP greška („Warning: count()… header.tpl.php on line 14”)
- Nema HTTPS-a, pa preglednici stranicu označavaju kao „Nije sigurno”
- Sve kategorije pokazuju (0) vozila, a pretraga ne vraća ništa, iako na Njuškalu imaju 24 vozila
- Klizač cijene je još u kunama (60.900 – 369.900), a godišta u filteru idu samo do 2018.
- Na mobitelu se izbornik i tražilica prelijevaju izvan ekrana
- Na naslovnici je samo YouTube video i šest praznih kategorija; servis, jamstvo i financiranje nisu nigdje istaknuti

## Nova stranica
- `index.html`: naslovnica s tražilicom, izdvojenim vozilima, prednostima, servisom, kalkulatorom leasinga, čestim pitanjima i kontaktom
- `ponuda.html`: sva vozila s filterima (stanje, marka, karoserija, gorivo, mjenjač, cijena) i sortiranjem; filteri se spremaju u URL
- `vozilo.html?v=…`: oglas s podacima, pogodnostima, izračunom rate, upitom i sličnim vozilima
- 24 stvarna vozila s njihove Njuškalo trgovine (stanje 18.11.2026.) u `vozila.js`, fotografije u `img/vozila/`
- Bez vanjskih biblioteka; naslovnica bez fotografija ima ~108 KB (HTML, CSS, JS i font)
- SEO: schema.org AutoDealer, FAQPage i Car, meta opisi, lokalne ključne riječi (Trogir, Split)

## Uređivanje
- **Stranice i vozila:** `uredi.html` (vizualni uređivač, vidi `../_cms/README.md`). Spremanje se objavljuje automatski.
- HTML datoteke (`index.html`, `ponuda.html`, `vozilo.html`) su izvor; nema više generatora stranica.
- Lokalni pregled: `python3 -m http.server 8000`, zatim otvori http://localhost:8000 (uređivač: /uredi.html?demo)
- Obrazac za upit otvara e-mail program s pripremljenom porukom (statična stranica).
