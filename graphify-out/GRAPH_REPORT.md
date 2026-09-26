# Graph Report - AlessioPersonalSite  (2026-09-26)

## Corpus Check
- 86 files · ~85,537 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 633 nodes · 1178 edges · 34 communities (27 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 120,025 input · 0 output

## Community Hubs (Navigation)
- Runtime Dependencies
- Page Sections & App Shell
- Alert Dialog & Button
- Package Manifest
- Sidebar & Separator UI
- Popover-style UI Primitives
- Blog & Card Components
- Server & Vite Build
- Toast Notifications
- Contact Form & Validation
- Deployment, SEO & CV
- Menubar UI
- Dev Dependencies
- Command Palette UI
- TypeScript Config
- Chart Components
- Context Menu UI
- Dropdown Menu UI
- Breadcrumb UI
- Drawer UI
- Navigation Menu UI
- Select UI
- Sheet UI
- Accordion UI
- Tabs UI
- NPM Scripts
- Profile Photo
- Input Component
- Favicon & Resume Icon
- Aspect Ratio UI
- Collapsible UI
- Optional Dependencies
- Tailwind Config

## God Nodes (most connected - your core abstractions)
1. `cn()` - 226 edges
2. `react` - 56 edges
3. `lucide-react` - 28 edges
4. `compilerOptions` - 15 edges
5. `class-variance-authority` - 11 edges
6. `Button` - 10 edges
7. `buttonVariants` - 9 edges
8. `react-i18next` - 9 edges
9. `User` - 9 edges
10. `useToast()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Hash-based routing (wouter useHashLocation for GitHub Pages)` --semantically_similar_to--> `SPA 404.html redirect script`  [INFERRED] [semantically similar]
  README.md → .github/workflows/deploy.yml
- `Production build (vite -> dist/public)` --conceptually_related_to--> `build job (npm ci + npm run build, BASE_URL=/info.github.io/)`  [INFERRED]
  README.md → .github/workflows/deploy.yml
- `Sorrentino Alessio CV (PDF)` --references--> `Live site alessio1304.github.io/info.github.io`  [EXTRACTED]
  client/public/Sorrentino Alessio CV.pdf → README.md
- `build job (npm ci + npm run build, BASE_URL=/info.github.io/)` --shares_data_with--> `Live site alessio1304.github.io/info.github.io`  [INFERRED]
  .github/workflows/deploy.yml → README.md
- `AccordionItem` --calls--> `cn()`  [EXTRACTED]
  client/src/components/ui/accordion.tsx → client/src/lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **GitHub Pages deployment pipeline** — _github_workflows_deploy_build, _github_workflows_deploy_prepare_github_pages_files, _github_workflows_deploy_spa_404_redirect, _github_workflows_deploy_deploy [EXTRACTED 1.00]
- **CV technical projects at Politecnico di Torino** — client_public_sorrentino_alessio_cv_iot_smart_home, client_public_sorrentino_alessio_cv_realtime_tetris, client_public_sorrentino_alessio_cv_simulator_engine, client_public_sorrentino_alessio_cv_spectral_analysis [EXTRACTED 1.00]

## Communities (34 total, 7 thin omitted)

### Community 0 - "Runtime Dependencies"
Cohesion: 0.03
Nodes (65): dependencies, class-variance-authority, clsx, cmdk, connect-pg-simple, date-fns, drizzle-orm, drizzle-zod (+57 more)

### Community 1 - "Page Sections & App Shell"
Cohesion: 0.06
Nodes (38): App(), About(), Footer(), Header(), Hero(), Resume(), SkillItemProps, TimelineItemProps (+30 more)

### Community 2 - "Alert Dialog & Button"
Cohesion: 0.06
Nodes (37): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+29 more)

### Community 3 - "Package Manifest"
Cohesion: 0.05
Nodes (39): license, name, type, version, autoprefixer, bufferutil, connect-pg-simple, date-fns (+31 more)

### Community 4 - "Sidebar & Separator UI"
Cohesion: 0.06
Nodes (34): Separator, client_src_components_ui_sheet_sheet, Sidebar, SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction (+26 more)

### Community 5 - "Popover-style UI Primitives"
Cohesion: 0.06
Nodes (27): Alert, AlertDescription, AlertTitle, alertVariants, HoverCardContent, PopoverContent, Progress, ScrollArea (+19 more)

### Community 6 - "Blog & Card Components"
Cohesion: 0.07
Nodes (24): BlogPostProps, Badge(), BadgeProps, badgeVariants, Card, CardContent, CardDescription, CardFooter (+16 more)

### Community 7 - "Server & Vite Build"
Cohesion: 0.09
Nodes (23): drizzle-orm, drizzle-zod, express, ref_fs, ref_http, ref_nanoid, ref_path, vite (+15 more)

### Community 8 - "Toast Notifications"
Cohesion: 0.11
Nodes (26): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, client_src_components_ui_toast_toastprovider, ToastTitle (+18 more)

### Community 9 - "Contact Form & Validation"
Cohesion: 0.11
Nodes (23): Contact(), formSchema, FormValues, client_src_components_ui_form_form, FormControl, FormDescription, FormField(), FormFieldContext (+15 more)

### Community 10 - "Deployment, SEO & CV"
Cohesion: 0.10
Nodes (26): Deploy to GitHub Pages workflow, build job (npm ci + npm run build, BASE_URL=/info.github.io/), deploy job (actions/deploy-pages), Prepare GitHub Pages files step (.nojekyll + 404.html), SPA 404.html redirect script, client/index.html HTML template, #root mount point + main.tsx module script, SEO / OpenGraph / Twitter meta tags (+18 more)

### Community 11 - "Menubar UI"
Cohesion: 0.16
Nodes (21): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+13 more)

### Community 12 - "Dev Dependencies"
Cohesion: 0.09
Nodes (22): devDependencies, autoprefixer, drizzle-kit, esbuild, postcss, @replit/vite-plugin-cartographer, @replit/vite-plugin-runtime-error-modal, tailwindcss (+14 more)

### Community 13 - "Command Palette UI"
Cohesion: 0.10
Nodes (18): Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+10 more)

### Community 14 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, baseUrl, esModuleInterop, incremental, jsx, lib, module (+10 more)

### Community 15 - "Chart Components"
Cohesion: 0.23
Nodes (10): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, getPayloadConfigFromPayload(), THEMES (+2 more)

### Community 16 - "Context Menu UI"
Cohesion: 0.18
Nodes (10): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+2 more)

### Community 17 - "Dropdown Menu UI"
Cohesion: 0.18
Nodes (10): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+2 more)

### Community 18 - "Breadcrumb UI"
Cohesion: 0.22
Nodes (8): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator(), @radix-ui/react-slot

### Community 19 - "Drawer UI"
Cohesion: 0.22
Nodes (7): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle, vaul

### Community 20 - "Navigation Menu UI"
Cohesion: 0.25
Nodes (8): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport, @radix-ui/react-navigation-menu

### Community 21 - "Select UI"
Cohesion: 0.22
Nodes (8): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, @radix-ui/react-select

### Community 22 - "Sheet UI"
Cohesion: 0.25
Nodes (8): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants

### Community 23 - "Accordion UI"
Cohesion: 0.40
Nodes (4): AccordionContent, AccordionItem, AccordionTrigger, @radix-ui/react-accordion

### Community 24 - "Tabs UI"
Cohesion: 0.40
Nodes (4): TabsContent, TabsList, TabsTrigger, @radix-ui/react-tabs

### Community 25 - "NPM Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, check, dev, preview

### Community 26 - "Profile Photo"
Cohesion: 0.67
Nodes (4): Graduation Laurel Wreath (laurea celebration), Portrait Photo (formal attire, riverside at sunset), IMG_9754 Profile Photo, Static Public Asset (client/public)

## Knowledge Gaps
- **203 isolated node(s):** `BlogPostProps`, `formSchema`, `FormValues`, `TimelineItemProps`, `SkillItemProps` (+198 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 237 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Menubar UI` to `Page Sections & App Shell`, `Alert Dialog & Button`, `Sidebar & Separator UI`, `Popover-style UI Primitives`, `Blog & Card Components`, `Toast Notifications`, `Contact Form & Validation`, `Command Palette UI`, `Chart Components`, `Context Menu UI`, `Dropdown Menu UI`, `Breadcrumb UI`, `Drawer UI`, `Navigation Menu UI`, `Select UI`, `Sheet UI`, `Accordion UI`, `Tabs UI`, `Input Component`?**
  _High betweenness centrality (0.244) - this node is a cross-community bridge._
- **Why does `react` connect `Page Sections & App Shell` to `Alert Dialog & Button`, `Package Manifest`, `Sidebar & Separator UI`, `Popover-style UI Primitives`, `Blog & Card Components`, `Toast Notifications`, `Contact Form & Validation`, `Menubar UI`, `Command Palette UI`, `Chart Components`, `Context Menu UI`, `Dropdown Menu UI`, `Breadcrumb UI`, `Drawer UI`, `Navigation Menu UI`, `Select UI`, `Sheet UI`, `Accordion UI`, `Tabs UI`, `Input Component`?**
  _High betweenness centrality (0.221) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Manifest`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **What connects `BlogPostProps`, `formSchema`, `FormValues` to the rest of the system?**
  _203 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03076923076923077 - nodes in this community are weakly interconnected._
- **Should `Page Sections & App Shell` be split into smaller, more focused modules?**
  _Cohesion score 0.05764411027568922 - nodes in this community are weakly interconnected._
- **Should `Alert Dialog & Button` be split into smaller, more focused modules?**
  _Cohesion score 0.06387921022067364 - nodes in this community are weakly interconnected._