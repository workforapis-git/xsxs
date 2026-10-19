# xsxs

`xsxs` is a tiny XSS-safe playground and demonstration app.

It lets you paste markup or plain text, then safely preview it without letting script tags or unsafe HTML run in the browser.

## Run it locally

Because this is a static app, you can open `index.html` directly in a browser or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## What it does

- Escapes unsafe HTML characters
- Strips common script-like patterns from user input
- Shows a safe preview panel and a raw text view
- Demonstrates sanitization patterns without relying on external libraries
