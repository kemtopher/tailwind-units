# Tailwind Sizing Units

A simple little tool to quickly reference tailwind sizing units based off of your base font size.

Base font size is set at 16px but change it to whatever you're using in your project.
All sizing based off of tailwindcss's 0.25rem scale.

### `Sizing Logic`

```
const remValue = parseFloat((i * 0.25).toFixed(2));
const pxValue = parseFloat((remValue * baseSize).toFixed(1));
```

### `npm install`
Install everything 

### `npm start`
Run start to fire the app up





## Planned features
Find an intuitive way to quickly add property names and add a 'click to copy' feature


