export function State() {
  return (
    <div className="pl-4">
      <ul className="list-disc">
        <li>Pourquoi une variable standard n'est pas suffisante ?</li>
        <li>Utilisation du hook useState</li>
        <li>Un hook ne peut pas être appelé de manière conditionnelle</li>
        <li>useState retoune une paire, le state et la fonction pour le mettre à jour</li>
        <li>Le state est privé à une instance d'un composant</li>
        <li>A chaque render on voit un snapshot du state : utilisation d'une fonction d'update</li>
        <li>Le state est read-only, il ne faut pas le mettre à jour mais appeler la fonction d'update</li>
        <li className="text-amber-600">Remplace l'option data de vue</li>
        <li className="text-amber-600">Il n'y a pas de shortcut comme le v-model dans vue</li>
      </ul>
    </div>
  )
}
