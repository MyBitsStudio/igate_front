"use client"

import React from "react"
import Link from "next/link"
import { byCategory, byItem, Categories } from "@/data/navbar_data"
import {
  integrationCategories,
  turboIntegrations,
} from "@/data/turbo-integrations"

import { siteConfig } from "@/config/site"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { LightDarkImage } from "@/components/shared/light-dark-image"

import { LinkComponent } from "../shared/link-component"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/*<LightDarkImage*/}
        {/*  LightImage="/logo-dark.png"*/}
        {/*  DarkImage="/logo-light.png"*/}
        {/*  alt="TurboETH"*/}
        {/*  className="rounded-full"*/}
        {/*  height={32}*/}
        {/*  width={32}*/}
        {/*/>*/}
        <span className="hidden bg-gradient-to-br from-blue-500 to-red-400 bg-clip-text text-2xl font-bold text-transparent dark:from-blue-500 dark:to-red-400 sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-base font-medium">
        <MainNavMenu />
      </nav>
    </div>
  )
}

function MainNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Categories.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
            <NavigationMenuContent className="max-h-[768px] overflow-y-scroll">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[768px] lg:grid-cols-3">
                {byCategory(item).map((cat) => (
                  <>
                    <h4
                      key={cat.name}
                      className="text-lg font-medium leading-none md:col-span-2 lg:col-span-3"
                    >
                      {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                    </h4>
                    <Separator className="md:col-span-2 lg:col-span-3" />
                    {Object.values(byItem(cat))
                      .filter((integration) => integration.category === cat)
                      .map(({ name, href, description, img }) => (
                        <NavMenuListItem
                          key={name}
                          name={name}
                          href={href}
                          description={description}
                          lightImage={img}
                          darkImage={img}
                        />
                      ))}
                  </>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface NavMenuListItemProps {
  name: string
  description: string
  href: string
  lightImage: string
  darkImage: string
}

const NavMenuListItem = ({
  name,
  description,
  href,
  lightImage,
  darkImage,
}: NavMenuListItemProps) => {
  return (
    <li className="w-full min-w-full" key={name}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="flex select-none flex-col gap-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-x-2">
            <LightDarkImage
              LightImage={lightImage}
              DarkImage={darkImage}
              alt="icon"
              height={24}
              width={24}
              className="h-6 w-6"
            />
            <span className="text-base font-medium leading-none">{name}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
