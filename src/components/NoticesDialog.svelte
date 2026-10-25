<script lang="ts">
  // Licenses of the third-party software bundled into the app (THIRD_PARTY_NOTICES.md).
  import { onMount } from "svelte";

  let { onclose }: { onclose: () => void } = $props();
  let text = $state("");

  onMount(() => {
    fetch("/THIRD_PARTY_NOTICES.md")
      .then((r) => r.text())
      .then((t) => (text = t))
      .catch(() => (text = "https://github.com/ashafizullah/klikdb/blob/main/THIRD_PARTY_NOTICES.md"));
  });

  function onkeydown(e: KeyboardEvent) {
    if (e.key === "Escape") onclose();
  }
</script>

<svelte:window {onkeydown} />

<div class="backdrop">
  <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="notices-title">
    <h2 id="notices-title">Open-source licenses</h2>
    <pre>{text || "…"}</pre>
    <div class="actions">
      <span class="grow"></span>
      <button class="btn" onclick={onclose}>Close</button>
    </div>
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgb(0 0 0 / 0.25);
    display: grid;
    place-items: center;
    z-index: 90;
  }
  .dialog {
    width: min(760px, 90vw);
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 10px;
    box-shadow: 0 12px 40px rgb(0 0 0 / 0.25);
  }
  h2 {
    font-family: var(--serif);
    font-size: 17px;
    font-weight: 500;
    margin: 0 0 10px;
  }
  pre {
    flex: 1;
    overflow: auto;
    margin: 0;
    padding: 10px;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    font-family: var(--mono);
    font-size: 11px;
    white-space: pre-wrap;
    -webkit-user-select: text;
    user-select: text;
  }
  .actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }
  .grow {
    flex: 1;
  }
</style>
