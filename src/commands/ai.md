
# `ai code`

## Description

Command to use ai features.

## Usage

```bash
buildcli ai code [subcommand] [options] [path]
```

## Subcommands

| Subcommand      | Description                                 |
|-----------------|---------------------------------------------|
| `comment, c`    | Comments out the selected code.                           |
| `document, docs`    | Generates documentation for the project code.                           |
| `test, t`    | Automatically generates unit tests for source code files using AI. Scans specified files or directories, identifies source files based on provided extensions, and utilizes an AI-powered service to generate corresponding test code. Supports interactive confirmation or auto-acceptance of generated tests.                           |


## Options

| Option          | Description                                         |
|-----------------|-----------------------------------------------------|
| `-c, --context`    | Overwrite the default AI prompt.         |
| `--ext, --extensions`    | java, kt, scala, groovy.         |


## Examples

### Example 1

Generates code review via the terminal with a custom prompt.

```bash
buildcli ai code comment src/main/java/org/myproject --context "Make a quick code review"
```

### Example 2

Documents all project code files with Javadocs.

```bash
buildcli ai code docs src/main/java/org/myproject
```

### Example 3

Automatically generates unit tests for source code files using AI.

```bash
buildcli ai code test src/main/java/org/myproject
```


## See Also

- [autocomplete](autocomplete.md)
- [about](about.md)