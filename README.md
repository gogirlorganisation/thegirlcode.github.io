# The Girl Code website

## Setup

1. Clone to your machine.
2. Install dependencies with `npm install`.
3. Start the development server with `npm start`.
4. Open `localhost:3039`.
5. To publish a build to the gh-pages branch, use `npm run publish`. This creates a fresh build in the dist folder and then pushes it to the master. branch.

## Adding a page

To add a page, create an html file in the `src` directory and a script in the `src/js` directory. In the script, import the page's SASS stylesheet.

```js
import '../sass/page.scss';
```

Then add the script as a chunk to `webpack.config.js`.

```js
entry: {
  ...
  page: './src/js/page.js'
},
```

Now add an instance of `HtmlWebpackPlugin` to the `plugins` array in the webpack config.

```js
plugins: [
  ...
  new HtmlWebpackPlugin({
    template: './src/page.html',
    filename: 'page/index.html',
    chunks: ['page']
  }),
  ...
],
```

Restart your devServer if it's already running and you should see your page at `http://localhost:3039/page`.

## Notes

- [Here's](https://jameshfisher.com/2017/08/30/how-do-i-make-a-full-width-iframe/) where I got the hack for maintaining the aspect ratio for the Youtube iframes.

## TODO

[ ] Gyan Bharti Workshop project section
