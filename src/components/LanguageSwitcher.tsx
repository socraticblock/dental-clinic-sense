'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: 'en', label: 'EN' },
    { code: 'ka', label: 'GE' },
    { code: 'ru', label: 'RU' },
    { code: 'de', label: 'DE' }
  ];

  function onLocaleChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="flex items-center gap-3 text-[10px] font-black tracking-widest">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => onLocaleChange(loc.code)}
          disabled={isPending}
          className={`hover:text-secondary transition-colors ${
            locale === loc.code ? 'text-secondary' : 'text-primary/40'
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}
