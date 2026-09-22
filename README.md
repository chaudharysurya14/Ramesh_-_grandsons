# RAMESH & GRANDSONS — GitHub Pages V2.1

This version is **fully static and GitHub Pages compatible**.

## Root files

- `index.html` — homepage
- `business.html` — dedicated business-vertical page
- `styles.css` — complete responsive styling
- `app.js` — product catalogue, chatbot, enquiry flow and catalogue manager
- `data/products.json` — starter catalogue
- `assets/` — business card and partner images

## V2.3 architecture update

- The R&G homepage is now a **corporate group page only**; the electronics catalogue is not shown on the group homepage.
- **Ramesh Radio Center** is a dedicated business page at `business.html?key=electronics` and contains the full electronics catalogue, search/filter, marketplace links and brands.
- **Volt-Care is not one of the six core businesses.** It is an associated company and appears only in its dedicated associated-company section on the R&G homepage.
- Product images are stored under `assets/products/` and seeded into the catalogue with working relative paths.

## Features included

1. Corporate responsive homepage
2. About section with larger readable content
3. Clickable Our Businesses cards
4. Dedicated business page for:
   - Ramesh Radio Center
   - E-Commerce
   - Import / Export
   - IT / Services
   - Manufacturing
   - Trading
5. Volt-Care section
6. Electronics product catalogue
7. Amazon, Meesho and Flipkart links
8. WhatsApp product enquiry
9. Business enquiry form -> WhatsApp
10. Business card preview + download
11. Partner/leadership section
12. Basic business chatbot
13. Browser-based Catalogue Manager
14. Add/edit/delete product records
15. Import/export `products.json`
16. Mobile responsive design

## Important GitHub Pages limitation

GitHub Pages cannot run Node.js, PHP or a database server. Therefore this version does NOT expose a real server-side admin panel.

The Catalogue Manager uses browser `localStorage`. This is useful for editing/testing on the computer you use, but those changes are **not automatically published to every visitor**.

### To publish a catalogue change

1. Open the website.
2. Open `Catalogue Manager`.
3. Add/edit products.
4. Click `Export products.json`.
5. Download the JSON file.
6. Replace `data/products.json` in the GitHub repository with that file.
7. Commit/push the change.
8. GitHub Pages will rebuild the website.

For images, put product images in `assets/products/` in the repository and use paths such as:

`assets/products/pigeon-iron.jpg`

Then export/update the JSON and commit it.

## GitHub Pages setup

1. Create a new GitHub repository, e.g. `ramesh-grandsons`.
2. Upload the **contents of this folder**, not the ZIP itself.
3. Make sure `index.html` is directly in the repository root.
4. Go to:
   `Settings` → `Pages`
5. Under Build and deployment choose:
   `Deploy from a branch`
6. Branch:
   `main`
7. Folder:
   `/ (root)`
8. Save.
9. GitHub will provide the Pages URL.

## Custom domain

Later, you can connect your domain from:
`Settings` → `Pages` → `Custom domain`.

Then create the DNS records recommended by GitHub.

## Chatbot

The chatbot included here is a client-side rule-based assistant. It can answer common questions about:
- products
- prices
- brands
- Amazon
- Meesho
- Flipkart
- address
- phone numbers
- email
- Volt-Care

For a true AI chatbot that can understand free-form questions, use your catalogue as knowledge, collect leads and notify you automatically, a secure backend/API integration is required. Do not put an AI API key in `app.js` or any other public GitHub file.

## Security

The Catalogue Manager is NOT a secure admin authentication system because this is a public static site. Do not put passwords, API keys, GST documents, private customer data or secret tokens in the repository.

For a real multi-user admin system with cloud product storage, use a backend/database or a managed CMS later.


## V2.2 corrections
- Volt-Care is now presented as an **associated company**, not a new business vertical.
- Volt-Care is shown separately from the six business-vertical cards.
- The **Our Partners** section is retained.
- Representative electronics product images have been added under `assets/products/`.
- Starter catalogue entries now point to those images.
- Replace representative images with exact product/model photos before publishing a specific SKU listing.
