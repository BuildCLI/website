# `changelog`

## Description

Prints the changelog for BuildCLI.

## Usage

```bash
buildcli changelog [options]
```

## Options

| Option             | Description                                                                                                               |
|--------------------|---------------------------------------------------------------------------------------------------------------------------|
| `--version`, `-v`  | Release version to label the generated changelog (e.g., 1.2.3). If not specified, use the latest Git tag or 'Unreleased'. |
| `--format`, `-f`   | Output format. Supported: markdown, html and json. (default: markdown)                                                    |
| `--output`, `-o`   | The output file to write the changelog to. If not specified, will use 'CHANGELOG.\<format\>'.                             |
| `--include`, `-i`  | Comma-separated list of commit types to include (default: all).                                                           |

## Examples

### Example 1

Generate a changelog in markdown format.

```bash
buildcli changelog
```

### Example 2

Generate a changelog for a specific version.

```bash
buildcli changelog --version 1.2.3
```

### Example 3

Generate a changelog in HTML format and save to a specific file.

```bash
buildcli changelog --format html --output changelog.html
```

### Example 4

Include only specific commit types in the changelog.

```bash
buildcli changelog --include feat,fix
```

## See Also

- [doctor](doctor.md)
- [project](project.md)
- [autocomplete](autocomplete.md)
