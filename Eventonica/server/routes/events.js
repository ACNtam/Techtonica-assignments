import db from "../db/db-connection.js";
import express from "express";

const router = express.Router();

/* GET events listing. */

router.get('/', async function (req, res, next) {

  try {
    const events = await db.any('SELECT * FROM events', [true]);
    res.send(events);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* post request goes here */
/* Add events listing. */
router.post('/', async (req, res) => {
    const events = {
      name: req.body.name,
      description: req.body.description
    };
    console.log(events);
    try {
      const createdevents = await db.one(
        'INSERT INTO events(name, email) VALUES($1, $2) RETURNING *',
        [events.name, events.description]
      );
      console.log(createdevents);
      res.send(createdevents);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

/* delete request goes here  */
/* Delete events listing. */

//Parameterized queries use placeholders instead of directly writing the
//values into the statements. Parameterized queries increase security and performance.

router.delete('/:id', async (req, res) => {
    // : acts as a placeholder
    const eventId = req.params.id;
    try {
      await db.none('DELETE FROM events WHERE id=$1', [eventsId]);
      res.send({ status: 'success' });
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

export default router;