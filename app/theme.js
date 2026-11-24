try {
  document.documentElement.dataset.theme =
    localStorage.getItem("finanpro-theme") || "system";
} catch {
  document.documentElement.dataset.theme = "system";
}
