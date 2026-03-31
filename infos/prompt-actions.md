# Prompt — Section "Nos Actions en Cours"

## Contexte

Tu travailles sur la section `sections/actions.html` du site statique de l'association "Les Parents de Pennac". Le contenu source est dans `infos/actions.txt`.

## Contenu actuel à mettre à jour

La section affiche 4 cartes d'actions sous forme de grille. Chaque carte contient :
- Un emoji représentatif
- Un badge de statut (`Termine bientôt`, `En cours`, `À venir`)
- Un titre
- Une description
- (Optionnel) Une liste de détails
- (Optionnel) Une date avec icône calendrier
- (Optionnel) Un bouton qui redirige vers un lien

## Actions à afficher

### 1. 👕 Tabliers Personnalisés — Badge : `Termine bientôt`
- Tabliers avec les dessins des enfants
- Deux modèles : primaire et maternelle
- Plusieurs tailles (adulte et enfant)
- 4 coloris disponibles

### 2. 📚 Boîte à Livres — Badge : `En cours`
- Rénovation d'une boîte à livres pour l'échange de livres
- Mettre en avant l'économie circulaire et le partage

### 3. 📚 Opération semis — Badge : `En cours`
- Rénovation d'une boîte à livres pour l'échange de livres
- Mettre en avant l'économie circulaire et le partage

### 3. 📚 Banc de l'amitié : `À venir`
- Rénovation d'une boîte à livres pour l'échange de livres
- Mettre en avant l'économie circulaire et le partage

### 4. 🎉 Fête de l'École 2026 — Badge : `À venir`
- Date : **23 juin 2026** à la Guérinière
- Jeux pour les enfants dans la journée :
  - PS au CE1 : le matin et en début d'après-midi
  - CE2 au CM2 : l'après-midi
- Goûter partagé avec toutes les familles de 16h45 à 19h45
- Ajouter un appel à l'aide bénévole : "Vous souhaitez nous aider ? Remplissez le formulaire ci-joint pour la journée, et utilisez le second formulaire pour nous indiquer votre participation au goûter partagé."
- **TODO** : Ajouter les liens vers les formulaires quand ils seront disponibles

### 5. 🎉 Bourse aux draps/chaussons — Badge : `À venir`

## Consignes

- Garder le même format de cartes (`.action-card`)
- Les badges utilisent les classes : `.action-badge` (défaut = "En cours"), `.badge-active` ("Termine bientôt"), `.badge-upcoming` ("À venir")
- Le contenu doit rester concis sur les cartes, pas de texte trop long
- Les actions doivent être mises à jour régulièrement : penser à changer les badges et retirer les actions terminées
- Fichier CSS associé : `css/actions.css`

## Notes pour les futures mises à jour

- Quand une action est terminée, la retirer
- De nouvelles actions peuvent être ajoutées (ventes, événements, projets pédagogiques...)
- Penser à mettre à jour cette liste à chaque trimestre
