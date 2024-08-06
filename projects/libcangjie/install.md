---
layout: default
title: Installing libcangjie
name: projects
project: libcangjie
sub: install
---

## Arch Linux

libcangjie has not been included in official repository yet, but only in AUR.
If it works for you and you like it, please don't hesitate to vote it on
[upvote it](https://aur.archlinux.org/packages/libcangjie/). You can install it
with `yay`:

```
$ yay -S libcangjie
```

## Debian Unstable / Sid

libcangjie is included in the default Debian repositories, so you can just
install it with `apt-get`, as the root user:

```
# apt-get install libcangjie2
```

Note that if you need the development headers, then you should also install
the `libcangjie2-dev` package.

## Fedora

libcangjie is included in the default Fedora repositories, so you can just
install it with `yum`:

```
$ sudo yum install libcangjie
```

Note that if you need the development headers, then you should also install
the `libcangjie-devel` package.

## Gentoo

Libcangjie is included in the Gentoo repositories. It is currently masked.
You will need to add "app-i18n/libcangjie" to your /etc/portage/package.accept_keywords
or use autounmask. Once unmasked install as root with :

```
$ emerge app-i18n/libcangjie
```

## Ubuntu 14.04 or later

libcangjie is included in the default Ubuntu repositories, **starting with the
14.04 release**, so you can install it with `apt-get`:

```
$ sudo apt-get install libcangjie2
```

Note that if you need the development headers, then you should also install
the `libcangjie2-dev` package.

## NixOS

libcangjie is included in the default NixOS channel, **starting with the
14.02 release**, so you can install it with `nix-env`:

```
$ nix-env --install libcangjie
```

## Build from the sources

### Dependencies

To build this library, you will need the following:

* a C compiler and library (we recommend GCC and the GNU C library)
* the SQLite3 library and development headers

### Install from a release tarball

Download a release tarball from
[the releases section](https://gitlab.freedesktop.org/cangjie/libcangjie/-/releases) on
Freedesktop.org.

Installation requires [meson](https://mesonbuild.com/) build system to run.
After installing meson, from the root folder of the unpacked tarball, run:

```
$ meson setup ./builddir --prefix=/usr --wipe
$ meson build ./builddir
$ meson install -C ./builddir
```

If you have want to test against ibus-cangjie on your system but ibus-cangjie is
already running before this process, remember to restart ibus daemon to reload
the newly built and installed version:

```
$ ibus restart
```

### Install from Git

First, you need to clone the development repository:

```
$ git clone https://gitlab.freedesktop.org/cangjie/libcangjie.git
```

Then, from the root folder of the Git clone, do the usual Autotools dance:

```
$ ./autogen.sh
$ make
$ sudo make install
```
