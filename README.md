﻿# elet2415-final

### Requirements

1. Write a sketch for your micro-controller to generate a `POST` request that sends the following parameters to your server:

 - heart rate
 - position
 - temperature

2. Write a PHP script that accepts the the `POST` request.You script must be called `database.php`.

3. Write a JavaScript sketch that generates a `GET` request that queries your server for the most current heart rate, position and temperature values. Your JavaScript sketch must be called `script.js`.

4. Write a PHP script that accepts the incoming `GET` requests and handles it by providing the requested data. This file must be called `browser.php`.

The files that you create must be placed along side the provided files in the same folder.


### Objectives

The page shows the numerical values for heart rate and temperature and a worded value for the position in their respective sub-panels. 

Students are required to replace the place holding values of each relevant sub-panel with the corresponding values from the database using JavaScript.

1. The sub-panel labeled `Heart Rate` should display the patients current heart rate in bpm (beats per minute).

2. The sub-panel labeled `Position` displays the current position of the patient. This sub-panel must show:

 - `sit` - if the patient is sitting up right
 - `down` - if the patient is laying flat on his/her back

 - `left` - if the patient is on his/her left side
 - `right` - if the patient is on his/her right side

3. The sub-panel labeled `Temp` should display the current value of the patient's temperature in degrees Celsius.


__NB:__   **You are not required to display the units for any of the values as they are already included in the original design of the page.**

In addition to the objectives mentioned above, the values must be updated on the page automatically once every second using JavaScript.


### Important

The only file that is to be altered is `index.html`.

The following files are to remain unaltered labeled: 
 
- `panel_hr.js`
- `panel_o2.js`
- `panel_r.js`
