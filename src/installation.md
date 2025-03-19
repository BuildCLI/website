# Installation

> [!IMPORTANT] Pre-requisites
> Before installing BuildCLI, ensure that you have the following prerequisites installed on your system:
>
> - [Git](https://git-scm.com/downloads)
> - [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
> - [Apache Maven](https://maven.apache.org/download.cgi)

BuildCLI is a command-line interface (CLI) tool for managing and automating common tasks in Java project development. It
allows you to create, compile, manage dependencies, and run Java projects directly from the terminal, simplifying the
development process.

## Install from source

::: code-group

```bash [Windows]
@echo off
setlocal
git clone https://github.com/BuildCLI/BuildCLI.git
cd BuildCLI
mvn clean package
if not exist "%USERPROFILE%\bin" mkdir "%USERPROFILE%\bin"
copy /Y cli\target\buildcli.jar "%USERPROFILE%\bin\buildcli.jar"
(
 echo @echo off
 echo java --enable-preview --add-modules jdk.incubator.vector -jar "%USERPROFILE%\bin\buildcli.jar %*"
) > "%USERPROFILE%\bin\buildcli.bat"
echo %PATH% | findstr /I "%USERPROFILE%\bin" >nul || (
 setx PATH "%%PATH%%;%USERPROFILE%\bin"
)
endlocal
```

```bash [Linux]
git clone https://github.com/BuildCLI/BuildCLI.git 
cd BuildCLI
mvn clean package
mkdir -p "$HOME/bin"
cp cli/target/buildcli.jar "$HOME/bin/"
cat <<EOF > "$HOME/bin/buildcli"
#!/bin/bash
java -jar "\$HOME/bin/buildcli.jar" "\$@"
EOF
chmod +x "$HOME/bin/buildcli"
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

```bash [Mac]
git clone https://github.com/BuildCLI/BuildCLI.git 
cd BuildCLI
mvn clean package
mkdir -p "$HOME/bin"
cp cli/target/buildcli.jar "$HOME/bin/"
cat <<EOF > "$HOME/bin/buildcli"
#!/bin/bash
java -jar "\$HOME/bin/buildcli.jar" "\$@"
EOF
chmod +x "$HOME/bin/buildcli"
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

:::

Now `BuildCLI` is ready to use. Test the `buildcli` command in the terminal.
