# React Bindings for Bulma

**This is currently in active development. Feel free to help out. :smile:**

## Usage

Install the package using NPM:

```
$ npm install --save-dev react-bulma
```

And include the Bulma CSS file (or your modified version):

```html
<link ref="stylesheet" href="https://cdn.rawgit.com/jgthms/bulma/master/css/bulma.min.css" />
```

Then use the components as you wish:

```js
import Button from 'react-bulma/components/button';

const myComponent = ({ disabled }) => (
  <Button is-primary is-outlined is-disabled={disabled}>Click me!</Button>
);
```

## To Do

### Meta

- [x] Create basic react setup with babel compilation
- [ ] Create demo files to mirror upstream docs
- [ ] Add compilation of demo files into website
- [ ] Add CI with CD to S3 (e.g. react-bulma.joshdavidmiller.com)
- [ ] Publish initial version to npm

### Components

- [ ] Button
- [ ] Input
- [ ] Textarea
- [ ] Select
- [ ] Checkbox
- [ ] Radio
- [ ] Titles
- [ ] Content
- [ ] Tag
- [ ] Message
- [ ] Notification
- [x] Icon
- [ ] Navbar
- [ ] Grid (Columns, Column)
- [ ] Tabs (Tabs, Tab)
- [ ] Media
- [ ] Card
- [ ] Menu
- [ ] Table
- [ ] Header
- [ ] Footer
- [ ] Hero
- [ ] Section

