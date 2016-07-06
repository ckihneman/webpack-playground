# An ES6 and Sass Playground with Webpack

A place to try things.

## Install

```
npm install
```

## Commands

### Build

Build js and css to `public/dist/`.

```
npm run build
```

### Watch

Watch files for development.

```
npm run watch
```

### Server

Put up a quick server on [http://localhost:8080/](http://localhost:8080/). It serves the `public/` folder.

```
npm run server
```

### Development

Dirty for now, but have two tabs open, first run `npm run watch` in one, then `npm run server` in another. Then head to [http://localhost:8080/](http://localhost:8080/). Refresh your own page for the moment.

## Grid

- `.grid` is your max width container.
- The whole idea here is to get rid of as much nesting as we can, but some is still needed. So `.grid` is basically your container and row.
- Grid units are `100` based.
    + Current units are defined in `/app/components/grid/_grid-settings.scss`
    + E.g. `.g--20`, `.g--50@md`, etc.
- All gutter (spacing) between grid units is handled by grid units.
    + Caveat here is utility classes are exposed to add (`.u-gutter`) or remove (`.u-gutter-none`) gutters.
    + Primary use case would be max-width content with gutters
        * e.g. `.grid.u-gutter`
- If you need to nest grid units, wrap them in `.u-gutter-reset`. This does the negative margin hack to line up our grid units once again.
- If you have a hanging grid unit, and you want to clear the "row" for your next units (ensuring they start from the left of the grid container), add the utility class `.u-clear` to the unit you want to reset to the left. Alternatively you can just start a fresh `.grid` (which you should do if it's a new grouping of content).
