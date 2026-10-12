# charles-owusu.netlify.app

Personal website of **Charles Owusu Agyapong**, Civil Engineer and Project Manager.

## How it works

- The whole site is one page: `frontend/index.html` (HTML, CSS and a little JavaScript in one file).
- Photos and the CV PDF live in `frontend/public/` and are copied to the site as-is.
- Netlify builds from the `main` branch: base directory `frontend`, command `npm run build`, publish directory `frontend/dist`.
- Every push to `main` publishes the site automatically, usually within a minute.

## Updating

1. Edit `frontend/index.html` (on GitHub: open the file and click the pencil icon).
2. To replace a photo or the CV, upload a new file to `frontend/public/` with the same name.
3. Commit to `main`. Netlify publishes the change.

To preview locally: `cd frontend && npm install && npm run dev`.

## Contact form

The form uses Netlify Forms (form name `contact`). Submissions appear under **Forms** in Netlify and are emailed to the owner. Visitors can also send the same message through WhatsApp.

## Keep secrets out

Never commit `.env` files or passwords. This repository is public.
