## UniteSquad

App Link: https://powerful-depths-37457.herokuapp.com/pokemon

UniteSquad is a fan site for the MOBA Pokemon Unite made using Mongoose, Express, and Node. Per the assignment, the app has full CRUD functionality for user accounts stored in MongoDB Atlas.

Users are able to view an index of all available Pokemon on the app's home page. Buttons at the top allow the user to filter the Pokemon by their party role. Clicking a card allows the user to view details about the Pokemon including their stats, evolutions, and moves.

Users are able to create an account stored in a database with a hashed password. When logged in, users are able to add and remove pokemon from a list of favorites, the cards of which are displayed on that user's account page.

When a user visits another user's account page, they are able to send that user a friend request. If that user accepts the friend request, they are added to each other's list of friends and can easily access each other's account pages from their own account page.

Users may also browse a list of all users, filterable by preferred party role, in case they wish to expand their circle of friends or need a final member to round out a squad.

### Technical Challenges
Setting up the system for friend requests and making it so that accepting the request mutually added both players to the other's friend list took some work figuring out.

The app was also supposed to incorporate an algorithm that would allow you to see all of the optimally-rounded-out teams that could be built from the favorite Pokemon of any five users, but that turned out to be a greater challenge than I was equipped to tackle so it was ultimately not included.

### Future Additions
The app has several areas for addition that I might have done had I had more time.

Adding more stats to the user would be fairly simple, allowing users to input Switch friend codes, in-game rankings, and potentially even more specific data about wins and losses to allow the app to calculate winrates overall or with specific Pokemon.

It could also be nice to add in a messaging function, to make it easier to forge connections with users you don't know personally.

Even without the squad-builder algorithm, there could still be some value in creating a Squads MVC so that users could have a team page for well-established playgroups, perhaps with a bulletin-board where members could post to other members or something similar.

Add mobile responsiveness.
