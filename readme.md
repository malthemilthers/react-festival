# React Festival App
This app allows you to browse a festival program. 
This purpose of this project is to test out the capabilites of React for this 
type of application.



## API plan
Eventually we'll want to hook this up to a RESTful API. We'll need the following endpoints

### Performance
GET: /performance/{performance-id} 						//Retrieve data for a specific performance
GET: /performance/{performance-id}/shows				//Retrieve all shows for a specific performance

### Shows
GET: /shows/{show-id} 									//Retrieve data for a specific show
GET: /shows/{year} 										//Retrieve all shows for a specific year

### Venue
GET: /venue/{venue-id} 									//Retrieve data about a specific venue
GET: /venue/{venue-id}/shows 							//Retrieve all shows playing at a specific venue

### Organisation
GET: /organisation/{organisation-id} 					//Retrieve data about a specific organisation
GET: /organisation/{organisation-id}/shows 				//Retrieve all shows produced by a specific organisation



## Changelog

### 0.1.0 Setup
* Setup program with a bit of test data
* Setup base environment with create-react-app. 