// components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Switch } from '@nextui-org/react';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Switch size="lg" isSelected={false} disabled />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Switch
      size="lg"
      thumbIcon={isDark ? <FiMoon size={12} /> : <FiSun size={12} />}
      isSelected={isDark}
      onValueChange={(val) => setTheme(val ? 'dark' : 'light')}
    />
  );
};
