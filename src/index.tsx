import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const domNode = document.getElementById('root');
render(<BrowserRouter>
    <ErrorBoundary>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </ErrorBoundary>
       </BrowserRouter>, domNode);
