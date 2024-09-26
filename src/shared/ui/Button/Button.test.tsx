import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'
describe('Button', () => {
    test('test 1', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText("TEST")).toBeInTheDocument()
    })

    test('test 2', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        const elem = screen.getByText("TEST")
        expect(elem).toHaveClass('clear');
    })
})