
## NES Boilerplate

NodeJS + Express + Sequelize
- Model
- Migration
- Seeder
- Image Upload (Multer)

### Requirements

- NPM with NodeJS (or Nginx server) installed
- PostgreSQL installed

### Demo Test:

- Run following commands
```
git clone https://github.com/boolfalse/nes-boilerplate.git
cd nes-boilerplate/
npm i
```
- Create empty DB

- Create .env file inside of your project root folder, and define required variables as described in .env.example

- Run migrations and seeds
```
sequelize db:migrate
sequelize db:seed:all
```

- Run the app (dev)
```
npm start
```
