import type { Tour } from "./types";

// Edit this file to change tours. Add a photo by setting `image: "/tours/<slug>.jpg"`
// (file goes in /public/tours) and a price by setting `priceFrom` (USD per person).
export const tours: Tour[] = [
  {
    "id": 1,
    "slug": "ubud-early-start-private-tour-with-entry-fees-included",
    "title": "Ubud: Early-Start Private Tour with Entry Fees Included",
    "region": "Ubud & Central",
    "interest": "Culture",
    "format": "Private",
    "duration": "9 hours",
    "hours": 9.0,
    "start": "07:00",
    "summary": "Beat the crowds on a private Ubud day with a driver-guide. See Tegalalang rice terraces, Tirta Empul and the Monkey Forest with every entrance fee covered.",
    "highlights": [
      "Visit Tegalalang before the tour buses, when it opens at 6:00 AM",
      "Explore Tirta Empul's holy spring temple with a guide who explains the rituals",
      "Walk the Sacred Monkey Forest and Tegenungan Waterfall",
      "Skip ticket queues with all entrance fees included"
    ],
    "itinerary": [
      {
        "time": "07:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Tegalalang Rice Terrace, 60 min"
      },
      {
        "text": "Tirta Empul Temple, 60 min (opens 08:00)"
      },
      {
        "text": "Lunch stop, 60 min"
      },
      {
        "text": "Tegenungan Waterfall, 45 min"
      },
      {
        "text": "Sacred Monkey Forest, 60 min"
      },
      {
        "text": "Tibumana and Taman Sari hidden cascades, 45 min (quiet, no swimming directly under the fall)"
      },
      {
        "text": "About 16:30 drop-off"
      }
    ],
    "includes": [
      "private air-conditioned vehicle",
      "English-speaking driver-guide",
      "all entrance fees",
      "bottled water",
      "hotel pickup and drop-off"
    ],
    "excludes": [
      "lunch",
      "Tegalalang swing",
      "tips",
      "personal expenses"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu, Kuta and Nusa Dua",
    "options": "option for 1-2 or 3-6 travelers; add-ons for lunch, the Tegalalang swing and an optional Ubud Palace and Art Market stop (45 min, free time)",
    "keywords": [
      "private tour",
      "culture",
      "nature",
      "sightseeing",
      "couples",
      "families"
    ]
  },
  {
    "id": 2,
    "slug": "ubud-hidden-waterfalls-private-tour-with-swim-stops",
    "title": "Ubud: Hidden Waterfalls Private Tour with Swim Stops",
    "region": "Ubud & Central",
    "interest": "Waterfalls & nature",
    "format": "Private",
    "duration": "8 hours",
    "hours": 8.0,
    "start": "07:00",
    "summary": "Skip the busy waterfall stops and visit three quieter ones with a private driver. Chase morning light at Tukad Cepung, then swim at Suwat and Tegenungan.",
    "highlights": [
      "See sunbeams fall through the cliffs at Tukad Cepung",
      "Swim in calm pools at Suwat Waterfall",
      "Visit Tegenungan on the way back",
      "Travel at your own pace with a private driver"
    ],
    "itinerary": [
      {
        "time": "07:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Tukad Cepung Waterfall, 90 min including the 15-20 minute walk in (go early for the light)"
      },
      {
        "text": "Lunch in Bangli, 60 min"
      },
      {
        "text": "Suwat Waterfall, 75 min"
      },
      {
        "text": "Tegenungan Waterfall, 60 min"
      },
      {
        "text": "About 15:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "driver-guide",
      "entrance fees",
      "water",
      "parking"
    ],
    "excludes": [
      "lunch",
      "tips",
      "towels (bring swimwear and a towel)"
    ],
    "meetingPoint": "hotel pickup in Ubud and nearby areas",
    "options": "add-on for lunch; option for a half-day with two waterfalls",
    "keywords": [
      "waterfall",
      "nature",
      "hiking",
      "photography",
      "swimming"
    ]
  },
  {
    "id": 3,
    "slug": "ubud-and-kintamani-private-tour-with-fees-and-lunch",
    "title": "Ubud and Kintamani: Private Tour with Fees and Lunch",
    "region": "Ubud & Central",
    "interest": "Culture",
    "format": "Private",
    "duration": "10 hours",
    "hours": 10.0,
    "start": "08:00",
    "summary": "See Ubud's rice terraces and temples, then the Mount Batur and Lake Batur view in Kintamani. Entrance fees, lunch and water are in the price, so nothing is added on the day.",
    "highlights": [
      "Look over Mount Batur and the caldera from Kintamani",
      "Walk the Tegalalang rice terraces",
      "Visit a coffee plantation and taste Balinese coffee",
      "Pay once, with fees, lunch and water included"
    ],
    "itinerary": [
      {
        "time": "08:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Tegalalang Rice Terrace, 60 min"
      },
      {
        "text": "Tirta Empul Temple, 60 min"
      },
      {
        "text": "Coffee plantation, 45 min"
      },
      {
        "text": "Lunch with a Mount Batur view, 75 min"
      },
      {
        "text": "Kintamani viewpoint, 30 min"
      },
      {
        "text": "Penglipuran traditional village walk, 60 min (best before 10 AM or after 4 PM)"
      },
      {
        "text": "About 18:00 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "English-speaking driver-guide",
      "all entrance fees",
      "lunch",
      "bottled water"
    ],
    "excludes": [
      "tips",
      "personal expenses",
      "optional Barong show"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu and Kuta",
    "options": "add-on for the one-hour Barong and Kris show; optional Ubud Market stop (45 min, free time) in place of Penglipuran; option for a half-day version",
    "keywords": [
      "private tour",
      "volcano",
      "coffee",
      "culture",
      "sightseeing"
    ]
  },
  {
    "id": 4,
    "slug": "mount-batur-small-group-sunrise-trek-with-breakfast",
    "title": "Mount Batur: Small-Group Sunrise Trek with Breakfast",
    "region": "Batur & Kintamani",
    "interest": "Trekking",
    "format": "Small group",
    "duration": "9 hours door to door",
    "hours": 9.0,
    "start": "01:00",
    "summary": "Climb Mount Batur in the dark with a local Kintamani guide and watch the sunrise from the summit. Breakfast is cooked on volcanic steam and the group is capped so the trail stays quiet.",
    "highlights": [
      "Trek about 2 hours to the 1,717 m summit before dawn",
      "Watch the sunrise over Lake Batur and Mount Agung",
      "Eat breakfast cooked on natural volcanic steam",
      "Hike with a certified local guide, with a flashlight and walking stick provided"
    ],
    "itinerary": [
      {
        "time": "01:00-02:00",
        "text": "Hotel pickup (depends on your area)"
      },
      {
        "time": "03:30",
        "text": "Meet the guide at the trailhead, briefing and gear"
      },
      {
        "time": "03:45",
        "text": "Start the climb, about 2 hours"
      },
      {
        "text": "About 05:45 summit, sunrise and breakfast, 60 min"
      },
      {
        "text": "Crater rim and black lava walk, 45 min"
      },
      {
        "text": "Descent, about 90 min"
      },
      {
        "text": "About 10:00 return to your hotel"
      }
    ],
    "includes": [
      "hotel pickup and drop-off",
      "local guide",
      "Mount Batur permit",
      "breakfast",
      "flashlight",
      "walking stick",
      "bottled water",
      "insurance"
    ],
    "excludes": [
      "tips",
      "personal expenses"
    ],
    "meetingPoint": "hotel pickup. Travelers staying in Kintamani can meet at the trailhead at 03:30.",
    "options": "option for a short or long route; option for private or group. Long route, about 11 km round trip with 700 m of climbing, is available on request for an extra charge.",
    "keywords": [
      "hiking",
      "sunrise",
      "volcano",
      "adventure",
      "nature"
    ]
  },
  {
    "id": 5,
    "slug": "mount-batur-private-sunrise-trek-hot-spring-and-coffee",
    "title": "Mount Batur: Private Sunrise Trek, Hot Spring and Coffee",
    "region": "Batur & Kintamani",
    "interest": "Trekking",
    "format": "Private",
    "duration": "11 hours",
    "hours": 11.0,
    "start": "01:30",
    "summary": "Climb Batur at sunrise with a private guide, then soak in a natural hot spring and finish at a coffee plantation. Your whole morning is planned, from pickup to drop-off.",
    "highlights": [
      "Reach the summit for sunrise with your own private guide",
      "Warm up afterwards in the Batur Natural Hot Spring",
      "Taste Balinese coffee at a plantation",
      "Set your own pace on the trail"
    ],
    "itinerary": [
      {
        "time": "01:30",
        "text": "Hotel pickup"
      },
      {
        "time": "03:45",
        "text": "Start the climb"
      },
      {
        "text": "About 05:45 sunrise and breakfast at the summit, 60 min"
      },
      {
        "text": "Descent, about 90 min"
      },
      {
        "text": "Coffee plantation, 45 min"
      },
      {
        "text": "Batur Natural Hot Spring, 90 min"
      },
      {
        "text": "About 12:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "private guide",
      "Mount Batur permit",
      "breakfast",
      "hot spring entrance",
      "coffee tasting",
      "flashlight",
      "water"
    ],
    "excludes": [
      "tips",
      "towel if you do not bring your own"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu and Kuta",
    "options": "option for a sunrise jeep ride instead of hiking; add-on for lunch",
    "keywords": [
      "private tour",
      "hiking",
      "sunrise",
      "hot spring",
      "relaxing"
    ]
  },
  {
    "id": 6,
    "slug": "kintamani-half-day-volcano-views-and-tirta-empul-tour",
    "title": "Kintamani: Half-Day Volcano Views and Tirta Empul Tour",
    "region": "Batur & Kintamani",
    "interest": "Culture",
    "format": "Private",
    "duration": "6 hours",
    "hours": 6.0,
    "start": "09:00",
    "summary": "See Mount Batur and the lake from Kintamani, visit Tirta Empul's sacred springs and stop at a coffee plantation. Easy walking and a relaxed pace suit families and couples.",
    "highlights": [
      "Take in volcano and lake views at Kintamani",
      "Visit the Tirta Empul spring temple with a guide",
      "Taste coffee and Balinese tea at a plantation",
      "Keep it short, with a half-day schedule and easy walks"
    ],
    "itinerary": [
      {
        "time": "09:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Tirta Empul Temple, 60 min"
      },
      {
        "text": "Coffee plantation, 45 min"
      },
      {
        "text": "Kintamani viewpoint, 45 min"
      },
      {
        "text": "Rice terrace stop, 30 min"
      },
      {
        "text": "About 15:00 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "driver-guide",
      "entrance fees",
      "water"
    ],
    "excludes": [
      "lunch",
      "tips"
    ],
    "meetingPoint": "hotel pickup in Ubud and nearby areas, with an extended pickup option for the south",
    "options": "option with fees included or paid on site; add-on for lunch",
    "keywords": [
      "half day",
      "culture",
      "volcano",
      "families",
      "couples"
    ]
  },
  {
    "id": 7,
    "slug": "north-bali-sekumpul-and-banyumala-waterfalls-private-tour",
    "title": "North Bali: Sekumpul and Banyumala Waterfalls Private Tour",
    "region": "North & Highlands",
    "interest": "Waterfalls & nature",
    "format": "Private",
    "duration": "12 hours",
    "hours": 12.0,
    "start": "06:00",
    "summary": "Visit Bali's biggest north-coast waterfalls with a private driver and a local trekking guide. Start early at Banyumala's swimming pool, then trek to Sekumpul.",
    "highlights": [
      "Swim in the Banyumala Twin Waterfalls' clear pool, quiet in the early morning",
      "Trek to Sekumpul with a local guide, now mandatory past the viewpoint",
      "Stop at Munduk Waterfall and the Handara Gate",
      "Travel in a private air-conditioned car with fees included"
    ],
    "itinerary": [
      {
        "time": "06:00",
        "text": "Hotel pickup"
      },
      {
        "time": "08:30",
        "text": "Banyumala Twin Waterfalls, 75 min"
      },
      {
        "text": "Handara Gate photo stop, 20 min"
      },
      {
        "text": "Munduk Waterfall, 45 min"
      },
      {
        "text": "Lunch, 60 min"
      },
      {
        "text": "Sekumpul Waterfall with local guide, 120 min"
      },
      {
        "text": "About 18:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "driver",
      "Sekumpul guide",
      "entrance fees",
      "bottled water",
      "parking"
    ],
    "excludes": [
      "lunch",
      "tips",
      "towel and swimwear"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu and Kuta. An Ubud pickup shortens the drive.",
    "options": "option for a shorter route without the Sekumpul trek; add-on for lunch",
    "keywords": [
      "waterfall",
      "hiking",
      "nature",
      "swimming",
      "private tour"
    ]
  },
  {
    "id": 8,
    "slug": "bedugul-ulun-danu-beratan-handara-gate-and-gitgit-tour",
    "title": "Bedugul: Ulun Danu Beratan, Handara Gate and Gitgit Tour",
    "region": "North & Highlands",
    "interest": "Waterfalls & nature",
    "format": "Private",
    "duration": "9 hours",
    "hours": 9.0,
    "start": "08:00",
    "summary": "Escape the southern heat for the cool Bedugul highlands. See the lakeside Ulun Danu Beratan temple, the Handara Gate and Gitgit Waterfall in one private day.",
    "highlights": [
      "Photograph Ulun Danu Beratan, the temple on Lake Beratan",
      "Pose at the Handara Gate",
      "Walk 15-20 minutes down to Gitgit Waterfall",
      "Enjoy cooler air than the south coast all year"
    ],
    "itinerary": [
      {
        "time": "08:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Ulun Danu Beratan Temple, 75 min"
      },
      {
        "text": "Handara Gate, 30 min"
      },
      {
        "text": "Lunch with a lake or valley view, 60 min"
      },
      {
        "text": "Gitgit Waterfall, 75 min"
      },
      {
        "text": "About 17:00 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "driver-guide",
      "entrance fees",
      "water"
    ],
    "excludes": [
      "lunch",
      "tips"
    ],
    "meetingPoint": "hotel pickup in Ubud and the south",
    "options": "add-on for lunch; option to add Banyumala for a longer day",
    "keywords": [
      "lake",
      "temple",
      "waterfall",
      "nature",
      "sightseeing"
    ]
  },
  {
    "id": 9,
    "slug": "bali-unesco-highlights-jatiluwih-ulun-danu-and-tanah-lot",
    "title": "Bali UNESCO Highlights: Jatiluwih, Ulun Danu and Tanah Lot",
    "region": "North & Highlands",
    "interest": "Culture",
    "format": "Private",
    "duration": "11 hours",
    "hours": 11.0,
    "start": "08:00",
    "summary": "Cross central Bali's temples and UNESCO-listed rice terraces in one day. Finish at Tanah Lot as the light drops over the sea.",
    "highlights": [
      "Walk the Jatiluwih rice terraces, a UNESCO cultural landscape",
      "Visit Taman Ayun and the lakeside Ulun Danu Beratan",
      "Finish with a sunset at Tanah Lot",
      "See four sites on a smooth west-to-east route"
    ],
    "itinerary": [
      {
        "time": "08:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Taman Ayun Temple, 45 min"
      },
      {
        "text": "Ulun Danu Beratan Temple, 60 min"
      },
      {
        "text": "Lunch overlooking the Jatiluwih terraces, 75 min"
      },
      {
        "text": "Jatiluwih terrace walk, 60 min"
      },
      {
        "text": "Tanah Lot Temple and sunset, 90 min"
      },
      {
        "text": "About 19:00 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "English-speaking driver-guide",
      "entrance fees",
      "water"
    ],
    "excludes": [
      "lunch",
      "tips",
      "Tanah Lot Kecak show (starts 18:30 and is a separate ticket)"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu and Kuta",
    "options": "add-ons for lunch and the Kecak show",
    "keywords": [
      "UNESCO",
      "temple",
      "rice terraces",
      "sunset",
      "private tour"
    ]
  },
  {
    "id": 10,
    "slug": "east-bali-early-gate-of-heaven-tirta-gangga-and-cepung",
    "title": "East Bali: Early Gate of Heaven, Tirta Gangga and Cepung",
    "region": "East Bali",
    "interest": "Culture",
    "format": "Private",
    "duration": "11 hours",
    "hours": 11.0,
    "start": "05:30",
    "summary": "See East Bali's three icons in one private day: the Lempuyang Gate of Heaven, the Tirta Gangga water palace and Tukad Cepung's light-filled canyon. An early start shortens queues at the first stop.",
    "highlights": [
      "Photograph Mount Agung through the Gate of Heaven at Lempuyang",
      "Wander the pools and stepping stones of Tirta Gangga",
      "See sunbeams fall through the cliffs at Tukad Cepung",
      "Travel with a private driver-guide, with fees explained in advance"
    ],
    "itinerary": [
      {
        "time": "05:30",
        "text": "Hotel pickup"
      },
      {
        "text": "Lempuyang Temple, 120 min including the photo queue"
      },
      {
        "text": "Tirta Gangga Water Palace, 75 min"
      },
      {
        "text": "Lunch, 60 min"
      },
      {
        "text": "Tukad Cepung Waterfall, 75 min including the walk"
      },
      {
        "text": "About 17:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "English-speaking driver-guide",
      "bottled water",
      "parking"
    ],
    "excludes": [
      "entrance fees (or include them",
      "and price accordingly)",
      "lunch",
      "tips",
      "sarong rental if required"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu and Kuta",
    "options": "option with fees included or paid on site; add-on for lunch",
    "keywords": [
      "temple",
      "waterfall",
      "photography",
      "sightseeing",
      "private tour"
    ]
  },
  {
    "id": 11,
    "slug": "east-bali-goa-lawah-tenganan-village-and-water-palaces",
    "title": "East Bali: Goa Lawah, Tenganan Village and Water Palaces",
    "region": "East Bali",
    "interest": "Culture",
    "format": "Private",
    "duration": "10 hours",
    "hours": 10.0,
    "start": "07:30",
    "summary": "Follow Bali's east coast from the bat cave temple to a traditional village and two royal water palaces. A private guide explains the history at each stop.",
    "highlights": [
      "Visit Goa Lawah, the bat cave temple, in the quieter morning light",
      "Walk Tenganan, a traditional Bali Aga village",
      "Photograph the sea-facing arches at Taman Ujung",
      "Stroll the pools and gardens of Tirta Gangga"
    ],
    "itinerary": [
      {
        "time": "07:30",
        "text": "Hotel pickup"
      },
      {
        "text": "Goa Lawah Temple, 45 min"
      },
      {
        "text": "Tenganan Village, 75 min"
      },
      {
        "text": "Lunch, 60 min"
      },
      {
        "text": "Taman Ujung Water Palace, 75 min"
      },
      {
        "text": "Tirta Gangga Water Palace, 75 min"
      },
      {
        "text": "About 17:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "driver-guide",
      "water",
      "parking"
    ],
    "excludes": [
      "entrance fees (Taman Ujung IDR 100",
      "000",
      "Tirta Gangga IDR 90",
      "000)",
      "lunch",
      "tips"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu and Kuta",
    "options": "option with fees included; option to add Lempuyang",
    "keywords": [
      "culture",
      "history",
      "temple",
      "village",
      "private tour"
    ]
  },
  {
    "id": 12,
    "slug": "sidemen-valley-rice-terraces-weaving-and-village-day",
    "title": "Sidemen Valley: Rice Terraces, Weaving and Village Day",
    "region": "East Bali",
    "interest": "Waterfalls & nature",
    "format": "Private",
    "duration": "8 hours",
    "hours": 8.0,
    "start": "08:00",
    "summary": "Spend a slow day in Sidemen, one of Bali's most authentic valleys. Walk through rice fields with Mount Agung behind them, visit a local workshop and eat in a village home or warung.",
    "highlights": [
      "Walk quiet rice paddies with Mount Agung views on a clear morning",
      "Meet villagers and see local crafts",
      "Eat a home-style Balinese lunch",
      "Avoid the crowds of central Ubud"
    ],
    "itinerary": [
      {
        "time": "08:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Sidemen rice field walk, 90 min"
      },
      {
        "text": "Local craft or weaving workshop visit, 60 min"
      },
      {
        "text": "Village lunch, 75 min"
      },
      {
        "text": "Optional Tirta Gangga stop, 60 min"
      },
      {
        "text": "About 16:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "driver-guide",
      "walk with a local guide",
      "lunch",
      "water"
    ],
    "excludes": [
      "tips",
      "purchases",
      "Tirta Gangga fee"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur and the south",
    "options": "option for a half-day walk only; add-on for Tirta Gangga",
    "keywords": [
      "village",
      "nature",
      "culture",
      "slow travel",
      "photography"
    ]
  },
  {
    "id": 13,
    "slug": "uluwatu-sunset-temple-kecak-dance-and-jimbaran-dinner",
    "title": "Uluwatu: Sunset Temple, Kecak Dance and Jimbaran Dinner",
    "region": "South & West Coast",
    "interest": "Sunset",
    "format": "Private",
    "duration": "6.5 hours",
    "hours": 6.5,
    "start": "15:00",
    "summary": "Watch the sun drop over the Indian Ocean from the Uluwatu cliffs, see a Kecak fire dance in the clifftop amphitheater, then eat seafood on Jimbaran Bay.",
    "highlights": [
      "Walk the clifftop paths at Uluwatu Temple before sunset",
      "See the Kecak and fire dance performance",
      "Eat grilled seafood on the sand at Jimbaran Bay",
      "Ride in a private vehicle with hotel pickup"
    ],
    "itinerary": [
      {
        "time": "15:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Uluwatu Temple and cliff walk, 90 min"
      },
      {
        "text": "Kecak and fire dance, 60 min"
      },
      {
        "text": "Jimbaran Bay seafood dinner, 90 min"
      },
      {
        "text": "About 21:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "driver-guide",
      "Uluwatu Temple entrance",
      "Kecak ticket",
      "hotel pickup and drop-off"
    ],
    "excludes": [
      "dinner (or include a set menu)",
      "drinks",
      "tips"
    ],
    "meetingPoint": "hotel pickup in Seminyak, Kuta, Legian, Sanur, Nusa Dua and Jimbaran. Ubud and Canggu pickups may carry a surcharge.",
    "options": "option with or without dinner; option for a shared or private vehicle; add-on for a seafood set menu",
    "keywords": [
      "sunset",
      "temple",
      "culture",
      "dinner",
      "couples"
    ]
  },
  {
    "id": 14,
    "slug": "bali-private-tanah-lot-and-uluwatu-sunset-tour-with-kecak",
    "title": "Bali: Private Tanah Lot and Uluwatu Sunset Tour with Kecak",
    "region": "South & West Coast",
    "interest": "Sunset",
    "format": "Private",
    "duration": "9 hours",
    "hours": 9.0,
    "start": "10:00",
    "summary": "See both of Bali's famous sea temples in one private day. Start at Tanah Lot, take a beach break at Padang-Padang, then end with sunset and Kecak at Uluwatu.",
    "highlights": [
      "Visit Tanah Lot, Bali's most visited sea temple",
      "Relax at Padang-Padang Beach",
      "Watch the sun go down at Uluwatu",
      "See a Kecak dance and ride home in comfort"
    ],
    "itinerary": [
      {
        "time": "10:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Tanah Lot Temple, 90 min (check the tide for access to the base)"
      },
      {
        "text": "Lunch, 60 min"
      },
      {
        "text": "Padang-Padang Beach, 60 min"
      },
      {
        "text": "Uluwatu Temple at sunset, 90 min"
      },
      {
        "text": "Kecak dance, 60 min"
      },
      {
        "text": "About 19:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "English-speaking driver-guide",
      "entrance fees to both temples",
      "Kecak ticket",
      "water"
    ],
    "excludes": [
      "lunch",
      "tips"
    ],
    "meetingPoint": "hotel pickup in Ubud, Seminyak, Canggu, Kuta, Sanur and Nusa Dua",
    "options": "add-ons for lunch and a Jimbaran seafood dinner",
    "keywords": [
      "temple",
      "sunset",
      "culture",
      "private tour",
      "couples"
    ]
  },
  {
    "id": 15,
    "slug": "tulamben-usat-liberty-shipwreck-snorkeling-with-lunch",
    "title": "Tulamben: USAT Liberty Shipwreck Snorkeling with Lunch",
    "region": "East Coast",
    "interest": "Snorkeling",
    "format": "Small group",
    "duration": "9 hours",
    "hours": 9.0,
    "start": "07:00",
    "summary": "Snorkel over the USAT Liberty, a WWII wreck just off the beach at Tulamben. A guide, gear, lunch and hotel pickup are included, so you only need to bring swimwear.",
    "highlights": [
      "Snorkel above a coral-covered shipwreck that lies 25-40 m from shore, in water 5-30 m deep",
      "Enter from the beach, with no boat needed",
      "Spot stingrays, moray eels, octopus and schools of jackfish",
      "Take your time with two snorkel sessions and lunch between them"
    ],
    "itinerary": [
      {
        "time": "07:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Drive to Tulamben, about 2.5-3 hours from the south"
      },
      {
        "text": "Gear fitting and safety briefing, 20 min"
      },
      {
        "text": "Snorkel session 1 at the wreck, 60 min"
      },
      {
        "text": "Beachside lunch, 60 min"
      },
      {
        "text": "Snorkel session 2 at a second reef, 60 min"
      },
      {
        "text": "About 16:00 return to your hotel"
      }
    ],
    "includes": [
      "hotel pickup and drop-off",
      "guide",
      "mask",
      "snorkel",
      "fins",
      "life jacket",
      "lunch",
      "water",
      "insurance"
    ],
    "excludes": [
      "tips",
      "underwater photos (or add them as an add-on)"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu and Kuta, or meet at Tulamben beach",
    "options": "option for group or small group; option with a kayak; add-on for underwater photos",
    "keywords": [
      "snorkeling",
      "shipwreck",
      "marine life",
      "adventure",
      "beach"
    ]
  },
  {
    "id": 16,
    "slug": "padang-bai-blue-lagoon-snorkeling-and-tenganan-village",
    "title": "Padang Bai: Blue Lagoon Snorkeling and Tenganan Village",
    "region": "East Coast",
    "interest": "Snorkeling",
    "format": "Private",
    "duration": "7 hours",
    "hours": 7.0,
    "start": "08:00",
    "summary": "Swim in the Blue Lagoon, a sheltered bay with white sand and calm, clear water, then walk through the traditional Tenganan village in the afternoon.",
    "highlights": [
      "Snorkel calm shallows with reef fish and eels, and sometimes turtles",
      "Reach the snorkel spots by a short local boat",
      "Walk Tenganan, one of Bali's oldest traditional villages",
      "Enjoy a relaxed half-day pace, good for beginners and families"
    ],
    "itinerary": [
      {
        "time": "08:00",
        "text": "Hotel pickup"
      },
      {
        "text": "Padang Bai harbour, boat to the Blue Lagoon, 30 min"
      },
      {
        "text": "Snorkeling, 90 min"
      },
      {
        "text": "Lunch, 60 min"
      },
      {
        "text": "Tenganan Village, 60 min"
      },
      {
        "text": "About 15:00 drop-off"
      }
    ],
    "includes": [
      "hotel pickup",
      "boat",
      "guide",
      "snorkel gear",
      "life jacket",
      "lunch",
      "water"
    ],
    "excludes": [
      "tips",
      "village donation"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur and the south, or meet at Padang Bai harbour",
    "options": "option for snorkeling only; add-on for a private boat",
    "keywords": [
      "snorkeling",
      "beach",
      "culture",
      "families",
      "beginners"
    ]
  },
  {
    "id": 17,
    "slug": "amed-and-tulamben-full-day-snorkeling-with-jemeluk-bay",
    "title": "Amed and Tulamben: Full-Day Snorkeling with Jemeluk Bay",
    "region": "East Coast",
    "interest": "Snorkeling",
    "format": "Private",
    "duration": "11 hours",
    "hours": 11.0,
    "start": "06:30",
    "summary": "See three of the north-east coast's best snorkel sites in one private day. Start in the calm waters of Jemeluk Bay, then snorkel a Japanese wreck and the Tulamben Liberty.",
    "highlights": [
      "Snorkel in the protected waters of Jemeluk Bay, good for all levels",
      "See soft corals and turtles around Amed",
      "Visit the Japanese wreck and the USAT Liberty",
      "Do it all with a private guide and a lunch stop"
    ],
    "itinerary": [
      {
        "time": "06:30",
        "text": "Hotel pickup"
      },
      {
        "text": "Jemeluk Bay snorkel, 75 min"
      },
      {
        "text": "Lunch, 60 min"
      },
      {
        "text": "Japanese Shipwreck, 60 min"
      },
      {
        "text": "USAT Liberty at Tulamben, 75 min"
      },
      {
        "text": "About 17:30 drop-off"
      }
    ],
    "includes": [
      "private vehicle",
      "guide",
      "snorkel gear",
      "life jacket",
      "lunch",
      "water"
    ],
    "excludes": [
      "tips",
      "underwater photos"
    ],
    "meetingPoint": "hotel pickup in Ubud, Sanur, Seminyak, Canggu and Kuta",
    "options": "option for 2 or 3 sites; add-on for underwater photos",
    "keywords": [
      "snorkeling",
      "marine life",
      "private tour",
      "shipwreck",
      "adventure"
    ]
  },
  {
    "id": 18,
    "slug": "bali-private-customizable-day-tour-with-english-driver",
    "title": "Bali: Private Customizable Day Tour with English Driver",
    "region": "Anywhere in Bali",
    "interest": "Custom",
    "format": "Private",
    "duration": "flexible, 8 or 10 hours",
    "hours": 8,
    "start": null,
    "summary": "Build your own Bali day with a private English-speaking driver. Pick up to five stops from a menu by region, and change the plan as you go.",
    "highlights": [
      "Choose your own stops from a menu of temples, waterfalls, rice terraces and beaches",
      "Travel with one driver for the whole day, with no group schedule",
      "Get local tips on food, timing and the best photo spots",
      "Pay a fixed price per vehicle, with fees explained up front"
    ],
    "itinerary": [
      {
        "text": "Hotel pickup at a time that suits your plan"
      },
      {
        "text": "Choose up to five stops from the stop menu"
      },
      {
        "text": "A lunch stop of your choice, 60 min"
      },
      {
        "text": "Drop-off at your hotel"
      }
    ],
    "includes": [
      "private air-conditioned vehicle",
      "English-speaking driver",
      "fuel",
      "parking",
      "bottled water",
      "hotel pickup and drop-off"
    ],
    "excludes": [
      "entrance fees (listed per stop)",
      "lunch",
      "tips"
    ],
    "meetingPoint": "hotel pickup anywhere in the south and Ubud; the north and east may carry a surcharge",
    "options": "options for 8 or 10 hours and for a car for 1-3 or a minivan for 4-6; add-on for a guide who explains the sites",
    "keywords": [
      "private tour",
      "customizable",
      "sightseeing",
      "families",
      "groups"
    ],
    "note": "Stop menu by area: Ubud (Tegalalang, Tirta Empul, Monkey Forest, Tegenungan); Kintamani (Batur viewpoint, coffee plantation); North (Ulun Danu Beratan, Gitgit, Banyumala); East (Tirta Gangga, Taman Ujung, Tukad Cepung); South (Uluwatu, Padang-Padang); West (Tanah Lot, Jatiluwih)."
  }
];
