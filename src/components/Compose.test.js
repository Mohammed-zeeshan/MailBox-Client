import { render, screen } from "@testing-library/react"
import Compose from "./Compose";
describe('Compose testing', () => {
    test('renders To as a text', () => {
        render(<Compose />)

        const textElement = screen.getByText('To');
        expect(textElement).toBeInTheDocument();
    })
    test('renders send button as a text', () => {
        render(<Compose />)

        const textElement = screen.getByText('send');
        expect(textElement).toBeInTheDocument();
    })
    test('renders Subject as a placeholder', () => {
        render(<Compose />)

        const textElement = screen.getByText('Subject');
        expect(textElement).toBeInTheDocument();
    })
    test('renders Compose email as a placeholder', () => {
        render(<Compose />)

        const textElement = screen.getByText('Compose email');
        expect(textElement).toBeInTheDocument();
    })
    test('renders label as a text', () => {
        render(<Compose />)

        const textElement = screen.getByText('label');
        expect(textElement).toBeInTheDocument();
    })
})