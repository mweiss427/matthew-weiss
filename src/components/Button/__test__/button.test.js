import React from 'react';
import Button from './../button';
import {render, screen} from '@testing-library/react';

describe('Button', ()=> {
    const text = "Click Me"
    render(<Button label={text}></Button>)
    const button = screen.getByLabelText('myButton')

    it("Button renders correctly", () => {
        
        expect(button).toBeInTheDocument()
    })

    it("Label Displays", ()=>{
        expect(button).toHaveTextContent("Click Me")
    })
});

