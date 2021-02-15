# Shower-Mdx

With this template you can create your [Shower](https://shwr.me/) presentation in .mdx - with common markdown syntax and custom React components. 

[Shower Presentation Template](https://github.com/shower/shower) is built by [Vadim Makeev](https://pepelsbey.net/).

## Getting started

1. Clone this repo and remove git history to start from blank:

    ```shell
    git clone https://github.com/varya/shower-mdx.git && rm -rf shower-mdx/.git/
    ```

2. Start development server: `yarn dev` or `npm run dev`
3. Open `index.mdx` and start adding your content! 

## Editing content

Each new slide has to start with `<h2>` heading. If you don't need an actual heading, just leave it blank. Check index.mdx for markup examples.

### Adding custom attributes

If you need attributes for your slide `<section>` tag, add it **below** the heading. If you need an attribute for the heading, add it on the same line. See below: 

```md
## Slide heading {#headingId .heading-class}
{#sectionId data-customtext="anything}

...Slide contents
```

Custom attributes are currently supported for sections, headings, links, code, strong or emphasized text. The list of attributes is limited to [HTML element attributes](https://github.com/wooorm/html-element-attributes)

### Adding custom styles.

If you want to change the theme, load theme css directly at the top of [index.js](https://github.com/varya/shower-mdx/blob/master/pages/index.js). The default themes "ribbon" and "material" are already included in package.

If you just want to tweak some components, provide css through "style" field in frontmatter or inside `<style>` tags. See [index.mdx](https://github.com/varya/shower-mdx/blob/master/index.mdx) for examples.

### Adding custom components

You can add your React components to the presentation. Here is what you need to do:

1. Add your component to `components/` folder.

2. Re-export it in `components/index.js` like that: `export {default as MyComponent} from "./MyComponent"`

Now your component will be accessible in global .mdx scope. You don't need to import it directly to .mdx

## Deployment

Deployment to your Github Pages is set up automatically via Github Actions, and triggers every time you push into `master` branch.

If you need to test your build locally, run:

```shell
yarn export
```

## Contributing

Contributions to this project are warmly welcome. Send your pull request or open an issue to discuss the changes.