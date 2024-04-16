<br>
<h1 align="center">Latihan Adonis</h1>
<br>

## About latihan-adonis

<p>Dasar adonisJs untuk praktikum Mata Kuliah Proyek Perangkat Lunak Informatika USK.</p>

## Installation

1. clone the repository

```bash
git clone https://github.com/Akhyarrrrr/Latihan-Adonis-Yar.git
```
```bash
cd Latihan-Adonis-Yar
```

2. Install dependencies

```bash
npm install
```

3. migrate the table

Copy the contents of `.env.example` file to new `.env` file:

```sh
cp .env.example .env
```

or if error, run this

```sh
copy .env.example .env
```

Create an empty database and fill in the `DB_DATABASE`, `DB_USER`, and `DB_PSASWORD` fields in the `.env` file to match the credentials of your newly created database.

following the .env file, change `DB_DATABASE = latihan-adonis`, so make the empty database name is `latihan-adonis`

Run the migrations:

```sh
node ace migration:run
```

4. run serve with

```bash
node ace serve --watch
```
or
```bash
npm run dev
```
