import { render, fireEvent, screen } from '@testing-library/react';
import Form from './comps/Form';

test('Category Change Test', () => {
    render(<Form />);

    const categorySelect = screen.getByLabelText('الفئة');

    fireEvent.change(categorySelect, { target: { value: '1' } });

    expect(categorySelect.value).toBe('1');
});
