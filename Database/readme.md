## Database: Doctors Portal

- `npm i express cors dotenv mongodb jsonwebtoken`

### API Naming Convention

- app.get('/booking') // get all bookings in this collection. or get more than one or by filter
- app.get('/booking/:id') // get a specific booking
- app.post('/booking') // add a new booking
- app.patch('/booking/:id') //
- app.put('/booking/:id') // upsert ==> update(if exists) or insert (if doesn't exist)
- app.delete('/booking/:id') //
