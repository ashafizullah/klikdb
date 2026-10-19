# Contributing to KlikDB

Thanks for helping out! KlikDB is maintained by one person, so a little coordination up front saves everyone time.

## Before you start

- **Bug fixes and small improvements**: open a pull request directly.
- **New features or larger changes** (for example a new database engine): open an issue first so we can agree on the approach before you write the code.
- Check the open issues and pull requests to avoid duplicate work.

## Submitting a change

1. Fork the repository and clone your fork.
2. Create a branch from `main`, e.g. `git checkout -b fix/postgres-array-columns`.
3. Make your change and run the checks below.
4. Push the branch and open a pull request against `main`. Describe what changed and why, and add a screenshot or short clip for UI changes.

CI runs on every pull request. For a first-time contributor, GitHub waits for the maintainer to approve the run, so don't worry if it doesn't start right away.

## Development setup

Requires Node.js 22 and stable Rust. On Linux, also install the [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/#linux).

```sh
npm install
npm run tauri dev      # run the app
npm run tauri build    # bundle
```

## Checks

These are the same checks CI runs. Please make sure they pass before opening a pull request:

```sh
npm run check
npm run build          # the Rust build embeds the frontend, so build it first

cd src-tauri
cargo fmt --check
cargo clippy --all-targets -- -D warnings
cargo test
```

Without `KLIKDB_TEST_DOCKER`, `cargo test` runs the unit tests and the SQLite test. If you change a database driver, connection handling or SSH tunnels, also run the integration tests against local databases and an SSH bastion:

```sh
ssh-keygen -t ed25519 -N '' -f dev/ssh/id_ed25519   # once, test key for the bastion
docker compose -f dev/docker-compose.yml up -d --build
cd src-tauri && KLIKDB_TEST_DOCKER=1 cargo test
```

## Guidelines

- **Keep pull requests focused**: one fix or feature per PR. Unrelated refactors are easier to review on their own.
- **Safety first**: KlikDB connects to real, often production, databases. Changes must never run a write the user didn't ask for, and destructive statements must keep going through the confirmation flow (`src/lib/sqlguard.ts`).
- **Dependencies**: ask in an issue before adding a new dependency.
- **Commit messages**: a short summary in the imperative mood, e.g. `Fix array columns in the Postgres grid`.
- **Versions and changelog**: leave `CHANGELOG.md` and version numbers alone; they are updated at release time. Describe user-facing changes in the PR instead.
- **Secrets**: never commit or paste real hostnames, connection strings, passwords or SSH keys into code, issues or screenshots.

## Reporting bugs

Open an issue with:

- the KlikDB version and your OS
- the database engine and version (e.g. PostgreSQL 16, MySQL 8, Redis 7)
- steps to reproduce
- what you expected and what happened
- relevant logs or screenshots, with credentials and private data removed

## Security issues

Please don't report security problems in a public issue. Use **Report a vulnerability** on the repository's Security tab instead.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
