# A Guide to the Paperwork Reduction Act

The PRA Guide is a plain language guide which answers the most common questions like, “What is the PRA for?”, “Do I need clearance?”, and “What’s the process?”

It aims to give federal employees confidence working with the PRA—and through this, lower the barriers to working effectively with the public.

Learn more at https://pra.digital.gov

## About the site

- This site uses [Jekyll](https://jekyllrb.com), a Ruby-based static site generator. For more information about using Jekyll, refer to the [Jekyll documentation](http://jekyllrb.com/docs/home/).

- The site is built with the [U.S. Web Design System](https://designsystem.digital.gov/), a set of reusable, high-quality components for modern websites.

- The site is optimized for deployment on 18F's [Federalist](https://federalist.18f.gov) publishing service.

## Running the site locally

After cloning the repo, install Jekyll and any necessary dependencies using:

```
npm install
```

```
bundle install
```

To run the site locally, from the project folder, run:

```
npm start
```

If you are missing fonts or images, install assets for local development with:

```
npm run build
```


If all goes well, visit the site at `http://localhost:4000`.

## Accessibility tests

We follow the WCAG2AA standard, and one of the ways we check that we're following the right rules is through automated tools, like [**pa11y**](https://github.com/pa11y/pa11y/). For more info on the rules being tested checkout the [pa11y wiki](https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules).

### Running tests

To run a web accessibility test on digital.gov do the following:

1. Install and run the site locally following the `Running the site locally` instructions above. *Site must be running locally to perform the scan.*

- If this is your first time running pa11y, then you'll need to run `npm install` to make sure pa11ly is installed.

2. In a separate terminal window, run `npm run test:pa11y` to initiate the accessibility checker.

*Note:* Accessibility testing configuration is located in the .pa11yci file.


## Contributing

To provide feedback, follow this repository and [open an issue in the repo](https://github.com/GSA/digitalgov-pra/issues/new).

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
