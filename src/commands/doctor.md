# `doctor`

## Description

Analyzes the environment to ensure all necessary tools and dependencies are available and functioning correctly. Provides subcommands for diagnosing issues and applying fixes, ensuring smooth execution of other commands.

## Usage

```bash
buildcli doctor [subcommand]
```

## Options

| Option          | Description                                                                                              |
|-----------------|----------------------------------------------------------------------------------------------------------|
| `scan`          | Performs a comprehensive scan of the environment to check for required tools, their installation status, versions, and readiness (e.g., running state for Docker). Provides detailed instructions for installing missing tools. |
| `fix`         | Scans the environment for required tools and dependencies, identifies issues, and attempts to automatically resolve them. This command ensures the build system is properly configured and ready for use.                         |

## Examples

### Example 1

Perform a comprehensive scan to ensure all necessary tools are installed and configured correctly.

```bash
buildcli doctor scan
```

### Example 2

Automatically identify and resolve issues with required tools and dependencies.

```bash
buildcli doctor fix
```

## See Also

- [project](project.md)
- [autocomplete](autocomplete.md)
