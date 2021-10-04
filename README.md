# Weather-Dashboard

![](https://github.com/seddboi/Fitness-Tracker/blob/main/public/gif/Fitness%20Tracker.gif)

# Introduction
Welcome to Weathered!
This application is a simple web-based application that takes in a city and spit out weather data! From the current temperature to projected forecasts, Weathered is easy to use and easier to read! 

# Development

This application focuses primarily on the use of Local Storage directly in your browser:
1. Primarily, we are ustilizing the information passed from the OpenWeatherMap API. A simple search allows us to route that entered information directly to the api to provide a response giving us local temperatures. 
2. To save on room, we created an avaerage temperature based on the passed in high and low projected temperatures per day of the forecast, so there would be a general knowing of what temperature to expect. The rest of the items, such as the display icon, 'feels like' temperature, and the description, were all pulled from the response given from OpenWeatherMap.
3. We mainly utlized jquery to navigate our variables for simpler targeting to grab/send information to and from the API. 
4. We also utilized Moment.js, which allowed us to grabe the current date and  grab the projections for the next five following dates.

# How to Install (if necesary to run on a local device)

This application has a few simple steps:
1. Simply, load the site on any web browser (IE may have limited front-end support :( )
2. Enjoy!

3. I am currently working on service worker for downloadable offline features!

Live Link: https://seddboi.github.io/Weather-Dashboard/

# License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2021 Gian P Zamora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Want to Help Me Out?

Any Tips, Questions, Concerns, or Comments, you can reach me at zmr.gian@gmail.com


Thanks for Visiting! :)
