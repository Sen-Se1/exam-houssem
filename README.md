# **PARTIE I – FRONT-END ANGULAR (8 pts)**

## **1. Création du projet Angular**

```bash
ng new exam-houssem
cd exam-houssem
ng s
```

Ce step crée la structure du projet et démarre l'application.

---

## **2. Installation et intégration de Bootstrap v5**

Installer Bootstrap :

```bash
npm install bootstrap@5
```

Ajouter Bootstrap dans `angular.json` :

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

Cela permet d’utiliser les composants Bootstrap directement dans Angular.

---

## **3. Création du service PostService**

Command :

```bash
ng g s services/post
```

Le service contient une liste de posts + la méthode `getPosts()` pour récupérer les données (statique ou via API REST).

---

## **4. Création des composants Angular**

```bash
ng g c components/post-list
ng g c components/post-item
ng g c components/login
```

### Rôle des composants :

* **app.component** → Navbar + container
* **post-list** → Affichage de la liste des posts (Bootstrap Accordion)
* **post-item** → Affichage d’un post (facultatif)
* **login** → Page simple « Login Page »

---

## **5. Mise en place du routing Angular**

Routes :

```ts
const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
];
```

Le routing permet de naviguer entre les pages.

---

## **6. Git commit + création d’une branche**

```bash
git init
git add .
git commit -m "Initial Angular structure"
git branch version2
```

---

## **7. Association d’un dépôt GitHub**

```bash
git remote add origin https://github.com/Sen-Se1/exam-houssem.git
git branch -M main
git push -u origin main
git push -u origin version2
```

Cela permet de publier tout le projet en ligne.

---

---

# **PARTIE II – BACK-END NODEJS (8 pts)**

## **8. Création du serveur NodeJS + ExpressJS**

Initialisation du backend :

```bash
mkdir backend && cd backend && touch server.js
npm init -y
npm install express cors
```

Création du fichier `server.js` avec une API REST fonctionnelle.

---

## **9. API GET /postList**

Une route Express retourne les posts :

```js
app.get('/postList', (req, res) => {
  res.json(postList);
});
```

---

## **10. Lancer le serveur Node**

```bash
node server.js
```

---

---

# **PARTIE III – LIAISON FRONT / BACK (4 pts)**

## **11. Appel API REST dans Angular via HttpClient**

Importer `HttpClientModule` dans `app.module.ts`.

Le service Angular utilise la méthode :

```ts
return this.http.get('http://localhost:3000/postList');
```

Cela remplace les données statiques par celles du backend.

---

## **12. Génération du build Angular dans backend/www**

```bash
ng build --output-path backend/www --configuration production
```

Cela compile l’application Angular pour la rendre servable via Node ou tout autre serveur.

---

## **13. Deuxième push GitHub**

```bash
git add .
git commit -m "Backend + REST API + Angular build"
git push
```