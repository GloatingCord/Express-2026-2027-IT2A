const mysql = require("mysql2/promise");

async function createConnection() {
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "DB123",
		database: "users",
	});
}

module.exports = { createConnection };
