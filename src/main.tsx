import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { RouterProvider, createMemoryHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Styles with tailwind
import './index.css'

// Translations for project
import './i18n'

function makeRouter(url?: string) {
  return createRouter({
    routeTree,
    history: url
      ? createMemoryHistory({ initialEntries: [url] })
      : undefined,
  })
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof makeRouter>
  }
}

// Render the app
if (typeof window !== 'undefined') {
  const router = makeRouter()
  const root = document.getElementById('root')!

  if (root.innerHTML.trim()) {
    hydrateRoot(root, (
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    ))
  } else {
    createRoot(root).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    )
  }
}

// prerender function
export async function prerender(data: { url: string }) {
  const { renderToString } = await import('react-dom/server')

  const router = makeRouter(data.url)
  await router.load()

  const html = renderToString(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )

  return { html }
}
