export function Components() {
  return (
    <div className="pl-4">
      <ul className="list-disc">
        <li>Tous les composants doivent commencer par une majuscule pour les différencier des tags html</li>
        <li>On compose les composants entre eux</li>
        <li className="text-amber-600">Contrairement à vue il faut explicitement passer les styles via les props</li>
      </ul>
    </div>
  )
}
