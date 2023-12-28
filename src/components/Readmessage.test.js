import { render, screen } from "@testing-library/react";
import Readmessage from "./Readmessage";

describe('read message testing', () => {
    // test('renders p as a text', () => {
    //     render(<Readmessage />)

    //     const textElement = screen.findByRole('p');
    //     expect(textElement).toBeInTheDocument();
    // })
    // test('renders div as a text', () => {
    //     render(<Readmessage />)

    //     const textElement = screen.findByRole('div');
    //     expect(textElement).toBeInTheDocument();
    // })
    // test('renders h1 as a text', () => {
    //     render(<Readmessage />)

    //     const textElement = screen.findByRole('h1');
    //     expect(textElement).toBeInTheDocument();
    // })
    test('render delete as a text', () => {
        render(<Readmessage />);

        const textElement = screen.getByText('Delete');
        expect(textElement).toBeInTheDocument();
    })
    test('render button as a role', () => {
        render(<Readmessage />);

        const textElement = screen.getByRole('Delete');
        expect(textElement).toBeInTheDocument();
    })
})