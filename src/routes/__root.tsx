import { AppSideBar } from '@/components/app-side-bar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <HeadContent />
    <SidebarProvider className='h-screen overflow-hidden'>
      <AppSideBar />
      <main className='bg-background min-h-screen min-w-screen flex'>
        <SidebarTrigger />
        <div className='flex-1 overflow-auto w-full'>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
    {/* <TanStackRouterDevtools /> */}
  </>
)

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: 'Lucas Silva | Software Engineer' },
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: 'lucassilvadev.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://lucassilvadev.com/og-image.png' },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'canonical', href: 'https://lucassilvadev.com' },
    ],
  }),
  component: RootLayout
})
