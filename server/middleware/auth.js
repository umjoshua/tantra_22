import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
    const endpoint = req.url.substring(req.url.lastIndexOf('/') + 1);
    let role = null;
    switch (endpoint) {
        case "responses":
            role = "sadmin";
            break;
        case "csresponses":
            role = "csadmin";
            break;
        case "adsresponses":
            role = "adsadmin";
            break;
        case "eeeresponses":
            role = "eeeadmin";
            break;
        case "eceresponses":
            role = "eceadmin";
            break;
        case "aeiresponses":
            role = "aeiadmin";
            break;
        case "ceresponses":
            role = "ceadmin";
            break;
        case "ashresponses":
            role = "ashadmin";
            break;
        case "commresponses":
            role = "commadmin";
            break;
    }

    function parseJwt(token) {
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    }

    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'Authorization denied' });
    }

    try {
        const userRole = parseJwt(token); //jwt role

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({ msg: 'Invalid token' });

            }
            else if (userRole.role != role) {
                return res.status(401).json({ msg: 'Nice try! Better luck next time.' });
            }
            else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
        res.status(401).json({ msg: 'Nice try! Better luck next time.' });
    }
}


