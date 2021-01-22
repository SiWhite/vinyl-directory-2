const stores = {
  store1: {
    name: "Soundlounge",
    address1: "75 Kerikeri Rd",
    address2: "Kerikeri",
    address3: "0230",
    lat: -35.227566,
    lng: 173.9468371,
    phone: "(09) 407 7101",
    url: "https://www.facebook.com/pages/The-Sound-Lounge/519304244757508",
    image: "https://vinyl-dir.s3-ap-southeast-2.amazonaws.com/soundlounge.jpg",
  },
  store2: {
    name: "The Noise Company",
    address1: "106A Victoria St,",
    address2: "Dargaville",
    address3: "0310",
    lat: -35.9408069,
    lng: 173.8679043,
    phone: "(09) 407 7101",
    url: "https://www.facebook.com/noisecodargaville/",
    image: "https://via.placeholder.com/150",
  },
  store3: {
    name: "Cowboy Junkies",
    address1: "2 Okara Dr,",
    address2: "Whangarei",
    address3: "0110",
    lat: -35.7298384,
    lng: 174.326776,
    phone: "027 685 5859",
    url:
      "https://www.facebook.com/pages/category/Antique-Store/Cowboy-Junkies-Antiques-Collectables-388226364707584/",
    image: "https://via.placeholder.com/150",
  },
  store4: {
    name: "Rainbow Relics",
    address1: "49 Clyde street,",
    address2: "Whangarei",
    address3: "0110",
    lat: -35.727763,
    lng: 174.3224822,
    phone: "(09) 438 3150",
    url: "http://rainbowsrelics.online/",
    image: "https://via.placeholder.com/150",
  },
  store5: {
    name: "Rummage Retro and Collectables",
    address1: "523 Matakana Rd",
    address2: "Laly Haddon Place",
    address3: "Warkworth 0985",
    lat: -36.3691511,
    lng: 174.6800653,
    phone: "(021) 442 071",
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store6: {
    name: "Southbound Records",
    address1: "132 Symonds Street",
    address2: "Eden Terrace",
    address3: "Auckland 1010",
    lat: -36.8616556,
    lng: 174.7620281,
    phone: "(09) 302 0769",
    url: "http://www.southbound.co.nz/shop",
    image: "https://via.placeholder.com/150",
  },
  store7: {
    name: "Alien Records & CDs",
    address1: "9 Veronica St",
    address2: "New Lynn",
    address3: "Auckland 0600",
    lat: -36.9075758,
    lng: 174.6860273,
    phone: "(09) 827 7100",
    url: "https://www.facebook.com/alienrecordscds/",
    image: "https://via.placeholder.com/150",
  },
  store8: {
    name: "Audio Foundation",
    address1: "4 Poynton Terrace",
    address2: "Auckland",
    address3: "1010",
    lat: -36.8566454,
    lng: 174.7598388,
    phone: "(09) 373 5790",
    url: "http://audiofoundation.org.nz",
    image: "https://via.placeholder.com/150",
  },
  store9: {
    name: "Conch Kitchen & Bar",
    address1: "115A Ponsonby Rd",
    address2: "Ponsonby",
    address3: "Auckland 1011",
    lat: -36.8558433,
    lng: 174.7466339,
    phone: "(09) 360 1999",
    url: "http://conch.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store10: {
    name: "Real Groovy",
    address1: "520 Queen St",
    address2: "Auckland",
    address3: "1010",
    lat: -36.8574854,
    lng: 174.7617549,
    phone: "(09) 360 1999",
    url: "http://conch.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store11: {
    name: "Marbecks",
    address1: "34 Queen St",
    address2: "Auckland",
    address3: "1010",
    lat: -36.8451326,
    lng: 174.7645436,
    phone: "(09) 379 0444",
    url: "http://marbecksclassical.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store12: {
    name: "JPI Music",
    address1: "99 Parrs Cross Rd",
    address2: "Auckland",
    address3: "0612",
    lat: -36.904461,
    lng: 174.6204433,
    phone: "(09) 837 2656",
    url: "http://justplaneinteresting.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store13: {
    name: "Musiquarium",
    address1: "369 Dominion Rd",
    address2: "Mt Eden",
    address3: "Auckland",
    lat: -36.8800225,
    lng: 174.7475459,
    phone: "(09) 630 9066",
    url: "https://www.facebook.com/musiquariumnz/",
    image: "https://via.placeholder.com/150",
  },
  store14: {
    name: "Mix Foundation",
    address1: "55-57 High St",
    address2: "Auckland",
    address3: "1010",
    lat: -36.8486532,
    lng: 174.7663034,
    phone: "(09) 303 4757",
    url: "http://mixfoundation.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store15: {
    name: "Graham's Collectables",
    address1: "734 Pollen St",
    address2: "Thames",
    address3: "3500",
    lat: -37.1353004,
    lng: 175.5406213,
    phone: null,
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store16: {
    name: "Holiday Records",
    address1: "111 Wellesley Street West",
    address2: "Thames",
    address3: "3500",
    lat: -36.8489262,
    lng: 174.7586456,
    phone: "021 083 40707",
    url: "https://www.holidayrecords.com/",
    image: "https://via.placeholder.com/150",
  },
  store17: {
    name: "The Music Box",
    address1: "24 King St",
    address2: "Pukekohe",
    address3: "2120",
    lat: -37.2005071,
    lng: 174.7586456,
    phone: "021 083 40707",
    url: "https://www.holidayrecords.com/",
    image: "https://via.placeholder.com/150",
  },
  store18: {
    name: "Waikato Second Hand Centre / Remains to be Scene",
    address1: "441 Anglesea St",
    address2: "Hamilton",
    address3: "3204",
    lat: -37.7843236,
    lng: 175.2763143,
    phone: "(07) 839 3570",
    url: "http://waikatosecondhand.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store19: {
    name: "The Tron",
    address1: "58a Commerce St",
    address2: "Frankton",
    address3: "Hamilton",
    lat: -37.7859258,
    lng: 175.2671013,
    phone: "021 932 075",
    url: "http://tronrecords.nz/",
    image: "https://via.placeholder.com/150",
  },
  store20: {
    name: "Needle in the Hay",
    address1: "Racquet Lane",
    address2: "300a Barton St",
    address3: "Hamilton 3216",
    lat: -37.784691,
    lng: 175.2793679,
    phone: "022 670 4542",
    url: "https://www.facebook.com/needleinthehayshop/",
    image: "https://via.placeholder.com/150",
  },
  store21: {
    name: "Raglan Vintage and Retro",
    address1: "Unit 4",
    address2: "92 Wallis Street",
    address3: "Raglan Wharf",
    lat: -37.7946301,
    lng: 174.8798775,
    phone: "(07) 825 7300",
    url: "https://www.facebook.com/Raglan-Vintage-Retro-348217261961193/",
    image: "https://via.placeholder.com/150",
  },
  store22: {
    name: "The Refinery",
    address1: "5 Willoughby St",
    address2: "Paeroa",
    address3: "3600",
    lat: -37.3792565,
    lng: 175.6703395,
    phone: "(07) 862 7678",
    url: "http://www.the-refinery.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store23: {
    name: "Retro Collectables",
    address1: "34a Main Road",
    address2: "Tirau",
    address3: "3410",
    lat: -37.9783063,
    lng: 175.7569166,
    phone: "021 0872 3653",
    url: "https://tirauinfo.co.nz/listing/retro-collectables-nz/",
    image: "https://via.placeholder.com/150",
  },
  store24: {
    name: "Ohaupo Antiques",
    address1: "118 Great S Rd",
    address2: "Ohaupo",
    address3: "3803",
    lat: -37.9177282,
    lng: 175.3071417,
    phone: null,
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store25: {
    name: "Second Thoughts Collectables",
    address1: "136 Whitaker St",
    address2: "Te Aroha",
    address3: "3320",
    lat: -37.5437048,
    lng: 175.712743,
    phone: null,
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store26: {
    name: "The Station",
    address1: "52 Devonport Rd",
    address2: "Tauranga",
    address3: "3110",
    lat: -37.6856801,
    lng: 176.1695309,
    phone: "(021) 213 5755",
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store27: {
    name: "Record Roundabout",
    address1: "Building 4, The Historic Village",
    address2: "159 Seventeenth Avenue",
    address3: "Tauranga",
    lat: -37.7050809,
    lng: 176.1495271,
    phone: "027 647 4793",
    url: "https://www.recordroundabout.com",
    image: "https://via.placeholder.com/150",
  },
  store28: {
    name: "Mt Bookworm",
    address1: "330 Maunganui Rd",
    address2: "Mount Maunganui",
    address3: "Tauranga 3116",
    lat: -37.643071,
    lng: 176.1864788,
    phone: "(07) 572 1346",
    url: "http://www.mtbookworm.co.nz/",
    image: "https://via.placeholder.com/150",
  },
  store29: {
    name: "My Music Taupo",
    address1: "79 Tongariro St, Taupo",
    address2: "Taupo",
    address3: "3377",
    lat: -38.6869144,
    lng: 176.0696496,
    phone: "(07) 378 2844",
    url: "http://www.facebook.com/mymusictaupo1",
    image: "https://via.placeholder.com/150",
  },
  store30: {
    name: "Vinyl Countdown",
    address1: "109 Devon St W, New Plymouth",
    address2: "New Plymouth",
    address3: "4310",
    lat: -39.0588621,
    lng: 174.0709402,
    phone: "(06) 758 0064",
    url: "http://www.vinylcountdown.co.nz/",
    image: "https://via.placeholder.com/150",
  },
  store31: {
    name: "Granvilles Antiques",
    address1: "50 Liardet St",
    address2: "New Plymouth",
    address3: "4310",
    lat: -39.0575471,
    lng: 174.0759024,
    phone: "(06) 758 4966",
    url: "http://myantiqueshops.co.nz/chadz_antiques.html",
    image: "https://via.placeholder.com/150",
  },
  store32: {
    name: "Just for the Record",
    address1: "183 Dickens St",
    address2: "Napier South",
    address3: "4110",
    lat: -39.4914576,
    lng: 176.9147596,
    phone: "0508 367 4434",
    url: "http://www.justfortherecord.co.nz/",
    image: "https://via.placeholder.com/150",
  },
  store33: {
    name: "Hi-Fi Gallery",
    address1: "26 Kennedy Rd",
    address2: "Napier",
    address3: "4110",
    lat: -39.4954736,
    lng: 176.9096414,
    phone: "(06) 835 2234",
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store34: {
    name: "Electric City Music & Video Services",
    address1: "61 Dalton St",
    address2: "Napier",
    address3: "4140",
    lat: -39.4911349,
    lng: 176.9157557,
    phone: "(06) 835 5358",
    url: "http://ecmvideo.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store35: {
    name: "Hawkes Bay Book & Record",
    address1: "66 Dalton St",
    address2: "Napier",
    address3: "4140",
    lat: -39.4911664,
    lng: 176.916122,
    phone: null,
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store36: {
    name: "Passionate about Vinyl",
    address1: "High Street",
    address2: "Waipawa",
    address3: "Hawke's Bay",
    lat: -39.9407246,
    lng: 176.5906081,
    phone: null,
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store37: {
    name: "Music Box Record Exchange",
    address1: "346 Heretaunga St W",
    address2: "St Leonards",
    address3: "Hastings 4122",
    lat: -39.6393003,
    lng: 176.8400867,
    phone: "(06) 878 2479",
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store38: {
    name: "A1 Mart",
    address1: "287 Gladstone Rd, Gisborne",
    address2: "Gisborne",
    address3: "4010",
    lat: -38.6629287,
    lng: 176.8400867,
    phone: "(06) 868 6216",
    url:
      "https://www.facebook.com/pages/category/Public-Figure/A1-Mart-Antiques-Collectibles-and-Second-Hand-Dealers-1643220482558996/",
    image: "https://via.placeholder.com/150",
  },
  store39: {
    name: "The Viking's Haul",
    address1: "61 Ross St",
    address2: "Woodville",
    address3: "4920",
    lat: -40.3384971,
    lng: 175.8688071,
    phone: "(06) 376 5553",
    url: "http://thevikingshaul.com",
    image: "https://via.placeholder.com/150",
  },
  store40: {
    name: "Ulo",
    address1: "4A Wallis St",
    address2: "Raglan",
    address3: "3225",
    lat: -37.7991489,
    lng: 174.8677334,
    phone: null,
    url: "https://www.facebook.com/pg/ulo.nz/",
    image: "https://via.placeholder.com/150",
  },
  store41: {
    name: "The Spellbound Wax Company",
    address1: "Treble Court",
    address2: "25 Peel St",
    address3: "Gisborne",
    lat: -38.6654422,
    lng: 178.0261186,
    phone: "0800 447 695",
    url: "https://www.facebook.com/SpellboundWax/",
    image: "https://via.placeholder.com/150",
  },
  store42: {
    name: "Vegas Vinyl",
    address1: "1198 Haupapa St",
    address2: "Rotorua",
    address3: "3010",
    lat: -38.1360071,
    lng: 176.2504358,
    phone: null,
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store421: {
    name: "Xanadu Book Exchange",
    address1: "2C Ashley Pl",
    address2: "Papamoa Beach",
    address3: "Papamoa 3118",
    lat: -37.7169152,
    lng: 176.3154864,
    phone: "027 617 2235",
    url: "https://www.facebook.com/xanadubookexchange/",
    image: "https://via.placeholder.com/150",
  },
  store43: {
    name: "Black Coffee",
    address1: "133 Riddiford St",
    address2: "Newtown",
    address3: "Wellington",
    lat: -41.3120821,
    lng: 174.7794082,
    phone: null,
    url: "http://www.blackcoffeenewtown.com/",
    image: "https://via.placeholder.com/150",
  },
  store44: {
    name: "David N White Gallery",
    address1: "88 Abel Smith St",
    address2: "Te Aro",
    address3: "Wellington",
    lat: -41.2955794,
    lng: 174.7729283,
    phone: "(04) 384 9597",
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store45: {
    name: "Kings Sound Centre",
    address1: "210 Oxford St",
    address2: "Levin",
    address3: "5510",
    lat: -40.6225476,
    lng: 175.2861279,
    phone: "(06) 368 5879",
    url: "http://www.ksc.net.nz/",
    image: "https://via.placeholder.com/150",
  },
  store46: {
    name: "Roadkill Book & Coffee Shop",
    address1: "186 Oxford St",
    address2: "Levin",
    address3: "5510",
    lat: -40.6210889,
    lng: 175.2875703,
    phone: "(021) 02622591",
    url: "http://www.roadkillcrafts.com/books.htm",
    image: "https://via.placeholder.com/150",
  },
  store47: {
    name: "Goldie's Junk 'n Disorderly",
    address1: "16 Main St",
    address2: "Foxton",
    address3: "4814",
    lat: -40.4720491,
    lng: 175.2812924,
    phone: "(06) 363 6950",
    url: "http://www.roadkillcrafts.com/books.htm",
    image: "https://via.placeholder.com/150",
  },
  store48: {
    name: "Rough Peel Music",
    address1: "173 Cuba St",
    address2: "Te Aro",
    address3: "Wellington",
    lat: -41.2940644,
    lng: 174.7752671,
    phone: "(04) 803 3726",
    url: "http://www.roughpeel.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store49: {
    name: "Creeps Record Parlour",
    address1: "Wilson St",
    address2: "Te Aro",
    address3: "Wellington",
    lat: -41.3123731,
    lng: 174.783499,
    phone: null,
    url: "https://www.facebook.com/Creeps-Record-Parlour-465881590861880",
    image: "https://via.placeholder.com/150",
  },
  store50: {
    name: "Slow Boat Records",
    address1: "183 Cuba St",
    address2: "Te Aro",
    address3: "Wellington",
    lat: -41.2944005,
    lng: 174.7751127,
    phone: "(04) 385 1330",
    url: "http://slowboatrecords.co.nz/",
    image: "https://via.placeholder.com/150",
  },
  store51: {
    name: "Lo-Cost Records",
    address1: "147 Jackson St",
    address2: "Petone",
    address3: "Wellington",
    lat: -41.224669,
    lng: 174.8768883,
    phone: "(04) 939 2609",
    url: "http://www.moonhop.com/",
    image: "https://via.placeholder.com/150",
  },
  store52: {
    name: "Wonderland Records",
    address1: "2 Moore's Valley Road",
    address2: "Wainuiomata",
    address3: "Wellington",
    lat: -41.2723934,
    lng: 174.9541021,
    phone: "(04) 939 7581",
    url: "http://wonderland_recs.tripod.com/",
    image: "https://via.placeholder.com/150",
  },
  store53: {
    name: "Mint Music",
    address1: "123 Main St",
    address2: "Upper Hutt",
    address3: "Wellington",
    lat: -41.1241754,
    lng: 175.0705927,
    phone: "(04) 577 2580",
    url: "http://www.mintmusic.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store54: {
    name: "Bazaar Attractions",
    address1: "142 High Street N",
    address2: "Carterton",
    address3: "Wairarapa",
    lat: -41.0229695,
    lng: 175.5294427,
    phone: null,
    url: "http://www.myantiqueshops.co.nz/bizzare_attractions.html",
    image: "https://via.placeholder.com/150",
  },
  store55: {
    name: "Family Jewels Records",
    address1: "97 Collingwood Street",
    address2: "Nelson",
    address3: "7010",
    lat: -41.2733974,
    lng: 173.287012,
    phone: "022 362 0304",
    url: "https://www.facebook.com/FamilyJewelsRecords/",
    image: "https://via.placeholder.com/150",
  },
  store56: {
    name: "The Vintage Room",
    address1: "Aranui Rd",
    address2: "Mapua",
    address3: "7173",
    lat: -41.2526833,
    lng: 173.094892,
    phone: "021 228 8339",
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store57: {
    name: "At Last Records",
    address1: "82 Stafford St",
    address2: "Timaru",
    address3: "7910",
    lat: -44.3988622,
    lng: 171.2554905,
    phone: "(03) 688 3341",
    url: "http://www.atlastrecordstimaru.co.nz/",
    image: "https://via.placeholder.com/150",
  },
  store58: {
    name: "On The Front Lawn Records",
    address1: "159 Sale Street",
    address2: "Hokitika",
    address3: "7810",
    lat: -42.7156654,
    lng: 170.9750289,
    phone: "027 907 9069",
    url: "http://www.facebook.com/West-Coast-Vinyl-Fashion-769741239826272/",
    image: "https://via.placeholder.com/150",
  },
  store59: {
    name: "Ride on Super Sound",
    address1: "336 St Asaph S",
    address2: "Christchurch Central",
    address3: "8011",
    lat: -43.5366182,
    lng: 172.6479735,
    phone: null,
    url: "https://www.facebook.com/rideonsupersound/",
    image: "https://via.placeholder.com/150",
  },
  store60: {
    name: "Yestergear Collectables",
    address1: "The Tannery",
    address2: "3 Garlands Rd, Woolston",
    address3: "Christchurch",
    lat: -43.5575278,
    lng: 172.6797166,
    phone: null,
    url:
      "https://thetannery.co.nz/stores/gift-cards-participating-retailers/yestergear/",
    image: "https://via.placeholder.com/150",
  },
  store61: {
    name: "Spooky Boogie",
    address1: "54 London St",
    address2: "Lyttelton",
    address3: "Christchurch",
    lat: -43.6020348,
    lng: 172.7196711,
    phone: "022 689 1232",
    url: "https://www.facebook.com/spookyboogies/",
    image: "https://via.placeholder.com/150",
  },
  store62: {
    name: "Penny Lane Records",
    address1: "430 Colombo St",
    address2: "Sydenham",
    address3: "Christchurch 8023",
    lat: -43.5436499,
    lng: 172.6367214,
    phone: "(03) 366 3278",
    url: "http://www.pennylanerecords.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store63: {
    name: "Sadhana Surfboards",
    address1: "The Tannery",
    address2: "35 Tanner St",
    address3: "Christchurch",
    lat: -43.5581994,
    lng: 172.6797313,
    phone: "(03) 389 5611",
    url: "http://www.sadhanasurfboards.co.nz",
    image: "https://via.placeholder.com/150",
  },
  store64: {
    name: "Zodiac Records and Books",
    address1: "223 King Edward St",
    address2: "South Dunedin",
    address3: "Dunedin 9012",
    lat: -45.8951369,
    lng: 170.4995401,
    phone: "(03) 455 3125",
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store65: {
    name: "Disk Den",
    address1: "118 Princes St",
    address2: "Dunedin",
    address3: "Dunedin 9016",
    lat: -45.875893,
    lng: 170.5021381,
    phone: "(03) 477 2280",
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store67: {
    name: "Relics",
    address1: "86 St Andrew Street",
    address2: "Dunedin",
    address3: "9016",
    lat: -45.8717494,
    lng: 170.5060851,
    phone: "(03) 474 9394",
    url: "http://relicsmusic.co.nz/",
    image: "https://via.placeholder.com/150",
  },
  store68: {
    name: "Taste Merchants",
    address1: "36 Stuart St",
    address2: "Dunedin",
    address3: "9016",
    lat: -45.8749887,
    lng: 170.507159,
    phone: "(03) 474 1100",
    url: "https://www.facebook.com/Taste-Merchants-221086317984968/",
    image: "https://via.placeholder.com/150",
  },
  store69: {
    name: "The Oddity",
    address1: "185 Main Rd",
    address2: "Waikouaiti",
    address3: "9510",
    lat: -45.5953828,
    lng: 170.6701319,
    phone: null,
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store70: {
    name: "Rock n' Rolla Records",
    address1: "86 Spey St",
    address2: "Invercargill",
    address3: "9812",
    lat: -46.4095128,
    lng: 168.3465394,
    phone: null,
    url: "http://www.facebook.com/RocknRollaNZ/",
    image: "https://via.placeholder.com/150",
  },
  store71: {
    name: "Trash Converters",
    address1: "106 Ronaldsay St",
    address2: "Palmerston",
    address3: "9061",
    lat: -45.4857702,
    lng: 170.7138831,
    phone: "(03) 465 1767",
    url: "http://www.myantiqueshops.co.nz/trash_converters.html",
    image: "https://via.placeholder.com/150",
  },
  store72: {
    name: "Bound Books & Records",
    address1: "1B/3 Church St",
    address2: "Queenstown",
    address3: "9300",
    lat: -45.0323462,
    lng: 168.6620952,
    phone: "(03) 442 5601",
    url: "https://www.facebook.com/boundqueenstown",
    image: "https://via.placeholder.com/150",
  },
  store73: {
    name: "PopCulture",
    address1: "74 Esk St",
    address2: "Invercargill",
    address3: "9810",
    lat: -46.4117588,
    lng: 168.3502713,
    phone: null,
    url: null,
    image: "https://via.placeholder.com/150",
  },
  store74: {
    name: "Dunedin Record Hunter",
    address1: "72 Musselburgh Rise",
    address2: "Musselburgh",
    address3: "Dunedin 9013",
    lat: -45.897885,
    lng: 170.5161968,
    phone: "027 365 3632",
    url: "https://www.facebook.com/Dunedin-Record-Hunter-100350698414792/",
    image: "https://via.placeholder.com/150",
  },
};

export default stores;
