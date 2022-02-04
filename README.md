# English-Dictionary-AWS - My frontend

---

## Global use - 🌎

### ✨ [Visit my website!](http://dictionary-rama.s3-website-eu-west-1.amazonaws.com) ✨

#### Maybe it's blocked so you does not cost me any money 😏❌💸

- **The Front was served in S3 bucket as a static file.**
- **The backend works with - DynamoDB to store data and serve the app by REST API (Api Gateway) in conjunction with Lambda serverless function.**

## Local use - 📌

### Github 🐱‍👤

- **Clone this repo**
- **Run `npm i` on the `client` and dir - To install all the dependencies**

#### To run the app

- **Run `npm start` on `client` dir (On PORT=3006)**

---

## Screenshots 📸 -

## 📲 Front interfaces:

### Dynamic routes:

- **`"BASE_URL/"` - For home page (picture I below ⬇)**
- **`"BASE_URL/:word"` - For the result of a word search - all parts of speech (picture II below ⬇)**
- **`"BASE_URL/:word/:partOfSpeech"` - For a result of a word search - in a specific parts of speech (picture II below ⬇)**
- **`"BASE_URL/part-of-speech/:part"` - Receiving a random word in a specific parts of speech (picture III ⬇)**
- **`"BASE_URL/part-of-speech/:part?letter=a"` - Receiving a random word in a specific parts of speech that contain specific word (picture III below ⬇)**

### <img src="./README-PICS/home.png"/><img src="./README-PICS/one-random.png"/>

### <img src="./README-PICS/some-word.png"/><img src="./README-PICS/not-found.png"/>

---

## Assignment - Front

Your about to build an english dictionary app

1. [x] **FRONTEND:**
   1. [x] build a `create-react-app` english dictionary app (mobile first)
   2. [x] URL routes:
      1. [x] `/:word` - dynamic route - `word` is dynamic URL parameter, used to request backend api
      1. [x] `/:word/:partOfSpeech` - dynamic route - `word` is dynamic URL parameter, used to request backend api
      1. [x] `/part-of-speech/:part` - `part` is enum URL parameter, used to request backend api
   3. [x] each word in dictionary is clickable and will redirect to a common URL
   4. [x] **BONUS** should be deployed to `S3 bucket`
