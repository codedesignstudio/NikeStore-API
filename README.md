# NikeStore-API

API for our Nike Minimalist Fashion Apps
* [Admin App: Manage the Nike Store (Add, Edit, Remove Products)](https://github.com/codedesignstudio/NikeStore-Admin)
* [Client App - Explore the Nike Store](https://github.com/codedesignstudio/NikeStore-Client)

Built with the Open Source [Parse Server](https://github.com/ParsePlatform/parse-server)

# Documentation
* Excellent Documentation of all API endpoints are provided [here](https://nikeminimalist.herokuapp.com/docs/)

# Code - For Local Development
* Make sure you have at least Node 4.3. `node --version`
* Clone this repo and change directory to it.
* `npm install`
* Install mongo locally using http://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x/
* Run `mongo` to connect to your database, just to make sure it's working. Once you see a mongo prompt, exit with Control-D
* Run the server with: `npm start` or for instant updates on code change, use: `npm run dev`
* By default it will use a database called minimalist. Feel free to change this in `src/api/v1/index.js`
* You now have a database named "minimalist" that contains your data
* Visit `/docs` to view documentation for all endpoints
* Visit `/dashboard` to view all your data. Username: `nike`, Password: `minimalist`
