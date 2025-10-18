# 🎨 Design System - Velus

## 📋 Visão Geral

Este documento define o padrão de design estabelecido para o projeto Velus, garantindo consistência visual, escalabilidade e manutenibilidade em todos os componentes.

## 🎯 Princípios de Design

### **Simplicidade e Clareza**

- Interface limpa e focada no usuário
- Hierarquia visual clara e intuitiva
- Redução de ruído visual desnecessário

### **Consistência Visual**

- Padrões de cores, tipografia e espaçamento uniformes
- Componentes reutilizáveis e padronizados
- Transições e animações consistentes

### **Responsividade**

- Design mobile-first
- Adaptação fluida para todos os tamanhos de tela
- Experiência otimizada em dispositivos móveis

## 🎨 Paleta de Cores

### **Cores Primárias**

```css
/* Azul - Cor principal da marca */
--blue-50: #eff6ff --blue-100: #dbeafe --blue-500: #3b82f6 --blue-600: #2563eb
  --blue-700: #1d4ed8 --blue-800: #1e40af /* Roxo - Cor secundária */
  --purple-50: #faf5ff --purple-100: #f3e8ff --purple-500: #a855f7
  --purple-600: #9333ea --purple-700: #7c3aed;
```

### **Cores Neutras**

```css
/* Cinzas para textos e backgrounds */
--gray-50: #f9fafb --gray-100: #f3f4f6 --gray-200: #e5e7eb --gray-500: #6b7280
  --gray-600: #4b5563 --gray-700: #374151 --gray-800: #1f2937
  --gray-900: #111827;
```

### **Cores de Estado**

```css
/* Sucesso */
--green-600: #16a34a /* Aviso */ --yellow-500: #eab308 /* Erro */
  --red-500: #ef4444;
```

### **Uso das Cores**

- **Azul**: Elementos principais, CTAs, links, ícones
- **Roxo**: Gradientes, destaques, elementos secundários
- **Cinza**: Textos, backgrounds, bordas
- **Verde**: Status ativo, sucesso
- **Laranja**: Acentos sutis (quando necessário)

## 🔤 Tipografia

### **Hierarquia de Fontes**

```css
/* Títulos Principais */
--font-size-4xl: 2.25rem (36px) - font-bold --font-size-3xl: 1.875rem (30px) -
  font-bold --font-size-2xl: 1.5rem (24px) - font-bold /* Subtítulos */
  --font-size-xl: 1.25rem (20px) - font-semibold --font-size-lg: 1.125rem
  (18px) - font-semibold /* Corpo do Texto */ --font-size-base: 1rem (16px) -
  font-normal --font-size-sm: 0.875rem (14px) - font-normal
  --font-size-xs: 0.75rem (12px) - font-medium;
```

### **Pesos de Fonte**

- **font-bold**: Títulos principais e destaques
- **font-semibold**: Subtítulos e elementos importantes
- **font-medium**: Labels e elementos secundários
- **font-normal**: Corpo do texto

### **Altura da Linha**

- **leading-tight**: Títulos (1.25)
- **leading-relaxed**: Corpo do texto (1.625)

## 📐 Espaçamento e Layout

### **Sistema de Espaçamento**

```css
/* Margens e Paddings */
--spacing-1: 0.25rem (4px) --spacing-2: 0.5rem (8px) --spacing-3: 0.75rem (12px)
  --spacing-4: 1rem (16px) --spacing-6: 1.5rem (24px) --spacing-8: 2rem (32px)
  --spacing-12: 3rem (48px) --spacing-16: 4rem (64px) --spacing-20: 5rem (80px);
```

### **Breakpoints Responsivos**

```css
/* Mobile First */
--sm: 640px --md: 768px --lg: 1024px --xl: 1280px --2xl: 1536px
  /* Classes Tailwind */ sm: (min-width: 640px) md: (min-width: 768px)
  lg: (min-width: 1024px) xl: (min-width: 1280px) 2xl: (min-width: 1536px);
```

### **Container e Layout**

```css
/* Container principal */
max-w-7xl: 80rem (1280px)
mx-auto: Centralização automática

/* Grid responsivo */
grid-cols-1: Mobile (1 coluna)
sm:grid-cols-2: Tablet (2 colunas)
lg:grid-cols-4: Desktop (4 colunas)
```

## 🔲 Componentes Base

### **Cards**

```tsx
// Estrutura padrão para cards
<div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-6">
  {/* Conteúdo do card */}
</div>
```

### **Botões**

```tsx
// Botão primário
<button className="rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl">
  Texto do botão
</button>

// Botão secundário
<button className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50">
  Texto do botão
</button>
```

### **Badges/Labels**

```tsx
// Badge informativo
<div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-white px-3 py-2 text-blue-700">
  <span className="text-xs font-medium">Texto do badge</span>
</div>
```

### **Gradientes**

```css
/* Gradiente azul-roxo (principal) */
bg-gradient-to-r from-blue-600 to-purple-600

/* Gradiente azul sutil */
bg-gradient-to-r from-blue-100 to-white

/* Gradiente de fundo */
bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20
```

## 🎭 Estados e Interações

### **Hover Effects**

```css
/* Escala */
hover:scale-105: Aumento sutil de 5%
hover:scale-110: Aumento de 10%

/* Sombras */
hover:shadow-xl: Sombra mais intensa
hover:shadow-blue-500/25: Sombra colorida

/* Bordas */
hover:border-blue-200: Borda azul no hover
hover:border-gray-200: Borda cinza no hover
```

### **Transições**

```css
/* Duração padrão */
transition-all duration-300: 300ms para todas as propriedades

/* Transições específicas */
transition-transform duration-300: Apenas transformações
transition-colors duration-200: Apenas cores
```

### **Animações**

```css
/* Rotação */
group-hover:rotate-180: Rotação completa no hover

/* Movimento */
group-hover:translate-x-1: Movimento horizontal
group-hover:translate-y-1: Movimento vertical
```

## 📱 Responsividade

### **Mobile First**

```tsx
// Exemplo de classe responsiva
className = "text-base sm:text-lg lg:text-xl";
// Mobile: text-base (16px)
// Tablet: text-lg (18px)
// Desktop: text-xl (20px)
```

### **Espaçamento Responsivo**

```tsx
// Margens e paddings responsivos
className = "m-4 sm:m-8 py-12 sm:py-20";
// Mobile: m-4 py-12
// Desktop: m-8 py-20
```

### **Grid Responsivo**

```tsx
// Grid adaptativo
className = "grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4";
// Mobile: 1 coluna, gap-4
// Tablet: 2 colunas, gap-6
// Desktop: 4 colunas, gap-6
```

## 🎨 Modais e Overlays

### **Estrutura do Modal**

```tsx
<Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="max-h-[700px] max-w-2xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-0 shadow-2xl">
    {/* Header fixo */}
    <div className="rounded-t-3xl bg-gradient-to-br from-gray-50 to-white p-8 pb-6">
      {/* Conteúdo do header */}
    </div>

    {/* Conteúdo scrollável */}
    <div className="max-h-[calc(700px-200px)] overflow-y-auto p-8 pt-6">
      {/* Conteúdo do modal */}
    </div>
  </DialogContent>
</Dialog>
```

### **Características do Modal**

- **Altura máxima**: 700px
- **Bordas**: rounded-3xl (24px)
- **Header fixo**: Sempre visível
- **Conteúdo scrollável**: Quando necessário
- **Sombras**: shadow-2xl para profundidade

## 🔧 Utilitários CSS

### **Classes Comuns**

```css
/* Flexbox */
flex flex-col: Coluna vertical
flex flex-row: Linha horizontal
items-center: Centralização vertical
justify-center: Centralização horizontal
justify-between: Espaçamento entre elementos

/* Posicionamento */
relative: Posicionamento relativo
absolute: Posicionamento absoluto
fixed: Posicionamento fixo

/* Visibilidade */
overflow-hidden: Oculta overflow
overflow-y-auto: Scroll vertical automático
```

### **Classes de Estado**

```css
/* Interatividade */
cursor-pointer: Cursor de mão
group: Container para hover effects
group-hover: Estilos no hover do grupo

/* Foco */
focus-visible: Estilos no foco visível
focus-visible:ring-1: Anel de foco
```

## 📋 Checklist de Implementação

### **Para Novos Componentes**

- [ ] Seguir a paleta de cores estabelecida
- [ ] Usar o sistema de espaçamento consistente
- [ ] Implementar responsividade mobile-first
- [ ] Adicionar transições suaves (duration-300)
- [ ] Usar bordas arredondadas (rounded-2xl, rounded-3xl)
- [ ] Implementar hover effects apropriados
- [ ] Seguir a hierarquia tipográfica

### **Para Modificações**

- [ ] Manter consistência com componentes existentes
- [ ] Testar em diferentes tamanhos de tela
- [ ] Verificar contraste de cores
- [ ] Manter a performance das animações
- [ ] Documentar mudanças significativas

## 🚀 Próximos Passos

### **Melhorias Futuras**

1. **Sistema de tokens**: Criar variáveis CSS para todas as cores e espaçamentos
2. **Componentes avançados**: Desenvolver biblioteca de componentes reutilizáveis
3. **Modo escuro**: Implementar suporte completo a tema escuro
4. **Animações**: Adicionar micro-interações e animações de entrada
5. **Acessibilidade**: Melhorar suporte a leitores de tela e navegação por teclado

### **Documentação**

- [ ] Criar storybook para componentes
- [ ] Documentar todos os componentes existentes
- [ ] Criar guia de uso para desenvolvedores
- [ ] Estabelecer processo de revisão de design

---

**Última atualização**: Dezembro 2024  
**Versão**: 1.0.0  
**Mantido por**: Equipe Velus
