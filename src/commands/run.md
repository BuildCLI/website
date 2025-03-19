# `run`

## Description
Run projects or features related to docker 

## Usage

```bash
buildcli run [<file-or-dir>] [<args>...] [SUBCOMMAND]
```

## Parameters

| Option             | Description                                                                                                               |
|--------------------|---------------------------------------------------------------------------------------------------------------------------|
| `[<file-or-dir>]`  | The file or directory to run. If a directory, it will package and run the project.|
| `[<args>...]`   | Arguments to pass to the program.        |

## Subcommands

| Option             | Description                                                                                                               |
|--------------------|---------------------------------------------------------------------------------------------------------------------------|
| `dockerfile`, `docker`, `d`   | Builds and runs a Docker image for the project. Builds the Docker image and starts the container, exposing port 8080.|

## Examples

### Example 1

This will execute `Hello.java` file.
```bash
buildcli run Hello.java
```

### Example 2

This will the docker file named "yourdockerfile"

```bash
buildcli run docker -n "yourdockerfile"
```


## See Also

- [ai](ai.md)
<!-- - [plugin](plugin.md)-->
- [config](config.md) 
