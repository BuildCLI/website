# `config`

## Description
Analyzes the environment to ensure all necessary tools and
                      dependencies are available and functioning correctly.
                      Provides subcommands for diagnosing issues and applying
                      fixes, ensuring smooth execution of other commands.

## Usage

```bash
buildcli config [options] [subcommands]
```

## Subcommands

| Option             | Description                                                                                                               |
|--------------------|---------------------------------------------------------------------------------------------------------------------------|
| `set`, `s`  | Set configuration properties for BuildCLI. |
| `clear`, `c`   | Clear config file                                                    |
| `init`, `i`, `create`  | Initializes a new configuration context for BuildCLI. |
| `print`, `p`, `show`,`list`   | Prints the current configuration.                                                    |
| `remove`, `rm`, `r`  | Removes specified configuration properties from BuildCLI. |


## Options

| Option             | Description                                                                                                               |
|--------------------|---------------------------------------------------------------------------------------------------------------------------|
| `--global`, `-g`  | Release version to label the generated changelog (e.g., 1.2.3). If not specified, use the latest Git tag or 'Unreleased'. |
| `--local`, `-l`   | Output format. Supported: markdown, html and json. (default: markdown)                                                    |


## Examples

### Example 1

Set local configuration properties for BuildCLI.

```bash
buildcli -l init
```

### Example 2

Defines AI vendor as Ollama.

```bash
buildcli -g set buildcli.ai.vendor=ollama
```

### Example 3

Print BuildCLI configurations

```bash
buildcli print
```

### Example 4

Removes specified configuration properties from BuildCLI.

```bash
buildcli remove set buildcli.ai.vendor=ollama
```

### Example 5

Clear config file

```bash
buildcli clear
```

## See Also

- [doctor](doctor.md)
- [project](project.md)
- [autocomplete](autocomplete.md)
