import { HomeIcon, DashboardIcon, GearIcon, GridIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Components",
    href: "/components",
    icon: GridIcon,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: GearIcon,
  },
]

export function SideNav() {
  const location = useLocation()

  return (
    <div className="flex h-screen w-[200px] flex-col border-r bg-background">
      <div className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Link key={item.href} to={item.href}>
            <Button
              variant={location.pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                location.pathname === item.href && "bg-muted"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
} 