import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            {/* <BugButton /> */}
            {t('Main page')}
            {/* <Input onChange={onChange} value={value} placeholder={"Enter the text"}/> */}
            {/* <Counter /> */}
        </div>
    );
}
export default MainPage;
