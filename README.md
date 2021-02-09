# Shower-Mdx

Create your awesome [Shower](https://shwr.me/) presentation in mdx!

{...To be updated}

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
