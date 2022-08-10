# IMPORTANT NOTE

- This code is NOT MEANT to function, compile or run.
- This code is simply here to showcase my React Native and React skills and style.
- As you can see, I use hooks as I find them capable of doing more than classes.
- I also place the screen UI code and screen state code in different files to ensure a separation od concerns.
- I place state code in a custom screen state hook which I then import into the screen hook so that state and UI are completely separate.

### Clean Architecture

- I am using the clean architecture format for this project which looks as follows:
  - backend
    - backend functions which basically do one simple task (fetch available prizes, add a prize to the users won-prize database, etc...)
  - domain
    - use case functions that are basically a combination of backend functions (fetch available prizes and then add a prize from that list to the users won prize database, etc )
    - error checking and catching is done here.
  - frontend
    - contains UI code in reusable components.
    - contains screen UI code.
    - contains screen state code separated from the UI code.
    - State code uses domain use-cases to do stuff. 
    - No backend functions should be run from the frontend, only domain functions. 