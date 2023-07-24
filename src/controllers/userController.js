const db = require("./../models/index");

const handleLogin = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    console.log({ email, password });
    try {
        const user = await db.User.findOne({
            where: {
                email: email,
                password: password,
            },
        });
        if (user) {
            return res.status(200).json({
                user,
            });
        } else
            return res.status(500).json({
                message: "Wrong email or password",
            });
    } catch (error) {
        console.log({ error });
        return res.status(500).json({
            message: "Error",
        });
    }
};

const handleSignUp = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.User.findOne({
            where: {
                email: email,
            },
        });
        if (user) {
            return res.status(500).json({
                message: "Email existed",
            });
        }
        db.User.create({
            email,
            password,
        })
            .then((result) => {
                return res.status(200).json({
                    email,
                    password,
                });
            })
            .catch((error) => {
                return res.status(500).json({
                    message: "Error",
                });
            });
    } catch (error) {
        console.log({ error });
        return res.status(500).json({
            message: "Error",
        });
    }
    //handleSignUp
};

module.exports = { handleLogin, handleSignUp };
