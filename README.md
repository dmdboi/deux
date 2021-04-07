Deux
======

A generator for building better Express apps

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/deux.svg)](https://npmjs.org/package/deux)
[![Downloads/week](https://img.shields.io/npm/dw/deux.svg)](https://npmjs.org/package/deux)
[![License](https://img.shields.io/npm/l/deux.svg)](https://github.com/dmdboi/deux/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g express-deux
$ deux COMMAND
running command...
$ deux (-v|--version|version)
express-deux/1.5.0 win32-x64 node-v14.16.0
$ deux --help [COMMAND]
USAGE
  $ deux COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`deux controller NAME`](#deux-controller-name)
* [`deux help [COMMAND]`](#deux-help-command)
* [`deux model NAME`](#deux-model-name)
* [`deux routes NAME`](#deux-routes-name)
* [`deux service NAME`](#deux-service-name)
* [`deux template NAME DIR`](#deux-template-name-dir)
* [`deux uuid`](#deux-uuid)

## `deux controller NAME`

Creates a Controller file from template.

```
USAGE
  $ deux controller NAME
```

_See code: [src/commands/controller.js](https://github.com/dmdboi/deux/blob/v1.5.0/src/commands/controller.js)_

## `deux help [COMMAND]`

display help for deux

```
USAGE
  $ deux help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `deux model NAME`

Creates a Model file from template.

```
USAGE
  $ deux model NAME
```

_See code: [src/commands/model.js](https://github.com/dmdboi/deux/blob/v1.5.0/src/commands/model.js)_

## `deux routes NAME`

Creates a Route file from template.

```
USAGE
  $ deux routes NAME
```

_See code: [src/commands/routes.js](https://github.com/dmdboi/deux/blob/v1.5.0/src/commands/routes.js)_

## `deux service NAME`

Creates a Service file from template.

```
USAGE
  $ deux service NAME
```

_See code: [src/commands/service.js](https://github.com/dmdboi/deux/blob/v1.5.0/src/commands/service.js)_

## `deux template NAME DIR`

Clones an existing Express app repository.

```
USAGE
  $ deux template NAME DIR
```

_See code: [src/commands/template.js](https://github.com/dmdboi/deux/blob/v1.5.0/src/commands/template.js)_

## `deux uuid`

Generates a v4 UUID

```
USAGE
  $ deux uuid
```

_See code: [src/commands/uuid.js](https://github.com/dmdboi/deux/blob/v1.5.0/src/commands/uuid.js)_
<!-- commandsstop -->
