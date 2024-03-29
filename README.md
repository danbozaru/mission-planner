# Mission Planner

This project is a take-home coding challenge to build a mini-app for planning and visualizing robot missions.

## Getting Started

These instructions will help you serve, build, and run the Mission Planner app.

### Prerequisites

To work with this project, you will need:

- Node.js and npm
- Angular CLI

### Installing

Follow these steps to install and run the app:

1. Clone this repository to your local machine

```
git clone https://github.com/danbozaru/mission-planner.git
```

2. Install the dependencies

```
npm install
```

3. Serve the app

```
ng serve
```

The app will now be served at `http://localhost:4200`

### Building

To build the project, run:

```
ng build
```

This will generate a production build in the `dist/` folder.

### Running Tests

To run unit tests:

```
ng test
```

## Built With

- [Angular](https://angular.io/) - The web framework used
- [Angular Material](https://material.angular.io/) - Material design components

## Structure

The app contains the following pages:

- **Home** - Overview of the app
- **Planner** - Page to add mission waypoints
- **Player** - Page to visualize the mission

The main navigation is handled through a sidenav menu.

## Developer Notes

- This project insists on all developers following the same coding standards for more feasible merges
- This project adheres to the following coding standards:
  - 168 character max line length for Typescript
  - when developing, adhere to the rules found in `.editorconfig` and `.prettierrc`
  - use Prettier and auto format on save
  - CSS methodology: **BEM**
  - folder structure: hierarchical route-based folder structure, with classical subfolders for core entities: components, services, guards, etc.

## Authors

- Dan Bozaru

## Acknowledgments

- Libraries used, etc.
