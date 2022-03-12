[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/yezhengkai/yezhengkai.github.io)

## Create personal icon
Use the [Iconfinder](https://www.iconfinder.com/) online icon editor to design your icons.

## Build docker container
Install `docker` and `remote-container` of VSCode extension.

## Create website from template
```bash
npx @docusaurus/init@latest init website classic
```

## Start Docusaurus and edit website
```bash
./start_docusaurus.sh
```

## Set docusaurus.config.js

### Change default icons
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

## References
- [VSCode: Developing inside a Container](https://code.visualstudio.com/docs/remote/containers)
- [VSCode: Create a development container](https://code.visualstudio.com/docs/remote/create-dev-container)
- [VSCode: devcontainer command line interface](https://code.visualstudio.com/docs/remote/devcontainer-cli)
- [VSCode: devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)
- [GitHub: johnnyreilly/blog.johnnyreilly.com](https://github.com/johnnyreilly/blog.johnnyreilly.com)
- [GitLab: docker-containers/docusaurus-container](https://gitlab.iotiot.in/repo-public/docker-containers/tree/master/cusaurus-container)
- [GitHub: awesometic/docker-docusaurus](https://github.com/awesometic/docker-docusaurus)