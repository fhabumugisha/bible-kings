import type { Prophet, ProphetEra, ProphetEraId } from "../types";

export const PROPHET_ERAS: ProphetEra[] = [
  {
    id: "united",
    label: "Monarchie Unie",
    description: "Prophètes de la transition juges → royauté",
    dates: "~1080 à 930 av. J.-C.",
    color: "era-united",
    prophetCount: 4,
  },
  {
    id: "israel",
    label: "Royaume du Nord — Israël",
    description:
      "Prophètes envoyés au royaume rebelle, défenseurs du monothéisme",
    dates: "~930 à 722 av. J.-C.",
    color: "era-israel",
    prophetCount: 7,
  },
  {
    id: "judah",
    label: "Royaume du Sud — Juda",
    description:
      "Prophètes du royaume de David, jusqu'à l'exil à Babylone",
    dates: "~930 à 586 av. J.-C.",
    color: "era-judah",
    prophetCount: 9,
  },
  {
    id: "postexilic",
    label: "Post-Exiliques",
    description:
      "Prophètes du retour d'exil et de la reconstruction du Temple",
    dates: "~539 à 430 av. J.-C.",
    color: "era-postexilic",
    prophetCount: 3,
  },
];

export const PROPHETS: Prophet[] = [
  // ERA 1 — MONARCHIE UNIE
  {
    id: "samuel",
    name: "Samuel",
    number: 1,
    era: "united",
    biblicalReference: "1 Samuel 1–25",
    ministryDuration: "~50 ans",
    ministryYears: "~1080–1030 av. J.-C.",
    kingdom: "Monarchie Unie (transition juges → royauté)",
    contemporaryKings: ["Saül", "David"],
    specialty:
      "Juge, prophète et sacrificateur — dernier juge d'Israël",
    impact: 4,
    keyFacts: [
      {
        emoji: "👶",
        text: "Consacré à Dieu par sa mère Anne avant sa naissance",
        category: "identity",
      },
      {
        emoji: "🌙",
        text: "Appelé par Dieu dans la nuit alors qu'il était enfant à Silo",
        category: "identity",
      },
      {
        emoji: "⚖️",
        text: "Dernier juge d'Israël, gouverne le peuple avec justice",
        category: "achievement",
      },
      {
        emoji: "👑",
        text: "Oint Saül puis David comme rois d'Israël",
        category: "achievement",
      },
      {
        emoji: "🙏",
        text: "Intercède sans cesse pour le peuple auprès de Dieu",
        category: "prophet",
      },
    ],
    explanation:
      "Samuel est un enfant consacré à Dieu avant même sa naissance. Sa mère Anne le confie au sacrificateur Éli au temple de Silo. Dieu l'appelle une nuit alors qu'il est encore jeune, et il devient le plus grand juge d'Israël. C'est lui qui oint les deux premiers rois, Saül puis David.",
    lesson:
      "Dieu peut appeler quelqu'un dès l'enfance pour accomplir de grandes choses.",
    imagePath: "/images/prophets/samuel.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, elderly Israelite prophet with long white beard, Middle Eastern features, simple linen ephod and humble robes in cream and earth tones, no crown but radiating spiritual authority, cinematic warm golden lighting, soft depth of field, ancient tabernacle of Shiloh background blurred, expressive face reflecting gentle wisdom and deep devotion, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "nathan",
    name: "Nathan",
    number: 2,
    era: "united",
    biblicalReference: "2 Samuel 7, 12 ; 1 Rois 1",
    ministryDuration: "~30 ans",
    ministryYears: "~1000–970 av. J.-C.",
    kingdom: "Monarchie Unie",
    contemporaryKings: ["David", "Salomon"],
    specialty:
      "Prophète de cour — conseiller royal et messager de la promesse messianique",
    impact: 3,
    keyFacts: [
      {
        emoji: "🏰",
        text: "Transmet l'alliance éternelle de Dieu à David (2 Samuel 7)",
        category: "achievement",
      },
      {
        emoji: "🐑",
        text: "Confronte David par la parabole de la brebis volée",
        category: "prophet",
      },
      {
        emoji: "😢",
        text: "Provoque la repentance de David après son péché avec Bath-Schéba",
        category: "prophet",
      },
      {
        emoji: "👑",
        text: "Aide Salomon à monter sur le trône contre la tentative d'Adonija",
        category: "achievement",
      },
      {
        emoji: "📜",
        text: "Auteur présumé de chroniques royales (1 Chroniques 29:29)",
        category: "identity",
      },
    ],
    explanation:
      "Nathan est le prophète personnel du roi David. Il lui transmet la magnifique promesse que sa dynastie durera pour toujours — c'est l'alliance davidique qui annonce le Messie. Mais Nathan sait aussi dire la vérité difficile : il confronte David après son péché avec Bath-Schéba par une parabole bouleversante.",
    lesson:
      "Un vrai ami dit la vérité, même quand c'est difficile à entendre.",
    imagePath: "/images/prophets/nathan.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, dignified Israelite court prophet, Middle Eastern features, elegant but modest dark robes with subtle embroidery, no crown, scroll in hand, cinematic warm golden lighting, soft depth of field, ancient Jerusalem royal palace interior background blurred, expressive face reflecting bold courage and compassionate wisdom, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "gad",
    name: "Gad",
    number: 3,
    era: "united",
    biblicalReference:
      "1 Samuel 22:5 ; 2 Samuel 24:11–19 ; 1 Chroniques 21",
    ministryDuration: "~30 ans",
    ministryYears: "~1010–980 av. J.-C.",
    kingdom: "Monarchie Unie",
    contemporaryKings: ["David"],
    specialty:
      "Prophète et voyant du roi — conseiller dans les moments de crise",
    impact: 2,
    keyFacts: [
      {
        emoji: "🏃",
        text: "Conseille David pendant sa fuite devant Saül",
        category: "achievement",
      },
      {
        emoji: "👁️",
        text: "Surnommé « le voyant » du roi David",
        category: "identity",
      },
      {
        emoji: "⚖️",
        text: "Transmet à David le choix des trois châtiments après le recensement",
        category: "prophet",
      },
      {
        emoji: "🏛️",
        text: "Indique l'emplacement du futur Temple (l'aire d'Ornan/Aravna)",
        category: "achievement",
      },
      {
        emoji: "📜",
        text: "Contribue à l'écriture de l'histoire de David (1 Chroniques 29:29)",
        category: "identity",
      },
    ],
    explanation:
      "Gad est appelé « le voyant de David ». Il accompagne David depuis sa fuite devant Saül et reste à ses côtés tout au long de son règne. C'est lui qui transmet à David le choix terrible après le recensement interdit : trois jours de peste, trois mois de fuite ou trois ans de famine.",
    lesson:
      "Nos décisions ont des conséquences, mais Dieu offre toujours une voie de miséricorde.",
    imagePath: "/images/prophets/gad.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, weathered Israelite seer and advisor, Middle Eastern features, travel-worn robes in muted brown and olive tones, no crown, walking staff in hand, cinematic warm golden lighting, soft depth of field, ancient hilltop with distant camp background blurred, expressive face reflecting quiet determination and faithfulness, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "ahija",
    name: "Ahija",
    number: 4,
    era: "united",
    biblicalReference: "1 Rois 11:29–39 ; 14:1–18",
    ministryDuration: "~30 ans",
    ministryYears: "~950–920 av. J.-C.",
    kingdom: "Monarchie Unie → début du Royaume du Nord",
    contemporaryKings: ["Salomon", "Jéroboam Ier"],
    specialty:
      "Prophète de transition — annonce la division du royaume",
    impact: 1,
    keyFacts: [
      {
        emoji: "👘",
        text: "Déchire un manteau neuf en 12 morceaux pour symboliser la division du royaume",
        category: "prophet",
      },
      {
        emoji: "🔟",
        text: "Donne 10 morceaux à Jéroboam : annonce que 10 tribus lui seront confiées",
        category: "prophet",
      },
      {
        emoji: "👁️",
        text: "Devenu aveugle, reconnaît tout de même la femme de Jéroboam déguisée",
        category: "identity",
      },
      {
        emoji: "⚰️",
        text: "Prophétise la mort du fils de Jéroboam et la chute de sa dynastie",
        category: "prophet",
      },
      {
        emoji: "📜",
        text: "Ses écrits sont mentionnés dans les chroniques (2 Chroniques 9:29)",
        category: "identity",
      },
    ],
    explanation:
      "Ahija de Silo est le prophète qui annonce la division du royaume. Il déchire son manteau neuf en douze morceaux et en donne dix à Jéroboam, annonçant que Dieu lui confiera dix tribus. Plus tard, devenu aveugle et âgé, il annonce à la femme de Jéroboam la mort de leur fils et la destruction de sa dynastie.",
    lesson:
      "Les promesses de Dieu viennent avec des conditions : il faut obéir pour en profiter.",
    imagePath: "/images/prophets/ahija.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, very elderly blind Israelite prophet, Middle Eastern features, worn and patched robes in faded earth tones, milky white eyes suggesting blindness, torn garment symbolically in hands, cinematic warm golden lighting, soft depth of field, ancient stone house interior in Shiloh background blurred, expressive face reflecting prophetic authority despite frailty, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },

  // ERA 2 — ROYAUME DU NORD
  {
    id: "jehu-fils-de-hanani",
    name: "Jéhu fils de Hanani",
    number: 5,
    era: "israel",
    biblicalReference:
      "1 Rois 16:1–7 ; 2 Chroniques 19:1–3 ; 20:34",
    ministryDuration: "~30 ans",
    ministryYears: "~900–870 av. J.-C.",
    kingdom: "Israël (Nord) et Juda (Sud)",
    contemporaryKings: ["Baescha", "Josaphat"],
    specialty:
      "Prophète de jugement — annonce la chute des dynasties infidèles",
    impact: 1,
    keyFacts: [
      {
        emoji: "⚖️",
        text: "Prononce le jugement de Dieu sur la dynastie de Baescha (Israël)",
        category: "prophet",
      },
      {
        emoji: "🤝",
        text: "Reproche à Josaphat son alliance militaire avec Achab",
        category: "prophet",
      },
      {
        emoji: "👨‍👦",
        text: "Fils du prophète Hanani qui avait été emprisonné par le roi Asa",
        category: "identity",
      },
      {
        emoji: "📜",
        text: "Auteur d'une chronique royale citée dans les Écritures",
        category: "identity",
      },
      {
        emoji: "🔄",
        text: "Intervient dans les deux royaumes (Nord et Sud)",
        category: "achievement",
      },
    ],
    explanation:
      "Jéhu fils de Hanani (à ne pas confondre avec le roi Jéhu) est un prophète qui intervient dans les deux royaumes. Il annonce la destruction de la maison de Baescha au Nord, puis reproche au bon roi Josaphat de Juda son alliance avec le méchant roi Achab.",
    lesson:
      "S'allier avec ceux qui rejettent Dieu, même avec de bonnes intentions, mène au trouble.",
    imagePath: "/images/prophets/jehu-fils-de-hanani.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, stern middle-aged Israelite prophet, Middle Eastern features, austere dark robes with rough texture, no crown, accusatory but righteous posture, cinematic warm golden lighting, soft depth of field, ancient palace courtyard background blurred, expressive face reflecting fierce devotion to justice and unwavering conviction, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "elie",
    name: "Élie",
    number: 6,
    era: "israel",
    biblicalReference: "1 Rois 17–19, 21 ; 2 Rois 1–2",
    ministryDuration: "~15 ans",
    ministryYears: "~870–855 av. J.-C.",
    kingdom: "Israël (Nord)",
    contemporaryKings: ["Achab", "Achazia"],
    specialty:
      "Miracles et confrontation — champion du monothéisme contre le culte de Baal",
    impact: 5,
    keyFacts: [
      {
        emoji: "🔥",
        text: "Fait descendre le feu du ciel sur le mont Carmel face à 450 prophètes de Baal",
        category: "achievement",
      },
      {
        emoji: "🌧️",
        text: "Annonce 3 ans de sécheresse puis fait revenir la pluie par la prière",
        category: "achievement",
      },
      {
        emoji: "🐦",
        text: "Nourri par des corbeaux au torrent de Kérith pendant la famine",
        category: "identity",
      },
      {
        emoji: "🌪️",
        text: "Enlevé au ciel dans un char de feu sans mourir",
        category: "death",
      },
      {
        emoji: "⛰️",
        text: "Rencontre Dieu dans un murmure doux et léger à la montagne d'Horeb",
        category: "prophet",
      },
    ],
    explanation:
      "Élie est peut-être le prophète le plus spectaculaire de toute la Bible. Il apparaît de nulle part pour défier le roi Achab et la reine Jézabel qui ont entraîné Israël dans l'idolâtrie. Il fait descendre le feu du ciel sur le mont Carmel devant 450 prophètes de Baal. Pourtant, il connaît aussi le découragement et la peur. À la fin, il monte au ciel dans un char de feu.",
    lesson:
      "Même quand tu te sens seul à croire, Dieu est toujours avec toi et il est plus puissant que tout.",
    imagePath: "/images/prophets/elie.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, wild and intense Israelite prophet, Middle Eastern features, rough animal-skin cloak and leather belt, untamed dark hair and thick beard, no crown, cinematic dramatic golden-orange lighting suggesting fire, soft depth of field, ancient Mount Carmel altar with flames background blurred, expressive face reflecting fierce righteous anger and unwavering faith, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "elisee",
    name: "Élisée",
    number: 7,
    era: "israel",
    biblicalReference: "2 Rois 2–13",
    ministryDuration: "~50 ans",
    ministryYears: "~855–800 av. J.-C.",
    kingdom: "Israël (Nord)",
    contemporaryKings: ["Joram", "Jéhu", "Joachaz", "Joas"],
    specialty:
      "Miracles de compassion — double portion de l'esprit d'Élie",
    impact: 4,
    keyFacts: [
      {
        emoji: "👘",
        text: "Reçoit le manteau d'Élie et une double portion de son esprit",
        category: "identity",
      },
      {
        emoji: "🫙",
        text: "Multiplie l'huile d'une veuve pauvre pour payer ses dettes",
        category: "achievement",
      },
      {
        emoji: "👦",
        text: "Ressuscite le fils de la Sunamite en s'étendant sur l'enfant",
        category: "achievement",
      },
      {
        emoji: "🛁",
        text: "Guérit le général syrien Naaman de la lèpre dans le Jourdain",
        category: "achievement",
      },
      {
        emoji: "⚔️",
        text: "Rend une armée ennemie aveugle puis la conduit au roi d'Israël",
        category: "battle",
      },
    ],
    explanation:
      "Élisée est le disciple et successeur d'Élie. Il demande une double portion de son esprit et accomplit effectivement deux fois plus de miracles ! Là où Élie était solitaire et farouche, Élisée est proche du peuple : il purifie des eaux, multiplie l'huile d'une veuve, ressuscite un enfant et guérit un général lépreux.",
    lesson:
      "La compassion multipliée par la puissance de Dieu peut transformer n'importe quelle situation.",
    imagePath: "/images/prophets/elisee.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, kind but authoritative Israelite prophet, Middle Eastern features, flowing prophetic robes in deep blue-grey tones, bald head as described in Scripture, holding Elijah's folded mantle, cinematic warm golden lighting, soft depth of field, ancient Jordan River valley background blurred, expressive face reflecting deep compassion and quiet supernatural power, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "jonas",
    name: "Jonas",
    number: 8,
    era: "israel",
    biblicalReference: "2 Rois 14:25 ; Livre de Jonas",
    ministryDuration: "~780–760 av. J.-C.",
    ministryYears: "~780–760 av. J.-C.",
    kingdom: "Israël (Nord) — envoyé à Ninive (Assyrie)",
    contemporaryKings: ["Jéroboam II"],
    specialty:
      "Prophète missionnaire — envoyé aux nations païennes",
    impact: 3,
    keyFacts: [
      {
        emoji: "🚢",
        text: "Fuit sa mission en bateau vers Tarsis (direction opposée de Ninive)",
        category: "sin",
      },
      {
        emoji: "🐋",
        text: "Avalé par un grand poisson et y passe trois jours et trois nuits",
        category: "identity",
      },
      {
        emoji: "🙏",
        text: "Prie dans le ventre du poisson et Dieu le délivre",
        category: "achievement",
      },
      {
        emoji: "🏙️",
        text: "Prêche à Ninive et toute la ville se repent, du roi au plus petit",
        category: "achievement",
      },
      {
        emoji: "😤",
        text: "Boude sous une plante parce que Dieu pardonne à ses ennemis",
        category: "sin",
      },
    ],
    explanation:
      "Jonas est le prophète qui essaie de fuir sa mission ! Dieu l'envoie prêcher à Ninive, la capitale assyrienne ennemie d'Israël, mais Jonas embarque dans la direction opposée. Avalé par un grand poisson, il prie et obéit finalement. Toute la ville de Ninive se repent — mais Jonas, lui, boude parce qu'il voulait que Dieu les punisse !",
    lesson:
      "La compassion de Dieu dépasse nos frontières et nos préjugés.",
    imagePath: "/images/prophets/jonas.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, reluctant and grumpy Israelite prophet, Middle Eastern features, salt-stained travel robes in faded green and brown, windswept hair from sea journey, no crown, cinematic warm golden lighting with hints of ocean blue, soft depth of field, ancient Nineveh city walls background blurred, expressive face reflecting stubborn reluctance mixed with underlying compassion, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "amos",
    name: "Amos",
    number: 9,
    era: "israel",
    biblicalReference: "Livre d'Amos",
    ministryDuration: "~760–750 av. J.-C.",
    ministryYears: "~760–750 av. J.-C.",
    kingdom: "Originaire de Juda, prêche en Israël (Nord)",
    contemporaryKings: ["Jéroboam II", "Ozias"],
    specialty:
      "Justice sociale — dénonce l'oppression des pauvres",
    impact: 4,
    keyFacts: [
      {
        emoji: "🐑",
        text: "Simple berger et cultivateur de sycomores avant d'être appelé",
        category: "identity",
      },
      {
        emoji: "⚖️",
        text: "Dénonce l'exploitation des pauvres par les riches d'Israël",
        category: "prophet",
      },
      {
        emoji: "🎶",
        text: "Célèbre : « Que le droit coule comme de l'eau, et la justice comme un torrent »",
        category: "achievement",
      },
      {
        emoji: "🏛️",
        text: "Expulsé de Béthel par le sacrificateur Amatsia qui veut le faire taire",
        category: "prophet",
      },
      {
        emoji: "🦁",
        text: "Utilise des images puissantes : le lion rugit, le berger arrache sa proie",
        category: "identity",
      },
    ],
    explanation:
      "Amos n'est ni fils de prophète ni formé dans une école. C'est un simple berger et cultivateur de sycomores que Dieu arrache à son troupeau pour l'envoyer prêcher dans le riche royaume du Nord. En pleine prospérité sous Jéroboam II, il dénonce l'injustice sociale, le luxe égoïste et le culte hypocrite.",
    lesson:
      "Dieu n'accepte pas nos prières si nous maltraitons les autres.",
    imagePath: "/images/prophets/amos.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, rugged shepherd-turned-prophet, Middle Eastern features, rough wool shepherd robes in dusty brown, sun-weathered skin, strong calloused hands, no crown, cinematic warm golden lighting, soft depth of field, ancient marketplace of Bethel background blurred, expressive face reflecting righteous indignation and compassion for the poor, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "osee",
    name: "Osée",
    number: 10,
    era: "israel",
    biblicalReference: "Livre d'Osée",
    ministryDuration: "~40 ans",
    ministryYears: "~755–715 av. J.-C.",
    kingdom: "Israël (Nord), jusqu'à la chute de Samarie",
    contemporaryKings: [
      "Jéroboam II",
      "Zacharie",
      "Shallum",
      "Menahem",
      "Peqahia",
      "Péqah",
      "Osée",
    ],
    specialty:
      "Amour fidèle de Dieu — prophète dont la vie illustre le message",
    impact: 4,
    keyFacts: [
      {
        emoji: "💔",
        text: "Épouse Gomer sur ordre de Dieu, sachant qu'elle sera infidèle",
        category: "identity",
      },
      {
        emoji: "🔄",
        text: "Rachète sa femme sur un marché d'esclaves pour la ramener à lui",
        category: "achievement",
      },
      {
        emoji: "👶",
        text: "Donne à ses enfants des noms prophétiques terribles (« Pas-mon-peuple », « Sans-pitié »)",
        category: "prophet",
      },
      {
        emoji: "❤️",
        text: "Illustre l'amour inconditionnel de Dieu : « Je te fiancerai pour toujours »",
        category: "prophet",
      },
      {
        emoji: "⚠️",
        text: "Annonce la chute du royaume du Nord, accomplie en 722 av. J.-C.",
        category: "prophet",
      },
    ],
    explanation:
      "Osée reçoit de Dieu l'ordre le plus étrange : épouser Gomer, une femme infidèle. Quand elle le quitte et tombe dans la misère, Dieu lui dit d'aller la racheter et de l'aimer encore. Toute sa vie de couple est une image vivante de l'amour de Dieu pour Israël, qui ne cesse de courir après les faux dieux.",
    lesson:
      "Même quand on est infidèle, l'amour de Dieu nous poursuit et nous rachète.",
    imagePath: "/images/prophets/osee.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, sorrowful but loving Israelite prophet, Middle Eastern features, simple robes in muted burgundy and grey, expression of heartbreak mixed with unconditional love, no crown, cinematic warm golden lighting with melancholic undertones, soft depth of field, ancient Northern Kingdom village background blurred, expressive face reflecting deep emotional pain and steadfast devotion, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "abdias",
    name: "Abdias",
    number: 11,
    era: "israel",
    biblicalReference: "Livre d'Abdias",
    ministryDuration: "~845 av. J.-C.",
    ministryYears: "~845 av. J.-C.",
    kingdom: "Juda (Sud) — prophétie contre Édom",
    contemporaryKings: ["Joram de Juda"],
    specialty:
      "Prophétie contre les nations — jugement d'Édom (descendants d'Ésaü)",
    impact: 1,
    keyFacts: [
      {
        emoji: "📜",
        text: "Auteur du livre le plus court de l'Ancien Testament (21 versets)",
        category: "identity",
      },
      {
        emoji: "🏔️",
        text: "Prophétise contre Édom, peuple vivant dans les montagnes rocheuses de Séir",
        category: "prophet",
      },
      {
        emoji: "🗡️",
        text: "Dénonce Édom pour avoir trahi « son frère Jacob » lors d'une attaque",
        category: "prophet",
      },
      {
        emoji: "⬇️",
        text: "Annonce la chute d'Édom malgré sa position fortifiée en hauteur",
        category: "prophet",
      },
      {
        emoji: "👑",
        text: "Prophétise le triomphe final du royaume de Dieu sur toutes les nations",
        category: "prophet",
      },
    ],
    explanation:
      "Abdias écrit le livre le plus court de l'Ancien Testament : un seul chapitre de 21 versets ! Son message est entièrement dirigé contre Édom, le peuple descendant d'Ésaü, frère de Jacob. Les Édomites se sont réjouis quand Jérusalem a été attaquée et ont même participé au pillage. Abdias annonce que Dieu les jugera pour cette trahison fraternelle.",
    lesson:
      "Se réjouir du malheur des autres, surtout de sa propre famille, attire le jugement de Dieu.",
    imagePath: "/images/prophets/abdias.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, solemn Israelite prophet, Middle Eastern features, simple dark robes in charcoal and umber, scroll clutched to chest, no crown, cinematic warm golden lighting, soft depth of field, ancient rocky Edomite mountains of Petra background blurred, expressive face reflecting somber justice and protective love for his people, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },

  // ERA 3 — ROYAUME DU SUD
  {
    id: "joel",
    name: "Joël",
    number: 12,
    era: "judah",
    biblicalReference: "Livre de Joël",
    ministryDuration: "~835–800 av. J.-C.",
    ministryYears: "~835–800 av. J.-C.",
    kingdom: "Juda (Sud)",
    contemporaryKings: ["Joas de Juda"],
    specialty:
      "Prophétie eschatologique — annonce le « Jour de l'Éternel » et l'effusion de l'Esprit",
    impact: 3,
    keyFacts: [
      {
        emoji: "🦗",
        text: "Décrit une invasion de sauterelles dévastatrice comme image du jugement",
        category: "prophet",
      },
      {
        emoji: "💨",
        text: "Prophétise l'effusion de l'Esprit « sur toute chair » (cité par Pierre à la Pentecôte)",
        category: "prophet",
      },
      {
        emoji: "💔",
        text: "Appel puissant à la repentance : « Déchirez vos cœurs et non vos vêtements »",
        category: "prophet",
      },
      {
        emoji: "☀️",
        text: "Annonce des signes cosmiques : le soleil changé en ténèbres, la lune en sang",
        category: "prophet",
      },
      {
        emoji: "🌾",
        text: "Promet la restauration après le jugement : Dieu rendra les années perdues",
        category: "prophet",
      },
    ],
    explanation:
      "Joël prend une catastrophe naturelle — une invasion de sauterelles qui dévaste tout — pour en faire une leçon spirituelle. Il y voit une image du jugement de Dieu et appelle le peuple à se repentir de tout son cœur. Sa promesse la plus célèbre concerne l'effusion de l'Esprit de Dieu « sur toute chair », accomplie à la Pentecôte selon le livre des Actes.",
    lesson:
      "Même dans les catastrophes, Dieu appelle à revenir à lui et promet un avenir meilleur.",
    imagePath: "/images/prophets/joel.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, earnest young Israelite prophet, Middle Eastern features, clean priestly-style robes in white and blue-grey, expressive gesturing hands, no crown, cinematic warm golden lighting with dramatic storm clouds, soft depth of field, ancient Jerusalem Temple courtyard with locust swarm hint background blurred, expressive face reflecting urgent pleading and hopeful vision, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "esaie",
    name: "Ésaïe",
    number: 13,
    era: "judah",
    biblicalReference: "Livre d'Ésaïe ; 2 Rois 19–20",
    ministryDuration: "~60 ans",
    ministryYears: "~740–680 av. J.-C.",
    kingdom: "Juda (Sud)",
    contemporaryKings: ["Ozias", "Jotham", "Achaz", "Ézéchias"],
    specialty:
      "Prophéties messianiques — le « cinquième évangile » de l'Ancien Testament",
    impact: 5,
    keyFacts: [
      {
        emoji: "👁️",
        text: "Voit Dieu sur son trône et les séraphins criant « Saint, saint, saint ! »",
        category: "prophet",
      },
      {
        emoji: "🔥",
        text: "Purifié par un charbon ardent touché à ses lèvres",
        category: "identity",
      },
      {
        emoji: "👶",
        text: "Prophétise la naissance d'Emmanuel : « La vierge sera enceinte » (Ésaïe 7:14)",
        category: "prophet",
      },
      {
        emoji: "🩸",
        text: "Décrit le Serviteur souffrant qui porte nos péchés (Ésaïe 53), 700 ans avant la croix",
        category: "prophet",
      },
      {
        emoji: "🛡️",
        text: "Annonce à Ézéchias que Dieu détruira l'armée assyrienne (185 000 soldats tués)",
        category: "achievement",
      },
    ],
    explanation:
      "Ésaïe est le prince des prophètes. Sa vision de Dieu sur son trône dans le Temple est l'une des scènes les plus grandioses de la Bible. Il prophétise avec une précision stupéfiante la venue du Messie — sa naissance d'une vierge, ses souffrances, sa mort pour nos péchés — 700 ans avant Jésus ! Il conseille aussi les rois et annonce la délivrance miraculeuse de Jérusalem face aux Assyriens.",
    lesson:
      "Dieu connaît l'avenir et prépare son plan de salut longtemps à l'avance.",
    imagePath: "/images/prophets/esaie.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, majestic and noble Israelite prophet, Middle Eastern features, rich dark blue and purple prophetic robes with gold trim suggesting royal court access, no crown but commanding presence, cinematic warm golden lighting with ethereal glow, soft depth of field, ancient Jerusalem Temple interior with smoke and heavenly light background blurred, expressive face reflecting awe-struck reverence and prophetic fire, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "michee",
    name: "Michée",
    number: 14,
    era: "judah",
    biblicalReference: "Livre de Michée",
    ministryDuration: "~35 ans",
    ministryYears: "~735–700 av. J.-C.",
    kingdom: "Juda (Sud) — originaire de Moréscheth",
    contemporaryKings: ["Jotham", "Achaz", "Ézéchias"],
    specialty:
      "Justice sociale et prophétie messianique — le prophète du peuple",
    impact: 3,
    keyFacts: [
      {
        emoji: "🏘️",
        text: "Prophétise que le Messie naîtra à Bethléhem (Michée 5:1)",
        category: "prophet",
      },
      {
        emoji: "⚖️",
        text: "Résume la volonté de Dieu : justice, miséricorde, humilité (Michée 6:8)",
        category: "prophet",
      },
      {
        emoji: "🏙️",
        text: "Annonce la destruction de Samarie et de Jérusalem à cause de l'injustice",
        category: "prophet",
      },
      {
        emoji: "🗣️",
        text: "Dénonce les faux prophètes qui disent « Paix ! » pour de l'argent",
        category: "prophet",
      },
      {
        emoji: "🌍",
        text: "Prophétise un temps de paix universelle où les épées deviendront des socs de charrue",
        category: "prophet",
      },
    ],
    explanation:
      "Michée est un homme du peuple, originaire d'un petit village, qui dénonce la corruption des puissants de Jérusalem et Samarie. Comme Amos, il défend les pauvres écrasés par les riches. Mais il est aussi l'auteur d'une prophétie extraordinaire : il désigne Bethléhem, un tout petit village, comme lieu de naissance du Messie.",
    lesson:
      "Ce que Dieu demande est simple : « Pratiquer la justice, aimer la miséricorde et marcher humblement avec ton Dieu. »",
    imagePath: "/images/prophets/michee.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, humble village prophet, Middle Eastern features, simple rural robes in earthy terracotta and cream, dust on sandals, no crown, cinematic warm golden lighting, soft depth of field, ancient small village of Moresheth with fields background blurred, expressive face reflecting passionate defense of the vulnerable and moral clarity, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "nahum",
    name: "Nahum",
    number: 15,
    era: "judah",
    biblicalReference: "Livre de Nahum",
    ministryDuration: "~660–630 av. J.-C.",
    ministryYears: "~660–630 av. J.-C.",
    kingdom: "Juda (Sud)",
    contemporaryKings: ["Manassé"],
    specialty:
      "Prophétie contre Ninive — justice divine sur les empires oppresseurs",
    impact: 2,
    keyFacts: [
      {
        emoji: "🏙️",
        text: "Prophétise la destruction totale de Ninive, capitale de l'empire assyrien",
        category: "prophet",
      },
      {
        emoji: "🌊",
        text: "Décrit la chute avec des images saisissantes : inondation, lion dévorant",
        category: "prophet",
      },
      {
        emoji: "⚖️",
        text: "Proclame que Dieu est lent à la colère mais ne laisse pas le coupable impuni",
        category: "prophet",
      },
      {
        emoji: "📖",
        text: "Suite de l'histoire de Jonas : Ninive s'était repentie, puis est retombée",
        category: "identity",
      },
      {
        emoji: "🎉",
        text: "Annonce une bonne nouvelle pour Juda : « Voici sur les montagnes les pieds du messager de paix »",
        category: "prophet",
      },
    ],
    explanation:
      "Environ 150 ans après que Jonas ait prêché à Ninive et que la ville se soit repentie, Nahum annonce sa destruction définitive. La capitale assyrienne est devenue un empire de violence et de cruauté. Nahum décrit la chute de Ninive avec une poésie puissante et dramatique. La prophétie s'accomplit en 612 av. J.-C.",
    lesson:
      "Une repentance passée ne protège pas des conséquences d'un retour au mal.",
    imagePath: "/images/prophets/nahum.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, intense prophetic figure, Middle Eastern features, dark prophetic robes in deep crimson and black suggesting divine judgment, no crown, cinematic dramatic lighting with orange-red undertones suggesting distant burning city, soft depth of field, ancient burning Nineveh skyline background blurred, expressive face reflecting righteous satisfaction and fierce protection of the oppressed, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "habakuk",
    name: "Habakuk",
    number: 16,
    era: "judah",
    biblicalReference: "Livre d'Habakuk",
    ministryDuration: "~610–600 av. J.-C.",
    ministryYears: "~610–600 av. J.-C.",
    kingdom: "Juda (Sud)",
    contemporaryKings: ["Joïaqim"],
    specialty:
      "Dialogue avec Dieu — le prophète qui ose questionner Dieu",
    impact: 2,
    keyFacts: [
      {
        emoji: "❓",
        text: "Ose questionner Dieu : « Pourquoi laisses-tu le mal prospérer ? »",
        category: "prophet",
      },
      {
        emoji: "🤯",
        text: "Choqué d'apprendre que Dieu utilisera les cruels Babyloniens comme instrument de jugement",
        category: "prophet",
      },
      {
        emoji: "📜",
        text: "Écrit la phrase citée 3 fois dans le Nouveau Testament : « Le juste vivra par la foi »",
        category: "achievement",
      },
      {
        emoji: "🗼",
        text: "Monte sur sa tour de guet pour attendre la réponse de Dieu",
        category: "identity",
      },
      {
        emoji: "🎵",
        text: "Termine par un cantique de foi extraordinaire malgré la catastrophe annoncée",
        category: "achievement",
      },
    ],
    explanation:
      "Habakuk est unique parmi les prophètes : au lieu de parler au peuple de la part de Dieu, il parle à Dieu de la part du peuple ! Il ose demander : « Pourquoi laisses-tu l'injustice régner ? » Quand Dieu répond qu'il enverra les Babyloniens comme instrument de jugement, Habakuk est choqué et questionne encore. Finalement, il arrive à une confiance totale.",
    lesson:
      "Il est permis de poser des questions à Dieu, tant qu'on reste prêt à lui faire confiance.",
    imagePath: "/images/prophets/habakuk.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, thoughtful questioning prophet, Middle Eastern features, modest scholar-like robes in dusty sage green and brown, hand on chin in contemplative pose, no crown, cinematic warm golden lighting, soft depth of field, ancient watchtower overlooking Judean hills background blurred, expressive face reflecting deep questioning mixed with emerging trust, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "sophonie",
    name: "Sophonie",
    number: 17,
    era: "judah",
    biblicalReference: "Livre de Sophonie",
    ministryDuration: "~640–625 av. J.-C.",
    ministryYears: "~640–625 av. J.-C.",
    kingdom: "Juda (Sud)",
    contemporaryKings: ["Josias"],
    specialty:
      "Le Jour de l'Éternel — jugement universel et espérance pour les humbles",
    impact: 2,
    keyFacts: [
      {
        emoji: "👑",
        text: "Descendant du roi Ézéchias — prophète de lignée royale",
        category: "identity",
      },
      {
        emoji: "🔥",
        text: "Annonce un jugement total : « Je détruirai tout de dessus la face de la terre »",
        category: "prophet",
      },
      {
        emoji: "🌍",
        text: "Prophétise contre Juda mais aussi contre les nations païennes voisines",
        category: "prophet",
      },
      {
        emoji: "🎶",
        text: "Promet que Dieu se réjouira de son peuple « avec des chants d'allégresse » (Sophonie 3:17)",
        category: "prophet",
      },
      {
        emoji: "🙏",
        text: "Appelle les humbles du pays à chercher l'Éternel comme refuge",
        category: "prophet",
      },
    ],
    explanation:
      "Sophonie est un descendant du roi Ézéchias — un prophète de sang royal ! Il prêche juste avant la grande réforme du roi Josias. Son message est radical : le Jour de l'Éternel approche et il sera terrible. Mais au milieu des avertissements, il offre une promesse magnifique : Dieu lui-même se réjouira de son peuple avec des chants d'amour.",
    lesson:
      "L'humilité devant Dieu est le meilleur refuge quand le jugement approche.",
    imagePath: "/images/prophets/sophonie.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, young nobleman-turned-prophet, Middle Eastern features, fine but not ostentatious robes in deep purple and cream suggesting royal lineage, no crown, cinematic warm golden lighting, soft depth of field, ancient Jerusalem during Josiah's reforms background blurred, expressive face reflecting urgent warning tempered by tender hope, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "jeremie",
    name: "Jérémie",
    number: 18,
    era: "judah",
    biblicalReference: "Livre de Jérémie ; Lamentations",
    ministryDuration: "~40 ans",
    ministryYears: "~626–586 av. J.-C.",
    kingdom: "Juda (Sud), jusqu'à la destruction de Jérusalem",
    contemporaryKings: [
      "Josias",
      "Joachaz",
      "Joïaqim",
      "Joïakin",
      "Sédécias",
    ],
    specialty:
      "Prophète pleureur — appel à la repentance pendant 40 ans, rejeté mais fidèle",
    impact: 5,
    keyFacts: [
      {
        emoji: "👦",
        text: "Appelé par Dieu dès le ventre de sa mère, proteste : « Je suis un enfant ! »",
        category: "identity",
      },
      {
        emoji: "😭",
        text: "Surnommé « le prophète qui pleure » à cause de sa compassion pour son peuple",
        category: "identity",
      },
      {
        emoji: "🕳️",
        text: "Jeté dans une citerne boueuse par ses ennemis, sauvé par un Éthiopien",
        category: "sin",
      },
      {
        emoji: "📜",
        text: "Annonce la « nouvelle alliance » écrite dans les cœurs (Jérémie 31:31-34)",
        category: "prophet",
      },
      {
        emoji: "🔥",
        text: "Le roi Joïaqim brûle son rouleau — Jérémie le réécrit en plus long !",
        category: "achievement",
      },
    ],
    explanation:
      "Jérémie est appelé très jeune — il proteste qu'il n'est qu'un enfant ! Pendant 40 ans, il supplie Juda de se repentir pour éviter la destruction. Personne ne l'écoute. Il est battu, emprisonné, jeté dans une citerne boueuse. Il pleure sur son peuple. Pourtant, il annonce aussi la « nouvelle alliance » que Dieu écrira dans les cœurs — la promesse la plus importante de l'Ancien Testament.",
    lesson:
      "La fidélité à Dieu n'est pas toujours récompensée par le succès, mais elle a toujours une valeur éternelle.",
    imagePath: "/images/prophets/jeremie.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, weeping but resilient young prophet, Middle Eastern features, torn and mud-stained robes in dark olive and brown suggesting hardship, tear-streaked face, no crown, cinematic warm golden lighting with somber tones, soft depth of field, ancient Jerusalem walls with smoke from approaching army background blurred, expressive face reflecting overwhelming sorrow and unbreakable faithfulness, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "ezechiel",
    name: "Ézéchiel",
    number: 19,
    era: "judah",
    biblicalReference: "Livre d'Ézéchiel",
    ministryDuration: "~22 ans",
    ministryYears: "~593–571 av. J.-C.",
    kingdom: "Exil à Babylone (déporté avec Joïakin en 597 av. J.-C.)",
    contemporaryKings: ["Joïakin", "Sédécias"],
    specialty:
      "Visions apocalyptiques — le prophète des exilés et de la gloire de Dieu",
    impact: 4,
    keyFacts: [
      {
        emoji: "👁️",
        text: "Voit le trône de Dieu porté par quatre créatures vivantes extraordinaires",
        category: "prophet",
      },
      {
        emoji: "💀",
        text: "Prophétise sur une vallée d'ossements secs qui reprennent vie (résurrection d'Israël)",
        category: "prophet",
      },
      {
        emoji: "🎭",
        text: "Utilise des mimes prophétiques : couché 390 jours, mange du pain cuit sur un feu inhabituel",
        category: "identity",
      },
      {
        emoji: "🏛️",
        text: "Reçoit la vision détaillée d'un Temple futur glorieux (chapitres 40–48)",
        category: "prophet",
      },
      {
        emoji: "💔",
        text: "Sa femme meurt et Dieu lui interdit de pleurer — signe pour les exilés",
        category: "death",
      },
    ],
    explanation:
      "Ézéchiel est un sacrificateur déporté à Babylone qui reçoit des visions spectaculaires : un trône céleste porté par des créatures à quatre faces, une vallée d'ossements desséchés qui reprennent vie, un Temple futur d'une splendeur inouïe. Il utilise aussi des mimes et des actions symboliques (couché sur le côté pendant des mois !) pour transmettre le message de Dieu aux exilés.",
    lesson:
      "Même quand tout semble mort et fini, Dieu peut ressusciter et restaurer.",
    imagePath: "/images/prophets/ezechiel.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, intense visionary priest-prophet, Middle Eastern features, priestly robes adapted for exile in faded white and blue-grey, shaved head as sign of mourning, wide eyes suggesting supernatural visions, no crown, cinematic dramatic golden lighting with mystical blue accents, soft depth of field, ancient Babylonian canal (Kebar) with distant ziggurat background blurred, expressive face reflecting overwhelming awe and prophetic intensity, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "daniel",
    name: "Daniel",
    number: 20,
    era: "judah",
    biblicalReference: "Livre de Daniel",
    ministryDuration: "~75 ans",
    ministryYears: "~605–530 av. J.-C.",
    kingdom: "Exil à Babylone, puis empire médo-perse",
    contemporaryKings: ["Joïaqim"],
    specialty:
      "Prophéties apocalyptiques et fidélité en exil — homme d'État et prophète",
    impact: 5,
    keyFacts: [
      {
        emoji: "🥦",
        text: "Refuse la nourriture du roi et reste en meilleure santé que tous les autres",
        category: "identity",
      },
      {
        emoji: "🦁",
        text: "Jeté dans la fosse aux lions pour avoir prié — les lions ne le touchent pas",
        category: "achievement",
      },
      {
        emoji: "👑",
        text: "Interprète le rêve de la statue de Nebucadnetsar (4 empires mondiaux)",
        category: "achievement",
      },
      {
        emoji: "✋",
        text: "Déchiffre l'écriture mystérieuse sur le mur au festin de Belschatsar",
        category: "achievement",
      },
      {
        emoji: "📅",
        text: "Prophétise les « 70 semaines » qui annoncent la venue du Messie (Daniel 9:24-27)",
        category: "prophet",
      },
    ],
    explanation:
      "Daniel est déporté adolescent à Babylone mais refuse de compromettre sa foi. Il interprète les rêves des rois, gouverne l'empire et reçoit des visions sur la succession des empires mondiaux et la venue du Messie. Jeté dans la fosse aux lions pour avoir prié Dieu, il en sort indemne. Sa fidélité est telle que même ses ennemis ne trouvent rien à lui reprocher.",
    lesson:
      "Rester fidèle à Dieu même sous pression ouvre des portes que personne ne peut fermer.",
    imagePath: "/images/prophets/daniel.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, noble young statesman-prophet, Middle Eastern features, Babylonian court robes in rich purple and gold adapted with subtle Hebrew elements, no crown but dignified bearing, cinematic warm golden lighting with dramatic palace atmosphere, soft depth of field, ancient Babylonian palace with lions motif background blurred, expressive face reflecting serene courage and unshakeable faith amidst foreign power, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },

  // ERA 4 — POST-EXILIQUES
  {
    id: "aggee",
    name: "Aggée",
    number: 21,
    era: "postexilic",
    biblicalReference: "Livre d'Aggée",
    ministryDuration: "~4 mois",
    ministryYears: "~520 av. J.-C.",
    kingdom: "Retour d'exil — reconstruction du Temple à Jérusalem",
    contemporaryKings: [],
    specialty:
      "Reconstruction — mobilise le peuple pour rebâtir le Temple",
    impact: 2,
    keyFacts: [
      {
        emoji: "🏗️",
        text: "Mobilise le peuple pour reprendre la construction du Temple abandonné depuis 16 ans",
        category: "achievement",
      },
      {
        emoji: "🏠",
        text: "Reproche aux Juifs de soigner leurs propres maisons pendant que le Temple est en ruines",
        category: "prophet",
      },
      {
        emoji: "📅",
        text: "Ministère le plus court : 4 messages en 4 mois (août–décembre 520 av. J.-C.)",
        category: "identity",
      },
      {
        emoji: "⚡",
        text: "Effet immédiat : le peuple reprend la construction 23 jours après son premier message",
        category: "achievement",
      },
      {
        emoji: "🌟",
        text: "Prophétise que la gloire du second Temple surpassera celle du premier",
        category: "prophet",
      },
    ],
    explanation:
      "Quand les Juifs reviennent d'exil, ils commencent à reconstruire le Temple puis s'arrêtent pendant 16 ans pour s'occuper de leurs propres maisons. Aggée les secoue : « Est-ce le moment d'habiter vos maisons lambrissées, tandis que cette maison est en ruines ? » Son message produit un effet immédiat — en un mois, la construction reprend !",
    lesson:
      "Les priorités de Dieu doivent passer avant notre confort personnel.",
    imagePath: "/images/prophets/aggee.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, energetic elderly Israelite prophet, Middle Eastern features, construction-dusted simple robes in warm tan and cream, animated gesturing hands as if motivating workers, no crown, cinematic warm golden lighting, soft depth of field, ancient half-built Second Temple with scaffolding background blurred, expressive face reflecting fiery determination and encouraging warmth, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "zacharie",
    name: "Zacharie",
    number: 22,
    era: "postexilic",
    biblicalReference: "Livre de Zacharie",
    ministryDuration: "~40 ans",
    ministryYears: "~520–480 av. J.-C.",
    kingdom: "Retour d'exil — reconstruction du Temple à Jérusalem",
    contemporaryKings: [],
    specialty:
      "Visions apocalyptiques et prophéties messianiques — le « petit Apocalypse »",
    impact: 3,
    keyFacts: [
      {
        emoji: "🌙",
        text: "Reçoit 8 visions nocturnes spectaculaires en une seule nuit",
        category: "prophet",
      },
      {
        emoji: "🐴",
        text: "Prophétise le roi-Messie entrant à Jérusalem monté sur un ânon (Zacharie 9:9)",
        category: "prophet",
      },
      {
        emoji: "💰",
        text: "Annonce les 30 pièces d'argent, prix de la trahison (Zacharie 11:12-13)",
        category: "prophet",
      },
      {
        emoji: "🗡️",
        text: "Prophétise : « Ils regarderont vers celui qu'ils ont percé » (Zacharie 12:10)",
        category: "prophet",
      },
      {
        emoji: "🏛️",
        text: "Encourage la reconstruction du Temple aux côtés du prophète Aggée",
        category: "achievement",
      },
    ],
    explanation:
      "Zacharie est contemporain d'Aggée et encourage lui aussi la reconstruction du Temple, mais son style est complètement différent. Il reçoit huit visions nocturnes spectaculaires remplies de cavaliers, cornes, chandeliers et chariots. Ses prophéties messianiques sont parmi les plus précises de l'Ancien Testament : le roi humble monté sur un âne, les trente pièces d'argent, le côté percé.",
    lesson:
      "Derrière les événements visibles, Dieu accomplit un plan invisible et magnifique.",
    imagePath: "/images/prophets/zacharie.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, young visionary priest-prophet, Middle Eastern features, priestly robes in white and silver-blue, wide wondering eyes suggesting nocturnal visions, no crown, cinematic warm golden-blue lighting suggesting night visions, soft depth of field, ancient Jerusalem under reconstruction with starry sky background blurred, expressive face reflecting wonder and prophetic certainty, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
  {
    id: "malachie",
    name: "Malachie",
    number: 23,
    era: "postexilic",
    biblicalReference: "Livre de Malachie",
    ministryDuration: "~430 av. J.-C.",
    ministryYears: "~430 av. J.-C.",
    kingdom: "Post-exilique — Juda sous domination perse, Temple reconstruit",
    contemporaryKings: [],
    specialty:
      "Dernier avertissement — ferme l'Ancien Testament et annonce le précurseur du Messie",
    impact: 3,
    keyFacts: [
      {
        emoji: "📜",
        text: "Dernier prophète de l'Ancien Testament — suivi de 400 ans de silence",
        category: "identity",
      },
      {
        emoji: "🗣️",
        text: "Style unique de débat : Dieu accuse → le peuple dit « En quoi ? » → Dieu répond",
        category: "identity",
      },
      {
        emoji: "🐑",
        text: "Dénonce les sacrificateurs qui offrent à Dieu des animaux boiteux et malades",
        category: "prophet",
      },
      {
        emoji: "🔥",
        text: "Annonce la venue d'un messager qui préparera le chemin (accompli par Jean-Baptiste)",
        category: "prophet",
      },
      {
        emoji: "☀️",
        text: "Prophétise le « soleil de justice » qui se lèvera avec la guérison sous ses ailes",
        category: "prophet",
      },
    ],
    explanation:
      "Malachie est le dernier prophète de l'Ancien Testament. Après lui, 400 ans de silence prophétique jusqu'à Jean-Baptiste ! Le peuple est revenu d'exil et le Temple est reconstruit, mais la ferveur a disparu. Les sacrificateurs offrent des animaux malades, les hommes divorcent, les dîmes ne sont plus données. Malachie utilise un style de débat unique : Dieu accuse, le peuple répond « En quoi ? », et Dieu explique.",
    lesson:
      "Servir Dieu à moitié, c'est ne pas le servir du tout.",
    imagePath: "/images/prophets/malachie.png",
    imagePrompt:
      "3D Pixar-style biblical prophet portrait, stern final prophet figure, Middle Eastern features, simple priestly robes in dark indigo and cream, holding an open scroll as if reading God's accusation, no crown, cinematic warm golden lighting with twilight undertones suggesting end of an era, soft depth of field, ancient rebuilt Jerusalem Temple with quiet empty courtyard background blurred, expressive face reflecting righteous frustration and hope for the coming dawn, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits",
  },
];

export function getProphetsByEra(era: ProphetEraId): Prophet[] {
  return PROPHETS.filter((p) => p.era === era);
}

export function getProphetById(id: string): Prophet | undefined {
  return PROPHETS.find((p) => p.id === id);
}

export function getAdjacentProphets(
  id: string
): { prev: Prophet | null; next: Prophet | null } {
  const index = PROPHETS.findIndex((p) => p.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? PROPHETS[index - 1] : null,
    next: index < PROPHETS.length - 1 ? PROPHETS[index + 1] : null,
  };
}

export function getProphetEra(era: ProphetEraId): ProphetEra | undefined {
  return PROPHET_ERAS.find((e) => e.id === era);
}
