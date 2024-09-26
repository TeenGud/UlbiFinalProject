import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function BugButton() {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const throwError = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={throwError}>
            {t('Throw error')}
        </Button>
    );
}
