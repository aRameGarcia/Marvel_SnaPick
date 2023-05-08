import db from "../config/database.js";

export const getUser = (result) => {
    db.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}