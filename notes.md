# TodolistJs

---

Attribut HTML : readonly

L'attribut booléen readonly, lorsqu'il est présent, rend l'élément non mutable, ce qui signifie que l'utilisateur ne peut pas modifier le contrôle. Si l'attribut readonly est spécifié sur un élément de saisie, comme l'utilisateur ne peut pas modifier la saisie, l'élément ne participe pas à la validation des contraintes.

---

css variables :root{}

Les propriétés personnalisées CSS (custom properties en anglais, aussi parfois appelés variables CSS) sont des entités définies par les développeurs ou les utilisateurs d'une page Web, contenant des valeurs spécifiques utilisables à travers le document. Elles sont initialisées avec des propriétés personnalisées (par exemple --main-color: black;) et accessibles en utilisant la notation spécifique var() (par exemple : color: var(--main-color);).

https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties

---

box-sizing
La propriété CSS box-sizing définit la façon dont la hauteur et la largeur totale d'un élément est calculée (avec le modèle de boîte CSS).

---

Propriété CSS appearance
appearance: none;

propriete obsolete

---

Apprendre CSS
https://fr.w3docs.com/apprendre-css.html

---

Un pseudo-élément est un mot-clé ajouté à un sélecteur qui permet de mettre en forme certaines parties de l'élément ciblé par la règle. Ainsi, le pseudo-élément ::first-line permettra de ne cibler que la première ligne d'un élément visé par le sélecteur.

/_ La première ligne de chaque élément <p>. _/
p::first-line {
color: blue;
text-transform: uppercase;
}

https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-elements

---

:read-only
La pseudo-classe :read-only permet de cibler un élément que l'utilisateur ne peut pas modifier
(l'élément est en lecture seule).

Note : Ce sélecteur ne permet pas de cibler que les éléments <input> ou <textarea> avec readonly. Il permet de sélectionner n'importe quel élément qui ne peut pas être édité par l'utilisateur.

https://developer.mozilla.org/fr/docs/Web/CSS/:read-only

---

:active  
La pseudo-classe :active permet de cibler un élément

> > > lorsque celui-ci est activé par l'utilisateur.

Elle permet de fournir un feedback indiquant que l'activation a bien été détectée par le navigateur. Lorsqu'on a une interaction avec un pointeur, il s'agit généralement du moment entre l'appui sur le pointeur et le relâchement de celui-ci.

button:active

<!-- ======================================================================= -->
<!-- JAVASCRIPT -->
<!-- ======================================================================= -->

window.addEventListener("load", () => {});
window

L'objet window représente une fenêtre contenant un document DOM ; la propriété document pointe vers le document DOM chargé dans cette fenêtre.

---

document.querySelector
element = document.querySelector(sélecteurs);

La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.

Note : La correspondance est effectuée en utilisant le parcours pré-ordonné profondeur-d'abord des nœuds du document, en partant du premier élément dans le balisage du document et en itérant à travers les nœuds en séquence, par ordre du compte de nœuds enfants.

---

Element addEventListener()
element.addEventListener(event, function, useCapture)

event Required.
The name of the event.
Do not use the "on" prefix.
Use "click" not "onclick".

function Required.
The function to run when the event occurs.

---

return
L'instruction return met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante.

---

document.createElement (cree une balise html)
var element = document.createElement(tagName[, options]);

Dans un document HTML, la méthode document.createElement() crée un élément HTML du type spécifié par tagName ou un HTMLUnknownElement si tagName n’est pas reconnu.

---

element.appendChild
La méthode Node.appendChild() ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié. Si l'enfant donné est une référence à un nœud existant dans le document, appendChild() le déplace de sa position actuelle vers une nouvelle position (il n'est pas nécessaire de supprimer le noeud sur son noeud parent avant de l'ajouter à un autre).

---

element.innerHTML

La propriété Element.innerHTML de Element récupère ou définit la syntaxe HTML décrivant les descendants de l'élément.
Note : Si un nœud <div>, <span>, ou <noembed> a un sous-nœud de type texte contenant les caractères (&), (<), ou (>), innerHTML renverra à la place les chaînes suivantes : "&amp;", "&lt;" et "&gt;" respectivement. Utilisez Node.textContent pour obtenir une copie exacte du contenu de ces nœuds.

---

Element.append()
La méthode Element.append() ajoute un ensemble d'objets Node ou de chaînes de caractères après le dernier enfant d'Element. Les chaînes de caractères sont insérées comme des nœuds Text.
