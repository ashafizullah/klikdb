# Changelog

## 0.1.9

- The connections sidebar links to KlikDB on GitHub, next to Open-source licenses (before: Licenses)

## 0.1.8

- Third-party notices now give a source link for the MPL-2.0 crates
- The app's copyright line now names its author

## 0.1.7

- Third-party license notices now include every Rust crate, with the full license and notice texts for packages under more than one license
- Navicat import credits HyperSine's write-up of Navicat's password encryption

## 0.1.6

- Passwords, query history, query tabs and panel state are now stored under the KlikDB name only. Ones saved by earlier versions are not read anymore: enter saved passwords again; history and open query tabs start empty
- Updating straight from 0.1.4 or earlier: saved connections are not carried over either; add them again or import them from Navicat

## 0.1.5

- App identifier changed from `com.klikdb.app` to `com.ashafizullah.klikdb`, matching the other Klik apps. Saved connections, query history and open query tabs move over on first launch, also when updating straight from Tablory (0.1.2 or earlier). On macOS, the keychain may ask once per saved password; choose Always Allow.
- Licenses, at the bottom of the connections screen, shows the license of every bundled package, the fonts included

## 0.1.4

- New Darkroom look, matching KlikReel and KlikDesign: warm paper in light mode, warm charcoal in dark mode, tungsten-amber accents, warmer syntax colors and new typography (IBM Plex Sans, IBM Plex Mono and Fraunces, bundled so they work offline)

## 0.1.3

- App identifier changed from `com.tablory.app` to `com.klikdb.app`. Saved connections, query history and open query tabs move over on first launch. On macOS, the keychain may ask once per saved password; choose Always Allow.

## 0.1.2

- Renamed to KlikDB, with a new icon and installer artwork. Saved connections, passwords and history carry over. On Windows the update installs as KlikDB; uninstall the old Tablory entry afterwards.
- Connection tree: connection → database → tables, views, functions and procedures; right-click to disconnect, close or reopen. Groups can have a color.
- Connection groups: right-click the connection list to create, rename or delete groups; drag connections between groups.
- Import connections from a Navicat export (`.ncx`), including saved passwords.
- SQL Server: Windows authentication, named instances (`server\INSTANCE`, `.`, `(local)`) and LocalDB.
- Safety: DELETE/UPDATE without WHERE, TRUNCATE and DROP ask first. Per-connection Production (asks before every write, manual commit) and Read-only modes.
- Manual commit mode with a Commit / Roll back bar.
- SQL editor: richer highlighting, column autocomplete with types, searchable query history, and query tabs that can be saved and opened as `.sql` files and come back on reconnect.
- Export results to CSV, Excel or JSON, or copy them as INSERT statements.
- Native menu bar with File, View and Help, including About and Check for Updates.

## 0.1.1

- macOS build is now signed with a Developer ID and notarized by Apple, so it opens without the Gatekeeper warning.

## 0.1.0

- PostgreSQL, MySQL / MariaDB, SQL Server, SQLite, Redis and MongoDB connections, optionally through an SSH tunnel.
- Table browser with paging, sorting and filters.
- Inline editing with SQL preview and transactional commit.
- SQL editor with multi-statement results and query cancel.
- Redis key browser, typed value editors and command console.
- MongoDB collection browser, document editor and database commands.
