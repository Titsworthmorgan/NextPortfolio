'use client'
import Link from "next/link";
import styles from "./nav.module.scss";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export default function Nav() {
  return (
    <div className={styles.navParent}>
        <div>
      <NavigationMenu className='NavigationMenu'>
        <NavigationMenuList className='NavigationMenuList'>
          <NavigationMenuItem className='NavigationMenuItem'>
            <NavigationMenuTrigger className='NavigationMenuTrigger'>Item One</NavigationMenuTrigger>
            <NavigationMenuContent className={styles.menuContent}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </div>
  );
}
