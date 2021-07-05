# Symbiote Component Storybook

### Local Setup

Until we have the Symbiote Component Library pushed to NPM we need to clone the component library and point to it locally.

1. Clone the component library `git clone git@github.com:nath99/symbiote-component-library.git`

2. Clone the Storybook repository `git clone git@github.com:nath99/symbiote-component-storybook.git`

3. Open the `package.json` in the Storybook repository and add a relative link to the Symbiote component library `"symbiote-component-library": "link:<path_to_component_library>"`

4. Run `yarn install` then `yarn storybook`