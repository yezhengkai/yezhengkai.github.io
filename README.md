# Build docker container
Install `docker` and `remote-container` of VSCode extension.

# Create website
```bash
npx @docusaurus/init@latest init website classic
```

# Start Docusaurus and edit website
```bash
./start_docusaurus/sh
```

# Theme config

```javascript
module.exports = {
  ......
  themeConfig:
    ({
      ......
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: "🌙",
          darkIconStyle: {
            marginLeft: "2px",
          },
          lightIcon: "☀️",
          lightIconStyle: {
            marginLeft: "1px",
          },
        },
      },
    })
}
```

# References
- [VSCode: Developing inside a Container](https://code.visualstudio.com/docs/remote/containers)
- [VSCode: Create a development container](https://code.visualstudio.com/docs/remote/create-dev-container)
- [VSCode: devcontainer command line interface](https://code.visualstudio.com/docs/remote/devcontainer-cli)
- [VSCode: devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)
- [GitLab: docker-containers/docusaurus-container](https://gitlab.iotiot.in/repo-public/docker-containers/tree/master/cusaurus-container)
- [GitHub: awesometic/docker-docusaurus](https://github.com/awesometic/docker-docusaurus)