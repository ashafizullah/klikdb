## What and why

<!-- What does this change, and why? Link the issue it fixes, e.g. "Fixes #12". -->

## How to test

<!-- Steps a reviewer can follow to see the change. Add a screenshot or short clip for UI changes. -->

## Checklist

- [ ] `npm run check` and `npm run build` pass
- [ ] `cargo fmt --check`, `cargo clippy --all-targets -- -D warnings` and `cargo test` pass in `src-tauri`
- [ ] Driver or connection changes: ran the integration tests with `KLIKDB_TEST_DOCKER=1`
- [ ] I've read [CONTRIBUTING.md](https://github.com/ashafizullah/klikdb/blob/main/CONTRIBUTING.md)
