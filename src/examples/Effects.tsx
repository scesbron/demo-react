export function Effects() {
  return (
    <div className="pl-4">
      <ul className="list-disc">
        <li>Permet de synchroniser un composant avec un système externe (exemple API)</li>
        <li>Par défaut s'exécute après chaque render</li>
        <li>On peut définir des dépendances, l'effet ne se joue que si elles changent</li>
        <li>Un effet avec un tableau de dépendance vide ne s'exécute qu'au mount</li>
        <li>En dev, en strict mode les effets sont exécutés deux fois</li>
        <li>Un effet a une fonction de cleanup</li>
        <li>Avant d'utiliser un effet il faut être sûr d'en avoir vraiment besoin</li>
      </ul>
    </div>
  )
}
