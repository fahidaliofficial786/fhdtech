# FHDTech Website

This project is a high-performance, production-ready website built with **TanStack Start**, **React 19**, **Tailwind CSS v4**, and **TypeScript**. It is fully optimized and configured for seamless deployment to **Cloudflare**.

## 🚀 Features & Production Optimization

- **Zero Errors**: TypeScript compilation (`tsc`) and ESLint checks pass with 0 errors.
- **Auto-Formatted**: All files have been clean-formatted using Prettier.
- **Production Build**: Compiles successfully using the `cloudflare-module` preset.
- **Clean Repository**: Extra files (like backup zip archives) have been removed.

---

## 🛠️ Local Development

First, ensure you have dependencies installed:

```bash
npm install
```

To run the development server locally:

```bash
npm run dev
```

To format and lint the codebase:

```bash
# Format codebase with Prettier
npm run format

# Run ESLint check
npm run lint
```

---

## 📤 1. Uploading to GitHub

To upload this project to your GitHub repository:

1. **Initialize Git** (if not already done):

   ```bash
   git init
   ```

2. **Stage and commit your files**:

   ```bash
   git add .
   git commit -m "chore: prepare project for production deployment"
   ```

3. **Create a new repository on GitHub**, then run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

_(Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name)._

---

## ☁️ 2. Hosting on Cloudflare

This project is built using **Nitro** with the `cloudflare-module` preset. This generates a production-ready Cloudflare Worker with static assets configured.

### Option A: Deploying via Wrangler CLI (Fastest)

You can deploy the pre-built project directly using Cloudflare Wrangler:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy using Wrangler:
   ```bash
   npx wrangler deploy --config .output/server/wrangler.json
   ```

### Option B: Deploying via GitHub Git Integration

To set up continuous deployment (CD) so that every push to GitHub automatically deploys to Cloudflare Pages/Workers:

1. Go to the **Cloudflare Dashboard** -> **Workers & Pages** -> **Create**.
2. Select **Pages** and click **Connect to Git**.
3. Choose your GitHub repository.
4. Set the build settings:
   - **Framework Preset**: `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `.output/public`
5. Click **Save and Deploy**.

---

## 📂 Project Structure

- `src/routes/` - App pages/routing (using TanStack Router).
- `src/components/` - Shared UI elements and site components (shadcn/ui).
- `src/lib/` - Utility functions and service/business data.
- `public/` - Static public assets (favicons, robots.txt).
