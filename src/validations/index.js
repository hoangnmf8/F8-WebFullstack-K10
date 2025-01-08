export const validBodyRequest = (schemaValid) => (req, res, next) => {
	console.log(req.body);
	const data = schemaValid.parse(req.body);
	console.log(`data valid: ${data}`);
	// logic valid xong

	// if (err) {
	// 	const errors = err.errors.map((item) => `${item.path}: ${item.message}`);
	// 	res.status(400).json({ errors });
	// }
	next();
};
