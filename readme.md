## Use

Install Node.js, this project was created in version `v16.18.0`.

Clone the project:

```
git clone git@github.com:EduardoAyora/employees-ioet.git
```

Enter the project:

```
cd employees-ioet
```

Install dependencies:

```
npm install
```

Finally, to run the program use the command:

```
npm start
```

## Overview

My solution has been to first read the text file and put each line (or data set) in a position of an array, then I converted each of these data sets that were strings to employee objects that contain the name of the employee and their times worked which in turn consists of an array of objects that have the day, the hour, and the minutes of the start and end of their day. Then I iterate on this array of objects making all the combinations of pairs of employees, without repeating any pair, and while doing this, I also look in their work schedules if they have worked on the same day, and if they have, I look if they have coincided in certain hours and minutes, for which I transform this time (hour and minutes) to only minutes since it drastically reduces the number of conditions that I must verify. Once I have that array of pairs of employees and the number of times they coincided, all that remains is to transform it into a string and print the results in the console.

## Architecture



## Approach and methodology

My approach is that the information should first be put into a data structure that is easier to work with and represents the employees. And then, the possible combinations of these employees must be made, at the same time as their work schedules are accessed to count the number of times they have coincided. To verify that they match, I convert the hours and minutes to just minutes to make it easier.