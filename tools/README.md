# Open Practice Repository Tooling

This folder is where we store some helpful tooling to keep our repository organized. We currently have a linter, and might include more in future versions.

## Running

To run all of the linting rules, you'll have to `cd` into this directory and fun the following commands:

```bash
bun install
bun index.ts
```

## Contributing

There are two ways you can contribute a new rule.

First, add new rules from remark in the `RemarkRules` constructore. See a list of those [here](https://github.com/remarkjs/remark-lint/tree/main?tab=readme-ov-file#rules).

Second is to duplicate an existing rule in the `tools/rules/normal` folder and replace your logic with your own.

Giving AI one rule and asking it to make a new rule from you based on the provided example might be a decent way to generate new rules if you are not satisfied with what is available currently.
