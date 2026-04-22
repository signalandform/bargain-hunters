/**
 * Edit this file to update copy, hours, and links for the live site.
 */

/** Logo in /public — wide horizontal PNG on black. */
export const brand = {
  logoSrc: "/bhlogofinal.png",
  logoWidth: 1024,
  logoHeight: 406,
} as const;

export const site = {
  name: "Bargain Hunter",
  locationLabel: "Haltom City, TX",
  tagline: "Quality finds at friendly prices—visit us and hunt your next treasure.",
  description:
    "Local resale shop in Haltom City with rotating inventory, everyday deals, and a welcoming team.",

  address: {
    lines: ["4100 Haltom Rd, Suite E", "Haltom City, TX 76117"],
    /** Google Maps embed (no API key). Replace if the pin moves. */
    mapsEmbedSrc:
      "https://www.google.com/maps?q=4100+Haltom+Rd+Suite+E,+Haltom+City,+TX+76117&output=embed",
    /** Opens in Google Maps app / web for directions */
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=4100+Haltom+Rd+Suite+E,+Haltom+City,+TX+76117",
  },

  /** Update to match the store’s real schedule */
  hours: [
    { label: "Monday – Saturday", value: "10:00 AM – 6:00 PM" },
    { label: "Sunday", value: "12:00 PM – 5:00 PM" },
  ],

  social: {
    facebook: "https://www.facebook.com/bargainhunterhc/",
    /** Add URL when available; button hides if empty */
    instagram: "",
    tiktok: "",
    youtube: "",
  },

  testimonials: [
    {
      quote:
        "Always something new on the racks. Staff is helpful and prices are fair—I stop in every week.",
      name: "Maria L.",
      detail: "Local shopper",
    },
    {
      quote:
        "Found great kids’ clothes and home goods in one trip. Easy parking and quick checkout.",
      name: "James T.",
      detail: "Haltom City",
    },
    {
      quote:
        "Love the variety. It feels organized and clean compared to other spots—my go-to for bargains.",
      name: "Aisha K.",
      detail: "Fort Worth area",
    },
  ],
} as const;
