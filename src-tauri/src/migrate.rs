//! One-time move of app data from the old bundle identifier (`com.tablory.app`,
//! up to 0.1.2) to the current one. Saved connections live in the config dir
//! and query history / open query tabs in the webview's localStorage, both of
//! which are keyed by the identifier. Runs before any window or store exists.

use std::path::PathBuf;

const OLD_ID: &str = "com.tablory.app";

pub fn run(new_id: &str) {
    for base in base_dirs() {
        let old = base.join(OLD_ID);
        let new = base.join(new_id);
        if old.is_dir() && !new.exists() {
            // Best effort: on failure the app starts fresh and the old data stays put.
            let _ = std::fs::rename(&old, &new);
        }
    }
}

/// Parents of the identifier-named dirs: the config dir (app_config_dir) and
/// the webview data dir.
fn base_dirs() -> Vec<PathBuf> {
    let env = |k: &str| std::env::var_os(k).map(PathBuf::from);
    if cfg!(target_os = "macos") {
        env("HOME")
            .map(|h| {
                vec![
                    h.join("Library/Application Support"),
                    h.join("Library/WebKit"),
                ]
            })
            .unwrap_or_default()
    } else if cfg!(windows) {
        // %APPDATA%\<id> holds the config; %LOCALAPPDATA%\<id>\EBWebView the webview data.
        [env("APPDATA"), env("LOCALAPPDATA")]
            .into_iter()
            .flatten()
            .collect()
    } else {
        Vec::new()
    }
}
