# MakeMap Class

The `MakeMap` class enables the creation and management of interactive maps with customizable properties and event handling.

## Constructors

### Constructor

```javascript
constructor(cont_id, p = { config: [], pins_config: [], property })
```

- `cont_id` (string): ID of the container where the map will be rendered.
- `p` (object, optional): Configuration object containing map properties.
  - `config` (array): Configuration settings.
  - `pins_config` (array): Configuration settings for map pins.
  - `property`: Map property object.

## Methods

### `sketchMap(sketch)`

Renders the map within the specified container.

### `modProperty(index, name, value)`

Modifies a specific property of the map.

### `setProperty(name, value)`

Sets a property across all map elements.

### `CalMap(ngjsconfig)`

Initializes the map based on the provided configuration.

### `ngaddEvent(id)`

Adds event handlers to the specified map element.

### `propertyMaker()`

Generates default properties for map elements.

## Usage Example

```javascript
const niger = new MakeMap(nig_cont_id);
const propertyData = dataWithPopulation.map(item => ({
    lga: item.lga,
    total: parseInt(item.total)
}));

const generatedProperties = niger.propertyMaker(rearrangedData, 2000);   
niger.sketchMap(niger_sketch);
$(document).ready(function () {    
    niger.CalMap(generatedProperties);
})
```

## Notes

- Ensure the container ID is provided before rendering the map.
- Utilize `CalMap` to initialize the map based on configuration.
- Modify specific properties using `modProperty`.
