// Exportar dados para JSON
const exportBtn = document.getElementById('export-json');
const importBtn = document.getElementById('import-json');
const importFile = document.getElementById('import-file');
const syncStatus = document.getElementById('sync-status');

exportBtn.addEventListener('click', () => {
  const dataStr = JSON.stringify(window.damianData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'damian-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

importBtn.addEventListener('click', () => {
  importFile.click();
});

importFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const imported = JSON.parse(evt.target.result);
      window.damianData = imported;
      window.saveDamianData(imported);
      location.reload();
    } catch (err) {
      alert('Arquivo inválido!');
    }
  };
  reader.readAsText(file);
});

// Status de sincronização (offline/online)
function updateSyncStatus() {
  if (navigator.onLine) {
    syncStatus.textContent = 'Online';
    syncStatus.classList.remove('offline');
    syncStatus.classList.add('online');
  } else {
    syncStatus.textContent = 'Offline';
    syncStatus.classList.remove('online');
    syncStatus.classList.add('offline');
  }
}
window.addEventListener('online', updateSyncStatus);
window.addEventListener('offline', updateSyncStatus);
updateSyncStatus();
