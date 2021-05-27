import Piece from './index.svelte';
import { render } from '@testing-library/svelte'

describe('Sample', () => {
    it('renders without failing', () => {
        const { container, getAllByText } = render(Piece)

        expect(getAllByText('Hello World!').length).toBe(1)
        expect(container).toMatchSnapshot()
    });
});