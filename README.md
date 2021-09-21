Hi, here are the instructions so as to run the repository.
1-Download or clone the repository.
2-Cd into folder challenge-main. 
3-Install next.js and Auth0 by using the following commands:
-Npm install
-Npm install @auth0/nextjs-auth0 
4-Create an env file called ".env.local" and save it with the following information:
"
AUTH0_SECRET='faafa184508b14c45f32608d010b5fd805025e30df1d891c3791a16966a7284b'

AUTH0_BASE_URL='http://localhost:3000'

AUTH0_ISSUER_BASE_URL='https://dev-jnhwl925.us.auth0.com'

AUTH0_CLIENT_ID='huFkZXompL7sfYkig1Wvj2smoZQZpJ4Z'

AUTH0_CLIENT_SECRET='TR0s8aYRXVYEErCUJ8kCa_-6E_HZaPf1EIdBwhmd2k2Q0tyUmK3zid1U4B5TOaiw'
"
5-Run the following command to start the app:
-Npm run dev 
6-You should be running on localhost: 3000/ port. The authorization won't work if you are not on this port.
7-Last, use this email and password for the Authorization user:
User: "challange@gmail.com"
pass: "Improve-in challenge"
