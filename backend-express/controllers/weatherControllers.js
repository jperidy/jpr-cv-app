const asyncHandler = require('express-async-handler');
const { db } = require('../config/firebase');
const dateformat = require('dateformat');
const fetch = require('node-fetch');

const transformWeatherData = (weather) => {
    return weather.list.map((item, index) => {
        const data = {};
        const date = new Date(item.dt * 1000);
        const iconUrl = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;

        data.date = dateformat(date, "mmm dS, yyyy, h TT");
        data.id = index;
        data.iconUrl = iconUrl;
        data.desc = item.weather[0].description;
        data.temp = item.main.temp;
        data.min = item.main.temp_min;
        data.max = item.main.temp_max;

        return data;
    });
};

// @desc    get weather of a city
// @route   GET /api/wheather
// @access  Public
const getWeather = asyncHandler(async (req, res) => {

    try {

        // const params = {
		// 	q: city,
		// 	units: 'metric',
		// };
        const params = req.query;

		const queryString = new URLSearchParams({
			...params,
			appid: process.env.WEATHER_API_KEY,
		});

        const baseURL = process.env.WEATHER_BASE_URL;

		const url = `${baseURL}?${queryString}`; 

        const city = params.q;

		if(city?.length) {
		
            try {
				const result = await fetch(url);
                //console.log('result', result);

				if (result.ok) {
					try {
						const weather = await result.json(); 
						const items = transformWeatherData(weather);
						const cityFound = city;

                        res.status(200).json({
                            message: 'city found',
                            items: items,
                            cityFound: cityFound
                        });
                        return;

					} catch (error) {
						console.log(error);
                        res.status(500).json({message: error});
                        return;
					}
				} else {
                    res.status(404).json({message: 'city not found'});
                    return;
                }

			} catch (error) {
				console.log(error);
                res.status(500).json({message: error});
                return;
			}
		}	


        let notes = [];

        const querySnapshotHomeContent = await db.collection('notes').orderBy('title').get();

        if (querySnapshotHomeContent) {
            querySnapshotHomeContent.forEach((doc) => {
                notes = [...notes, { id: doc.id, ...doc.data() }];
            });
        }

        res.status(200).json({
            body: notes,
        });

    } catch (error) {

        res.status(500).json({ message: error });

    }

});

module.exports = { getWeather }