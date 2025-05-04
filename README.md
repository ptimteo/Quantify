# Trading Journal

Une application web personnalisée pour suivre vos trades, positions crypto et investissements à long terme.

## Fonctionnalités

- **Journal de Trading**
  - Suivi des trades avec entrée/sortie
  - Calcul automatique des profits/pertes
  - Statistiques de performance (win rate, profit factor, etc.)
  - Courbe d'équité

- **Portfolio Crypto**
  - Suivi des positions crypto
  - Calcul des profits/pertes en temps réel
  - Vue d'ensemble du portfolio

- **Investissements Long Terme**
  - Suivi des investissements à long terme
  - Calcul des rendements
  - Historique des achats

## Technologies Utilisées

- Vue.js 3 avec Composition API
- TypeScript
- Vite
- Vue Router
- Pinia pour la gestion d'état
- Tailwind CSS pour le styling
- Chart.js pour les graphiques
- Element Plus pour les composants UI

## Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
cd trading-journal
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez l'application en mode développement :
```bash
npm run dev
```

4. Pour construire l'application pour la production :
```bash
npm run build
```

## Structure du Projet

```
trading-journal/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── views/         # Pages de l'application
│   ├── stores/        # Stores Pinia
│   ├── types/         # Types TypeScript
│   ├── router/        # Configuration des routes
│   ├── App.vue        # Composant racine
│   ├── main.ts        # Point d'entrée
│   └── style.css      # Styles globaux
├── public/            # Fichiers statiques
├── index.html         # Template HTML
├── vite.config.ts     # Configuration Vite
├── tailwind.config.js # Configuration Tailwind
└── package.json       # Dépendances et scripts
```

## Utilisation

1. **Journal de Trading**
   - Ajoutez des trades avec les détails (symbole, prix d'entrée/sortie, quantité)
   - Visualisez vos statistiques de performance
   - Suivez votre courbe d'équité

2. **Portfolio Crypto**
   - Ajoutez vos positions crypto
   - Suivez les profits/pertes en temps réel
   - Visualisez la répartition de votre portfolio

3. **Investissements Long Terme**
   - Ajoutez vos investissements à long terme
   - Suivez les rendements
   - Gérez votre stratégie d'investissement

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

MIT
