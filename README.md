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

There are several options to pass your custom styles to the template:

- Pass it through mdx template, through style field at the frontmatter (global) or jsx string - see sample [index.mdx](https://github.com/varya/shower-mdx/blob/master/index.mdx) for examples.

- Use a theme. There are two themes included by default - "ribbon" and "material". The theme name needs to be specified as "theme" property in index.mdx. If you want to use custom theme, you will need to manually add name and path to [loadTheme function](https://github.com/varya/shower-mdx/blob/master/components/Head.js#L6) in Head.

### Adding custom components

You can add your React components to the presentation. Here is what you need to do:

1. Add your component to `components/` folder.

2. Re-export it in `components/index.js` like that: `export {default as MyComponent} from "./MyComponent"`

Now your component is accessible in global .mdx scope. You don't need to import it directly to .mdx

## Deployment

First, build and export your presentation:

```shell
yarn export
```

If you want to deploy a presentation at your Github Pages, simply run:

```shell
yarn deploy
```

## Contributing

Contributions to this project are warmly welcome. Send your pull request or open an issue to discuss the changes.