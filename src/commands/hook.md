# `hook`

## Description
Manage hooks. Hooks are commands that are executed before or after a specific command.

## Usage

```bash
buildcli hook [subcommands] <args>
```

## Subcommands

| Option             | Description                                                                                                               |
|--------------------|---------------------------------------------------------------------------------------------------------------------------|
| `add`  | Add a hook to a command. Args: `[before/after] "[command]" "[hookCommand]"`|
| `remove`   | Remove a hook from a command. Args: `[before/after] "[command]"`                                                    |
| `list`  | Remove a hook from a command. No args are needed. |



## Examples

### Example 1

This will execute 'project clean' before 'project build'.
You can use `b` as an alias for `before` and a for `after`.

```bash
buildcli hook add b "project build" "project
```

### Example 2

This will remove any command that run after 'project build'

```bash
buildcli hook remove a "project build"
```

### Example 3

This will display all registered hooks and their associated commands.

```bash
buildcli list
```

## See Also

- [ai](ai.md)
<!-- - [plugin](plugin.md) -->
- [config](config.md)
