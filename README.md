# 📘 Project README

This project uses a modern, lightweight, and highly maintainable frontend stack:

### **Frontend Framework**
- **Vue 3** (Composition API, `script setup`)

### **Build Tool**
- **Vite** (fast dev server with instant HMR)

### **Styling**
- **Tailwind CSS v4**
  - Uses the new single-import syntax (`@import "tailwindcss"`)
  - No PostCSS setup needed
  - Supports `data-[...]` variants used by Headless UI

### **Headless Components**
- **@headlessui/vue**
  - Fully unstyled, accessibility-first UI primitives
  - Uses **data attribute states**:
    - `data-[active]`
    - `data-[selected]`
    - `data-[disabled]`

### **Vite Plugins**
- **@vitejs/plugin-vue**
- **@tailwindcss/vite** (for Tailwind v4 integration)

---

## 📦 Installed Dependencies

### **Main dependencies**
- `vue`
- `@headlessui/vue`

### **Dev dependencies**
- `vite`
- `@vitejs/plugin-vue`
- `tailwindcss`
- `@tailwindcss/vite`

---

## ▶️ How to Run the App

### **Install dependencies**
```bash
npm install
npm run dev
```

## 🧪 Testing Headless UI

A working `<Listbox>` example is included in `App.vue` to verify that Headless UI and Tailwind CSS v4 are correctly integrated.

This test demonstrates:

### ✔ **Active state styling**
Rendered when hovering or focusing an option using:
- `data-[active]`

### ✔ **Selected state styling**
Rendered when selecting an item using:
- `data-[selected]`

### ✔ **Inactive/Default state**
When an item is neither active nor selected:
- `data-[inactive]`

### ✔ **Tailwind v4 data attribute variants**
Tailwind v4 fully supports these patterns, so the following classes work:

- `data-[active]:bg-blue-600`
- `data-[active]:text-white`
- `data-[selected]:bg-blue-500`
- `data-[selected]:text-white`
- `data-[inactive]:text-gray-900`

### 🎉 Expected UI behavior
- Moving the mouse over items highlights them in blue.
- The selected item remains styled differently.
- Clicking an item updates the selection in the dropdown button.
- All state styling is driven purely by data attributes (no `ui-*` variants).

This confirms that:
- Vue 3 reactivity is working  
- Headless UI state propagation is working  
- Tailwind CSS v4 variant generation is working  
- Vite compiles everything correctly  

You are now ready to build more complex interactive UI components.
