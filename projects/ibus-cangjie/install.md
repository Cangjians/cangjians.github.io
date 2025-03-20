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
install it with your favorite software installer, e.g GNOME Software.

If you want the Cangjie input method:

![IBus Cangjie (Cangjie) in GNOME Software](/images/software-cangjie.png "Cangjie in GNOME Software")

If you prefer the simpler Quick (or "Simplified Cangjie") input method:

![IBus Cangjie (Quick) in GNOME Software](/images/software-quick.png "Quick in GNOME Software")


If you are a CLI fan, install with `dnf`:

* for Cangjie:

```
$ sudo dnf install ibus-cangjie-engine-cangjie
```

* for Quick:

```
sudo dnf install ibus-cangie-engine-quick
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

### Prerequisites

To build and run the latest development version of IBus Cangjie, you will need
to install the following:

* [Python][python] >= 3.10
* [IBus][ibus] >= 1.5 (with GObject introspection bindings v1.0)
* [GLib][glib] (with GObject introspection bindings v2.0)
* [Gtk][gtk] (with GObject introspection bindings v4.0)
* [Gdk][gdk] (with GObject introspection bindings v4.0)
* [pycangjie][pycangjie]
* [libcangjie][libcangjie]

Some Linux distributions already provide packages of them. Please consult your
Linux distribution for relevant instructions.

[python]: https://www.python.org/
[ibus]: https://github.com/ibus/ibus/wiki/ReadMe
[glib]: https://gitlab.gnome.org/GNOME/glib
[gtk]: https://www.gtk.org/
[gdk]: https://docs.gtk.org/gdk3/
[pycangjie]: https://cangjie.pages.freedesktop.org/projects/pycangjie/
[libcangjie]: https://cangjie.pages.freedesktop.org/projects/libcangjie/

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