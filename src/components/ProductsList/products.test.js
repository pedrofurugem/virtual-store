import React from 'react';
import { render } from '@testing-library/react'
import { Products } from './productsList'

describe('Products Component', () => {
    it('renders without crashing ', ()=> {
        render(<Products />)
    });

})
