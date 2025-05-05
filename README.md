Real-Time Football Match Visualization Dashboard
This project aims to build a real-time football match visualization dashboard with interactive player movements and live event streaming. The goal is to create a highly interactive and visually dynamic platform that simulates a football game, tracks player and ball movements, and integrates live event overlays.

Key Features:
Live Football Pitch Animation: A dynamically generated football pitch background.

Real-Time Player Movements & Ball Tracking: The player's ball position is updated every second, simulating a live match.

Event Overlays: Potential to show live events like goals, fouls, and substitutions using real-time data (WebSockets or Server-Sent Events).

Timeline Navigation: Users can navigate through the match's timeline to replay key moments.

Mobile Responsiveness: The interface adjusts seamlessly on mobile devices with touch controls.

Smooth Transitions & Animations: Using React's state and effect hooks for smooth animations and real-time updates.


**Implemented Features:**
**
1. Live Football Pitch Animation: A dynamically generated football pitch background.

2. Real-Time Player Movements & Ball Tracking: The player's ball position is updated every second, simulating a live match.

**

**Netlify Link**
https://sportybet-dub.netlify.app/


**How I implemented the features:**

State Management (useState):

I used React's useState to manage the state of various elements like the match's timer (minutes and seconds) and the position of the ball on the pitch.

position: Tracks the ball's position, which is updated periodically to simulate movement on the field.

minutes & seconds: Track the match's timer, updating every second.


I also used the useEffect hook to handle update of states and trigger a re-render so that changes are immediately updated to the ui, i used it to set intervals and ensure that the ball movement and timer updates happen at specified intervals (every second).

Ball Movement: The ball’s position is updated every second, using the setInterval function to move the ball to random coordinates within the bounds of the pitch.

Timer: The match timer counts up every second, switching to the next minute once 60 seconds are reached.
