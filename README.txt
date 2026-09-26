TOPTANK WEBSITE — IMAGE LIBRARY

All image paths are now grouped in index.html under: TOPTANK COMPLETE IMAGE LIBRARY.

The library covers:
- Homepage banner/slider images (assets/itisha-header-*.png)
- All five category images (assets/images/category-*.jpg)
- Every product in Tanks, Lifestyle, Bins, Road Safety & Industrial, and Sanitation, organized by category folder.

HOW TO EDIT AN IMAGE
1. Open index.html in VS Code.
2. Find “TOPTANK COMPLETE IMAGE LIBRARY”.
3. Locate the category or product key and change the quoted path.
4. Put the corresponding image file in the assets/images/ folder (and category subfolder for products).
5. Keep each product key unchanged; only edit its image path.

Image paths are editable references; add your actual image files to the listed folders. Existing banner images are in assets/.


REMOTE IMAGE URL LIBRARY
-----------------------
Open index.html and search for TOPTANK COMPLETE IMAGE LIBRARY. A sourceUrls.tankExample entry now contains the exact image URL you supplied from toptank.com. Use direct image URLs (ending in .jpg/.jpeg/.png/.webp) as values in categories/products when you have the exact URL. Do not guess WordPress media filenames: incorrect URLs will show broken images. Only one exact source image URL was supplied, so other product URLs have not been invented.


UPDATE: Added the image URLs supplied by the site owner into the centralized source URL library in index.html. These source URLs are stored for easy editing. Product-to-image assignment still depends on matching each URL to the correct product ID in app.js.
