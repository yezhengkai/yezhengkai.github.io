# Rust

## Useful Cargo Commands
- list all installed packages and their versions
  ```bash
  cargo install --list
  ```
- Update dependencies as recorded in the local lock file
  ```bash
  cargo update [options] spec
  ```
- [cargo-asm](https://github.com/gnzlbg/cargo-asm): A cargo subcommand that displays the assembly or llvm-ir generated for Rust source code
- [cargo-binutils](https://github.com/rust-embedded/cargo-binutils): Cargo subcommands to invoke the LLVM tools shipped with the Rust toolchain
- [cargo-edit](https://github.com/killercup/cargo-edit): A utility for managing cargo dependencies from the command line
  - `cargo add` is now integrated into cargo as of v1.62
  - `cargo rm` is now integrated into cargo as of v1.66
  - `cargo upgrade`
  - `cargo set-version`
- [cargo-expand](https://github.com/dtolnay/cargo-expand): Subcommand to show result of macro expansion
- [cargo-outdated](https://github.com/kbknapp/cargo-outdated): A cargo subcommand for displaying when Rust dependencies are out of date
- [cargo-update](https://github.com/nabijaczleweli/cargo-update): A cargo subcommand for checking and applying updates to installed executables

## Useful Crates
- tokio: async
- serde: serialize and deserialize

## Useful tools
- [cargo-watch](https://github.com/watchexec/cargo-watch)
- [nextest](https://github.com/nextest-rs/nextest)
- [sccache](https://github.com/mozilla/sccache)
- [cargo-binstall](https://github.com/cargo-bins/cargo-binstall)

## VS Code extensions
- rest-analyzer
- CodeLLDB
- Dependi/crates-io/cratesx
