# SĀBAN — V2

Open index.html, or serve this folder with `python -m http.server 8000` and visit http://localhost:8000.
Keep photos/, icons/, style.css, script.js and config.js beside the HTML files. No build step is required.

## Implemented
- Preferred Photo 1 hero extracted from the supplied PDF; Beyond Bar label and Where the Spa Comes Home heading.
- Human shower photograph, distinct experience heading sizes and sage green copy callouts.
- Removed the redundant Everyday, Elevated feature and updated the massage nodules section.
- Consistent product photography, removed upper benefit kickers, retained lower benefit lines.
- Individual Vitality, Glow, Detox, Velvet and Moisture pages with Description, Ingredients/Scent, The Ritual and Sustainability accordions.
- Four value icons under every product: Made in Canada, 100% Vegan, Ethically Sourced, Hand Crafted.
- Pastel Ritual Finder choices now update the product image and link to its product page.
- Five-entry botanical list, revised science wording, revised story copy and close-up nodules image.
- FAQ page with Products, Company and Shipping categories and expandable answers.
- Shipping/returns page with supplied rates, delivery times and return conditions; footer links updated.
- Olive community section, accessible native-dialog signup popup, consent field and contact/help shortcut.
- Real testimonial rendering and footer payment-method display configurable in config.js.

## Items to connect or confirm
1. Set newsletterEndpoint and contactEndpoint in config.js to your HTTPS form backends. Both receive JSON. The code reports success only after a successful HTTP response; no addresses or messages are stored locally. Until connected, submission displays an honest unavailable message.
2. Add approved customer quotes to config.js testimonials. The empty state invites customers to share a review instead of showing invented testimonials.
3. Add confirmed accepted payment methods to config.js paymentMethods. No payment-provider claims appear by default. A payment checkout, cart, search and customer accounts were not supplied and are not implemented. Product pages offer an enquiry link.
4. The PDF explicitly lists Moisture as 25 G; V2 preserves 25 G. Confirm whether 125 G was intended. All other bars are 125 G. Prices remain $19 CAD from V1.
5. The PDF's “GLOVE BAR” is treated as Glow Bar. Ritual instructions use each correct product name. Velvet now references pumice, matching its supplied formulation instead of V1’s volcanic ash.
6. Photos are extracted from the supplied PDF. Glow, Detox, Velvet and Moisture packshots are extracted from the reference screenshots, so replace them with original high-resolution images when available. The annotated nodules image is also extracted from the provided reference. No new product photography was invented.
7. The supplied ingredient, sustainability, vegan, loofah and formulation statements are preserved as brand-provided copy. Confirm final product labels and the Moisture weight before launch.
8. Existing Search, Account, Cart, social links and Journal remain V1 placeholders. Gift/online-order FAQ copy follows the supplied brief and will require checkout support when launched.

## V1 archive
SABAN_V1.zip preserves the six uploaded code files byte-for-byte, with their original names. Original photos and icons were not uploaded. To run V1 with your existing asset folders, rename index(4).html to index.html, style(4).css to style.css, and script(1).js to script.js.

## Source
Changes and imagery: SABAN improvements.pdf. Product information architecture informed by the linked Rocky Mountain Soap product-page reference; all product copy comes from the SĀBAN brief.

## Validation
Browser checked at 1440px desktop and 390px mobile widths. Verified Ritual Finder image/link and selected state, product accordions, community dialog opening/Escape dismissal and mobile navigation. All 11 pages loaded without JavaScript errors or missing images; checked layouts had no horizontal overflow. Local assets, fragment links and duplicate IDs were checked. Live form delivery and payment processing cannot be tested until services are connected.
