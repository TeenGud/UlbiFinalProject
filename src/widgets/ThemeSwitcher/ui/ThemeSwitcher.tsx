import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}
export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme} theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
        </Button>
    );
}
