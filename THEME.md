# Neo-Brutalism Theme — BrandEx v1.0

Complete design reference for the Neo-Brutalism (BrandEx) theme.
Use these specs for all future components, pages, and UI additions.

## 1. Color palette

| Color Name | Hex | CSS Variable | Usage |
| --- | --- | --- | --- |
| Near-Black | `#0C0C0C` | `--bg2` / `--black` | Navbar, borders, shadows, text on cream |
| Warm Cream | `#F0E8D0` | `--bg` | Page background |
| Deep Cream | `#E8DFC7` | `--bg-alt` | Alternate rows / sections |
| Off-White | `#FAF6EE` | `--panel` | Cards, inputs |
| Burnt Orange | `#C94A00` | `--accent` | CTA, active nav |
| Dark Teal | `#0A6B52` | `--accent4` | Success / section fills |
| Bright Teal | `#0D9970` | `--accent2` | Links, badges |
| Bold Yellow | `#D4A800` | `--accent3` | Stamps, warnings |
| Maroon mark | `#7A1F1F` | — | Logo square |
| Gold mark | `#C9A227` | — | Logo ring / subtitle |

## 2. Typography

- **Display:** Bebas Neue — headings, stat numbers, stamps
- **Body:** Space Grotesk 400/500/700
- **Labels:** DM Mono 500 — badges, nav, uppercase labels

## 3. Borders & shadows

- `--border-thick`: 3px solid `#0C0C0C`
- `--shadow`: `5px 5px 0 #0C0C0C` (no blur)
- `--shadow-sm`: `3px 3px 0 #0C0C0C`
- Radius: **0px** on inputs; **6px max** on buttons/cards
- Hover: `translate(-3px,-3px)` + larger shadow
- Active: `translate(+3px,+3px)` + shadow 0

## 4. Standard chrome

### Header (`.bx-nav`)

- Always `#0C0C0C`, sticky, height 58px
- Logo mark: maroon square + gold circle **R**
- Wordmark: BRANDEX LAW ASSOCIATES + Trademark & IP Registry
- Links: Home · Application · Records (active = orange fill)

### Footer (`.bx-footer`)

- Cream bg, top border 3px black
- DM Mono uppercase, teal CMS link

## 5. Golden rules

- Zero gradients, zero blur shadows, zero glassmorphism
- Everything outlined — no floating unbordered elements
- Shadow direction: bottom-right only
- Dark navbar never changes
