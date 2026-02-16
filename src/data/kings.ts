import type { King, Era, Kingdom } from "../types";

export const ERAS: Era[] = [
  {
    id: "united",
    label: "Monarchie Unie",
    description: "Le royaume unifié sous trois rois",
    dates: "~1050 à 930 av. J.-C.",
    color: "era-united",
    kingCount: 3,
  },
  {
    id: "israel",
    label: "Royaume du Nord — Israël",
    description:
      "19 rois, tous infidèles. Chute devant l'Assyrie en 722 av. J.-C.",
    dates: "~930 à 722 av. J.-C.",
    color: "era-israel",
    kingCount: 19,
  },
  {
    id: "judah",
    label: "Royaume du Sud — Juda",
    description:
      "20 rois + 1 reine. Lignée de David, chute devant Babylone.",
    dates: "~930 à 586 av. J.-C.",
    color: "era-judah",
    kingCount: 21,
  },
];

export const KINGS: King[] = [
  // UNITED MONARCHY (3 kings)
  {
    id: "saul",
    name: "Saül",
    number: 1,
    kingdom: "united",
    imagePath: "/images/kings/saul.png",
    biblicalReference: "1 Samuel 9–31",
    reignDuration: "40 ans",
    reignYears: "~1050–1010 av. J.-C.",
    parallelKing: null,
    prophets: ["Samuel"],
    faithfulness: 2,
    keyFacts: [
      { emoji: "👑", text: "Premier roi d'Israël", category: "identity" },
      {
        emoji: "📏",
        text: "Choisi pour sa grande taille",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "Rejeté par Dieu pour désobéissance",
        category: "sin",
      },
      {
        emoji: "🔮",
        text: "Consulte la médium d'En-Dor",
        category: "sin",
      },
      {
        emoji: "⚰️",
        text: "Meurt au combat contre les Philistins",
        category: "death",
      },
    ],
    explanation:
      "Saül est choisi par Dieu pour être le premier roi d'Israël. Il commence humble et courageux. Mais il désobéit aux instructions de Dieu et préfère faire à sa manière. Peu à peu, la jalousie et la peur remplissent son cœur.",
    lesson:
      "Bien commencer ne suffit pas. Il faut continuer à obéir à Dieu.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in muted bronze and brown tones, subtle bronze and gold crown, cinematic warm golden lighting, soft depth of field, ancient royal palace background blurred, expressive face reflecting inner conflict and insecurity, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "david",
    name: "David",
    number: 2,
    kingdom: "united",
    imagePath: "/images/kings/david.png",
    biblicalReference: "1 Samuel 16 – 1 Rois 2",
    reignDuration: "40 ans",
    reignYears: "~1010–970 av. J.-C.",
    parallelKing: null,
    prophets: ["Samuel", "Nathan", "Gad"],
    faithfulness: 4,
    keyFacts: [
      { emoji: "🐑", text: "Ancien berger devenu roi", category: "identity" },
      {
        emoji: "🪨",
        text: "Vainqueur de Goliath avec une fronde",
        category: "battle",
      },
      {
        emoji: "🎵",
        text: "Auteur de nombreux psaumes",
        category: "achievement",
      },
      {
        emoji: "🏙️",
        text: "Fait de Jérusalem la capitale d'Israël",
        category: "achievement",
      },
      {
        emoji: "👑",
        text: "Ancêtre du Messie (lignée messianique)",
        category: "identity",
      },
    ],
    explanation:
      "David était un jeune berger qui faisait confiance à Dieu. Il bat Goliath et devient roi. Il aime profondément l'Éternel et écrit des psaumes. Il commet un grave péché, mais lorsqu'il est repris, il se repent sincèrement.",
    lesson: "Quand on tombe, on peut toujours revenir vers Dieu.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed royal blue robes with gold accents, subtle bronze and gold crown, cinematic warm golden lighting, soft depth of field, ancient Jerusalem background blurred, expressive face reflecting repentant humility and courageous faith, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "salomon",
    name: "Salomon",
    number: 3,
    kingdom: "united",
    imagePath: "/images/kings/salomon.png",
    biblicalReference: "1 Rois 1–11",
    reignDuration: "40 ans",
    reignYears: "~970–930 av. J.-C.",
    parallelKing: null,
    prophets: ["Nathan", "Ahija"],
    faithfulness: 3,
    keyFacts: [
      {
        emoji: "🧠",
        text: "Le plus sage des hommes (don de Dieu)",
        category: "achievement",
      },
      {
        emoji: "🏛️",
        text: "Constructeur du premier Temple de Jérusalem",
        category: "construction",
      },
      {
        emoji: "💰",
        text: "Richesse et prospérité légendaires",
        category: "achievement",
      },
      {
        emoji: "⚖️",
        text: "Jugement célèbre des deux mères",
        category: "achievement",
      },
      {
        emoji: "⚠️",
        text: "Son infidélité prépare la division du royaume",
        category: "sin",
      },
    ],
    explanation:
      "Salomon demande la sagesse et Dieu la lui donne. Il construit un magnifique Temple pour Dieu et son royaume devient très prospère. Mais en vieillissant, il écoute de mauvaises influences et adore d'autres dieux.",
    lesson: "Il faut rester fidèle à Dieu toute sa vie.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed deep green and gold robes symbolizing wisdom and prosperity, ornate bronze and gold crown, cinematic warm golden lighting, soft depth of field, Temple of Jerusalem softly blurred in background, expressive face reflecting wise authority and subtle inner pride, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },

  // NORTHERN KINGDOM - ISRAEL (19 kings)
  {
    id: "jeroboam-i",
    name: "Jéroboam Ier",
    number: 1,
    kingdom: "israel",
    imagePath: "/images/kings/jeroboam-i.png",
    biblicalReference: "1 Rois 11–14",
    reignDuration: "22 ans",
    reignYears: "~930–909 av. J.-C.",
    parallelKing: "roboam",
    prophets: ["Ahija"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "⚔️",
        text: "Premier roi du royaume du Nord",
        category: "identity",
      },
      {
        emoji: "🐂",
        text: "Introduit les veaux d'or à Béthel et Dan",
        category: "sin",
      },
      {
        emoji: "📍",
        text: "Change les lieux d'adoration",
        category: "sin",
      },
      {
        emoji: "❗",
        text: "Son péché devient un modèle négatif durable",
        category: "sin",
      },
      {
        emoji: "🏚️",
        text: "Entraîne tout Israël dans l'idolâtrie",
        category: "sin",
      },
    ],
    explanation:
      "Après la division du royaume, Jéroboam devient roi du Nord. Il craint que le peuple retourne adorer à Jérusalem. Il fabrique donc deux veaux d'or. Son choix entraîne tout Israël dans l'idolâtrie.",
    lesson: "La peur peut nous pousser à désobéir à Dieu.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, dark crimson and shadowed royal robes, bronze crown, cinematic warm dramatic lighting, blurred Samaria background, expressive face reflecting political ambition and spiritual compromise, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, unified lighting and artistic direction",
  },
  {
    id: "nadab",
    name: "Nadab",
    number: 2,
    kingdom: "israel",
    imagePath: "/images/kings/nadab.png",
    biblicalReference: "1 Rois 15:25-31",
    reignDuration: "2 ans",
    reignYears: "~909–908 av. J.-C.",
    parallelKing: "asa",
    prophets: ["Jéhu fils de Hanani"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "👤",
        text: "Fils de Jéroboam, héritier du trône",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "Suit le mauvais exemple de son père",
        category: "sin",
      },
      { emoji: "🔪", text: "Assassiné par Baasha", category: "death" },
      {
        emoji: "🏛️",
        text: "Fin de la première dynastie du Nord",
        category: "identity",
      },
      {
        emoji: "⏳",
        text: "Règne très court de 2 ans",
        category: "identity",
      },
    ],
    explanation:
      "Nadab suit le mauvais exemple de son père. Il continue l'idolâtrie. Son règne est court et il est assassiné.",
    lesson: "Suivre un mauvais exemple mène à de mauvaises conséquences.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, Middle Eastern features, dark red royal robes, simple bronze crown, blurred palace background, insecure expression, cinematic warm lighting, Disney realism, consistent character series, unified artistic direction",
  },
  {
    id: "baasha",
    name: "Baasha",
    number: 3,
    kingdom: "israel",
    imagePath: "/images/kings/baasha.png",
    biblicalReference: "1 Rois 15:32–16:7",
    reignDuration: "24 ans",
    reignYears: "~908–886 av. J.-C.",
    parallelKing: "asa",
    prophets: ["Jéhu fils de Hanani"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "🩸",
        text: "Prend le pouvoir par un coup d'État",
        category: "sin",
      },
      {
        emoji: "⚔️",
        text: "Extermine la maison de Jéroboam",
        category: "battle",
      },
      {
        emoji: "📢",
        text: "Dynastie condamnée par le prophète Jéhu",
        category: "prophet",
      },
      {
        emoji: "❌",
        text: "Continue dans le péché de Jéroboam",
        category: "sin",
      },
      {
        emoji: "⏳",
        text: "Règne de 24 ans malgré l'infidélité",
        category: "identity",
      },
    ],
    explanation:
      "Baasha prend le pouvoir par la violence. Il détruit la famille précédente pour assurer son trône. Mais il continue lui aussi dans le péché.",
    lesson: "On ne peut pas construire quelque chose de solide sur le mal.",
    imagePrompt:
      "3D Pixar-style biblical warrior king portrait, Middle Eastern features, dark armored robes with crimson undertones, bronze crown, blurred battlefield background, stern ruthless expression, cinematic dramatic lighting, Disney realism, consistent character series",
  },
  {
    id: "ela",
    name: "Éla",
    number: 4,
    kingdom: "israel",
    imagePath: "/images/kings/ela.png",
    biblicalReference: "1 Rois 16:8-14",
    reignDuration: "2 ans",
    reignYears: "~886–885 av. J.-C.",
    parallelKing: "asa",
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      { emoji: "👤", text: "Fils de Baasha", category: "identity" },
      {
        emoji: "🍷",
        text: "Assassiné pendant qu'il festoie",
        category: "death",
      },
      {
        emoji: "📉",
        text: "Instabilité politique sous son règne",
        category: "identity",
      },
      { emoji: "❌", text: "Vit sans chercher Dieu", category: "sin" },
      {
        emoji: "⏳",
        text: "Règne court et sans impact spirituel",
        category: "identity",
      },
    ],
    explanation:
      "Éla vit sans chercher Dieu. Son règne est instable. Il est assassiné pendant un banquet.",
    lesson: "Une vie sans vigilance spirituelle est fragile.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, Middle Eastern features, deep red robes, bronze crown, blurred banquet hall background, careless surprised expression, cinematic warm lighting, Disney realism, consistent character series",
  },
  {
    id: "zimri",
    name: "Zimri",
    number: 5,
    kingdom: "israel",
    imagePath: "/images/kings/zimri.png",
    biblicalReference: "1 Rois 16:15-20",
    reignDuration: "7 jours",
    reignYears: "~885 av. J.-C.",
    parallelKing: "asa",
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "⏳",
        text: "Règne le plus court de tous les rois (7 jours)",
        category: "identity",
      },
      {
        emoji: "🩸",
        text: "Prend le pouvoir par un complot",
        category: "sin",
      },
      {
        emoji: "🔥",
        text: "Met le feu au palais royal et meurt",
        category: "death",
      },
      {
        emoji: "❌",
        text: "Continue dans le péché de Jéroboam",
        category: "sin",
      },
      {
        emoji: "🏚️",
        text: "Son règne illustre le chaos du royaume",
        category: "identity",
      },
    ],
    explanation:
      "Zimri prend le pouvoir par un complot. Mais son règne ne dure que sept jours. Il met le feu au palais et meurt.",
    lesson: "Le pouvoir obtenu par le mal ne dure pas.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, Middle Eastern features, dark crimson robes, bronze crown, blurred burning palace background, anxious desperate expression, cinematic dramatic lighting, Disney realism, consistent character series",
  },
  {
    id: "omri",
    name: "Omri",
    number: 6,
    kingdom: "israel",
    imagePath: "/images/kings/omri.png",
    biblicalReference: "1 Rois 16:21-28",
    reignDuration: "12 ans",
    reignYears: "~885–874 av. J.-C.",
    parallelKing: "asa",
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "🏙️",
        text: "Fonde Samarie comme nouvelle capitale",
        category: "construction",
      },
      {
        emoji: "🌍",
        text: "Mentionné dans des archives historiques étrangères",
        category: "achievement",
      },
      {
        emoji: "👑",
        text: "Fondateur d'une dynastie puissante",
        category: "identity",
      },
      {
        emoji: "💪",
        text: "Roi politiquement fort mais spirituellement infidèle",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "Fait pire que tous ceux avant lui",
        category: "sin",
      },
    ],
    explanation:
      "Omri est un roi politiquement fort. Il fonde Samarie comme capitale. Mais spirituellement, il est très infidèle.",
    lesson: "Le succès extérieur ne remplace pas la fidélité à Dieu.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, Middle Eastern features, dark purple robes symbolizing power, bronze crown, blurred city background, confident political expression, cinematic golden lighting, Disney realism, consistent character series",
  },
  {
    id: "achab",
    name: "Achab",
    number: 7,
    kingdom: "israel",
    imagePath: "/images/kings/achab.png",
    biblicalReference: "1 Rois 16–22",
    reignDuration: "22 ans",
    reignYears: "~874–853 av. J.-C.",
    parallelKing: "asa",
    prophets: ["Élie", "Michée"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "🔥",
        text: "Affrontement au Mont Carmel contre les prophètes de Baal",
        category: "battle",
      },
      {
        emoji: "🌧️",
        text: "Sécheresse de 3 ans annoncée par Élie",
        category: "prophet",
      },
      {
        emoji: "👑",
        text: "Épouse Jézabel et encourage le culte de Baal",
        category: "sin",
      },
      { emoji: "🍇", text: "Vole la vigne de Naboth", category: "sin" },
      {
        emoji: "⚰️",
        text: "Meurt au combat à Ramoth-Galaad",
        category: "death",
      },
    ],
    explanation:
      "Achab épouse Jézabel et encourage le culte de Baal. Dieu envoie Élie pour le confronter. Malgré les miracles, son cœur ne change pas vraiment.",
    lesson:
      "Voir des miracles ne suffit pas si le cœur ne veut pas obéir.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, Middle Eastern features, deep crimson and dark purple robes, ornate bronze crown, blurred stormy Mount Carmel background, arrogant spiritually corrupted expression, cinematic dramatic lighting, Disney realism, consistent character series",
  },
  {
    id: "achazia-israel",
    name: "Achazia",
    number: 8,
    kingdom: "israel",
    imagePath: "/images/kings/achazia-israel.png",
    biblicalReference: "1 Rois 22:51 – 2 Rois 1",
    reignDuration: "2 ans",
    reignYears: "~853–852 av. J.-C.",
    parallelKing: "josaphat",
    prophets: ["Élie"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "🛏️",
        text: "Blessé gravement après une chute",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "Consulte Baal-Zebub au lieu de Dieu",
        category: "sin",
      },
      {
        emoji: "⚡",
        text: "Jugement annoncé par Élie",
        category: "prophet",
      },
      {
        emoji: "👤",
        text: "Suit les mauvaises voies de son père Achab",
        category: "sin",
      },
      {
        emoji: "⚰️",
        text: "Meurt suite au jugement divin",
        category: "death",
      },
    ],
    explanation:
      "Achazia suit les mauvaises voies de son père Achab. Après une chute grave, il cherche conseil auprès d'un faux dieu au lieu de consulter l'Éternel. Élie annonce sa mort, qui survient peu après.",
    lesson: "Dans la difficulté, cherchons Dieu en premier.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in dark crimson tones, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred royal chamber background, expressive face reflecting fear and spiritual confusion, highly detailed fabric textures, family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "joram-israel",
    name: "Joram",
    number: 9,
    kingdom: "israel",
    imagePath: "/images/kings/joram-israel.png",
    biblicalReference: "2 Rois 3–9",
    reignDuration: "12 ans",
    reignYears: "~852–841 av. J.-C.",
    parallelKing: "josaphat",
    prophets: ["Élisée"],
    faithfulness: 0,
    keyFacts: [
      { emoji: "⚔️", text: "Guerres contre Moab", category: "battle" },
      {
        emoji: "🕊️",
        text: "Miracles d'Élisée pendant son règne",
        category: "prophet",
      },
      { emoji: "🩸", text: "Tué par Jéhu", category: "death" },
      {
        emoji: "🏛️",
        text: "Retire certains aspects du culte de Baal",
        category: "achievement",
      },
      {
        emoji: "❌",
        text: "Continue les péchés de Jéroboam",
        category: "sin",
      },
    ],
    explanation:
      "Joram retire certains aspects du culte de Baal mais continue les péchés de Jéroboam. Il écoute parfois les prophètes mais ne change pas vraiment. Il est finalement tué par Jéhu.",
    lesson:
      "Changer un peu ne suffit pas si le cœur ne se tourne pas vers Dieu.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, dark red battle robes, bronze crown, cinematic warm golden lighting with subtle shadows, blurred battlefield background, hardened and conflicted expression, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, unified lighting and artistic direction",
  },
  {
    id: "jehu",
    name: "Jéhu",
    number: 10,
    kingdom: "israel",
    imagePath: "/images/kings/jehu.png",
    biblicalReference: "2 Rois 9–10",
    reignDuration: "28 ans",
    reignYears: "~841–814 av. J.-C.",
    parallelKing: "achazia-juda",
    prophets: ["Élisée"],
    faithfulness: 2,
    keyFacts: [
      {
        emoji: "🩸",
        text: "Exécute la maison d'Achab et Jézabel",
        category: "battle",
      },
      {
        emoji: "🔥",
        text: "Détruit officiellement le culte de Baal",
        category: "achievement",
      },
      {
        emoji: "⚠️",
        text: "Garde les veaux d'or de Jéroboam",
        category: "sin",
      },
      {
        emoji: "🕊️",
        text: "Oint par un prophète envoyé par Élisée",
        category: "prophet",
      },
      {
        emoji: "👑",
        text: "Fonde une dynastie de quatre générations",
        category: "identity",
      },
    ],
    explanation:
      "Jéhu est oint pour juger la maison d'Achab. Il agit avec zèle et détruit le culte de Baal. Mais il ne supprime pas les veaux d'or et ne marche pas pleinement avec Dieu.",
    lesson: "L'obéissance partielle n'est pas une obéissance complète.",
    imagePrompt:
      "3D Pixar-style biblical warrior king portrait, ancient Israelite royal character, Middle Eastern features, detailed robes in muted green and bronze tones, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred chariot battlefield background, intense determined expression, highly detailed textures, family-friendly Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "joachaz-israel",
    name: "Joachaz",
    number: 11,
    kingdom: "israel",
    imagePath: "/images/kings/joachaz-israel.png",
    biblicalReference: "2 Rois 13:1–9",
    reignDuration: "17 ans",
    reignYears: "~814–798 av. J.-C.",
    parallelKing: "joas-juda",
    prophets: ["Élisée"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "⚔️",
        text: "Forte oppression syrienne sous son règne",
        category: "battle",
      },
      {
        emoji: "🙏",
        text: "Prière du roi entendue, secours accordé par Dieu",
        category: "achievement",
      },
      {
        emoji: "⚠️",
        text: "Pas de réforme durable, l'idolâtrie continue",
        category: "sin",
      },
      {
        emoji: "🏹",
        text: "Armée réduite à seulement 10 chars",
        category: "battle",
      },
      { emoji: "👤", text: "Fils de Jéhu", category: "identity" },
    ],
    explanation:
      "Sous Joachaz, Israël est très opprimé par les Syriens. Le roi crie à Dieu dans la détresse, et Dieu accorde un soulagement. Mais le peuple ne se détourne pas vraiment de l'idolâtrie.",
    lesson:
      "Prier dans la détresse est bien, mais Dieu veut aussi un cœur transformé.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in dark crimson tones, subtle bronze crown, cinematic warm golden lighting with soft dramatic shadows, soft depth of field, blurred oppressed city and distant enemy banners background, expressive face reflecting worry and helplessness, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "joas-israel",
    name: "Joas",
    number: 12,
    kingdom: "israel",
    imagePath: "/images/kings/joas-israel.png",
    biblicalReference: "2 Rois 13:10–25",
    reignDuration: "16 ans",
    reignYears: "~798–782 av. J.-C.",
    parallelKing: "amatsia",
    prophets: ["Élisée"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "🕊️",
        text: "Derniers actes prophétiques d'Élisée",
        category: "prophet",
      },
      {
        emoji: "🏹",
        text: "Foi limitée : trois coups seulement, victoires limitées",
        category: "sin",
      },
      {
        emoji: "⚔️",
        text: "Victoires partielles sur la Syrie",
        category: "battle",
      },
      { emoji: "😢", text: "Pleure Élisée mourant", category: "prophet" },
      {
        emoji: "💪",
        text: "Bat Amatsia de Juda au combat",
        category: "battle",
      },
    ],
    explanation:
      "Joas rend visite au prophète Élisée avant sa mort. Élisée lui annonce des victoires, mais Joas montre peu de foi en ne frappant le sol que trois fois. Israël obtient des victoires, mais limitées.",
    lesson: "Dieu aime une foi courageuse et persévérante.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in dark crimson with subtle bronze accents, subtle bronze crown, cinematic warm golden lighting, soft depth of field, blurred prophet's chamber background with a symbolic arrow motif, expressive face reflecting hesitation and uncertain faith, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "jeroboam-ii",
    name: "Jéroboam II",
    number: 13,
    kingdom: "israel",
    imagePath: "/images/kings/jeroboam-ii.png",
    biblicalReference: "2 Rois 14:23–29",
    reignDuration: "41 ans",
    reignYears: "~782–753 av. J.-C.",
    parallelKing: "amatsia",
    prophets: ["Jonas", "Amos", "Osée"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "⏳",
        text: "Règne le plus long du royaume du Nord (41 ans)",
        category: "identity",
      },
      {
        emoji: "📈",
        text: "Grande expansion territoriale et prospérité",
        category: "achievement",
      },
      {
        emoji: "📢",
        text: "Amos et Osée dénoncent l'injustice et l'hypocrisie",
        category: "prophet",
      },
      {
        emoji: "🗺️",
        text: "Restaure les frontières d'Israël",
        category: "achievement",
      },
      {
        emoji: "❌",
        text: "Religion de façade et injustice sociale",
        category: "sin",
      },
    ],
    explanation:
      "Sous Jéroboam II, Israël devient fort et prospère. Les frontières s'agrandissent et l'économie s'améliore. Mais le peuple est injuste, et beaucoup pratiquent une religion de façade. Dieu envoie Amos et Osée pour avertir.",
    lesson:
      "La réussite ne vaut rien si le cœur est loin de Dieu et si on est injuste.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in luxurious dark purple with shadowed undertones, ornate bronze and gold crown, cinematic warm golden lighting, soft depth of field, blurred prosperous city marketplace background, expressive face reflecting proud confidence and spiritual blindness, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "zacharie",
    name: "Zacharie",
    number: 14,
    kingdom: "israel",
    imagePath: "/images/kings/zacharie.png",
    biblicalReference: "2 Rois 15:8–12",
    reignDuration: "6 mois",
    reignYears: "~753 av. J.-C.",
    parallelKing: "ozias",
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "⏳",
        text: "Règne très court (6 mois)",
        category: "identity",
      },
      {
        emoji: "🏁",
        text: "Fin de la dynastie de Jéhu (4e génération)",
        category: "identity",
      },
      { emoji: "🔪", text: "Assassiné par Shallum", category: "death" },
      {
        emoji: "❌",
        text: "Continue les mêmes péchés que ses prédécesseurs",
        category: "sin",
      },
      {
        emoji: "📜",
        text: "Accomplissement de la promesse à Jéhu (4 générations)",
        category: "identity",
      },
    ],
    explanation:
      "Zacharie continue les mêmes péchés que les rois avant lui. Son règne est très court. Il est assassiné, montrant l'instabilité du royaume.",
    lesson: "Sans Dieu, tout devient instable et fragile.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in dark crimson tones, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred tense palace corridor background, expressive face reflecting insecurity and looming danger, highly detailed fabric textures, family-friendly Disney-style realism, centered medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "shallum",
    name: "Shallum",
    number: 15,
    kingdom: "israel",
    imagePath: "/images/kings/shallum.png",
    biblicalReference: "2 Rois 15:13–15",
    reignDuration: "1 mois",
    reignYears: "~752 av. J.-C.",
    parallelKing: "ozias",
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "🩸",
        text: "Prend le pouvoir par complot et assassinat",
        category: "sin",
      },
      {
        emoji: "⏳",
        text: "Règne très court (1 mois)",
        category: "identity",
      },
      {
        emoji: "🔪",
        text: "Assassiné à son tour par Menahem",
        category: "death",
      },
      {
        emoji: "📉",
        text: "Illustre le chaos politique du royaume",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "Assassin assassiné, cycle de violence",
        category: "sin",
      },
    ],
    explanation:
      "Shallum prend le trône par un assassinat. Mais son règne ne dure qu'un mois. Il est à son tour tué, et le royaume continue à sombrer dans le chaos.",
    lesson: "Le mal attire le mal, et la paix disparaît.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in dark crimson with heavy shadows, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred palace intrigue background, expressive face reflecting nervous ambition and fear, highly detailed fabric textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "menahem",
    name: "Menahem",
    number: 16,
    kingdom: "israel",
    imagePath: "/images/kings/menahem.png",
    biblicalReference: "2 Rois 15:16–22",
    reignDuration: "10 ans",
    reignYears: "~752–742 av. J.-C.",
    parallelKing: "ozias",
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "🩸",
        text: "Cruauté marquante envers ses ennemis",
        category: "sin",
      },
      {
        emoji: "💰",
        text: "Paie un énorme tribut à l'Assyrie",
        category: "identity",
      },
      {
        emoji: "⚠️",
        text: "Israël s'affaiblit spirituellement et politiquement",
        category: "sin",
      },
      {
        emoji: "🏛️",
        text: "Début d'une forte dépendance assyrienne",
        category: "identity",
      },
      {
        emoji: "⏳",
        text: "Règne de 10 ans dans un climat d'instabilité",
        category: "identity",
      },
    ],
    explanation:
      "Menahem est connu pour sa cruauté. Pour garder son pouvoir, il paie un énorme tribut au roi d'Assyrie. Israël devient de plus en plus dépendant des nations étrangères.",
    lesson:
      "Chercher la sécurité sans Dieu coûte cher et n'apporte pas la paix.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in dark crimson with rugged armored details, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred desert city and distant Assyrian imagery background, expressive face reflecting harshness and cold calculation, highly detailed fabric textures, family-friendly Disney-style realism, centered medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "pekachia",
    name: "Pékachia",
    number: 17,
    kingdom: "israel",
    imagePath: "/images/kings/pekachia.png",
    biblicalReference: "2 Rois 15:23–26",
    reignDuration: "2 ans",
    reignYears: "~742–740 av. J.-C.",
    parallelKing: "ozias",
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      { emoji: "⏳", text: "Règne court de 2 ans", category: "identity" },
      {
        emoji: "🔪",
        text: "Assassiné par Pékach avec des hommes armés",
        category: "death",
      },
      {
        emoji: "📉",
        text: "Instabilité grandissante du royaume",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "Continue dans les péchés d'Israël",
        category: "sin",
      },
      { emoji: "👤", text: "Fils de Menahem", category: "identity" },
    ],
    explanation:
      "Pékachia continue dans les péchés d'Israël sans chercher Dieu. Son règne est court. Il est assassiné par Pékach, un de ses officiers.",
    lesson: "Quand on refuse Dieu, la vie devient instable et dangereuse.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in dark crimson tones, subtle bronze crown, cinematic warm golden lighting with tense shadows, soft depth of field, blurred throne room with guarded atmosphere background, expressive face reflecting unease and vulnerability, highly detailed fabric textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "pekach",
    name: "Pékach",
    number: 18,
    kingdom: "israel",
    imagePath: "/images/kings/pekach.png",
    biblicalReference: "2 Rois 15:27–31",
    reignDuration: "20 ans",
    reignYears: "~740–732 av. J.-C.",
    parallelKing: "ozias",
    prophets: ["Ésaïe", "Osée"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "⚔️",
        text: "Guerre syro-éphraïmite contre Juda",
        category: "battle",
      },
      {
        emoji: "🚪",
        text: "Grandes déportations assyriennes sous son règne",
        category: "battle",
      },
      {
        emoji: "📉",
        text: "Perte importante de territoires",
        category: "identity",
      },
      { emoji: "🩸", text: "Assassiné par Osée", category: "death" },
      {
        emoji: "❌",
        text: "Alliance anti-assyrienne désastreuse",
        category: "sin",
      },
    ],
    explanation:
      "Pékach règne longtemps dans un temps de guerres et de conspirations. Il attaque Juda et cherche des alliances humaines. L'Assyrie commence de grandes déportations : Israël perd des territoires et des familles sont emmenées loin.",
    lesson:
      "Les choix d'un dirigeant peuvent faire souffrir tout un peuple.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in dark crimson battle tones, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred stormy battlefield and distant Assyrian banners background, expressive face reflecting aggressive determination and looming defeat, highly detailed fabric textures, family-friendly Disney-style realism, centered medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "osee",
    name: "Osée",
    number: 19,
    kingdom: "israel",
    imagePath: "/images/kings/osee.png",
    biblicalReference: "2 Rois 17:1–23",
    reignDuration: "9 ans",
    reignYears: "~732–722 av. J.-C.",
    parallelKing: "achaz",
    prophets: ["Osée"],
    faithfulness: 1,
    keyFacts: [
      {
        emoji: "🏁",
        text: "Dernier roi d'Israël (royaume du Nord)",
        category: "identity",
      },
      {
        emoji: "🔥",
        text: "Chute de Samarie et fin du royaume du Nord (722 av. J.-C.)",
        category: "battle",
      },
      { emoji: "⛓️", text: "Exil en Assyrie", category: "death" },
      {
        emoji: "📖",
        text: "2 Rois 17 explique la cause spirituelle de la chute",
        category: "identity",
      },
      {
        emoji: "⚠️",
        text: "Tente des alliances humaines sans succès",
        category: "sin",
      },
    ],
    explanation:
      "Osée est le dernier roi du Nord. Le peuple a refusé d'écouter Dieu pendant longtemps. Osée tente des alliances humaines, mais cela ne sauve pas le royaume. Finalement, l'Assyrie prend Samarie et Israël est emmené en exil.",
    lesson:
      "Quand on refuse Dieu trop longtemps, les conséquences finissent par arriver.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in muted dark red tones, subtle bronze crown, cinematic warm golden lighting with a slightly fading atmosphere, soft depth of field, blurred besieged Samaria background, expressive face reflecting sorrow and resignation, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },

  // SOUTHERN KINGDOM - JUDAH (21 kings/queen)
  {
    id: "roboam",
    name: "Roboam",
    number: 1,
    kingdom: "judah",
    imagePath: "/images/kings/roboam.png",
    biblicalReference: "1 Rois 12:1–24 ; 14:21–31 ; 2 Chroniques 10–12",
    reignDuration: "17 ans",
    reignYears: "~930–913 av. J.-C.",
    parallelKing: "jeroboam-i",
    prophets: ["Schemaeja", "Iddo"],
    faithfulness: 2,
    keyFacts: [
      {
        emoji: "⚠️",
        text: "Division officielle du royaume (Nord/Sud)",
        category: "identity",
      },
      {
        emoji: "🛑",
        text: "Dieu empêche une guerre civile par la parole prophétique",
        category: "prophet",
      },
      {
        emoji: "🛡️",
        text: "Invasion égyptienne de Shishak et humiliation",
        category: "battle",
      },
      {
        emoji: "❌",
        text: "Rejette les conseils des anciens",
        category: "sin",
      },
      {
        emoji: "👤",
        text: "Fils de Salomon, premier roi de Juda",
        category: "identity",
      },
    ],
    explanation:
      "Roboam refuse d'écouter les conseils sages et traite durement le peuple. Le royaume se divise. Dieu l'avertit par un prophète d'éviter la guerre contre ses frères. Juda connaît aussi une invasion, et Roboam s'humilie un temps.",
    lesson: "L'orgueil et la dureté brisent l'unité.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in muted bronze and brown tones, subtle bronze crown, cinematic warm golden lighting, soft depth of field, blurred divided kingdom symbolism with palace background, expressive face reflecting stubbornness mixed with insecurity, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "abia",
    name: "Abia",
    number: 2,
    kingdom: "judah",
    imagePath: "/images/kings/abia.png",
    biblicalReference: "1 Rois 15:1–8 ; 2 Chroniques 13",
    reignDuration: "3 ans",
    reignYears: "~913–911 av. J.-C.",
    parallelKing: "jeroboam-i",
    prophets: ["Iddo"],
    faithfulness: 2,
    keyFacts: [
      {
        emoji: "⚔️",
        text: "Grande victoire contre Israël (2 Chroniques 13)",
        category: "battle",
      },
      {
        emoji: "📜",
        text: "Lampe maintenue à Jérusalem à cause de David",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "N'a pas un cœur pleinement attaché à Dieu",
        category: "sin",
      },
      { emoji: "👤", text: "Fils de Roboam", category: "identity" },
      { emoji: "⏳", text: "Règne court de 3 ans", category: "identity" },
    ],
    explanation:
      "Abia n'a pas un cœur pleinement attaché à Dieu, mais dans un conflit contre Israël, Juda crie à l'Éternel et Dieu accorde la victoire. Dieu protège Juda aussi à cause de la promesse faite à David.",
    lesson:
      "Dieu est fidèle à Ses promesses, même quand les hommes sont faibles.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in bronze with muted blue accents, subtle bronze crown, cinematic warm golden lighting, soft depth of field, blurred battlefield background, expressive face reflecting determination and a divided heart, highly detailed fabric textures, family-friendly Disney-style realism, centered medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "asa",
    name: "Asa",
    number: 3,
    kingdom: "judah",
    imagePath: "/images/kings/asa.png",
    biblicalReference: "1 Rois 15:9–24 ; 2 Chroniques 14–16",
    reignDuration: "41 ans",
    reignYears: "~911–870 av. J.-C.",
    parallelKing: "nadab",
    prophets: ["Azaria", "Hanani"],
    faithfulness: 4,
    keyFacts: [
      {
        emoji: "🧹",
        text: "Grande réforme anti-idoles",
        category: "achievement",
      },
      {
        emoji: "👑",
        text: "Dépose sa grand-mère idolâtre",
        category: "achievement",
      },
      {
        emoji: "⚔️",
        text: "Victoires militaires et période de paix",
        category: "battle",
      },
      {
        emoji: "⚠️",
        text: "Fin de règne moins fidèle (alliances humaines, dureté)",
        category: "sin",
      },
      {
        emoji: "⏳",
        text: "L'un des plus longs règnes de Juda (41 ans)",
        category: "identity",
      },
    ],
    explanation:
      "Asa commence très bien : il enlève des idoles et encourage Juda à chercher Dieu. Dieu lui donne du secours et de la paix. Mais à la fin, il s'appuie trop sur des alliances humaines et supporte mal la correction.",
    lesson: "Il faut faire confiance à Dieu jusqu'au bout.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in royal blue with gold accents, subtle bronze and gold crown, cinematic warm golden lighting, soft depth of field, blurred temple courtyard background, expressive face reflecting sincere devotion with a hint of later weariness, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "josaphat",
    name: "Josaphat",
    number: 4,
    kingdom: "judah",
    imagePath: "/images/kings/josaphat.png",
    biblicalReference: "1 Rois 22 ; 2 Chroniques 17–20",
    reignDuration: "25 ans",
    reignYears: "~870–848 av. J.-C.",
    parallelKing: "achab",
    prophets: ["Michée", "Jéhu fils de Hanani"],
    faithfulness: 4,
    keyFacts: [
      {
        emoji: "📖",
        text: "Programme national d'enseignement biblique",
        category: "achievement",
      },
      {
        emoji: "🎶",
        text: "Victoire miraculeuse par la louange (2 Ch 20)",
        category: "battle",
      },
      {
        emoji: "⚠️",
        text: "Alliances risquées avec Achab",
        category: "sin",
      },
      {
        emoji: "⚖️",
        text: "Réformes judiciaires importantes",
        category: "achievement",
      },
      {
        emoji: "👑",
        text: "Cherche Dieu et fortifie le royaume",
        category: "identity",
      },
    ],
    explanation:
      "Josaphat cherche Dieu et envoie des responsables enseigner la Loi dans tout Juda. Quand une grande armée arrive, il prie et le peuple loue Dieu : Dieu donne la victoire. Mais il fait aussi de mauvaises alliances avec Israël.",
    lesson:
      "Chercher Dieu fortifie, mais il faut choisir de bonnes alliances.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in deep royal blue tones, subtle bronze and gold crown, cinematic warm golden lighting, soft depth of field, blurred Jerusalem background with an open scroll motif, expressive face reflecting calm faith and leadership, highly detailed fabric textures, family-friendly Disney-style realism, centered medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "joram-juda",
    name: "Joram",
    number: 5,
    kingdom: "judah",
    imagePath: "/images/kings/joram-juda.png",
    biblicalReference: "2 Rois 8:16–24 ; 2 Chroniques 21",
    reignDuration: "8 ans",
    reignYears: "~848–841 av. J.-C.",
    parallelKing: "joram-israel",
    prophets: ["Élie"],
    faithfulness: 1,
    keyFacts: [
      {
        emoji: "🔗",
        text: "Mariage d'alliance avec la maison d'Achab",
        category: "sin",
      },
      { emoji: "🩸", text: "Tue ses propres frères", category: "sin" },
      {
        emoji: "📜",
        text: "Avertissement d'Élie par lettre",
        category: "prophet",
      },
      {
        emoji: "⚰️",
        text: "Mort douloureuse par maladie (2 Ch 21)",
        category: "death",
      },
      {
        emoji: "⚔️",
        text: "Édom se révolte sous son règne",
        category: "battle",
      },
    ],
    explanation:
      "Joram épouse la fille d'Achab et suit les mauvaises voies d'Israël. Il tue ses frères et entraîne Juda dans l'idolâtrie. Il perd la paix et finit par une maladie très douloureuse.",
    lesson:
      "Les mauvaises influences peuvent détruire une famille et un royaume.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in dark crimson and shadowed tones, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred palace background with ominous atmosphere, expressive face reflecting hardened ambition and inner unrest, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "achazia-juda",
    name: "Achazia",
    number: 6,
    kingdom: "judah",
    imagePath: "/images/kings/achazia-juda.png",
    biblicalReference: "2 Rois 8:25–29 ; 2 Chroniques 22:1–9",
    reignDuration: "1 an",
    reignYears: "~841 av. J.-C.",
    parallelKing: "joram-israel",
    prophets: ["Élisée"],
    faithfulness: 1,
    keyFacts: [
      { emoji: "⏳", text: "Règne très court (1 an)", category: "identity" },
      {
        emoji: "🔗",
        text: "Fortement influencé par la maison d'Achab",
        category: "sin",
      },
      {
        emoji: "🩸",
        text: "Tué lors de la purge menée par Jéhu",
        category: "death",
      },
      { emoji: "👤", text: "Fils de Joram de Juda", category: "identity" },
      {
        emoji: "❌",
        text: "Suit de mauvais conseils et s'éloigne de Dieu",
        category: "sin",
      },
    ],
    explanation:
      "Achazia est influencé par la famille d'Achab. Il suit de mauvais conseils et s'éloigne de Dieu. En se liant aux mauvaises personnes, il finit entraîné dans la chute de cette maison.",
    lesson: "Choisir de mauvaises influences peut détruire une vie.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in dark crimson tones, subtle bronze crown, cinematic warm golden lighting with dramatic shadows, soft depth of field, blurred palace courtyard background, expressive face reflecting youthful confusion and harmful influence, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "athalie",
    name: "Athalie",
    number: 7,
    kingdom: "judah",
    imagePath: "/images/kings/athalie.png",
    biblicalReference: "2 Rois 11 ; 2 Chroniques 22:10–23:15",
    reignDuration: "6 ans",
    reignYears: "~841–835 av. J.-C.",
    parallelKing: "jehu",
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "👑",
        text: "Seule reine régnante de Juda",
        category: "identity",
      },
      {
        emoji: "🩸",
        text: "Tente d'exterminer la lignée royale de David",
        category: "sin",
      },
      {
        emoji: "👶",
        text: "Joas sauvé et caché dans le Temple",
        category: "identity",
      },
      {
        emoji: "⚖️",
        text: "Renversée par un soulèvement fidèle à Dieu",
        category: "death",
      },
      {
        emoji: "👤",
        text: "Fille d'Achab (probablement)",
        category: "identity",
      },
    ],
    explanation:
      "Athalie prend le pouvoir par la force. Elle veut supprimer toute la lignée royale, mais Dieu protège un enfant, Joas, caché dans le temple. Finalement, elle est renversée.",
    lesson: "Dieu protège Ses promesses même quand tout semble perdu.",
    imagePrompt:
      "3D Pixar-style biblical queen portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in dark purple and shadowed tones, subtle crown, cinematic warm dramatic lighting, soft depth of field, blurred palace interior background, intense and ruthless expression reflecting ambition and spiritual darkness, highly detailed fabric textures, family-friendly Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "joas-juda",
    name: "Joas",
    number: 8,
    kingdom: "judah",
    imagePath: "/images/kings/joas-juda.png",
    biblicalReference: "2 Rois 12 ; 2 Chroniques 24",
    reignDuration: "40 ans",
    reignYears: "~835–796 av. J.-C.",
    parallelKing: "jehu",
    prophets: ["Zacharie fils de Jojada", "Joël"],
    faithfulness: 3,
    keyFacts: [
      {
        emoji: "👶",
        text: "Roi à 7 ans, l'un des plus jeunes",
        category: "identity",
      },
      {
        emoji: "🏛️",
        text: "Restaure le Temple de Jérusalem",
        category: "construction",
      },
      {
        emoji: "⚠️",
        text: "Chute spirituelle après la mort de Jojada",
        category: "sin",
      },
      {
        emoji: "🕊️",
        text: "Bien guidé par le prêtre Jojada",
        category: "prophet",
      },
      {
        emoji: "🔪",
        text: "Assassiné par ses serviteurs",
        category: "death",
      },
    ],
    explanation:
      "Joas devient roi enfant et fait le bien tant qu'il écoute le prêtre Jojada. Il restaure le temple. Mais après la mort de Jojada, il se détourne et écoute de mauvais conseillers.",
    lesson: "La foi doit devenir personnelle, pas seulement héritée.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in deep green tones, subtle bronze crown, cinematic warm golden lighting, soft depth of field, blurred temple restoration background, expressive face reflecting youthful determination and later vulnerability to influence, highly detailed fabric textures, family-friendly Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "amatsia",
    name: "Amatsia",
    number: 9,
    kingdom: "judah",
    imagePath: "/images/kings/amatsia.png",
    biblicalReference: "2 Rois 14 ; 2 Chroniques 25",
    reignDuration: "29 ans",
    reignYears: "~796–767 av. J.-C.",
    parallelKing: "joas-israel",
    prophets: [],
    faithfulness: 3,
    keyFacts: [
      {
        emoji: "✅",
        text: "Bon début puis orgueil après des victoires",
        category: "sin",
      },
      {
        emoji: "⚔️",
        text: "Bat les Édomites au combat",
        category: "battle",
      },
      {
        emoji: "⚠️",
        text: "Provoque Israël en guerre et perd",
        category: "battle",
      },
      {
        emoji: "🔪",
        text: "Assassiné par un complot (2 Ch 25)",
        category: "death",
      },
      {
        emoji: "👤",
        text: "Suit Dieu mais pas d'un cœur entier",
        category: "identity",
      },
    ],
    explanation:
      "Amatsia commence plutôt bien et cherche une justice mesurée. Mais il devient orgueilleux après des victoires. Son orgueil le conduit à de mauvais choix et à la défaite.",
    lesson: "L'orgueil peut ruiner un bon départ.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in deep green with bronze accents, subtle bronze crown, cinematic warm golden lighting, soft depth of field, blurred palace-to-battlefield background, expressive face reflecting confidence turning into pride, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "ozias",
    name: "Ozias",
    number: 10,
    kingdom: "judah",
    imagePath: "/images/kings/ozias.png",
    biblicalReference: "2 Rois 15:1–7 ; 2 Chroniques 26",
    reignDuration: "52 ans",
    reignYears: "~767–740 av. J.-C.",
    parallelKing: "jeroboam-ii",
    prophets: ["Ésaïe"],
    faithfulness: 4,
    keyFacts: [
      {
        emoji: "⏳",
        text: "Plus long règne de Juda (52 ans)",
        category: "identity",
      },
      {
        emoji: "🏗️",
        text: "Grande prospérité et fortifications",
        category: "construction",
      },
      {
        emoji: "⚠️",
        text: "Frappé de lèpre à cause de l'orgueil",
        category: "sin",
      },
      {
        emoji: "💪",
        text: "Cherche Dieu et le royaume prospère",
        category: "achievement",
      },
      {
        emoji: "🏛️",
        text: "Tente de brûler l'encens dans le Temple (acte réservé aux prêtres)",
        category: "sin",
      },
    ],
    explanation:
      "Ozias cherche Dieu et Juda prospère. Mais il devient fier. Il veut faire un acte réservé aux prêtres dans le temple et Dieu le discipline par la lèpre.",
    lesson: "Le succès demande une grande humilité.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in royal blue with gold accents, subtle bronze and gold crown, cinematic warm golden lighting, soft depth of field, blurred Jerusalem skyline and temple background, expressive face reflecting dignified strength with subtle pride, highly detailed fabric textures, family-friendly Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "jotham",
    name: "Jotham",
    number: 11,
    kingdom: "judah",
    imagePath: "/images/kings/jotham.png",
    biblicalReference: "2 Rois 15:32–38 ; 2 Chroniques 27",
    reignDuration: "16 ans",
    reignYears: "~740–736 av. J.-C.",
    parallelKing: "pekach",
    prophets: ["Ésaïe", "Michée"],
    faithfulness: 4,
    keyFacts: [
      {
        emoji: "🏗️",
        text: "Construit la porte supérieure du Temple",
        category: "construction",
      },
      {
        emoji: "✅",
        text: "Fidélité personnelle notable",
        category: "achievement",
      },
      {
        emoji: "⚠️",
        text: "Le peuple continue des pratiques mauvaises (2 Ch 27:2)",
        category: "identity",
      },
      {
        emoji: "💪",
        text: "Travaux de construction et stabilité",
        category: "construction",
      },
      { emoji: "👑", text: "Bon roi sage et mesuré", category: "identity" },
    ],
    explanation:
      "Jotham est personnellement fidèle et agit avec sagesse. Il construit et stabilise le royaume. Même si le peuple ne suit pas toujours, lui reste droit.",
    lesson: "On peut rester fidèle même quand d'autres ne le sont pas.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in royal blue tones, subtle bronze crown, cinematic warm golden lighting, soft depth of field, blurred city gates and construction background, calm steady expression reflecting quiet faithfulness, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "achaz",
    name: "Achaz",
    number: 12,
    kingdom: "judah",
    imagePath: "/images/kings/achaz.png",
    biblicalReference: "2 Rois 16 ; 2 Chroniques 28 ; Ésaïe 7",
    reignDuration: "16 ans",
    reignYears: "~736–716 av. J.-C.",
    parallelKing: "pekach",
    prophets: ["Ésaïe"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "❌",
        text: "L'un des pires rois de Juda",
        category: "sin",
      },
      {
        emoji: "🏛️",
        text: "Modifie des éléments du culte dans le Temple",
        category: "sin",
      },
      {
        emoji: "📖",
        text: "Contexte du signe d'Ésaïe 7 (Emmanuel)",
        category: "prophet",
      },
      {
        emoji: "💰",
        text: "Paie l'Assyrie avec l'or du Temple",
        category: "sin",
      },
      {
        emoji: "🔥",
        text: "Pratique le sacrifice d'enfants",
        category: "sin",
      },
    ],
    explanation:
      "Achaz se détourne profondément de Dieu. Il adopte des pratiques païennes et cherche l'aide des nations plutôt que de l'Éternel. Ésaïe l'avertit, mais il refuse d'écouter.",
    lesson: "Quand on ferme son cœur à Dieu, on se met en danger.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in dark crimson and shadowed tones, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred altered temple background, expressive face reflecting stubborn fear and spiritual confusion, highly detailed textures, family-friendly Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "ezechias",
    name: "Ézéchias",
    number: 13,
    kingdom: "judah",
    imagePath: "/images/kings/ezechias.png",
    biblicalReference: "2 Rois 18–20 ; 2 Chroniques 29–32 ; Ésaïe 36–39",
    reignDuration: "29 ans",
    reignYears: "~716–687 av. J.-C.",
    parallelKing: "osee",
    prophets: ["Ésaïe", "Michée"],
    faithfulness: 5,
    keyFacts: [
      {
        emoji: "🧹",
        text: "Grande réforme spirituelle",
        category: "achievement",
      },
      {
        emoji: "🐍",
        text: "Détruit le serpent d'airain devenu idole",
        category: "achievement",
      },
      {
        emoji: "🛡️",
        text: "Jérusalem délivrée de l'Assyrie (ange tue 185 000 soldats)",
        category: "battle",
      },
      {
        emoji: "🙏",
        text: "Vie prolongée de 15 ans (signe divin)",
        category: "achievement",
      },
      {
        emoji: "🏛️",
        text: "Purifie et rouvre le Temple",
        category: "construction",
      },
    ],
    explanation:
      "Ézéchias remet Dieu au centre : il purifie le temple, enlève les idoles et encourage l'adoration vraie. Quand l'Assyrie menace, il prie et fait confiance à Dieu. Dieu délivre Jérusalem.",
    lesson: "La prière et la confiance en Dieu apportent la force.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, radiant white and gold robes symbolizing purity and reform, elegant crown, cinematic warm golden lighting, soft depth of field, Temple of Jerusalem glowing and blurred in background, expression reflecting righteous courage and deep faith, highly detailed fabric textures, dramatic but gentle Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "manasse",
    name: "Manassé",
    number: 14,
    kingdom: "judah",
    imagePath: "/images/kings/manasse.png",
    biblicalReference: "2 Rois 21 ; 2 Chroniques 33",
    reignDuration: "55 ans",
    reignYears: "~687–643 av. J.-C.",
    parallelKing: null,
    prophets: ["Nahum", "Habakuk", "Sophonie"],
    faithfulness: 2,
    keyFacts: [
      {
        emoji: "⏳",
        text: "Règne le plus long de tous les rois (55 ans)",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "Très mauvais au début, pratique l'idolâtrie extrême",
        category: "sin",
      },
      {
        emoji: "🙏",
        text: "Repentance remarquable en captivité (2 Ch 33)",
        category: "achievement",
      },
      {
        emoji: "🔥",
        text: "Pratique le sacrifice d'enfants",
        category: "sin",
      },
      {
        emoji: "⛓️",
        text: "Déporté puis ramené après repentance",
        category: "identity",
      },
    ],
    explanation:
      "Manassé fait énormément de mal et entraîne Juda dans l'idolâtrie. Plus tard, Dieu le discipline et il se repent en captivité. Il revient changé et tente de réparer.",
    lesson: "Dieu peut pardonner quand on se repent vraiment.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, detailed period-accurate robes in bronze tones with subtle shadow-to-light gradient, subtle bronze crown, cinematic warm golden lighting, soft depth of field, blurred palace background, expressive face reflecting remorse and humility after a dark past, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "amon",
    name: "Amon",
    number: 15,
    kingdom: "judah",
    imagePath: "/images/kings/amon.png",
    biblicalReference: "2 Rois 21:19–26 ; 2 Chroniques 33:21–25",
    reignDuration: "2 ans",
    reignYears: "~643–641 av. J.-C.",
    parallelKing: null,
    prophets: [],
    faithfulness: 0,
    keyFacts: [
      { emoji: "⏳", text: "Règne très court (2 ans)", category: "identity" },
      {
        emoji: "🔪",
        text: "Assassiné par ses serviteurs",
        category: "death",
      },
      {
        emoji: "❌",
        text: "Continue les mauvaises pratiques de Manassé",
        category: "sin",
      },
      {
        emoji: "🚫",
        text: "Ne se repent pas contrairement à son père",
        category: "sin",
      },
      { emoji: "👤", text: "Père du roi Josias", category: "identity" },
    ],
    explanation:
      "Amon continue les mauvaises pratiques et ne se repent pas. Son règne est court et finit par un assassinat.",
    lesson: "Refuser de changer rend la vie fragile.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, dark red robes, subtle bronze crown, cinematic warm dramatic lighting, blurred tense palace interior background, uneasy hardened expression, detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "josias",
    name: "Josias",
    number: 16,
    kingdom: "judah",
    imagePath: "/images/kings/josias.png",
    biblicalReference: "2 Rois 22–23 ; 2 Chroniques 34–35",
    reignDuration: "31 ans",
    reignYears: "~641–609 av. J.-C.",
    parallelKing: null,
    prophets: ["Jérémie", "Sophonie"],
    faithfulness: 5,
    keyFacts: [
      { emoji: "👶", text: "Roi à 8 ans", category: "identity" },
      {
        emoji: "📖",
        text: "Redécouverte du Livre de la Loi",
        category: "achievement",
      },
      {
        emoji: "🔥",
        text: "Grande réforme spirituelle",
        category: "achievement",
      },
      {
        emoji: "⚰️",
        text: "Meurt au combat contre le pharaon Néko",
        category: "death",
      },
      {
        emoji: "👑",
        text: "Dernier bon roi de Juda",
        category: "identity",
      },
    ],
    explanation:
      "Josias devient roi très jeune et cherche Dieu. On retrouve le Livre de la Loi, et son cœur est touché. Il détruit les idoles et ramène le peuple vers Dieu.",
    lesson: "La Parole de Dieu peut changer un cœur et une nation.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, radiant white and gold robes, elegant crown, cinematic warm golden lighting, soft depth of field, blurred temple background with a scroll motif, youthful expression reflecting passionate reform and devotion to God, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "joachaz-juda",
    name: "Joachaz",
    number: 17,
    kingdom: "judah",
    imagePath: "/images/kings/joachaz-juda.png",
    biblicalReference: "2 Rois 23:31–33 ; 2 Chroniques 36:1–4",
    reignDuration: "3 mois",
    reignYears: "~609 av. J.-C.",
    parallelKing: null,
    prophets: ["Jérémie"],
    faithfulness: 0,
    keyFacts: [
      { emoji: "⏳", text: "Règne très court (3 mois)", category: "identity" },
      {
        emoji: "⛓️",
        text: "Déposé et emmené captif par l'Égypte",
        category: "death",
      },
      {
        emoji: "❌",
        text: "Ne ramène pas le peuple à Dieu",
        category: "sin",
      },
      { emoji: "👤", text: "Fils de Josias", category: "identity" },
      {
        emoji: "🏛️",
        text: "Remplacé par son frère Jojakim sur ordre du pharaon",
        category: "identity",
      },
    ],
    explanation:
      "Joachaz règne très peu de temps. Il ne ramène pas le peuple à Dieu. Il est emmené en captivité par l'Égypte.",
    lesson: "Sans Dieu, même un trône ne tient pas longtemps.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, dark crimson robes, subtle bronze crown, cinematic warm lighting, soft depth of field, blurred palace exit and guards background, anxious expression reflecting sudden downfall, detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "jojakim",
    name: "Jojakim",
    number: 18,
    kingdom: "judah",
    imagePath: "/images/kings/jojakim.png",
    biblicalReference:
      "2 Rois 23:34–24:7 ; 2 Chroniques 36:5–8 ; Jérémie 36",
    reignDuration: "11 ans",
    reignYears: "~609–598 av. J.-C.",
    parallelKing: null,
    prophets: ["Jérémie", "Daniel"],
    faithfulness: 0,
    keyFacts: [
      {
        emoji: "📜",
        text: "Brûle le rouleau prophétique de Jérémie (Jr 36)",
        category: "sin",
      },
      {
        emoji: "⚠️",
        text: "Période de forte pression babylonienne",
        category: "identity",
      },
      {
        emoji: "❌",
        text: "Rejette les avertissements de Dieu",
        category: "sin",
      },
      { emoji: "💰", text: "Vassal de Babylone", category: "identity" },
      {
        emoji: "⏳",
        text: "Règne de 11 ans dans un climat de déclin",
        category: "identity",
      },
    ],
    explanation:
      "Jojakim rejette les avertissements de Dieu. Il méprise la Parole annoncée par Jérémie. Le royaume se fragilise et les menaces babyloniennes augmentent.",
    lesson: "Rejeter la Parole de Dieu endurcit le cœur.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, dark crimson and shadowed robes, subtle bronze crown, cinematic warm dramatic lighting, soft depth of field, blurred throne room with torn scroll motif in background, defiant hardened expression, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "jojakin",
    name: "Jojakin",
    number: 19,
    kingdom: "judah",
    imagePath: "/images/kings/jojakin.png",
    biblicalReference: "2 Rois 24:8–17 ; 2 Chroniques 36:9–10",
    reignDuration: "3 mois",
    reignYears: "~598–597 av. J.-C.",
    parallelKing: null,
    prophets: ["Jérémie", "Ézéchiel"],
    faithfulness: 0,
    keyFacts: [
      { emoji: "⏳", text: "Règne très court (3 mois)", category: "identity" },
      {
        emoji: "⛓️",
        text: "Déporté à Babylone (2e déportation, 597 av. J.-C.)",
        category: "death",
      },
      {
        emoji: "👑",
        text: "Plus tard relevé en captivité (2 R 25:27–30)",
        category: "identity",
      },
      { emoji: "👤", text: "Fils de Jojakim", category: "identity" },
      {
        emoji: "📉",
        text: "Juda perd encore de sa force sous son règne",
        category: "identity",
      },
    ],
    explanation:
      "Jojakin règne très brièvement. Babylone l'emmène en exil avec des responsables du peuple. Juda perd encore de sa force.",
    lesson:
      "Quand on refuse Dieu longtemps, les conséquences s'accumulent.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, dark red robes, subtle bronze crown, cinematic warm lighting, soft depth of field, blurred Babylonian exile backdrop, sorrowful youthful expression, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "sedecias",
    name: "Sédécias",
    number: 20,
    kingdom: "judah",
    imagePath: "/images/kings/sedecias.png",
    biblicalReference:
      "2 Rois 24–25 ; 2 Chroniques 36:11–21 ; Jérémie 37–39",
    reignDuration: "11 ans",
    reignYears: "~597–586 av. J.-C.",
    parallelKing: null,
    prophets: ["Jérémie"],
    faithfulness: 1,
    keyFacts: [
      { emoji: "🏁", text: "Dernier roi de Juda", category: "identity" },
      {
        emoji: "🔥",
        text: "Destruction de Jérusalem (586 av. J.-C.)",
        category: "battle",
      },
      {
        emoji: "🏛️",
        text: "Temple de Salomon détruit",
        category: "identity",
      },
      {
        emoji: "⛓️",
        text: "Exil du peuple à Babylone",
        category: "death",
      },
      {
        emoji: "❌",
        text: "Ignore les avertissements de Jérémie",
        category: "sin",
      },
    ],
    explanation:
      "Sédécias reçoit de nombreux avertissements de Jérémie. Il a peur des hommes et hésite, mais il n'obéit pas vraiment à Dieu. Finalement, Jérusalem est détruite et le peuple part en exil.",
    lesson: "Craindre les hommes au lieu de Dieu mène au désastre.",
    imagePrompt:
      "3D Pixar-style biblical king portrait, ancient Judah royal character, Middle Eastern features, muted dark red robes, bronze crown worn and damaged, cinematic warm dramatic lighting, soft depth of field, blurred burning Jerusalem background, tragic sorrowful expression reflecting fear and regret, highly detailed textures, Disney-style realism, centered medium close-up, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "jesus",
    name: "Jésus — Roi des Rois",
    number: 43,
    kingdom: "united",
    imagePath: "/images/kings/jesus.png",
    biblicalReference: "Matthieu 1 ; Luc 1–2 ; Jean 18–20",
    reignDuration: "Règne éternel",
    reignYears: "~4 av. J.-C. – aujourd'hui (règne éternel)",
    parallelKing: null,
    prophets: ["Ésaïe", "Michée", "Jérémie", "Zacharie"],
    faithfulness: 5,
    keyFacts: [
      {
        emoji: "👑",
        text: "Roi promis dans la lignée de David",
        category: "identity",
      },
      {
        emoji: "✝️",
        text: "Mort pour les péchés du monde",
        category: "death",
      },
      {
        emoji: "🌅",
        text: "Ressuscité le troisième jour",
        category: "achievement",
      },
      {
        emoji: "👑",
        text: "Royaume éternel qui ne finira jamais",
        category: "identity",
      },
      { emoji: "🕊️", text: "Sauveur du monde", category: "identity" },
    ],
    explanation:
      "Depuis des siècles, Dieu avait promis qu'un Roi parfait viendrait dans la descendance de David. Tous les rois ont échoué, mais Jésus est venu sans péché. Il a obéi parfaitement à Dieu, aimé parfaitement les hommes, et annoncé le Royaume de Dieu. Il n'est pas venu pour dominer par la force, mais pour sauver en donnant Sa vie.",
    lesson:
      "Jésus est le seul Roi parfait. Il est venu sauver nos cœurs et régner pour toujours. Nous pouvons Lui faire confiance et Le suivre.",
    imagePrompt:
      "3D Pixar-style biblical king portrait of Jesus Christ, Middle Eastern features, radiant white and pure gold robes symbolizing divine kingship, subtle crown of light rather than metal, cinematic heavenly golden lighting, soft glowing atmosphere, blurred Jerusalem and subtle cross silhouette in background, expression reflecting perfect love, authority, and compassion, highly detailed textures, dramatic yet gentle Disney-style realism, centered medium close-up composition, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
];

export function getKingsByEra(kingdom: Kingdom): King[] {
  return KINGS.filter((king) => king.kingdom === kingdom);
}

export function getKingById(id: string): King | undefined {
  return KINGS.find((king) => king.id === id);
}

export function getEraByKingdom(kingdom: Kingdom): Era | undefined {
  return ERAS.find((era) => era.id === kingdom);
}

export function getAllProphets(): string[] {
  const prophets = new Set<string>();
  for (const king of KINGS) {
    for (const prophet of king.prophets) {
      prophets.add(prophet);
    }
  }
  return [...prophets].sort();
}
