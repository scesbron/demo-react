export function Jsx() {
  return (
    <div className="pl-4">
      <ul className="list-disc ul:list-revert">
        <li>Ce n'est pas du templating, un template converti la syntaxe en html, jsx en javascript</li>
        <li>
          Plus strict que du html
          <ul className="list-disc pl-4">
            <li>un seul élément root</li>
            <li>tous les tags doivent être fermés</li>
            <li>camelCase most of the attributes (à part data-* et aria-*)</li>
          </ul>
        </li>
        <li>On peut utiliser du javascript à l'intérieur des accolades</li>
      </ul>
    </div>
  )
}
