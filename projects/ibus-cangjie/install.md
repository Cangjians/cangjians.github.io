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

## Ubuntu 14.04 or later

IBus Cangjie is included in the default Ubuntu repositories, **starting with
the 14.04 release**, so you can install it with `apt-get`:

```
$ sudo apt-get install ibus-cangjie
```

## Build from the sources

### Dependencies

To build IBus Cangjie, you will need the following:

* Python >= 3.2
* the Python 3 GObject bindings
* IBus >= 1.4.1 (note that its GObject-Introspection bindings must be enabled)
* pycangjie
* pycanberra: this is **optional**, only needed to play event sounds,
  especially to give feedback to the user on incorrect inputs. IBus Cangjie
  will fail gracefully if pycanberra is not available though, and just won't
  play any sound.

### Install from a release tarball

Download a release tarball from
[the releases section](https://gitlab.freedesktop.org/cangjie/ibus-cangjie/-/releases) on.

Installation requires [meson](https://mesonbuild.com/) build system to run.
After installing meson, from the root folder of the unpacked tarball, run:

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

### Install from Git

First, you need to clone the development repository:

```
$ git clone https://gitlab.freedesktop.org/cangjie/ibus-cangjie.git
```

Then, from the root folder of the Git clone, do the usual Autotools dance:

```
$ ./autogen.sh
$ make
$ sudo make install
```
