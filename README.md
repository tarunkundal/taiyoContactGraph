# Contact Management App with Charts and Maps (taiyoContactGraph)

## Overview
This project is a contact management app built with ReactJS, TypeScript, and Chakra UI. The app includes a dashboard with charts and maps to visualize COVID-19 data. It uses RTK Query for data management and Redux toolkit for state management.

## Features
Contact Management
- **Add Contacts**: Form to add new contacts.
- **View Contacts**: List of all added contacts.
- **Edit and Delete**: Options to edit or delete existing contacts.
- **State Management**: Utilizes Redux to store contact data.


## Dashboard
Line Graph: Displays fluctuations in COVID-19 cases over time.
React Leaflet Map: Shows markers with country-specific COVID-19 data (active cases, recovered cases, and deaths).
**APIs Used**
Worldwide Data: https://disease.sh/v3/covid-19/all
Country-Specific Data: https://disease.sh/v3/covid-19/countries
Historical Data: https://disease.sh/v3/covid-19/historical/all?lastdays=all

## Setup
Clone the Repository

**Copy code**
- git clone git@github.com:tarunkundal/taiyoContactGraph.git
- cd taiyoContactGraph
- npm install
- npm start
- The app will be available at http://localhost:3000.

**Technologies Used**
- ReactJS: Frontend library
- TypeScript: Type-checking
- Chakra UI: UI component library
- RTK Query: Data fetching and caching
- Redux: State management
- React Leaflet: Map integration

**Deployment**
The app is deployed on Vercel, and you can access it here.

**Notes**
The app is designed to be responsive and looks good on both desktop and mobile devices.
Ensure you have a stable internet connection as the app relies on external APIs.
License
This project is licensed under the MIT License.

**Contact**
For any questions or issues, please contact chauhan271singh@gmail.com.
