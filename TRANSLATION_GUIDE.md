# Translation System Guide

This project implements a complete English/French translation system with localStorage persistence.

## Features

- ✅ English and French translations
- ✅ Language selection persisted in localStorage
- ✅ React hooks for easy integration
- ✅ Automatic language detection and persistence
- ✅ Type-safe translation keys

## Usage

### 1. Using the Translation Hook

```tsx
import useTranslation from '@/hooks/useTranslation'

const MyComponent = () => {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('about.description')}</p>
    </div>
  )
}
```

### 2. Using the Language Hook

```tsx
import useLanguage from '@/hooks/useLanguage'

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage()
  
  return (
    <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
      Current: {lang}
    </button>
  )
}
```

### 3. Using the Simple Language Toggle

```tsx
import LanguageToggle from '@/components/LanguageToggle'

const Header = () => (
  <header>
    <LanguageToggle className="ml-4" />
  </header>
)
```

## Available Translation Keys

### Navigation
- `nav.home` - Home/Accueil
- `nav.about` - About/À Propos
- `nav.services` - Services/Services
- `nav.projects` - Projects/Projets
- `nav.blog` - Blog/Blog
- `nav.contact` - Contact/Contact

### About Section
- `about.founder` - Founder title
- `about.description` - Main description with HTML formatting
- `about.quote` - Inspirational quote
- `about.services` - Services section title
- `about.quickContact` - Quick contact title
- `about.discoverMore` - Discover more button
- `about.watchVideo` - Watch video button
- `about.stats.projects` - Projects stat label
- `about.stats.satisfaction` - Satisfaction stat label
- `about.stats.years` - Years stat label

### Services
- `services.webDesign` - Web Design
- `services.seo` - SEO
- `services.marketing` - Marketing
- `services.branding` - Branding

### Contact
- `contact.email` - Email address
- `contact.location` - Location

### Common
- `common.readMore` - Read more
- `common.viewAll` - View all
- `common.getStarted` - Get started
- `common.learnMore` - Learn more

## Adding New Translations

1. Open `/resources/js/lib/translations.ts`
2. Add your new keys to both `fr` and `en` objects:

```typescript
export const translations = {
  fr: {
    // ... existing translations
    newSection: {
      title: 'Nouveau Titre',
      description: 'Nouvelle description'
    }
  },
  en: {
    // ... existing translations
    newSection: {
      title: 'New Title',
      description: 'New description'
    }
  }
}
```

3. Use in components:

```tsx
const { t } = useTranslation()
return <h1>{t('newSection.title')}</h1>
```

## HTML Content in Translations

For translations containing HTML (like highlighted text), use `dangerouslySetInnerHTML`:

```tsx
<p dangerouslySetInnerHTML={{ __html: t('about.description') }} />
```

## Language Persistence

The selected language is automatically saved to localStorage and restored on page reload. The system defaults to French if no language is previously selected.

## Components Updated

The following components have been updated to use translations:
- `NavLinksComponent` - Navigation links
- `AboutComponent` - Complete about section
- `LanguageSwitcherComponent` - Already existed, now works with localStorage

## File Structure

```
resources/js/
├── hooks/
│   ├── useLanguage.ts      # Language state management
│   └── useTranslation.ts   # Translation hook
├── lib/
│   └── translations.ts     # Translation data
└── components/
    ├── LanguageToggle.tsx  # Simple language toggle
    └── TranslationExample.tsx # Usage example
```