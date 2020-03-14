const fs = require('fs');

fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\nWEATHER_API=${process.env.WEATHER_API}\n`);