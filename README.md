# Vehicle Information Dashboard

A React and Redux dashboard that loads a vehicle's details and pricing from a remote API and lets the user edit the pricing through a validated dialog form.

> Built in 2018. This project is not actively maintained, and the external API it calls may no longer be available.

## Features

- Fetches vehicle year, make, model, VIN, and model number, plus MSRP, discount, rebate, and purchase price
- Displays pricing formatted as dollar amounts
- "Edit Pricing Information" dialog that accepts digits only and posts the updated pricing back to the API
- Loading spinner while data is being fetched
- Responsive layout with a tablet breakpoint
- PropTypes checks on connected components

## Tech Stack

- React 16
- Redux, React Redux, Redux Thunk
- React Router 4
- Material-UI
- Sass
- Webpack 3 and Babel 6
- Express (production static server)

## Getting Started

```bash
npm install
npm run dev-server   # webpack-dev-server for local development
```

Production build and server:

```bash
npm run build:prod
npm start            # serves public/ on PORT, or 3000 if unset
```

`package.json` pins Node 8.11.2 and includes a `heroku-postbuild` script.

## API Calls

The app calls an external service (the base URL is set in `src/actions/vehicleInfo.js`):

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/getVehicleInformation?userId=...` | Load vehicle info and pricing |
| POST | `/changeVehiclePricing` | Save `msrp`, `discount`, `rebate`, and `purchasePrice` |

## Project Structure

```
src/
  actions/      # Thunks for fetching and updating vehicle data
  components/   # Dashboard, vehicle info panel, edit dialog, navbar, loader
  reducers/     # Vehicle info reducer
  routers/      # App router
  store/        # Redux store setup
  styles/       # Sass partials
public/         # index.html, images, and the webpack output (dist/)
server.js       # Express static server
```
