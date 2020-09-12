# Brainly Scraper
A promise based package to retrieve data from brainly using provided keyword

**Note:** This package is intended for personal use, might be buggy.

## Installation
```sh
npm i brainly-scraper-ts # npm
pnpm i brainly-scraper-ts # pnpm
yarn add brainly-scraper-ts # yarn
```

## Usage
```javascript
import Brainly from "brainly-scraper-ts" // esm
const Brainly = require("brainly-scraper-ts") // cjs

Brainly.getData("kenapa manusia bernafas?").then(res => console.log(res))
```

You can also define the max amount of data that you want to get by giving the second parameter a number like this. Default to 10.

```javascript
Brainly.getData("kenapa manusia bernafas?", 2).then(res => console.log(res))
```

## Example Output
```json
{
  "status": "Success",
  "total": 5,
  "result": [
    {
      "question": "yak\nApakah arti bernapas?\nApa saja organ pernapasan\nmanusia?\nBagaimana proses\npernapasan pada manusia?\nProses pernapasan manusia\nPernapasan Manusia\nPenyebab penyakit pernapasan\nmanusia dan pencegahannya\nMacam-macam penyakit pernapasan\nmanusia dan cara mengobatinya\nApa saja penyakit\npernapasan\nmanusia?\nBagaimana cara\nmencegahnya?\nApa saja penyebab\npenyakit pada\npernapasan\nmanusia?\nBagaimana cara\nmengobatinya?​",
      "attachments": [],
      "answers": [
        {
          "text": "Jawaban:bernapas artinya menghirup udara yg ada di sekitar kitahidung,tenggorokan,paru-paru,DLLmanusia menghirup udara dari hidung,llalu masuk ke batang tenggorokan,lalumasuk ke paru-paru.Penjelasan:maaf segitu aj habisnya soalnya gk jelas/gaje.trs maaf jawabannya ngasal dan salah",
          "attachments": []
        }
      ]
    },
    {
      "question": "penyakit yang mengganggu organ pernapasan. Informasi tersebut dapat kamu sajikan\ndalam bentuk peta pikiran seperti berikut.\nApakah arti bernapas?\nApa saja organ pernapasan\nmanusia?\nBagaimana proses\npernapasan pada manusia?\nProses pernapasan manusia\nPernapasan Manusia\nPenyebab penyakit pernapasan\nmanusia dan pencegahannya\nMacam-macam penyakit pernapasan\nmanusia dan cara mengobatinya\nApa saja penyebab\npenyakit pada\npernapasan\nmanusia?\nBagaimana cara\nmencegahnya?\nApa saja penyakit\npernapasan\nmanusia?\nBagaimana cara\nmengobatinya?\n117​",
      "attachments": [],
      "answers": [
        {
          "text": "1.) Pernapasan (atau ventilasi) adalah proses menggerakkan udara masuk dan keluar dari paru-paru untuk memfasilitasi pertukaran gas dengan lingkungan internal tubuh, terutama dengan memasukkan oksigen dan membuang karbon dioksida.2.) Hidung, sinus, adenoid, tonsil, faring, epiglotis, laring, trakea, tulang rusuk, paru-paru, pleura, bronkiolus, alveoli, tabung bronkial, diafragma3.) proses Pernapasan meliputi 2 proses yaitu, menarik (inspirasi) dan mengeluarkan (ekspirasi). Sewaktu menarik napas, otot diafragma berkontraksi, dari posisi mlengkung keatas menjadi lurus. Bersamaan dengan itu, otot rusuk juga berkontraksi, akibatnya rongga dada mengembang 4.) a.) Faringitis: Faringitis ini disebabkan oleh infeksi akibat bakteri ataupun virus. Peradangan yang terjadi dapat juga diakibatkan karena terlalu banyak merokok yang ditandai dengan rasa sakit ketika menelan. Cara pencegahannya: Untuk mengatasi terjadinya faringitis adalah dengan menggunakan antibiotik (apabila diakibatkan oleh bakteri), memakan buah-buahan, serta mengkonsumsi vitamin.b.) Asbestosis: Umumnya penyakit ini seringkali diderita oleh orang-orang yang bekerja di industri pertambangan, konstruksi bangunan, serta industri asbes. Cara pencegahannya: Untuk mengatasi penyakit asbestosis ini adalah dengan cara membuang dahak atau lendir dari paru-paru menggunakan obat semprot. Dalam beberapa kasus, untuk mengatasi asbestosis diperlukan pencangkokan paru-paru.c.) Influenza: Untuk gejala yang paling sering dialami penderita adalah pilek yang disertai dengan demam tinggi, nyeri otot, sakit tenggorokan, sakit kepala, mudah merasa lelah, dan batuk, yang mana gejala tersebut muncul setelah dua hari dari terserangnya virus.Penyakit influenza ini dapat menular karena menyebar melalui udara yaitu ketika penderita batuk maupun bersin.Cara pencegahannya: Untuk mengatasi terjadinya influenza yaitu dapat dilakukan dengan perbanyak istirahat, perbanyak minum air putih, tidak merokok, dan apabila diperlukan dapat meminum paracetamol sesuai dengan dosis. Tidak dianjurkan menggunakan antibiotik sebab influenza diakibatkan oleh virus bukan bakteri.d.) Asma: Suatu penyakit pada sistem pernapasan yang menyebabkan sesak napas yang ditandai dengan gangguan pada selaput pipa udara adalah asma. Asma disebabkan oleh alergi, udara yang terlalu lembab ataupun terlalu dingin, kebiasaan merokok, serta rasa sensitif terhadap debu.Cara pencegahannya: Untuk mengatasi penderita asma ketika kambuh dapat dilakukan dengan memberikan obat semprot maupun obat suntik yang mengandung epinefrin ataupun isoproterenol. Apabila tidak terdapat obat tersebut, penderita dapat diberikan minuman hangat serta menghirup uap air panas.e.) Emfisema: Emfisema merupakan penyakit yang ditandai oleh adanya kerusakan pada bagian alveolus paru-paru yang mengakibatkan penderita kekurangan oksigen sehingga penderita akan sulit bernapas, sesak napas, dan sering mengalami batuk. Cara pencegahannya: Untuk mengatasi penyakit emfisema dapat dilakukan dengan mengenakan inhaler, mengikuti latihan kardiovaskular, menghindari polusi, memberikan oksigen, dan yang lainnya.Maaf kalau salah :')         ",
          "attachments": []
        }
      ]
    },
    {
      "question": "Sebutkan 3 alat pernapasan manusia! 3. Sebutkan organ pernapasan manusia yang kalian ketahui! 4.. Jelaskan fase pernapasan pada manusia! 5. Jelaskan jenis pernapasan manusia! 6. Apa yang menyebabkan gangguan pernapasan pada manusia!",
      "attachments": [],
      "answers": [
        {
          "text": "Jawaban:2..hidung,mulut,perut3.usus halu,usus besar,tenggorokan,bronkus,bronkiolus,diafragma4.",
          "attachments": []
        }
      ]
    },
    {
      "question": "Sebutkan 3 alat pernapasan manusia! 3. Sebutkan organ pernapasan manusia yang kalian ketahui! 4.. Jelaskan fase pernapasan pada manusia! 5. Jelaskan jenis pernapasan manusia! 6. Apa yang menyebabkan gangguan pernapasan pada manusia!",
      "attachments": [],
      "answers": [
        {
          "text": "Jawaban:-Organ Pernapasan1.Hati2.Jantung3.Paru²Alat pernafasan1.Hidung2.Tracea3.BronkiolusFase pernapasan1.Masuk nya Oksigen 2.Keluarnya Oksigen yg kotorJenis pernapasan1.pernapasan lewat hidung2.pernapasan lewat MulutPenggangguan pernapasan1.Di sebabkan Adanya bakteri Halus masuk ke Hidung Terus di Salurkan ke Paru² jadi nya Sulit untuk bernapas",
          "attachments": []
        }
      ]
    },
    {
      "question": "manusia bernapas dan binatang bernapas",
      "attachments": [],
      "answers": [
        {
          "text": "amnusia bernapas dgn oksigen, binatang juga sama\n",
          "attachments": []
        },
        {
          "text": "manusia bernapas=paru-paru atau oksigen.. \n\nbinatang darat dengan paru-paru atau oksigen. \nbinatang laut dengan ingsan \n\nmaaf klo jawaban saya ada yg salah",
          "attachments": []
        }
      ]
    }
  ]
}
```

## License

MIT © [elianiva](https://elianiva.github.io)

