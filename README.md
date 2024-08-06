# Project Website

This is the repository to build the website for the Cangjian project
(全倉頡計劃).

## Website Development

To develop the site locally, you need to install:

* Ruby v3.0.0 or later
* The development headers of Ruby (e.g. "ruby-devel" or "ruby-dev" package in
  your distro).
* Rubygems

To run the site locally:
```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

The server address will be displayed after the service is ready.

Usually the server address will be: http://127.0.0.1:4000/
