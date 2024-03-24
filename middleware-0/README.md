# Learnings from this project

# Setup Redux Store with Middleware:
Initialize a Redux store with middleware applied to enhance its functionality. Here, we'll apply custom middleware along with any other middleware you may need, such as Redux Thunk for handling asynchronous actions.

#  Create Custom Middleware for Logging Payloads:
Create a custom middleware in Redux that logs all payloads. We've already defined this middleware as payloadLogger above.

# Apply Custom Middleware in Redux Store:
Apply the custom middleware along with any other middleware you're using to the Redux store.

# Dispatch Actions from React Components:
Dispatch actions from React components to trigger state updates. Use the useDispatch hook provided by react-redux to dispatch actions.
