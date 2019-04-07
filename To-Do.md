# To-Do - (vue-components)

## Desktop / Mobile Only Styles
In addition to a 'styles' prop that effects both desktop and mobile.\
We need extra style props for targeting only Desktop or Mobile.

## Create 'Button' module
Should have styles set via props to make it fully customisable.

---

## Create 'Video' module
Will need to have a watcher, to re-render the video component if the 'src' prop changes.

---

## Dynamic Component Imports
You can register asynchronous dynamic components locally in a single file component, like this:

```js
export default {
  components: {
    'test-dynamic': () => import('@/components/testDynamic'),
    'other-dynamic': () => import('@/components/otherDynamic')
  },
  data () {
    return {
      current: 'test-dynamic'
    }
  }
}
```

And in the template:
```js
<component :is="current"></component>
```

If you register multiple components, then you would just change the current value for the desired component.

In the case of many components, you can import the display object of the composite names of the corresponding file paths, and then register them as:

```js
import myComponents from '@/components'

export default {
  components: Object.keys(myComponents).reduce((obj, name) => {
  return Object.assign(obj, { [name]: () => import(myComponents[name]) })
  }, {})

  ...
}
```

Where myComponents is exported as:

```js
// components/index.js
export default {
  foo: '@/path/to/Foo',
  bar: '@/path/to/Bar',
  ...
}
```
