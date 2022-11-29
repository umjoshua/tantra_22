import { RegData } from '../Models/regData.js';

export const getResponses = async (req, res) => {

    const endpoint = req.url.substring(req.url.lastIndexOf('/') + 1);
    let dept = null;
    switch (endpoint) {
        case "responses":
            dept = "all";
            break;
        case "csresponses":
            dept = "cse";
            break;
        case "adsresponses":
            dept = "ads";
            break;
        case "eeeresponses":
            dept = "eee";
            break;
        case "eceresponses":
            dept = "ece";
            break;
        case "aeiresponses":
            dept = "aei";
            break;
        case "ceresponses":
            dept = "ce";
            break;
        case "ashresponses":
            dept = "ash";
            break;
        case "commresponses":
            dept = "comm";
            break;
    }

    try {
        let regDetails = null;
        dept == "all" ? regDetails = await RegData.find() : regDetails = await RegData.find({ department: dept });
        res.status(200).json(regDetails);

    }
    catch (error) {
        console.log(error);
    }
}

