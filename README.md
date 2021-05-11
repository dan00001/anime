# AnimeThor

## Introducere
   AnimeThor este o aplicatie destinata fanilor de anime-uri si manga. Am ales acest domeniu fiind intr-o continua dezvoltare pe piata serialelor.
```bash
git clone https://github.com/dan00001/anime.git
```
## Descriere problema
   Aplicatia vine in ajutorul utilizatorului nehotarat ce anime sa mai vizioneze :) Acesta va avea un mic motor de cautare unde va gasi informatii relevante la doar cateva taste distanta. De asemenea, stiind ca domeniul este in plina dezvoltare si pe zi ce trece se lucreaza la noi anime-uri, aplicatia are si o parte de update care va permite utilizatorilor sai sa adauge un nou anime pe care l-a vizionat si pentru care poate oferi o scurta poveste prin care sa ii atraga si pe alti utilizatori sa vizioneze respectivul anime.
## Descriere API
### Jikan API
```bash
https://jikan.moe/
```
Importante de mentionat legat de acest API sunt urmatoarele aspecte:

- Rata limita: 30 requesturi/minut; 2 requesturi/secunda
- Tipurile de raspuns primite sunt:![image](https://user-images.githubusercontent.com/83885403/117859921-5376cd80-b298-11eb-99b9-d6a59ddc7378.png)
- 35 de inregistrari vor fi afisate pe o pagina
- Nu necesita autentificare
- Accepta HTTPS si CORS

## Flux de date
 ### Exemplu de response GET
 ```bash
 {
    "request_hash": "request:search:5019a2adcb8572ae559578cbffe5c5a596f1d00b",
    "request_cached": true,
    "request_cache_expiry": 395839,
    "results": [
        {
            "mal_id": 1535,
            "url": "https://myanimelist.net/anime/1535/Death_Note",
            "image_url": "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",
            "title": "Death Note",
            "airing": false,
            "synopsis": "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifesty...",
            "type": "TV",
            "episodes": 37,
            "score": 8.63,
            "start_date": "2006-10-04T00:00:00+00:00",
            "end_date": "2007-06-27T00:00:00+00:00",
            "members": 2815387,
            "rated": "R"
        },
        {
            "mal_id": 2994,
            "url": "https://myanimelist.net/anime/2994/Death_Note__Rewrite",
            "image_url": "https://cdn.myanimelist.net/images/anime/13/8518.jpg?s=5635b5da41555166832be5996b511f59",
            "title": "Death Note: Rewrite",
            "airing": false,
            "synopsis": "1. Genshisuru Kami (Visions of a God) A two hour episode of Death Note, mainly a compilation of the confrontations between Light and L, re-edited from Ryuk's perspective with new dialogue and soundtra...",
            "type": "Special",
            "episodes": 2,
            "score": 7.7,
            "start_date": "2007-08-31T00:00:00+00:00",
            "end_date": "2008-08-22T00:00:00+00:00",
            "members": 161082,
            "rated": "R"
        },
        {
            "mal_id": 28223,
            "url": "https://myanimelist.net/anime/28223/Death_Parade",
            "image_url": "https://cdn.myanimelist.net/images/anime/5/71553.jpg?s=68833377dab9077cd7847c91eec46f08",
            "title": "Death Parade",
            "airing": false,
            "synopsis": "After death, there is no heaven or hell, only a bar that stands between reincarnation and oblivion. There the attendant will, one after another, challenge pairs of the recently deceased to a random ga...",
            "type": "TV",
            "episodes": 12,
            "score": 8.19,
            "start_date": "2015-01-10T00:00:00+00:00",
            "end_date": "2015-03-28T00:00:00+00:00",
            "members": 1307208,
            "rated": "R"
        },
        {
            "mal_id": 35994,
            "url": "https://myanimelist.net/anime/35994/Satsuriku_no_Tenshi",
            "image_url": "https://cdn.myanimelist.net/images/anime/1862/95624.jpg?s=1d12124c9601cf3a750386d62ab55f35",
            "title": "Satsuriku no Tenshi",
            "airing": false,
            "synopsis": "With dead and lifeless eyes, Rachel Gardner wishes only to die. Waking up in the basement of a building, she has no idea how or why she's there. She stumbles across a bandaged murderer named Zack, who...",
            "type": "TV",
            "episodes": 16,
            "score": 6.89,
            "start_date": "2018-07-06T00:00:00+00:00",
            "end_date": "2018-10-26T00:00:00+00:00",
            "members": 426239,
            "rated": "R"
        },
        {
            "mal_id": 789,
            "url": "https://myanimelist.net/anime/789/Shinigami_no_Ballad",
            "image_url": "https://cdn.myanimelist.net/images/anime/5/16086.jpg?s=d05c89207270b9fe18398fd2f0e9004d",
            "title": "Shinigami no Ballad.",
            "airing": false,
            "synopsis": "A girl wrapped in white, her name is Momo...in her hand lies a blunt yet shiny scythe. By her side is a winged black cat by the name of Daniel. Carrying the souls of humans, the girl's existence paral...",
            "type": "TV",
            "episodes": 6,
            "score": 6.92,
            "start_date": "2006-03-03T00:00:00+00:00",
            "end_date": "2006-04-07T00:00:00+00:00",
            "members": 41952,
            "rated": "PG-13"
        },
        {
            "mal_id": 47257,
            "url": "https://myanimelist.net/anime/47257/Shinigami_Bocchan_to_Kuro_Maid",
            "image_url": "https://cdn.myanimelist.net/images/anime/1915/111490.jpg?s=b33d92badc184d8ca4e317bb41f4d794",
            "title": "Shinigami Bocchan to Kuro Maid",
            "airing": true,
            "synopsis": "Cursed by a witch as a child, a young duke gained the unwanted power to kill every living thing he touches. Forced to move away from his family and into a large mansion deep in the woods, the duke is...",
            "type": "TV",
            "episodes": 0,
            "score": 0,
            "start_date": "2021-07-01T00:00:00+00:00",
            "end_date": null,
            "members": 8818,
            "rated": null
        },
        {
            "mal_id": 14353,
            "url": "https://myanimelist.net/anime/14353/Death_Billiards",
            "image_url": "https://cdn.myanimelist.net/images/anime/11/48721.jpg?s=4728f1efeabefb313634e64ac91f514b",
            "title": "Death Billiards",
            "airing": false,
            "synopsis": "Two men have just arrived at a location known as Quindecim and are unable to remember how they got there. They are immediately greeted by a young woman who escorts them to a small bar, where a bartend...",
            "type": "Movie",
            "episodes": 1,
            "score": 7.92,
            "start_date": "2013-03-02T00:00:00+00:00",
            "end_date": "2013-03-02T00:00:00+00:00",
            "members": 200112,
            "rated": "R"
        },
        {
            "mal_id": 1286,
            "url": "https://myanimelist.net/anime/1286/MD_Geist_II__Death_Force",
            "image_url": "https://cdn.myanimelist.net/images/anime/1351/96371.jpg?s=3cb6d260d5bec9273b52ac0644a42ac6",
            "title": "MD Geist II: Death Force",
            "airing": false,
            "synopsis": "After unleashing the Death Force machines all over the planet Jerra, Geist has kept himself busy by dismantling them one by one. But now he faces a formidable opponent in the form of Krauser, another...",
            "type": "OVA",
            "episodes": 1,
            "score": 5.03,
            "start_date": "1996-03-01T00:00:00+00:00",
            "end_date": "1996-03-01T00:00:00+00:00",
            "members": 6854,
            "rated": "R+"
        },
        {
            "mal_id": 7810,
            "url": "https://myanimelist.net/anime/7810/Yami_wo_Mitsumeru_Hane",
            "image_url": "https://cdn.myanimelist.net/images/anime/9/18949.jpg?s=d3c8b875189cfed2d765a653846fbd0e",
            "title": "Yami wo Mitsumeru Hane",
            "airing": false,
            "synopsis": "A story set in a world before ours. A world in chaos where forces of good and evil fight and mingle. By doing so, it creates the chance to give birth to the new world. A couple of winged beings make l...",
            "type": "Movie",
            "episodes": 1,
            "score": 5.06,
            "start_date": "2003-01-01T00:00:00+00:00",
            "end_date": "2003-01-01T00:00:00+00:00",
            "members": 1053,
            "rated": "R+"
        }
    ],
    "last_page": 20
}
```
### Metode HTTP
Navigarea in directorul frontend
```bash 
cd backend
```
Instalarea modulelor npm
```bash
npm install
```
Pornirea aplicatiei backend
```bash
node server.js
```
Pornirea aplicatiei de React
```bash
npm start
```
![image](https://user-images.githubusercontent.com/83885403/117858159-422cc180-b296-11eb-91c5-9ebf8de5920a.png)
