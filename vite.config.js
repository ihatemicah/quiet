import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Actions sets GITHUB_REPOSITORY=owner/repo. Project pages live at
// https://<user>.github.io/<repo>/ — Vite needs matching base. User/org sites
// use a repo named *.github.io and are served from the domain root.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  !repo || repo.endsWith('.github.io') ? '/' : `/${repo}/`

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
