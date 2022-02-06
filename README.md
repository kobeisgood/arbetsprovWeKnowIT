# Work test for We Know IT
This task is based on a fictitious scenario where We Know IT will develop an app for a customer. The user should be able to search for a population of a certain city, as well as being able to search for a country and obtain the population of the largest cities for that country.
This project was built using the [React Native](https://reactnative.dev/) framework with the [TypeScript](https://www.typescriptlang.org/) language, along with the developer tool [Expo](https://expo.dev/). 


## Prerequisites 
* [Node.js](https://nodejs.org/en/) 
* [Git](https://git-scm.com/downloads)
* (Optional) Expo Go app for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US) or [iOS](https://apps.apple.com/se/app/expo-go/id982107779)
* (Optional) [Android Studio](https://developer.android.com/studio?gclid=Cj0KCQiAgP6PBhDmARIsAPWMq6njKz6R1YrZp3h3e2N0O6ALvIK5b2TtYg0yt-R10gP5Vj_uJwshk50aAsKTEALw_wcB&gclsrc=aw.ds)
* (Optional) [Xcode](https://developer.apple.com/xcode/)

## How to run the project 
1. Open a command terminal and clone the project: `git clone https://github.com/kobeisgood/arbetsprovWeKnowIT.git`.
2. Navigate into the folder you cloned the project into in your terminal: `cd /arbetsprovWeKnowIT`.
3. Open the project in a text editor or IDE of your choice. In the root folder, create a file called `.env`. In that file, write `API_PATH = http://api.geonames.org/searchJSON?username=weknowit&` and save. This is a environment variable to access the api used. 
3. Write `npm install`.
4. Write `expo start`. \
Continued below are a few alternatives on how to run the app on different platforms 
### Alternatives for running the app 
a. To run the app in your web browser, press `w` in your terminal. \
b. To run the app on an Andorid or iOS emulator on your computer, you need either Android Studio or Xcode respectively. Configure an emulator and open it, then press `a` in your terminal. \
b. For a more realistic experience, download the Expo Go app and through the app scan the QR code shown in the terminal to open the app. 

## Structure 
* Components: ` /arbetsprovWeKnowIT/components`
* Views: ` /arbetsprovWeKnowIT/screens`
* API handling: ` /arbetsprovWeKnowIT/api`
* Global styling: ` /arbetsprovWeKnowIT/styles`
