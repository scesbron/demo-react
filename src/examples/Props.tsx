export function Props() {
  return (
    <div className="pl-4">
      <ul className="list-disc">
        <li>On utilise les props pour passer des valeurs entre composants</li>
        <li>Généralement on déstructure les props</li>
        <li>Valeurs par défaut</li>
        <li>Forward de props avec l'opérateur de spread</li>
        <li>Cas particulier de la "children" prop</li>
        <li>Les props sont read-only</li>
        <li className="text-amber-600">
          Pas de besoin de computed properties comme dans vue, on peut utiliser des variables js classiques et useMemo
          pour avoir la même chose
        </li>
        <li className="text-amber-600">La children prop correspond à un slot en vue</li>
      </ul>
    </div>
  )
}
