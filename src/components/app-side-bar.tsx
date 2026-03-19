import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ThemeModeToggle } from "./theme-mode-toggle"
import { Home, User, Briefcase, BookOpen, Mail, ArrowRight } from "lucide-react"
import { Link, useNavigate } from "@tanstack/react-router"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { LanguageToggle } from "./language-toggle"
import { useTranslation } from "react-i18next"

const links = [
  { to: '/',        label: 'nav.home',    icon: Home      },
  { to: '/about',   label: 'nav.about',   icon: User      },
  { to: '/work',    label: 'nav.work',    icon: Briefcase },
  { to: '/blog',    label: 'nav.blog',    icon: BookOpen  },
  { to: '/contact', label: 'nav.contact', icon: Mail      },
] as const

export function AppSideBar() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <p className="text-base font-medium">
          dev<strong className="text-amber-500">.</strong>lucassilva
        </p>
      </SidebarHeader>

      <SidebarContent className="pt-10 px-4">
        <SidebarMenu className="gap-2">
          {links.map(({ to, label, icon: Icon }) => (
            <SidebarMenuItem key={to}>
              <SidebarMenuButton asChild>
                <Link
                  to={to}
                  activeProps={{
                    className: 'bg-accent text-accent-foreground font-medium text-amber-500'
                  }}
                  activeOptions={to === '/' ? { exact: true } : undefined}
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {t(label)}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="p-4">
        <ThemeModeToggle />
        <LanguageToggle />
        <Button onClick={() => navigate({ to: '/contact' })}>
        {t('sidebar.hireMe')} <ArrowRight />
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
