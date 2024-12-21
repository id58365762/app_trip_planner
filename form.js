import express from 'express';
import db from '../../database/db';
import axios from "axios/index";
import {Link} from "react-router-dom";
const router = express.Router();
router.post('/send', (req, res) => {
let user_id = req.user.id;
let trip = req.body;
let shoppingList = trip.tripShoppingList.map((sl) => {
return { sl_id: 0, ...sl } });
let packingList = trip.tripPackingList.map((pl) => {
return {pl_id: 0, ...pl } });
console.log(JSON.stringify(shoppingList).toString());
console.log(trip);
88
db.one('select trips_persistence(${id}, ${user_id}, ${date_from}::date,
${date_to}::date, ${place}, ${purpose}, ${shopping_list}, ${packing_list})',
{ id: Number(trip.tripId.id),
user_id: user_id,
date_from: trip.tripDates.dateFrom,
date_to: trip.tripDates.dateTo,
place: trip.tripPlace.place.label,
purpose: trip.tripPurpose.purpose.label,
shopping_list: JSON.stringify(shoppingList).toString(),
packing_list: JSON.stringify(packingList).toString(),
}
)
.then((operation) => { console.log(operation); res.json({w: 'ww'}); })
.catch(error => {
console.log(error);
res.json({ error: { msg: 'error' } });
});
console.log('end');
});
router.post('/delete', (req, res) => {
db.result('select trips_persistence(${id})',//${id}
{ id: req.query.trip_id, )
.then((result) => { console.log(result); res.json({w: 'ww'}); })
.catch(error => {
console.log(error);
res.json({ error: { msg: 'error' } });
});
});
router.get('/get_trips_summary', (req, res) => {
let user_id = req.user.id;
db.any('SELECT id, date_from, date_to, get_place_name(place_id) as place,
get_purpose_name(purpose_id) as purpose FROM\n' +
'trips WHERE user_id = ${user_id} AND parent_id isnull',
{ user_id: user_id, }
)
.then((trips) => { res.json({trips});})
.catch(error => {
console.log(error);
res.json({ error: { msg: 'error' } });
});
});
router.get('/get_current_trip', (req, res) => {
db.one('select * from trip_summary_json(${id})',
{ id: req.query.trip_id, }
)
.then((trip) => { res.json({trip}); })
.catch(err => { console.log(error); res.json({err:{ msg: 'error' } });
});
});
module.exports = router;