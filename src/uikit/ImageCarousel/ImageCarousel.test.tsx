import React from 'react';

/**
 * @requires TestingLbrary
 */
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

/**
 * @requires Components
 */
import {Example} from './ImageCarousel.stories';

/**
 * @global
 */
beforeAll(() => {

});
afterEach(() => {
    
});
afterAll(() => {

});

/**
 * @tests
 */
describe('ImageCarousel', async () => {

    it('should render', async ()=>{

        /**
         * @arrange
         */
        render(<>
            <Example {...Example.args} />
        </>);

        /**
         * @act
         */

        /**
         * @assert
         */
        //expect(screen.getByRole('button')).toHaveTextContent('Primary');
    });

});
