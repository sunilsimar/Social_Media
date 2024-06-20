import jwt from "jsonwebtoken";

const jwtSecret = "HDHIKDJDNHD23Y787373"
const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, jwtSecret, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		httpOnly: true, // more secure
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
		sameSite: "strict", // CSRF
	});

	return token;
};

export default generateTokenAndSetCookie;
