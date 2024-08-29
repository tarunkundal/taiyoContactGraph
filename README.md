<img width="1440" alt="Screenshot 2024-08-29 at 11 38 59" src="https://github.com/user-attachments/assets/39f640a7-e507-4eb0-92ad-7f96cea352a0">
<img width="1440" alt="Screenshot 2024-08-29 at 13 32 48" src="https://github.com/user-attachments/assets/da1af74c-102e-4484-bd62-a388486c1de3">
<img width="1440" alt="Screenshot 2024-08-29 at 13 33 08" src="https://github.com/user-attachments/assets/d9d4bf29-3062-4802-bb6e-1a745c2914d0">
<img width="1440" alt="Screenshot 2024-08-29 at 13 33 32" src="https://github.com/user-attachments/assets/5fbc0cb8-871a-47b6-8e82-2613eb828787">
<img width="1440" alt="Screenshot 2024-08-29 at 13 34 06" src="https://github.com/user-attachments/assets/ae0e7b96-fc0d-45d8-84ee-b89c2f764049">
<img width="1440" alt="Screenshot 2024-08-29 at 11 38 46" src="https://github.com/user-attachments/assets/45c127c7-3f0e-41f1-9183-09d41fdbe19e">
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
The app is deployed on Vercel, and you can access it here. https://taiyoaitask.vercel.app/

**Notes**
The app is designed to be responsive and looks good on both desktop and mobile devices.
Ensure you have a stable internet connection as the app relies on external APIs.
License
This project is licensed under the MIT License.

**Contact**
For any questions or issues, please contact chauhan271singh@gmail.com.
