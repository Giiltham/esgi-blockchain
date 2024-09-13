# Blockchain

* si on veux s'y intéresser pour l'argent : bien regarder la législation
* sorte de liste chainée de blocs, qui contiennent chacuns une ou plusieurs actions appelés "transaction"
* lecture et ecriture uniquement, pas de modification, distribué/décentralisé, pas d'autorité de controle
* chaque nouveau bloc est transmis aux autres noeux de la blockchain, qui éxécutent les transactions de ce bloc et vérifient s'il n'y a pas une action illégale qui a été effectuée
* Chaque bloc est une chaine de hash, un bloc contient le hash du précédent bloc pour les lier entre eux. Une modification de la blockchain est alors facilement détéctable puisque le hash change
* Une méthode de consensus est utilisée pour vérifier les nouveaux blocs (ex: proof of work = course au calcul du hash, le premier qui le fait est récompensé)

## Termes

* **transaction** : actions sur la blockchain, associé à un hash
* **bloc** : regroupement de transactions, associé a un hash
* **noeud** : machine sur laquelle tourne la blockchain
* **gwei** : centime sur ethereum

## Envs

* Il existe des environnement de test comme Sepolia pour eth qui fonctionnent comme le main network et permet de tester sans dépenser d'argent le code
