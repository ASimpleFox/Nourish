## Inspiration
The pandemic confines us into our personal space, but it also provides new opportunities for health technology. It became easier to track one's nutrition intake since people's food choices become more limited and more controllable. We want to design an app that calculates and keeps track of users' nutrition intake when they input the food they had. We want to design an app that helps people live healthier at home, and with a healthier body, people can better fight the virus
## What it does
ProjectNourish is an application (web or phone) that helps a user track their daily nutritional intake. This includes the user being able to manually enter in values, or an item (e.g. an apple), or take a picture of the label and the program will process the image. Users are notified if they don't have enough intake of nutrients (compared to standard daily recommended values), to ensure that the user is consuming as much as their body requires. 

## How We Built it
Our back-end consists of SQL, Python, and node.js. Our front-end is react.js. The connection between all of our code is made through Google Cloud, and the Python back-end code integrates the Google Cloud Vision API for OCR Image Processing.

## Challenges We ran into

One challenge we ran into was figuring out how the front-end and the back-end connected. Our app allows users to take a picture of a nutrition label and then parses the information on the nutrition label in order to gather the nutritional data. In order to do so, our front-end needed to format the image data in a way that can be accepted by the back-end. This was a challenge because figuring out how best to format that image data was difficult. To help solve this issue we looked at patterns in the image data and utilized regular expressions to help parse out the key information we needed. 

Another issue we had was figuring out how Google Cloud works. We knew we wanted to use Google Cloud to help with image recognition and database storage, but the challenge was sifting through the tremendous amount of Google Cloud's functionalities to find the right one. And once we found the right tool to use, understanding that tool was it's own challenge. Thankfully, we utilized the amazing DubHack's mentors to understand Google Cloud.

## Accomplishments that We're proud of
We aimed for an image scanner and putting them into the database. Combining APIs and our parsing programs, we can produce accurate and formatted nutritional input from images of nutrition labels. We also design a user-friendly UI featuring secure logins. We are even more proud that our veteran programmers on the team taught industrial standards, such as React, Google Cloud (and its APIs), MySQL to the less experienced in the team.

## What We learned

## What's next for ProjectNourish

We would love to incorporate some data analytics to the Nourish app. For example, we could look at the daily nutritional intake data of the user and do some data analytics to measure whether or not the user is eating healthy. We could also add infographics to display this data on the dashboard so that the user can immediately gauge how well they are doing as soon as they enter the app.

