---
layout: default
title: Installing IBus Cangjie
name: projects
project: ibus-cangjie
pretty_project: IBus Cangjie
sub: install
---

## Arch Linux

ibus-cangjie has not been included in official repository yet, but only in AUR.
If it works for you and you like it, please don't hesitate to vote it on
[upvote it](https://aur.archlinux.org/packages/ibus-cangjie/).
So you can install it with `yay`:

```
$ yay -S ibus-cangjie
```

## Debian Unstable / Sid

IBus Cangjie is included in the default Debian repositories, so you can just
install it with `apt-get`, as the root user:

```
# apt-get install ibus-cangjie
```

## Fedora

IBus Cangjie is included in the default Fedora repositories, so you can just
install it with `yum`:

```
$ sudo yum install ibus-cangjie
```

## Gentoo

IBus Cangjie is included in the Gentoo repositories. It is currently masked.
You will need to add "app-i18n/ibus-cangjie" to your /etc/portage/package.accept_keywords
or use autounmask. Once unmasked install as root with :

```
$ emerge app-i18n/ibus-cangjie
```

## Ubuntu

IBus Cangjie is included in the default Ubuntu repositories, **since
the 14.04 release**, so you can install it with `apt-get`:

```
$ sudo apt-get install ibus-cangjie
```

## Build from the sources

### Dependencies

To build IBus Cangjie, you will need the following:

* Python >= 3.2
* the Python 3 GObject bindings
* IBus >= 1.5 (note that its GObject-Introspection bindings must be enabled)
* pycangjie
* pycanberra: this is **optional**, only needed to play event sounds,
  especially to give feedback to the user on incorrect inputs. IBus Cangjie
  will fail gracefully if pycanberra is not available though, and just won't
  play any sound.

### G​et the Source Code

For stable releases, you may download the release tarball from
[the releases section][releases] of our repository page.

Alternatively, you may get the latest development version (or or any release
version) with [git][git] with this command:

```
$ git clone https://gitlab.freedesktop.org/cangjie/ibus-cangjie.git
```

### Compile and Install

L​atest developement version of ibus-cangjie requires the [meson][meson]
build system to compile. After installing meson, from the root folder of the
source code, run:

```
$ meson setup ./builddir --prefix=/usr --wipe
$ meson build ./builddir
$ meson install -C ./builddir
```

If you have ibus-cangjie already running before this process, remember to
restart ibus daemon to reload the newly built and installed version:

```
$ ibus restart
```

#### For Older Versions

Previous releases (2.4 or earlier) is built with [GNU Automake][automake].

Then, from the root folder of the Git clone, do the usual Autotools dance:

```
$ ./autogen.sh
$ make
$ sudo make install
```

[releases]: https://gitlab.freedesktop.org/cangjie/ibus-cangjie/-/releases
[meson]: https://mesonbuild.com/
[git]: https://git-scm.com/
[automake]: https://www.gnu.org/software/automake/manual/html_node/index.html