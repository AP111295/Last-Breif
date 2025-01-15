# CO2WEB - Application de localisation de Vélib' et calcul d'émissions de CO2 🚗💨

## Description du projet 📖​

Le projet "CO2WEB" est une application web qui permet de localiser des Vélib' à proximité tout en intégrant des fonctionnalités pour sensibiliser les utilisateurs sur les émissions de CO2 générées par les trajets en voiture. L'application présente une interface responsive adaptée à différents types de dispositifs (desktop, notebook, tablette et mobile).

### Fonctionalités principales

1. **Barre de navigation mobile avec menu burger** : La navigation sur la version mobile de l'application est facilitée par un menu burger qui permet d'afficher ou de cacher le menu de navigation.
2. **Slide show sur la page "Comment ça marche"** : Un carrousel d'images et d'informations sur la page "Comment ça marche" améliore l'expérience utilisateur sur mobile.
3. **Compte à rebours sur la page "Trouver un Vélib"** : Un compte à rebours pour patienter en attendant que la fonctionnalité de localisation de Vélib' soit disponible.
4. **Calculateur d'émission de CO2** : Un calculateur permettant de calculer les émissions de CO2 générées par les trajets en voiture (domicile-travail). Il prend en compte la distance effectuée chaque semaine et un facteur d'émission moyen de 0.12 kg de CO2/km pour une voiture essence.

## Responsive 📱💻

L'application est conçue pour être responsive et s'adapter aux dimensions suivantes :

- **Desktop** : 1920x1080
- **Notebook** : 1366x768
- **Mobile** : 360x800
- **Tablette** : 768x1024

## Installation 🛠️

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Sass** : Sass est un préprocesseur CSS qui permet de mieux organiser et structurer les fichiers CSS. Si vous n'avez pas encore installé Sass, vous pouvez le faire via npm.

### Etapes d'installation

1- **Clonez ce dépot sur votre machine locale :** `git clone https://github.com/AP111295/Last-Breif`
2- **Installez Sass via npm :** `npm install -g sass`
3- **Compilez le fichier SCSS en CSS :** Le projet utilise Sass pour gérer les styles. Exécutez la commande suivante pour compiler les fichiers .scss : ` sass --watch scss/main.scss public/main.css`
4- Ouvrir index.html avec le navigateur

## Ressources utilisées

### Images

Les images (images vectorielles au format .svg) sont stockées dans le dossier `/images/`

### Typos

Les polices d'écriture proviennent de Google Fonts, et sont les suivantes:

- Montserrat
- Roboto
  [lien vers Google Fonts](https://fonts.google.com/)

## Equipe de développement 👩🏻‍💻​

https://github.com/AP111295
https://github.com/kanekiko
https://github.com/Anaisktl
https://github.com/MarineHerbeth
