# Prompt de construction du site "Les Parents de Pennac"

## Contexte

Tu travailles sur le site statique de l'association de parents d'élèves "Les Parents de Pennac", dédiée à l'école Daniel Pennac. Le site est hébergé via GitHub Pages. La structure actuelle utilise du HTML/CSS/JS vanilla avec un système d'includes (`data-include` + `js/loader.js`).

Le site contient actuellement du **contenu fictif/placeholder** qui doit être remplacé par le vrai contenu fourni dans le dossier `infos/`.

## Structure du projet

```
├── index.html              # Page principale avec includes
├── css/                    # Un fichier CSS par section
├── js/                     # loader.js (includes) + main.js
├── sections/               # HTML de chaque section
│   ├── navbar.html
│   ├── hero.html
│   ├── actions.html
│   ├── about.html
│   ├── team.html
│   ├── contact.html
│   └── footer.html
├── images/
│   ├── logo.svg
│   ├── icon-*.svg
│   └── trombinoscope/      # Photos individuelles de l'équipe (JPEG/JPG)
└── infos/                  # Contenu réel à intégrer (fichiers .odt)
```

## Sources de contenu (dossier `infos/`)

Chaque fichier .odt contient le vrai contenu à intégrer :

| Fichier | Contenu | Section cible |
|---------|---------|---------------|
| `association.odt` | Présentation de l'asso (fondée en juin 2025, valeurs, missions) | `about.html` |
| `equipe.odt` | Vrais membres du bureau et bénévoles avec rôles et enfants | `team.html` |
| `actions.odt` | Actions en cours (chocolats, boîte à livres, fête de l'école, tabliers) | `actions.html` |
| `news.odt` | Actualités (cantine, carnaval, conseil d'école) | Nouvelle section ou intégré dans actions |
| `partenariats.odt` | Partenariats (A-qui-S, Ma Rentrée Facile, Ma Petite Aventure) | Nouvelle section ou intégré dans actions |
| `adhesion.odt` | Infos adhésion (à partir de 5€/famille/an) | `hero.html` / `about.html` |

## Photos de l'équipe (`images/trombinoscope/`)

Photos individuelles nommées par Prénom+Nom (ex: `AmandineMinard.jpg`, `JuliaEisenmann.jpg`). Chaque photo correspond à un membre listé dans `equipe.odt`.

## Corrections importantes à appliquer

1. **Date de fondation** : L'asso a été fondée en **juin 2025** (pas 2018)
2. **Équipe** : Remplacer les noms fictifs par les vrais membres de `equipe.odt`
3. **Photos** : Utiliser les vraies photos de `images/trombinoscope/` au lieu de l'avatar SVG générique
4. **Fête de l'école** : Date correcte = **23 juin 2026** à La Guérinière (pas 20 juin)
5. **Actions** : Remplacer les actions fictives par les vraies (chocolats de Pâques, boîte à livres, fête de l'école, tabliers personnalisés)
6. **Statistiques** : Mettre à jour ou retirer les stats fictives (85 familles, 30+ projets...)
7. **Adresse/contact** : Vérifier et corriger si nécessaire

## Tâches à réaliser

### 1. Mettre à jour le contenu existant
- [ ] `sections/about.html` : Intégrer le contenu de `association.odt` (fondation juin 2025, missions, valeurs)
- [ ] `sections/team.html` : Remplacer l'équipe fictive par les vrais membres de `equipe.odt` avec les photos de `images/trombinoscope/`
- [ ] `sections/actions.html` : Remplacer par les vraies actions de `actions.odt`
- [ ] `sections/hero.html` : Vérifier la cohérence avec `adhesion.odt`
- [ ] `sections/contact.html` : Vérifier l'email (lesparentsdepennac@gmail.com)

### 2. Ajouter du nouveau contenu
- [ ] Intégrer les actualités de `news.odt` (cantine, carnaval, conseil d'école)
- [ ] Créer une nouvelle section pour les partenariats et intégrer ceux décrits dans `partenariats.odt` (A-qui-S, Ma Rentrée Facile, Ma Petite Aventure)

### 3. Aspects techniques
- [ ] Optimiser les images du trombinoscope (certaines font >1Mo)
- [ ] S'assurer que le site reste responsive
- [ ] Mettre à jour la navbar si de nouvelles sections sont ajoutées
- [ ] Vérifier que le widget HelloAsso fonctionne correctement

###4. Aspect Visuel
- [ ] Le code couleur est violet: #6329bb, vert foncé : #43ab51, vert clair: #7fda19, bleu: #0ab6c9, rose: #ef17b3, orange: #fd9804

## Contraintes

- Site statique uniquement (HTML/CSS/JS), pas de framework ni de backend
- Hébergé sur GitHub Pages
- Mobile-first / responsive
- Respecter le design et la charte graphique existante
- Garder le système d'includes via `data-include`
