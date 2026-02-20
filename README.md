# React Boilerplate

Ce projet est un template de démarrage robuste pour des applications React modernes, utilisant **Vite** pour des performances optimales.

## 🚀 Fonctionnalités Clés

- **⚡ Performance** : Vite pour un démarrage et un rechargement instantanés.
- **🎨 UI** : TailwindCSS intégré pour un styling rapide et responsive.
- **📦 État Global** : Zustand pour une gestion d'état simple et performante.
- **🛣️ Routage** : React Router v7 pour la gestion des pages.
- **🧪 Tests** : Vitest + React Testing Library pour des tests unitaires et d'intégration fiables.
- **🧹 Qualité du Code** : ESLint et Prettier configurés pour maintenir un code propre.
- **🤖 CI/CD** : Pipeline GitHub Actions automatisé.

## 📂 Architecture du Projet

La structure du dossier `src/` suit une approche modulaire et claire :

```
src/
├── 📁 components/      # Composants réutilisables (Layout, Header, etc.)
├── 📁 hooks/           # Hooks personnalisés et stores (ex: useStore.jsx)
├── 📁 pages/           # Composants représentant des pages complètes
├── 📁 utils/           # Fonctions utilitaires helper
├── 📄 app.jsx          # Point d'entrée principal de l'application
├── 📄 index.css        # Styles globaux et configuration Tailwind
└── 📄 routes.jsx       # Définition centrale des routes
```

### Gestion de l'État (State Management)

L'état global est géré via **Zustand** dans `src/hooks/useStore.jsx`.
Il contient actuellement un exemple simple de compteur avec une logique "non-négative".

## 🛠️ Installation et Démarrage

Assurez-vous d'avoir Node.js installé.

1.  **Cloner le projet**

    ```bash
    git clone https://github.com/AkekoChan/react-boilerplate.git
    cd react-boilerplate
    ```

2.  **Installer les dépendances**

    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```

## 📜 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Compile l'application pour la production.
- `npm run preview` : Prévisualise la version de production localement.
- `npm run lint` : Analyse le code avec ESLint.
- `npm run format` : Formate tout le code avec Prettier.
- `npm test` : Lance la suite de tests avec Vitest.

## 🛣️ Routage (Routes)

Les routes sont centralisées dans `src/routes.jsx`.

| Chemin   | Composant      | Description                                |
| :------- | :------------- | :----------------------------------------- |
| `/`      | `<Home />`     | Page d'accueil.                            |
| `/count` | `<Count />`    | Démonstration du store Zustand (Compteur). |
| `*`      | `<NotFound />` | Page 404 pour les routes inconnues.        |

## 🤖 CI/CD (GitHub Actions)

L'intégration continue est configurée dans `.github/workflows/ci.yml`.
À chaque `push` ou `pull_request` sur la branche principale, le workflow exécute :

1.  **Checkout** du code.
2.  **Installation** des dépendances.
3.  **Vérification du formatage** (Prettier).
4.  **Linting** (ESLint).
5.  **Exécution des tests** (Vitest).
6.  **Build** de production pour vérifier que tout compile correctement.

---

## 🏗️ Stack Technique

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS 4](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router DOM](https://reactrouter.com/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)
