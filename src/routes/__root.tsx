import { AppSideBar } from '@/components/app-side-bar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <SidebarProvider>
      <AppSideBar />
      <main className='bg-background min-h-screen flex'>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
    {/* <TanStackRouterDevtools /> */}
  </>
)

export const Route = createRootRoute({ component: RootLayout })
