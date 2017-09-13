---
layout: default
title: Contribute
name: contribute
---

## Come and help us

We believe that Free Software empowers the users to participate in the
creation of the projects they use and love, which ultimately results in better
software.

If you are interested, this page should give you all the necessary
informations to join the team, and help us make the best possible input
experience for Cangjie and Quick users.

Development happens [on Github](https://github.com/Cangjians/), where you can
find the source code for [our projects](/projects/), view the open issues and
report new ones.

If you do want to report an issue, try to identify the right project. Don't
worry too much about it though. We know it is not always easy for users to
figure out where a bug is exactly, so we'd rather you report it against the
wrong project than not report it at all. ;-)

### Contribute code

We strive to produce great software, and in order to do that we practice
peer-review for all the changes we merge into the source code.

To that end, we use Github's pull-request mecanism. If you want to submit a
change, fork the appropriate project, push your changes to your fork, and then
open a pull-request.

*Every pull-request must be accepted by a member of [the team](/people.html).*

**This is also true for changes submitted by a member of the team**: even the
core developers should not push directly to the central repository. Instead
they go through the same process, and must get their pull-request accepted by
an **other** member of the team.

This allows us to at least try and capture problems before they are merged
into the central repository, by making sure that every change has been looked
at by at least two pairs of eyes (the developer and the reviewer), because
according to Linus' Law, *given enough eyeballs, all bugs are shallow*.

This applies to [all of our projects](/projects/), as well as this website.

In addition, we try to pay attention to having good commit messages. Be sure
to read Peter Hutterer’s great post about
[writing good commit messages](http://who-t.blogspot.hk/2009/12/on-commit-messages.html).

### Contribute to this website

This website is also Free as in Freedom, just like [our software](/projects/).
Unless specified otherwise, consider that all the web pages and assets under
the `cangjians.github.io` domain are under the
[Creative Commons Attribution Share Alike](http://creativecommons.org/licenses/by-sa/3.0/)
license.

As everything else, it is hosted
[on Github](https://github.com/Cangjians/cangjians.github.io).

If you find any problem with it,
[report the issue](https://github.com/Cangjians/cangjians.github.io/issues/new),
or better: open a pull request!

### Make a new release

*Note: This is intended to the members of the team, although it can be of
interest to developers in general.*

When release-time comes, someone will have to actually produce the release
tarball for a given project. This is how.

First, bump the version appropriately. We use a very simple MAJOR.MINOR
versioning scheme:

* if any user-visible change was introduced (new UI, API/ABI break,...) then
  bump the MAJOR version,
* otherwise, bump the MINOR version.

Then, inside the project root directory, run the following command to create
the archive:

```
$ make distcheck
```

This will first create the tarball, then unpack it, change directory to the
unpacked tree, try building the code, and run the unit tests. That is, it will
make the release, and try doing what a user would do.

It is obviously a good idea to try installing the software from this tarball,
to test that it actually works, especially if you can do so on a clean
machine.

Next you need to tag the commit from which you made the release. Back in
the source tree of the project you are releasing:

```
$ git tag vMAJOR.MINOR
$ git push origin vMAJOR.MINOR
```

Of course, replace `vMAJOR.MINOR` by the actual version of this new release.

Finally, publish the tarball on Github, for the corresponding release.
