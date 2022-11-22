import EventDetails from '../Models/eventDetails.js';

export const getEvents = async (req, res) => {
    try {
        const eventDetails = await EventDetails.find();
        res.status(200).json(eventDetails);
    }
    catch (error) {
        console.log(error);
    }
}