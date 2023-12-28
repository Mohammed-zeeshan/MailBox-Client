import { render, screen } from "@testing-library/react"
import Inbox from "./Inbox";
describe('Inbox testing', () => {
    test('renders To as a text', () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{from: 'mz360844@gmail.com', subject: 'Hello', mail: 'Hello World', to: 'mohammedzeeshan440@gmail.com'}]
        })
        render(<Inbox />)

        const textElement = screen.findAllByRole('to');
        expect(textElement).not.toHaveLength();
    })
    test('renders To as a text', () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{from: 'mz360844@gmail.com', subject: 'Hello', mail: 'Hello World', to: 'mohammedzeeshan440@gmail.com'}]
        })
        render(<Inbox />)

        const textElement = screen.findAllByRole('to');
        expect(textElement).not.toHaveLength();
    })
    test('renders from as a text', () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{from: 'mz360844@gmail.com', subject: 'Hello', mail: 'Hello World', to: 'mohammedzeeshan440@gmail.com'}]
        })
        render(<Inbox />)

        const textElement = screen.findAllByRole('from');
        expect(textElement).not.toHaveLength();
    })
    test('renders subject as a text', () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{from: 'mz360844@gmail.com', subject: 'Hello', mail: 'Hello World', to: 'mohammedzeeshan440@gmail.com'}]
        })
        render(<Inbox />)

        const textElement = screen.findAllByRole('subject');
        expect(textElement).not.toHaveLength();
    })
    test('renders mail as a text', () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{from: 'mz360844@gmail.com', subject: 'Hello', mail: 'Hello World', to: 'mohammedzeeshan440@gmail.com'}]
        })
        render(<Inbox />)

        const textElement = screen.findAllByRole('mail');
        expect(textElement).not.toHaveLength();
    })
    test('renders label as a text', () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{from: 'mz360844@gmail.com', subject: 'Hello', mail: 'Hello World', to: 'mohammedzeeshan440@gmail.com'}]
        })
        render(<Inbox />)

        const textElement = screen.findAllByRole('label');
        expect(textElement).not.toHaveLength();
    })
})