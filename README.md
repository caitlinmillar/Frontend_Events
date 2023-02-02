# Whale of a time :whale:

![whale-of-a-time-high-resolution-color-logo (1)](https://user-images.githubusercontent.com/110283546/216348369-d091364f-93bd-4a03-a7c3-65ad11647f31.png)


<h2 align="center">Fight the FOMO</h2>

## Project Description

The backend API our team received was the events calender project by SAWS Code Team. An event booking system that allowed users to sign themselves up for events.

Our frontend team, Whale of a time, decided to focus more on fun events and classes for users to attend. We, like SAWS, were inspired by apps like Fastoma and Event Brite. The website we created allows registered users to sign up for events by simply using our get tickets button on individual event cards. Users are able to see the date and location of events on each card using a calendar and maps feature.


## Wireframe

![eventsWireframe](https://user-images.githubusercontent.com/110283546/216356338-c00aca08-4872-41fb-90ff-c37f062856c1.jpg)


As you can see from our wireframe, most of our Single Page Application is based around our homepage. Users are able to see featured events on the hero section as well as a spotlight of other top events. The homepage also contains a collapsible grid of events that allow the user to browse all events available as well as carousel of events.

There is also a nav bar accessible on every page with a search bar, buttons to login/register, or a my profile button if the user is logged in, and a dark mode toggle for photo sensitive users. 

On the my profile page, the user is able to see the events they are currently signed up to and calendar containing all their event dates.


## Component Diagram

Component diagram goes here
<img alt="the component diagram for planning our website/>

When we first planned the MVP we created 2 containers - one each for the users and events. However, upon coding, we discovered we needed two more containers to handle a single user (for the my profile page) and a single event (for each event card)
We had several components implementing a range of features - navBar, userRegistration, eventCard etc


## Tech Stack

We created our website using ReactJS and JavaScript. We also downloaded a few external libraries to help make our website more intereactive.

The libraries are:
Leaflet Library - interactive map using OpenStreetMap
AntDesign - React UI library

### Installation of React and Libraries
Installation of ReactJS and external libraries were done in the terminal

`create-react-app Frontend_Events`
- To create react app

`npm install react react-dom leaflet
npm install react-leaflet`
- To install Leaflet library

`npm i antd`
- To install AntDesign

## Completed Extensions

Several extensions were completed. Including:
- Hover feature on event cards
- Adding a map to each event
- Adding a calendar to each event
- Pop-up functionality on the login and registration buttons
- Adding CSS to the My Profile page
- Accessibility features: Dark Mode (for photo sensitivity) & Tritanopia filter (for red-green colour blindness)

## Futher possible extenstions

If we had more time, there were a few more extensions we would have liked to implement in our code such as:
- Login authentication
- Token API to handle login request and user registration
- Randomisation on featured
- Countdown feature for each event
- Find users going to similiar events ("checkout what your friends are doing")
- More accessibility features (eg, other filters for other forms of colour blindness)



## Try out our website
You are welcome to view our website by cloning this repository using the command
`git clone git@github.com:caitlinmillar/Frontend_Events.git`

You can then start up the website by using the command
`npm start`

And load it up on http://localhost:3000.

## Thank you

We like to say a special thank you to all trainers helping us build our wesbite and the rest of cohort for their support :relieved: .

Another special thanks to SAWS for creating an amazing API :kissing_heart: .
