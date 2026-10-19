const source = document.getElementById('source');
const preview = document.getElementById('preview');
const escaped = document.getElementById('escaped');
const renderBtn = document.getElementById('renderBtn');
const resetBtn = document.getElementById('resetBtn');

const defaultInput = `<script>alert('oops')</script>\n<strong>hello</strong>\n<img src=x onerror=alert(1)>`;

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeDangerousMarkup(value) {
  return value
    .replace(/<\s*script[^>]*>.*?<\s*\/\s*script\s*>/gi, '')
    .replace(/on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/<\s*iframe[^>]*>.*?<\s*\/\s*iframe\s*>/gi, '')
    .replace(/javascript\s*:/gi, '')
    .replace(/<\s*svg[^>]*>.*?<\s*\/\s*svg\s*>/gi, '');
}

function renderSafePreview() {
  const raw = source.value || '';
  const cleaned = sanitizeDangerousMarkup(raw);
  const escapedValue = escapeHtml(cleaned);

  preview.innerHTML = `
    <p><strong>Safe result:</strong> ${escapedValue}</p>
    <p>This content was escaped before rendering to prevent injection.</p>
    <a href="https://example.com">Example link</a>
  `;

  escaped.textContent = escapedValue;
}

renderBtn.addEventListener('click', renderSafePreview);
resetBtn.addEventListener('click', () => {
  source.value = defaultInput;
  renderSafePreview();
});

source.value = defaultInput;
renderSafePreview();
