// Charge les fichiers HTML partiels dans les éléments [data-include]
async function loadSections() {
    const includes = document.querySelectorAll('[data-include]');
    const fetches = Array.from(includes).map(async (el) => {
        const file = el.getAttribute('data-include');
        const response = await fetch(file);
        const html = await response.text();
        el.outerHTML = html;
    });
    await Promise.all(fetches);
}

loadSections().then(() => {
    // Déclenche un événement pour signaler que les sections sont chargées
    document.dispatchEvent(new Event('sections-loaded'));
});
