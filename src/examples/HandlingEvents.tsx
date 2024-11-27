export function HandlingEvents() {
  return (
    <div className="pl-4">
      <ul className="list-disc">
        <li>On peut utiliser les event handlers</li>
        <li>On peut y générer des effets de bords</li>
        <li>On peut stopper la propagation ou prévenir le comportement par défaut</li>
        <li className="text-amber-600">Ce sont juste des callbacks, pas de syntax spécifique comme @click en vue</li>
      </ul>
    </div>
  )
}
