# Exos JS

## Petit exercice de chauffe

Avant de faire la calculatrice de la mort, voici un petit échauffement pour ne pas perdre la main :

1. Construis une fonction my_max() qui prend une array et qui retourne le nombre maximum

2. Construis une fonction vowel_count() qui prend un string et qui retourne le nombre de voyelles

3. Construis une fonction reverse() qui prend un string et qui renvoie les caractères en position inverse. Ainsi, Bonjour monde ! devient ! ednom ruojnoB

## La calculatrice

Pour la calculatrice, nous allons te donner un petit pas à pas pour t'aider.

Commence par construire une fonction add(), qui prend deux nombres et qui les ajoute entre eux. Ensuite fais des fonctions multiply(), divide(), et substract() qui fonctionnent de manière similaire.

Créé une grille de divs qui correspondent aux chiffres 0-9. Branche un listener qui affiche le chiffre correspondant au div cliqué dans le console.log. Cela peut être fait en assignant une fonction à la propriété onclick() du div concerné (ou alors jQuery par exemple).

Maintenant, ajoute les boutons "+", "-", "x", "/", "=" et "clear". Cela veut dire plus de divs yay !

Pour faire "marcher" la calculatrice, tu devras "sauvegarder" le bouton pressé, dans une variable ou array. Tu devras aussi sauvegarder l'opération qui a été choisie (additionner) jusqu'à ce que le user presse "=". Quand cela arrive, le programme devra exécuter les fonctions que tu as codée précédemment.
