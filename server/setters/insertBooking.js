import Mongo from '../config/MongoConnection.js';

const insertBooking = async (booking) => {
  try {
    Mongo.db.collection('bookings').insertOne(booking);
    return true;
  } catch (err) {
    console.error('Error: ', err)
    return false;
  }
}
export { insertBooking };
