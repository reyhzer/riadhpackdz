import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'




export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Riadh Pack – Solutions d\'emballage industriel',
      },
      {
        name: 'description',
        content: 'Riadh Pack, fabricant algérien de sacs tissés en polypropylène et solutions d\'emballage industriel pour les secteurs agricole, alimentaire et industriel.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
