import * as React from "react";
import {Name} from "./Name";
import { render } from '@testing-library/react';

describe("Name component", () => {
    it("returns the name passed as props", () => {
        const { getByText } = render(<Name name="test" />);
        expect(getByText('testtest')).toBeTruthy();
    });
});