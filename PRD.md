# PRD — Rois d'Israël : Application Biblique Interactive

> **Version :** 1.0
> **Date :** 16 février 2026
> **Statut :** Draft

---

## Table des matières

1. [Vision & Objectifs](#1-vision--objectifs)
2. [Problème](#2-problème)
3. [Public Cible](#3-public-cible)
4. [Solution Proposée](#4-solution-proposée)
5. [Fonctionnalités Détaillées](#5-fonctionnalités-détaillées)
6. [Données Complètes des Rois](#6-données-complètes-des-rois)
7. [Architecture Technique](#7-architecture-technique)
8. [Design Visuel & UI](#8-design-visuel--ui)
9. [Wireframes](#9-wireframes)
10. [User Stories & Parcours Utilisateur](#10-user-stories--parcours-utilisateur)
11. [Interactions & Micro-animations](#11-interactions--micro-animations)
12. [Accessibilité](#12-accessibilité)
13. [Performance](#13-performance)
14. [Contraintes & Limites](#14-contraintes--limites)
15. [Phases d'Implémentation](#15-phases-dimplémentation)
16. [Métriques de Succès](#16-métriques-de-succès)
17. [Questions Ouvertes & Évolutions Futures](#17-questions-ouvertes--évolutions-futures)

---

## 1. Vision & Objectifs

### Vision

Créer l'expérience web la plus engageante et visuellement belle pour découvrir les rois d'Israël et de Juda de l'Ancien Testament. L'application transforme un sujet biblique dense en une collection de **cartes 3D interactives** style trading card, où chaque roi est un personnage à découvrir, avec un système de **quiz gamifié** pour ancrer les connaissances.

### Objectifs

| Objectif | Mesure |
|----------|--------|
| **Éducatif** | L'utilisateur peut nommer les 43 rois et leurs caractéristiques clés |
| **Ludique** | Temps moyen de session > 5 min, retour dans les 7 jours |
| **Esthétique** | Design digne d'une app de cartes collectibles professionnelle |
| **Accessible** | Fonctionne sur mobile, tablette et desktop sans friction |
| **Partageable** | L'utilisateur veut montrer l'app à d'autres (bouche-à-oreille) |

### Pitch en une phrase

> « Collectionne les 43 rois de la Bible comme des cartes Pokémon, retourne-les pour découvrir leur histoire, et teste tes connaissances avec des quiz. »

---

## 2. Problème

### Constat

Les rois d'Israël et de Juda représentent **~500 ans d'histoire biblique** répartis sur les livres de Samuel, Rois et Chroniques. Cette matière est :

1. **Dispersée** — les informations sont éparpillées dans des dizaines de chapitres
2. **Confuse** — des noms similaires (Joram d'Israël vs Joram de Juda, Joas d'Israël vs Joas de Juda), deux royaumes parallèles, des corégences
3. **Difficile à mémoriser** — 43 souverains avec leurs prophètes, durées de règne, et événements clés
4. **Présentée de manière ennuyeuse** — les ressources existantes sont des tableaux Wikipedia ou des listes textuelles sans interactivité

### Lacunes du marché

| Solution existante | Limitation |
|-------------------|------------|
| Quiz bibliques génériques (Sporcle, FunTrivia) | Questions basiques, UI datée, pas de focus sur les rois |
| Apps Bible (YouVersion, Bible.is) | Lecture passive, pas de gamification |
| Jeu "Kings of Israel" (Steam) | Jeu de plateau numérique, pas mobile-friendly, pas de cartes |
| BibleBumps (jeu de cartes) | Physique uniquement, pas web, contenu anglais |
| Manna (Duolingo for Bible) | Générique, pas de focus rois, pas de cartes collectibles |

**Opportunité** : Aucune solution web ne combine **cartes visuelles collectibles** + **contenu spécialisé rois** + **quiz gamifié** en français.

---

## 3. Public Cible

### Persona Primaire : Le Jeune Croyant Curieux

- **Âge** : 15–35 ans
- **Profil** : Chrétien francophone, connaît la Bible mais confond les rois
- **Motivation** : Apprendre de manière fun, pouvoir briller en groupe d'étude
- **Device** : Smartphone (80%), desktop (20%)
- **Attention** : Sessions courtes (5–15 min)

### Persona Secondaire : Le Parent/Enseignant

- **Âge** : 30–55 ans
- **Profil** : Moniteur d'école du dimanche, parent chrétien
- **Motivation** : Outil pédagogique pour enseigner aux jeunes
- **Usage** : Projeter en classe, partager le lien

### Persona Tertiaire : Le Curieux d'Histoire

- **Âge** : 20–50 ans
- **Profil** : Intéressé par l'histoire antique, pas forcément croyant
- **Motivation** : Culture générale, beau design

---

## 4. Solution Proposée

### Vue d'ensemble

Une **application web statique** (Next.js) présentant les 43 rois sous forme de cartes 3D collectibles organisées en 3 ères, avec un quiz interactif et un suivi de progression.

### Composants Principaux

```
┌──────────────────────────────────────────┐
│              APPLICATION                  │
├──────────────────────────────────────────┤
│                                          │
│  ┌─────────────┐    ┌─────────────┐     │
│  │  COLLECTION  │    │    QUIZ     │     │
│  │  DE CARTES   │    │  INTERACTIF │     │
│  │             │    │             │     │
│  │ • 43 cartes │    │ • Par carte │     │
│  │ • 3 ères    │    │ • Global    │     │
│  │ • Flip 3D   │    │ • 4 types Q │     │
│  │ • Filtres   │    │ • Score     │     │
│  └─────────────┘    └─────────────┘     │
│                                          │
│  ┌──────────────────────────────────┐   │
│  │         PROGRESSION              │   │
│  │ • Compteur cartes découvertes    │   │
│  │ • Scores quiz sauvegardés        │   │
│  │ • Zustand + persist middleware   │   │
│  └──────────────────────────────────┘   │
└──────────────────────────────────────────┘
```

---

## 5. Fonctionnalités Détaillées

### F1. Cartes 3D Collectibles

#### F1.1 Face Avant (recto)

La face visible de la carte avant interaction. Design trading card premium.

| Élément | Position | Détail |
|---------|----------|--------|
| Portrait Pixar 3D | Centre, 70% hauteur | Image générée par IA, style Disney/Pixar |
| Nom du roi | Bas, centré | Police Cinzel, taille 20px, couleur blanche sur fond sombre |
| Emoji couronne | À gauche du nom | 👑 (ou 👸 pour Athalie) |
| Numéro | Haut gauche, badge | « #1 », « #7 », etc. dans un cercle |
| Étoiles de fidélité | Haut droite | 1–5 étoiles dorées (pleines/vides) |
| Durée de règne | Bas gauche, petit badge | « 40 ans », « 7 jours » |
| Bordure de couleur | Tout le tour | Or (unie), Rouge (Israël), Bleu (Juda) |
| Indicateur "cliquer" | Bas centre, subtil | Petite icône de rotation ou texte "Toucher pour retourner" (disparaît après 1er flip) |

#### F1.2 Face Arrière (verso)

Le contenu éducatif complet, révélé après le flip.

| Élément | Détail |
|---------|--------|
| 📖 Référence biblique | En haut, style citation. Ex: « 1 Samuel 9–31 » |
| ⏳ Règne | Durée + dates approximatives. Ex: « 40 ans (1050–1010 av. J.-C.) » |
| 👑 Roi parallèle | Nom cliquable du roi contemporain dans l'autre royaume (scrolle vers sa carte) |
| 🕊️ Prophète(s) | Liste des prophètes contemporains |
| ⭐ Fidélité à Dieu | Barre de 5 étoiles + label textuel (« Infidèle », « Mitigé », « Fidèle », « Très fidèle », « Exemplaire ») |
| 📌 Faits marquants | 5 items avec emoji + texte. Chaque fait est une info mémorable |
| 🎯 Bouton Quiz | Bouton prominent en bas : « Tester mes connaissances » |
| ↩️ Indicateur retour | Icône ou texte « Retourner » pour reflipper |

#### F1.3 Comportement de la carte

| Action | Résultat |
|--------|----------|
| Clic/tap sur la carte | Flip 3D avec animation spring (0.6s) |
| Clic sur "Quiz" (verso) | Ouvre le QuizModal (ne flippe PAS la carte) |
| Clic sur roi parallèle (verso) | Scroll smooth vers la carte du roi mentionné |
| Hover (desktop) | Légère élévation (translateY -4px) + ombre intensifiée |
| Premier flip d'une carte | Enregistré via Zustand comme "découvert" |

#### F1.4 Spécifications de la carte

| Propriété | Valeur |
|-----------|--------|
| Ratio | 2:3 (largeur:hauteur) |
| Largeur max | 320px |
| Largeur min | 260px |
| Coins | border-radius: 16px |
| Bordure | 3px solid [couleur ère] + 1px or intérieur |
| Ombre | 0 10px 30px rgba(61, 46, 30, 0.15) |
| Perspective | 800px sur le parent |
| Animation | Motion (`motion/react`) spring: stiffness 300, damping 40 |

### F2. Grille de Cartes

#### F2.1 Organisation

Les cartes sont groupées en **3 sections** correspondant aux 3 ères :

1. **Monarchie Unie** (3 cartes) — bordure or `#d4a017`
   - Saül, David, Salomon
2. **Royaume du Nord — Israël** (19 cartes) — bordure rouge `#c0392b`
   - De Jéroboam Ier à Osée
3. **Royaume du Sud — Juda** (21 cartes) — bordure bleue `#2c3e8f`
   - De Roboam à Sédécias (incluant la reine Athalie)

Chaque section a un **header d'ère** avec :
- Nom de l'ère en Cinzel
- Description courte
- Nombre de rois
- Bande de couleur décorative
- Dates (ex: « 1050–930 av. J.-C. »)

#### F2.2 Grille responsive

| Breakpoint | Colonnes | Gap | Padding |
|------------|----------|-----|---------|
| < 640px (mobile) | 1 | 24px | 16px |
| 640–1023px (tablette) | 2 | 24px | 24px |
| 1024–1279px (desktop) | 3 | 32px | 32px |
| ≥ 1280px (large) | 4 | 32px | 48px |

Les cartes sont **centrées** dans chaque cellule de grille.

#### F2.3 Filtres

Barre de filtres optionnelle au-dessus de la grille :

| Filtre | Options |
|--------|---------|
| Ère | Tous / Monarchie Unie / Israël / Juda |
| Fidélité | Tous / Fidèles (≥4⭐) / Infidèles (≤2⭐) |
| Recherche | Champ texte pour chercher par nom |

### F3. Quiz Interactif

#### F3.1 Quiz par Carte (QuizModal — Radix Dialog)

Accessible depuis le bouton « Tester mes connaissances » sur le verso de chaque carte. Utilise `@radix-ui/react-dialog` pour l'accessibilité (focus trap, ARIA, Escape).

| Propriété | Détail |
|-----------|--------|
| Format | Radix Dialog modal (fond semi-transparent, focus trap built-in) |
| Questions | 3–4 questions spécifiques au roi sélectionné |
| Types | Mix des 4 types (voir F3.3) |
| Feedback | Immédiat après chaque réponse (vert/rouge + explication) |
| Score | Affiché en fin de quiz (ex: « 3/4 — Bien joué ! ») |
| Fermeture | Bouton X + clic hors modal + Escape |

#### F3.2 Quiz Global (page `/quiz`)

Mode quiz complet avec paramètres.

**Étape 1 — Configuration :**

| Paramètre | Options |
|-----------|---------|
| Catégorie | Tous les rois / Monarchie Unie / Israël (Nord) / Juda (Sud) |
| Nombre de questions | 5 / 10 / 20 |
| Difficulté (v2) | Facile / Moyen / Difficile |

**Étape 2 — Questions :**

| Élément | Détail |
|---------|--------|
| Compteur | « Question 3 / 10 » |
| Barre de progression | Barre horizontale animée (pourcentage) |
| Question | Texte en Cinzel, taille lisible |
| Options | 4 boutons (A, B, C, D) pleine largeur |
| Feedback | Après réponse : option correcte en vert, erreur en rouge, explication avec 📖 référence |
| Navigation | Bouton « Question suivante → » |

**Étape 3 — Résultats :**

| Élément | Détail |
|---------|--------|
| Score circulaire | Grand cercle animé avec score (ex: 8/10) et pourcentage |
| Détail | ✅ X bonnes réponses / ❌ Y mauvaises réponses |
| Revue | Liste de chaque question avec la réponse donnée vs correcte |
| Actions | « Rejouer » / « Retour à l'accueil » |
| Sauvegarde | Meilleur score enregistré via Zustand persist |

#### F3.3 Types de Questions

**Type 1 — Identification par fait marquant**
```
Quel roi a vaincu Goliath avec une fronde ?
A. Saül
B. David          ← correct
C. Salomon
D. Josaphat
```
*Logique* : Prend un fait marquant d'un roi, propose 3 mauvaises réponses parmi les rois de la même ère.

**Type 2 — Association de faits**
```
Lequel de ces faits concerne le roi Achab ?
A. A construit le Temple de Jérusalem
B. A épousé Jézabel et promu le culte de Baal    ← correct
C. A vaincu 185 000 Assyriens
D. A découvert le Livre de la Loi dans le Temple
```
*Logique* : Prend un fait du roi, propose 3 faits d'autres rois comme distracteurs.

**Type 3 — Association prophète-roi**
```
Quel prophète était contemporain du roi Ézéchias ?
A. Samuel
B. Élisée
C. Ésaïe          ← correct
D. Jérémie
```
*Logique* : Prend un prophète du roi, propose 3 prophètes d'autres époques.

**Type 4 — Fidélité**
```
Comment est évalué le roi Josias en fidélité à Dieu ?
A. ⭐☆☆☆☆ (1/5)
B. ⭐⭐⭐☆☆ (3/5)
C. ⭐⭐⭐⭐☆ (4/5)
D. ⭐⭐⭐⭐⭐ (5/5)    ← correct
```
*Logique* : Propose 4 niveaux de fidélité, un seul est correct.

#### F3.4 Génération des Questions

Les questions sont **générées dynamiquement** à partir des données des rois dans `kings.ts`. Algorithme :

1. Sélectionner un pool de rois selon le filtre (ère ou tous)
2. Pour chaque question, choisir aléatoirement un type (1–4)
3. Choisir un roi cible aléatoire
4. Générer les distracteurs en piochant dans les autres rois (préférence : même ère)
5. Mélanger l'ordre des options (le correct ne doit pas toujours être en B)
6. Éviter les doublons de questions dans une même session
7. Retourner les questions avec `correctIndex` et `explanation`

### F4. Progression

#### F4.1 Données sauvegardées (Zustand + persist)

L'état de progression est géré par Zustand avec le middleware `persist` pour la sauvegarde automatique en localStorage. Voir le store complet dans la section 7.1.

```typescript
// Géré par stores/useProgressStore.ts (Zustand + persist middleware)
// - kingsViewed: string[]         → IDs des rois dont la carte a été retournée
// - quizScores: Record<string, {bestScore, totalQuestions, lastPlayed}>
// - markViewed(kingId)            → Ajoute un roi vu (dédupliqué via Set)
// - recordScore(quizId, score, total) → Sauvegarde le meilleur score
```

#### F4.2 Affichage de la progression

| Emplacement | Affichage |
|-------------|-----------|
| Header | Badge « X / 43 👑 » (nombre de rois découverts) |
| Hero section | Barre de progression globale avec pourcentage |
| Carte (face avant) | Badge discret si déjà découvert (petit ✓) |
| Page Quiz résultats | « Meilleur score : X/Y » si déjà joué |

---

## 6. Données Complètes des Rois

### 6.1 Format de données par roi

Chaque roi possède les champs suivants dans le code :

```typescript
{
  id: string,                         // Slug unique kebab-case
  name: string,                       // Nom affiché en français
  number: number,                     // Numéro dans sa catégorie (1, 2, 3...)
  kingdom: 'united' | 'israel' | 'judah',
  biblicalReference: string,          // Livre + chapitres
  reignDuration: string,              // Durée en texte
  reignYears: string,                 // Dates approximatives av. J.-C.
  parallelKing: string | null,        // ID du roi parallèle
  prophets: string[],                 // Prophètes contemporains
  faithfulness: number,               // 1 à 5
  keyFacts: { emoji: string, text: string, category: FactCategory }[],  // 5 faits avec catégorie
  imagePath: string,                  // Chemin vers le portrait
  imagePrompt: string,                // Prompt pour générer le portrait
}
```

### 6.2 Monarchie Unie (3 rois)

---

#### 👑 1. SAÜL

| Champ | Valeur |
|-------|--------|
| **id** | `saul` |
| **Référence** | 1 Samuel 9–31 |
| **Règne** | 40 ans (~1050–1010 av. J.-C.) |
| **Roi parallèle** | Aucun (royaume uni) |
| **Prophète(s)** | Samuel |
| **Fidélité** | ⭐⭐☆☆☆ (2/5) |

**Faits marquants :**
| # | Emoji | Fait |
|---|-------|------|
| 1 | 👑 | Premier roi d'Israël |
| 2 | ⚔️ | Choisi pour sa grande stature |
| 3 | ❌ | Rejeté par Dieu pour désobéissance |
| 4 | 🔮 | Consulte la médium d'En-Dor |
| 5 | ⚰️ | Mort tragique au mont Guilboa |

**Prompt image :**
> 3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed period-accurate robes in muted bronze and brown tones, subtle bronze and gold crown, cinematic warm golden lighting, soft depth of field, ancient royal palace background blurred, expressive face reflecting inner conflict and insecurity, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits

---

#### 👑 2. DAVID

| Champ | Valeur |
|-------|--------|
| **id** | `david` |
| **Référence** | 1 Samuel 16 – 1 Rois 2 |
| **Règne** | 40 ans (~1010–970 av. J.-C.) |
| **Roi parallèle** | Aucun (royaume uni) |
| **Prophète(s)** | Samuel, Nathan, Gad |
| **Fidélité** | ⭐⭐⭐⭐☆ (4/5) |

**Faits marquants :**
| # | Emoji | Fait |
|---|-------|------|
| 1 | 🐑 | Ancien berger devenu roi |
| 2 | 🪨 | Vainqueur de Goliath avec une fronde |
| 3 | 🎵 | Auteur de nombreux psaumes |
| 4 | 🏙️ | Fait de Jérusalem la capitale d'Israël |
| 5 | 👑 | Ancêtre du Messie (lignée messianique) |

**Prompt image :**
> 3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, detailed royal blue robes with gold accents, subtle bronze and gold crown, cinematic warm golden lighting, soft depth of field, ancient Jerusalem background blurred, expressive face reflecting repentant humility and courageous faith, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits

---

#### 👑 3. SALOMON

| Champ | Valeur |
|-------|--------|
| **id** | `salomon` |
| **Référence** | 1 Rois 1–11 |
| **Règne** | 40 ans (~970–930 av. J.-C.) |
| **Roi parallèle** | Aucun (royaume uni) |
| **Prophète(s)** | Nathan, Ahija |
| **Fidélité** | ⭐⭐⭐☆☆ (3/5) |

**Faits marquants :**
| # | Emoji | Fait |
|---|-------|------|
| 1 | 🧠 | Le plus sage des hommes (don de Dieu) |
| 2 | 🏛️ | Constructeur du Temple de Jérusalem |
| 3 | 💰 | Richesse et prospérité légendaires |
| 4 | 👩 | 700 femmes et 300 concubines qui détournèrent son cœur |
| 5 | 📜 | Auteur du Cantique, Proverbes et Ecclésiaste |

**Prompt image :**
> 3D Pixar-style biblical king portrait, ancient Israelite royal character, Middle Eastern features, ornate golden and white royal robes, magnificent gold crown with jewels, cinematic warm golden lighting, soft depth of field, grand Solomon's temple background blurred, expressive face reflecting wisdom and subtle pride, highly detailed fabric textures, dramatic but family-friendly Disney-style realism, centered composition, medium close-up shot, epic animated movie quality, consistent character series, same cinematic universe, unified lighting and artistic direction across all portraits

---

### 6.3 Royaume du Nord — Israël (19 rois)

> **Note historique :** Après la mort de Salomon (~930 av. J.-C.), 10 tribus se révoltent et forment le Royaume du Nord (Israël), avec Samarie comme capitale. **Tous les 19 rois d'Israël sont jugés infidèles** dans la Bible — aucun « ne fit ce qui est droit aux yeux de l'Éternel ». Le royaume tombe devant l'Assyrie en 722 av. J.-C.

| # | Roi | Référence | Règne | Fidélité | Prophète(s) | Fait principal |
|---|-----|-----------|-------|----------|-------------|----------------|
| 1 | Jéroboam Ier | 1 Rois 11:26 – 14:20 | 22 ans | ⭐☆☆☆☆ | Ahija | Installe les veaux d'or à Béthel et Dan |
| 2 | Nadab | 1 Rois 15:25–32 | 2 ans | ⭐☆☆☆☆ | — | Assassiné par Baescha |
| 3 | Baescha | 1 Rois 15:27 – 16:7 | 24 ans | ⭐☆☆☆☆ | Jéhu fils de Hanani | Extermine la maison de Jéroboam |
| 4 | Éla | 1 Rois 16:8–14 | 2 ans | ⭐☆☆☆☆ | — | Assassiné par Zimri alors qu'il était ivre |
| 5 | Zimri | 1 Rois 16:9–20 | 7 jours | ⭐☆☆☆☆ | — | Plus court règne, se suicide en brûlant le palais |
| 6 | Omri | 1 Rois 16:16–28 | 12 ans | ⭐☆☆☆☆ | — | Fonde Samarie comme capitale |
| 7 | Achab | 1 Rois 16:29 – 22:40 | 22 ans | ⭐☆☆☆☆ | Élie, Michée | Épouse Jézabel, promeut Baal, affronté par Élie |
| 8 | Achazia | 1 Rois 22:51 – 2 Rois 1:18 | 2 ans | ⭐☆☆☆☆ | Élie | Tombe du balcon, consulte Baal-Zebub |
| 9 | Joram | 2 Rois 3:1 – 9:26 | 12 ans | ⭐☆☆☆☆ | Élisée | Guerres contre Moab et Aram |
| 10 | Jéhu | 2 Rois 9–10 | 28 ans | ⭐⭐☆☆☆ | — | Oint par un prophète, massacre la maison d'Achab et les prêtres de Baal |
| 11 | Joachaz | 2 Rois 13:1–9 | 17 ans | ⭐☆☆☆☆ | — | Opprimé par les Araméens, armée réduite à 10 chars |
| 12 | Joas | 2 Rois 13:10 – 14:16 | 16 ans | ⭐☆☆☆☆ | Élisée | Pleure Élisée mourant, 3 victoires sur Aram |
| 13 | Jéroboam II | 2 Rois 14:23–29 | 41 ans | ⭐☆☆☆☆ | Jonas, Amos, Osée | Plus long règne du Nord, prospérité matérielle mais corruption morale |
| 14 | Zacharie | 2 Rois 15:8–12 | 6 mois | ⭐☆☆☆☆ | — | Dernier de la dynastie de Jéhu, assassiné |
| 15 | Shallum | 2 Rois 15:10, 13–16 | 1 mois | ⭐☆☆☆☆ | — | Assassin assassiné par Menahem |
| 16 | Menahem | 2 Rois 15:14–22 | 10 ans | ⭐☆☆☆☆ | — | Paie tribut à l'Assyrie (37 tonnes d'argent) |
| 17 | Peqahia | 2 Rois 15:23–26 | 2 ans | ⭐☆☆☆☆ | — | Assassiné par Péqah |
| 18 | Péqah | 2 Rois 15:25, 27–31 | 20 ans | ⭐☆☆☆☆ | — | Alliance anti-assyrienne, grandes déportations |
| 19 | Osée | 2 Rois 15:30 ; 17:1–6 | 9 ans | ⭐☆☆☆☆ | — | Dernier roi, chute de Samarie devant l'Assyrie (722 av. J.-C.) |

---

### 6.4 Royaume du Sud — Juda (20 rois + 1 reine)

> **Note historique :** Les tribus de Juda et Benjamin restent fidèles à la lignée de David, avec Jérusalem comme capitale. Contrairement au Nord, Juda connaît des **réveils spirituels** sous plusieurs bons rois (Asa, Josaphat, Ézéchias, Josias). Le royaume tombe devant Babylone en 586 av. J.-C.

| # | Roi/Reine | Référence | Règne | Fidélité | Prophète(s) | Fait principal |
|---|-----------|-----------|-------|----------|-------------|----------------|
| 1 | Roboam | 1 Rois 12:1 – 14:31 | 17 ans | ⭐⭐☆☆☆ | Shemaia | Rejette le conseil des anciens → division du royaume |
| 2 | Abijam | 1 Rois 15:1–8 | 3 ans | ⭐☆☆☆☆ | — | Guerroie contre Jéroboam |
| 3 | Asa | 1 Rois 15:9–24 | 41 ans | ⭐⭐⭐⭐☆ | — | Grande réforme religieuse, détruit les idoles |
| 4 | Josaphat | 1 Rois 22:41–50 | 25 ans | ⭐⭐⭐⭐☆ | — | Réformes judiciaires, envoie des Lévites enseigner la Loi |
| 5 | Joram | 2 Rois 8:16–24 | 8 ans | ⭐☆☆☆☆ | — | Tue ses propres frères, Édom se révolte |
| 6 | Achazia | 2 Rois 8:25 – 9:28 | 1 an | ⭐☆☆☆☆ | — | Tué par Jéhu avec Joram d'Israël |
| 7 | Athalie (Reine) | 2 Rois 11:1–20 | 6 ans | ⭐☆☆☆☆ | — | Usurpe le trône, massacre la famille royale (sauf Joas bébé) |
| 8 | Joas | 2 Rois 12 | 40 ans | ⭐⭐⭐☆☆ | Joël | Caché bébé dans le Temple, restaure le Temple, dévie après la mort de Joïada |
| 9 | Amatsia | 2 Rois 14:1–22 | 29 ans | ⭐⭐⭐☆☆ | — | Bat Édom, provoque stupidement Israël en guerre et perd |
| 10 | Ozias (Azaria) | 2 Rois 15:1–7 | 52 ans | ⭐⭐⭐⭐☆ | Ésaïe, Michée | Plus long règne de Juda, frappé de lèpre pour avoir brûlé l'encens |
| 11 | Jotham | 2 Rois 15:32–38 | 16 ans | ⭐⭐⭐⭐☆ | — | Bon roi, construit la porte supérieure du Temple |
| 12 | Achaz | 2 Rois 16 | 16 ans | ⭐☆☆☆☆ | Ésaïe | Paie l'Assyrie avec l'or du Temple, pratique le sacrifice d'enfants |
| 13 | Ézéchias | 2 Rois 18–20 | 29 ans | ⭐⭐⭐⭐⭐ | Ésaïe | Grand réveil, un ange tue 185 000 Assyriens, guéri miraculeusement |
| 14 | Manassé | 2 Rois 21:1–18 | 55 ans | ⭐☆☆☆☆ | Nahum, Habakuk, Sophonie | Plus long règne, le plus méchant roi, sacrifices d'enfants, repentance tardive |
| 15 | Amon | 2 Rois 21:19–26 | 2 ans | ⭐☆☆☆☆ | — | Si mauvais que ses propres serviteurs l'assassinent |
| 16 | Josias | 2 Rois 22 – 23:30 | 31 ans | ⭐⭐⭐⭐⭐ | Jérémie, Sophonie | Dernier bon roi, redécouvre le Livre de la Loi, grande réforme |
| 17 | Joachaz | 2 Rois 23:31–34 | 3 mois | ⭐☆☆☆☆ | — | Déporté en Égypte par Pharaon Néko |
| 18 | Joïaqim | 2 Rois 23:35 – 24:7 | 11 ans | ⭐☆☆☆☆ | Jérémie, Daniel | Vassal de Babylone, brûle le rouleau de Jérémie |
| 19 | Joïakin | 2 Rois 24:8 – 25:30 | 3 mois | ⭐☆☆☆☆ | Ézéchiel | Déporté à Babylone (2e déportation, 597 av. J.-C.) |
| 20 | Sédécias | 2 Rois 24:18 – 25:20 | 11 ans | ⭐☆☆☆☆ | Jérémie | Dernier roi, ignore Jérémie, Jérusalem détruite (586 av. J.-C.) |

---

### 6.5 Statistiques récapitulatives

| Métrique | Valeur |
|----------|--------|
| Nombre total de souverains | 43 |
| Monarchie Unie | 3 |
| Israël (Nord) | 19 (tous infidèles) |
| Juda (Sud) | 20 rois + 1 reine |
| Rois fidèles (≥4⭐) | 8 (tous dans Juda : Asa, Josaphat, Ozias, Jotham, Ézéchias, Josias + David, Salomon dans la monarchie unie est 3⭐) |
| Rois exemplaires (5⭐) | 2 (Ézéchias, Josias) |
| Plus long règne | Manassé (55 ans) |
| Plus court règne | Zimri (7 jours) |
| Nombre de prophètes mentionnés | ~15 |
| Nombre de dynasties (Nord) | 9 (changements violents fréquents) |
| Dynastie unique (Sud) | Maison de David (sauf usurpation d'Athalie) |

---

## 7. Architecture Technique

### 7.1 Stack Technologique

| Technologie | Version | Package | Rôle | Justification |
|-------------|---------|---------|------|---------------|
| **Next.js** | 16.1 | `next` | Framework React | App Router, Turbopack (défaut), static export |
| **React** | 19.2 | `react`, `react-dom` | UI | Server Components, `use()` hook, Actions |
| **TypeScript** | 5.7+ | `typescript` | Typage | Strict mode, sécurité données roi/quiz |
| **Tailwind CSS** | 4.1 | `tailwindcss`, `@tailwindcss/postcss` | Styling | CSS-first config (`@theme`), 5x plus rapide |
| **Motion** | 12.x | `motion` | Animations | 3D flip, gestures, spring physics (ex Framer Motion) |
| **Zustand** | 5.x | `zustand` | State management | Persist middleware pour localStorage, updates atomiques |
| **Radix Dialog** | 1.x | `@radix-ui/react-dialog` | Modal | Focus trap, ARIA, Escape, clic extérieur — built-in |
| **@heroicons/react** | 2.2 | `@heroicons/react` | Icônes | Étoiles, flèches, UI icons |
| **Google Fonts** | — | `next/font/google` | Typographie | Cinzel (titres) + Inter (corps), self-hosted |

**Commande d'installation :**
```bash
npx create-next-app@latest kings --typescript --tailwind --eslint --app --src-dir --turbopack
cd kings
npm install motion zustand @radix-ui/react-dialog @heroicons/react
```

**Imports Motion (ex Framer Motion) :**
```typescript
// ⚠️ Le package s'appelle "motion" (pas "framer-motion")
// Les imports viennent de "motion/react"
import { motion, AnimatePresence } from "motion/react"
```

**Zustand store avec persistence :**
```typescript
// stores/useProgressStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProgressState {
  kingsViewed: string[]
  quizScores: Record<string, { bestScore: number; totalQuestions: number; lastPlayed: string }>
  markViewed: (kingId: string) => void
  recordScore: (quizId: string, score: number, total: number) => void
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      kingsViewed: [],
      quizScores: {},
      markViewed: (kingId) =>
        set((state) => ({
          kingsViewed: [...new Set([...state.kingsViewed, kingId])],
        })),
      recordScore: (quizId, score, total) =>
        set((state) => ({
          quizScores: {
            ...state.quizScores,
            [quizId]: {
              bestScore: Math.max(score, state.quizScores[quizId]?.bestScore ?? 0),
              totalQuestions: total,
              lastPlayed: new Date().toISOString(),
            },
          },
        })),
    }),
    {
      name: 'kings-progress',
      // Gère Safari Private Mode et localStorage plein
      onRehydrateStorage: () => (state, error) => {
        if (error) console.warn('Hydration failed:', error)
      },
    }
  )
)
```

**Pas de :**
- Backend / API
- Base de données
- Authentification
- i18n (français uniquement)
- CMS

### 7.2 Modèle de Données TypeScript

```typescript
// ===== TYPES PRINCIPAUX =====

type Kingdom = 'united' | 'israel' | 'judah';

// Catégories de faits — permet de générer des distracteurs de quiz pertinents
type FactCategory = 'identity' | 'achievement' | 'sin' | 'death' | 'construction' | 'battle' | 'prophet';

interface Era {
  id: Kingdom;
  label: string;              // "Monarchie Unie"
  description: string;        // "Le royaume unifié sous trois rois"
  dates: string;              // "~1050–930 av. J.-C."
  color: string;              // Classe Tailwind ou hex
  kingCount: number;
}

interface King {
  id: string;                 // Slug unique: "saul", "david", "jeroboam-i"
  name: string;               // "Saül", "David"
  number: number;             // Numéro dans sa catégorie
  kingdom: Kingdom;
  biblicalReference: string;  // "1 Samuel 9–31"
  reignDuration: string;      // "40 ans"
  reignYears: string;         // "~1050–1010 av. J.-C."
  parallelKing: string | null; // ID du roi parallèle ou null
  prophets: string[];         // ["Samuel", "Nathan"]
  faithfulness: number;       // 1–5
  keyFacts: KeyFact[];        // 5 faits marquants avec catégorie
  imagePath: string;          // "/images/kings/saul.webp"
  imagePrompt: string;        // Prompt Pixar pour générer l'image
}

interface KeyFact {
  emoji: string;              // "⚔️", "🏛️", "🎵"
  text: string;               // "Vainqueur de Goliath"
  category: FactCategory;     // Pour génération quiz : matcher des distracteurs similaires
}

// ===== QUIZ =====

interface QuizQuestion {
  id: string;                 // Unique dans la session
  type: 'identification' | 'facts' | 'prophet' | 'faithfulness';
  question: string;           // Texte de la question
  options: string[];          // 4 choix
  correctIndex: number;       // 0–3
  explanation: string;        // Explication avec référence biblique
  kingId: string;             // Le roi concerné
}

interface QuizConfig {
  category: Kingdom | 'all';
  questionCount: 5 | 10 | 20;
}

interface QuizState {
  config: QuizConfig;
  questions: QuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];  // Index choisi par l'utilisateur
  isComplete: boolean;
}

// ===== PROGRESSION (géré par Zustand + persist) =====
// Voir stores/useProgressStore.ts dans la section 7.1
```

### 7.3 Structure des Fichiers

```
C:\Users\fabri\projects\kings\
│
├── public/
│   ├── images/
│   │   └── kings/                    # 43 portraits Pixar + placeholder
│   │       ├── saul.webp
│   │       ├── david.webp
│   │       ├── salomon.webp
│   │       ├── jeroboam-i.webp
│   │       ├── ... (39 autres)
│   │       └── placeholder.webp      # Fallback si image manquante
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout : fonts (Cinzel+Inter), metadata, Header
│   │   ├── page.tsx                  # Page d'accueil : Hero + FilterBar + CardGrid
│   │   ├── globals.css               # @tailwind directives + CSS custom (variables couleurs)
│   │   └── quiz/
│   │       └── page.tsx              # Page quiz global : config → questions → résultats
│   │
│   ├── components/
│   │   ├── Header.tsx                # Barre de nav sticky : logo, liens, compteur progression
│   │   ├── Hero.tsx                  # Section hero : titre, description, CTA, progression
│   │   ├── FilterBar.tsx             # Filtres : ère, fidélité, recherche nom
│   │   ├── CardGrid.tsx              # Grille responsive : itère sur les ères + sections inline
│   │   ├── KingCard.tsx              # Carte 3D flip (Motion) : orchestre front/back
│   │   ├── CardFront.tsx             # Face avant : portrait, nom, étoiles, règne, bordure
│   │   ├── CardBack.tsx              # Face arrière : faits, prophètes, référence, bouton quiz
│   │   ├── StarRating.tsx            # Composant étoiles 1–5 (réutilisable)
│   │   ├── QuizModal.tsx             # Radix Dialog : quiz par carte (3-4 questions + score)
│   │   └── QuizFlow.tsx              # Quiz global : setup → questions → résultats (composant unique)
│   │
│   ├── data/
│   │   └── kings.ts                  # Tableau complet des 43 rois + helpers (getByEra, getById)
│   │
│   ├── stores/
│   │   └── useProgressStore.ts       # Zustand + persist : cartes vues, scores quiz
│   │
│   ├── lib/
│   │   └── quiz.ts                   # Génération dynamique de questions (4 types)
│   │
│   ├── hooks/
│   │   └── useQuiz.ts                # Hook état quiz : répondre, suivant, reset
│   │
│   └── types/
│       └── index.ts                  # Toutes les interfaces TypeScript exportées
│
├── postcss.config.mjs                # @tailwindcss/postcss
├── next.config.ts                    # output: 'export', images: { unoptimized: true }
├── package.json
├── tsconfig.json
└── PRD.md                            # Ce document
```

### 7.4 Configuration Next.js

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',           // Export statique (pas de serveur Node)
  images: {
    unoptimized: true,        // Requis pour l'export statique
  },
}

export default nextConfig
```

### 7.5 Configuration Tailwind CSS v4 (CSS-First)

> **Important :** Tailwind v4 n'utilise plus de `tailwind.config.ts`. Toute la configuration se fait en CSS avec la directive `@theme`.

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  /* Couleurs — Parchemin */
  --color-parchment-50: #fefdfb;
  --color-parchment-100: #fdf8f0;
  --color-parchment-200: #f5e6d0;
  --color-parchment-300: #e8d5b8;
  --color-parchment-900: #3d2e1e;

  /* Couleurs — Ères */
  --color-era-united: #d4a017;
  --color-era-israel: #c0392b;
  --color-era-judah: #2c3e8f;

  /* Couleurs — UI */
  --color-gold: #d4a017;
  --color-gold-light: #f5deb3;
  --color-success: #27ae60;
  --color-scroll: #8b7355;

  /* Typographie */
  --font-cinzel: 'Cinzel', serif;
  --font-inter: 'Inter', sans-serif;
}
```

```javascript
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

> **Note :** Pas besoin de `content` array — Tailwind v4 détecte automatiquement les fichiers templates. Pas de `tailwind.config.ts` nécessaire.

---

## 8. Design Visuel & UI

### 8.0 Principes de Design (Anti-AI)

**Patterns AI-generated a EVITER :**
- Symetrie parfaite et centrage systematique
- Espacement uniforme partout (meme padding/gap)
- Gradients generiques (violet-bleu) sans purpose
- Hero centre classique (titre + sous-titre + CTA centre)
- Grille parfaitement reguliere de cartes identiques
- Coins arrondis uniformes sur tout
- Palette pastel generique sans caractere

**Patterns modernes SaaS a ADOPTER :**
- **Asymetrie calculee** : Hero split 60/40 (texte gauche, visuel droit)
- **Typographie oversized** : H1 en `clamp(3rem, 8vw, 5rem)` avec `line-height: 0.95`, `letter-spacing: -0.03em`
- **Espacement variable** : `padding-block: clamp(3rem, 8vw, 10rem)` — pas uniform
- **Bento grid** pour les sections de contenu au lieu de grilles uniformes
- **Full-bleed sections** alternant fond clair/sombre
- **Elements qui se chevauchent** : images qui debordent des sections, texte sur fond + visuel
- **Contraste extreme** dans la hierarchie typographique (H1 enorme vs sous-titre petit)
- **Scroll-triggered reveals** via Motion `useInView` (fade-up staggere)

### 8.1 Palette de Couleurs Complète

| Nom | Hex | RGB | Usage |
|-----|-----|-----|-------|
| **Parchemin clair** | `#fefdfb` | 254, 253, 251 | Fond de page |
| **Parchemin** | `#f5e6d0` | 245, 230, 208 | Fond des cartes |
| **Parchemin foncé** | `#e8d5b8` | 232, 213, 184 | Bordures subtiles |
| **Brun texte** | `#3d2e1e` | 61, 46, 30 | Texte principal |
| **Brun léger** | `#8b7355` | 139, 115, 85 | Texte secondaire |
| **Or** | `#d4a017` | 212, 160, 23 | Étoiles, ère unie, accents |
| **Or clair** | `#f5deb3` | 245, 222, 179 | Fond section ère unie |
| **Rouge profond** | `#c0392b` | 192, 57, 43 | Ère Israël, erreur quiz |
| **Rouge clair** | `#f1c0bb` | 241, 192, 187 | Fond section Israël |
| **Bleu royal** | `#2c3e8f` | 44, 62, 143 | Ère Juda |
| **Bleu clair** | `#b8c4e8` | 184, 196, 232 | Fond section Juda |
| **Vert succès** | `#27ae60` | 39, 174, 96 | Bonne réponse quiz |
| **Blanc** | `#ffffff` | 255, 255, 255 | Texte sur fond sombre |

### 8.2 Typographie (Fluid/Bold Hierarchy)

| Element | Taille | Poids | Style |
|---------|--------|-------|-------|
| H1 Hero | `clamp(2.5rem, 8vw, 5rem)` | 800 | Cinzel, `line-height: 0.95`, `letter-spacing: -0.02em` |
| H2 Section | `clamp(1.75rem, 4vw, 2.5rem)` | 700 | Cinzel |
| Nom roi (carte) | `clamp(1.1rem, 2vw, 1.25rem)` | 700 | Cinzel |
| Sous-titre hero | `clamp(1rem, 1.5vw, 1.25rem)` | 300 | Inter, `opacity: 0.7` |
| Corps | `1rem` | 400 | Inter |
| Caption | `0.875rem` | 400 | Inter, `opacity: 0.6` |

### 8.3 Iconographie

| Icône | Source | Usage |
|-------|--------|-------|
| ⭐ (pleine) | @heroicons/react StarIcon solid | Étoile fidélité active |
| ☆ (vide) | @heroicons/react StarIcon outline | Étoile fidélité inactive |
| ↩️ | @heroicons/react ArrowUturnLeftIcon | Retourner la carte |
| ❌ ✅ | Emojis natifs | Résultat quiz |
| 🎯 | Emoji natif | Bouton quiz |
| Emojis faits | Fournis dans les données | Faits marquants |

### 8.4 Design des Cartes — Détail

**Face avant :**
```
┌──────────────────────┐
│  #1            ⭐⭐☆☆☆│  ← Numéro + étoiles
│                       │
│                       │
│    [PORTRAIT PIXAR]   │  ← Image 70% hauteur
│                       │
│                       │
│░░░░░░░░░░░░░░░░░░░░░░│  ← Gradient overlay
│  👑 SAÜL              │  ← Nom avec emoji
│  40 ans               │  ← Durée règne
└──────────────────────┘
      ↑ Bordure or/rouge/bleu (3px)
```

**Face arrière :**
```
┌──────────────────────┐
│  📖 1 Samuel 9–31    │  ← Référence biblique
│  ⏳ 40 ans            │  ← Durée
│  👑 Aucun parallèle  │  ← Roi parallèle
│  🕊️ Samuel           │  ← Prophète(s)
│                       │
│  ⭐⭐☆☆☆ Infidèle     │  ← Rating + label
│  ─────────────────── │
│  📌 Faits marquants : │
│  👑 Premier roi       │
│  ⚔️ Choisi pour sa    │
│     stature           │
│  ❌ Rejeté par Dieu   │
│  🔮 Consulte médium   │
│  ⚰️ Mort tragique     │
│                       │
│  ┌──────────────────┐│
│  │  🎯 Quiz         ││  ← Bouton CTA
│  └──────────────────┘│
└──────────────────────┘
```

### 8.5 Full-bleed Sections (Rythme Visuel)

Alternance de fonds pour creer du rythme visuel et casser l'uniformite :

| Section | Fond | Effet |
|---------|------|-------|
| Hero | `parchment-900` (#3d2e1e) sombre | Texte clair, impact visuel fort |
| Monarchie Unie | `gold-light/5%` wash | Subtil warm wash |
| Israel (Nord) | `era-israel/5%` wash (rouge clair) | Teinte rouge a peine visible |
| Juda (Sud) | `era-judah/5%` wash (bleu clair) | Teinte bleue a peine visible |
| Page Quiz | Fond sombre (`parchment-900`) | Coherence avec le hero |

---

## 9. Wireframes

### 9.1 Page d'Accueil — Desktop (Asymetrique Hero + Bento Grid)

```
Desktop :
┌──────────────────────────────────────────────────────────────┐
│  [Nav sticky : logo gauche / compteur X/43 + quiz droite]    │
├──────────────────────────────────────────────────────────────┤
│  [FOND SOMBRE parchment-900]                                 │
│                                                              │
│  LES ROIS                         ┌──────────────┐          │
│  D'ISRAEL                         │  [3 cartes    │          │
│  ET DE JUDA                       │   preview     │          │
│                                   │   flottantes  │          │
│  Decouvrez les 43                 │   avec rotation│         │
│  souverains de l'AT               │   legere et   │          │
│                                   │   overlap]    │          │
│  ████████░░░░  28%                └──────────────┘          │
│                                                              │
│  [Explorer ▸]  [Quiz ▸]                                     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  [Filtres full-width avec fond legerement different]         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ══ Monarchie Unie  ═════════════════════════  3 rois ══    │
│                                                              │
│  [Bento: carte DAVID large 2x2] [SAUL 1x1] [SALOMON 1x1]  │
│                                                              │
│  ══ ⚔️ Royaume du Nord — Israel ════════════════════════    │
│  19 rois, tous infideles (~931–722 av. J.-C.)                │
│                                                              │
│  [Bento grid: rois importants span 2 cols, autres 1 col]    │
│  [grid-auto-flow: dense pour combler les trous]              │
│                                                              │
│  ══ 🏛️ Royaume du Sud — Juda ═══════════════════════════   │
│  20 rois + 1 reine (~931–586 av. J.-C.)                     │
│                                                              │
│  [Bento grid: Ezechias/Josias large, autres standard]       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Hero layout** : Split asymetrique 60/40 (texte gauche, cartes preview droite).
Le titre utilise la typographie oversized `clamp(2.5rem, 8vw, 5rem)` avec `line-height: 0.95`.

**Mobile** : Stack vertical, titre oversized en haut, 3 cartes preview en scroll horizontal.

### 9.2 Bento Grid (remplace la grille uniforme)

Chaque section d'ere utilise un **bento grid** avec variation de taille :
- Rois importants (fidelite >= 4 etoiles OU regne > 30 ans) → carte **large** (span 2 colonnes)
- Rois standard → carte **normale** (1 colonne)
- `grid-auto-flow: dense` pour combler les trous

| Breakpoint | Colonnes | Gap | Notes |
|------------|----------|-----|-------|
| < 640px (mobile) | 1 | 24px | Pas de span, toutes les cartes 1 col |
| 640–1023px (tablette) | 2 | 24px | Rois importants span 2 |
| 1024–1279px (desktop) | 3 | 32px | Rois importants span 2 |
| >= 1280px (large) | 4 | 32px | Rois importants span 2 |

### 9.3 Page Quiz — Flux Complet

```
ÉTAPE 1 : CONFIG                ÉTAPE 2 : QUESTION              ÉTAPE 3 : RÉSULTATS
┌──────────────────┐           ┌──────────────────┐           ┌──────────────────┐
│ 👑 Quiz  [Retour]│           │ 👑 Quiz  [Retour]│           │ 👑 Quiz  [Retour]│
├──────────────────┤           ├──────────────────┤           ├──────────────────┤
│                  │           │                  │           │                  │
│ CATÉGORIE        │           │ Question 3 / 10  │           │    RÉSULTATS     │
│                  │           │ ████████░░  30%  │           │                  │
│ ● Tous les rois  │           │                  │           │   ╭─────────╮    │
│ ○ Monarchie Unie │           │ Quel roi a       │           │   │  8/10   │    │
│ ○ Israël (Nord)  │           │ consulté une     │           │   │  80%    │    │
│ ○ Juda (Sud)     │           │ médium ?         │           │   ╰─────────╯    │
│                  │           │                  │           │                  │
│ QUESTIONS        │           │ ┌──────────────┐ │           │ ✅ 8 correctes   │
│                  │           │ │ A. David      │ │           │ ❌ 2 incorrectes │
│ [5] [10] [20]    │           │ ├──────────────┤ │           │                  │
│                  │           │ │ B. Saül    ✅│ │           │ Détail :         │
│                  │           │ ├──────────────┤ │           │ Q1: ✅ David     │
│ ┌──────────────┐ │           │ │ C. Salomon   │ │           │ Q2: ✅ Achab     │
│ │ ▶ Commencer  │ │           │ ├──────────────┤ │           │ Q3: ✅ Saül      │
│ └──────────────┘ │           │ │ D. Roboam    │ │           │ Q4: ❌ Asa       │
│                  │           │ └──────────────┘ │           │ ...              │
│                  │           │                  │           │                  │
│                  │           │ 📖 1 Samuel 28   │           │ [Rejouer]        │
│                  │           │ Saül consulta la │           │ [Accueil]        │
│                  │           │ médium d'En-Dor  │           │                  │
│                  │           │                  │           │                  │
│                  │           │ [Suivante →]     │           │                  │
└──────────────────┘           └──────────────────┘           └──────────────────┘
```

### 9.4 QuizModal (depuis une carte)

```
┌─────────────────────────────────────────┐
│           FOND SEMI-TRANSPARENT         │
│                                         │
│    ┌───────────────────────────┐        │
│    │ Quiz — Saül          [✕] │        │
│    │                          │        │
│    │ Question 1 / 3           │        │
│    │ ███░░░░░░░  33%          │        │
│    │                          │        │
│    │ Quel prophète a oint     │        │
│    │ Saül comme roi ?         │        │
│    │                          │        │
│    │ ┌──────────────────────┐ │        │
│    │ │ A. Nathan             │ │        │
│    │ ├──────────────────────┤ │        │
│    │ │ B. Samuel        ✅  │ │        │
│    │ ├──────────────────────┤ │        │
│    │ │ C. Élie              │ │        │
│    │ ├──────────────────────┤ │        │
│    │ │ D. Ésaïe             │ │        │
│    │ └──────────────────────┘ │        │
│    │                          │        │
│    │ 📖 1 Samuel 10:1        │        │
│    │                          │        │
│    │ [Question suivante →]    │        │
│    └───────────────────────────┘        │
│                                         │
└─────────────────────────────────────────┘
```

---

## 10. User Stories & Parcours Utilisateur

### 10.1 User Stories

#### Découverte

| ID | Story | Priorité |
|----|-------|----------|
| US-01 | En tant qu'utilisateur, je veux voir toutes les cartes des rois organisées par ère, pour avoir une vue d'ensemble chronologique | P0 |
| US-02 | En tant qu'utilisateur, je veux cliquer sur une carte pour la retourner avec une animation 3D fluide et voir les détails du roi | P0 |
| US-03 | En tant qu'utilisateur, je veux voir les étoiles de fidélité sur chaque carte pour comprendre rapidement si le roi était bon ou mauvais | P0 |
| US-04 | En tant qu'utilisateur, je veux voir le portrait Pixar de chaque roi sur la face avant de la carte | P0 |
| US-05 | En tant qu'utilisateur, je veux filtrer les cartes par ère (Unie/Israël/Juda) | P1 |
| US-06 | En tant qu'utilisateur, je veux filtrer les cartes par fidélité (fidèles/infidèles) | P2 |
| US-07 | En tant qu'utilisateur, je veux rechercher un roi par son nom | P2 |
| US-08 | En tant qu'utilisateur, je veux cliquer sur le nom du "roi parallèle" pour naviguer vers sa carte | P1 |

#### Quiz

| ID | Story | Priorité |
|----|-------|----------|
| US-10 | En tant qu'utilisateur, je veux lancer un quiz depuis le verso d'une carte pour tester mes connaissances sur ce roi | P0 |
| US-11 | En tant qu'utilisateur, je veux accéder à un quiz global depuis la navigation avec choix de catégorie et nombre de questions | P0 |
| US-12 | En tant qu'utilisateur, je veux voir immédiatement si ma réponse est correcte (feedback visuel vert/rouge) | P0 |
| US-13 | En tant qu'utilisateur, je veux voir l'explication avec la référence biblique après chaque réponse | P0 |
| US-14 | En tant qu'utilisateur, je veux voir mon score final avec le détail des bonnes/mauvaises réponses | P0 |
| US-15 | En tant qu'utilisateur, je veux avoir des questions variées (pas toujours le même type) | P1 |

#### Progression

| ID | Story | Priorité |
|----|-------|----------|
| US-20 | En tant qu'utilisateur, je veux voir combien de rois j'ai découverts (compteur X/43) | P1 |
| US-21 | En tant qu'utilisateur, je veux que mes scores soient sauvegardés entre les sessions | P1 |
| US-22 | En tant qu'utilisateur, je veux voir une barre de progression globale | P2 |

### 10.2 Parcours Utilisateur Principal

```
1. ARRIVÉE
   └→ Voit le hero + titre + barre progression
   └→ Scrolle pour voir les cartes

2. EXPLORATION
   └→ Voit les 3 sections (Unie, Israël, Juda)
   └→ Clique sur une carte (ex: David)
   └→ La carte fait un flip 3D → voit les détails
   └→ Lit les faits marquants
   └→ Clique sur "roi parallèle" → scroll vers cette carte
   └→ Reclique pour retourner
   └→ Continue à explorer d'autres cartes

3. QUIZ PAR CARTE
   └→ Sur le verso d'une carte, clique "Quiz"
   └→ Modal s'ouvre avec 3 questions sur ce roi
   └→ Répond, voit le feedback immédiat
   └→ Voit le score final (2/3)
   └→ Ferme le modal

4. QUIZ GLOBAL
   └→ Clique "Quiz" dans le header
   └→ Choisit "Juda (Sud)" + "10 questions"
   └→ Répond aux 10 questions
   └→ Voit le score (7/10) avec détail
   └→ Clique "Rejouer" ou retourne à l'accueil

5. RETOUR
   └→ Voit que sa progression a avancé (15/43)
   └→ Continue à explorer
```

---

## 11. Interactions & Micro-animations

### 11.1 Animations de base

| Interaction | Animation | Duree | Easing |
|-------------|-----------|-------|--------|
| **Card flip** | rotateY(0→180) via Motion spring (`import { motion } from "motion/react"`) | ~0.6s | spring: stiffness 300, damping 40 |
| **Card hover** (desktop) | translateY(-4px) + shadow intensifiee | 0.2s | ease-out |
| **Quiz option hover** | Scale 1.02 + border highlight | 0.15s | ease |
| **Bonne reponse** | Flash vert + scale 1.05 bounce | 0.3s | spring |
| **Mauvaise reponse** | Flash rouge + shake horizontal | 0.4s | spring |
| **Barre progression** | Width animate de 0% a X% | 0.8s | ease-out |
| **Score circulaire** | Stroke-dasharray animate de 0 a score | 1.2s | ease-in-out |
| **Modal apparition** | Fade in fond + scale 0.95→1 contenu | 0.3s | ease-out |
| **Section scroll** | Smooth scroll vers l'ancre | — | smooth |
| **Filtre changement** | Cards fade out/in avec layout animation | 0.3s | ease |

### 11.2 Scroll-triggered Reveals (Modern SaaS)

| Animation | Detail | Implementation |
|-----------|--------|----------------|
| **Staggered fade-up** | Les cartes apparaissent en cascade (50ms delay entre chaque) | Motion `useInView` + `transition.delay` incremente par index |
| **Section parallax** | Headers d'ere avec leger parallax au scroll | CSS `background-attachment: fixed` ou Motion `useScroll` |
| **Hero cards float** | 3 cartes preview dans le hero avec animation flottante continue (bob up/down) | Motion `animate` avec `y: [0, -10, 0]` en boucle, duree 3-4s, ease-in-out |
| **Counter animate** | Le compteur X/43 s'anime (count up) quand il entre dans le viewport | Motion `useInView` + `useMotionValue` pour interpoler de 0 a X |

---

## 12. Accessibilité

| Critère | Implémentation |
|---------|---------------|
| **Cartes flippables** | `role="button"`, `tabIndex={0}`, `aria-label="Carte de [roi], cliquer pour retourner"` |
| **État flip** | `aria-pressed={isFlipped}` indique l'état |
| **Navigation clavier** | Enter/Space pour flipper, Escape pour fermer modal |
| **Contraste** | Texte brun `#3d2e1e` sur fond `#f5e6d0` = ratio >7:1 (AAA) |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` → flip instantané sans animation |
| **Images** | `alt="Portrait de [roi], roi de [royaume]"` |
| **Étoiles** | `aria-label="Fidélité : X sur 5"` |
| **Quiz** | Focus automatique sur la question, annonce vocale du feedback |

---

## 13. Performance

| Métrique | Cible |
|----------|-------|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Time to Interactive** | < 3s |
| **Bundle JS** | < 120KB gzipped (Next.js + Motion + Tailwind v4) |
| **Images** | WebP, lazy loading, placeholder blur |
| **Animation FPS** | 60fps constant sur les flips (Web Animations API via Motion) |
| **Lighthouse score** | > 90 (Performance, Accessibility, Best Practices) |

### Optimisations prévues

- **Images** : format WebP, `next/image` avec lazy loading et blur placeholder
- **Motion** : Utilise le Web Animations API pour des animations 120fps off-main-thread
- **Fonts** : `next/font/google` pour self-hosting et éviter le layout shift (pas de requête runtime à Google)
- **Turbopack** : Bundler par défaut Next.js 16 — 10-14x plus rapide en dev
- **Cards off-screen** : Lazy loading des animations avec `useInView` de Motion
- **Static export** : Pas de serveur, CDN only → TTFB minimal
- **Tailwind v4** : 70% plus petit en production (6-12KB gzipped vs 20-30KB avec v3)
- **Tree-shaking** : Import direct des icônes Heroicons `@heroicons/react/24/solid`
- **Reduced motion** : `prefers-reduced-motion` respecté pour accessibilité

---

## 14. Contraintes & Limites

| Contrainte | Impact |
|------------|--------|
| **Pas de backend** | Données 100% statiques, pas de mise à jour dynamique |
| **Pas d'auth** | Progression en localStorage → perdue si cache vidé |
| **Pas de sync** | Pas de progression multi-device |
| **Export statique** | Pas de SSR, pas de API routes Next.js |
| **Images fournies manuellement** | L'utilisateur doit générer et ajouter les 43 portraits |
| **Français uniquement** | Pas d'i18n, un seul marché linguistique |
| **Données bibliques** | Interprétations chronologiques variables selon les sources |

---

## 15. Phases d'Implémentation

### Phase 1 — Fondation (Priorité : P0)

| Étape | Fichier(s) | Description |
|-------|-----------|-------------|
| 1.1 | — | `npx create-next-app@latest kings --typescript --tailwind --eslint --app --src-dir --turbopack` + `npm install motion zustand @radix-ui/react-dialog @heroicons/react` |
| 1.2 | `src/app/globals.css` + `postcss.config.mjs` | Config Tailwind v4 CSS-first avec `@import "tailwindcss"` + `@theme` (couleurs, fonts) |
| 1.3 | `src/types/index.ts` | Toutes les interfaces TypeScript (King, KeyFact, FactCategory, Quiz*) |
| 1.4 | `src/data/kings.ts` | **Les 43 rois** avec toutes les données et catégories de faits |
| 1.5 | `src/stores/useProgressStore.ts` | Zustand store avec persist middleware |
| 1.6 | `src/app/layout.tsx` | Root layout avec fonts (Cinzel+Inter), metadata |
| 1.7 | `next.config.ts` | `output: 'export'`, `images: { unoptimized: true }` |

**Livrable** : Projet qui compile, données typées, state management, fonts chargées.

### Phase 2 — Cartes 3D (Priorité : P0)

| Étape | Fichier(s) | Description |
|-------|-----------|-------------|
| 2.1 | `StarRating.tsx` | Composant étoiles 1–5 réutilisable |
| 2.2 | `CardFront.tsx` | Face avant : image, nom, étoiles, règne, bordure colorée |
| 2.3 | `CardBack.tsx` | Face arrière : faits, prophètes, référence, bouton quiz |
| 2.4 | `KingCard.tsx` | **Flip 3D** avec Motion (`motion/react`) — composant cœur, `'use client'` |
| 2.5 | `CardGrid.tsx` | Grille responsive avec sections d'ère inline |

**Livrable** : 43 cartes qui s'affichent et se retournent avec animation 3D.

### Phase 3 — Pages & Navigation (Priorité : P0)

| Étape | Fichier(s) | Description |
|-------|-----------|-------------|
| 3.1 | `Header.tsx` | Navigation sticky : logo, liens, compteur |
| 3.2 | `Hero.tsx` | Section hero avec titre, description, CTA |
| 3.3 | `FilterBar.tsx` | Filtres ère + fidélité |
| 3.4 | `src/app/page.tsx` | Assemblage : Hero + FilterBar + CardGrid |

**Livrable** : Page d'accueil complète et navigable.

### Phase 4 — Quiz (Priorité : P0)

| Étape | Fichier(s) | Description |
|-------|-----------|-------------|
| 4.1 | `src/lib/quiz.ts` | Algorithme de génération des 4 types de questions |
| 4.2 | `src/hooks/useQuiz.ts` | Hook état quiz |
| 4.3 | `QuizModal.tsx` | Radix Dialog : quiz par carte (3-4 questions + feedback + score) |
| 4.4 | `QuizFlow.tsx` | Quiz global : setup → questions → résultats (composant unique) |
| 4.5 | `src/app/quiz/page.tsx` | Page quiz avec QuizFlow |

**Livrable** : Quiz fonctionnel par carte et en mode global.

### Phase 5 — Progression & Polish (Priorité : P1)

| Étape | Fichier(s) | Description |
|-------|-----------|-------------|
| 5.1 | Header, Hero, Cards | Intégrer Zustand progression (compteur X/43, barre, badges) |
| 5.2 | `public/images/kings/placeholder.webp` | Image fallback (silhouette couronne) |
| 5.3 | — | Meta tags, Open Graph, favicon |
| 5.4 | — | Test responsive tous breakpoints + accessibilité |

**Livrable** : Application complète, prête au déploiement.

---

## 16. Métriques de Succès

### Critères d'acceptation techniques

- [ ] Les 43 cartes s'affichent correctement dans la grille
- [ ] Le flip 3D est fluide (60fps) sur mobile et desktop
- [ ] Les 3 sections d'ère sont visuellement distinctes (or/rouge/bleu)
- [ ] Le quiz génère des questions correctes et variées (4 types)
- [ ] Le feedback quiz est immédiat avec explication biblique
- [ ] La grille est responsive : 1 col mobile → 4 col desktop
- [ ] Les images manquantes affichent le placeholder
- [ ] La progression est sauvegardée entre les sessions (Zustand persist)
- [ ] `npm run build` produit un export statique sans erreur
- [ ] Lighthouse Performance > 90
- [ ] Navigation clavier fonctionnelle (Enter/Space pour flip, Escape pour modal)

### Critères d'acceptation UX

- [ ] Un nouvel utilisateur comprend immédiatement qu'il faut cliquer sur les cartes
- [ ] Le quiz est engageant et donne envie de recommencer pour améliorer son score
- [ ] L'esthétique évoque à la fois le biblique (parchemin, or) et le moderne (animations, gradients)
- [ ] Le texte est lisible sur tous les devices
- [ ] Le temps de chargement est imperceptible (< 3s)

---

## 17. Questions Ouvertes & Évolutions Futures

### Questions ouvertes

| Question | Impact | Décision suggérée |
|----------|--------|-------------------|
| Faut-il ajouter les faits marquants détaillés pour les 19 rois du Nord et 21 de Juda ? | Contenu data/kings.ts | Oui, l'utilisateur fournira les données progressivement |
| Format exact des images ? | public/images/ | WebP, 640x960px (ratio 2:3), < 50KB chacune + blur placeholders |
| Ajouter un mode sombre ? | Design | V2 — pas prioritaire |
| Ajouter du son (effet flip, quiz) ? | UX | V2 — optionnel |

### Évolutions V2 potentielles

- **Timeline interactive** : Frise chronologique horizontale avec les rois placés temporellement
- **Mode sombre** : Thème alternatif
- **Partage social** : Partager son score quiz sur les réseaux
- **Comparaison** : Comparer deux rois côte à côte
- **Détails étendus** : Page dédiée par roi avec contexte historique complet
- **Achievements/Badges** : Système de récompenses (« Tout découvert », « Sans faute », etc.)
- **Spaced repetition** : Quiz intelligent qui re-pose les questions mal répondues
- **Audio** : Narration des faits marquants
- **PWA** : Installation sur mobile comme app native
- **Multi-langue** : Anglais, espagnol, portugais
