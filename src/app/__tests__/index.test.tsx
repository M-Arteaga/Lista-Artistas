import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import Index from '../index';

// Mock Alert
jest.spyOn(Alert, 'alert');

describe('Index (Login Screen)', () => {
    it('muestra los campos de correo y contraseña', () => {
        const { getByPlaceholderText } = render(<Index />);
        expect(getByPlaceholderText('Correo')).toBeTruthy();
        expect(getByPlaceholderText('Contraseña')).toBeTruthy();
    });

    it('muestra una alerta si los campos están vacíos', () => {
        const { getByText } = render(<Index />);
        fireEvent.press(getByText('Aceptar'));
        expect(Alert.alert).toHaveBeenCalled();
    });
});