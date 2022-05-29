# Aviation Frequency Propagation Simulator

## Solution description

This application is built using:

### FRONTEND:
 1. [react](https://reactjs.org/docs/getting-started.html) 
 2. [bootstrap](https://www.bing.com/search?q=bootstrap+documentation&qs=n&form=QBRE&sp=-1&pq=bootstra+documentation&sc=8-22&sk=&cvid=99EE175C3F7C4E84895053AE3D03E467) 
 3. [Google maps API](https://www.bing.com/search?q=google+maps+api&qs=n&form=QBRE&sp=-1&pq=&sc=0-0&sk=&cvid=CFA6A224C25A4BB4A143C0D0EEFBB4F6) 

### BACKEND:

1. [Node js](https://nodejs.org/en/docs/)
2. [MongoDB](https://www.mongodb.com/atlas)


### Functionalities:

1. Add and delete a receiver.
2. Display a list of all receivers.
3. Display the receivers and their coverage on google maps.


### Summary of how the application functions
To add a reciver, I create a form. By filling and submitting the form, the provided data (latitude, longitude, and coverage) will get sent to the backend where it gets saved into the database (MongoDB). The added receiver gets added to the list of receivers and also diplayed on the google map. On the map, a receiver is represented by a [signal icon](https://www.bing.com/images/search?view=detailV2&ccid=G2ObvHXO&id=2B6464208FB4D7BC6E4B8DC3E93E3E9622DF2182&thid=OIP.G2ObvHXOE6trXvQlPRvMbwHaHZ&mediaurl=https%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_440933.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1b639bbc75ce13ab6b5ef4253d1bcc6f%3frik%3dgiHfIpY%252bPunDjQ%26pid%3dImgRaw%26r%3d0&exph=978&expw=980&q=signal+icon&simid=608039366551471203&FORM=IRPRST&ck=520963241A3DC6CA9383009308A348E1&selectedIndex=0&ajaxhist=0&ajaxserp=0), and the coverage is represented by a circle with the radius specified. The coverage circle is centered at the latitude and longitude of the receiver.

## How to run the codes locally


### Installation

1. Clone this repository

2. Install server dependencies
    ```
    $ cd backend
    $ npm install
    ```

3. Install client dependencies
    ```
    $ cd frontend
    $ npm install
    Note: Make sure that you have installed 'nodemon' as global package.
    ```

### Run the app

1. Start the server
    ```
    $ cd backend
    $ npm start
    ```

2. Start the client
    ```
    $ cd frontend
    $ npm start
    ```

3. Browse to `http://localhost:3000/`
4. For the apis: `http://localhost:5000/`





