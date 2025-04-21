# X.509 Viewer Angular

Visualisateur de certificats X.509 (à partir de fichiers `.pem` ou `.crt`), construit avec **Angular 17**, **Material** et **x509-parser** !

## Fonctionnalités

- Drag & Drop ou sélection de fichier
- Affichage moderne et responsive avec Material Design
- Extensions du certificat affichées en mode accordéon
- Différents badges et couleurs pour améliorer la lisibilité
- Parsing X.509 robust via `x509-parser`

---

## Prérequis

- Node.js >= 18.x
- Angular CLI 17

```bash
npm install -g @angular/cli@17
```

---

## Installation

1. **Cloner le projet**

```bash
git clone <URL_DU_REPO>
cd x509-viewer-angular
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Ajouter x509-parser**

Si vous avez la librairie `x509-parser` à disposition (build local) :

```bash
npm install ../chemin/vers/x509-parser/dist
```

(Sinon publier ou simuler un package npm local)

4. **Lancer l'application**

```bash
npm run start
```

Application disponible sur :

```
http://localhost:4200
```

---

## Arborescence

```bash
src/
 ├── app/
 │   ├── components/
 │   │   └── certificate-viewer/
 │   │       ├── certificate-viewer.component.ts
 │   │       ├── certificate-viewer.component.html
 │   │       └── certificate-viewer.component.scss
 │   └── app.component.ts
 │   └── app.component.html
 └── main.ts
```

---

## Utilisation

- Faites glisser un certificat `.pem` ou `.crt` directement dans la zone dédiée
- Ou cliquez pour sélectionner un fichier depuis votre ordinateur
- Le certificat est parsé et affiché proprement sous forme de cartes et d'accordéons

---

## Améliorations possibles

- Dark Mode
- Signature visuelle de la chaîne
- Support multi-certificats (.p7b, .pfx)
- Export JSON du certificat parsé

---

## License

MIT License

---

✨ Bon hacking sur vos certificats X.509 !
