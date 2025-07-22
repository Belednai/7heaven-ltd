import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react";
import { X, Menu as MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils"
import logo from "@/assets/7Heaven.jpg";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

// Responsive NavigationBar component
const NavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo/Brand */}
        <a href="#home" className="flex items-center gap-3 text-2xl font-bold text-primary tracking-wide font-montserrat">
          <img src={logo} alt="Seven Heaven Logo" className="max-h-12 w-auto object-contain" />
          <span className="flex flex-col leading-tight">
            <span>7 Heaven</span>
            <span className="text-2xl font-bold text-primary tracking-wide font-montserrat">General Trading Co. Ltd</span>
          </span>
        </a>
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          <li>
            <a href="#home" className="hover:text-primary transition-colors focus:text-primary focus:underline focus:outline-none">Home</a>
          </li>
          <li>
            <a href="#services" className="hover:text-primary transition-colors focus:text-primary focus:underline focus:outline-none">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary transition-colors focus:text-primary focus:underline focus:outline-none">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors focus:text-primary focus:underline focus:outline-none">Contact</a>
          </li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon className="h-7 w-7 text-primary" />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-300">
          <button
            className="absolute top-6 right-6 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-8 w-8 text-primary" />
          </button>
          <ul className="flex flex-col space-y-8 text-2xl font-semibold text-primary">
            <li>
              <a href="#home" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors focus:text-primary focus:underline focus:outline-none">Home</a>
            </li>
            <li>
              <a href="#services" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors focus:text-primary focus:underline focus:outline-none">Services</a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors focus:text-primary focus:underline focus:outline-none">About</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors focus:text-primary focus:underline focus:outline-none">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationBar,
}
