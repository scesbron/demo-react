export function ConditionalRendering() {
  return (
    <div className="pl-4">
      <ul className="list-disc">
        <li>On peut retourner du jsx de manière conditionnelle</li>
        <li>On peut retourner null si le composant ne rend rien</li>
        <li>Utilisation de l'opérateur ternaire</li>
        <li>Utilisation de l'opérateur logique && (attention pas de nombre à gauche)</li>
        <li className="text-amber-600">Cela remplace les v-if, v-else et v-else-if de vue</li>
      </ul>
    </div>
  )
}
