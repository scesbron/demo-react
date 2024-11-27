import { PropsWithChildren } from 'react'

function Section({ children }: PropsWithChildren) {
  return <section className="border-2 border-r-2 p-2">{children}</section>
}

function Heading({ level, children }: PropsWithChildren & { level: number }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      throw Error('Unknown level: ' + level)
  }
}

export function Context() {
  return (
    <div className="flex flex-col">
      <div className="pl-4">
        <ul className="list-disc">
          <li>Permet de fournir une information à un arbre de composant</li>
          <li>Peut traverser des composants intermédiaires</li>
          <li>Avant d'utiliser un contexte on essaie d'utiliser les props</li>
          <li>Cas d'usage : theme, current account, routing, panier d'achat, ...</li>
          <li className="text-amber-600">Correspond au provide / inject de vue</li>
        </ul>
      </div>
      <div className="pt-8">
        <Section>
          <Heading level={1}>Title</Heading>
          <Section>
            <Heading level={2}>Heading</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={2}>Heading</Heading>
            <Section>
              <Heading level={3}>Sub-heading</Heading>
              <Heading level={3}>Sub-heading</Heading>
              <Heading level={3}>Sub-heading</Heading>
              <Section>
                <Heading level={4}>Sub-sub-heading</Heading>
                <Heading level={4}>Sub-sub-heading</Heading>
                <Heading level={4}>Sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </div>
    </div>
  )
}
