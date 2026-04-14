# Prompt — Mise a jour de la section "Nos Actions en Cours"

## Objectif

Regenerer le fichier `sections/actions.html` a partir du contenu de `infos/actions.txt`. Le HTML produit doit respecter strictement la structure et les classes CSS decrites ci-dessous.

## Source de donnees

Le fichier `infos/actions.txt` contient les actions a afficher. Chaque action est separee par une ligne `-----------` et suit ce format :

```
[Emoji][Titre]
Badge: [Statut]
[Description sur une ou plusieurs lignes]
[Optionnel] Lien: [URL] avec libelle "[Texte du bouton]"
```

Les statuts possibles dans le fichier source sont : `En cours`, `A venir`, `Termine bientot`.

## Structure HTML a produire

### Squelette global

```html
<section id="actions" class="section actions-section">
    <div class="container">
        <h2 class="section-title">Nos Actions en Cours</h2>
        <p class="section-subtitle">Decouvrez les projets et initiatives que nous menons pour l'ecole Daniel Pennac.</p>

        <div class="actions-grid">
            <!-- Une <article class="action-card"> par action -->
        </div>
    </div>
</section>
```

### Structure d'une carte action

```html
<article class="action-card">
    <div class="action-emoji">[EMOJI]</div>
    <span class="action-badge [CLASSE_BADGE]">[TEXTE_BADGE]</span>
    <h3>[TITRE]</h3>
    <p>[DESCRIPTION]</p>
    <!-- Si un lien est present : -->
    <div class="action-btn-wrapper">
        <a href="[URL]" target="_blank" rel="noopener" class="btn-action">[LIBELLE]</a>
    </div>
</article>
```

## Mapping des badges

| Statut dans `actions.txt` | Classe CSS           | Texte affiche     | Couleur     |
|---------------------------|----------------------|-------------------|-------------|
| `En cours`                | `badge-active`       | En cours          | Vert        |
| `A venir`                 | `badge-upcoming`     | A venir           | Orange      |
| `Termine bientot`         | `badge-ending`       | Termine bientot   | Rouge       |

## Regles

1. **Lire `infos/actions.txt`** comme unique source de verite pour le contenu.
2. **Une carte par action** dans l'ordre du fichier source.
3. **Description** : reprendre le texte tel quel, sur une seule balise `<p>`. Fusionner les lignes multiples en un seul paragraphe.
4. **Bouton optionnel** : n'ajouter le bloc `.action-btn-wrapper` que si la ligne `Lien:` est presente.
5. **Pas de contenu en dur** : ne rien inventer, ne rien ajouter qui ne soit pas dans le fichier source.
6. **Pas de modification CSS** : le fichier `css/actions.css` ne doit pas etre modifie.
7. **Conserver le titre et sous-titre** de la section tels quels (voir squelette global ci-dessus).
8. **Encodage** : le fichier HTML doit etre en UTF-8, les accents et emojis doivent etre presents directement dans le HTML (pas d'entites HTML).

## Fichiers concernes

| Fichier | Role |
|---------|------|
| `infos/actions.txt` | Source du contenu (lecture seule) |
| `sections/actions.html` | Fichier a regenerer |
| `css/actions.css` | Styles (ne pas modifier) |

## Exemple de workflow

1. Lire `infos/actions.txt`
2. Parser chaque bloc separe par `-----------`
3. Pour chaque bloc, extraire : emoji, titre, badge, description, lien optionnel
4. Generer le HTML en suivant la structure decrite
5. Ecrire le resultat dans `sections/actions.html`
