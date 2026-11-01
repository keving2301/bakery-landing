# Bakery landing page

A one-page landing site for a fictional neighborhood bakery: a hero, the story, hours and location, a menu of six items and the team. Written in 2020 as a Bootstrap practice project; refreshed in 2026 so it reads well on phones and tablets.

Live: https://bakery-landing.netlify.app

Every name, address, phone number and email on the page is made up. The phone number uses the 555-0100 range and the email address uses example.com.

## What is in it

- `index.html`: the page. Bootstrap 4.5 (CSS from a CDN, with a subresource integrity hash) supplies the grid and utilities.
- `styles.css`: the page's own styles (Niconne and Teko from Google Fonts).
- `scripts.js`: the mobile menu, about 35 lines of plain JavaScript. No jQuery, no animation library.
- `images/`: the photos, resized for the sizes they are shown at (menu photos 640px wide, about 60 to 90 KB each).

Icons are inline SVG, so the page depends on no icon font or kit.

## Run it

It is static files. Open `index.html`, or serve the folder:

```
python3 -m http.server 8000
```

## Deploy

Netlify serves the repository root with no build command (`netlify.toml`).

## Photo credits

The menu, hero, about and team photos came with the 2020 practice project, and their original sources were not recorded. They are used here for demonstration only: replace them with photos you have the rights to before using the page for a real business.
