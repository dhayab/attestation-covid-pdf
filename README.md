# attestation-covid-pdf

Le bouton ci-dessous permet de déployer une instance de cette API en quelques minutes sur Vercel/Now.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdhayab%2Fattestation-covid-pdf)

## Motivation

Les attestations fournies par l'outil officiel sont actuellement générées côté client (par le navigateur), ce qui n'est pas idéal pour les intégrer dans des workflows d'automatisation. Ce projet, se basant sur le code original, permet de faire une génération côté serveur et retourne directement le fichier PDF correctement rempli.

## Utilisation

> https://\<projet\>.vercel.app/api/attestation.pdf

| Paramètre d'URL                        | Format     | Description                                                  |
| -------------------------------------- | ---------- | ------------------------------------------------------------ |
| firstname                              | string     | Prénom                                                       |
| lastname                               | string     | Nom                                                          |
| birthday                               | dd/MM/yyyy | Date de naissance                                            |
| placeofbirth                           | string     | Ville de naissance                                           |
| address                                | string     | Adresse                                                      |
| city                                   | string     | Ville                                                        |
| zipcode                                | string     | Code postal                                                  |
| reasons<br />(défaut : travail)        | string     | Raison(s) du déplacement :<br />travail, achats, sante, famille, handicap, sport_animaux, convocation, missions, enfants |
| datesortie<br />(défaut : maintenant)  | dd/MM/yyyy | Date de sortie                                               |
| heuresortie<br />(défaut : maintenant) | HH:ii      | Heure de sortie                                              |

## Crédits

Code de génération du PDF issu du [générateur de certificat de déplacement](https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020/) développé par LAB-MI.

