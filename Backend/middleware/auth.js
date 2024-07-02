import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "abcd", (err) => {
            if (err) return res.sendStatus(403);
            next();
        });

    } else {
        res.sendStatus(401);
    }
}