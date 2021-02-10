# Shower-Mdx

Create your awesome [Shower](https://shwr.me/) presentation in mdx!



## Getting started

1. Clone this repo to your machine

2. Open `index.mdx` and start adding your content!


## Basic syntax

### Separating the slides

Each new slide starts with level 2 heading: 


```md
## I'm new slide

Some awesome content here
```

If you don't need an actul heading for your slide, just keep it blank:

```md
##

Write something here...
```

### Adding custom attributes

If you need attributes for your slide <section> tag, add it **below** the heading. If you need an attribute for the heading, add it on the same line. See below: 

```md
## Slide heading {#headingId .heading-class}
{#sectionId data-customtext="anything}
```


### Consider using JSX instead of markdown for complex cases


## Components

There are few components already available for you.

### Columns

`<Columns>` component allows to split content in 2, 3 or 4 column. The number of columns should be provided as "col" prop. You can use markdown inside the component:

```jsx
<Columns col="3">

First column

Second column

Third column

</Columns>
```


### InnerNav

Inner navigation component, which reveals list items one by one.

Usage:

```mdx
<InnerNav>

  - List item 1
  - List item 2

</InnerNav>
```

Expects to receive `<ul>` or `<ol>` as a child, otherwise will render children as string

### Blockquote

Add custom blockquote component, which an be used as jsx: 
```
<Blockquote caption="my caption">
Quote text here
</Blockquote>
```

Markdown syntax still being processed independently: 

```md
> Blockquote
```
compiles to: 

```html
<blockquote><p> Blockquote</p></blockquote>


### Code

<TODO>



## Adding custom components

You can add any React components to your presentation. Here is what you need to do:

1. Add your component to `components/` folder.

2. Export it in `components/index.js` like that: `export {default as MyComponent} from "./MyComponent"`

Now your component is accessible in global .mdx scope. You don't need to import it directly to .mdx

